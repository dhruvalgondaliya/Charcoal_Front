import FaceBook from "../../assets/FaceBook.png";
import Twitter from "../../assets/Twitter.png";
import Insta from "../../assets/Insta.png";
import Mobile from "../../assets/Mobile.png";
import Location from "../../assets/Location.png";

const Footer = () => {
  const openingHours = [
    { day: "Monday", hours: "11:30am - 9pm" },
    { day: "Tuesday", hours: "11:30am - 9pm" },
    { day: "Wednesday", hours: "11:30am - 9pm" },
    { day: "Thursday", hours: "11:30am - 9pm" },
    { day: "Friday", hours: "11:30am - 9pm" },
    { day: "Saturday", hours: "11:30am - 9pm" },
    { day: "Sunday", hours: "11:30am - 9pm" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <img
          src={FaceBook}
          alt="Facebook Icon"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
        />
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <img
          src={Insta}
          alt="Instagram"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
        />
      ),
      href: "#",
    },
    {
      name: "Twitter",
      icon: (
        <img
          src={Twitter}
          alt="Twitter"
          className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
        />
      ),
      href: "#",
    },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-gray-800 py-8 lg:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Restaurant Info Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
            <h3 className="potlin text-xl lg:text-3xl font-bold text-[var(--color-black)]">
              Smoky Charcoal Chicken
            </h3>
            <p className="potlin text-base lg:text-xl max-w-xs">
              Save time, shop online! We combine fresh, gourmet flavours to
              create an authentic blend of tastes
            </p>
            <div className="flex space-x-4 pt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 text-amber-400 rounded-full flex items-center justify-center hover:bg-[var(--color-white)] transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
            <h3 className="potlin text-xl lg:text-3xl font-bold text-[var(--color-black)]">
              Opening Hours
            </h3>
            <div className="grid gap-y-2 text-sm lg:text-lg">
              {openingHours.map((schedule, index) => (
                <div key={index} className="grid grid-cols-[120px_1fr]">
                  <span className="font-bold potlin">{schedule.day}</span>
                  <span className="potlin text-start font-bold">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="potlin text-xl lg:text-3xl font-bold text-[var(--color-black)]">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <img
                  src={Location}
                  alt="Location img"
                  className="w-6 h-6 object-contain"
                />
                <span className="potlin text-sm lg:text-lg font-bold">
                  42 Mirrabooka Ave Mirrabooka, WA
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <img
                  src={Mobile}
                  alt="Mobile img"
                  className="w-6 h-6 object-contain"
                />
                <span className="potlin text-sm lg:text-lg font-bold">
                  08 6243 6943
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <a
            href="#"
            className="block text-sm sm:text-base font-medium text-gray-700 hover:text-[var(--color-black)] transition-colors duration-300 mb-2 opacity-75"
          >
            Privacy Policy
          </a>
          <p className="potlin text-sm sm:text-base text-[var(--color-black)] font-normal">
            Copyright © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
