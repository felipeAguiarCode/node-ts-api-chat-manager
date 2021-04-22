import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619038762330 implements MigrationInterface {
     tableName = "users";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:this.tableName,
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"createdAt",
                        type:"timestramp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
