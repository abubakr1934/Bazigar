import '../../src/App.css'
import React from 'react'

function Accordian() {
  return (
    <div class="container">
        <div class="section-title">
            <h2 class="text-start">Frequently Asked Questions</h2>
            <h3>Got a Question? We are here to answer!</h3>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="faq_inner">
                    <div class="accordion" id="faq_accordian">
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_play">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeplay" aria-expanded="false" aria-controls="faqCollaspeplay">
                                    <div class="faq_inner__text">
                                        How to play?
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeplay" class="accordion-collapse collapse" aria-labelledby="faq_play" data-bs-parent="#faq_accordian" >
                                <div class="accordion-body p-4">
                                    <p>Play in 3 simple steps:</p>
                                    <ul class="m-0">
                                        <li>1. Download the APK from our website.</li>
                                        <li>2. Register yourself.</li>
                                        <li>3. Start playing instantly. Register now!</li>
                                    </ul>              
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_one">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeOne" aria-expanded="false" aria-controls="faqCollaspeOne">
                                    <div class="faq_inner__text">
                                    Is Bazigar legal? 
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeOne" class="accordion-collapse collapse" aria-labelledby="faq_one" data-bs-parent="#faq_accordian" >
                                <div class="accordion-body p-4">
                                    Bazigar is a skill-based online gaming platform which means excluded from the definition and purview of “gambling” under applicable Indian laws. Hence, playing and winning cash on Bazigar is legal, secure, and a whole lot of fun too!
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_two">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeTwo" aria-expanded="false" aria-controls="faqCollaspeTwo">
                                    <div class="faq_inner__text">
                                    Is my money safe in Bazigar? 
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeTwo" class="accordion-collapse collapse" aria-labelledby="faq_two" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    Absolutely. The Bazigar Wallet is 100% safe, secure, and encrypted which allows one-click bank account transfers.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_three">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeThree" aria-expanded="false" aria-controls="faqCollaspeThree">
                                    <div class="faq_inner__text">
                                    Can I play games for free? 
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeThree" class="accordion-collapse collapse" aria-labelledby="faq_three" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    Yes, however, if you want to participate in Bazigar tournaments in real-time with real players, Bazigar facilitates tournament entries at a minimal cost. 
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_four">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeFour" aria-expanded="false" aria-controls="faqCollaspeFour">
                                    <div class="faq_inner__text">
                                    How much does a tournament cost? 
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeFour" class="accordion-collapse collapse" aria-labelledby="faq_four" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    Although, every tournament costs differently, but for some games you can get started with just ₹10.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_five">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeFive" aria-expanded="false" aria-controls="faqCollaspeFive">
                                    <div class="faq_inner__text">
                                    How can I withdraw the game reward money?
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeFive" class="accordion-collapse collapse" aria-labelledby="faq_five" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    Go to your Bazigar Wallet and click on ‘Withdraw’.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_six">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeSix" aria-expanded="false" aria-controls="faqCollaspeSix">
                                    <div class="faq_inner__text">
                                    What are the payment gateways I can use? 
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeSix" class="accordion-collapse collapse" aria-labelledby="faq_six" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    Bazigar gateway methods are UPI, Debit Card, Credit Card, Wallet, Netbanking, etc.
                                </div>
                            </div>
                        </div>                            
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_seven">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeSeven" aria-expanded="false" aria-controls="faqCollaspeSeven">
                                    <div class="faq_inner__text">
                                    Is there any minimum balance required to be kept in the wallet? 
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeSeven" class="accordion-collapse collapse" aria-labelledby="faq_seven" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    No, there is no minimum balance required for a wallet.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <h2 class="accordion-header" id="faq_eight">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeEight" aria-expanded="false" aria-controls="faqCollaspeEight">
                                    <div class="faq_inner__text">
                                    Can I play &amp; win money without adding any cash?
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeEight" class="accordion-collapse collapse" aria-labelledby="faq_eight" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    Bazigar allows you to use the partial bonus amount while asking you to add a new amount to keep playing. 
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq_nine">
                                <button class="accordion-button py-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollaspeNine" aria-expanded="false" aria-controls="faqCollaspeNine">
                                    <div class="faq_inner__text">
                                    How can I contact the Bazigar support team?
                                    </div>
                                </button>
                            </h2>
                            <div id="faqCollaspeNine" class="accordion-collapse collapse" aria-labelledby="faq_nine" data-bs-parent="#faq_accordian">
                                <div class="accordion-body p-4">
                                    You can connect with our team at<a href="mailto:care@bazigar.in" class="mail-add" contentEditable="false" style={{cursor: "pointer"}}> care@bazigar.in</a> along with '24/7 chat with us' service.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordian;

