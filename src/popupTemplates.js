/* const appointmentTemplate = `
    <h3 class="popup__title"><strong>Get your appointment!</strong></h3>
    <p class="popup__text bold">Ready to uncover your path to success? Whether you're an individual searching for purpose or a company poised for greatness, it all begins with a free preliminary session at <span>Rise and Thrive.</span><br>Let's rise, thrive, and achieve greatness together.</p>
    <p class="popup__text">In order to book your preliminary session and meet each other, please send an email to <a href="mailto:#">riseandtrhive@whatever.com</a> specifying the following details:</p>
    <ul class="popup__list">
        <li class="list__element">Name</li>
        <li class="list__element">Email address</li>
        <li class="list__element">Phone number</li>
        <li class="list__element">Type of service required: individual or corporate </li>
        <li class="list__element">Expected topics or goals for the session</li>
    </ul>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`; */

const appointmentTemplate = `
    <h3 class="popup__title"><strong>Get your appointment!</strong></h3>
    <p class="popup__text bold">Ready to uncover your path to success? Whether you're an individual searching for purpose or a company poised for greatness, it all begins with a free preliminary session at <span>Rise and Thrive.</span><br>Let's rise, thrive, and achieve greatness together.</p>
    <p class="popup__text">In order to book your preliminary session and meet each other, please fill out the following form:</p>
    <form id="popup-form" action="http://localhost:3000/" class="form form__container flex-container--column flex-center" method="POST">
        <label for="name" class="form__label">Name</label>
        <input id="name" name="name" class="form__input" type="text" 
                placeholder="Please type your name..." tabindex="1" />

        <label for="email" class="form__label">Email</label>
        <input id="email" name="email" class="form__input" type="email" 
                placeholder="Please type your email address..." tabindex="2" />
            
        <label for="service" class="form__label">Type of service</label>
        <select id="service" name="service" class="form__select" tabindex="3" >
            <option value="0" disabled selected>Select one...</option>
            <option value="1">Individual</option>
            <option value="2">Company</option>
        </select>

        <input id="session" name="session" type="hidden" value="1" />

        <label for="phone" class="form__label">Phone number</label>
        <input id="phone" name="phone" class="form__input" type="text" 
                placeholder="Please type your contact phone..." tabindex="4" />
            
        <div class="form__alert form__alert--inactive">
            <p class="alert__msg"></p>
            <ul class="alert__list"></ul>
        </div>

        <button class="form__button cta-button cta-button--success disabled" type="submit" disabled>Process booking!</button>
    </form>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;

const individualPricingTemplate = `
    <h3 class="popup__title"><strong>Individuals (1:1 Sessions)</strong></h3>
    <ul class="popup__list popup__list--pricing">
        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Introductory Session</p>
            <p class="popup__text bold"><span>Price:</span> <span class="popup__ad">Free!</span></p>
            <p class="popup__text bold"><span>Duration:</span> 30 minutes</p>
        </li>

        <button class="cta-button appointment-btn positioned" data-link="./booking.html">Get your appointment!</button>

        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Single Session</p>
            <p class="popup__text bold"><span>Price:</span> $75 per session</p>
            <p class="popup__text bold"><span>Duration:</span> 60 minutes</p>
        </li>
        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Package of 5 Sessions</p>
            <p class="popup__text bold"><span>Price:</span> $330 ($66 per session - 5.7% discount rate)</p>
            <p class="popup__text bold"><span>Duration:</span> 60 minutes</p>
        </li>
        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Package of 10 Sessions</p>
            <p class="popup__text bold"><span>Price:</span> $630 ($63 per session 10% further discount rate)</p>
            <p class="popup__text bold"><span>Duration:</span> 60 minutes</p>
        </li>

        <button class="cta-button positioned" data-link="./booking.html#form-anchor">Book now!</button>
    </ul>
    <button id="student-offer" class="popup__disclaimer popup__ad popup__ad--clickable"><strong>Check out our special offer for students</button></p>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;

