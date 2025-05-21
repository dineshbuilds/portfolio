
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Made By Dinesh Raja | &copy; All rights reserved {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
