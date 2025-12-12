// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPolardbAccountDatabaseBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#account_name ApsarastackPolardbAccountDatabaseBinding#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#db_instance_id ApsarastackPolardbAccountDatabaseBinding#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#id ApsarastackPolardbAccountDatabaseBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * database_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#database_privileges ApsarastackPolardbAccountDatabaseBinding#database_privileges}
  */
  readonly databasePrivileges?: ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges[] | cdktf.IResolvable;
}
export interface ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#db_name ApsarastackPolardbAccountDatabaseBinding#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#privilege ApsarastackPolardbAccountDatabaseBinding#privilege}
  */
  readonly privilege?: string;
}

export function apsarastackPolardbAccountDatabaseBindingDatabasePrivilegesToTerraform(struct?: ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    privilege: cdktf.stringToTerraform(struct!.privilege),
  }
}


export function apsarastackPolardbAccountDatabaseBindingDatabasePrivilegesToHclTerraform(struct?: ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges | cdktf.IResolvable): any {
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

export class ApsarastackPolardbAccountDatabaseBindingDatabasePrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges | cdktf.IResolvable | undefined) {
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

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }
}

export class ApsarastackPolardbAccountDatabaseBindingDatabasePrivilegesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackPolardbAccountDatabaseBindingDatabasePrivilegesOutputReference {
    return new ApsarastackPolardbAccountDatabaseBindingDatabasePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding apsarastack_polardb_account_database_binding}
*/
export class ApsarastackPolardbAccountDatabaseBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_account_database_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPolardbAccountDatabaseBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPolardbAccountDatabaseBinding to import
  * @param importFromId The id of the existing ApsarastackPolardbAccountDatabaseBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPolardbAccountDatabaseBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_account_database_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_account_database_binding apsarastack_polardb_account_database_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPolardbAccountDatabaseBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPolardbAccountDatabaseBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_account_database_binding',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._databasePrivileges.internalValue = config.databasePrivileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // database_privileges - computed: false, optional: true, required: false
  private _databasePrivileges = new ApsarastackPolardbAccountDatabaseBindingDatabasePrivilegesList(this, "database_privileges", true);
  public get databasePrivileges() {
    return this._databasePrivileges;
  }
  public putDatabasePrivileges(value: ApsarastackPolardbAccountDatabaseBindingDatabasePrivileges[] | cdktf.IResolvable) {
    this._databasePrivileges.internalValue = value;
  }
  public resetDatabasePrivileges() {
    this._databasePrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivilegesInput() {
    return this._databasePrivileges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      database_privileges: cdktf.listMapper(apsarastackPolardbAccountDatabaseBindingDatabasePrivilegesToTerraform, true)(this._databasePrivileges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      database_privileges: {
        value: cdktf.listMapperHcl(apsarastackPolardbAccountDatabaseBindingDatabasePrivilegesToHclTerraform, true)(this._databasePrivileges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackPolardbAccountDatabaseBindingDatabasePrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
