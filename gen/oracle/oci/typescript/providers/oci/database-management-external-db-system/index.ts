// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalDbSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#compartment_id DatabaseManagementExternalDbSystem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#db_system_discovery_id DatabaseManagementExternalDbSystem#db_system_discovery_id}
  */
  readonly dbSystemDiscoveryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#defined_tags DatabaseManagementExternalDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#display_name DatabaseManagementExternalDbSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#freeform_tags DatabaseManagementExternalDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#id DatabaseManagementExternalDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * database_management_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#database_management_config DatabaseManagementExternalDbSystem#database_management_config}
  */
  readonly databaseManagementConfig?: DatabaseManagementExternalDbSystemDatabaseManagementConfig;
  /**
  * stack_monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#stack_monitoring_config DatabaseManagementExternalDbSystem#stack_monitoring_config}
  */
  readonly stackMonitoringConfig?: DatabaseManagementExternalDbSystemStackMonitoringConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#timeouts DatabaseManagementExternalDbSystem#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalDbSystemTimeouts;
}
export interface DatabaseManagementExternalDbSystemDatabaseManagementConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#license_model DatabaseManagementExternalDbSystem#license_model}
  */
  readonly licenseModel: string;
}

export function databaseManagementExternalDbSystemDatabaseManagementConfigToTerraform(struct?: DatabaseManagementExternalDbSystemDatabaseManagementConfigOutputReference | DatabaseManagementExternalDbSystemDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_model: cdktf.stringToTerraform(struct!.licenseModel),
  }
}


export function databaseManagementExternalDbSystemDatabaseManagementConfigToHclTerraform(struct?: DatabaseManagementExternalDbSystemDatabaseManagementConfigOutputReference | DatabaseManagementExternalDbSystemDatabaseManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_model: {
      value: cdktf.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemDatabaseManagementConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemDatabaseManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemDatabaseManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseModel = value.licenseModel;
    }
  }

  // license_model - computed: false, optional: false, required: true
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }
}
export interface DatabaseManagementExternalDbSystemStackMonitoringConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#is_enabled DatabaseManagementExternalDbSystem#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#metadata DatabaseManagementExternalDbSystem#metadata}
  */
  readonly metadata?: string;
}

export function databaseManagementExternalDbSystemStackMonitoringConfigToTerraform(struct?: DatabaseManagementExternalDbSystemStackMonitoringConfigOutputReference | DatabaseManagementExternalDbSystemStackMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function databaseManagementExternalDbSystemStackMonitoringConfigToHclTerraform(struct?: DatabaseManagementExternalDbSystemStackMonitoringConfigOutputReference | DatabaseManagementExternalDbSystemStackMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalDbSystemStackMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemStackMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalDbSystemStackMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._metadata = value.metadata;
    }
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
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
}
export interface DatabaseManagementExternalDbSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#create DatabaseManagementExternalDbSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#delete DatabaseManagementExternalDbSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#update DatabaseManagementExternalDbSystem#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalDbSystemTimeoutsToTerraform(struct?: DatabaseManagementExternalDbSystemTimeouts | cdktf.IResolvable): any {
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


export function databaseManagementExternalDbSystemTimeoutsToHclTerraform(struct?: DatabaseManagementExternalDbSystemTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementExternalDbSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalDbSystemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseManagementExternalDbSystemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system oci_database_management_external_db_system}
*/
export class DatabaseManagementExternalDbSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_db_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalDbSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalDbSystem to import
  * @param importFromId The id of the existing DatabaseManagementExternalDbSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalDbSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_db_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_external_db_system oci_database_management_external_db_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalDbSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_db_system',
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
    this._compartmentId = config.compartmentId;
    this._dbSystemDiscoveryId = config.dbSystemDiscoveryId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._databaseManagementConfig.internalValue = config.databaseManagementConfig;
    this._stackMonitoringConfig.internalValue = config.stackMonitoringConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // db_system_discovery_id - computed: false, optional: false, required: true
  private _dbSystemDiscoveryId?: string; 
  public get dbSystemDiscoveryId() {
    return this.getStringAttribute('db_system_discovery_id');
  }
  public set dbSystemDiscoveryId(value: string) {
    this._dbSystemDiscoveryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemDiscoveryIdInput() {
    return this._dbSystemDiscoveryId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // discovery_agent_id - computed: true, optional: false, required: false
  public get discoveryAgentId() {
    return this.getStringAttribute('discovery_agent_id');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // home_directory - computed: true, optional: false, required: false
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
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

  // is_cluster - computed: true, optional: false, required: false
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // database_management_config - computed: false, optional: true, required: false
  private _databaseManagementConfig = new DatabaseManagementExternalDbSystemDatabaseManagementConfigOutputReference(this, "database_management_config");
  public get databaseManagementConfig() {
    return this._databaseManagementConfig;
  }
  public putDatabaseManagementConfig(value: DatabaseManagementExternalDbSystemDatabaseManagementConfig) {
    this._databaseManagementConfig.internalValue = value;
  }
  public resetDatabaseManagementConfig() {
    this._databaseManagementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseManagementConfigInput() {
    return this._databaseManagementConfig.internalValue;
  }

  // stack_monitoring_config - computed: false, optional: true, required: false
  private _stackMonitoringConfig = new DatabaseManagementExternalDbSystemStackMonitoringConfigOutputReference(this, "stack_monitoring_config");
  public get stackMonitoringConfig() {
    return this._stackMonitoringConfig;
  }
  public putStackMonitoringConfig(value: DatabaseManagementExternalDbSystemStackMonitoringConfig) {
    this._stackMonitoringConfig.internalValue = value;
  }
  public resetStackMonitoringConfig() {
    this._stackMonitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackMonitoringConfigInput() {
    return this._stackMonitoringConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalDbSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalDbSystemTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      db_system_discovery_id: cdktf.stringToTerraform(this._dbSystemDiscoveryId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      database_management_config: databaseManagementExternalDbSystemDatabaseManagementConfigToTerraform(this._databaseManagementConfig.internalValue),
      stack_monitoring_config: databaseManagementExternalDbSystemStackMonitoringConfigToTerraform(this._stackMonitoringConfig.internalValue),
      timeouts: databaseManagementExternalDbSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_system_discovery_id: {
        value: cdktf.stringToHclTerraform(this._dbSystemDiscoveryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_management_config: {
        value: databaseManagementExternalDbSystemDatabaseManagementConfigToHclTerraform(this._databaseManagementConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementExternalDbSystemDatabaseManagementConfigList",
      },
      stack_monitoring_config: {
        value: databaseManagementExternalDbSystemStackMonitoringConfigToHclTerraform(this._stackMonitoringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementExternalDbSystemStackMonitoringConfigList",
      },
      timeouts: {
        value: databaseManagementExternalDbSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalDbSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
