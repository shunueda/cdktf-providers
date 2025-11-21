// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apiaccesscontrol_privileged_api_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApiaccesscontrolPrivilegedApiRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apiaccesscontrol_privileged_api_request#privileged_api_request_id DataOciApiaccesscontrolPrivilegedApiRequest#privileged_api_request_id}
  */
  readonly privilegedApiRequestId: string;
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestApproverDetails {
}

export function dataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestApproverDetails | undefined) {
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

export class DataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct {
}

export function dataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // attribute_names - computed: true, optional: false, required: false
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
}

export class DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apiaccesscontrol_privileged_api_request oci_apiaccesscontrol_privileged_api_request}
*/
export class DataOciApiaccesscontrolPrivilegedApiRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apiaccesscontrol_privileged_api_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApiaccesscontrolPrivilegedApiRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApiaccesscontrolPrivilegedApiRequest to import
  * @param importFromId The id of the existing DataOciApiaccesscontrolPrivilegedApiRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apiaccesscontrol_privileged_api_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApiaccesscontrolPrivilegedApiRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apiaccesscontrol_privileged_api_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apiaccesscontrol_privileged_api_request oci_apiaccesscontrol_privileged_api_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApiaccesscontrolPrivilegedApiRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApiaccesscontrolPrivilegedApiRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apiaccesscontrol_privileged_api_request',
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
    this._privilegedApiRequestId = config.privilegedApiRequestId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_details - computed: true, optional: false, required: false
  private _approverDetails = new DataOciApiaccesscontrolPrivilegedApiRequestApproverDetailsList(this, "approver_details", false);
  public get approverDetails() {
    return this._approverDetails;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // duration_in_hrs - computed: true, optional: false, required: false
  public get durationInHrs() {
    return this.getNumberAttribute('duration_in_hrs');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // number_of_approvers_required - computed: true, optional: false, required: false
  public get numberOfApproversRequired() {
    return this.getNumberAttribute('number_of_approvers_required');
  }

  // privileged_api_control_id - computed: true, optional: false, required: false
  public get privilegedApiControlId() {
    return this.getStringAttribute('privileged_api_control_id');
  }

  // privileged_api_control_name - computed: true, optional: false, required: false
  public get privilegedApiControlName() {
    return this.getStringAttribute('privileged_api_control_name');
  }

  // privileged_api_request_id - computed: false, optional: false, required: true
  private _privilegedApiRequestId?: string; 
  public get privilegedApiRequestId() {
    return this.getStringAttribute('privileged_api_request_id');
  }
  public set privilegedApiRequestId(value: string) {
    this._privilegedApiRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedApiRequestIdInput() {
    return this._privilegedApiRequestId;
  }

  // privileged_operation_list - computed: true, optional: false, required: false
  private _privilegedOperationList = new DataOciApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructList(this, "privileged_operation_list", false);
  public get privilegedOperationList() {
    return this._privilegedOperationList;
  }

  // reason_detail - computed: true, optional: false, required: false
  public get reasonDetail() {
    return this.getStringAttribute('reason_detail');
  }

  // reason_summary - computed: true, optional: false, required: false
  public get reasonSummary() {
    return this.getStringAttribute('reason_summary');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getListAttribute('requested_by');
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

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // sub_resource_name_list - computed: true, optional: false, required: false
  public get subResourceNameList() {
    return this.getListAttribute('sub_resource_name_list');
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

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_requested_for_future_access - computed: true, optional: false, required: false
  public get timeRequestedForFutureAccess() {
    return this.getStringAttribute('time_requested_for_future_access');
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
      privileged_api_request_id: cdktf.stringToTerraform(this._privilegedApiRequestId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      privileged_api_request_id: {
        value: cdktf.stringToHclTerraform(this._privilegedApiRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
