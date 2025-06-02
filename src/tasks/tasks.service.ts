import { Injectable } from '@nestjs/common';
import { Task } from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create.task.dto';
import { PutTaskDto } from './dto/update.put.task.dto';
import { PatchTaskDto } from './dto/update.patch.task.dto';

@Injectable()
export class TasksService {
    private tasks = [{ id: "1", name: "Task 1", description: "This is task 1" }, { id: "2", name: "Task 2", description: "This is task 2" }, { id: "3", name: "Task 3", description: "This is task 3" }];
     constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

    // select * from task
    getAllTasks() {
        return this.tasksRepository.find();
    }

    // select * from task where id = :id
    getById(id: number) {
        return this.tasksRepository.findOneBy({ id });
    }

    getAllTablesQuery() {
        return this.tasksRepository.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `);
    }

    addTask(craeteTaskDTO: CreateTaskDto) {
        this.tasksRepository.save(craeteTaskDTO);
        return {
            message: "Task added successfully",
            task: craeteTaskDTO
        }
    }
    
    async replaceTask(id: number, putTaskDTO: PutTaskDto) {
        const task = await this.tasksRepository.findOneBy({ id });
        if (!task) {
            return { message: 'Task not found' };
        }

        task.name = putTaskDTO.name ?? task.name;
        task.description = putTaskDTO.description ?? task.description;

        this.tasksRepository.save(task);
        return {
            message: 'Task Replaced successfully',
            task: task
        };
    }

    async updateTask(id: number, patchTaskDTO: PatchTaskDto) {
        const task = await this.tasksRepository.findOneBy({ id });
        if (!task) {
            return { message: 'Task not found' };
        }

        this.tasksRepository.merge(task, patchTaskDTO);
        this.tasksRepository.save(task);
        return {
            message: 'Task updated successfully',
            task: task
        };
    }
}
