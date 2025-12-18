// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#enable_database_management DatabaseManagementExternalDbSystemDatabaseManagementsManagement#enable_database_management}
  */
  readonly enableDatabaseManagement: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#external_db_system_id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#external_db_system_id}
  */
  readonly externalDbSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#id DatabaseManagementExternalDbSystemDatabaseManagementsManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#license_model DatabaseManagementExternalDbSystemDatabaseManagementsManagement#license_model}
  */
  readonly licenseModel?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#timeouts DatabaseManagementExternalDbSystemDatabaseManagementsManagement#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts;
}
export interface DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#create DatabaseManagementExternalDbSystemDatabaseManagementsManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#delete DatabaseManagementExternalDbSystemDatabaseManagementsManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#update DatabaseManagementExternalDbSystemDatabaseManagementsManagement#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsToTerraform(struct?: DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsToHclTerraform(struct?: DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management oci_database_management_external_db_system_database_managements_management}
*/
export class DatabaseManagementExternalDbSystemDatabaseManagementsManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_db_system_database_managements_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalDbSystemDatabaseManagementsManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalDbSystemDatabaseManagementsManagement to import
  * @param importFromId The id of the existing DatabaseManagementExternalDbSystemDatabaseManagementsManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalDbSystemDatabaseManagementsManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_db_system_database_managements_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system_database_managements_management oci_database_management_external_db_system_database_managements_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalDbSystemDatabaseManagementsManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_db_system_database_managements_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDatabaseManagement = config.enableDatabaseManagement;
    this._externalDbSystemId = config.externalDbSystemId;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_database_management - computed: false, optional: false, required: true
  private _enableDatabaseManagement?: boolean | cdktf.IResolvable; 
  public get enableDatabaseManagement() {
    return this.getBooleanAttribute('enable_database_management');
  }
  public set enableDatabaseManagement(value: boolean | cdktf.IResolvable) {
    this._enableDatabaseManagement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDatabaseManagementInput() {
    return this._enableDatabaseManagement;
  }

  // external_db_system_id - computed: false, optional: false, required: true
  private _externalDbSystemId?: string; 
  public get externalDbSystemId() {
    return this.getStringAttribute('external_db_system_id');
  }
  public set externalDbSystemId(value: string) {
    this._externalDbSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDbSystemIdInput() {
    return this._externalDbSystemId;
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

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts) {
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
      enable_database_management: cdktf.booleanToTerraform(this._enableDatabaseManagement),
      external_db_system_id: cdktf.stringToTerraform(this._externalDbSystemId),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      timeouts: databaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_database_management: {
        value: cdktf.booleanToHclTerraform(this._enableDatabaseManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_db_system_id: {
        value: cdktf.stringToHclTerraform(this._externalDbSystemId),
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
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseManagementExternalDbSystemDatabaseManagementsManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalDbSystemDatabaseManagementsManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
