// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbClusterDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Character Set Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#character_set CynosdbClusterDatabases#character_set}
  */
  readonly characterSet: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#cluster_id CynosdbClusterDatabases#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Sort Rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#collate_rule CynosdbClusterDatabases#collate_rule}
  */
  readonly collateRule: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#db_name CynosdbClusterDatabases#db_name}
  */
  readonly dbName: string;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#description CynosdbClusterDatabases#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#id CynosdbClusterDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * user_host_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#user_host_privileges CynosdbClusterDatabases#user_host_privileges}
  */
  readonly userHostPrivileges?: CynosdbClusterDatabasesUserHostPrivileges[] | cdktf.IResolvable;
}
export interface CynosdbClusterDatabasesUserHostPrivileges {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#db_host CynosdbClusterDatabases#db_host}
  */
  readonly dbHost: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#db_privilege CynosdbClusterDatabases#db_privilege}
  */
  readonly dbPrivilege: string;
  /**
  * Authorized Users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#db_user_name CynosdbClusterDatabases#db_user_name}
  */
  readonly dbUserName: string;
}

export function cynosdbClusterDatabasesUserHostPrivilegesToTerraform(struct?: CynosdbClusterDatabasesUserHostPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_host: cdktf.stringToTerraform(struct!.dbHost),
    db_privilege: cdktf.stringToTerraform(struct!.dbPrivilege),
    db_user_name: cdktf.stringToTerraform(struct!.dbUserName),
  }
}


export function cynosdbClusterDatabasesUserHostPrivilegesToHclTerraform(struct?: CynosdbClusterDatabasesUserHostPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_host: {
      value: cdktf.stringToHclTerraform(struct!.dbHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_privilege: {
      value: cdktf.stringToHclTerraform(struct!.dbPrivilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user_name: {
      value: cdktf.stringToHclTerraform(struct!.dbUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbClusterDatabasesUserHostPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbClusterDatabasesUserHostPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbHost = this._dbHost;
    }
    if (this._dbPrivilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPrivilege = this._dbPrivilege;
    }
    if (this._dbUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUserName = this._dbUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbClusterDatabasesUserHostPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbHost = undefined;
      this._dbPrivilege = undefined;
      this._dbUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbHost = value.dbHost;
      this._dbPrivilege = value.dbPrivilege;
      this._dbUserName = value.dbUserName;
    }
  }

  // db_host - computed: false, optional: false, required: true
  private _dbHost?: string; 
  public get dbHost() {
    return this.getStringAttribute('db_host');
  }
  public set dbHost(value: string) {
    this._dbHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHostInput() {
    return this._dbHost;
  }

  // db_privilege - computed: false, optional: false, required: true
  private _dbPrivilege?: string; 
  public get dbPrivilege() {
    return this.getStringAttribute('db_privilege');
  }
  public set dbPrivilege(value: string) {
    this._dbPrivilege = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPrivilegeInput() {
    return this._dbPrivilege;
  }

  // db_user_name - computed: false, optional: false, required: true
  private _dbUserName?: string; 
  public get dbUserName() {
    return this.getStringAttribute('db_user_name');
  }
  public set dbUserName(value: string) {
    this._dbUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserNameInput() {
    return this._dbUserName;
  }
}

export class CynosdbClusterDatabasesUserHostPrivilegesList extends cdktf.ComplexList {
  public internalValue? : CynosdbClusterDatabasesUserHostPrivileges[] | cdktf.IResolvable

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
  public get(index: number): CynosdbClusterDatabasesUserHostPrivilegesOutputReference {
    return new CynosdbClusterDatabasesUserHostPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases tencentcloud_cynosdb_cluster_databases}
*/
export class CynosdbClusterDatabases extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_cluster_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbClusterDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbClusterDatabases to import
  * @param importFromId The id of the existing CynosdbClusterDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbClusterDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_cluster_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_databases tencentcloud_cynosdb_cluster_databases} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbClusterDatabasesConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbClusterDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_cluster_databases',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._characterSet = config.characterSet;
    this._clusterId = config.clusterId;
    this._collateRule = config.collateRule;
    this._dbName = config.dbName;
    this._description = config.description;
    this._id = config.id;
    this._userHostPrivileges.internalValue = config.userHostPrivileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set - computed: false, optional: false, required: true
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // collate_rule - computed: false, optional: false, required: true
  private _collateRule?: string; 
  public get collateRule() {
    return this.getStringAttribute('collate_rule');
  }
  public set collateRule(value: string) {
    this._collateRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collateRuleInput() {
    return this._collateRule;
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

  // user_host_privileges - computed: false, optional: true, required: false
  private _userHostPrivileges = new CynosdbClusterDatabasesUserHostPrivilegesList(this, "user_host_privileges", false);
  public get userHostPrivileges() {
    return this._userHostPrivileges;
  }
  public putUserHostPrivileges(value: CynosdbClusterDatabasesUserHostPrivileges[] | cdktf.IResolvable) {
    this._userHostPrivileges.internalValue = value;
  }
  public resetUserHostPrivileges() {
    this._userHostPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHostPrivilegesInput() {
    return this._userHostPrivileges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_set: cdktf.stringToTerraform(this._characterSet),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      collate_rule: cdktf.stringToTerraform(this._collateRule),
      db_name: cdktf.stringToTerraform(this._dbName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      user_host_privileges: cdktf.listMapper(cynosdbClusterDatabasesUserHostPrivilegesToTerraform, true)(this._userHostPrivileges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_set: {
        value: cdktf.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collate_rule: {
        value: cdktf.stringToHclTerraform(this._collateRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      user_host_privileges: {
        value: cdktf.listMapperHcl(cynosdbClusterDatabasesUserHostPrivilegesToHclTerraform, true)(this._userHostPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbClusterDatabasesUserHostPrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
