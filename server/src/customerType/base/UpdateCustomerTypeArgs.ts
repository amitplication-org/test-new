/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CustomerTypeWhereUniqueInput } from "./CustomerTypeWhereUniqueInput";
import { CustomerTypeUpdateInput } from "./CustomerTypeUpdateInput";

@ArgsType()
class UpdateCustomerTypeArgs {
  @Field(() => CustomerTypeWhereUniqueInput, { nullable: false })
  where!: CustomerTypeWhereUniqueInput;
  @Field(() => CustomerTypeUpdateInput, { nullable: false })
  data!: CustomerTypeUpdateInput;
}

export { UpdateCustomerTypeArgs };
