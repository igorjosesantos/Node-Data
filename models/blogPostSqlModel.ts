﻿import {onetomany, manytoone, manytomany} from '../core/decorators';
import {column, entity} from '../sequelizeimp/decorators';
import {Strict} from '../sequelizeimp/enums';
import * as Sequelize from "sequelize";
import {BlogSqlModel} from "./blogSqlModel"

@entity({ tableName: 'tbl_blog_post',timestamps:false })
export class BlogPostSqlModel {
    @column({name:"id", type: Sequelize.INTEGER, allowNull:false, primaryKey: true })
    _id: number;

    @column({ name: "name", type: Sequelize.STRING(128), allowNull: false })
    name: string;   

    @manytoone({ rel: 'tbl_blog1', itemType: BlogSqlModel, embedded: false, persist: true, eagerLoading: true })
    blog: BlogSqlModel;
}

export default BlogPostSqlModel;