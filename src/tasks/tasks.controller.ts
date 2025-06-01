import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('allTasks')
    getAllTasks_() {
        return this.tasksService.getAllTasks();
    }

    @Get('allTables')
    getAllTables() {
        return this.tasksService.getAllTablesQuery();
    }

    @Get(':id')
    // @Get('allTasks/:id')
    getById(@Param('id') id: string) {
        return this.tasksService.getById(+id); // + converts to number
    }
}
