# 🚀 Shodesh-board-server

This is a modular and scalable backend built with [NestJS](https://nestjs.com/) using [PostgreSQL](https://www.postgresql.org/) as the database and [TypeORM](https://typeorm.io/) as the ORM.

---

## 📦 Tech Stack

- **Backend Framework:** [NestJS](https://nestjs.com/)
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Config Management:** @nestjs/config
- **Validation:** class-validator + class-transformer

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shatab99/shodesh-board-server.git
cd your-nestjs-repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URI=postgresql://username:password@localhost:5432/your_database
PORT=3000
```

> Make sure your PostgreSQL server is running and the database exists.

---

### 4. Run the Server

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── app.module.ts
├── main.ts
├── users/
│   ├── users.module.ts
│   ├── users.controller.ts
│   ├── providers/
│   │   └── users.service.ts
├── common/
│   └── dto/
│       └── ...
```

---

## 📑 Features

- ✅ Modular feature structure (e.g. Users, Auth)
- ✅ PostgreSQL integration with TypeORM
- ✅ Environment-based configuration via `@nestjs/config`
- ✅ DTO validation using `class-validator`
- ✅ Clean and testable service layers

---

## 📚 Useful Scripts

| Script | Description |
|--------|-------------|
| `npm run start` | Start app |
| `npm run dev` | Start with hot-reload |
| `npm run build` | Build production bundle |
| `npm run format` | Format code with Prettier |

---

## 🛡️ License

MIT

---

## 👨‍💻 Author

Developed by [Md Shahriar Shatab](https://github.com/Shatab99)  
Feel free to contribute or fork this project.
