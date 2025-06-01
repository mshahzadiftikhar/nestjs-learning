# HTTP Requests

### GET

 - Route to default - default is specified in @Controller annotation  
    http://localhost:3000/tasks/
    ```
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }
    ```
 - Route to specified path  
    http://localhost:3000/tasks/allTasks
    ```
    @Get('allTasks')
    getAllTasks_() {
        return this.tasksService.getAllTasks();
    }
    ```    
 - Parameterized Route  
    http://localhost:3000/tasks/1
    http://localhost:3000/tasks/allTasks/1
    ```
    @Get(':id')
    // @Get('allTasks/:id')
    getById(@Param('id') id: string) {
        return this.tasksService.getById(+id); // + converts to number
    }
    ```