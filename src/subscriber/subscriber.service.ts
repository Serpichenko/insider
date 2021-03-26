import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

import { Subscriber } from './entities/subscriber.entity';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,
  ) {}

  async create(createSubscriberDto: CreateSubscriberDto) {
    const subscriber = new Subscriber();
    subscriber.userId = createSubscriberDto.userId;
    subscriber.subscriberTo = createSubscriberDto.subscriberTo;
    const newSubscriber = await this.subscriberRepository.save(subscriber);
    return newSubscriber;
  }

  findAll() {
    return this.subscriberRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.subscriberRepository.findOne(id, { relations: ['user'] });
  }

  async update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
    const updated = {
      id: id,
      userId: updateSubscriberDto.userId,
      subscriberTo: updateSubscriberDto.subscriberTo,
    };
    const subscriber = await this.subscriberRepository.save(updated);
    return { subscriber };
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }
}
