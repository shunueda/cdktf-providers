// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelegateAccessControlDelegationControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}
  */
  readonly delegationSubscriptionIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}
  */
  readonly isAutoApproveDuringMaintenance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}
  */
  readonly notificationMessageFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}
  */
  readonly notificationTopicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}
  */
  readonly numApprovalsRequired?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}
  */
  readonly preApprovedServiceProviderActionNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}
  */
  readonly resourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}
  */
  readonly vaultKeyId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#timeouts DelegateAccessControlDelegationControl#timeouts}
  */
  readonly timeouts?: DelegateAccessControlDelegationControlTimeouts;
}
export interface DelegateAccessControlDelegationControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}
  */
  readonly update?: string;
}

export function delegateAccessControlDelegationControlTimeoutsToTerraform(struct?: DelegateAccessControlDelegationControlTimeouts | cdktf.IResolvable): any {
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


export function delegateAccessControlDelegationControlTimeoutsToHclTerraform(struct?: DelegateAccessControlDelegationControlTimeouts | cdktf.IResolvable): any {
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

export class DelegateAccessControlDelegationControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DelegateAccessControlDelegationControlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DelegateAccessControlDelegationControlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}
*/
export class DelegateAccessControlDelegationControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_delegate_access_control_delegation_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DelegateAccessControlDelegationControl to import
  * @param importFromId The id of the existing DelegateAccessControlDelegationControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DelegateAccessControlDelegationControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_delegate_access_control_delegation_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelegateAccessControlDelegationControlConfig
  */
  public constructor(scope: Construct, id: string, config: DelegateAccessControlDelegationControlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_delegate_access_control_delegation_control',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._delegationSubscriptionIds = config.delegationSubscriptionIds;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoApproveDuringMaintenance = config.isAutoApproveDuringMaintenance;
    this._notificationMessageFormat = config.notificationMessageFormat;
    this._notificationTopicId = config.notificationTopicId;
    this._numApprovalsRequired = config.numApprovalsRequired;
    this._preApprovedServiceProviderActionNames = config.preApprovedServiceProviderActionNames;
    this._resourceIds = config.resourceIds;
    this._resourceType = config.resourceType;
    this._vaultId = config.vaultId;
    this._vaultKeyId = config.vaultKeyId;
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

  // delegation_subscription_ids - computed: false, optional: false, required: true
  private _delegationSubscriptionIds?: string[]; 
  public get delegationSubscriptionIds() {
    return this.getListAttribute('delegation_subscription_ids');
  }
  public set delegationSubscriptionIds(value: string[]) {
    this._delegationSubscriptionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationSubscriptionIdsInput() {
    return this._delegationSubscriptionIds;
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

  // is_auto_approve_during_maintenance - computed: true, optional: true, required: false
  private _isAutoApproveDuringMaintenance?: boolean | cdktf.IResolvable; 
  public get isAutoApproveDuringMaintenance() {
    return this.getBooleanAttribute('is_auto_approve_during_maintenance');
  }
  public set isAutoApproveDuringMaintenance(value: boolean | cdktf.IResolvable) {
    this._isAutoApproveDuringMaintenance = value;
  }
  public resetIsAutoApproveDuringMaintenance() {
    this._isAutoApproveDuringMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoApproveDuringMaintenanceInput() {
    return this._isAutoApproveDuringMaintenance;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // notification_message_format - computed: false, optional: false, required: true
  private _notificationMessageFormat?: string; 
  public get notificationMessageFormat() {
    return this.getStringAttribute('notification_message_format');
  }
  public set notificationMessageFormat(value: string) {
    this._notificationMessageFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMessageFormatInput() {
    return this._notificationMessageFormat;
  }

  // notification_topic_id - computed: false, optional: false, required: true
  private _notificationTopicId?: string; 
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }
  public set notificationTopicId(value: string) {
    this._notificationTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicIdInput() {
    return this._notificationTopicId;
  }

  // num_approvals_required - computed: true, optional: true, required: false
  private _numApprovalsRequired?: number; 
  public get numApprovalsRequired() {
    return this.getNumberAttribute('num_approvals_required');
  }
  public set numApprovalsRequired(value: number) {
    this._numApprovalsRequired = value;
  }
  public resetNumApprovalsRequired() {
    this._numApprovalsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numApprovalsRequiredInput() {
    return this._numApprovalsRequired;
  }

  // pre_approved_service_provider_action_names - computed: true, optional: true, required: false
  private _preApprovedServiceProviderActionNames?: string[]; 
  public get preApprovedServiceProviderActionNames() {
    return this.getListAttribute('pre_approved_service_provider_action_names');
  }
  public set preApprovedServiceProviderActionNames(value: string[]) {
    this._preApprovedServiceProviderActionNames = value;
  }
  public resetPreApprovedServiceProviderActionNames() {
    this._preApprovedServiceProviderActionNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preApprovedServiceProviderActionNamesInput() {
    return this._preApprovedServiceProviderActionNames;
  }

  // resource_ids - computed: false, optional: false, required: true
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vault_id - computed: true, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // vault_key_id - computed: true, optional: true, required: false
  private _vaultKeyId?: string; 
  public get vaultKeyId() {
    return this.getStringAttribute('vault_key_id');
  }
  public set vaultKeyId(value: string) {
    this._vaultKeyId = value;
  }
  public resetVaultKeyId() {
    this._vaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultKeyIdInput() {
    return this._vaultKeyId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DelegateAccessControlDelegationControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DelegateAccessControlDelegationControlTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      delegation_subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegationSubscriptionIds),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_approve_during_maintenance: cdktf.booleanToTerraform(this._isAutoApproveDuringMaintenance),
      notification_message_format: cdktf.stringToTerraform(this._notificationMessageFormat),
      notification_topic_id: cdktf.stringToTerraform(this._notificationTopicId),
      num_approvals_required: cdktf.numberToTerraform(this._numApprovalsRequired),
      pre_approved_service_provider_action_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preApprovedServiceProviderActionNames),
      resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceIds),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      vault_key_id: cdktf.stringToTerraform(this._vaultKeyId),
      timeouts: delegateAccessControlDelegationControlTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delegation_subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegationSubscriptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      is_auto_approve_during_maintenance: {
        value: cdktf.booleanToHclTerraform(this._isAutoApproveDuringMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notification_message_format: {
        value: cdktf.stringToHclTerraform(this._notificationMessageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_id: {
        value: cdktf.stringToHclTerraform(this._notificationTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_approvals_required: {
        value: cdktf.numberToHclTerraform(this._numApprovalsRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_approved_service_provider_action_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preApprovedServiceProviderActionNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_key_id: {
        value: cdktf.stringToHclTerraform(this._vaultKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: delegateAccessControlDelegationControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DelegateAccessControlDelegationControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
