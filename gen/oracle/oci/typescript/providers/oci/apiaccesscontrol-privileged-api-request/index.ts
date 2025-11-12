// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiaccesscontrolPrivilegedApiRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#compartment_id ApiaccesscontrolPrivilegedApiRequest#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#defined_tags ApiaccesscontrolPrivilegedApiRequest#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#duration_in_hrs ApiaccesscontrolPrivilegedApiRequest#duration_in_hrs}
  */
  readonly durationInHrs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#freeform_tags ApiaccesscontrolPrivilegedApiRequest#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#id ApiaccesscontrolPrivilegedApiRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#notification_topic_id ApiaccesscontrolPrivilegedApiRequest#notification_topic_id}
  */
  readonly notificationTopicId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#reason_detail ApiaccesscontrolPrivilegedApiRequest#reason_detail}
  */
  readonly reasonDetail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#reason_summary ApiaccesscontrolPrivilegedApiRequest#reason_summary}
  */
  readonly reasonSummary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#resource_id ApiaccesscontrolPrivilegedApiRequest#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#severity ApiaccesscontrolPrivilegedApiRequest#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#sub_resource_name_list ApiaccesscontrolPrivilegedApiRequest#sub_resource_name_list}
  */
  readonly subResourceNameList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#ticket_numbers ApiaccesscontrolPrivilegedApiRequest#ticket_numbers}
  */
  readonly ticketNumbers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#time_requested_for_future_access ApiaccesscontrolPrivilegedApiRequest#time_requested_for_future_access}
  */
  readonly timeRequestedForFutureAccess?: string;
  /**
  * privileged_operation_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#privileged_operation_list ApiaccesscontrolPrivilegedApiRequest#privileged_operation_list}
  */
  readonly privilegedOperationList: ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#timeouts ApiaccesscontrolPrivilegedApiRequest#timeouts}
  */
  readonly timeouts?: ApiaccesscontrolPrivilegedApiRequestTimeouts;
}
export interface ApiaccesscontrolPrivilegedApiRequestApproverDetails {
}

