'use client'
import React from "react";
// import photo1 from "../../../public/images/photo4.png";
import axios from "axios";
import { useState} from "react";

function GetInTouch() {
        const [fullName ,setFullName ] = useState ('');
        const [ email , setEmail ] = useState ('');
        const [ PhoneNumber , setPhoneNumber ] = useState ('');
        const [ subject , setSubject ] = useState ('');
        const [message , SetMessage] = useState ('');
         
         const handleSubmit = async () =>{
          try {
            const response = await axios.post('https://www.feroservice.info/xxxx' ,{
                fullName , 
                email , 
                PhoneNumber , 
                subject , 
                message
               },{headers:{
                 
               }}).then(res=>{
                if(res.status === 200){
                    window.alert('the message sent successfully')
                } else {
                    window.alert ('your message failed to send !')
                }
               })
               console.log(response);
          } catch (e) {
            console.log(e);
          }
         } 

  return (
    <React.Fragment>
      {/* <!-- get in touch --> */}
      <div id="contact-us" className="overflow-hidden py-7 py-sm-8 py-xl-9">
        <div className="container">
          <div className="row gy-5 gx-sm-5">
            <div className="col-12 col-xl-5 pt-4">
              <div className="mx-auto max-w-2xl">
                <h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
                  Nehmen Sie Kontakt auf
                </h2>
                <p className="m-0 mt-2 text-body-emphasis text-3xl tracking-tight fw-bold">
                  Haben Sie Fragen oder benötigen Sie Hilfe? Kontaktieren Sie
                  uns noch heute!
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
                     onChange={(e)=>{setFullName(e.target.value)}}
                      className="form-control form-control-sm"
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
                      onChange={(e=>{setEmail(e.target.value)})}
                      className="form-control form-control-sm"
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
                      type="number"
                      onChange={(e)=>setPhoneNumber(e.target.value)}
                      className="form-control form-control-sm"
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
                      <span className="text-danger-emphasis">*</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e)=>{setSubject(e.target.value)}}
                      className="form-control form-control-sm"                    
                      id="subjectForm"
                      required
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
                      className="form-control form-control-sm"
                       onChange={(e)=>{SetMessage(e.target.value)}}                   
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

            <div
              className="d-none d-xl-block col-12 col-xl-7"
              data-aos-delay="0"
              data-aos="fade"
              data-aos-duration="3000"
            >
              <div className="h-100 position-relative ms-xxl-5">
                <div className="position-absolute top-0 end-0 bottom-0 start-0 z-n1 rounded-5">
                  <img src="images/photo4.png" alt="PicDescription" className="w-100 h-100 rounded-3 object-fit-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GetInTouch;
