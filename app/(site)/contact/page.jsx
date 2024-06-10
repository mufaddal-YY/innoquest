import CallToAction from "@/components/Common/CallToAction";
import ContactForm from "@/components/Common/Form";
import ContactDetails from "@/components/Contact/ContactDetails";
import ContaactForm from "@/components/Contact/ContactForm";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
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
        <article className=" w-full lg:w-8/12">
          <article className="flex items-center bg-primary rounded-[28px]">
            <article
              className="w-full lg:w-5/12 py-[200px] rounded-l-[28px] hidden lg:block bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('./contact.jpg')" }}
              role="img"
              aria-label="Contact background image"></article>
            <article className="w-full p-6 lg:w-7/12">
              <div className="w-full px-2 mx-auto">
                <header>
                  <h4 className="text-xl text-white font-medium mb-4">
                    Contact Us
                  </h4>
                </header>
                <ContactForm />
              </div>
            </article>
          </article>
        </article>
      </section>{" "}
      <ContactDetails />
    </main>
  );
};

export default Contact;
