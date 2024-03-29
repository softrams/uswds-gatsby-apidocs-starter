# API Hub Documentation

Built with [Gatsby](https://www.gatsbyjs.org/) starter with [US Web Design System](https://designsystem.digital.gov/).

Kick off your API project or a suite of APIs with this default boilerplate. This starter template uses Hub concept to feature one or more API products and currently includes support for writing pages in Markdown and providing API Sandbox using Swagger UI.

You may checkout the demo app at https://uswds-gatsby-apidocs-starter.softrams.cloud.

## About

[USWDS](https://designsystem.digital.gov/) is a great design system framework that allow designers and developers build clean and accessible web sites and web applications. Yet, many agencies still develop and deploy applications and websites that do not follow any consistent framework, leave alone USWDS framework, to provide a consistent experience for customers. More over, many times may probably keep reinventing the wheel with their own versions even if those applications and websites are meant to offer very similar if not identical services. For example, out of three API pilots that we know of, all three groups under CMS, have built different websites to share API documentation.

This pilot aims to build a toolkit/framework to redefine the way static and dynamic information oriented sites/applications are built and democratize modern web applications with starter templates.

- Use USWDS Design System
- Rely on Gatsbyjs to build modern Progressive Web Applications (PWA)
- Builds a couple of starter templates to prove the concept for rapid adoption and development
- Open source the framework and
- Nurture the community to develop more such starter templates

This can have a significant impact in many ways.

- Consistent, delightful and modern experiences for customers across Federal Agencies
- Rapid prototyping and development for Federal Agencies and Federal Contractors without having to reinvent the wheel
- Accelerates innovation and delivery to market

> **Note:** This work is NOT endorsed, sponsored, funded or supported in anyway by the US Government or Centers for Medicare & Medicaid Services or any other agency. Our work is an open source project and initially built by our teams at Softrams and is being shared with the community. We support Federal Agencies and build empowering digital services for them. So we built this as a template to help our teams and other Federal Agencies and Federal Contractors build their own API documentation. Use of Centers for Medicare & Medicaid Services in the template is strictly meant for illustration purposes only, to showcase how multiple API products can be supported as an integrated API Hub for better, consistent and seamless experience.

## Key Features

- Supports single or multiple FHIR APIs to build documentation sites
- Supports embedding swagger file within the site or simply link to external site
- Includes place holder pages for most commonly needed API documentation covering teams of
  varying maturity and exposure to FHIR APIs, based on modal User Research
- Code highlighting with prism
- Easily publish documentation as Github pages `npm run deploy`
- Create documentation with Markdown files
- Uses US Web Design System
- Documentation references and support pages follow best practices based on User Research for better engagement of API developers

## Roadmap

- [x] Create API Docs starter
- [x] User Research
- [x] Identify user persona & key groups
  - [x] Organizations & Developers new to APIs
  - [x] Organizations & Developers that may have some experience consuming APIs
  - [x] Organizations & Developers that build applications using APIs
- [x] Identify key information useful for API developers, API Governance and API Consumers
- [x] Review API Documentation offered on different services
- [x] Create UX Designs for content layout and presentation
- [x] Create markdown templates with default content
- [ ] Provide options to manage content via headless CMS Systems

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/softrams/uswds-gatsby-apidocs-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## API Reference Pages

Add new API Reference Pages by simply creating a new page in docs folder

## Guides

Create additional guides in Markdown by creating new page in guides folder, that are automatically added to menu (under Guides).

## API Sandbox with Swagger UI

Swagger UI is included for sharing API Documentation and offering a ready to use API Sandbox. Just replace the swagger.json file from static/assets folder. For additional updates or configuration of Swagger UI, please refer to pages/swagger.js file.

## Contributing

This is a work in progress and welcome PRs/Isues with suggestions and improvements. Please see [./CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Credits

This API docs starter template is built using

- [Gatsby](https://www.gatsbyjs.org/)
- [Gatsby Default Starter Template](https://github.com/gatsbyjs/gatsby-starter-default)
- [US Web Design System](https://designsystem.digital.gov/)
