<template>
    <div class="main-wrapper">
        <div class="main-content right-chat-active">
            <!-- Contact Us component -->
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <img src="./../../assets/img/contect.png" alt="Company Image" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <div class="card p-4">
                            <h2 class="mb-4">{{ companyInfo.companyName }}</h2>
                            <p class="mb-2">{{ companyInfo.address }}</p>
                            <p class="mb-2">Phone: {{ companyInfo.phoneNumber }}</p>

                            <div class="mt-4">
                                <h5>Contact Information</h5>
                                <ul class="list-unstyled">
                                    <li>Email: contect@infinitybrains.com</li>
                                    <!-- <li>Website: www.example.com</li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Contact Us component -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            companyInfo: {
                companyName: 'Redjinni Industries Private Limited',
                address: '604, Luxuria Business Hub, Nr. Vesu, Surat, Gujarat',
                phoneNumber: '+91 9173544779',
                // imageUrl: require('./../assets/img/contact.png')
            }
        };
    }
};
</script>

<style scoped>
/* Add any custom styles for your component here */

/* Example: Add a background color to the card */
.card {
    background-color: #f8f9fa;
}

/* Example: Style the list items */
ul.list-unstyled li {
    margin-bottom: 6px;
    color: #6c757d;
}
</style>
