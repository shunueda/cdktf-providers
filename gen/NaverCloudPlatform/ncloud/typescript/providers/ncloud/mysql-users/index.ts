// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#mysql_instance_no MysqlUsers#mysql_instance_no}
  */
  readonly mysqlInstanceNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#mysql_user_list MysqlUsers#mysql_user_list}
  */
  readonly mysqlUserList: MysqlUsersMysqlUserListStruct[] | cdktf.IResolvable;
}
export interface MysqlUsersMysqlUserListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#authority MysqlUsers#authority}
  */
  readonly authority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#host_ip MysqlUsers#host_ip}
  */
  readonly hostIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#is_system_table_access MysqlUsers#is_system_table_access}
  */
  readonly isSystemTableAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#name MysqlUsers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#password MysqlUsers#password}
  */
  readonly password: string;
}

export function mysqlUsersMysqlUserListStructToTerraform(struct?: MysqlUsersMysqlUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    is_system_table_access: cdktf.booleanToTerraform(struct!.isSystemTableAccess),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function mysqlUsersMysqlUserListStructToHclTerraform(struct?: MysqlUsersMysqlUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_system_table_access: {
      value: cdktf.booleanToHclTerraform(struct!.isSystemTableAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlUsersMysqlUserListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlUsersMysqlUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._isSystemTableAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystemTableAccess = this._isSystemTableAccess;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlUsersMysqlUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._hostIp = undefined;
      this._isSystemTableAccess = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._hostIp = value.hostIp;
      this._isSystemTableAccess = value.isSystemTableAccess;
      this._name = value.name;
      this._password = value.password;
    }
  }

  // authority - computed: false, optional: false, required: true
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // host_ip - computed: false, optional: false, required: true
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // is_system_table_access - computed: true, optional: true, required: false
  private _isSystemTableAccess?: boolean | cdktf.IResolvable; 
  public get isSystemTableAccess() {
    return this.getBooleanAttribute('is_system_table_access');
  }
  public set isSystemTableAccess(value: boolean | cdktf.IResolvable) {
    this._isSystemTableAccess = value;
  }
  public resetIsSystemTableAccess() {
    this._isSystemTableAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemTableAccessInput() {
    return this._isSystemTableAccess;
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
}

export class MysqlUsersMysqlUserListStructList extends cdktf.ComplexList {
  public internalValue? : MysqlUsersMysqlUserListStruct[] | cdktf.IResolvable

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
  public get(index: number): MysqlUsersMysqlUserListStructOutputReference {
    return new MysqlUsersMysqlUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users ncloud_mysql_users}
*/
export class MysqlUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_mysql_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlUsers to import
  * @param importFromId The id of the existing MysqlUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_mysql_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_users ncloud_mysql_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlUsersConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_mysql_users',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mysqlInstanceNo = config.mysqlInstanceNo;
    this._mysqlUserList.internalValue = config.mysqlUserList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mysql_instance_no - computed: false, optional: false, required: true
  private _mysqlInstanceNo?: string; 
  public get mysqlInstanceNo() {
    return this.getStringAttribute('mysql_instance_no');
  }
  public set mysqlInstanceNo(value: string) {
    this._mysqlInstanceNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInstanceNoInput() {
    return this._mysqlInstanceNo;
  }

  // mysql_user_list - computed: false, optional: false, required: true
  private _mysqlUserList = new MysqlUsersMysqlUserListStructList(this, "mysql_user_list", false);
  public get mysqlUserList() {
    return this._mysqlUserList;
  }
  public putMysqlUserList(value: MysqlUsersMysqlUserListStruct[] | cdktf.IResolvable) {
    this._mysqlUserList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlUserListInput() {
    return this._mysqlUserList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mysql_instance_no: cdktf.stringToTerraform(this._mysqlInstanceNo),
      mysql_user_list: cdktf.listMapper(mysqlUsersMysqlUserListStructToTerraform, false)(this._mysqlUserList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mysql_instance_no: {
        value: cdktf.stringToHclTerraform(this._mysqlInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_user_list: {
        value: cdktf.listMapperHcl(mysqlUsersMysqlUserListStructToHclTerraform, false)(this._mysqlUserList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlUsersMysqlUserListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
