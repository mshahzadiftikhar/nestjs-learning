# Adding a new module
Lets say we want to a add a new module named tasks
## Service
A Service in NestJS acts as a layer between the Controller and the data source (e.g., database), encapsulating business logic and reusable operations. You can use following command to add a new service for tasks:
```
nest generate service tasks
CREATE src/tasks/tasks.service.ts (93 bytes)
CREATE src/tasks/tasks.service.spec.ts (471 bytes)
UPDATE src/app.module.ts (327 bytes)
```

You can create/update these files manually as well, but command automatically creates all files and generates some code as well

- [src/tasks/tasks.service.ts](../src/tasks/tasks.service.ts)  
class where we can define different utility methods like getAllTasks(), getTaskByID(), for now, the values are hardcoded, but we can get values from some data source.

```
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    getAllTasks() {}
    getTaskByID(id: string) {}
}

```
- [src/tasks/tasks.service.spec.ts](../src/tasks/tasks.service.spec.ts)  
Class for writing unit test cases

 - update in [app.module.ts](../src/app.module.ts)  
 Service gets registered in the list of services defined:
 ```
 @Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
 ```
