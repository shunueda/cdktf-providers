// https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdmApprovalWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approval mode of the ApprovalWorkflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#approval_mode DataSdmApprovalWorkflow#approval_mode}
  */
  readonly approvalMode?: string;
  /**
  * Optional description of the ApprovalWorkflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#description DataSdmApprovalWorkflow#description}
  */
  readonly description?: string;
  /**
  * Unique identifier of the ApprovalWorkflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#id DataSdmApprovalWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique human-readable name of the ApprovalWorkflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#name DataSdmApprovalWorkflow#name}
  */
  readonly name?: string;
  /**
  * approval_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#approval_step DataSdmApprovalWorkflow#approval_step}
  */
  readonly approvalStep?: DataSdmApprovalWorkflowApprovalStep[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#timeouts DataSdmApprovalWorkflow#timeouts}
  */
  readonly timeouts?: DataSdmApprovalWorkflowTimeouts;
}
export interface DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApprovers {
}

export function dataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversToTerraform(struct?: DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversToHclTerraform(struct?: DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApprovers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApprovers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
}

export class DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversOutputReference {
    return new DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmApprovalWorkflowApprovalWorkflowsApprovalStep {
}

export function dataSdmApprovalWorkflowApprovalWorkflowsApprovalStepToTerraform(struct?: DataSdmApprovalWorkflowApprovalWorkflowsApprovalStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmApprovalWorkflowApprovalWorkflowsApprovalStepToHclTerraform(struct?: DataSdmApprovalWorkflowApprovalWorkflowsApprovalStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmApprovalWorkflowApprovalWorkflowsApprovalStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmApprovalWorkflowApprovalWorkflowsApprovalStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approvers - computed: true, optional: false, required: false
  private _approvers = new DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepApproversList(this, "approvers", false);
  public get approvers() {
    return this._approvers;
  }

  // quantifier - computed: true, optional: false, required: false
  public get quantifier() {
    return this.getStringAttribute('quantifier');
  }

  // skip_after - computed: true, optional: false, required: false
  public get skipAfter() {
    return this.getStringAttribute('skip_after');
  }
}

export class DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepOutputReference {
    return new DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmApprovalWorkflowApprovalWorkflows {
}

export function dataSdmApprovalWorkflowApprovalWorkflowsToTerraform(struct?: DataSdmApprovalWorkflowApprovalWorkflows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmApprovalWorkflowApprovalWorkflowsToHclTerraform(struct?: DataSdmApprovalWorkflowApprovalWorkflows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmApprovalWorkflowApprovalWorkflowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmApprovalWorkflowApprovalWorkflows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmApprovalWorkflowApprovalWorkflows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_mode - computed: true, optional: false, required: false
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }

  // approval_step - computed: true, optional: false, required: false
  private _approvalStep = new DataSdmApprovalWorkflowApprovalWorkflowsApprovalStepList(this, "approval_step", false);
  public get approvalStep() {
    return this._approvalStep;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSdmApprovalWorkflowApprovalWorkflowsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmApprovalWorkflowApprovalWorkflowsOutputReference {
    return new DataSdmApprovalWorkflowApprovalWorkflowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmApprovalWorkflowApprovalStepApprovers {
  /**
  * The account id of the approver (only one of account_id, role_id, group id, or reference may be present for one approver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#account_id DataSdmApprovalWorkflow#account_id}
  */
  readonly accountId?: string;
  /**
  * The group id of the approver (only one of account_id, role_id, group id, or reference may be present for one approver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#group_id DataSdmApprovalWorkflow#group_id}
  */
  readonly groupId?: string;
  /**
  * A reference to an approver: 'manager-of-requester' or 'manager-of-manager-of-requester' (only one of account_id, role_id, group id, or reference may be present for one approver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#reference DataSdmApprovalWorkflow#reference}
  */
  readonly reference?: string;
  /**
  * The role id of the approver (only one of account_id, role_id, group id, or reference may be present for one approver)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#role_id DataSdmApprovalWorkflow#role_id}
  */
  readonly roleId?: string;
}

export function dataSdmApprovalWorkflowApprovalStepApproversToTerraform(struct?: DataSdmApprovalWorkflowApprovalStepApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    reference: cdktf.stringToTerraform(struct!.reference),
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function dataSdmApprovalWorkflowApprovalStepApproversToHclTerraform(struct?: DataSdmApprovalWorkflowApprovalStepApprovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmApprovalWorkflowApprovalStepApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmApprovalWorkflowApprovalStepApprovers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmApprovalWorkflowApprovalStepApprovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._groupId = undefined;
      this._reference = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._groupId = value.groupId;
      this._reference = value.reference;
      this._roleId = value.roleId;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}

export class DataSdmApprovalWorkflowApprovalStepApproversList extends cdktf.ComplexList {
  public internalValue? : DataSdmApprovalWorkflowApprovalStepApprovers[] | cdktf.IResolvable

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
  public get(index: number): DataSdmApprovalWorkflowApprovalStepApproversOutputReference {
    return new DataSdmApprovalWorkflowApprovalStepApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmApprovalWorkflowApprovalStep {
  /**
  * Whether any or all approvers are required to approve for this approval step (optional, defaults to any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#quantifier DataSdmApprovalWorkflow#quantifier}
  */
  readonly quantifier?: string;
  /**
  * Duration after which this approval step will be skipped if no approval is given (optional, if not provided this step must be manually approved)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#skip_after DataSdmApprovalWorkflow#skip_after}
  */
  readonly skipAfter?: string;
  /**
  * approvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#approvers DataSdmApprovalWorkflow#approvers}
  */
  readonly approvers: DataSdmApprovalWorkflowApprovalStepApprovers[] | cdktf.IResolvable;
}

export function dataSdmApprovalWorkflowApprovalStepToTerraform(struct?: DataSdmApprovalWorkflowApprovalStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantifier: cdktf.stringToTerraform(struct!.quantifier),
    skip_after: cdktf.stringToTerraform(struct!.skipAfter),
    approvers: cdktf.listMapper(dataSdmApprovalWorkflowApprovalStepApproversToTerraform, true)(struct!.approvers),
  }
}


export function dataSdmApprovalWorkflowApprovalStepToHclTerraform(struct?: DataSdmApprovalWorkflowApprovalStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantifier: {
      value: cdktf.stringToHclTerraform(struct!.quantifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_after: {
      value: cdktf.stringToHclTerraform(struct!.skipAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    approvers: {
      value: cdktf.listMapperHcl(dataSdmApprovalWorkflowApprovalStepApproversToHclTerraform, true)(struct!.approvers),
      isBlock: true,
      type: "list",
      storageClassType: "DataSdmApprovalWorkflowApprovalStepApproversList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmApprovalWorkflowApprovalStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmApprovalWorkflowApprovalStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantifier = this._quantifier;
    }
    if (this._skipAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipAfter = this._skipAfter;
    }
    if (this._approvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvers = this._approvers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmApprovalWorkflowApprovalStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantifier = undefined;
      this._skipAfter = undefined;
      this._approvers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantifier = value.quantifier;
      this._skipAfter = value.skipAfter;
      this._approvers.internalValue = value.approvers;
    }
  }

  // quantifier - computed: false, optional: true, required: false
  private _quantifier?: string; 
  public get quantifier() {
    return this.getStringAttribute('quantifier');
  }
  public set quantifier(value: string) {
    this._quantifier = value;
  }
  public resetQuantifier() {
    this._quantifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantifierInput() {
    return this._quantifier;
  }

  // skip_after - computed: false, optional: true, required: false
  private _skipAfter?: string; 
  public get skipAfter() {
    return this.getStringAttribute('skip_after');
  }
  public set skipAfter(value: string) {
    this._skipAfter = value;
  }
  public resetSkipAfter() {
    this._skipAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAfterInput() {
    return this._skipAfter;
  }

  // approvers - computed: false, optional: false, required: true
  private _approvers = new DataSdmApprovalWorkflowApprovalStepApproversList(this, "approvers", false);
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: DataSdmApprovalWorkflowApprovalStepApprovers[] | cdktf.IResolvable) {
    this._approvers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }
}

export class DataSdmApprovalWorkflowApprovalStepList extends cdktf.ComplexList {
  public internalValue? : DataSdmApprovalWorkflowApprovalStep[] | cdktf.IResolvable

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
  public get(index: number): DataSdmApprovalWorkflowApprovalStepOutputReference {
    return new DataSdmApprovalWorkflowApprovalStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmApprovalWorkflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#default DataSdmApprovalWorkflow#default}
  */
  readonly default?: string;
}

export function dataSdmApprovalWorkflowTimeoutsToTerraform(struct?: DataSdmApprovalWorkflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataSdmApprovalWorkflowTimeoutsToHclTerraform(struct?: DataSdmApprovalWorkflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmApprovalWorkflowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSdmApprovalWorkflowTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmApprovalWorkflowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow sdm_approval_workflow}
*/
export class DataSdmApprovalWorkflow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_approval_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdmApprovalWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdmApprovalWorkflow to import
  * @param importFromId The id of the existing DataSdmApprovalWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdmApprovalWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_approval_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/data-sources/approval_workflow sdm_approval_workflow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdmApprovalWorkflowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdmApprovalWorkflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_approval_workflow',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.35.0',
        providerVersionConstraint: '15.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalMode = config.approvalMode;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._approvalStep.internalValue = config.approvalStep;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_mode - computed: false, optional: true, required: false
  private _approvalMode?: string; 
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }
  public set approvalMode(value: string) {
    this._approvalMode = value;
  }
  public resetApprovalMode() {
    this._approvalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModeInput() {
    return this._approvalMode;
  }

  // approval_workflows - computed: true, optional: false, required: false
  private _approvalWorkflows = new DataSdmApprovalWorkflowApprovalWorkflowsList(this, "approval_workflows", false);
  public get approvalWorkflows() {
    return this._approvalWorkflows;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // approval_step - computed: false, optional: true, required: false
  private _approvalStep = new DataSdmApprovalWorkflowApprovalStepList(this, "approval_step", false);
  public get approvalStep() {
    return this._approvalStep;
  }
  public putApprovalStep(value: DataSdmApprovalWorkflowApprovalStep[] | cdktf.IResolvable) {
    this._approvalStep.internalValue = value;
  }
  public resetApprovalStep() {
    this._approvalStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalStepInput() {
    return this._approvalStep.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSdmApprovalWorkflowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSdmApprovalWorkflowTimeouts) {
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
      approval_mode: cdktf.stringToTerraform(this._approvalMode),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      approval_step: cdktf.listMapper(dataSdmApprovalWorkflowApprovalStepToTerraform, true)(this._approvalStep.internalValue),
      timeouts: dataSdmApprovalWorkflowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_mode: {
        value: cdktf.stringToHclTerraform(this._approvalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_step: {
        value: cdktf.listMapperHcl(dataSdmApprovalWorkflowApprovalStepToHclTerraform, true)(this._approvalStep.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSdmApprovalWorkflowApprovalStepList",
      },
      timeouts: {
        value: dataSdmApprovalWorkflowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSdmApprovalWorkflowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
