# 🧩 Document Management System

A full-stack CRUD web application built with **ASP.NET Core Web API** (Backend), **Angular** (Frontend), and **SQL Server** (Database).  
This project allows users to **create, view, edit, and delete** document records efficiently through a clean user interface.

---

## 🚀 Features
- ✏️ Create new document records  
- 📄 View all existing documents  
- 🛠️ Edit and update document details  
- 🗑️ Delete documents permanently  
- 💾 Data stored in SQL Server using Entity Framework Core  
- 💎 Responsive and modern UI with Bootstrap 5  

---

## 🏗️ Technologies Used

| Layer | Technology |
|-------|-------------|
| **Frontend** | Angular 17, Bootstrap 5 |
| **Backend** | ASP.NET Core Web API (.NET 6/7/8) |
| **Database** | Microsoft SQL Server |
| **Tools** | Visual Studio, VS Code, Postman |

---

## ⚙️ CRUD Operations Overview

| Operation | Description |
|------------|-------------|
| **Create** | Add new document records |
| **Read** | Display all documents in a list or card view |
| **Update** | Edit existing document information |
| **Delete** | Remove records from the database |

---

## 🧠 Project Architecture

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home](./Home.PNG)

### ➕ Create Page
![Create](./Create.PNG)

### ✏️ Edit Page
![Edit](./Edit.PNG)

> 💡 **Tip:** Keep your screenshots inside a folder named `screenshots` in your project root.  
> Example:
> ```
> screenshots/
> ├── Home.png
> ├── Create.png
> ├── Edit.png
> ```

---

## 🧰 Setup Instructions

### 🔹 Backend Setup
1. Open the `.sln` file in **Visual Studio**  
2. Update the **connection string** inside `appsettings.json`  
3. Run migrations (if needed)  
4. Start the API using `Ctrl + F5`

### 🔹 Frontend Setup
1. Open terminal and navigate to the Angular project folder  
   ```bash
   cd ClientApp
2.Install dependencies
npm install
2. Run the Angular app
ng serve
Open browser → http://localhost:4200