const corporatePricingTemplate = `
    <h3 class="popup__title"><strong>Companies</strong></h3>
    <ul class="popup__list popup__list--pricing">
        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Introductory Session</p>
            <p class="popup__text bold"><span>Price:</span> <span class="popup__ad">Free!</span></p>
        </li>

        <button class="cta-button appointment-btn positioned" data-link="./booking.html">Get your appointment!</button>

        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Initial Consultation</p>
            <p class="popup__text bold"><span>Price:</span> $750 (one-time fee)</p>
        </li>
        <li class="list__element list__element--pricing">
            <p class="popup__text popup__subtitle">Monthly Retainer for Ongoing Services</p>
            <p class="popup__text bold"><span>Price:</span> $850 per month for 3 months</p>
        </li>

        <button class="cta-button positioned" data-link="./booking.html">Book now!</button>
    </ul>
    <p class="popup__disclaimer popup__ad"><strong>Minimum 3-Month Commitment</strong></p>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;

const studentOfferTemplate = `
    <h3 class="popup__title"><strong>50% discount!</strong></h3>
    <p class="popup__text bold">At <span>Rise And Thrive</span>, we believe in the transformative power of mentorship and empowerment, especially during the early stages of your professional journey. We understand that beginnings can be challenging, but they are also the foundation for remarkable achievements.</p>

    <p class="popup__disclaimer popup__ad"><strong>That's why We Offer a 50% Discount to Students and < 1 Year Graduates</strong></p>
    <button class="cta-button margin-block20" data-link="./booking.html">Book now!</button>

    <p class="popup__text bold">Embarking on your career journey is a monumental step, and we want to stand by you as you navigate this exciting yet challenging phase. We are thrilled to announce a <span>50% discount</span> on all our mentoring packages for students and recent graduates with less than one year of professional experience.</p>

    <div class="popup__block">
        <p class="popup__text popup__subtitle">Our Motivation</p>
        <p class="popup__text bold">Beginnings are hard until they are easy.</p>
        <p class="popup__text">We understand the trials and tribulations that come with the initial steps in your career. It's a period of self-discovery, learning, and growth. Our mission is to empower and support you during this crucial time, providing the guidance and mentorship needed to turn challenges into opportunities.</p>
    </div>

    <div class="popup__block">
        <p class="popup__text popup__subtitle">Why This Matters</p>
        <ul class="popup__list">
            <li class="list__element popup__text bold"><span>Affordability:</span> We want to make our services accessible to every aspiring professional, regardless of financial constraints.</li>
            <li class="list__element popup__text bold"><span>Belief in Potential:</span> We deeply believe in your potential to achieve greatness, and we want to be a catalyst on your journey to success.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block">
        <p class="popup__text popup__subtitle">How We Empower</p>
        <ul class="popup__list">
            <li class="list__element popup__text bold"><span>Personalized Mentorship:</span> Our 1:1 sessions are tailored to address your unique challenges and aspirations.</li>
            <li class="list__element popup__text bold"><span>Guidance for Growth:</span> We provide the tools and strategies needed to turn early struggles into lasting achievements.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block">
        <p class="popup__text bold">By offering this discount, we aim to be a guiding force in your journey, helping you build a strong foundation for a thriving career. Remember, beginnings may be hard, but with the right support, they become the stepping stones to a brilliant future.</p>
        <button class="cta-button" data-link="./booking.html">Book now!</button>
    </div>

    <h4 class="popup__footnote"><strong>Ready to embark on this journey together?<br>Rise and Thrive - Empowering Your Beginning</strong></h4>
