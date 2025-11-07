// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OperatorAccessControlOperatorControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}
  */
  readonly approverGroupsList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}
  */
  readonly approversList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}
  */
  readonly emailIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}
  */
  readonly isFullyPreApproved: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}
  */
  readonly numberOfApprovers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}
  */
  readonly operatorControlName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}
  */
  readonly preApprovedOpActionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}
  */
  readonly systemMessage?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#timeouts OperatorAccessControlOperatorControl#timeouts}
  */
  readonly timeouts?: OperatorAccessControlOperatorControlTimeouts;
}
export interface OperatorAccessControlOperatorControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}
  */
  readonly update?: string;
}

export function operatorAccessControlOperatorControlTimeoutsToTerraform(struct?: OperatorAccessControlOperatorControlTimeouts | cdktf.IResolvable): any {
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


export function operatorAccessControlOperatorControlTimeoutsToHclTerraform(struct?: OperatorAccessControlOperatorControlTimeouts | cdktf.IResolvable): any {
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

export class OperatorAccessControlOperatorControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperatorAccessControlOperatorControlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OperatorAccessControlOperatorControlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control oci_operator_access_control_operator_control}
*/
export class OperatorAccessControlOperatorControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_operator_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OperatorAccessControlOperatorControl to import
  * @param importFromId The id of the existing OperatorAccessControlOperatorControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OperatorAccessControlOperatorControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_operator_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control oci_operator_access_control_operator_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OperatorAccessControlOperatorControlConfig
  */
  public constructor(scope: Construct, id: string, config: OperatorAccessControlOperatorControlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_operator_control',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approverGroupsList = config.approverGroupsList;
    this._approversList = config.approversList;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._emailIdList = config.emailIdList;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isFullyPreApproved = config.isFullyPreApproved;
    this._numberOfApprovers = config.numberOfApprovers;
    this._operatorControlName = config.operatorControlName;
    this._preApprovedOpActionList = config.preApprovedOpActionList;
    this._resourceType = config.resourceType;
    this._systemMessage = config.systemMessage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_required_op_action_list - computed: true, optional: false, required: false
  public get approvalRequiredOpActionList() {
    return this.getListAttribute('approval_required_op_action_list');
  }

  // approver_groups_list - computed: false, optional: false, required: true
  private _approverGroupsList?: string[]; 
  public get approverGroupsList() {
    return this.getListAttribute('approver_groups_list');
  }
  public set approverGroupsList(value: string[]) {
    this._approverGroupsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approverGroupsListInput() {
    return this._approverGroupsList;
  }

  // approvers_list - computed: true, optional: true, required: false
  private _approversList?: string[]; 
  public get approversList() {
    return this.getListAttribute('approvers_list');
  }
  public set approversList(value: string[]) {
    this._approversList = value;
  }
  public resetApproversList() {
    this._approversList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approversListInput() {
    return this._approversList;
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

  // email_id_list - computed: true, optional: true, required: false
  private _emailIdList?: string[]; 
  public get emailIdList() {
    return this.getListAttribute('email_id_list');
  }
  public set emailIdList(value: string[]) {
    this._emailIdList = value;
  }
  public resetEmailIdList() {
    this._emailIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdListInput() {
    return this._emailIdList;
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

  // is_default_operator_control - computed: true, optional: false, required: false
  public get isDefaultOperatorControl() {
    return this.getBooleanAttribute('is_default_operator_control');
  }

  // is_fully_pre_approved - computed: false, optional: false, required: true
  private _isFullyPreApproved?: boolean | cdktf.IResolvable; 
  public get isFullyPreApproved() {
    return this.getBooleanAttribute('is_fully_pre_approved');
  }
  public set isFullyPreApproved(value: boolean | cdktf.IResolvable) {
    this._isFullyPreApproved = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isFullyPreApprovedInput() {
    return this._isFullyPreApproved;
  }

  // last_modified_info - computed: true, optional: false, required: false
  public get lastModifiedInfo() {
    return this.getStringAttribute('last_modified_info');
  }

  // number_of_approvers - computed: true, optional: true, required: false
  private _numberOfApprovers?: number; 
  public get numberOfApprovers() {
    return this.getNumberAttribute('number_of_approvers');
  }
  public set numberOfApprovers(value: number) {
    this._numberOfApprovers = value;
  }
  public resetNumberOfApprovers() {
    this._numberOfApprovers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfApproversInput() {
    return this._numberOfApprovers;
  }

  // operator_control_name - computed: false, optional: false, required: true
  private _operatorControlName?: string; 
  public get operatorControlName() {
    return this.getStringAttribute('operator_control_name');
  }
  public set operatorControlName(value: string) {
    this._operatorControlName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorControlNameInput() {
    return this._operatorControlName;
  }

  // pre_approved_op_action_list - computed: true, optional: true, required: false
  private _preApprovedOpActionList?: string[]; 
  public get preApprovedOpActionList() {
    return this.getListAttribute('pre_approved_op_action_list');
  }
  public set preApprovedOpActionList(value: string[]) {
    this._preApprovedOpActionList = value;
  }
  public resetPreApprovedOpActionList() {
    this._preApprovedOpActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preApprovedOpActionListInput() {
    return this._preApprovedOpActionList;
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

  // system_message - computed: true, optional: true, required: false
  private _systemMessage?: string; 
  public get systemMessage() {
    return this.getStringAttribute('system_message');
  }
  public set systemMessage(value: string) {
    this._systemMessage = value;
  }
  public resetSystemMessage() {
    this._systemMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMessageInput() {
    return this._systemMessage;
  }

  // time_of_creation - computed: true, optional: false, required: false
  public get timeOfCreation() {
    return this.getStringAttribute('time_of_creation');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // time_of_modification - computed: true, optional: false, required: false
  public get timeOfModification() {
    return this.getStringAttribute('time_of_modification');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OperatorAccessControlOperatorControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OperatorAccessControlOperatorControlTimeouts) {
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
      approver_groups_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approverGroupsList),
      approvers_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approversList),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      email_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailIdList),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_fully_pre_approved: cdktf.booleanToTerraform(this._isFullyPreApproved),
      number_of_approvers: cdktf.numberToTerraform(this._numberOfApprovers),
      operator_control_name: cdktf.stringToTerraform(this._operatorControlName),
      pre_approved_op_action_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preApprovedOpActionList),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      system_message: cdktf.stringToTerraform(this._systemMessage),
      timeouts: operatorAccessControlOperatorControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approver_groups_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approverGroupsList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approvers_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approversList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      email_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailIdList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      is_fully_pre_approved: {
        value: cdktf.booleanToHclTerraform(this._isFullyPreApproved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      number_of_approvers: {
        value: cdktf.numberToHclTerraform(this._numberOfApprovers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operator_control_name: {
        value: cdktf.stringToHclTerraform(this._operatorControlName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_approved_op_action_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preApprovedOpActionList),
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
      system_message: {
        value: cdktf.stringToHclTerraform(this._systemMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: operatorAccessControlOperatorControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OperatorAccessControlOperatorControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
