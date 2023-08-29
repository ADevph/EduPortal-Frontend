import React from "react";
import Layout from "./Layout/layout";
import Title from "./Layout/title";

export default function Contact() {
  return (
    <>
      <Title page="Contact Us" />
      <Layout>
      <h2 className="text-3xl p-2">Contact Us</h2>
        <div className="">
          
          <div className="contact-section">
            <div className="contact-part">
              {/* <h3>Contact Us</h3> */}
              <table>
                <tbody>
                  <tr>
                    <td>Address:</td>
                    <td>408/1 (Old KA 66/1), Kuratoli, Khilkhet, Dhaka 1229, Bangladesh</td>
                  </tr>
                  <tr>
                    <td>Telephone:</td>
                    <td>+88 02 841 4046-9; +88 02 841 4050</td>
                  </tr>
                  <tr>
                    <td>Fax:</td>
                    <td>+88 02 841 2255</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>info@aiub.edu</td>
                  </tr>
                  <tr>
                    <td>Web:</td>
                    <td>www.aiub.edu</td>
                  </tr>
                  <tr>
                    <td>Facebook:</td>
                    <td>www.facebook.com/aiub.edu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contact-part">
              <h3 className="text-3xl text-black mb-2 mt-8 ">Admission Information</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Mobile:</td>
                    <td>+880 18 4411 5000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+880 18 8656 6666</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+880 18 4451 5912</td>
                  </tr>
                  <tr>
                    <td>Telephone:</td>
                    <td>+88 02 841 4046-9;</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+88 02 841 4050;</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ext.: 201, 202</td>
                  </tr>
                  <tr>
                    <td>Graduate Programs [12pm to 8pm]:</td>
                    <td>+880 18 4411 5010</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+88 02 841 4046-9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


       
        <div className="mt-[100px]">
          <footer> </footer>{" "}
        </div>

      </Layout>
    </>
  );
}
