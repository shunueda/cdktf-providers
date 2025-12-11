// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisasterRecoveryAutomaticDrConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#default_failover_dr_plan_id DisasterRecoveryAutomaticDrConfiguration#default_failover_dr_plan_id}
  */
  readonly defaultFailoverDrPlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#default_switchover_dr_plan_id DisasterRecoveryAutomaticDrConfiguration#default_switchover_dr_plan_id}
  */
  readonly defaultSwitchoverDrPlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#defined_tags DisasterRecoveryAutomaticDrConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#display_name DisasterRecoveryAutomaticDrConfiguration#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#dr_protection_group_id DisasterRecoveryAutomaticDrConfiguration#dr_protection_group_id}
  */
  readonly drProtectionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#freeform_tags DisasterRecoveryAutomaticDrConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#id DisasterRecoveryAutomaticDrConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#members DisasterRecoveryAutomaticDrConfiguration#members}
  */
  readonly members: DisasterRecoveryAutomaticDrConfigurationMembers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#timeouts DisasterRecoveryAutomaticDrConfiguration#timeouts}
  */
  readonly timeouts?: DisasterRecoveryAutomaticDrConfigurationTimeouts;
}
export interface DisasterRecoveryAutomaticDrConfigurationMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#is_auto_failover_enabled DisasterRecoveryAutomaticDrConfiguration#is_auto_failover_enabled}
  */
  readonly isAutoFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#is_auto_switchover_enabled DisasterRecoveryAutomaticDrConfiguration#is_auto_switchover_enabled}
  */
  readonly isAutoSwitchoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#member_id DisasterRecoveryAutomaticDrConfiguration#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#member_type DisasterRecoveryAutomaticDrConfiguration#member_type}
  */
  readonly memberType: string;
}

export function disasterRecoveryAutomaticDrConfigurationMembersToTerraform(struct?: DisasterRecoveryAutomaticDrConfigurationMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_auto_failover_enabled: cdktf.booleanToTerraform(struct!.isAutoFailoverEnabled),
    is_auto_switchover_enabled: cdktf.booleanToTerraform(struct!.isAutoSwitchoverEnabled),
    member_id: cdktf.stringToTerraform(struct!.memberId),
    member_type: cdktf.stringToTerraform(struct!.memberType),
  }
}


export function disasterRecoveryAutomaticDrConfigurationMembersToHclTerraform(struct?: DisasterRecoveryAutomaticDrConfigurationMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_auto_failover_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoFailoverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_auto_switchover_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoSwitchoverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    member_id: {
      value: cdktf.stringToHclTerraform(struct!.memberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryAutomaticDrConfigurationMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisasterRecoveryAutomaticDrConfigurationMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAutoFailoverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoFailoverEnabled = this._isAutoFailoverEnabled;
    }
    if (this._isAutoSwitchoverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoSwitchoverEnabled = this._isAutoSwitchoverEnabled;
    }
    if (this._memberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberId = this._memberId;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryAutomaticDrConfigurationMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isAutoFailoverEnabled = undefined;
      this._isAutoSwitchoverEnabled = undefined;
      this._memberId = undefined;
      this._memberType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isAutoFailoverEnabled = value.isAutoFailoverEnabled;
      this._isAutoSwitchoverEnabled = value.isAutoSwitchoverEnabled;
      this._memberId = value.memberId;
      this._memberType = value.memberType;
    }
  }

  // is_auto_failover_enabled - computed: true, optional: true, required: false
  private _isAutoFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoFailoverEnabled() {
    return this.getBooleanAttribute('is_auto_failover_enabled');
  }
  public set isAutoFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoFailoverEnabled = value;
  }
  public resetIsAutoFailoverEnabled() {
    this._isAutoFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoFailoverEnabledInput() {
    return this._isAutoFailoverEnabled;
  }

  // is_auto_switchover_enabled - computed: true, optional: true, required: false
  private _isAutoSwitchoverEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoSwitchoverEnabled() {
    return this.getBooleanAttribute('is_auto_switchover_enabled');
  }
  public set isAutoSwitchoverEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoSwitchoverEnabled = value;
  }
  public resetIsAutoSwitchoverEnabled() {
    this._isAutoSwitchoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoSwitchoverEnabledInput() {
    return this._isAutoSwitchoverEnabled;
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

  // member_type - computed: false, optional: false, required: true
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
  }
}

