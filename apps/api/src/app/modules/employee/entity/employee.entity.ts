import { Table, Column, Model, DataType, BelongsTo, HasOne, HasMany, ForeignKey } from 'sequelize-typescript';

@Table
export class Employee extends Model<Employee>{
    

        @Column({
            type: DataType.STRING,
            allowNull: false
        })
        employee_name:string;


        @Column({
            type: DataType.DOUBLE(15,2),
            allowNull: false
        })
        employee_base_salary:number;

    
        @Column({
            type: DataType.DOUBLE(15,2),
            allowNull: false
        })
        employee_bonus:number;

        
}