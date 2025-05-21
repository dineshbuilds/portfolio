
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-primary dark:bg-gray-900 text-white py-6`}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Made By Dinesh Raja | &copy; All rights reserved {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
