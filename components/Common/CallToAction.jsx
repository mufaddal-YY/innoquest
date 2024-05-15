import ContactForm from "./Form";

const CallToAction = () => {
  return (
    <main className="container py-[50px]">
      <section className="flex items-center bg-primary rounded-[28px]">
        <article
          className="w-full lg:w-5/12 py-[250px] rounded-l-[28px] hidden lg:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./contact.jpg')" }}
          role="img"
          aria-label="Contact background image"></article>
        <article className="w-full p-8 lg:w-7/12">
          <div className="w-full px-2 mx-auto">
            <header>
              <h4 className="text-2xl text-white font-medium mb-4">
                Contact Us
              </h4>
            </header>
            <ContactForm />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CallToAction;
