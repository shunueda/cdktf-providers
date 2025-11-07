// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#cloud_db_system_id DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#cloud_db_system_id}
  */
  readonly cloudDbSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#enable_cloud_database_management DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#enable_cloud_database_management}
  */
  readonly enableCloudDatabaseManagement: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#id DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#is_enabled DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#metadata DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#metadata}
  */
  readonly metadata?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#timeouts DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts;
}
export interface DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#create DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#delete DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#update DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeoutsToTerraform(struct?: DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeoutsToHclTerraform(struct?: DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management oci_database_management_cloud_db_system_cloud_database_managements_management}
*/
export class DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_db_system_cloud_database_managements_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement to import
  * @param importFromId The id of the existing DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_db_system_cloud_database_managements_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_cloud_db_system_cloud_database_managements_management oci_database_management_cloud_db_system_cloud_database_managements_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_cloud_db_system_cloud_database_managements_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudDbSystemId = config.cloudDbSystemId;
    this._enableCloudDatabaseManagement = config.enableCloudDatabaseManagement;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._metadata = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_db_system_id - computed: false, optional: false, required: true
  private _cloudDbSystemId?: string; 
  public get cloudDbSystemId() {
    return this.getStringAttribute('cloud_db_system_id');
  }
  public set cloudDbSystemId(value: string) {
    this._cloudDbSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDbSystemIdInput() {
    return this._cloudDbSystemId;
  }

  // enable_cloud_database_management - computed: false, optional: false, required: true
  private _enableCloudDatabaseManagement?: boolean | cdktf.IResolvable; 
  public get enableCloudDatabaseManagement() {
    return this.getBooleanAttribute('enable_cloud_database_management');
  }
  public set enableCloudDatabaseManagement(value: boolean | cdktf.IResolvable) {
    this._enableCloudDatabaseManagement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudDatabaseManagementInput() {
    return this._enableCloudDatabaseManagement;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_db_system_id: cdktf.stringToTerraform(this._cloudDbSystemId),
      enable_cloud_database_management: cdktf.booleanToTerraform(this._enableCloudDatabaseManagement),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      metadata: cdktf.stringToTerraform(this._metadata),
      timeouts: databaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_db_system_id: {
        value: cdktf.stringToHclTerraform(this._cloudDbSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cloud_database_management: {
        value: cdktf.booleanToHclTerraform(this._enableCloudDatabaseManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementCloudDbSystemCloudDatabaseManagementsManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
