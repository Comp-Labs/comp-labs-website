import React from "react";
import Layout from "@theme/Layout";
import FormField from "@site/src/components/FormField";

function Contact() {
  return (
    <Layout title="Contact Us">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1>Contact Us</h1>
            <form action="https://postform.com/s/k9OKbe" method="POST" enctype="multipart/form-data">
              <FormField label="Your Name" name="name" required />
              <FormField
                label="Your Email"
                name="email"
                required
                type="email"
              />
              <FormField
                fieldType="textarea"
                label="Message / Feedback / Suggestions / Queries"
                name="message"
                required
                rows={5}
              />
              <FormField
                fieldType="file"
                label="Attachments (If Any)"
                name="files"
                type="file"
              />
              <input name="website" style={{ display: "none" }} />
              <input name="honeypot" style={{ display: "none" }} />
              <button className="button button--primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;