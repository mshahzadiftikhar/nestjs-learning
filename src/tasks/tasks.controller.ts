import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { PutTaskDto } from './dto/update.put.task.dto';
import { PatchTaskDto } from './dto/update.patch.task.dto';

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

    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDto) {
        return this.tasksService.addTask(createTaskDTO);
    }

    @Put(':id')
    replaceTask(@Param('id') id: string, @Body() putTaskDTO: PutTaskDto) {
        return this.tasksService.replaceTask(+id, putTaskDTO);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() patchTaskDTO: PatchTaskDto) {
        return this.tasksService.updateTask(+id, patchTaskDTO);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(+id);
    }
}
