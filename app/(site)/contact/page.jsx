import ContactForm from "@/components/Common/Form";
import ContactDetails from "@/components/Contact/ContactDetails";
import { Separator } from "@/components/ui/separator";
import { getContactsData } from "@/sanity/sanity_utils";

const Contact = async() => {
  const contactData = await getContactsData();

  return (
    <main className="mt-14">
      <section className="container flex flex-col gap-4 py-[50px]">
        <article className="justify-center mx-auto">
          <div className="justify-center mx-auto text-center">
            <h4 className="font-semibold text-3xl lg:text-5xl py-4 text-[#E36C0A]">
              Contact Us
            </h4>
            <Separator className="my-4" />
          </div>
        </article>
        <article className="flex w-full lg:w-8/12 items-stretch rounded-l-[28px]">
          <article
            className="w-full lg:w-5/12 rounded-l-[28px] hidden lg:flex items-stretch bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('./contact.jpg')" }}
            role="img"
            aria-label="Contact background image">
            <div className="flex-grow"></div>
          </article>

          <article className="w-full p-6 lg:w-7/12 bg-primary rounded-[28px] lg:rounded-r-[28px] flex items-center">
            <div className="w-full px-2 mx-auto">
              <div>
                <h4 className="text-xl text-white font-medium mb-4">
                  Contact Us
                </h4>
              </div>
              <ContactForm />
            </div>
          </article>
        </article>
      </section>{" "}
      <ContactDetails contactData={contactData} />
    </main>
  );
};

export default Contact;
