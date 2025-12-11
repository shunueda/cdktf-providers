// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExternalContainerDatabaseManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#enable_management DatabaseExternalContainerDatabaseManagement#enable_management}
  */
  readonly enableManagement: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#external_container_database_id DatabaseExternalContainerDatabaseManagement#external_container_database_id}
  */
  readonly externalContainerDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#external_database_connector_id DatabaseExternalContainerDatabaseManagement#external_database_connector_id}
  */
  readonly externalDatabaseConnectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#id DatabaseExternalContainerDatabaseManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#license_model DatabaseExternalContainerDatabaseManagement#license_model}
  */
  readonly licenseModel?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#timeouts DatabaseExternalContainerDatabaseManagement#timeouts}
  */
  readonly timeouts?: DatabaseExternalContainerDatabaseManagementTimeouts;
}
export interface DatabaseExternalContainerDatabaseManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#create DatabaseExternalContainerDatabaseManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#delete DatabaseExternalContainerDatabaseManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#update DatabaseExternalContainerDatabaseManagement#update}
  */
  readonly update?: string;
}

export function databaseExternalContainerDatabaseManagementTimeoutsToTerraform(struct?: DatabaseExternalContainerDatabaseManagementTimeouts | cdktf.IResolvable): any {
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


export function databaseExternalContainerDatabaseManagementTimeoutsToHclTerraform(struct?: DatabaseExternalContainerDatabaseManagementTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExternalContainerDatabaseManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExternalContainerDatabaseManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management oci_database_external_container_database_management}
*/
export class DatabaseExternalContainerDatabaseManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_external_container_database_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExternalContainerDatabaseManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExternalContainerDatabaseManagement to import
  * @param importFromId The id of the existing DatabaseExternalContainerDatabaseManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExternalContainerDatabaseManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_external_container_database_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_external_container_database_management oci_database_external_container_database_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExternalContainerDatabaseManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExternalContainerDatabaseManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_external_container_database_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableManagement = config.enableManagement;
    this._externalContainerDatabaseId = config.externalContainerDatabaseId;
    this._externalDatabaseConnectorId = config.externalDatabaseConnectorId;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_management - computed: false, optional: false, required: true
  private _enableManagement?: boolean | cdktf.IResolvable; 
  public get enableManagement() {
    return this.getBooleanAttribute('enable_management');
  }
  public set enableManagement(value: boolean | cdktf.IResolvable) {
    this._enableManagement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagementInput() {
    return this._enableManagement;
  }

  // external_container_database_id - computed: false, optional: false, required: true
  private _externalContainerDatabaseId?: string; 
  public get externalContainerDatabaseId() {
    return this.getStringAttribute('external_container_database_id');
  }
  public set externalContainerDatabaseId(value: string) {
    this._externalContainerDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalContainerDatabaseIdInput() {
    return this._externalContainerDatabaseId;
  }

  // external_database_connector_id - computed: false, optional: false, required: true
  private _externalDatabaseConnectorId?: string; 
  public get externalDatabaseConnectorId() {
    return this.getStringAttribute('external_database_connector_id');
  }
  public set externalDatabaseConnectorId(value: string) {
    this._externalDatabaseConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatabaseConnectorIdInput() {
    return this._externalDatabaseConnectorId;
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
  private _timeouts = new DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExternalContainerDatabaseManagementTimeouts) {
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
      enable_management: cdktf.booleanToTerraform(this._enableManagement),
      external_container_database_id: cdktf.stringToTerraform(this._externalContainerDatabaseId),
      external_database_connector_id: cdktf.stringToTerraform(this._externalDatabaseConnectorId),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      timeouts: databaseExternalContainerDatabaseManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_management: {
        value: cdktf.booleanToHclTerraform(this._enableManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_container_database_id: {
        value: cdktf.stringToHclTerraform(this._externalContainerDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_database_connector_id: {
        value: cdktf.stringToHclTerraform(this._externalDatabaseConnectorId),
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
        value: databaseExternalContainerDatabaseManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExternalContainerDatabaseManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
