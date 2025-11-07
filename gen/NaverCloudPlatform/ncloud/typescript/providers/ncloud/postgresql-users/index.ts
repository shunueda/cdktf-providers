// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#id PostgresqlUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#postgresql_user_list PostgresqlUsers#postgresql_user_list}
  */
  readonly postgresqlUserList: PostgresqlUsersPostgresqlUserListStruct[] | cdktf.IResolvable;
}
export interface PostgresqlUsersPostgresqlUserListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#client_cidr PostgresqlUsers#client_cidr}
  */
  readonly clientCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#name PostgresqlUsers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#password PostgresqlUsers#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#replication_role PostgresqlUsers#replication_role}
  */
  readonly replicationRole: boolean | cdktf.IResolvable;
}

export function postgresqlUsersPostgresqlUserListStructToTerraform(struct?: PostgresqlUsersPostgresqlUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cidr: cdktf.stringToTerraform(struct!.clientCidr),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    replication_role: cdktf.booleanToTerraform(struct!.replicationRole),
  }
}


export function postgresqlUsersPostgresqlUserListStructToHclTerraform(struct?: PostgresqlUsersPostgresqlUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cidr: {
      value: cdktf.stringToHclTerraform(struct!.clientCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_role: {
      value: cdktf.booleanToHclTerraform(struct!.replicationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlUsersPostgresqlUserListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PostgresqlUsersPostgresqlUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCidr = this._clientCidr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._replicationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationRole = this._replicationRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlUsersPostgresqlUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCidr = undefined;
      this._name = undefined;
      this._password = undefined;
      this._replicationRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCidr = value.clientCidr;
      this._name = value.name;
      this._password = value.password;
      this._replicationRole = value.replicationRole;
    }
  }

  // client_cidr - computed: false, optional: false, required: true
  private _clientCidr?: string; 
  public get clientCidr() {
    return this.getStringAttribute('client_cidr');
  }
  public set clientCidr(value: string) {
    this._clientCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrInput() {
    return this._clientCidr;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // replication_role - computed: false, optional: false, required: true
  private _replicationRole?: boolean | cdktf.IResolvable; 
  public get replicationRole() {
    return this.getBooleanAttribute('replication_role');
  }
  public set replicationRole(value: boolean | cdktf.IResolvable) {
    this._replicationRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRoleInput() {
    return this._replicationRole;
  }
}

export class PostgresqlUsersPostgresqlUserListStructList extends cdktf.ComplexList {
  public internalValue? : PostgresqlUsersPostgresqlUserListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PostgresqlUsersPostgresqlUserListStructOutputReference {
    return new PostgresqlUsersPostgresqlUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users ncloud_postgresql_users}
*/
export class PostgresqlUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_postgresql_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlUsers to import
  * @param importFromId The id of the existing PostgresqlUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_postgresql_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_users ncloud_postgresql_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlUsersConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_postgresql_users',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._postgresqlUserList.internalValue = config.postgresqlUserList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // postgresql_user_list - computed: false, optional: false, required: true
  private _postgresqlUserList = new PostgresqlUsersPostgresqlUserListStructList(this, "postgresql_user_list", false);
  public get postgresqlUserList() {
    return this._postgresqlUserList;
  }
  public putPostgresqlUserList(value: PostgresqlUsersPostgresqlUserListStruct[] | cdktf.IResolvable) {
    this._postgresqlUserList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlUserListInput() {
    return this._postgresqlUserList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      postgresql_user_list: cdktf.listMapper(postgresqlUsersPostgresqlUserListStructToTerraform, false)(this._postgresqlUserList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgresql_user_list: {
        value: cdktf.listMapperHcl(postgresqlUsersPostgresqlUserListStructToHclTerraform, false)(this._postgresqlUserList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PostgresqlUsersPostgresqlUserListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
