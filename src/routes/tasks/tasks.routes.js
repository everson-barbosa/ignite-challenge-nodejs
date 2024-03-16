import { Database } from "../../database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "../../utils/build-route-path.js";
import { responseNotFound } from './response-not-found.js'

const database = new Database();

export const tasksRoutes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (request, response) => {
      const { title, description } = request.query;

      const tasks = database.select(
        "tasks",
        {
            title,
            description
        }  
      );

      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (request, response) => {
      const { title, description } = request.body;

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      database.insert("tasks", task);

      return response.writeHead(201).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (request, response) => {
      const { id } = request.params;
      const { title, description  } = request.body;

      const [targetTask] = database.select("tasks", { id })

      if (!targetTask) {
        return responseNotFound(response)
      }

      database.update("tasks", id, {
        ...targetTask,
        title: title ?? targetTask.title,
        description: description ?? targetTask.description,
        updated_at: new Date(),
      });

      return response.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (request, response) => {
      const { id } = request.params;

      const [targetTask] = database.select("tasks", { id })

      if (!targetTask) {
        return responseNotFound(response)
      }

      database.update("tasks", id, {
        ...targetTask,
        completed_at: targetTask.completed_at ? null : new Date()
      });

      return response.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (request, response) => {
      const { id } = request.params;

      const [targetTask] = database.select("tasks", { id })

      if (!targetTask) {
        return response(responseNotFound)
      }

      database.delete("tasks", id);

      return response.writeHead(204).end();
    },
  },
];
