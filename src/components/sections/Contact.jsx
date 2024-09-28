import {
  EMAIL_URL,
  GIT_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "@/lib/constants";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center md:gap-14 gap-6"
      id="contact"
    >
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center text-white">
          Contact Me
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Send me a message, let's create something new together.
        </p>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row md:px-14 w-full">
        <div className="form md:h-[25rem] md:w-1/2 w-full border rounded-md border-white/[0.2]">
          <form className="h-full w-full flex flex-col gap-4 rounded-xl  p-4 items-center justify-center">
            <div className="flex flex-col w-[80%]">
              <label
                htmlFor="senderemail"
                className="font-semibold font-sans text-lg text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="senderemail"
                id="senderemail"
                placeholder="Enter Your Email Here"
                className="outline-none bg-white/[0.2] p-2 rounded-md text-white font-sans font-semibold text-md"
                required
              />
            </div>
            <div className="flex flex-col w-[80%]">
              <label
                htmlFor="message"
                className="font-semibold font-sans text-lg text-white mb-1"
              >
                Type Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="outline-none bg-white/[0.2] p-2 rounded-md text-white font-sans font-semibold text-md"
                required
                placeholder="Type Your Message Here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-3 rounded-md w-[80%] bg-white text-black hover:scale-105 transition hover:bg-gray-300"
            >
              Send
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="globe h-full w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
          <h3 className="text-white text-xl font-semibold mb-4">
            Connect with me
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href={EMAIL_URL}
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300"
            >
              <FaEnvelope className="text-2xl" />
              <span>Email</span>
            </a>
            <a
              href={GIT_URL}
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300"
            >
              <FaInstagram className="text-2xl" />
              <span>Instagram</span>
            </a>
            <a
              href={TWITTER_URL}
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300"
            >
              <FaTwitter className="text-2xl" />
              <span>X (Twitter)</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin className="text-2xl" />
              <span>Linkden</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