`;

const workModelTemplate = `
    <h3 class="popup__title"><strong>Corporate Work Model</strong></h3>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">1 - Initial Consultation: Understanding Your Needs</p>
        <p class="popup__text bold"><span>Objective:</span> In-depth discussion to comprehend the current state, challenges, and aspirations of your company.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">SWOT analysis tailored to your industry.</li>
            <li class="list__element popup__text">Detailed interviews with key stakeholders.</li>
            <li class="list__element popup__text">Review of current strategies and goals.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">2 - Value Proposition Identification: Defining Your True Worth</p>
        <p class="popup__text bold"><span>Objective:</span> Uncovering and articulating your company's unique value proposition to society.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">Market analysis to identify societal needs.</li>
            <li class="list__element popup__text">Evaluation of current corporate social responsibility (CSR) initiatives.</li>
            <li class="list__element popup__text">Alignment of values with the mission and goals of the company.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">3 - Team Analysis: Identifying Key Players</p>
        <p class="popup__text bold"><span>Objective:</span> Recognition of key individuals within your team with the potential to drive success.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">Individual assessments to identify strengths and growth areas.</li>
            <li class="list__element popup__text">Collaborative workshops to foster teamwork and communication.</li>
            <li class="list__element popup__text">Identification of potential leaders and contributors.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">4 - Elevator Pitch Enhancement: Crafting a Compelling Narrative</p>
        <p class="popup__text bold"><span>Objective:</span> Developing a clear and impactful elevator pitch that resonates both internally and externally.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">Workshops to refine messaging and communication skills.</li>
            <li class="list__element popup__text">Collaboration on creating a compelling company narrative.</li>
            <li class="list__element popup__text">Techniques for aligning internal and external messaging.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">5 - Empowerment Strategy Development: Tailoring Solutions for Success</p>
        <p class="popup__text bold"><span>Objective:</span> Crafting a comprehensive empowerment strategy for your team's success.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">Personalized coaching sessions for key players.</li>
            <li class="list__element popup__text">Implementation of empowerment initiatives for the entire team.</li>
            <li class="list__element popup__text">Continuous monitoring and adjustment of the strategy based on feedback and results.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">6 - Trust-Building Initiatives: Strengthening Relationships</p>
        <p class="popup__text bold"><span>Objective:</span> Fostering trust within the company and building long-lasting relationships.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">Transparent communication strategies.</li>
            <li class="list__element popup__text">Employee empowerment programs.</li>
            <li class="list__element popup__text">Continuous improvement mechanisms.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block align-left">
        <p class="popup__text popup__subtitle">7 - Ongoing Support: Navigating the Journey Together</p>
        <p class="popup__text bold"><span>Objective:</span> Providing continuous support as your company evolves and faces new challenges.</p>
        <p class="popup__text bold"><span>Activities:</span></p>
        <ul class="popup__list">
            <li class="list__element popup__text">Regular check-ins and progress assessments.</li>
            <li class="list__element popup__text">Adaptation of strategies based on changing industry landscapes.</li>
            <li class="list__element popup__text">Additional training or coaching sessions as needed.</li>
            </li>
        </ul>
    </div>

    <div class="popup__block">
        <p class="popup__text bold">This work model ensures a comprehensive and tailored approach to corporate empowerment, helping your company rise, thrive, and build lasting success. For more details or customization based on your specific needs, feel free to contact us.</p>
        <button class="cta-button" data-link="./booking.html">Book now!</button>
    </div>

    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;

const contactTemplate = `
    <h3 class="popup__title"><strong>Follow up!</strong></h3>
    <p class="popup__text bold">Ready to uncover your path to success? Then move on to the next stage and embark on a transformative journey with <span>Rise and Thrive</span>, where clarity meets purpose and success becomes a tangible reality.</p>
    
    <button class="cta-button" data-link="./booking.html">Book now!</button>
    
    <p class="popup__text popup__block">If otherwise you still have any questions or doubts about our services or just want to give us your feedback, please use any of the following channels to share your thoughts:</p>

    <div class="popup__block">
        <figure class="popup__figure">
            <a class="popup__socialLink" href="mailto:riseandtrhive@whatever.com">
                <img class="socialLink__icon" src="./public/icons/email-blue.svg" />
                <figcaption class="socialLink__caption"></figcaption>
            </a>
        </figure>

        <figure class="popup__figure">
            <a class="popup__socialLink" href="https://wa.me/34667231827" target="_blank">
                <img class="socialLink__icon" src="./public/icons/whatsapp-blue.svg" />
                <figcaption class="socialLink__caption"></figcaption>
            </a>
        </figure>

        <figure class="popup__figure">
            <a class="popup__socialLink" href="https://www.linkedin.com/company/you-rise-thrive/" target="_blank">
                <img class="socialLink__icon" src="./public/icons/linkedin-blue.svg" />
                <figcaption class="socialLink__caption"></figcaption>
            </a>
        </figure>

        <figure class="popup__figure">
            <a class="popup__socialLink" href="https://www.instagram.com/youriseandthrive/" target="_blank">
                <img class="socialLink__icon" src="./public/icons/instagram-blue.svg" />
                <figcaption class="socialLink__caption"></figcaption>
            </a>
        </figure>
    </div>

    <div class="popup__block">
        <p class="popup__text bold">Contact directly with our Success & Prosperity specialist, <span>Cristina</span>:</p>
        <a class="popup__text contact-detail" href="tel:+34667231827">+34 667 231 827</a>
        <a class="popup__text contact-detail" href="mailto:riseandtrhive@whatever.com">riseandtrhive@whatever.com</a>
    </div>

    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`
