// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSqlCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#compartment_id DataSafeSqlCollection#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#db_user_name DataSafeSqlCollection#db_user_name}
  */
  readonly dbUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#defined_tags DataSafeSqlCollection#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#description DataSafeSqlCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#display_name DataSafeSqlCollection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#freeform_tags DataSafeSqlCollection#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#generate_sql_firewall_policy_trigger DataSafeSqlCollection#generate_sql_firewall_policy_trigger}
  */
  readonly generateSqlFirewallPolicyTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#id DataSafeSqlCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#purge_logs_trigger DataSafeSqlCollection#purge_logs_trigger}
  */
  readonly purgeLogsTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#refresh_log_insights_trigger DataSafeSqlCollection#refresh_log_insights_trigger}
  */
  readonly refreshLogInsightsTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#sql_level DataSafeSqlCollection#sql_level}
  */
  readonly sqlLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#start_trigger DataSafeSqlCollection#start_trigger}
  */
  readonly startTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#status DataSafeSqlCollection#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#stop_trigger DataSafeSqlCollection#stop_trigger}
  */
  readonly stopTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#target_id DataSafeSqlCollection#target_id}
  */
  readonly targetId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#timeouts DataSafeSqlCollection#timeouts}
  */
  readonly timeouts?: DataSafeSqlCollectionTimeouts;
}
export interface DataSafeSqlCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#create DataSafeSqlCollection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#delete DataSafeSqlCollection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#update DataSafeSqlCollection#update}
  */
  readonly update?: string;
}

