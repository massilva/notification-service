import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class Usecase<I, O> {
  abstract execute(param: I): Promise<O>;
}
