# **Task Manager Application**

A simple task management application built with React.

---

## **Features**

1. **Task Input:** Add tasks with a title.
2. **Task Deletion:** Delete tasks from the task list.
3. **Task Persistence:** Tasks are saved in local storage and persist across page reloads.
4. **Task Search:** Search for tasks by title or description using the search bar.
5. **Task Completion:** Mark tasks as completed by clicking on the title or status.
6. **Priority Setting:** Assign priority levels (e.g., High, Medium, Low) to tasks.
7. **Task Filtering:** Sort tasks based on priority.
8. **UI Animation:** Smooth and modern user interface animations.

---

## **Tech Stack**
- **React:** Core library for building the user interface.
- **Context API:** For centralized state management.
- **Local Storage:** To persist tasks across page reloads.
- **TailwindCSS and CSS:** For styling the UI.

---

## **Application Workflow**
1. **Adding Tasks:** 
   - Users can add tasks with a title, description and optionally assign a priority.
   - Tasks are dynamically added to the list and saved in local storage.

2. **Managing Tasks:**
   - Tasks can be marked as Done and , searched by title or description and filtered by priority.
   - Tasks can also be deleted, with changes instantly reflected in the local storage.

3. **Data Persistence:**
   - Tasks are saved in the local storage upon any changes, ensuring they remain available even after a page reload.

---

## **Setup Instructions**

Clone the repository:
```
git clone https://github.com/TheXro/TaskManager 
cd TaskManager
```
  You should clone your own Fork

Install dependencies:
```
npm install
```
Start the development server:

    npm run dev

Open your browser at http://localhost:5173 to view the application.

---
## **Assumptions**
- **Data Persistence:** The application assumes that all tasks can be managed locally and does not require a backend for storage.
- **Task Format:** Each task has a title, an optional priority, and a status (completed/incomplete).
- **Filtering:** The "All" filter includes tasks of all priority levels, while other filters narrow down tasks by the selected priority.



