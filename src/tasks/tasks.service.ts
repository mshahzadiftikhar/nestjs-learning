import { Injectable } from '@nestjs/common';
import { Task } from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    private tasks = [{ id: "1", name: "Task 1", description: "This is task 1" }, { id: "2", name: "Task 2", description: "This is task 2" }, { id: "3", name: "Task 3", description: "This is task 3" }];
     constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

    // select * from tasks 
    getAllTasks() {
        return this.tasksRepository.find();
    }

    // select * from tasks where id = :id
    getById(id: number) {
        return this.tasksRepository.findOneBy({ id });
  }
}
