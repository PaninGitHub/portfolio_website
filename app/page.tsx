export default function Home() {
  return (
    <div>
      <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        </style>
      </head>
      <body>
        <div className="mx-auto mb-5 mt-20">
          <div className="gradient">
            <img src="singing.jpg" title="Hi" width="500" className=""/>
          </div>
        </div>
        <div className="container" id="bio_title" >
          <h1>Dinidu Samaranayake</h1>
          <h2>Data Analyst + Full Stack Developer</h2>
          <p id="bio_description max-w-[700px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </body>
    </div>
  );
}
