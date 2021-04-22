import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619045875770 implements MigrationInterface {

    tableName = "messages"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"messages",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"adminID",
                        type:"uuid",
                        isNullable:true
                    },
                    {
                        name:"userId",
                        type:"uuid",
                    },
                    {
                        name:"text",
                        type:"varchar"
                    },
                    {
                        name:"createdAt",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"FK_user",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["userId"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
