<?php
    $payumoney = session()->get('payumoney');
    
    // test key

    $MERCHANT_KEY = "rjQUPktU";  
    $SALT = "e5iIg1jwi8";
    $PAYU_BASE_URL = "https://test.payu.in"; 

    // secure key live

    // $MERCHANT_KEY = "nxpvv9VZ"; 
    // $SALT = "3oFxUMtWG2"; 
    // $PAYU_BASE_URL = "https://secure.payu.in";
    

 
    $action = '';
    $txnid = substr(hash('sha256', mt_rand() . microtime()), 0, 20);
    $posted = array();
    $posted = array(
        'key' => $MERCHANT_KEY,
        'txnid' => $txnid,  
        'amount' => $payumoney['amount'],
        'productinfo' => $payumoney['productinfo'],
        'firstname' => $payumoney['firstname'],
        'email' => $payumoney['email'],
        'phone' => $payumoney['phone'],
        'discount' => $payumoney['discount'],
        'country' => $payumoney['country'],
        'state' => $payumoney['state'],
        'city' => $payumoney['city'],
        'surl' => route('subscribe-response'),
        'furl' => route('subscribe-cancel'),
        'service_provider' => 'payu_paisa',
    );

    if(empty($posted['txnid'])) {
        $txnid = substr(hash('sha256', mt_rand() . microtime()), 0, 20);
    } 
    else 
    {
        $txnid = $posted['txnid'];
    }
    
    $hash = '';
    $hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
    
    if(empty($posted['hash']) && sizeof($posted) > 0) {
        $hashVarsSeq = explode('|', $hashSequence);
        $hash_string = '';	
        foreach($hashVarsSeq as $hash_var) {
            $hash_string .= isset($posted[$hash_var]) ? $posted[$hash_var] : '';
            $hash_string .= '|';
        }
        $hash_string .= $SALT;

        $hash = strtolower(hash('sha512', $hash_string));
        $action = $PAYU_BASE_URL . '/_payment';
    } 
    elseif(!empty($posted['hash'])) 
    {
        $hash = $posted['hash'];
        $action = $PAYU_BASE_URL . '/_payment';
    }

    // $action = route('subscribe-response');

?>
<html>
  <head>
  <script>
    var hash = '<?php echo $hash ?>';
    function submitPayuForm() {
      if(hash == '') {
        return;
      }
      var payuForm = document.forms.payuForm;
           payuForm.submit();
    }
  </script>
  </head>
  <body onload="submitPayuForm()">
    Processing.....
        <form action="<?php echo $action; ?>" method="post" name="payuForm"><br />
            <input type="hidden" name="key" value="<?php echo $posted['key']; ?>" /><br />
            <input type="hidden" name="hash" value="<?php echo $hash ?>"/><br />
            <input type="hidden" name="txnid" value="<?php echo $txnid; ?>" /><br />
            <input type="hidden" name="amount" value="<?php echo $posted['amount']; ?>" /><br />
            <input type="hidden" name="discount" id="discount" value="<?php echo $posted['discount']; ?>" /><br />
            <input type="hidden" name="firstname" id="firstname" value="<?php echo $posted['firstname']; ?>" /><br />
            <input type="hidden" name="email" id="email" value="<?php echo $posted['email']; ?>" /><br />
            <input type="hidden" name="phone" id="phone" value="<?php echo $posted['phone']; ?>" /><br />
            <input type="hidden" name="productinfo" value="<?php echo $posted['productinfo']; ?>"><br />
            <input type="hidden" name="surl" value="<?php echo $posted['surl']; ?>" /><br />
            <input type="hidden" name="furl" value="<?php echo $posted['furl']; ?>" /><br />
            <input type="hidden" name="service_provider" value="payu_paisa"  /><br />
            <?php
            if(!$hash) { ?>
                <input type="submit" value="Submit" />
            <?php } ?>
        </form>
  </body>
</html>