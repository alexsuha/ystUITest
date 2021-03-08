import React from 'react';
import Footer from '../../components/Footer';
import $ from 'jquery';

const Terms = () => {

    const tabActive = [ true, false ];

    const handleTabChange = (e) => {
        for (let i = 0; i < 2; ++i)
        {
            tabActive[i] = false;
        }
        tabActive[e] = true;
        for (let i = 0; i < 2; ++i)
        {
            if (tabActive[i])
            {
                $(`#tab${i+1}`).removeClass("js-tab-hidden");
                $(`#tab${i+1}`).addClass("active");
                $(`#t${i+1}`).addClass("active");
            }
            else 
            {
                $(`#tab${i+1}`).removeClass("active");
                $(`#tab${i+1}`).addClass("js-tab-hidden");
                $(`#t${i+1}`).removeClass("active");
            }
        }
    }

    window.scrollTo(0, 0);

    return (
        <>
        <main class="main">
			<div class="terms-banner">
				<img src={require(`../../static/img23.png`)} alt="image-description"/>
			</div>
			<div class="terms-section">
				<div class="container">
					<h1>Terms of Service</h1>
					<div class="terms-tab-area">
						<ul class="tabset">
                            <li id="t1" class="active">
                                <a onClick={() => {handleTabChange(0)}}>Terms</a>
                            </li>
                            <li id="t2">
                                <a onClick={() => {handleTabChange(1)}}>Privacy</a>
                            </li>
						</ul>
						<div class="tab-content">
                            <div id="tab1" class="active">
								<div class="text-section">
									<p>BY USING THE CARNEX WEBSITE LOCATED AT www.carnex.ca (THE “WEBSITE”) AND/OR USING THE FEATURES OF ANY CARNEX APP THAT WE MAKE AVAILABLE (the “APP”) YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE (“TERMS”). THESE TERMS APPLY TO ALL USERS OF THE WEBSITE, APP AND SERVICES (as that term is defined below), INCLUDING INDIVIDUALS AND ENTITIES WHO REGISTER FOR THE SERVICES, INDIVIDUALS AND ENTITIES WHO USE THE SERVICES AND INDIVIDUALS WHO VISIT THE WEBSITE (COLLECTIVELY, “USERS”). IF YOU DO NOT AGREE WITH THESE TERMS, DO NOT USE THE WEBSITE, THE APP OR SERVICES.</p>
									<p>CARNEX, doing business as CARNEX, (“CARNEX”, “We” or “Us”) is the owner and operator of the Website and the App. The Carnex Website and App allows users to browse and search for vehicles, get pre-approved for financing, and then test drive vehicles at a location of their choosing with no sales pressure, along with related services (together, the “Services”). </p>
									<div class="list-wrap">
										<div class="list-area">
											<strong class="title">ELIGIBILITY</strong>
											<div class="list-holder">
												<p>Use of Services. The Website, App and Services are intended solely for persons who are 18 or older and who are residents of Canada. Any access to or use of the Website, App or Services by anyone under 18 is expressly prohibited. By accessing or using the Website, App or Services you represent and warrant that you are 18 or older.</p>
												<p> Valid License. You must have a valid driver’s license in order to schedule a vehicle test drive. By scheduling a test drive through the Carnex platform, you represent and warrant that you are licensed to drive in your jurisdiction of residence.</p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title">SERVICES</strong>
											<div class="list-holder">
												<p> Test Drives. Users may use the Website and App to schedule a test drive for a Carnex vehicle available in their geographic location. Upon confirmation of the test drive appointment, a Carnex advisor will meet the User at the scheduled time and location.</p>
												<p> Financing. Users have the option of applying for vehicle financing through our partner Dealertrack Canada, Inc. By using the RouteOne portal you agree to be bound by the RouteOne terms of service and privacy policy. You further agree that Carnex has no control over whether your financing is approved.</p>
												<p>Vehicle Inventory. Carnex reserves the right to limit quantities of vehicles available for sale or sold. All features, specifications, products and prices of products and services described on the Carnex Website or App are subject to change at any time without notice. We make no representation as to the completeness, accuracy, or currency of any information on this Website or App. We reserve the right to make changes in information about price, description, or availability without notice. We have made every effort to display as accurately as possible the colours of products that appear on the Website and App; however, the actual colour you will see will depend on your computer, and we cannot guarantee that your computer will accurately display our colours. The inclusion of any products or services on the Website and App does not imply or warrant that these products or services will be available over at any particular time.</p>
												<p> Vehicle Purchases. Advertisements of vehicles for sale on our Website and App are invitations to Users to make offers to purchase such products and are not offers to sell. A properly completed and submitted bill of sale constitutes your offer to purchase any vehicle. An offer is deemed to be accepted once the bill of sale is signed by Carnex. All aspects of the transaction will be completed through the RouteOne platform. You agree that the vehicle purchase documentation, including bill of sale, shall govern any vehicle purchase and/or trade-in. By purchasing a vehicle from Carnex you agree to comply with all applicable laws and regulations in respect of vehicle purchases in your jurisdiction, including any licensing and/or insurance requirements.</p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title"> LICENSE AND RESTRICTIONS ON USE</strong>
											<div class="list-holder">
												<p> License. Subject to your compliance with these Terms, Carnex grants you a non-transferable, non-exclusive, license to (a) access and use the Website and the Services for your use, and (b) download, install and use one copy of the App on a mobile device that you own or control for your use (the “License”). The App is licensed to you and not sold. Nothing in the Terms gives you a right to use the Carnex names, trademarks, logos, domain names, and other distinctive brand features without our prior written consent. You shall not attempt to override or circumvent any of the usage rules or restrictions on the Website, App or Services. Any future release, update, or other addition to functionality of the Website or App shall be subject to these Terms.</p>
												<p> Restrictions. Carnex may impose certain limitations on the use of the Website, App or Services, including, but not limited to restricting the number of test drives you may schedule and/or imposing charges for certain features of the Services. You agree to use the Carnex Website and the Services only for purposes as permitted by these Terms. Carnex reserves the right to modify or impose any limitations on the use of the Carnex Website, App and the Services at any time, with or without notice to you. We also reserve the right at all times (but will have no obligation) to terminate Users at any time without any liability whatsoever to you. In using the Carnex Website and/or the Services you shall not:</p>
												<ul class="list-simple">
													<li>intentionally or unintentionally violate any these Terms, or any local, state, provincial national or international law or regulation, including without limitation using the capabilities of the Services to transmit any unlawful content, to harass or intimidate others, to spam third parties or to impersonate anyone else;</li>
													<li>license, sell, rent, lease, transfer, assign or otherwise commercially exploit the Carnex Website, App or the Services</li>
													<ul class="sub-list">
														<li>upload, post, email, transmit or otherwise make available any material that:</li>
														<li>is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, pornographic, libelous, invasive of another's privacy, hateful, or racially or ethnically objectionable, encourages criminal behavior, gives rise to civil liability, violates any law, or is otherwise objectionable;</li>
														<li>You do not have a right to make available under any law or under a contractual relationship;</li>
														<li>infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party (including privacy rights);</li>
														<li>is or contains unsolicited or unauthorized advertising, solicitations for business, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation; </li>
														<li>designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment or data or the Website or that of any users or viewers of the Website or that compromises a user’s privacy; or</li>
														<li>contains any falsehoods or misrepresentations or create an impression that You know is incorrect, misleading, or deceptive, or any material that could damage or harm minors in any way;</li>
													</ul>
													<li>modify, translate, make derivative works of, disassemble, decompile, reverse compile or reverse engineer any part of the Carnex Website, App or any software provided by us.</li>
												</ul>
												<p> Indemnification. You agree to defend, indemnify and hold Carnex, its affiliates, subsidiaries, directors, officers, employees, agents, partners and licensors harmless from any claim or demand, including reasonable legal fees, made by a third party, relating to or arising from: (a) any User Content you create, submit, post, transmit, or otherwise make available through the Website, App or Services; (b) your use of the Website, App or Services; (c) any dealings between you and any persons whom you send or otherwise transmit links or any content to using the Service, including without limitation claims relating to misrepresentation; (d) any violation by you of these Terms; (e) your violation of any rights of another; or (f) your negligence or willful misconduct, including during a test drive. This obligation shall survive the termination or expiration of these Terms and/or your use of the Services.</p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title">USER DATA AND CONTENT</strong>
											<div class="list-holder">
												<p>Personal Information. Carnex collects, uses and discloses certain personal information in accordance with the terms of our Privacy Policy, which is hereby incorporated by reference into these Terms. Please review our Privacy Policy carefully. If you do not agree with any of our privacy practices you must not use the Website, App, or Services.</p>
												<p> License to Carnex. Except for material We may license to you, Carnex does not claim ownership of the materials and/or content created, uploaded or otherwise transmitted by you through use of the Carnex Website, including but not limited to data and comments (“User Content”) However, by using the Website, App and/or Services, you grant Carnex a worldwide, royalty-free, non-exclusive license to collect, use, reproduce, store, display and sublicense such User Content for the purpose of providing the Website, App and Services.</p>
												<p> Feedback. We welcome your suggestions, comments and feedback on the Carnex Website, App and the Services (“Feedback”) as it helps Us to improve. If you provide Us with Feedback you agree that: (a) We are not subject to any confidentiality obligations in respect to the Feedback; (b) the Feedback is not confidential or proprietary information belonging to you or any third party and you have all of the necessary rights to disclose the Feedback to us; (c) Carnex (including all of its successors and assigns) may freely use Feedback without any restrictions; and (d) you are not entitled to receive any compensation or reimbursement of any kind.</p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title"> TERM AND TERMINATION</strong>
											<div class="list-holder">
												<p>Termination by You. You may terminate your account and/or stop using the Services at any time.</p>
												<p> Termination by Carnex. Carnex may at any time and for any reason or no reason, without prior notice, immediately suspend all or a portion of your Account and/or access to the Website, App or Services. Cause for such termination shall include, but not be limited to: (a) violations of the Terms or any other policies or guidelines that are referenced herein and/or posted on the Website, App or through the Services; (b) a request by you to cancel or terminate your account; (c) discontinuance or material modification to the Services or any part thereof; (d) a request and/or order from law enforcement, a judicial body, or other government agency; (e) where provision of the Carnex Website, App or the Services to you is or may become unlawful; (f) unexpected technical or security issues or problems; (g) your participation in fraudulent or illegal activities; or (h) any abuse of the Services. Any such termination or suspension shall be made by Carnex in its sole discretion, and Carnex will not be responsible to you or any third party for any damages that may result or arise out of such termination or suspension of your Account and/or access to the Services.</p>
												<p> Effect of Termination. On termination, you will lose all access to the Services and any portions thereof.</p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title">IMPORTANT DISCLAIMERS</strong>
											<div class="list-holder">
												<p>Advertising and Third Party Links. You acknowledge and agree that the Website may contain advertisements from third parties. If you elect to have any business dealings with anyone whose products or services may be advertised on the Website, You acknowledge and agree that such dealings are solely between you and such advertiser and you further acknowledge and agree that Carnex shall not have any responsibility or liability for any losses or damages that you may incur as a result of any such dealings. The Website and App may contain links to other websites that are not owned or controlled by Carnex. In no event shall any reference to any third party, advertisement, third-party product or service be construed as an approval or endorsement by Carnex of that third party, third-party product or service. Carnex is also not responsible for the content of any linked websites. Any third-party websites or services accessed from the Website or App are subject to the terms and conditions of those websites and or services and you are responsible for determining those terms and conditions and complying with them. The presence on the Website or App of a link to any other website(s) or any advertisements does not imply that Carnex endorses or accepts any responsibility for the content or use of such websites, and you hereby release Carnex from all liability and/damages that may arise from your use of such websites or receipt of services from any such websites.</p>
												<p>ASSUMPTION OF RISK. You agree that driving a vehicle involves many obvious and not-so-obvious risks, dangers, and hazards, which may result in injury or death to you or others people, as well as damage to property, and that such risks, dangers, and hazards cannot always be predicted or avoided. YOU AGREE THAT SUCH RISKS, DANGERS, AND HAZARDS ARE YOUR SOLE RESPONSIBILITY AND YOU WILL BE LIABLE FOR ALL RESULTING INJURIES, DAMAGES, CLAIMS AND ANY RELATED COSTS. IF YOU TEST DRIVE A CARNEX VEHICLE, YOU ASSUME ALL RESPONSIBILITY FOR ANY INJURY OR DAMAGE TO ANY THIRD PARTY OR PROPERTY.</p>
												<p>GENERAL. THE WEBSITE, SERVICES AND APP ARE PROVIDED "AS IS" AND ON AN “AS AVAILABLE” BASIS. CARNEX SPECIFICALLY DISCLAIMS ALL REPRESENTATIONS, WARRANTIES AND CONDITIONS OF ANY KIND RELATING TO THE CARNEX WEBSITE, APP AND THE SERVICES INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY OR MERCHANTABLE QUALITY, SATISFACTORY QUALITY OR FITNESS FOR A PARTICULAR PURPOSE. </p>
												<p>ANY MATERIAL TRANSMITTED, STORED, ACCESSED OR OTHERWISE MAINTAINED THROUGH THE USE OF THE SERVICES IS DONE SO AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR LOSS OR CORRUPTION OF DATA THAT RESULTS FROM ANY SUCH USE OF THE WEBSITE, APP OR SERVICES. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM CARNEX OR THROUGH OR FROM THE SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS. </p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title">LIMITATION OF LIABILITY</strong>
											<div class="list-holder">
												<p> DISCLAIMER OF DAMAGES. UNDER NO CIRCUMSTANCES SHALL CARNEX BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, ANY DAMAGES THAT RESULT FROM (I) YOUR USE OF OR YOUR INABILITY TO USE THE CARNEX WEBSITE, APP OR THE SERVICES, (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS, DATA, INFORMATION OR SERVICES, (III) ERRORS, MISTAKES, OR INACCURACIES, (IV) PERSONAL INJURY OR PROPERTY DAMAGE OF ANY KIND WHATSOEVER ARISING FROM OR RELATING TO YOUR USE OF THE SERVICES, ANY BUGS, VIRUSES OR OTHER FILES OR DATA THAT MAY BE HARMFUL TO COMPUTER OR COMMUNICATION EQUIPMENT OR DATA THAT MAY HAVE BEEN TRANSMITTED TO OR THROUGH THE CARNEX WEBSITE, (V) ANY DEALINGS OR TRANSACTIONS BETWEEN YOU AND ANY PERSONS OR USERS WHOM YOU SEND OR TRANSMIT ANY USER CONTENT TO USING THE SERVICE, INCLUDING WITHOUT LIMITATION ANY PRODUCTS OR SERVICES OFFERED BY YOU TO SUCH PERSONS; or (IV) ANY PERSONAL INJURY OR DEATH ARISING FROM YOUR USE OF THE SERVICES, INCLUDING DURING A TEST DRIVE.</p>
												<p> LIABILITY CAP. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, CAARNEX’S LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THIS AGREEMENT (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO THE GREATER OF (A) FIFTY CANADIAN DOLLARS ($50 CAD) OR (B) AMOUNTS YOU’VE PAID CARNEX IN THE 12 MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM (IF ANY). THE FOREGOING LIMITATIONS SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY CARNEX APPLICABLE LAW.</p>
											</div>
										</div>
										<div class="list-area">
											<strong class="title"> GENERAL TERMS</strong>
											<div class="list-holder">
												<p> Export Control. Use of the Website, App or Services may be subject to the export and import laws of Canada, and other countries. You agree to comply with all applicable export and import laws and regulations. In particular, but without limitation, the Carnex Website may not be exported or re-exported (a) into any U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person’s List or Entity List. By using the Carnex Website or the Services, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use the Carnex Website or the Services for any purposes prohibited by United States or Canadian law, including, without limitation, the development, design, manufacture or production of missiles, nuclear, chemical or biological weapons.</p>
												<p>Notices. Carnex may provide you with notices regarding the Services, including changes to these Terms or Privacy Policy, by email or by postings on the Website, App and/or the Services.</p>
												<p> Governing Law & Disputes. This Agreement shall be governed by the laws in effect in the Province of Ontario, Canada. No choice of laws rules of any jurisdiction shall apply to this Agreement. The courts of the Province of Ontario shall have jurisdiction over any legal action or proceeding arising out of or relating to these Terms, the Carnex Website or the Services and you consent to the jurisdiction of such courts for any such action or proceeding. You waive all rights that you may have or that may hereafter arise to contest such jurisdiction of such courts. The parties waive any right to a jury trial with respect to any action brought in connection herewith. The application of the United Nations Convention on Contracts for the International Sale of Goods to this Agreement is expressly excluded. You agree that any claim or cause of action arising out of or related to these Terms or the use of the Services must be filed within one (1) year after the cause of action arose or be forever barred.</p>
												<p> Entire Agreement. These Terms (together with the Carnex Privacy Policy) constitute the entire agreement governing use of the Carnex Website, App and the Services and all related activities. We reserve the right to modify or change the Carnex Website, App and the Services at any time without notice or liability to you. These Terms shall not be modified except by a new posting of these Terms by Carnex. If any part of these Terms is held to be unlawful, void, or unenforceable, that part shall be deemed severed and shall not affect the validity and enforceability of the remaining provisions. Our failure to exercise or enforce any right or provision under these Terms shall not constitute a waiver of such right or provision. You may not assign any part of these Terms or any rights or licenses granted hereunder, whether voluntarily, by operation of law, or otherwise without our prior written consent. Carnex may assign these Terms for any reason without notice to you.</p>
												<p> Language. It is the express wish of the parties that this agreement and all related documents be drawn up in English. </p>
												<p>Questions/Contact. If you have any questions about these Terms or if you wish to receive any additional information, provide feedback or raise any concerns in relation to the Carnex Website, App or the Services, please contact Us at: support@carnex.ca.</p>
											</div>
										</div>
									</div>
									<p>Last Updated: January 6, 2021</p>
								</div>
							</div>
							<div id="tab2" class="js-tab-hidden">
								<div class="text-section">
									<p>Carnex, (“Carnex”, “We” or “Us”), is committed to protecting your privacy. We make available the Carnex website located at www.carnex.ca including all subpages and successor pages (together the “Website”), and the Carnex mobile applications (the “App”), together with our Services as further described in our Terms of Service (“Services”). This Privacy Policy describes how We collect, use and disclose information about our users through the Website and Services.</p>
									<div class="list-wrap">
										<div class="list-area">
											<strong class="title">Consent</strong>
											<p>By using the Website, the App or our Service, you consent to the use of your Personal Information as described in this Privacy Policy. Except as set forth in this Privacy Policy, your Personal Information (as defined below) will not be used for any other purpose without your consent. You may withdraw your consent to our processing of your Personal Information at any time. However, withdrawing consent may result in your inability to continue using the Website and/or the Services.</p>
											<p>“Personal Information” is any information about an identifiable individual, such as your name, telephone number, address, location, e-mail address, and phone number.</p>
										</div>
										<div class="list-area">
											<strong class="title">Collection of Personal Information</strong>
											<p>We aim to collect, use and disclose only Personal Information to enable to provide the Services, including processing purchase orders and delivering purchased goods, providing access to third-party financing institution, to maintain our customer/visitor lists, to respond to your inquiries or provide feedback, for identification and authentication purposes and for service improvement.</p>
											<p>At the time of collection, We will clearly identify the information being collected and the purposes for which it will be used. It is always your choice whether or not to provide Personal Information but if you choose not to provide certain requested Personal Information you may not be able to use certain features of the Website, App and Services.</p>
											<p>We collect Personal Information when you register, schedule a test drive, when you request an interest rate pre-qualification, during communications with you and/or when you make purchases through the Services, through user support, and/or by way of user surveys.</p>
										</div>
										<div class="list-area">
											<strong class="title">Use of Personal Information</strong>
											<p>We collect and use information for the following purposes:</p>
											<div class="list-simple">
												<ul class="sub-list">
													<li>Test Drives: To schedule a test drive with a Car Enthusiast you must provide certain Personal Information to us, including your full name, phone number, email address and trade-in vehicle information (if applicable). We will also collect the time and location of your test drive in order to have our Car Enthusiast come to you. We use your contact information to send you confirmation and reminder notifications for your scheduled test drive.</li>
													<li>Driver’s License Verification: Once you have requested a test drive, we will ask you to provide a copy of your driver’s license for the purpose of verifying your eligibility to drive and in order to satisfy our commercial insurance requirements. We will record your driver’s license number and retain your driver’s license information for 90 days following the test drive.</li>
													<li>Interest Rate Pre-Qualification: In order to assist us in determining whether you are pre-qualified to receive vehicle financing, we will collect credit reports. To collect credit reports, we will ask you to provide your name, date of birth and address via our finance application, which utilizes TransUnion's Application Programming Interface (API). This information will enable us to display an interest rate pre-qualification to you. By requesting an interest rate pre-qualification, you acknowledge that your information will be shared with TransUnion and their API.</li>
													<li>Financing Request: You have the option of applying for financing through our partner RouteOne LLC. The RouteOne portal is available on our Website; however, we do not collect any Personal Information you submit to RouteOne. RouteOne will request certain financial and employment information in order to determine your eligibility for financing. By using the RouteOne portal you agree to be bound by the RouteOne terms of service and privacy policy.</li>
													<li>Trade-In Vehicles: If you would like to trade in your current vehicle, you will be asked to provide certain information when you meet our Car Enthusiast for your test drive. In particular, you will need to provide the make, model, year, mileage, VIN, and any damage history for your vehicle. Carnex will also run a CarFax report and take photos of the vehicle. We collect this information to determine the value of your vehicle and whether it is eligible for trade in.</li>
													<li>Vehicle Sale: In order to complete any vehicle sale, we will collect your license plate number and insurance information to confirm that the vehicle is properly insured.</li>
													<li>Statistics: We also collect statistics about use of our Services, including how users interact with our website, App and Services. This information is used to monitor and improve the Services. This information will be kept confidential, however, aggregate statistics that do not personally identify an individual will be kept by Us and such aggregate statistics may be made available to third parties. </li>
													<li>System Logs & Cookies: We may use cookies to track content usage and traffic on the Website and/or Services. A cookie is a feature of your web browser that consists of a text file that is placed on your hard disk by a web server. The Website and Services may use cookies to help it compile aggregate statistics about usage of this Website and/or Services, such as how many users visit the Website and/or Services, how long users spend viewing the Website and/or Services, and what pages are viewed most often. This information is used to improve the content of the Website and/or Services. In addition, we use cookies to customize your browsing experience by displaying inventory previously viewed by you and pre-populating registration forms. You can set your browser to notify you when you are sent a cookie. This gives you the chance to decide whether or not to accept it. If you disable cookies, you may not be able to take advantage of all the features of the Website and/or Services. We do not link any of the information We use in cookies to any Personal Information submitted by you when you are on the Website and/or using the Services. Your IP address is reported by your web browser whenever you visit a page on the Website and/or access the Services. This information is recorded together with your registration information on our databases. </li>
												</ul>
											</div>
											<p>If We plan to use your Personal Information in the future for any other purposes not identified above, We will only do so after notifying you.</p>
										</div>
										<div class="list-area">
											<strong class="title">Disclosures & Transfers</strong>
											<p>Except in accordance with this Privacy Policy or as otherwise permitted or required by law, We will not disclose or transfer your Personal Information to other third parties without your permission.</p>
											<p>From time to time We may employ third parties to help Us improve or otherwise make available features on the Website, App and/or the Services, whether through the provision of maintenance services, database management, Web analytics or otherwise. Carnex may provide Personal Information collected from you, to its service providers as necessary to enable the service provider to perform its obligations to us. They will be subject to contractual restrictions prohibiting them from using or disclosing any Personal Information for any other purpose.</p>
											<p>We may disclose your Personal Information to third parties without your consent, where permitted or required by law, for example if We have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) our rights or property, other users, or anyone else (including the rights or property of anyone else) that could be harmed by such activities. We may disclose Personal Information when We believe in good faith that such disclosure is required by and/or in accordance with the law.</p>
											<p>We may also disclose your Personal Information in connection with a corporate re-organization, a merger or amalgamation with another entity, a sale of all or a substantial portion of our assets or stock, including any due diligence exercise carried out in relation to the same, provided that the information disclosed continues to be used for the purposes permitted by this Privacy Policy by the entity acquiring the information.</p>
										</div>
										<div class="list-area">
											<strong class="title">Security</strong>
											<p>The security of your Personal Information is important to us. We use commercially reasonable efforts to store and maintain your Personal Information in a secure environment. We take technical, contractual, administrative, and physical security steps designed to protect Personal Information that you provide to us. We have implemented procedures designed to limit the dissemination of your Personal Information to only such designated staff or other permitted persons or companies as are reasonably necessary to carry out the stated purposes We have communicated to you.</p>
											<p>Our servers are located in Canada and accordingly your Personal Information may be available to government agencies and/or law enforcement in those countries under a lawful order, irrespective of the safeguards We have put in place for the protection of your Personal Information. By using our Website, App and Services, you consent to the hosting of your Personal Information in Canada.</p>
										</div>
										<div class="list-area">
											<strong class="title">Retention</strong>
											<p>We will keep your Personal Information for as long as it remains necessary for the identified purpose or as required by law, which may extend beyond the termination of our relationship with you. We may retain certain data as necessary to prevent fraud or future abuse, or for legitimate business purposes, such as analysis of aggregated, Non-personal Information, Account recovery, or if required by law. All retained Personal Information will remain subject to the terms of this Privacy Policy. </p>
										</div>
										<div class="list-area">
											<strong class="title">Amendments to this Policy</strong>
											<p>We reserve the right to change this Privacy Policy at any time. If We decide to change this Privacy Policy in the future, We will post an appropriate notice on the Website or App. Unless stated otherwise, our current Privacy Policy applies to all Personal Information that We have about you. The date on which the latest update was made is indicated at the bottom of this document. We recommend that you print a copy of this Privacy Policy for your reference and revisit this policy from time to time to ensure you are aware of any changes. Your continued use of the Website and/or Services signifies your acceptance of any changes.</p>
										</div>
										<div class="list-area">
											<strong class="title">Access and Accuracy</strong>
											<p>You have the right to access the Personal Information We hold about you in order to verify the Personal Information We have collected in respect to you and to have a general account of our uses of that Personal Information. Upon receipt of your written request, We will provide you with a copy of your Personal Information although in certain limited circumstances, We may not be able to make all relevant Personal Information available to you, such as where that information also pertains to another individual or as otherwise required or permitted by law. In such circumstances We will provide reasons for the denial to you upon request. We will endeavor to deal with all requests for access and modifications in a timely manner.</p>
											<p>We will make every reasonable effort to keep your Personal Information accurate and up to date, and We will provide you with mechanisms to update, correct, delete or add to your Personal Information as appropriate. As appropriate, this amended Personal Information will be transmitted to those parties to which We are permitted to disclose your information. Having accurate Personal Information about you enables Us to give you the best possible service. You can help by keeping Us informed of any changes to your Personal Information. </p>
										</div>
										<div class="list-area">
											<strong class="title">Contact Us</strong>
											<p>If you would like to access your information, have any questions, concerns, comments or suggestions, or if you find any errors in our information about you, please contact our Privacy Officer via email at support@carnex.ca or Carnex, 125-1000 Dundas Street East, Mississauga, ON L4Y2B8.</p>
										</div>
									</div>
									<p>Last Updated: January 6, 2021</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
        <Footer />
        </>
    )
}

export default Terms
