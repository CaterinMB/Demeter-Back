import { Router } from "express";
import { getUsers, getUser, checkForDuplicates, createUser, updateUser, toggleUserStatus, deleteUser, existUserByEmailOrId } from '../controllers/user.controller.js'; // Empleados

import { authRequired } from '../middlewares/validateToken.js'
import ModuleValidationMiddleware from '../middlewares/ModuleValidation.middleware.js'

const router = Router();

const moduleValidation = new ModuleValidationMiddleware(
    ({
        res,
        error
    }) => {
        res.json({
            message: error.message
        })
    }
)

router.get('/user', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.USER
), getUsers);
router.get('/user/:id', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.USER
), getUser);
router.put('/user/:id', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.USER
), updateUser);
router.put("/user/toggle/:id", authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.USER
), toggleUserStatus);
router.delete('/user/:id', authRequired, moduleValidation.hasPermissions(
    moduleValidation.MODULES.USER
), deleteUser);
router.get('/existUserByEmailOrId/:email/:document/:userType(supplier|user)', existUserByEmailOrId);

router.post('/add_user', checkForDuplicates, createUser);

export default router;
