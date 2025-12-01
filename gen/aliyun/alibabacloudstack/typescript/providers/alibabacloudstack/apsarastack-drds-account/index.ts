// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackDrdsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#description ApsarastackDrdsAccount#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#drds_account_name ApsarastackDrdsAccount#drds_account_name}
  */
  readonly drdsAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#id ApsarastackDrdsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#instance_id ApsarastackDrdsAccount#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#password ApsarastackDrdsAccount#password}
  */
  readonly password: string;
  /**
  * db_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#db_privileges ApsarastackDrdsAccount#db_privileges}
  */
  readonly dbPrivileges: ApsarastackDrdsAccountDbPrivileges[] | cdktf.IResolvable;
}
export interface ApsarastackDrdsAccountDbPrivileges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#db_name ApsarastackDrdsAccount#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#privilege ApsarastackDrdsAccount#privilege}
  */
  readonly privilege: string;
}

export function apsarastackDrdsAccountDbPrivilegesToTerraform(struct?: ApsarastackDrdsAccountDbPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    privilege: cdktf.stringToTerraform(struct!.privilege),
  }
}


export function apsarastackDrdsAccountDbPrivilegesToHclTerraform(struct?: ApsarastackDrdsAccountDbPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege: {
      value: cdktf.stringToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackDrdsAccountDbPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackDrdsAccountDbPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackDrdsAccountDbPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbName = undefined;
      this._privilege = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbName = value.dbName;
      this._privilege = value.privilege;
    }
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // privilege - computed: false, optional: false, required: true
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }
}

export class ApsarastackDrdsAccountDbPrivilegesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackDrdsAccountDbPrivileges[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackDrdsAccountDbPrivilegesOutputReference {
    return new ApsarastackDrdsAccountDbPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account apsarastack_drds_account}
*/
export class ApsarastackDrdsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_drds_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackDrdsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackDrdsAccount to import
  * @param importFromId The id of the existing ApsarastackDrdsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackDrdsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_drds_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_drds_account apsarastack_drds_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackDrdsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackDrdsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_drds_account',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._drdsAccountName = config.drdsAccountName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._password = config.password;
    this._dbPrivileges.internalValue = config.dbPrivileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getNumberAttribute('account_type');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // drds_account_name - computed: false, optional: false, required: true
  private _drdsAccountName?: string; 
  public get drdsAccountName() {
    return this.getStringAttribute('drds_account_name');
  }
  public set drdsAccountName(value: string) {
    this._drdsAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drdsAccountNameInput() {
    return this._drdsAccountName;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // db_privileges - computed: false, optional: false, required: true
  private _dbPrivileges = new ApsarastackDrdsAccountDbPrivilegesList(this, "db_privileges", true);
  public get dbPrivileges() {
    return this._dbPrivileges;
  }
  public putDbPrivileges(value: ApsarastackDrdsAccountDbPrivileges[] | cdktf.IResolvable) {
    this._dbPrivileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPrivilegesInput() {
    return this._dbPrivileges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      drds_account_name: cdktf.stringToTerraform(this._drdsAccountName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      password: cdktf.stringToTerraform(this._password),
      db_privileges: cdktf.listMapper(apsarastackDrdsAccountDbPrivilegesToTerraform, true)(this._dbPrivileges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drds_account_name: {
        value: cdktf.stringToHclTerraform(this._drdsAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_privileges: {
        value: cdktf.listMapperHcl(apsarastackDrdsAccountDbPrivilegesToHclTerraform, true)(this._dbPrivileges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackDrdsAccountDbPrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