export class DisasterRecoveryAutomaticDrConfigurationMembersList extends cdktf.ComplexList {
  public internalValue? : DisasterRecoveryAutomaticDrConfigurationMembers[] | cdktf.IResolvable

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
  public get(index: number): DisasterRecoveryAutomaticDrConfigurationMembersOutputReference {
    return new DisasterRecoveryAutomaticDrConfigurationMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryAutomaticDrConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#create DisasterRecoveryAutomaticDrConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#delete DisasterRecoveryAutomaticDrConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#update DisasterRecoveryAutomaticDrConfiguration#update}
  */
  readonly update?: string;
}

export function disasterRecoveryAutomaticDrConfigurationTimeoutsToTerraform(struct?: DisasterRecoveryAutomaticDrConfigurationTimeouts | cdktf.IResolvable): any {
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


export function disasterRecoveryAutomaticDrConfigurationTimeoutsToHclTerraform(struct?: DisasterRecoveryAutomaticDrConfigurationTimeouts | cdktf.IResolvable): any {
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

export class DisasterRecoveryAutomaticDrConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DisasterRecoveryAutomaticDrConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DisasterRecoveryAutomaticDrConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration oci_disaster_recovery_automatic_dr_configuration}
*/
export class DisasterRecoveryAutomaticDrConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_automatic_dr_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisasterRecoveryAutomaticDrConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisasterRecoveryAutomaticDrConfiguration to import
  * @param importFromId The id of the existing DisasterRecoveryAutomaticDrConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisasterRecoveryAutomaticDrConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_automatic_dr_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/disaster_recovery_automatic_dr_configuration oci_disaster_recovery_automatic_dr_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisasterRecoveryAutomaticDrConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DisasterRecoveryAutomaticDrConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_automatic_dr_configuration',
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
    this._defaultFailoverDrPlanId = config.defaultFailoverDrPlanId;
    this._defaultSwitchoverDrPlanId = config.defaultSwitchoverDrPlanId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._drProtectionGroupId = config.drProtectionGroupId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._members.internalValue = config.members;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // default_failover_dr_plan_id - computed: true, optional: true, required: false
  private _defaultFailoverDrPlanId?: string; 
  public get defaultFailoverDrPlanId() {
    return this.getStringAttribute('default_failover_dr_plan_id');
  }
  public set defaultFailoverDrPlanId(value: string) {
    this._defaultFailoverDrPlanId = value;
  }
  public resetDefaultFailoverDrPlanId() {
    this._defaultFailoverDrPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFailoverDrPlanIdInput() {
    return this._defaultFailoverDrPlanId;
  }

  // default_switchover_dr_plan_id - computed: true, optional: true, required: false
  private _defaultSwitchoverDrPlanId?: string; 
  public get defaultSwitchoverDrPlanId() {
    return this.getStringAttribute('default_switchover_dr_plan_id');
  }
  public set defaultSwitchoverDrPlanId(value: string) {
    this._defaultSwitchoverDrPlanId = value;
  }
  public resetDefaultSwitchoverDrPlanId() {
    this._defaultSwitchoverDrPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwitchoverDrPlanIdInput() {
    return this._defaultSwitchoverDrPlanId;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dr_protection_group_id - computed: false, optional: false, required: true
  private _drProtectionGroupId?: string; 
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }
  public set drProtectionGroupId(value: string) {
    this._drProtectionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drProtectionGroupIdInput() {
    return this._drProtectionGroupId;
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

  // last_automatic_dr_execution_submit_details - computed: true, optional: false, required: false
  public get lastAutomaticDrExecutionSubmitDetails() {
    return this.getStringAttribute('last_automatic_dr_execution_submit_details');
  }

  // last_automatic_dr_execution_submit_status - computed: true, optional: false, required: false
  public get lastAutomaticDrExecutionSubmitStatus() {
    return this.getStringAttribute('last_automatic_dr_execution_submit_status');
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

  // time_last_automatic_dr_execution_submit_attempt - computed: true, optional: false, required: false
  public get timeLastAutomaticDrExecutionSubmitAttempt() {
    return this.getStringAttribute('time_last_automatic_dr_execution_submit_attempt');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // members - computed: false, optional: false, required: true
  private _members = new DisasterRecoveryAutomaticDrConfigurationMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DisasterRecoveryAutomaticDrConfigurationMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DisasterRecoveryAutomaticDrConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DisasterRecoveryAutomaticDrConfigurationTimeouts) {
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
      default_failover_dr_plan_id: cdktf.stringToTerraform(this._defaultFailoverDrPlanId),
      default_switchover_dr_plan_id: cdktf.stringToTerraform(this._defaultSwitchoverDrPlanId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      dr_protection_group_id: cdktf.stringToTerraform(this._drProtectionGroupId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      members: cdktf.listMapper(disasterRecoveryAutomaticDrConfigurationMembersToTerraform, true)(this._members.internalValue),
      timeouts: disasterRecoveryAutomaticDrConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_failover_dr_plan_id: {
        value: cdktf.stringToHclTerraform(this._defaultFailoverDrPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_switchover_dr_plan_id: {
        value: cdktf.stringToHclTerraform(this._defaultSwitchoverDrPlanId),
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
      dr_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._drProtectionGroupId),
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
      members: {
        value: cdktf.listMapperHcl(disasterRecoveryAutomaticDrConfigurationMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryAutomaticDrConfigurationMembersList",
      },
      timeouts: {
        value: disasterRecoveryAutomaticDrConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DisasterRecoveryAutomaticDrConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
