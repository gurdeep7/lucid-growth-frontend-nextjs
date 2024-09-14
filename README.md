
# SSL Certificate Checker

## Description

The SSL Certificate Checker is a web application built with Next.js that allows users to check and view details of SSL certificates for specified domain names. The application provides a responsive and user-friendly interface to input domain names and view SSL certificate details.

## Technology Choices

### Next.js

- **Why Next.js?**
  - **Server-Side Rendering (SSR):** Next.js enables server-side rendering which helps in pre-rendering the pages on the server. This improves performance and SEO by delivering fully rendered HTML to the client.
  - **API Routes:** Next.js allows us to create API routes to handle server-side logic. In this project, it enables us to keep API-related logic separate from the frontend.
  - **File-Based Routing:** Next.js simplifies routing with its file-based system which makes it easier to manage and scale the application.
  - **Built-in CSS Support:** It has built-in support for CSS and CSS-in-JS solutions like Tailwind CSS.

### Tailwind CSS

- **Why Tailwind CSS?**
  - **Utility-First Approach:** Tailwind CSS provides a utility-first approach to styling which allows for rapid UI development with minimal custom CSS.
  - **Customization:** It is highly customizable, enabling you to extend and modify the design system as per the requirements.

### Axios

- **Why Axios?**
  - **Promise-Based:** Axios is a promise-based HTTP client which simplifies handling asynchronous requests and responses.
  - **Browser and Node.js Support:** It works both on the client side (in the browser) and the server side (Node.js), making it a suitable choice for Next.js applications.

## Getting Started

### Prerequisites

1. Node.js (v18.7+)
2. npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Design Decisions and Assumptions

- **API Endpoint:** The SSL information is fetched from a local API (`http://localhost:3001/api/ssl-info`). Ensure that this endpoint is available and running.
- **Validation:** Basic domain validation is implemented using a regular expression to check if the input domain is in a valid format.
- **Loading Indicator:** A Tailwind CSS spinner is used to indicate loading while fetching data.

## Known Limitations

- **Error Handling:** The current error handling is basic and may not cover all edge cases, such as network errors or unexpected API responses.
- **Domain Validation:** The domain validation regex is simplistic and might not cover all valid domain formats.
- **Scalability:** For larger-scale applications or production environments, consider implementing more robust error handling, logging, and a more comprehensive validation mechanism.

## Future Improvements

- **Enhanced Validation:** Improve domain validation to handle a wider range of valid domain formats.
- **Error Handling:** Implement more sophisticated error handling and logging mechanisms.
- **UI/UX Enhancements:** Further refine the UI/UX for better user experience and accessibility.
- **Testing:** Add unit and integration tests to ensure application stability and reliability.