const subscribeTemplate = `
    <h3 class="popup__title"><strong>Keep yourself posted!</strong></h3>
    <p class="popup__text bold">Share your name and email in the fields below and keep yourself posted about the latest offers, news and updates at <span>Rise and Thrive</span>:</p>
    <form id="popup-form" action="http://localhost:3000/subscribe/" class="form subscribe-form form__container flex-container--column flex-center" method="POST">
        <label for="name" class="form__label">Name</label>
        <input id="name" name="name" class="form__input" type="text" 
                placeholder="Please type your name..." tabindex="1" />

        <label for="email" class="form__label">Email</label>
        <input id="email" name="email" class="form__input" type="email" 
                placeholder="Please type your email address..." tabindex="2" />
            
        <input id="service" name="service" type="hidden" value="1" />
        <input id="phone" name="phone" type="hidden" value="654954559" />
            
        <div class="form__alert form__alert--inactive">
            <p class="alert__msg"></p>
            <ul class="alert__list"></ul>
        </div>

        <button class="form__button cta-button cta-button--success disabled" type="submit" disabled>Subscribe!</button>
    </form>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;

const resourceTemplate = `
    <h3 class="popup__title"><strong>Access this incredible resource!</strong></h3>
    <p class="popup__text bold">Ready to uncover your path to success? Whether you're an individual searching for purpose or a company poised for greatness, it all begins with a free preliminary session at <span>Rise and Thrive.</span><br>Let's rise, thrive, and achieve greatness together.</p>
    <p class="popup__text">In order to book your preliminary session and meet each other, please fill out the following form:</p>
    <form id="popup-form" action="http://localhost:3000/access-resource/" class="form resource-form form__container flex-container--column flex-center" method="POST">
        <label for="name" class="form__label">Name</label>
        <input id="name" name="name" class="form__input" type="text" 
                placeholder="Please type your name..." tabindex="1" />

        <label for="email" class="form__label">Email</label>
        <input id="email" name="email" class="form__input" type="email" 
                placeholder="Please type your email address..." tabindex="2" />
            
        <input id="service" name="service" type="hidden" value="1" />
        <input id="phone" name="phone" type="hidden" value="654954559" />
            
        <div class="form__alert form__alert--inactive">
            <p class="alert__msg"></p>
            <ul class="alert__list"></ul>
        </div>

        <button class="form__button cta-button cta-button--success disabled" type="submit" disabled>See resource!</button>
    </form>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;

// Referrals templates

