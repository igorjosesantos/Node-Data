﻿import Mongoose = require("mongoose");
import {Types} from 'mongoose';
import {employee} from './employee';
import {field, document, transient} from '../../mongoose/decorators';
import {Strict} from '../../mongoose/enums/';
import {onetomany, manytoone, manytomany, onetoone, promisable, IPromisableFetchParam} from '../../core/decorators';
import {baseModel} from './baseModel';
import { StorageType } from "../../core/enums/index";

@document({ name: 'company', strict: Strict.false })
export class company {

    @field({ primary: true, autogenerated: true })
    _id: number;

    @onetoone({ rel: 'employee', itemType: employee, embedded: true, persist: true, eagerLoading: false, deleteCascade: true })
    employeeOTO: employee;

    @onetomany({ rel: 'employee', itemType: employee, embedded: true, persist: true, eagerLoading: false, deleteCascade: true })
    employeeOTM: Array<employee>;

    @onetoone({ rel: 'employee', itemType: employee, embedded: false, persist: true, eagerLoading: true, deleteCascade: true })
    employeeOTOF: employee;

    @onetomany({ rel: 'employee', itemType: employee, embedded: false, persist: true, eagerLoading: true, deleteCascade: true })
    employeeOTMF: Array<employee>;

    @onetomany({ rel: 'employee', itemType: employee, embedded: true, persist: true, eagerLoading: false, storageType: StorageType.JSONMAP, deleteCascade: true })
    jEmployeeOTM: Array<employee>;

}

export default company;