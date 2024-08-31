export abstract class Repository<T> {
  abstract insertOne(data: any): Promise<T>;
  abstract insertMany(data: any): Promise<T[]>;
  abstract find(criteria: any): Promise<T[]>;
  abstract deleteOne(criteria: any): Promise<T>;
  abstract findOne(criteria: any): Promise<T | null>;
  abstract updateOne(updateData: any, criteria: any): Promise<T | null>;
  abstract updateMany(criteria: any, options: any, updateData: any): Promise<T[]>;
  abstract count(criteria: any): Promise<number>;
}
