// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeAuditTrailManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#audit_collection_start_time DataSafeAuditTrailManagement#audit_collection_start_time}
  */
  readonly auditCollectionStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#can_update_last_archive_time_on_target DataSafeAuditTrailManagement#can_update_last_archive_time_on_target}
  */
  readonly canUpdateLastArchiveTimeOnTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#compartment_id DataSafeAuditTrailManagement#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#defined_tags DataSafeAuditTrailManagement#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#description DataSafeAuditTrailManagement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#display_name DataSafeAuditTrailManagement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#freeform_tags DataSafeAuditTrailManagement#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#id DataSafeAuditTrailManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#is_auto_purge_enabled DataSafeAuditTrailManagement#is_auto_purge_enabled}
  */
  readonly isAutoPurgeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#resume_trigger DataSafeAuditTrailManagement#resume_trigger}
  */
  readonly resumeTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#start_trigger DataSafeAuditTrailManagement#start_trigger}
  */
  readonly startTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#state DataSafeAuditTrailManagement#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#stop_trigger DataSafeAuditTrailManagement#stop_trigger}
  */
  readonly stopTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#target_id DataSafeAuditTrailManagement#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#trail_location DataSafeAuditTrailManagement#trail_location}
  */
  readonly trailLocation?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#timeouts DataSafeAuditTrailManagement#timeouts}
  */
  readonly timeouts?: DataSafeAuditTrailManagementTimeouts;
}
export interface DataSafeAuditTrailManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#create DataSafeAuditTrailManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#delete DataSafeAuditTrailManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#update DataSafeAuditTrailManagement#update}
  */
  readonly update?: string;
}

export function dataSafeAuditTrailManagementTimeoutsToTerraform(struct?: DataSafeAuditTrailManagementTimeouts | cdktf.IResolvable): any {
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


export function dataSafeAuditTrailManagementTimeoutsToHclTerraform(struct?: DataSafeAuditTrailManagementTimeouts | cdktf.IResolvable): any {
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

export class DataSafeAuditTrailManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeAuditTrailManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeAuditTrailManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management oci_data_safe_audit_trail_management}
*/
export class DataSafeAuditTrailManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_trail_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeAuditTrailManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeAuditTrailManagement to import
  * @param importFromId The id of the existing DataSafeAuditTrailManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeAuditTrailManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_trail_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_audit_trail_management oci_data_safe_audit_trail_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeAuditTrailManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSafeAuditTrailManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_trail_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditCollectionStartTime = config.auditCollectionStartTime;
    this._canUpdateLastArchiveTimeOnTarget = config.canUpdateLastArchiveTimeOnTarget;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoPurgeEnabled = config.isAutoPurgeEnabled;
    this._resumeTrigger = config.resumeTrigger;
    this._startTrigger = config.startTrigger;
    this._state = config.state;
    this._stopTrigger = config.stopTrigger;
    this._targetId = config.targetId;
    this._trailLocation = config.trailLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_collection_start_time - computed: false, optional: true, required: false
  private _auditCollectionStartTime?: string; 
  public get auditCollectionStartTime() {
    return this.getStringAttribute('audit_collection_start_time');
  }
  public set auditCollectionStartTime(value: string) {
    this._auditCollectionStartTime = value;
  }
  public resetAuditCollectionStartTime() {
    this._auditCollectionStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCollectionStartTimeInput() {
    return this._auditCollectionStartTime;
  }

  // audit_profile_id - computed: true, optional: false, required: false
  public get auditProfileId() {
    return this.getStringAttribute('audit_profile_id');
  }

  // can_update_last_archive_time_on_target - computed: true, optional: true, required: false
  private _canUpdateLastArchiveTimeOnTarget?: boolean | cdktf.IResolvable; 
  public get canUpdateLastArchiveTimeOnTarget() {
    return this.getBooleanAttribute('can_update_last_archive_time_on_target');
  }
  public set canUpdateLastArchiveTimeOnTarget(value: boolean | cdktf.IResolvable) {
    this._canUpdateLastArchiveTimeOnTarget = value;
  }
  public resetCanUpdateLastArchiveTimeOnTarget() {
    this._canUpdateLastArchiveTimeOnTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUpdateLastArchiveTimeOnTargetInput() {
    return this._canUpdateLastArchiveTimeOnTarget;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // is_auto_purge_enabled - computed: true, optional: true, required: false
  private _isAutoPurgeEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoPurgeEnabled() {
    return this.getBooleanAttribute('is_auto_purge_enabled');
  }
  public set isAutoPurgeEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoPurgeEnabled = value;
  }
  public resetIsAutoPurgeEnabled() {
    this._isAutoPurgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoPurgeEnabledInput() {
    return this._isAutoPurgeEnabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // resume_trigger - computed: false, optional: true, required: false
  private _resumeTrigger?: boolean | cdktf.IResolvable; 
  public get resumeTrigger() {
    return this.getBooleanAttribute('resume_trigger');
  }
  public set resumeTrigger(value: boolean | cdktf.IResolvable) {
    this._resumeTrigger = value;
  }
  public resetResumeTrigger() {
    this._resumeTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeTriggerInput() {
    return this._resumeTrigger;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_collected - computed: true, optional: false, required: false
  public get timeLastCollected() {
    return this.getStringAttribute('time_last_collected');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // trail_location - computed: false, optional: true, required: false
  private _trailLocation?: string; 
  public get trailLocation() {
    return this.getStringAttribute('trail_location');
  }
  public set trailLocation(value: string) {
    this._trailLocation = value;
  }
  public resetTrailLocation() {
    this._trailLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailLocationInput() {
    return this._trailLocation;
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeAuditTrailManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeAuditTrailManagementTimeouts) {
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
      audit_collection_start_time: cdktf.stringToTerraform(this._auditCollectionStartTime),
      can_update_last_archive_time_on_target: cdktf.booleanToTerraform(this._canUpdateLastArchiveTimeOnTarget),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_purge_enabled: cdktf.booleanToTerraform(this._isAutoPurgeEnabled),
      resume_trigger: cdktf.booleanToTerraform(this._resumeTrigger),
      start_trigger: cdktf.booleanToTerraform(this._startTrigger),
      state: cdktf.stringToTerraform(this._state),
      stop_trigger: cdktf.booleanToTerraform(this._stopTrigger),
      target_id: cdktf.stringToTerraform(this._targetId),
      trail_location: cdktf.stringToTerraform(this._trailLocation),
      timeouts: dataSafeAuditTrailManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_collection_start_time: {
        value: cdktf.stringToHclTerraform(this._auditCollectionStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      can_update_last_archive_time_on_target: {
        value: cdktf.booleanToHclTerraform(this._canUpdateLastArchiveTimeOnTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_purge_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoPurgeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resume_trigger: {
        value: cdktf.booleanToHclTerraform(this._resumeTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_trigger: {
        value: cdktf.booleanToHclTerraform(this._startTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      trail_location: {
        value: cdktf.stringToHclTerraform(this._trailLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeAuditTrailManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeAuditTrailManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
