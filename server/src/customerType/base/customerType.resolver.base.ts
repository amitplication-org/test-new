/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCustomerTypeArgs } from "./CreateCustomerTypeArgs";
import { UpdateCustomerTypeArgs } from "./UpdateCustomerTypeArgs";
import { DeleteCustomerTypeArgs } from "./DeleteCustomerTypeArgs";
import { CustomerTypeFindManyArgs } from "./CustomerTypeFindManyArgs";
import { CustomerTypeFindUniqueArgs } from "./CustomerTypeFindUniqueArgs";
import { CustomerType } from "./CustomerType";
import { Customer } from "../../customer/base/Customer";
import { CustomerTypeService } from "../customerType.service";

@graphql.Resolver(() => CustomerType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CustomerTypeResolverBase {
  constructor(
    protected readonly service: CustomerTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "read",
    possession: "any",
  })
  async _customerTypesMeta(
    @graphql.Args() args: CustomerTypeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CustomerType])
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "read",
    possession: "any",
  })
  async customerTypes(
    @graphql.Args() args: CustomerTypeFindManyArgs
  ): Promise<CustomerType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CustomerType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "read",
    possession: "own",
  })
  async customerType(
    @graphql.Args() args: CustomerTypeFindUniqueArgs
  ): Promise<CustomerType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerType)
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "create",
    possession: "any",
  })
  async createCustomerType(
    @graphql.Args() args: CreateCustomerTypeArgs
  ): Promise<CustomerType> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customers: args.data.customers
          ? {
              connect: args.data.customers,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerType)
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "update",
    possession: "any",
  })
  async updateCustomerType(
    @graphql.Args() args: UpdateCustomerTypeArgs
  ): Promise<CustomerType | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customers: args.data.customers
            ? {
                connect: args.data.customers,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CustomerType)
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "delete",
    possession: "any",
  })
  async deleteCustomerType(
    @graphql.Args() args: DeleteCustomerTypeArgs
  ): Promise<CustomerType | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async customers(
    @graphql.Parent() parent: CustomerType
  ): Promise<Customer | null> {
    const result = await this.service.getCustomers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
