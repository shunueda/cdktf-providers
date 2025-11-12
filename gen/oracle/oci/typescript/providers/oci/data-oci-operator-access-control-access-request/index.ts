// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOperatorAccessControlAccessRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}
  */
  readonly accessRequestId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciOperatorAccessControlAccessRequestApproverDetails {
}

export function dataOciOperatorAccessControlAccessRequestApproverDetailsToTerraform(struct?: DataOciOperatorAccessControlAccessRequestApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlAccessRequestApproverDetailsToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestApproverDetails | undefined) {
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

  // approval_additional_message - computed: true, optional: false, required: false
  public get approvalAdditionalMessage() {
    return this.getStringAttribute('approval_additional_message');
  }

  // approval_comment - computed: true, optional: false, required: false
  public get approvalComment() {
    return this.getStringAttribute('approval_comment');
  }

  // approver_id - computed: true, optional: false, required: false
  public get approverId() {
    return this.getStringAttribute('approver_id');
  }

  // time_approved_for_access - computed: true, optional: false, required: false
  public get timeApprovedForAccess() {
    return this.getStringAttribute('time_approved_for_access');
  }

  // time_of_authorization - computed: true, optional: false, required: false
  public get timeOfAuthorization() {
    return this.getStringAttribute('time_of_authorization');
  }
}

export class DataOciOperatorAccessControlAccessRequestApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference {
    return new DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlAccessRequestExtensionApproverDetails {
}

export function dataOciOperatorAccessControlAccessRequestExtensionApproverDetailsToTerraform(struct?: DataOciOperatorAccessControlAccessRequestExtensionApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlAccessRequestExtensionApproverDetailsToHclTerraform(struct?: DataOciOperatorAccessControlAccessRequestExtensionApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOperatorAccessControlAccessRequestExtensionApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlAccessRequestExtensionApproverDetails | undefined) {
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

  // approval_additional_message - computed: true, optional: false, required: false
  public get approvalAdditionalMessage() {
    return this.getStringAttribute('approval_additional_message');
  }

  // approval_comment - computed: true, optional: false, required: false
  public get approvalComment() {
    return this.getStringAttribute('approval_comment');
  }

  // approver_id - computed: true, optional: false, required: false
  public get approverId() {
    return this.getStringAttribute('approver_id');
  }

  // time_approved_for_access - computed: true, optional: false, required: false
  public get timeApprovedForAccess() {
    return this.getStringAttribute('time_approved_for_access');
  }

  // time_of_authorization - computed: true, optional: false, required: false
  public get timeOfAuthorization() {
    return this.getStringAttribute('time_of_authorization');
  }
}

export class DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference {
    return new DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request oci_operator_access_control_access_request}
*/
export class DataOciOperatorAccessControlAccessRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_access_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequest to import
  * @param importFromId The id of the existing DataOciOperatorAccessControlAccessRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_access_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request oci_operator_access_control_access_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOperatorAccessControlAccessRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOperatorAccessControlAccessRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_access_request',
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
    this._accessRequestId = config.accessRequestId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_reason_summary - computed: true, optional: false, required: false
  public get accessReasonSummary() {
    return this.getStringAttribute('access_reason_summary');
  }

  // access_request_id - computed: false, optional: false, required: true
  private _accessRequestId?: string; 
  public get accessRequestId() {
    return this.getStringAttribute('access_request_id');
  }
  public set accessRequestId(value: string) {
    this._accessRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestIdInput() {
    return this._accessRequestId;
  }

  // action_requests_list - computed: true, optional: false, required: false
  public get actionRequestsList() {
    return this.getListAttribute('action_requests_list');
  }

  // approver_comment - computed: true, optional: false, required: false
  public get approverComment() {
    return this.getStringAttribute('approver_comment');
  }

  // approver_details - computed: true, optional: false, required: false
  private _approverDetails = new DataOciOperatorAccessControlAccessRequestApproverDetailsList(this, "approver_details", false);
  public get approverDetails() {
    return this._approverDetails;
  }

  // audit_type - computed: true, optional: false, required: false
  public get auditType() {
    return this.getListAttribute('audit_type');
  }

  // closure_comment - computed: true, optional: false, required: false
  public get closureComment() {
    return this.getStringAttribute('closure_comment');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // extend_duration - computed: true, optional: false, required: false
  public get extendDuration() {
    return this.getNumberAttribute('extend_duration');
  }

  // extension_approver_details - computed: true, optional: false, required: false
  private _extensionApproverDetails = new DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList(this, "extension_approver_details", false);
  public get extensionApproverDetails() {
    return this._extensionApproverDetails;
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

  // is_validate_assignment - computed: true, optional: false, required: false
  public get isValidateAssignment() {
    return this.getBooleanAttribute('is_validate_assignment');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // number_of_approvers - computed: true, optional: false, required: false
  public get numberOfApprovers() {
    return this.getNumberAttribute('number_of_approvers');
  }

  // number_of_approvers_required - computed: true, optional: false, required: false
  public get numberOfApproversRequired() {
    return this.getNumberAttribute('number_of_approvers_required');
  }

  // number_of_extension_approvers - computed: true, optional: false, required: false
  public get numberOfExtensionApprovers() {
    return this.getNumberAttribute('number_of_extension_approvers');
  }

  // opctl_additional_message - computed: true, optional: false, required: false
  public get opctlAdditionalMessage() {
    return this.getStringAttribute('opctl_additional_message');
  }

  // opctl_id - computed: true, optional: false, required: false
  public get opctlId() {
    return this.getStringAttribute('opctl_id');
  }

  // opctl_name - computed: true, optional: false, required: false
  public get opctlName() {
    return this.getStringAttribute('opctl_name');
  }

  // operator_id - computed: true, optional: false, required: false
  public get operatorId() {
    return this.getStringAttribute('operator_id');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
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

  // sub_resource_list - computed: true, optional: false, required: false
  public get subResourceList() {
    return this.getListAttribute('sub_resource_list');
  }

  // system_message - computed: true, optional: false, required: false
  public get systemMessage() {
    return this.getStringAttribute('system_message');
  }

  // time_of_creation - computed: true, optional: false, required: false
  public get timeOfCreation() {
    return this.getStringAttribute('time_of_creation');
  }

  // time_of_modification - computed: true, optional: false, required: false
  public get timeOfModification() {
    return this.getStringAttribute('time_of_modification');
  }

  // time_of_user_creation - computed: true, optional: false, required: false
  public get timeOfUserCreation() {
    return this.getStringAttribute('time_of_user_creation');
  }

  // time_requested_for_future_access - computed: true, optional: false, required: false
  public get timeRequestedForFutureAccess() {
    return this.getStringAttribute('time_requested_for_future_access');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getListAttribute('workflow_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_request_id: cdktf.stringToTerraform(this._accessRequestId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_request_id: {
        value: cdktf.stringToHclTerraform(this._accessRequestId),
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
