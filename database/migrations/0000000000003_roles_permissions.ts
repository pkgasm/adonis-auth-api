import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolePermissions extends BaseSchema {
    protected tableName = 'role_permissions'
    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary()
            table
                .uuid('role_id')
                .references('id')
                .inTable('roles')
            table
                .uuid('permission_id')
                .references('id')
                .inTable('permissions')
            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true }).notNullable()
            table.timestamp('updated_at', { useTz: true }).notNullable()
        })
    }
    public async down() {
        this.schema.dropTable(this.tableName)
    }
}