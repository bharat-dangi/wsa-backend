import { DatabaseDSBase } from "../../source/database/database.data.source.base";
import { Repository } from "./repository";

export class BaseRepository<T> implements Repository<T> {
  dataSource: DatabaseDSBase<T>;

  constructor(dataSource: DatabaseDSBase<T>) {
    this.dataSource = dataSource as DatabaseDSBase<T>;
  }

  async count(criteria: any): Promise<number> {
    return await this.dataSource.count(criteria);
  }

  async insertOne(data: any): Promise<T> {
    return await this.dataSource.insertOne(data);
  }

  async insertMany(data: any): Promise<T[]> {
    return await this.dataSource.insertMany(data);
  }

  async find(criteria: any): Promise<T[]> {
    return await this.dataSource.find(criteria);
  }

  async deleteOne(criteria: any): Promise<T> {
    return await this.dataSource.deleteOne(criteria);
  }

  async findOne(criteria: any): Promise<T | null> {
    return await this.dataSource.findOne(criteria);
  }

  async updateOne(updateData: any, criteria: any): Promise<T | null> {
    return await this.dataSource.updateOne(updateData, criteria);
  }

  async updateMany(criteria: any, options: any, updateData: any): Promise<T[]> {
    return await this.dataSource.updateMany(criteria, options, updateData);
  }
}
