import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User Component Eklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Ali Rıza", "Yüksel", "İstanbul")
let user2 = new User(2, "Rıdvan", "Aydın", "Giresun")
userService.add(user1)
userService.add(user2)
console.log(userService.list())

userService.add();
userService.getById(1);
userService.list();
console.log("------------------");
userService.load();
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)