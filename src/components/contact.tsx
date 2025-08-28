export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-3 rounded" />
        <input type="email" placeholder="Your Email" className="border p-3 rounded" />
        <textarea placeholder="Your Message" className="border p-3 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
