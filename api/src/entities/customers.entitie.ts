import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity("customers")
class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "text" })
  name: string

  @Column({ type: "text", unique: true })
  cpf: string

  @Column({ type: "text" })
  email: string

  @Column({ type: "text" })
  favoriteColor: string

  @Column({ type: "text" })
  notes: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default Customer
