// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegation_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDelegateAccessControlDelegationControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}
  */
  readonly delegationControlId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}
*/
export class DataOciDelegateAccessControlDelegationControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_delegate_access_control_delegation_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDelegateAccessControlDelegationControl to import
  * @param importFromId The id of the existing DataOciDelegateAccessControlDelegationControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDelegateAccessControlDelegationControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_delegate_access_control_delegation_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDelegateAccessControlDelegationControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegationControlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_delegate_access_control_delegation_control',
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
    this._delegationControlId = config.delegationControlId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delegation_control_id - computed: false, optional: false, required: true
  private _delegationControlId?: string; 
  public get delegationControlId() {
    return this.getStringAttribute('delegation_control_id');
  }
  public set delegationControlId(value: string) {
    this._delegationControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationControlIdInput() {
    return this._delegationControlId;
  }

  // delegation_subscription_ids - computed: true, optional: false, required: false
  public get delegationSubscriptionIds() {
    return this.getListAttribute('delegation_subscription_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_approve_during_maintenance - computed: true, optional: false, required: false
  public get isAutoApproveDuringMaintenance() {
    return this.getBooleanAttribute('is_auto_approve_during_maintenance');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // notification_message_format - computed: true, optional: false, required: false
  public get notificationMessageFormat() {
    return this.getStringAttribute('notification_message_format');
  }

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // num_approvals_required - computed: true, optional: false, required: false
  public get numApprovalsRequired() {
    return this.getNumberAttribute('num_approvals_required');
  }

  // pre_approved_service_provider_action_names - computed: true, optional: false, required: false
  public get preApprovedServiceProviderActionNames() {
    return this.getListAttribute('pre_approved_service_provider_action_names');
  }

  // resource_ids - computed: true, optional: false, required: false
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
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

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // vault_key_id - computed: true, optional: false, required: false
  public get vaultKeyId() {
    return this.getStringAttribute('vault_key_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegation_control_id: cdktf.stringToTerraform(this._delegationControlId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegation_control_id: {
        value: cdktf.stringToHclTerraform(this._delegationControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