export function dataSafeSqlCollectionTimeoutsToTerraform(struct?: DataSafeSqlCollectionTimeouts | cdktf.IResolvable): any {
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


export function dataSafeSqlCollectionTimeoutsToHclTerraform(struct?: DataSafeSqlCollectionTimeouts | cdktf.IResolvable): any {
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

export class DataSafeSqlCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSqlCollectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeSqlCollectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection oci_data_safe_sql_collection}
*/
export class DataSafeSqlCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sql_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSqlCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSqlCollection to import
  * @param importFromId The id of the existing DataSafeSqlCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSqlCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sql_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_sql_collection oci_data_safe_sql_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSqlCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSqlCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sql_collection',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._dbUserName = config.dbUserName;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._generateSqlFirewallPolicyTrigger = config.generateSqlFirewallPolicyTrigger;
    this._id = config.id;
    this._purgeLogsTrigger = config.purgeLogsTrigger;
    this._refreshLogInsightsTrigger = config.refreshLogInsightsTrigger;
    this._sqlLevel = config.sqlLevel;
    this._startTrigger = config.startTrigger;
    this._status = config.status;
    this._stopTrigger = config.stopTrigger;
    this._targetId = config.targetId;
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

  // description - computed: true, optional: true, required: false
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

  // generate_sql_firewall_policy_trigger - computed: false, optional: true, required: false
  private _generateSqlFirewallPolicyTrigger?: boolean | cdktf.IResolvable; 
  public get generateSqlFirewallPolicyTrigger() {
    return this.getBooleanAttribute('generate_sql_firewall_policy_trigger');
  }
  public set generateSqlFirewallPolicyTrigger(value: boolean | cdktf.IResolvable) {
    this._generateSqlFirewallPolicyTrigger = value;
  }
  public resetGenerateSqlFirewallPolicyTrigger() {
    this._generateSqlFirewallPolicyTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSqlFirewallPolicyTriggerInput() {
    return this._generateSqlFirewallPolicyTrigger;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // purge_logs_trigger - computed: false, optional: true, required: false
  private _purgeLogsTrigger?: boolean | cdktf.IResolvable; 
  public get purgeLogsTrigger() {
    return this.getBooleanAttribute('purge_logs_trigger');
  }
  public set purgeLogsTrigger(value: boolean | cdktf.IResolvable) {
    this._purgeLogsTrigger = value;
  }
  public resetPurgeLogsTrigger() {
    this._purgeLogsTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeLogsTriggerInput() {
    return this._purgeLogsTrigger;
  }

  // refresh_log_insights_trigger - computed: false, optional: true, required: false
  private _refreshLogInsightsTrigger?: boolean | cdktf.IResolvable; 
  public get refreshLogInsightsTrigger() {
    return this.getBooleanAttribute('refresh_log_insights_trigger');
  }
  public set refreshLogInsightsTrigger(value: boolean | cdktf.IResolvable) {
    this._refreshLogInsightsTrigger = value;
  }
  public resetRefreshLogInsightsTrigger() {
    this._refreshLogInsightsTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshLogInsightsTriggerInput() {
    return this._refreshLogInsightsTrigger;
  }

  // sql_level - computed: true, optional: true, required: false
  private _sqlLevel?: string; 
  public get sqlLevel() {
    return this.getStringAttribute('sql_level');
  }
  public set sqlLevel(value: string) {
    this._sqlLevel = value;
  }
  public resetSqlLevel() {
    this._sqlLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlLevelInput() {
    return this._sqlLevel;
  }

  // start_trigger - computed: false, optional: true, required: false
  private _startTrigger?: boolean | cdktf.IResolvable; 
  public get startTrigger() {
    return this.getBooleanAttribute('start_trigger');
  }
  public set startTrigger(value: boolean | cdktf.IResolvable) {
    this._startTrigger = value;
  }
  public resetStartTrigger() {
    this._startTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTriggerInput() {
    return this._startTrigger;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stop_trigger - computed: false, optional: true, required: false
  private _stopTrigger?: boolean | cdktf.IResolvable; 
  public get stopTrigger() {
    return this.getBooleanAttribute('stop_trigger');
  }
  public set stopTrigger(value: boolean | cdktf.IResolvable) {
    this._stopTrigger = value;
  }
  public resetStopTrigger() {
    this._stopTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTriggerInput() {
    return this._stopTrigger;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_started - computed: true, optional: false, required: false
  public get timeLastStarted() {
    return this.getStringAttribute('time_last_started');
  }

  // time_last_stopped - computed: true, optional: false, required: false
  public get timeLastStopped() {
    return this.getStringAttribute('time_last_stopped');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSqlCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSqlCollectionTimeouts) {
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
      db_user_name: cdktf.stringToTerraform(this._dbUserName),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      generate_sql_firewall_policy_trigger: cdktf.booleanToTerraform(this._generateSqlFirewallPolicyTrigger),
      id: cdktf.stringToTerraform(this._id),
      purge_logs_trigger: cdktf.booleanToTerraform(this._purgeLogsTrigger),
      refresh_log_insights_trigger: cdktf.booleanToTerraform(this._refreshLogInsightsTrigger),
      sql_level: cdktf.stringToTerraform(this._sqlLevel),
      start_trigger: cdktf.booleanToTerraform(this._startTrigger),
      status: cdktf.stringToTerraform(this._status),
      stop_trigger: cdktf.booleanToTerraform(this._stopTrigger),
      target_id: cdktf.stringToTerraform(this._targetId),
      timeouts: dataSafeSqlCollectionTimeoutsToTerraform(this._timeouts.internalValue),
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
      db_user_name: {
        value: cdktf.stringToHclTerraform(this._dbUserName),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      generate_sql_firewall_policy_trigger: {
        value: cdktf.booleanToHclTerraform(this._generateSqlFirewallPolicyTrigger),
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
      purge_logs_trigger: {
        value: cdktf.booleanToHclTerraform(this._purgeLogsTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refresh_log_insights_trigger: {
        value: cdktf.booleanToHclTerraform(this._refreshLogInsightsTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sql_level: {
        value: cdktf.stringToHclTerraform(this._sqlLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_trigger: {
        value: cdktf.booleanToHclTerraform(this._startTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_trigger: {
        value: cdktf.booleanToHclTerraform(this._stopTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeSqlCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSqlCollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
