import React from "react";
import Header from "../components/Header";
import { Terms } from "../components/Terms";
import { Link } from "react-router-dom";
import Policylayout from "../layouts/Policylayout";

export const Cookiepolicy = () => {
  return (
    <Policylayout>
      <div className="flex flex-col w-full  items-center">
        <div className="w-[95%] md:w-[90%]  lg:w-[80%]">
          <div className="flex justify-center gap-[30px] md:gap-[40px] lg:gap-[80px] my-[80px]">
            <div className="font-euclid hidden md:flex flex-col mt-[216px] text-[#000933] min-w-[100px] md:min-w-[200px] gap-[8px] leading-[24px]">
              <Link to="/legal/terms-of-use" className="text-[#00093366]">
                Terms of Service
              </Link>
              <Link className="text-[#00093366]" to="/legal/privacy-policy">
                Privacy Policy
              </Link>
              <Link
                className="text-[#000933] font-euclid500"
                to="/legal/cookie-policy"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="max-w-[500px] md:max-w-[720px]">
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
                  Cookie policy
                </h1>
                <p className="font-euclid text-[#00093366] text-2xl">
                  Last updated{" "}
                  <span className="text-[#000933] ">November 23,2023</span>
                </p>
              </div>
              <div className="flex flex-col mt-[80px] gap-[20px]">
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    1. Introduction
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    This cookie policy explains how Circumvent Limited ("the
                    Company," "we," or "us") uses cookies and similar
                    technologies when you visit our website. By using our
                    website, you agree to the use of cookies as described in
                    this policy.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    2. What are cookies?
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    Cookies are small text files that are stored on your device
                    when you visit a website. They serve various purposes,
                    including improving website functionality, providing a
                    personalized experience, and analyzing website performance.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    3. Types of cookies we use
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Essential cookies:
                      <span className="text-[#0009338a]">
                        &nbsp;These cookies are necessary for the basic
                        functionality of our website. They enable you to
                        navigate the site and use essential features. Analytical
                        cookies: We use analytical cookies to collect
                        information about how visitors interact with our
                        website. This helps us improve the website&apos;s
                        performance and user experience.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Functional cookies:
                      <span className="text-[#0009338a]">
                        &nbsp;These cookies enhance the functionality of our
                        website by remembering your preferences and choices.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Marketing cookies:
                      <span className="text-[#0009338a]">
                        &nbsp;With your consent, we may use marketing cookies to
                        deliver personalized advertisements and promotional
                        content based on your interests.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    4. How to manage cookies
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    Most web browsers allow you to control and manage cookies
                    through their settings. You can choose to block or delete
                    cookies, and you can set preferences for certain websites.
                    However, disabling cookies may impact the functionality of
                    our website.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    5. Third-party cookies
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    We may use third-party services that use cookies on our
                    website, such as analytics and advertising partners. These
                    third parties have their own privacy and cookie policies,
                    and we recommend reviewing them.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    6. Changes to cookie policy
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    We may update this cookie policy to reflect changes in our
                    practices or for other operational, legal, or regulatory
                    reasons. We will notify you of any significant changes and
                    update the "Last Updated" date at the top of the policy.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">8. Contact us</p>
                  <p className="text-[#0009338a] font-euclid500">
                    If you have any questions, concerns, or requests regarding
                    your personal information or this privacy policy, please
                    contact us at
                    <a
                      href="mailto:admin@circumventltd.co.uk."
                      className="text-[#0030FF]"
                    >
                      &nbsp;admin@circumventltd.co.uk.
                    </a>
                  </p>
                </div>
                <p className="text-[#0009338a] font-euclid500">
                  Thank you for choosing Circumvent Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Policylayout>
  );
};
