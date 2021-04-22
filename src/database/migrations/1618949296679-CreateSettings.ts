import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618949296679 implements MigrationInterface {
    
    tableName = "settings";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:this.tableName,
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        generationStrategy:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"username",
                        type:"varchar",
                    },
                    {
                        name:"chat",
                        type:"boolean",
                        default:true
                    },
                    {
                        name:"updatedAt",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"createdAt",
                        type:"timestamp",
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
