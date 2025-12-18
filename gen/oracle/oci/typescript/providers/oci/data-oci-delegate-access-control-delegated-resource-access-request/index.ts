// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}
  */
  readonly delegatedResourceAccessRequestId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo {
}

export function dataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoToTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoToHclTerraform(struct?: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_action - computed: true, optional: false, required: false
  public get approvalAction() {
    return this.getStringAttribute('approval_action');
  }

  // approval_type - computed: true, optional: false, required: false
  public get approvalType() {
    return this.getStringAttribute('approval_type');
  }

  // approver_additional_message - computed: true, optional: false, required: false
  public get approverAdditionalMessage() {
    return this.getStringAttribute('approver_additional_message');
  }

  // approver_comment - computed: true, optional: false, required: false
  public get approverComment() {
    return this.getStringAttribute('approver_comment');
  }

  // approver_id - computed: true, optional: false, required: false
  public get approverId() {
    return this.getStringAttribute('approver_id');
  }

  // time_approved_for_access - computed: true, optional: false, required: false
  public get timeApprovedForAccess() {
    return this.getStringAttribute('time_approved_for_access');
  }
}

export class DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference {
    return new DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request oci_delegate_access_control_delegated_resource_access_request}
*/
export class DataOciDelegateAccessControlDelegatedResourceAccessRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_delegate_access_control_delegated_resource_access_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequest to import
  * @param importFromId The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_delegate_access_control_delegated_resource_access_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request oci_delegate_access_control_delegated_resource_access_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_delegate_access_control_delegated_resource_access_request',
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
    this._delegatedResourceAccessRequestId = config.delegatedResourceAccessRequestId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_info - computed: true, optional: false, required: false
  private _approvalInfo = new DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList(this, "approval_info", false);
  public get approvalInfo() {
    return this._approvalInfo;
  }

  // audit_types - computed: true, optional: false, required: false
  public get auditTypes() {
    return this.getListAttribute('audit_types');
  }

  // closure_comment - computed: true, optional: false, required: false
  public get closureComment() {
    return this.getStringAttribute('closure_comment');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_name_list - computed: true, optional: false, required: false
  public get databaseNameList() {
    return this.getListAttribute('database_name_list');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // delegated_resource_access_request_id - computed: false, optional: false, required: true
  private _delegatedResourceAccessRequestId?: string; 
  public get delegatedResourceAccessRequestId() {
    return this.getStringAttribute('delegated_resource_access_request_id');
  }
  public set delegatedResourceAccessRequestId(value: string) {
    this._delegatedResourceAccessRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedResourceAccessRequestIdInput() {
    return this._delegatedResourceAccessRequestId;
  }

  // delegation_control_id - computed: true, optional: false, required: false
  public get delegationControlId() {
    return this.getStringAttribute('delegation_control_id');
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

  // duration_in_hours - computed: true, optional: false, required: false
  public get durationInHours() {
    return this.getNumberAttribute('duration_in_hours');
  }

  // extend_duration_in_hours - computed: true, optional: false, required: false
  public get extendDurationInHours() {
    return this.getNumberAttribute('extend_duration_in_hours');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // is_auto_approved - computed: true, optional: false, required: false
  public get isAutoApproved() {
    return this.getBooleanAttribute('is_auto_approved');
  }

  // is_pending_more_info - computed: true, optional: false, required: false
  public get isPendingMoreInfo() {
    return this.getBooleanAttribute('is_pending_more_info');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // num_extension_approvals - computed: true, optional: false, required: false
  public get numExtensionApprovals() {
    return this.getNumberAttribute('num_extension_approvals');
  }

  // num_initial_approvals - computed: true, optional: false, required: false
  public get numInitialApprovals() {
    return this.getNumberAttribute('num_initial_approvals');
  }

  // provided_service_types - computed: true, optional: false, required: false
  public get providedServiceTypes() {
    return this.getListAttribute('provided_service_types');
  }

  // reason_for_request - computed: true, optional: false, required: false
  public get reasonForRequest() {
    return this.getStringAttribute('reason_for_request');
  }

  // request_status - computed: true, optional: false, required: false
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }

  // requested_action_names - computed: true, optional: false, required: false
  public get requestedActionNames() {
    return this.getListAttribute('requested_action_names');
  }

  // requester_type - computed: true, optional: false, required: false
  public get requesterType() {
    return this.getStringAttribute('requester_type');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
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

  // ticket_numbers - computed: true, optional: false, required: false
  public get ticketNumbers() {
    return this.getListAttribute('ticket_numbers');
  }

  // time_access_requested - computed: true, optional: false, required: false
  public get timeAccessRequested() {
    return this.getStringAttribute('time_access_requested');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_resource_access_request_id: cdktf.stringToTerraform(this._delegatedResourceAccessRequestId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegated_resource_access_request_id: {
        value: cdktf.stringToHclTerraform(this._delegatedResourceAccessRequestId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
