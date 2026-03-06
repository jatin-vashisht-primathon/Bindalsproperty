"use client";
import React, { useState } from "react";
import Breadcumb from "../common/Breadcumb";
import DropdownSelect from "../common/DropdownSelect";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [interest, setInterest] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append("subject", "New Contact Form Submission - Bindals Property Hub");
    formData.append("from_name", "Bindals Property Hub");
    if (interest && interest !== "Select") {
      formData.append("interested_in", interest);
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setInterest("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
    <Breadcumb pageName="Contact" />
    <section className="section-top-map style-2">
      <div style={{ marginTop: "40px" }} className="box">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <form
                id="contactform"
                onSubmit={handleSubmit}
                className="form-contact"
              >
                <div className="heading-section">
                  <h2 className="title">Get in touch with our real estate experts.</h2>
                  <p className="text-1">
                    We listen to your requirements and make the property-buying process simple and transparent.
                  </p>
                </div>
                {status === "success" && (
                  <div style={{ padding: "12px 16px", marginBottom: 16, background: "#e8f5e9", color: "#2e7d32", borderRadius: 4 }}>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div style={{ padding: "12px 16px", marginBottom: 16, background: "#ffebee", color: "#c62828", borderRadius: 4 }}>
                    Something went wrong. Please try again.
                  </div>
                )}
                <div className="cols">
                  <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      id="email-contact"
                      required
                    />
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset className="phone">
                    <label htmlFor="phone">Phone number:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                      name="phone"
                      id="phone"
                      required
                    />
                  </fieldset>
                  <div className="select">
                    <label className="text-1 fw-6 mb-12">
                      What are you interested in?
                    </label>
                    <DropdownSelect
                      options={["Select", "Location", "Rent", "Sale"]}
                      addtionalParentClass=""
                      onChange={(val) => setInterest(val)}
                    />
                  </div>
                </div>
                <fieldset>
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    id="message"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="send-wrap">
                  <button
                    className="tf-btn bg-color-primary fw-7 pd-8"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Contact our experts"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
