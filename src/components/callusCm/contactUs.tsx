"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, SetMessage] = useState("");

  const handleSubmit = () => {
    try {
      const result = axios.post("https://www.feroservice.info/xxxx",{
          fullName,
          email,
          PhoneNumber,
          subject,
          message,
        },{ headers: {

         }}
         );
         console.log(result);
         
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      {/* <!-- Contact us --> */}
      <div id="contact-us" className="overflow-hidden py-7 py-sm-8">
        <div className="container">
          <div className="row gy-5 gx-sm-5">
            <div className="col-12 col-xl-5 pt-4">
              <div className="mx-auto max-w-xl text-center text-xl-start">
                <h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
                  Nehmen Sie Kontakt auf
                </h2>
                <p className="m-0 mt-2 text-body-emphasis text-3xl tracking-tight leading-10 fw-bold">
                  Haben Sie Fragen oder benötigen
                  <br /> Sie Hilfe? Kontaktieren Sie uns noch heute!
                </p>
              </div>

              <div className="mx-auto max-w-2xl mt-6">
                <form
                action='post'
                  className="row g-4 needs-validation"
                  id="myForm"
                >
                  <div className="col-md-6">
                    <label htmlFor="nameForm" className="form-label text-sm">
                      Vollständiger Name
                      <span className="text-danger-emphasis">*</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      className="form-control form-control-sm"
                      name="nameForm"
                      id="nameForm"
                      required
                    />
                    <div className="invalid-feedback text-xs">
                      Please enter your full name.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="emailForm" className="form-label text-sm">
                      E-Mail-Adresse
                      <span className="text-danger-emphasis">*</span>
                    </label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="form-control form-control-sm"
                      name="emailForm"
                      id="emailForm"
                      required
                    />
                    <div className="invalid-feedback text-xs">
                      Please enter your email address.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phoneForm" className="form-label text-sm">
                      Telefon nummer
                      <span className="text-danger-emphasis">*</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      className="form-control form-control-sm"
                      name="phoneForm"
                      id="phoneForm"
                      required
                    />
                    <div className="invalid-feedback text-xs">
                      Please enter your phone number.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="subjectForm" className="form-label text-sm">
                      Thema
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      className="form-control form-control-sm"
                      name="subjectForm"
                      id="subjectForm"
                    />
                    <div className="invalid-feedback text-xs">
                      Please enter a subject for your message.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="messageForm" className="form-label text-sm">
                      Ihre Nachricht
                      <span className="text-danger-emphasis">*</span>
                    </label>
                    <textarea
                      onChange={(e) => {
                        SetMessage(e.target.value);
                      }}
                      className="form-control form-control-sm"
                      name="messageForm"
                      id="messageForm"
                      required
                    ></textarea>
                    <div className="invalid-feedback text-xs">
                      Please enter a message.
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        required
                      />
                      <label
                        className="form-check-label text-sm"
                        htmlFor="gridCheck"
                      >
                        Ich stimme den Allgemeinen Geschäftsbedingungen und der
                        Datenschutzerklärung zu
                        <span className="text-danger-emphasis">*</span>
                      </label>
                      <div className="invalid-feedback text-xs">
                        Please agree to the terms &amp; conditions and privacy
                        policy.
                      </div>
                    </div>
                  </div>

                  <div className="col-12 text-center pt-3">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="btn btn-lg btn-primary text-white text-sm fw-semibold"
                      id="sendMessage"
                    >
                      Nachricht senden
                    </button>
                  </div>

                  {/* <!-- Alert message  --> */}
                  {/* <div className="col-12" id="yourMessageIsSent"></div> */}
                </form>
              </div>
            </div>

            <div className="col-12 col-xl-7 pt-7 pt-xl-0">
              <div className="h-100 position-relative ms-xxl-5">
                <iframe
                  className="position-absolute top-0 end-0 bottom-0 start-0 w-100 h-100 rounded-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.1394744674617!2d8.635091499999998!3d50.102396299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0bdc5323332d%3A0xc2b2175ddbb4c43!2sMainzer%20Landstra%C3%9Fe%20314%2C%2060326%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2s!4v1731758963427!5m2!1sen!2s"
                  style={{}}
                >
                  {" "}
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUs;
