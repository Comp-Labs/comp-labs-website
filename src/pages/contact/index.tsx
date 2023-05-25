import React from "react";
import Layout from "@theme/Layout";
import FormField from "@site/src/components/FormField";

export default function Contact() {
    return (
        <Layout title="Contact Us">
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--6 col--offset-3">
                        <h1>Contact Us</h1>
                        <form action="https://getform.io/f/3a65ea10-fa80-47b6-861d-8b2af34a5e15" method="POST" enctype="multipart/form-data">
                            <FormField type="text" label="Your Name" name="name" required />
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
                                type="text"
                                required
                                rows={5}
                            />
                            <FormField
                                fieldType="file"
                                label="Attachments (If Any)"
                                name="file"
                                type="file"
                            />
                            {/* <input name="website" style={{ display: "none" }} /> */}
                            <input name="_honeypot" style={{ display: "none" }} />
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