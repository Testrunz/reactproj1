import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import solution from "../../assets/solution.svg";
import about from "../../assets/about.mp4";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
    const onClickNavigateSignin = (event) => {
      event.preventDefault();
        navigate('/signin');
    };
    const onClickNavigateSignup = (event) => {
      event.preventDefault();
        navigate('/signin');
    };
  return (
    <div className={styles["home-container"]}>
      <Helmet>
        <title>Testrunz - Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div data-role="Header" className={styles["home-navbar-container"]}>
        <div className={styles["home-navbar"]}>
          <div className={styles["home-left-side"]}>
            <img alt="logo" src={logo} className={styles["home-image"]} />
          </div>
          <div className={styles["home-right-side"]}>
            <button onClick={(e)=>onClickNavigateSignin(e)} className={`Anchor button ${styles["home-cta-btn"]}`}>Login</button>
          </div>
        </div>
      </div>
      <div id="resources" className={styles["home-hero"]}>
        <div className={styles["home-content-container"]}>
          <div className={styles["home-hero-text"]}>
            <h1 className={`${styles["home-heading"]} Section-Heading`}>
              Digital experimentation
            </h1>
            <span className={`${styles["home-text"]} Section-Text`}>
              1. Accurate and reliable lab test provided here. <br />
              2. Students carry out experiments with predefined experiments.
              <br />
              3. Streamlines the experimentation and learning process. <br />
              4. Enables seamless collaboration between students and teachers.
              <br />
              5. Free up the students to focus on the insights. <br />
            </span>
            <button onClick={(e)=>onClickNavigateSignup(e)} className={`${styles["home-cta-btn1"]} Anchor button`}>START NOW</button>
          </div>
        </div>
      </div>
      <div id="inspiration" className={styles["home-features"]}>
        <div className={styles["home-heading-container"]}>
          <h2 className={`${styles["home-text01"]} Section-Heading`}>
            Which are the greatest things about Testrunz?
          </h2>
        </div>
        <div className={styles["home-cards-container"]}>
          <div className={styles["home-features-card"]}>
            <div className={styles["home-icon-container"]}>
              <svg viewBox="0 0 1024 1024" className={styles["home-icon04"]}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles["home-text-container"]}>
              <span className={`${styles["home-heading01"]} Card-Heading`}>
                Procedures Data
              </span>
              <span className={`${styles["home-text02"]} Card-Text`}>
                We have accumulated more than 500 procedures in our Database.
              </span>
            </div>
          </div>
          <div className={styles["home-features-card1"]}>
            <div className={styles["home-icon-container1"]}>
              <svg viewBox="0 0 1024 1024" className={styles["home-icon07"]}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles["home-text-container1"]}>
              <span className={`${styles["home-heading02"]} Card-Heading`}>
                Automated Calculation
              </span>
              <span className={`${styles["home-text03"]} Card-Text`}>
                Our app has calculation methods for each procedres.
              </span>
            </div>
          </div>
          <div className={styles["home-features-card2"]}>
            <div className={styles["home-icon-container2"]}>
              <svg viewBox="0 0 1024 1024" className={styles["home-icon10"]}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles["home-text-container2"]}>
              <span className={`${styles["home-heading03"]} Card-Heading`}>
                Run Experiment
              </span>
              <span className={`${styles["home-text04"]} Card-Text`}>
                You can run experiment anywhere and anytime.
              </span>
            </div>
          </div>
          <div className={styles["home-features-card3"]}>
            <div className={styles["home-icon-container3"]}>
              <svg viewBox="0 0 1024 1024" className={styles["home-icon13"]}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles["home-text-container3"]}>
              <span className={`${styles["home-heading04"]} Card-Heading`}>User friendly</span>
              <span className={`${styles["home-text05"]} Card-Text`}>
                We focus on user friendliness in our application.
              </span>
            </div>
          </div>
          <div className={styles["home-features-card4"]}>
            <div className={styles["home-icon-container4"]}>
              <svg viewBox="0 0 1024 1024" className={styles["home-icon16"]}>
                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
              </svg>
            </div>
            <div className={styles["home-text-container4"]}>
              <span className={`${styles["home-heading05"]} Card-Heading`}>Score System</span>
              <span className={`${styles["home-text06"]} Card-Text`}>
                Score is allocated to each experiment runs which is optional.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="process" className={styles["home-services"]}>
        <div className={styles["home-heading-container1"]}>
          <h1 className={`${styles["home-text08"]} Section-Heading`}>
            More things to explore
          </h1>
          <span className={`${styles["home-text09"]} Section-Text`}>
            A web based application that streamlines the experimentation
            workflow by digitising test steps, post processing of the test data
            and automatic report generation.
          </span>
        </div>
      </div>
      <div className={styles["home-section-separator"]}></div>
      <div id="ourstory" className={styles["home-our-story"]}>
        <div className={styles["home-heading-container3"]}>
          <h1 className={`${styles["home-text18"]} Section-Heading`}>
            Problems and Solutions
          </h1>
          <span className={`${styles["home-text19"]} Section-Text`}>
            Performing experiments is one of the most important way a student
            learns and acquies hands on knowledge in school and universities.
          </span>
        </div>
        <div className={styles["home-cards-container3"]}>
          <div className={styles["home-left-section"]}>
            <div className={styles["home-video-container"]}>
              <video controls autoPlay loop muted className={styles["home-video"]}>
                <source src={about} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className={styles["home-right-section"]}>
            <div className={styles["home-card"]}>
              <img alt="solution1" src={solution} className={styles["home-image2"]} />
              <div className={styles["home-content-container2"]}>
                <span className={`${styles["home-text24"]} SmallCard-Heading`}>
                  A web based application that streamlines the experimentation
                  workflow by digitising test steps, post processing of the test
                  data and automatic report generation. The Testrunz also
                  provides capability for the students and teachers to
                  collaborate in real time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["home-section-separator2"]}></div>
      <div className={styles["home-get-in-touch"]}>
        <h2 className={`${styles["home-text36"]} Section-Heading`}>Get in touch</h2>
        <div className={styles["home-content-container6"]}>
          <div className={styles["home-form-container"]}>
            <span className={`${styles["home-heading08"]} BigCard-Heading`}>
              Send us a message
            </span>
            <input
              type="text"
              required="true"
              placeholder="Name"
              className={`${styles["home-name5"]} input`}
            />
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className={`${styles["home-email"]} input`}
            />
            <textarea
              placeholder="Your Message"
              className={`${styles["home-message"]} textarea`}
            ></textarea>
            <button className={`${styles["home-cta-btn2"]} Anchor button`}>SEND</button>
          </div>
        </div>
      </div>
      <div className={styles["home-section-separator3"]}></div>
      <div className={styles["home-footer-container"]}>
        <div className={styles["home-footer"]}>
          <div className={styles["home-social-links"]}>
            <svg viewBox="0 0 950.8571428571428 1024" className={styles["home-icon60"]}>
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className={styles["home-icon62"]}>
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className={styles["home-icon64"]}>
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className={styles["home-copyright-container"]}>
            <svg viewBox="0 0 1024 1024" className={styles["home-icon66"]}>
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Learnytech 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
