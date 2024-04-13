# WanderWell - Travel Organizer App

This is a **Next.js 14** project that helps you organize your travel ideas. In the future, you will be able to share your travels with friends.

## 🚀 Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) must be installed on your system.
- [pnpm](https://pnpm.io/) should be installed for dependency management.

### Running the App in Development Mode

#### Using PostgreSQL Database

```bash
pnpm compose:up:pg
```

#### Using MongoDB Database

```bash
pnpm compose:up:mongo
```

## 📦 Database Management

### Available Database Dumps

You have pre-existing database dumps available for both **PostgreSQL** and **MongoDB**.

#### Dump for PostgreSQL

```bash
pnpm db:pg:dump
```

#### Dump for MongoDB

```bash
pnpm db:mongo:dump
```

## 📜 Available Commands

The following commands are available in `package.json`:

### Development & Build

- `pnpm dev` - Starts the development server.
- `pnpm build` - Builds the application for production.
- `pnpm start` - Runs the built application.
- `pnpm lint` - Runs ESLint to check for code issues.
- `pnpm format` - Formats code using Prettier.

### Testing

- `pnpm test` - Runs unit tests with Vitest.
- `pnpm coverage` - Runs tests and generates a coverage report.
- `pnpm cypress:open` - Opens Cypress for end-to-end testing.
- `pnpm e2e` - Runs end-to-end tests with a dev server.
- `pnpm e2e:headless` - Runs headless end-to-end tests.
- `pnpm component` - Opens Cypress for component testing.
- `pnpm component:headless` - Runs component tests in headless mode.

### Docker & Database Setup

- `pnpm compose:up:mongo` - Starts the app with **MongoDB**.
- `pnpm compose:down:mongo` - Stops the **MongoDB** instance.
- `pnpm compose:up:pg` - Starts the app with **PostgreSQL** and runs migrations.
- `pnpm compose:down:pg` - Stops the **PostgreSQL** instance.
- `pnpm db:pg:generate:migration` - Generates a database migration using Drizzle.
- `pnpm db:pg:migrate` - Applies database migrations using Drizzle.

## 🛠 Contributing

If you'd like to contribute, feel free to open issues and submit pull requests.

---

Enjoy organizing your travels with **WanderWell**! ✈️ 🌍
