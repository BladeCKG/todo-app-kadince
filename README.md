# Todo List App

This is a simple **Todo List App** built with **Next.js**, **TypeScript**, and **Material-UI (MUI)**. The app allows users to **add**, **edit**, **delete**, **filter**, and **mark tasks as completed**.

## Features

-   **Add a new Todo item** with a name, description, urgency, deadline, and completed status.
-   **Edit Todo items**.
-   **Delete Todo items** (both single and bulk deletion).
-   **Filter Todos** by status (all, completed, pending).
-   **Mark Todo items as completed**.
-   Display tasks in a clean and responsive interface with **MUI** components.

## Tech Stack

-   **Next.js** - React framework for building server-rendered applications.
-   **TypeScript** - Superset of JavaScript that provides static typing.
-   **Material-UI (MUI)** - A popular React component library for implementing the Material Design system.
-   **Turbopack** - A modern build system that is optimized for Next.js apps.

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:BladeCKG/todo-app-kadince.git
    ```

2. Navigate into the project directory:

    ```bash
    cd todo-app-kadince
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and go to **http://localhost:3000** to view the app.

## App Structure

-   **`page.tsx`**: Contains the main pages of the app.
-   **`components`**: Reusable components like `TodoItem`, `TodoList`, and `TodoForm`.
-   **`types`**: TypeScript types for the Todo items.
-   **`public`**: Static assets like images, fonts, etc.

## How to Use

1. **Add Todo**: Click on the "New Todo Item" button, fill out the details, and submit.
2. **Edit Todo**: Click the "Edit" button next to any todo item to modify it.
3. **Delete Todo**: Click the "Delete" button to delete a todo item. You can also select multiple todos for bulk deletion.
4. **Mark as Completed**: Use the checkbox to mark a todo as completed.
5. **Filter Todos**: Use the filter buttons to view all todos, completed todos, or pending todos.

## Deployment

This app can be easily deployed using **Vercel** or **Netlify**. Simply follow the deployment guides on their respective platforms.

### Vercel

1. Create a Vercel account at [https://vercel.com](https://vercel.com).
2. Connect your GitHub repository to Vercel.
3. Vercel will automatically build and deploy the app.

### Netlify

1. Create a Netlify account at [https://netlify.com](https://netlify.com).
2. Connect your GitHub repository to Netlify.
3. Netlify will automatically build and deploy the app.

## Contributing

If you’d like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   **Material-UI (MUI)**: The Material Design component library for React.
-   **Next.js**: React framework for building modern web applications.
