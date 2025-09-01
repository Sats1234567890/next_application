export const Iframe = () => (
  <div className="w-full h-96 rounded-lg overflow-hidden shadow">
    <iframe
      src="https://www.google.com/maps?q=Baneshwor,+Kathmandu,+Nepal&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Baneshwor Location"
    ></iframe>
  </div>
);