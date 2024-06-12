import '../../src/App.css'
import React from 'react'

const faqItems = [
    {
        id: 'faq_play',
        question: 'How to play?',
        answer: (
            <>
                <p>Play in 3 simple steps:</p>
                <ul className="m-0">
                    <li>1. Download the APK from our website.</li>
                    <li>2. Register yourself.</li>
                    <li>3. Start playing instantly. Register now!</li>
                </ul>
            </>
        ),
    },
    {
        id: 'faq_one',
        question: 'Is Bazigar legal?',
        answer: 'Bazigar is a skill-based online gaming platform which means excluded from the definition and purview of “gambling” under applicable Indian laws. Hence, playing and winning cash on Bazigar is legal, secure, and a whole lot of fun too!',
    },
    {
        id: 'faq_two',
        question: 'Is my money safe in Bazigar?',
        answer: 'Absolutely. The Bazigar Wallet is 100% safe, secure, and encrypted which allows one-click bank account transfers.',
    },
    {
        id: 'faq_three',
        question: 'Can I play games for free?',
        answer: 'Yes, however, if you want to participate in Bazigar tournaments in real-time with real players, Bazigar facilitates tournament entries at a minimal cost.',
    },
    {
        id: 'faq_four',
        question: 'How much does a tournament cost?',
        answer: 'Although, every tournament costs differently, but for some games you can get started with just ₹10.',
    },
    {
        id: 'faq_five',
        question: 'How can I withdraw the game reward money?',
        answer: 'Go to your Bazigar Wallet and click on ‘Withdraw’.',
    },
    {
        id: 'faq_six',
        question: 'What are the payment gateways I can use?',
        answer: 'Bazigar gateway methods are UPI, Debit Card, Credit Card, Wallet, Netbanking, etc.',
    },
    {
        id: 'faq_seven',
        question: 'Is there any minimum balance required to be kept in the wallet?',
        answer: 'No, there is no minimum balance required for a wallet.',
    },
    {
        id: 'faq_eight',
        question: 'Can I play & win money without adding any cash?',
        answer: 'Bazigar allows you to use the partial bonus amount while asking you to add a new amount to keep playing.',
    },
    {
        id: 'faq_nine',
        question: 'How can I contact the Bazigar support team?',
        answer: (
            <>
                You can connect with our team at
                <a href="mailto:care@bazigar.in" className="mail-add" style={{ cursor: "pointer" }}>
                    care@bazigar.in
                </a>
                along with '24/7 chat with us' service.
            </>
        ),
    },
];

function Accordion() {
    return (
        <div className="container spacing">
            <div className="section-title">
                <h2 className="text-start">Frequently Asked Questions</h2>
                <h3>Got a Question? We are here to answer!</h3>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="faq_inner">
                        <div className="accordion" id="faq_accordion">
                            {faqItems.map((item, index) => (
                                <div className="accordion-item mb-4" key={item.id}>
                                    <h2 className="accordion-header" id={item.id}>
                                        <button
                                            className="accordion-button py-4 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faqCollapse${index}`}
                                            aria-expanded="false"
                                            aria-controls={`faqCollapse${index}`}
                                        >
                                            <div className="faq_inner__text">{item.question}</div>
                                        </button>
                                    </h2>
                                    <div
                                        id={`faqCollapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={item.id}
                                        data-bs-parent="#faq_accordion"
                                    >
                                        <div className="accordion-body p-4">{item.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
