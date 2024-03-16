import { parse } from 'csv-parse';
import { Database } from "./database.js";
import { randomUUID } from 'node:crypto'

const database = new Database()

export const tasksImport = async (request) => {
    let index = 0
    const parser = request.pipe(parse())

    for await (const record of parser) {
      const [title, description] = record
      if(index > 0) {
        database.insert('tasks', {
          id: randomUUID(),
          title,
          description,
          completed_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        })
      }
      index++
    }
}