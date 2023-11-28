import React from "react";
import Header from "../components/Header";
import { Terms } from "../components/Terms";
import { Link } from "react-router-dom";
import Policylayout from "../layouts/Policylayout";

export const Privacypolicy = () => {
  return (
    <Policylayout>
      <div className="flex flex-col w-full items-center">
        <div className="w-[95%] md:w-[90%] lg:w-[80%]">
          <div className="flex justify-center  gap-[30px] md:gap-[40px] lg:gap-[80px] my-[80px]">
            <div className="font-euclid hidden md:flex flex-col mt-[216px] text-[#000933] min-w-[100px] md:min-w-[200px] gap-[8px] leading-[24px]">
              <Link to="/legal/terms-of-use" className="text-[#00093366]">
                Terms of Service
              </Link>
              <Link
                className="text-[#000933] font-euclid500"
                to="/legal/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link className="text-[#00093366]" to="/legal/cookie-policy">
                Cookie Policy
              </Link>
            </div>
            <div className="max-w-[500px] md:max-w-[720px]">
              <div className="flex flex-col gap-[24px]">
                <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
                  Privacy policy
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
                    Circumvent Limited ("the Company," "we," or "us") is
                    committed to protecting the privacy and security of your
                    personal information. This privacy policy outlines the types
                    of information we collect, how we use and safeguard that
                    information, and your rights regarding your personal data.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    2. Information we collect
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Personal information:
                      <span className="text-[#0009338a]">
                        &nbsp;We may collect personal information such as names,
                        contact details, and job titles when you use our
                        services, sign up for newsletters, or contact us.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Usage data:
                      <span className="text-[#0009338a]">
                        &nbsp;We may collect information about how you interact
                        with our website and services, including IP addresses,
                        browser types, and pages viewed. Cookies: We use cookies
                        and similar technologies to enhance your experience on
                        our website. You can manage your cookie preferences
                        through your browser settings.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    3. How we use your information
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Service delivery:
                      <span className="text-[#0009338a]">
                        &nbsp;We use your information to provide and improve our
                        services, respond to inquiries, and communicate with
                        you.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Analytics:
                      <span className="text-[#0009338a]">
                        &nbsp;We may use analytics tools to analyze user trends
                        and improve the performance of our website and services.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Marketing:
                      <span className="text-[#0009338a]">
                        &nbsp;With your consent, we may send you promotional
                        materials and updates about our services. You can opt
                        out of these communications at any time.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    4. Information sharing
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this privacy policy or as required by law.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    5. Data security
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    We implement security measures to protect your personal
                    information from unauthorized access, disclosure,
                    alteration, and destruction. However, no data transmission
                    over the internet or electronic storage method is entirely
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    6. Your rights
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Access and correction:
                      <span className="text-[#0009338a]">
                        &nbsp;You have the right to access and correct your
                        personal information. You can update your information
                        through your account settings or by contacting us.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Data portability:
                      <span className="text-[#0009338a]">
                        &nbsp;You have the right to request a copy of your
                        personal data in a structured, machine-readable format.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Deletion:
                      <span className="text-[#0009338a]">
                        &nbsp;You can request the deletion of your personal
                        information, subject to legal and contractual
                        obligations.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    7. Changes to privacy policy
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    This privacy policy may be updated periodically. We will
                    notify you of any significant changes and provide an updated
                    date at the top of the policy.
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
