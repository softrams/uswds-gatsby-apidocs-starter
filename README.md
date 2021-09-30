# 4Innovation API Documentation

Built with [Gatsby](https://www.gatsbyjs.org/) starter with [US Web Design System](https://designsystem.digital.gov/).

Kick off your project with this default boilerplate. This starter template currently includes support for writing pages in Markdown and API Sandbox using Swagger UI. Please checkback later as we add more support.

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

## Pages

You can create additional pages in Markdown in docs folder, that are automatically added to menu (under Pages). Default starter comes with three pages for example.

## API Sandbox with Swagger UI

Swagger UI is included for sharing API Documentation and offering a ready to use API Sandbox. Just replace the swagger.json file from static/assets folder. For additional updates or configuration of Swagger UI, please refer to pages/swagger.js file.

## Contributing

This is a work in progress and welcome PRs/Isues with suggestions and improvements. Please see [./CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Credits

This API docs starter template is built using

- [Gatsby](https://www.gatsbyjs.org/)
- [Gatsby Default Starter Template](https://github.com/gatsbyjs/gatsby-starter-default)
- [US Web Design System](https://designsystem.digital.gov/)
