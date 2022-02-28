<template>
  <div>
    <Nav />
    <!-- <div style="  margin-top: 100px;">{{ wallet.total_amount }} Rs</div> -->
    <!-- <div class="bg-white mt-3 ">{{ message }}</div> -->
    <div v-if="isAmount">
      <div class="bg-white mt-3 p-4">
        <span class="text-primary font-weight-bolder">Total Balance</span><br />
        <div class="text-primary font-weight-bolder">
          <span>Rs.</span>
          <span class="font-xxl">{{ wallet.total_amount }}</span> Redeem
        </div>
      </div>
      <div class="transaction bg-primary rounded-lg text-white">
        <table class="table table-borderless text-white">
          <thead class="border-bottom">
            <tr>
              <td>Transaction</td>
              <td class="amount">Amount</td>
            </tr>
          </thead>

          <tbody class="">
            <tr>
              <td>Reedem</td>
              <td class="amount">500</td>
            </tr>
            <tr>
              <td>Add</td>
              <td class="amount">500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="isNotAmount">
      <div class="bg-white mt-3 p-4">
        <div class="text-primary font-weight-bolder">
          <span>Your wallet is Eempty</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Nav from "../components/Nav.vue";
import axios from "axios";
export default {
  name: "Wallet",
  components: { Nav },
  data() {
    return {
      wallet: "",
      message: "",
      isAmount: false,
      isNotAmount: false,
    };
  },
  mounted() {
    axios
      .get("my-wallet")

      .then((resp) => {
        console.log(resp.data.data);
        // this.wallet=resp.data.data;
        this.message = resp.data.message;
        this.wallet = resp.data.data;
        if (this.wallet) {
          this.isAmount = true;
        } else {
          this.isNotAmount = true;
        }
      });
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
div .transaction table .amount {
  text-align: end;
}
</style>
