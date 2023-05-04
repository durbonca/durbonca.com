import React from 'react';
import Button from '@mui/material/Button';
import { Layout } from '@/components';

export default function Resume() {
  return (
    <Layout>
      <div className="min-h-screen mx-auto py-4 max-w-4xl">
        <div className="flex justify-evenly flex-wrap gap-2 py-6">
          <Button variant="outlined">
            <a className="p-4" href="./assets/CV_MANUEL_DURAN.pdf" download>
              Download resume
            </a>
          </Button>
          <Button variant="outlined">
            <a className="p-4" href="https://github.com/durbonca/Certifications" target="_blank" rel="noreferrer">
              Check Certifications
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-start justify-center my-10 p-20 text-justify bg-white text-black">
          <h1 className="text-4xl font-bold">Manuel Duran</h1>
          <div className="w-full border-solid border-b-2 border-black" />
          <h2 className="font-bold my-4">Career Summary</h2>
          <p className="my-4">
            Computer Engineer, 3 years of experience in application development focused on the frontend area oriented to
            web development. Experience with React, Express, NodeJS and Mongo under the framework of agile methodologies
            and deployment of modern applications with GCP and Netlify.
          </p>
          <h2 className="font-bold">Summary of Qualifications</h2>
          <p className="my-4">Proficient In:</p>
          <ul className="list-disc flex flex-wrap mb-4">
            <li className="mx-7">HTML</li>
            <li className="mx-7">CSS</li>
            <li className="mx-7">JavaScript</li>
            <li className="mx-7">React</li>
            <li className="mx-7">Mongo</li>
            <li className="mx-7">Express</li>
            <li className="mx-7">SASS CSS</li>
            <li className="mx-7">Tailwind</li>
            <li className="mx-7">Material UI</li>
            <li className="mx-7">NEXT JS</li>
            <li className="mx-7">Formik</li>
            <li className="mx-7">Gastby</li>
            <li className="mx-7">Wordpress</li>
            <li className="mx-7">PostgreSQL</li>
            <li className="mx-7">Apollo Graph</li>
            <li className="mx-7">Google Cloud</li>
            <li className="mx-7">Google Firebase</li>
            <li className="mx-7">Netlify</li>
            <li className="mx-7">OAuth</li>
          </ul>

          <h2 className="font-bold mb-4">Languages</h2>
          <ul className="list-disc flex flex-wrap">
            <li className="mx-7">Spanish (native speaker)</li>
            <li className="mx-7">English (B2)</li>
          </ul>

          <h2 className="font-bold mt-8 mb-4">Career History</h2>

          <div className="mt-8 w-full">
            <div className="flex justify-between gap-6">
              <h3 className="font-bold">Mattel, Inc</h3>
              <p className="text-xs">Feb. 2023 – May. 2023</p>
            </div>
            <p className="italic font-light text-xs">Web UI Developer</p>
            <ul className="list-disc text-xs pt-2 pl-4">
              <li className="my-2">
                As a Globant collaborator our team provided services to Mattel, Inc. One of the services that Globant
                offers to Mattel is support with Shopify and NextJS. This involves using their expertise in these
                technologies to assist Mattel with various tasks related to their online shop, such as building and
                maintaining the website, optimizing the user experience, and ensuring that the site runs smoothly. Over
                time, Globant has built a reputation for its high-quality work and has become a trusted partner for many
                companies looking to improve their online presence.
              </li>
            </ul>

            <p className="italic font-light text-xs">Used Techs</p>
            <ul className="flex flex-wrap mb-4">
              <li className="mx-7">NextJS</li>
              <li className="mx-7">BuilderIO</li>
              <li className="mx-7">ContentStack CMS</li>
              <li className="mx-7">Liquid Language Shopify Template</li>
              <li className="mx-7">Jest Testing</li>
            </ul>
          </div>

          <div className="mt-8 w-full">
            <div className="flex justify-between gap-6">
              <h3 className="font-bold">TOTAL WINE & MORE, Orlando, US</h3>
              <p className="text-xs">Mar. 2022 – Dic. 2022</p>
            </div>
            <p className="italic font-light text-xs">React Frontend Developer</p>
            <ul className="list-disc text-xs pt-2 pl-4">
              <li className="my-2">
                As a Glober collaborator, driven by an agile work methodology and the latest technologies, Total Wines And
                More, together with Globant’s support, we are developing a new digital user experience platform to offer a
                superior service to all segments of its clients. The new, intuitive, personalized, and self-managed
                platform significantly changes the customer experience, representing another step in the cultural and
                digital transformation that the retail is already experiencing.
              </li>
            </ul>

            <p className="italic font-light text-xs">Used Techs</p>
            <ul className="flex flex-wrap mb-4">
              <li className="mx-7">React</li>
              <li className="mx-7">Styled Components</li>
              <li className="mx-7">Bloomreach CMS</li>
              <li className="mx-7">Bloomreach React SDK</li>
              <li className="mx-7">Micro frontend pattern</li>
              <li className="mx-7">Lerna JS</li>
              <li className="mx-7">Jenkins hooks</li>
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex w-full justify-between gap-6">
              <h3 className="font-bold">GLOBANT, Santiago, Chile</h3>
              <p className="text-xs">Feb. 2022 – Nowadays</p>
            </div>
            <p className="italic font-light text-xs">Web UI Developer</p>
          </div>

          <div className="mt-8 w-full">
            <div className="flex justify-between gap-6">
              <h3 className="font-bold">AMICAR, Santiago, Chile</h3>
              <p className="text-xs">Jun. 2021 – Feb. 2022</p>
            </div>
            <p className="italic font-light text-xs">Frontend Developer</p>
            <ul className="list-disc text-xs py-2 pl-4">
              <li className="my-2">
                Retake and launching to production the project “Amices”, focusing on vehicle credit simulations, store
                client data and connection with different financial entities.
              </li>
              <li className="my-2">
                Maintain not only the frontend of the project but also make modifications in the queries generated to the
                core from the backend to the core using mongoose DB and Sequelize from the core to the database in
                Postgres.
              </li>
              <li className="my-2">
                Understand and maintain major changes and modifications at the core of the business.
              </li>
            </ul>
            <p className="italic font-light text-xs">Used Techs</p>
            <ul className="flex flex-wrap mb-4">
              <li className="mx-7">NodeJS</li>
              <li className="mx-7">React</li>
              <li className="mx-7">Material UI</li>
              <li className="mx-7">Formik</li>
              <li className="mx-7">Mongoose</li>
              <li className="mx-7">Mongo Atlas</li>
              <li className="mx-7">PostgreSQL</li>
              <li className="mx-7">GraphQL</li>
              <li className="mx-7">Cypress</li>
            </ul>
          </div>

          <div className="mt-8 w-full">
            <div className="flex justify-between gap-6">
              <h3 className="font-bold">BACO Restaurant, Santiago, Chile</h3>
              <p className="text-xs">Feb. 2020 – May. 2021</p>
            </div>
            <p className="italic font-light text-xs">Web Developer</p>
            <ul className="list-disc text-xs pt-2 pl-4">
              <li className="my-2">
                Develop a food delivery application with a Backoffice, API connection and sales registration for service,
                delivery control and control of online orders through a webapp for the company
              </li>
              <li className="my-2">
                Development of a dynamic responsive web digital food menu based on the QR model for the different branches
                of the company.
              </li>
              <li className="my-2">
                Updating and modernization of the website and different digital channels of the company.
              </li>
            </ul>
            <p className="italic font-light text-xs">Used Techs</p>
            <ul className="flex flex-wrap mb-4">
              <li className="mx-7">Wordpress</li>
              <li className="mx-7">NodeJS</li>
              <li className="mx-7">React</li>
              <li className="mx-7">Gastby</li>
              <li className="mx-7">Heroku</li>
              <li className="mx-7">Netlify</li>
              <li className="mx-7">Ant Design</li>
            </ul>
          </div>

          <div className="mt-8 w-full">
            <div className="flex justify-between gap-6">
              <h3 className="font-bold">SMARTBOT, Santiago, Chile</h3>
              <p className="text-xs">Feb. 2017 – May. 2020</p>
            </div>
            <p className="italic font-light text-xs">Technical Developer</p>
            <ul className="list-disc text-xs pt-2 pl-4">
              <li className="my-2">Assembly and commissioning of solutions in applied robotics services.</li>
              <li className="my-2">
                Programmer, designer and maintenance of security robotics equipment and user service.
              </li>
            </ul>
            <p className="italic font-light text-xs">Used Techs</p>
            <ul className="flex flex-wrap mb-4">
              <li className="mx-7">Wordpress</li>
              <li className="mx-7">Raspberry PI</li>
              <li className="mx-7">Arduino</li>
              <li className="mx-7">Promobot SDK</li>
            </ul>
          </div>

          <h2 className="font-bold mt-8 mb-4">Education</h2>
          <div className="flex w-full justify-between gap-6">
            <h3 className="font-bold">territorial polytechnic university of Aragua, La Victoria, Venezuela</h3>
            <p className="text-xs">Jan. 2009 – Jun. 2014</p>
          </div>
          <p className="italic font-bold text-xs">Computer Engineer</p>
        </div>
      </div>
    </Layout>
  )
}
