# 🚗 TelePort

**TelePort** is a modular, event-driven backend system for a ride-hailing platform, inspired by services like Uber.  
Built with **Node.js**, **TypeScript**, **PostgreSQL**, and **Kafka**, it follows a microservices architecture using a `pnpm`-based monorepo setup.

> ⚠️ This project is currently a **Work In Progress**.

---

## 📦 Monorepo Structure

teleport/  
├── package.json                 # Root workspace config  
├── pnpm-workspace.yaml          # Monorepo package grouping  
├── tsconfig.json                # Root TypeScript config  
├── .gitignore  
├── node_modules/                # Centralized for all packages  
├── services/  
│   ├── auth-service/  
│   ├── user-service/  
│   └── ...                      # More microservices  
├── packages/  
│   └── common/                  # Shared utils, middlewares, etc.  
└── docker-compose.yml           # For PostgreSQL, Kafka (to be added)

---

## 🚀 Features (Planned)

- ✅ Modular services
- 📨 Kafka for event-based communication
- 📄 PostgreSQL as primary DB
- 🧪 Full testable service setup
- 🔐 Auth, User, Ride modules (WIP)

---

## 🧰 Tech Stack

- **Language:** TypeScript (ES2020+)
- **Runtime:** Node.js
- **Package Manager:** pnpm (Monorepo support)
- **Database:** PostgreSQL
- **Messaging Queue:** Apache Kafka
- **ORM:** Prisma
- **Testing:** (TBD)
- **Containers:** Docker (coming soon)

---

## 🛠️ Getting Started

```bash
# Install all dependencies
pnpm install

# Run Auth Service
pnpm --filter auth-service dev