export function apiaccesscontrolPrivilegedApiRequestApproverDetailsToTerraform(struct?: ApiaccesscontrolPrivilegedApiRequestApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiaccesscontrolPrivilegedApiRequestApproverDetailsToHclTerraform(struct?: ApiaccesscontrolPrivilegedApiRequestApproverDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiaccesscontrolPrivilegedApiRequestApproverDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiaccesscontrolPrivilegedApiRequestApproverDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiaccesscontrolPrivilegedApiRequestApproverDetails | undefined) {
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

export class ApiaccesscontrolPrivilegedApiRequestApproverDetailsList extends cdktf.ComplexList {

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
  public get(index: number): ApiaccesscontrolPrivilegedApiRequestApproverDetailsOutputReference {
    return new ApiaccesscontrolPrivilegedApiRequestApproverDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#api_name ApiaccesscontrolPrivilegedApiRequest#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#attribute_names ApiaccesscontrolPrivilegedApiRequest#attribute_names}
  */
  readonly attributeNames?: string[];
}

export function apiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructToTerraform(struct?: ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_name: cdktf.stringToTerraform(struct!.apiName),
    attribute_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeNames),
  }
}


export function apiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructToHclTerraform(struct?: ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_name: {
      value: cdktf.stringToHclTerraform(struct!.apiName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiName = this._apiName;
    }
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiName = undefined;
      this._attributeNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiName = value.apiName;
      this._attributeNames = value.attributeNames;
    }
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // attribute_names - computed: true, optional: true, required: false
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  public resetAttributeNames() {
    this._attributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }
}

export class ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructList extends cdktf.ComplexList {
  public internalValue? : ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructOutputReference {
    return new ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiaccesscontrolPrivilegedApiRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#create ApiaccesscontrolPrivilegedApiRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#delete ApiaccesscontrolPrivilegedApiRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#update ApiaccesscontrolPrivilegedApiRequest#update}
  */
  readonly update?: string;
}

export function apiaccesscontrolPrivilegedApiRequestTimeoutsToTerraform(struct?: ApiaccesscontrolPrivilegedApiRequestTimeouts | cdktf.IResolvable): any {
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


export function apiaccesscontrolPrivilegedApiRequestTimeoutsToHclTerraform(struct?: ApiaccesscontrolPrivilegedApiRequestTimeouts | cdktf.IResolvable): any {
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

export class ApiaccesscontrolPrivilegedApiRequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiaccesscontrolPrivilegedApiRequestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiaccesscontrolPrivilegedApiRequestTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request oci_apiaccesscontrol_privileged_api_request}
*/
export class ApiaccesscontrolPrivilegedApiRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apiaccesscontrol_privileged_api_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiaccesscontrolPrivilegedApiRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiaccesscontrolPrivilegedApiRequest to import
  * @param importFromId The id of the existing ApiaccesscontrolPrivilegedApiRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiaccesscontrolPrivilegedApiRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apiaccesscontrol_privileged_api_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/apiaccesscontrol_privileged_api_request oci_apiaccesscontrol_privileged_api_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiaccesscontrolPrivilegedApiRequestConfig
  */
  public constructor(scope: Construct, id: string, config: ApiaccesscontrolPrivilegedApiRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apiaccesscontrol_privileged_api_request',
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
    this._durationInHrs = config.durationInHrs;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._notificationTopicId = config.notificationTopicId;
    this._reasonDetail = config.reasonDetail;
    this._reasonSummary = config.reasonSummary;
    this._resourceId = config.resourceId;
    this._severity = config.severity;
    this._subResourceNameList = config.subResourceNameList;
    this._ticketNumbers = config.ticketNumbers;
    this._timeRequestedForFutureAccess = config.timeRequestedForFutureAccess;
    this._privilegedOperationList.internalValue = config.privilegedOperationList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_details - computed: true, optional: false, required: false
  private _approverDetails = new ApiaccesscontrolPrivilegedApiRequestApproverDetailsList(this, "approver_details", false);
  public get approverDetails() {
    return this._approverDetails;
  }

  // closure_comment - computed: true, optional: false, required: false
  public get closureComment() {
    return this.getStringAttribute('closure_comment');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // duration_in_hrs - computed: true, optional: true, required: false
  private _durationInHrs?: number; 
  public get durationInHrs() {
    return this.getNumberAttribute('duration_in_hrs');
  }
  public set durationInHrs(value: number) {
    this._durationInHrs = value;
  }
  public resetDurationInHrs() {
    this._durationInHrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInHrsInput() {
    return this._durationInHrs;
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notification_topic_id - computed: true, optional: true, required: false
  private _notificationTopicId?: string; 
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }
  public set notificationTopicId(value: string) {
    this._notificationTopicId = value;
  }
  public resetNotificationTopicId() {
    this._notificationTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicIdInput() {
    return this._notificationTopicId;
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

  // reason_detail - computed: true, optional: true, required: false
  private _reasonDetail?: string; 
  public get reasonDetail() {
    return this.getStringAttribute('reason_detail');
  }
  public set reasonDetail(value: string) {
    this._reasonDetail = value;
  }
  public resetReasonDetail() {
    this._reasonDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonDetailInput() {
    return this._reasonDetail;
  }

  // reason_summary - computed: false, optional: false, required: true
  private _reasonSummary?: string; 
  public get reasonSummary() {
    return this.getStringAttribute('reason_summary');
  }
  public set reasonSummary(value: string) {
    this._reasonSummary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonSummaryInput() {
    return this._reasonSummary;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getListAttribute('requested_by');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // sub_resource_name_list - computed: true, optional: true, required: false
  private _subResourceNameList?: string[]; 
  public get subResourceNameList() {
    return this.getListAttribute('sub_resource_name_list');
  }
  public set subResourceNameList(value: string[]) {
    this._subResourceNameList = value;
  }
  public resetSubResourceNameList() {
    this._subResourceNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subResourceNameListInput() {
    return this._subResourceNameList;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // ticket_numbers - computed: true, optional: true, required: false
  private _ticketNumbers?: string[]; 
  public get ticketNumbers() {
    return this.getListAttribute('ticket_numbers');
  }
  public set ticketNumbers(value: string[]) {
    this._ticketNumbers = value;
  }
  public resetTicketNumbers() {
    this._ticketNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketNumbersInput() {
    return this._ticketNumbers;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_requested_for_future_access - computed: true, optional: true, required: false
  private _timeRequestedForFutureAccess?: string; 
  public get timeRequestedForFutureAccess() {
    return this.getStringAttribute('time_requested_for_future_access');
  }
  public set timeRequestedForFutureAccess(value: string) {
    this._timeRequestedForFutureAccess = value;
  }
  public resetTimeRequestedForFutureAccess() {
    this._timeRequestedForFutureAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRequestedForFutureAccessInput() {
    return this._timeRequestedForFutureAccess;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // privileged_operation_list - computed: false, optional: false, required: true
  private _privilegedOperationList = new ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructList(this, "privileged_operation_list", false);
  public get privilegedOperationList() {
    return this._privilegedOperationList;
  }
  public putPrivilegedOperationList(value: ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStruct[] | cdktf.IResolvable) {
    this._privilegedOperationList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedOperationListInput() {
    return this._privilegedOperationList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiaccesscontrolPrivilegedApiRequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiaccesscontrolPrivilegedApiRequestTimeouts) {
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
      duration_in_hrs: cdktf.numberToTerraform(this._durationInHrs),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      notification_topic_id: cdktf.stringToTerraform(this._notificationTopicId),
      reason_detail: cdktf.stringToTerraform(this._reasonDetail),
      reason_summary: cdktf.stringToTerraform(this._reasonSummary),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      severity: cdktf.stringToTerraform(this._severity),
      sub_resource_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subResourceNameList),
      ticket_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ticketNumbers),
      time_requested_for_future_access: cdktf.stringToTerraform(this._timeRequestedForFutureAccess),
      privileged_operation_list: cdktf.listMapper(apiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructToTerraform, true)(this._privilegedOperationList.internalValue),
      timeouts: apiaccesscontrolPrivilegedApiRequestTimeoutsToTerraform(this._timeouts.internalValue),
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
      duration_in_hrs: {
        value: cdktf.numberToHclTerraform(this._durationInHrs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      notification_topic_id: {
        value: cdktf.stringToHclTerraform(this._notificationTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason_detail: {
        value: cdktf.stringToHclTerraform(this._reasonDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason_summary: {
        value: cdktf.stringToHclTerraform(this._reasonSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_resource_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subResourceNameList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ticket_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ticketNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_requested_for_future_access: {
        value: cdktf.stringToHclTerraform(this._timeRequestedForFutureAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileged_operation_list: {
        value: cdktf.listMapperHcl(apiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructToHclTerraform, true)(this._privilegedOperationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiaccesscontrolPrivilegedApiRequestPrivilegedOperationListStructList",
      },
      timeouts: {
        value: apiaccesscontrolPrivilegedApiRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiaccesscontrolPrivilegedApiRequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
