// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseScheduledActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#action_params DatabaseScheduledAction#action_params}
  */
  readonly actionParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#action_type DatabaseScheduledAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#compartment_id DatabaseScheduledAction#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#defined_tags DatabaseScheduledAction#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#freeform_tags DatabaseScheduledAction#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#id DatabaseScheduledAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#scheduling_plan_id DatabaseScheduledAction#scheduling_plan_id}
  */
  readonly schedulingPlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#scheduling_window_id DatabaseScheduledAction#scheduling_window_id}
  */
  readonly schedulingWindowId: string;
  /**
  * action_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#action_members DatabaseScheduledAction#action_members}
  */
  readonly actionMembers?: DatabaseScheduledActionActionMembers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#timeouts DatabaseScheduledAction#timeouts}
  */
  readonly timeouts?: DatabaseScheduledActionTimeouts;
}
export interface DatabaseScheduledActionActionMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#estimated_time_in_mins DatabaseScheduledAction#estimated_time_in_mins}
  */
  readonly estimatedTimeInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#member_id DatabaseScheduledAction#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#member_order DatabaseScheduledAction#member_order}
  */
  readonly memberOrder: number;
}

export function databaseScheduledActionActionMembersToTerraform(struct?: DatabaseScheduledActionActionMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    estimated_time_in_mins: cdktf.numberToTerraform(struct!.estimatedTimeInMins),
    member_id: cdktf.stringToTerraform(struct!.memberId),
    member_order: cdktf.numberToTerraform(struct!.memberOrder),
  }
}


export function databaseScheduledActionActionMembersToHclTerraform(struct?: DatabaseScheduledActionActionMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    estimated_time_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.estimatedTimeInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_id: {
      value: cdktf.stringToHclTerraform(struct!.memberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_order: {
      value: cdktf.numberToHclTerraform(struct!.memberOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseScheduledActionActionMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseScheduledActionActionMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimatedTimeInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedTimeInMins = this._estimatedTimeInMins;
    }
    if (this._memberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberId = this._memberId;
    }
    if (this._memberOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOrder = this._memberOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseScheduledActionActionMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._estimatedTimeInMins = undefined;
      this._memberId = undefined;
      this._memberOrder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._estimatedTimeInMins = value.estimatedTimeInMins;
      this._memberId = value.memberId;
      this._memberOrder = value.memberOrder;
    }
  }

  // estimated_time_in_mins - computed: true, optional: true, required: false
  private _estimatedTimeInMins?: number; 
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }
  public set estimatedTimeInMins(value: number) {
    this._estimatedTimeInMins = value;
  }
  public resetEstimatedTimeInMins() {
    this._estimatedTimeInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedTimeInMinsInput() {
    return this._estimatedTimeInMins;
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // member_order - computed: false, optional: false, required: true
  private _memberOrder?: number; 
  public get memberOrder() {
    return this.getNumberAttribute('member_order');
  }
  public set memberOrder(value: number) {
    this._memberOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOrderInput() {
    return this._memberOrder;
  }
}

export class DatabaseScheduledActionActionMembersList extends cdktf.ComplexList {
  public internalValue? : DatabaseScheduledActionActionMembers[] | cdktf.IResolvable

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
  public get(index: number): DatabaseScheduledActionActionMembersOutputReference {
    return new DatabaseScheduledActionActionMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseScheduledActionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#create DatabaseScheduledAction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#delete DatabaseScheduledAction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#update DatabaseScheduledAction#update}
  */
  readonly update?: string;
}

export function databaseScheduledActionTimeoutsToTerraform(struct?: DatabaseScheduledActionTimeouts | cdktf.IResolvable): any {
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


export function databaseScheduledActionTimeoutsToHclTerraform(struct?: DatabaseScheduledActionTimeouts | cdktf.IResolvable): any {
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

export class DatabaseScheduledActionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseScheduledActionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseScheduledActionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action oci_database_scheduled_action}
*/
export class DatabaseScheduledAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_scheduled_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseScheduledAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseScheduledAction to import
  * @param importFromId The id of the existing DatabaseScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseScheduledAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_scheduled_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_scheduled_action oci_database_scheduled_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseScheduledActionConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseScheduledActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_scheduled_action',
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
    this._actionParams = config.actionParams;
    this._actionType = config.actionType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._schedulingPlanId = config.schedulingPlanId;
    this._schedulingWindowId = config.schedulingWindowId;
    this._actionMembers.internalValue = config.actionMembers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_order - computed: true, optional: false, required: false
  public get actionOrder() {
    return this.getNumberAttribute('action_order');
  }

  // action_params - computed: true, optional: true, required: false
  private _actionParams?: { [key: string]: string }; 
  public get actionParams() {
    return this.getStringMapAttribute('action_params');
  }
  public set actionParams(value: { [key: string]: string }) {
    this._actionParams = value;
  }
  public resetActionParams() {
    this._actionParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParamsInput() {
    return this._actionParams;
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
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

  // scheduling_plan_id - computed: false, optional: false, required: true
  private _schedulingPlanId?: string; 
  public get schedulingPlanId() {
    return this.getStringAttribute('scheduling_plan_id');
  }
  public set schedulingPlanId(value: string) {
    this._schedulingPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingPlanIdInput() {
    return this._schedulingPlanId;
  }

  // scheduling_window_id - computed: false, optional: false, required: true
  private _schedulingWindowId?: string; 
  public get schedulingWindowId() {
    return this.getStringAttribute('scheduling_window_id');
  }
  public set schedulingWindowId(value: string) {
    this._schedulingWindowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingWindowIdInput() {
    return this._schedulingWindowId;
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

  // action_members - computed: false, optional: true, required: false
  private _actionMembers = new DatabaseScheduledActionActionMembersList(this, "action_members", false);
  public get actionMembers() {
    return this._actionMembers;
  }
  public putActionMembers(value: DatabaseScheduledActionActionMembers[] | cdktf.IResolvable) {
    this._actionMembers.internalValue = value;
  }
  public resetActionMembers() {
    this._actionMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionMembersInput() {
    return this._actionMembers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseScheduledActionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseScheduledActionTimeouts) {
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
      action_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._actionParams),
      action_type: cdktf.stringToTerraform(this._actionType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      scheduling_plan_id: cdktf.stringToTerraform(this._schedulingPlanId),
      scheduling_window_id: cdktf.stringToTerraform(this._schedulingWindowId),
      action_members: cdktf.listMapper(databaseScheduledActionActionMembersToTerraform, true)(this._actionMembers.internalValue),
      timeouts: databaseScheduledActionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actionParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      scheduling_plan_id: {
        value: cdktf.stringToHclTerraform(this._schedulingPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_window_id: {
        value: cdktf.stringToHclTerraform(this._schedulingWindowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_members: {
        value: cdktf.listMapperHcl(databaseScheduledActionActionMembersToHclTerraform, true)(this._actionMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseScheduledActionActionMembersList",
      },
      timeouts: {
        value: databaseScheduledActionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseScheduledActionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
