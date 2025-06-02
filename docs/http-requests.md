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
### POST
 - Create DTO class for Task: [create.task.dto](../src/tasks/dto/create.task.dto.ts)
  - Add function in service class for saving task
    ```
    addTask(craeteTaskDTO: CreateTaskDto) {
        this.tasksRepository.save(craeteTaskDTO);
        return {
            message: "Task added successfully",
            task: craeteTaskDTO
        }
    }
    ```
 - Add function in controller class
    ```
    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDto) {
        return this.tasksService.addTask(createTaskDTO);
    }
    ```
 - You can test from postman or some other method (vscode extension maybe)
    #### 1. Open Postman  
    Download it from [https://www.postman.com/downloads/](https://www.postman.com/downloads/) if you haven’t already.

    #### 2. Create a New Request

    - Click `+ New` → `HTTP Request`
    - Select **POST** method
    - Set URL: http://localhost:3000/tasks
    
    #### 3. Set Request Headers

    Under the **Headers** tab, add:

    | Key           | Value              |
    | ------------- | ------------------ |
    | Content-Type  | application/json   |

    #### 4. Set JSON Body

    Go to the **Body** tab:
    - Select **raw**
    - Choose **JSON** from the dropdown on the right

    Paste the following JSON:

    ```json
    {
    "name": "Example Task",
    "description": "This task was created from Postman"
    }

### PUT
Its used for full replacement of the object. Most of the modern APIs use PATCH or implement PUT in such a way that it allows partial replacement. We will implement the full replacement version of PUT here.
 - Add DTO for updating tasks: [update.put.task.dto.ts](../src/tasks/dto/update.put.task.dto.ts)
 - Add function is service:
    ```
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
    ```
 - Add function in controller
    ```
    @Put(':id')
    replaceTask(@Param('id') id: string, @Body() putTaskDTO: CreateTaskDto) {
        return this.tasksService.replaceTask(+id, putTaskDTO);
    }
    ```
