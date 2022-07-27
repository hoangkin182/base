import { toPaginationResponse } from "src/common/util/query-util";
import { TblUser } from "src/database/entities/tbl-user.entity";
import { Brackets, EntityRepository, Repository } from "typeorm";

@EntityRepository(TblUser)
export class UserRepository extends Repository<TblUser> {

}
