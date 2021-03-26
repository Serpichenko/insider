import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const account = new Account();
    account.userId = createAccountDto.userId;
    account.totalYearSubs = createAccountDto.totalYearSubs;
    account.totalMonthSubs = createAccountDto.totalMonthSubs;
    account.balance = createAccountDto.balance;
    const newSubscriber = await this.accountsRepository.save(account);
    return newSubscriber;
  }

  findAll() {
    return this.accountsRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.accountsRepository.findOne(id, { relations: ['user'] });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    const updated = {
      id: id,
      userId: updateAccountDto.userId,
      totalYearSubs: updateAccountDto.totalYearSubs,
      totalMonthSubs: updateAccountDto.totalMonthSubs,
      balance: updateAccountDto.balance,
    };
    const subscriber = await this.accountsRepository.save(updated);
    return { subscriber };
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
