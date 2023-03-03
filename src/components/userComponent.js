import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User Component Eklendi")

let userService = new UserService()

let user1 = new User(1, "Ali Rıza", "Yüksel", "İstanbul")
userService.add(user1.firstName)

userService.add();
userService.getById(1);
userService.list();