function loadReferral(referralId) {
    let referralName = document.querySelector(".popup__title");
    let referralContent = document.querySelector(".popup__text");

    switch(referralId) {
        case "1":
            referralName.innerHTML = "Itziar Coflent";
            referralContent.innerHTML = `
                "I had the immense luck to coincide with Cristina for about a year in my professional career, and it was then that I understood the difference between having a boss and having a leader. Cristina is the best leader and person I have ever known. She combines rationality and emotionality, offering resolute and efficient leadership with empathy and motivation.<br>
                <br>
                As the Brands Leader at Prat Brands, particularly at Greencut, Cristina was admired for her proactivity, decisiveness, and strategic thinking. She allowed for mistakes, working with individuals to teach and guide them in the improvement process. Beyond her analytical and efficient side, Cristina prioritized the well-being and unity of her team, creating a special bond among professionals from different areas.<br>
                <br>
                As a natural motivator and mentor, Cristina emphasized the importance of teamwork and shared successes. She instilled a sense of belonging in her team, making each member feel special and indispensable. Cristina's ability to see beyond what people show on the surface, coupled with her creativity and dreamer's spirit, made her a leader who influenced us to bring out our best.<br>
                <br>
                To this day, I have not encountered a leader like her, one who builds such a strong, united, and competent team that they no longer need her to continue achieving their goals. I wish her much success and happiness in everything life offers her."
            `;
            break;
        case "2":
            referralName.innerHTML = "Albert Martínez";
            referralContent.innerHTML = `
                "I learned a lot, both personally and in terms of teamwork. The key takeaway was to believe in myself, recognize my potential, and showcase it to the rest of the team. I overcame the fear of what others might think and gained confidence in myself and my work. Regarding teamwork, I learned to trust the team and, secondly, to identify individuals whose character and mindset drive a project forward.<br>
                <br>
                The journey of personal and professional growth began from the moment I received the first call to join your team. Initially, it was personal growth, identifying strengths, discovering preferences, and overcoming fears and mental barriers. From there, you guided me to enhance strengths and address weaknesses. This process led to professional evolution, aligning my profile within the team to contribute maximally. For me, it was like completing a master's degree, a revolution both personally and professionally, shaping me into the professional and person I am now."
            `;
            break;
        case "3":
            referralName.innerHTML = "Alba López";
            referralContent.innerHTML = `
                "I have learned to value my work and myself, to say no when something doesn't feel right or overwhelms me. I analyze situations to make informed decisions, listen to my colleagues' opinions, and assert my own when I believe it's right. I've become adept at working in a team while maintaining autonomy in decision-making. Celebrating small victories and progressing in what I believe in is now a joy. Ultimately, you've helped me shine and unleash my full potential. You've empowered me to trust myself, assert my decisions, stand up when needed, and say no when something doesn't align. You've made me believe in myself, feel more professional and a better person, and equipped me to analyze people and surround myself with those who contribute positively."
            `;
            break;
        case "4":
            referralName.innerHTML = "Juan José Estévez";
            referralContent.innerHTML = `
                "I crossed paths with Cristina, representing different companies in the e-commerce world, and if there's one thing I can highlight, it's her professionalism, ability to secure agreements, and tenacity in achieving goals. Thanks to her excellent work, we successfully expanded the brand I represented to various European countries, exponentially multiplying our business volume—all while maintaining a constant smile. She's a rare find, and having her on any team is truly appreciated. I would undoubtedly recommend having her as part of any team."
            `;
            break;
        case "5":
            referralName.innerHTML = "Maria Barberà";
            referralContent.innerHTML = `
                "I've had the great fortune of working alongside Cristina in my professional journey, and her energy and enthusiasm to drive any project forward are extraordinary. She possesses excellent organizational and managerial skills and, above all, is a natural leader. Cristina's leadership abilities motivate teams under her coordination in every task.<br>
                <br>
                She dedicates 200% to everything she does, injecting passion and motivation into her work. Cristina always finds ways to enhance any task or process, and her constant drive for improvement is infectious, positively influencing the entire team.<br>
                <br>
                For me, Cristina is a role model in the professional realm, excelling not only in her daily tasks but also radiating positive energy to those around her. She empowers everyone working with her to improve in all aspects of their work."
            `;
            break;
        case "6":
            referralName.innerHTML = "Lídia Vives";
            referralContent.innerHTML = `
                "I've had the immense fortune of knowing Cristina and working with her for almost 4 years at Prat Brands. Her extraordinary ability to prioritize the happiness and well-being of those around her stands out. Cristina's instinct for identifying opportunities and her business development skills, spanning customer service to sales, marketing, and logistics, have been instrumental in the company's growth.<br>
                <br>
                Her empathy, leadership, and willingness to assist in any capacity have cultivated an autonomous and united team, poised to be a driving force for the company in the years to come. Any team fortunate enough to have her will undoubtedly experience great success."
            `;
            break;
        case "7":
            referralName.innerHTML = "Jessica Gavaldà";
            referralContent.innerHTML = `
                “Passionate, unstoppable, empathetic, fully committed— a true #superwoman who empowers the team! Over the past few months, I've had the great fortune of having Cristina Solé closer, guiding and training me within Prat Brands to lead one of our brands. The experience has been incredibly rewarding. I feel fortunate to have shared this journey with her. Working alongside her is a pleasure, and I am truly grateful 💚.<br>
                <br>
                Everything she does and says comes from the heart, and it shows. Her level of performance is exceptionally high. Cristina is a fundamental pillar within the team, empowering everyone around her. She contributes and infuses her energy, which reflects in the individual and team results. With colleagues like her, you can achieve incredible things."
            `;
            break;
    }
}

const referralTemplate = `
    <h3 class="popup__title"><strong></strong></h3>
    <p class="popup__text italic-text"></p>
    <h4 class="popup__footnote"><strong>Your journey to success starts here<br>Rise And Thrive - Where Potential Becomes Power</strong></h4>
`;