import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [{ id: "1", name: "Task 1", description: "This is task 1" }, { id: "2", name: "Task 2", description: "This is task 2" }, { id: "3", name: "Task 3", description: "This is task 3" }];

    getAllTasks() {
        return this.tasks;
    }

    getTaskByID(id: string) {
        return this.tasks.find(task => task.id === id);
    }
}
