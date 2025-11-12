// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreInstanceMaintenanceEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}
  */
  readonly alternativeResolutionAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}
  */
  readonly canDeleteLocalStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}
  */
  readonly instanceMaintenanceEventId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}
  */
  readonly timeWindowStart?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#timeouts CoreInstanceMaintenanceEvent#timeouts}
  */
  readonly timeouts?: CoreInstanceMaintenanceEventTimeouts;
}
export interface CoreInstanceMaintenanceEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}
  */
  readonly update?: string;
}

export function coreInstanceMaintenanceEventTimeoutsToTerraform(struct?: CoreInstanceMaintenanceEventTimeouts | cdktf.IResolvable): any {
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


export function coreInstanceMaintenanceEventTimeoutsToHclTerraform(struct?: CoreInstanceMaintenanceEventTimeouts | cdktf.IResolvable): any {
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

export class CoreInstanceMaintenanceEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreInstanceMaintenanceEventTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreInstanceMaintenanceEventTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event oci_core_instance_maintenance_event}
*/
export class CoreInstanceMaintenanceEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_instance_maintenance_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreInstanceMaintenanceEvent to import
  * @param importFromId The id of the existing CoreInstanceMaintenanceEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreInstanceMaintenanceEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_instance_maintenance_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_instance_maintenance_event oci_core_instance_maintenance_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreInstanceMaintenanceEventConfig
  */
  public constructor(scope: Construct, id: string, config: CoreInstanceMaintenanceEventConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_maintenance_event',
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
    this._alternativeResolutionAction = config.alternativeResolutionAction;
    this._canDeleteLocalStorage = config.canDeleteLocalStorage;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._instanceMaintenanceEventId = config.instanceMaintenanceEventId;
    this._timeWindowStart = config.timeWindowStart;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new cdktf.StringMap(this, "additional_details");
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // alternative_resolution_action - computed: true, optional: true, required: false
  private _alternativeResolutionAction?: string; 
  public get alternativeResolutionAction() {
    return this.getStringAttribute('alternative_resolution_action');
  }
  public set alternativeResolutionAction(value: string) {
    this._alternativeResolutionAction = value;
  }
  public resetAlternativeResolutionAction() {
    this._alternativeResolutionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeResolutionActionInput() {
    return this._alternativeResolutionAction;
  }

  // alternative_resolution_actions - computed: true, optional: false, required: false
  public get alternativeResolutionActions() {
    return this.getListAttribute('alternative_resolution_actions');
  }

  // can_delete_local_storage - computed: true, optional: true, required: false
  private _canDeleteLocalStorage?: boolean | cdktf.IResolvable; 
  public get canDeleteLocalStorage() {
    return this.getBooleanAttribute('can_delete_local_storage');
  }
  public set canDeleteLocalStorage(value: boolean | cdktf.IResolvable) {
    this._canDeleteLocalStorage = value;
  }
  public resetCanDeleteLocalStorage() {
    this._canDeleteLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteLocalStorageInput() {
    return this._canDeleteLocalStorage;
  }

  // can_reschedule - computed: true, optional: false, required: false
  public get canReschedule() {
    return this.getBooleanAttribute('can_reschedule');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // correlation_token - computed: true, optional: false, required: false
  public get correlationToken() {
    return this.getStringAttribute('correlation_token');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // estimated_duration - computed: true, optional: false, required: false
  public get estimatedDuration() {
    return this.getStringAttribute('estimated_duration');
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

  // instance_action - computed: true, optional: false, required: false
  public get instanceAction() {
    return this.getStringAttribute('instance_action');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_maintenance_event_id - computed: false, optional: false, required: true
  private _instanceMaintenanceEventId?: string; 
  public get instanceMaintenanceEventId() {
    return this.getStringAttribute('instance_maintenance_event_id');
  }
  public set instanceMaintenanceEventId(value: string) {
    this._instanceMaintenanceEventId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintenanceEventIdInput() {
    return this._instanceMaintenanceEventId;
  }

  // maintenance_category - computed: true, optional: false, required: false
  public get maintenanceCategory() {
    return this.getStringAttribute('maintenance_category');
  }

  // maintenance_reason - computed: true, optional: false, required: false
  public get maintenanceReason() {
    return this.getStringAttribute('maintenance_reason');
  }

  // start_window_duration - computed: true, optional: false, required: false
  public get startWindowDuration() {
    return this.getStringAttribute('start_window_duration');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_hard_due_date - computed: true, optional: false, required: false
  public get timeHardDueDate() {
    return this.getStringAttribute('time_hard_due_date');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_window_start - computed: true, optional: true, required: false
  private _timeWindowStart?: string; 
  public get timeWindowStart() {
    return this.getStringAttribute('time_window_start');
  }
  public set timeWindowStart(value: string) {
    this._timeWindowStart = value;
  }
  public resetTimeWindowStart() {
    this._timeWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowStartInput() {
    return this._timeWindowStart;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreInstanceMaintenanceEventTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreInstanceMaintenanceEventTimeouts) {
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
      alternative_resolution_action: cdktf.stringToTerraform(this._alternativeResolutionAction),
      can_delete_local_storage: cdktf.booleanToTerraform(this._canDeleteLocalStorage),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      instance_maintenance_event_id: cdktf.stringToTerraform(this._instanceMaintenanceEventId),
      time_window_start: cdktf.stringToTerraform(this._timeWindowStart),
      timeouts: coreInstanceMaintenanceEventTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternative_resolution_action: {
        value: cdktf.stringToHclTerraform(this._alternativeResolutionAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      can_delete_local_storage: {
        value: cdktf.booleanToHclTerraform(this._canDeleteLocalStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      instance_maintenance_event_id: {
        value: cdktf.stringToHclTerraform(this._instanceMaintenanceEventId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_window_start: {
        value: cdktf.stringToHclTerraform(this._timeWindowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: coreInstanceMaintenanceEventTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreInstanceMaintenanceEventTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
