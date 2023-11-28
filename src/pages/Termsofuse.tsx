import React from "react";
import Header from "../components/Header";
import { Terms } from "../components/Terms";
import { Link } from "react-router-dom";
import Policylayout from "../layouts/Policylayout";

export const Termsofuse = () => {
  return (
    <Policylayout>
      <div className="flex flex-col w-full items-center">
        <div className="w-[98%] md:w-[90%] lg:w-[80%]">
          <div className="flex flex-col items-center mt-[40px] md:mt-[80px]">
            <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
              Terms of use
            </h1>
            <p className="font-euclid text-[#00093366] text-2xl">
              Last updated{" "}
              <span className="text-[#000933] ">November 23,2023</span>
            </p>
          </div>
          <div className="flex gap-[20px] md:gap-[40px] lg:gap-[80px] my-[80px]">
            <div className="font-euclid flex flex-col text-[#000933] min-w-[100px] md:min-w-[200px] gap-[8px] leading-[24px]">
              <Link
                to="/legal/terms-of-use"
                className="text-[#000933] font-euclid500"
              >
                Terms of Service
              </Link>
              <Link to="/legal/privacy-policy">Privacy Policy</Link>
              <Link to="/legal/cookie-policy">Cookie Policy</Link>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    1. Acceptance of terms
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    By accessing or using any services provided by Circumvent
                    Limited ("the Company"), you agree to be bound by these
                    Terms of Service. If you do not agree with any part of these
                    terms, you may not access or use our services.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    2. Description of services
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    Circumvent Limited provides information technology services,
                    including but not limited to software development, system
                    integration, and IT consulting. These services may be
                    subject to change, and the Company reserves the right to
                    modify or discontinue any part of the services without
                    notice.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    3. User responsibilities
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Account security:
                      <span className="text-[#0009338a]">
                        &nbsp;Users are responsible for maintaining the security
                        of their accounts, including passwords and any other
                        credentials. The Company is not liable for any
                        unauthorized access to user accounts.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Compliance:
                      <span className="text-[#0009338a]">
                        &nbsp;Users agree to comply with all applicable laws and
                        regulations while using the Company's services.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    4. Privacy policy
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    Our privacy policy, available on our website, outlines how
                    we collect, use, and protect your personal information. By
                    using our services, you agree to the terms outlined in our
                    privacy policy.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    5. Intellectual property
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Ownership:
                      <span className="text-[#0009338a]">
                        &nbsp;All intellectual property rights related to the
                        Company's services, including but not limited to
                        software, trademarks, and copyrights, are owned by
                        Circumvent Limited.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      License:
                      <span className="text-[#0009338a]">
                        &nbsp;Users are granted a limited, non-exclusive,
                        non-transferable license to use the services for their
                        intended purpose.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    6. Payments and billing
                  </p>
                  <ul className="list-disc pl-7 font-euclid500">
                    <li className="text-[#000933]">
                      Fees:
                      <span className="text-[#0009338a]">
                        &nbsp;Certain services may require payment of fees.
                        Users agree to pay all fees as specified by Circumvent
                        Limited.
                      </span>
                    </li>
                    <li className="text-[#000933]">
                      Billing information:
                      <span className="text-[#0009338a]">
                        &nbsp;Users must provide accurate billing and payment
                        information. The Company reserves the right to suspend
                        services for non-payment.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    7. Termination of services
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    Circumvent Limited reserves the right to terminate or
                    suspend services to users at its discretion, with or without
                    cause. In the event of termination, users will be notified
                    and may be provided with an opportunity to retrieve their
                    data.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    8. Limitation of liability
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    To the extent permitted by law, Circumvent Limited shall not
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages, or any loss of profits
                    or revenues.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    9. Governing law
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    These Terms of Service are governed by and construed in
                    accordance with the laws of England and Wales. Any disputes
                    arising from these terms shall be subject to the exclusive
                    jurisdiction of the courts of England and Wales.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-euclid500 text-[#000933]">
                    10. Changes to terms
                  </p>
                  <p className="text-[#0009338a] font-euclid500">
                    Circumvent Limited reserves the right to modify these terms
                    of use at any time. Users will be notified of significant
                    changes, and continued use of the services after such
                    changes constitutes acceptance of the modified terms.
                  </p>
                </div>
                <p className="text-[#0009338a] font-euclid500">
                  By using Circumvent Limited&apos;s services, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  terms of service. If you have any questions or concerns,
                  please contact us at
                  <a
                    href="mailto:admin@circumventltd.co.uk."
                    className="text-[#0030FF]"
                  >
                    &nbsp;admin@circumventltd.co.uk.
                  </a>
                </p>
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
