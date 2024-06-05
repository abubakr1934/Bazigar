import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <>
    <div className="container">
        <div className="row g-3 row-cols-1 row-cols-md-3 justify-content-between">
            
            
            <div className="col col-md-auto col-lg-4">
                <div className="bazi-footer">
                    <div className="baz-footer-heading pb-4">
                        <span className="text-uppercase">LINKS</span>
                    </div>
                    <div className="bazi-footer-content d-md-flex justify-content-between">
                        <ul className="list-unstyled mb-0">
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/terms-and-conditions">Terms and Conditions</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/privacy-policy">Privacy Policy</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/legality">Legality</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/help-and-support">Help &amp; Support</a>
                            </li> 
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/bazigar-rules">Bazigar Rules</a>
                            </li>
                        </ul>
                        <ul className="list-unstyled mb-0">
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/version-release">Version Release</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/tds">GST Rules &amp; TDS Rules</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/tournament-rules">Tournament Rules</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" width="20" height="20" className="me-2"/>
                                <a href="https://bazigar.in/safe-and-secure">Safe And Secure</a>
                            </li>
                            <li className="pb-3 d-flex">
                                <img src="https://bazigar.in/assets/website/images/footer-icon.webp" alt="footer-icon" className="me-2"/>
                                <a href="https://bazigar.in/blogs">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
           
            <div className="col col-md-auto col-lg-auto">
                <div className="baz-footer-heading pb-2">
                    <span className="text-uppercase">Member of</span>
                </div> 
                <div className="bazi-footer-content">
                    
                    <img src="https://bazigar.in/assets/website/images/home-icons/egf.webp" alt="EGF" className="img-fluid rounded bg-white" width="120" height="100"/>                  
                    <img src="https://bazigar.in/assets/website/images/home-icons/iamai.webp" alt="IAMAI" className="img-fluid rounded bg-white" width="120" height="100"/>                  
                </div>
                <hr/>
                <div className="baz-footer-heading pb-2">
                    <span className="text-uppercase">Withdrawal from</span>
                </div> 
                <div className="bazi-footer-content mb-3">
                    <div className="row g-2 row-cols-2 row-cols-md-2 justify-content-start">
                        <div className="col-auto col-md-auto text-center">
                            <span className="fs-6">Bank Transfer</span>
                            <div> <img src="https://bazigar.in/assets/website/images/home-icons/bank-transfer.webp" alt="bank-transfer" className="img-fluid rounded" width="120" height="100"/>
                        </div></div>
                        <div className="col-auto col-md-auto text-center">
                            <span className="fs-6">UPI</span>
                            <div> <img src="https://bazigar.in/assets/website/images/home-icons/upi.webp" alt="UPI" className="img-fluid rounded" width="120" height="100"/>
                        </div> </div>
                       
                    </div>
                </div>
            </div>
            <div className="col col-md-auto col-lg-4">
                <div className="bazi-footer">
                    <div className="baz-footer-heading pb-2">
                        <span className="text-uppercase">Disclaimer</span>
                    </div>
                    <div className="bazi-footer-content">
                        <p className="disclaimerFooter">Bazigar, social gaming app in India, offers exhilarating games, accessible only to individuals above 18, it operates in states where skill-based online gaming is regulated. Despite taking a lot of measures the games are habit-forming or financially risky, please play responsibly.</p>
                        
                    </div>
                    
                    
                    

                    <div className="bazi-footer-content">
                        <ul className="social-network">
                            <li>
                                <a href="https://www.facebook.com/people/Bazigar/61551790234384/" target="_blank" className="icoFacebook">
                                <FaFacebook />
                                    <span className="tooltip">Facebook</span>
                                </a>
                            </li> 
                           
                            <li>
                                <a href="https://www.instagram.com/play_bazigar/" target="_blank" className="icoInstagram">
                                <AiFillInstagram />
                                    <span className="tooltip">Instagram</span>
                                </a>
                            </li> 
                            

                            <li>
                                <a href="https://www.youtube.com/@play_bazigar" target="_blank" className="icoYoutube">
                                <FaYoutube />
                                    <span className="tooltip">Youtube</span>
                                </a>
                            </li>

                           

                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 ">
    <p>© 2024 Company, Inc. All rights reserved.</p>
    
  </div>
  </>
  )
}

export default Footer;
