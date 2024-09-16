import { PinContainer } from "../ui/3d-pin";

const Projects = () => {
  const projects = [
    {
      name: "Chit Chat",
      repoUrl: "https://github.com/Ali-Raza764/chitchat-frontend",
      technologiesUsed: "Next.js 14, Upstash Redis, Pusher, zustand",
      description:
        "Chit Chat is a raltime chatting platform. It allows user to add friends send requests and deny them in realtime. Also users can do realtime chatting. More Work has to be done on this project like improving the initial data fetching and improving the zustand based global chatStore.",
      liveUrl: "https://chitchat-frontend-brown.vercel.app",
    },
    {
      name: "Baze",
      repoUrl: "https://github.com/Ali-Raza764/baze",
      technologiesUsed: "Next.js 14 and Jiosaavn APi",
      description:
        "Baze is a music streaming and downloading service currently in development. The development is paused becaue of the api development",
      liveUrl: "https://baze-chi.vercel.app",
    },
    {
      name: "Shopfinity",
      repoUrl: "https://github.com/Ali-Raza764/baze",
      technologiesUsed: "Next.js 14, MongoDb, Stripe, Auth.js, Tailwind Css",
      description:
        "Shopfinity is a full stack online shopping platform with user and admin functionalities it handles payment using stripe webhooks and has features like add to favourites and add to cart. Shopfinity uses auth.js for authentication and mongoDb for Data storage. Still parts of the app are to be developed.",
      liveUrl: "https://shopfinity-ecommerce.netlify.app",
    },
    {
      name: "Pendrive",
      repoUrl: "https://github.com/Ali-Raza764/pendrive-google-drive-clone",
      technologiesUsed:
        "Next.js 14, Firebase Firestore, FireBase Storage, Clerk.js, Zustand, Tailwind Css",
      description:
        "Pendrive is a google drive clone that allows user to upload, star, trash, view, download and delete the files in their cloud storage. Pendrive is the first ever next.js application that I have made.",
      liveUrl: "https://pendrive.netlify.app",
    },
    {
      name: "Chess Pro",
      repoUrl: "https://github.com/Ali-Raza764/chess-pro",
      technologiesUsed:
        "Next.js 14, Socket.io, chessboardjsx, chess.js, Custom Node.js Game Server, Tailwind Css, Custom Chess Puzzles Api",
      description:
        "Chess Pro is attempt to create a chess.com and lichess.org clone using react.js and node.js servers running on top of web socket protocols. Currently ChessPro Offers Matching, game Link and Puzzles functionality with Authentication and user specific Functionalities to be developed",
      liveUrl: "https://chess-pro.vercel.app",
    },
    {
      name: "Terminal PortFolio",
      repoUrl: "https://github.com/Ali-Raza764/terminal-portfolio",
      technologiesUsed: "React.js",
      description:
        "Terminal Portfolio is a fun project to create a terminal looking portfolio with using bare react.js and react-icons used with tailwind css",
      liveUrl: "https://terrminalportfolio.netlify.app",
    },
  ];

  return (
    <section
      className="h-full w-full flex flex-col items-center justify-center gap-11 p-6"
      id="projects"
    >
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center">
          Projects
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Projects That I a have built
        </p>
      </div>
      <div className="h-full w-full relative flex flex-wrap gap-x-4 justify-center items-center md:p-6 gap-y-24 md:mb-6">
        {projects.map((project) => {
          return (
            <PinContainer title={project.name} href={project.liveUrl} key={project.name}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 sm:w-[20rem] sm:h-[20rem] w-[17rem] h-[17rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-ellipsis line-clamp-4">{project.description}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
