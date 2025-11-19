// https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#condition_groups Workflow#condition_groups}
  */
  readonly conditionGroups: WorkflowConditionGroups[] | cdktf.IResolvable;
  /**
  * Whether to continue executing the workflow if a step fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#continue_on_step_error Workflow#continue_on_step_error}
  */
  readonly continueOnStepError: boolean | cdktf.IResolvable;
  /**
  * Configuration controlling workflow delay behaviour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#delay Workflow#delay}
  */
  readonly delay?: WorkflowDelay;
  /**
  * The expressions to be prepared for use by steps and conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#expressions Workflow#expressions}
  */
  readonly expressions: WorkflowExpressions[] | cdktf.IResolvable;
  /**
  * Folder to display the workflow in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#folder Workflow#folder}
  */
  readonly folder?: string;
  /**
  * Whether to include private incidents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#include_private_incidents Workflow#include_private_incidents}
  */
  readonly includePrivateIncidents: boolean | cdktf.IResolvable;
  /**
  * Name provided by the user when creating the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#name Workflow#name}
  */
  readonly name: string;
  /**
  * This workflow will run 'once for' a list of references
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#once_for Workflow#once_for}
  */
  readonly onceFor: string[];
  /**
  * Which incident modes should this workflow run on? By default, workflows only run on standard incidents, but can also be configured to run on test and retrospective incidents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#runs_on_incident_modes Workflow#runs_on_incident_modes}
  */
  readonly runsOnIncidentModes: string[];
  /**
  * Which incidents should the workflow be applied to?. Possible values are: `newly_created`, `newly_created_and_active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#runs_on_incidents Workflow#runs_on_incidents}
  */
  readonly runsOnIncidents: string;
  /**
  * The shortform used to trigger this workflow (only applicable for manual triggers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#shortform Workflow#shortform}
  */
  readonly shortform?: string;
  /**
  * What state this workflow is in. Possible values are: `active`, `disabled`, `draft`, `error`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#state Workflow#state}
  */
  readonly state: string;
  /**
  * Steps that are executed as part of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#steps Workflow#steps}
  */
  readonly steps: WorkflowSteps[] | cdktf.IResolvable;
  /**
  * Unique name of the trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#trigger Workflow#trigger}
  */
  readonly trigger: string;
}
export interface WorkflowConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: WorkflowConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: WorkflowConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}

export class WorkflowConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : WorkflowConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): WorkflowConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new WorkflowConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowConditionGroupsConditionsParamBindingsValueToTerraform(struct?: WorkflowConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: WorkflowConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}
export interface WorkflowConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array_value Workflow#array_value}
  */
  readonly arrayValue?: WorkflowConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#value Workflow#value}
  */
  readonly value?: WorkflowConditionGroupsConditionsParamBindingsValue;
}

export function workflowConditionGroupsConditionsParamBindingsToTerraform(struct?: WorkflowConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(workflowConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: workflowConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function workflowConditionGroupsConditionsParamBindingsToHclTerraform(struct?: WorkflowConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(workflowConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: workflowConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new WorkflowConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: WorkflowConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WorkflowConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WorkflowConditionGroupsConditionsParamBindingsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class WorkflowConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : WorkflowConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): WorkflowConditionGroupsConditionsParamBindingsOutputReference {
    return new WorkflowConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#operation Workflow#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#param_bindings Workflow#param_bindings}
  */
  readonly paramBindings: WorkflowConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#subject Workflow#subject}
  */
  readonly subject: string;
}

export function workflowConditionGroupsConditionsToTerraform(struct?: WorkflowConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(workflowConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function workflowConditionGroupsConditionsToHclTerraform(struct?: WorkflowConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(workflowConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new WorkflowConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: WorkflowConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class WorkflowConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : WorkflowConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): WorkflowConditionGroupsConditionsOutputReference {
    return new WorkflowConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#conditions Workflow#conditions}
  */
  readonly conditions: WorkflowConditionGroupsConditions[] | cdktf.IResolvable;
}

export function workflowConditionGroupsToTerraform(struct?: WorkflowConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(workflowConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function workflowConditionGroupsToHclTerraform(struct?: WorkflowConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(workflowConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new WorkflowConditionGroupsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WorkflowConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WorkflowConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : WorkflowConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): WorkflowConditionGroupsOutputReference {
    return new WorkflowConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowDelay {
  /**
  * If this workflow is delayed, whether the conditions should be rechecked between trigger firing and execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#conditions_apply_over_delay Workflow#conditions_apply_over_delay}
  */
  readonly conditionsApplyOverDelay: boolean | cdktf.IResolvable;
  /**
  * Delay in seconds between trigger firing and running the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#for_seconds Workflow#for_seconds}
  */
  readonly forSeconds: number;
}

export function workflowDelayToTerraform(struct?: WorkflowDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions_apply_over_delay: cdktf.booleanToTerraform(struct!.conditionsApplyOverDelay),
    for_seconds: cdktf.numberToTerraform(struct!.forSeconds),
  }
}


export function workflowDelayToHclTerraform(struct?: WorkflowDelay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions_apply_over_delay: {
      value: cdktf.booleanToHclTerraform(struct!.conditionsApplyOverDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    for_seconds: {
      value: cdktf.numberToHclTerraform(struct!.forSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowDelay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionsApplyOverDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionsApplyOverDelay = this._conditionsApplyOverDelay;
    }
    if (this._forSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.forSeconds = this._forSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowDelay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionsApplyOverDelay = undefined;
      this._forSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionsApplyOverDelay = value.conditionsApplyOverDelay;
      this._forSeconds = value.forSeconds;
    }
  }

  // conditions_apply_over_delay - computed: false, optional: false, required: true
  private _conditionsApplyOverDelay?: boolean | cdktf.IResolvable; 
  public get conditionsApplyOverDelay() {
    return this.getBooleanAttribute('conditions_apply_over_delay');
  }
  public set conditionsApplyOverDelay(value: boolean | cdktf.IResolvable) {
    this._conditionsApplyOverDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsApplyOverDelayInput() {
    return this._conditionsApplyOverDelay;
  }

  // for_seconds - computed: false, optional: false, required: true
  private _forSeconds?: number; 
  public get forSeconds() {
    return this.getNumberAttribute('for_seconds');
  }
  public set forSeconds(value: number) {
    this._forSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forSecondsInput() {
    return this._forSeconds;
  }
}
export interface WorkflowExpressionsElseBranchResultArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsElseBranchResultArrayValueToTerraform(struct?: WorkflowExpressionsElseBranchResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsElseBranchResultArrayValueToHclTerraform(struct?: WorkflowExpressionsElseBranchResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsElseBranchResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsElseBranchResultArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsElseBranchResultArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}

export class WorkflowExpressionsElseBranchResultArrayValueList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsElseBranchResultArrayValueOutputReference {
    return new WorkflowExpressionsElseBranchResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsElseBranchResultValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsElseBranchResultValueToTerraform(struct?: WorkflowExpressionsElseBranchResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsElseBranchResultValueToHclTerraform(struct?: WorkflowExpressionsElseBranchResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsElseBranchResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsElseBranchResultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsElseBranchResultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}
export interface WorkflowExpressionsElseBranchResult {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array_value Workflow#array_value}
  */
  readonly arrayValue?: WorkflowExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#value Workflow#value}
  */
  readonly value?: WorkflowExpressionsElseBranchResultValue;
}

export function workflowExpressionsElseBranchResultToTerraform(struct?: WorkflowExpressionsElseBranchResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(workflowExpressionsElseBranchResultArrayValueToTerraform, false)(struct!.arrayValue),
    value: workflowExpressionsElseBranchResultValueToTerraform(struct!.value),
  }
}


export function workflowExpressionsElseBranchResultToHclTerraform(struct?: WorkflowExpressionsElseBranchResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(workflowExpressionsElseBranchResultArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsElseBranchResultArrayValueList",
    },
    value: {
      value: workflowExpressionsElseBranchResultValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsElseBranchResultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsElseBranchResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsElseBranchResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsElseBranchResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new WorkflowExpressionsElseBranchResultArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: WorkflowExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WorkflowExpressionsElseBranchResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WorkflowExpressionsElseBranchResultValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface WorkflowExpressionsElseBranch {
  /**
  * The result assumed if the else branch is reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#result Workflow#result}
  */
  readonly result: WorkflowExpressionsElseBranchResult;
}

export function workflowExpressionsElseBranchToTerraform(struct?: WorkflowExpressionsElseBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    result: workflowExpressionsElseBranchResultToTerraform(struct!.result),
  }
}


export function workflowExpressionsElseBranchToHclTerraform(struct?: WorkflowExpressionsElseBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    result: {
      value: workflowExpressionsElseBranchResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsElseBranchResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsElseBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsElseBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsElseBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result.internalValue = value.result;
    }
  }

  // result - computed: false, optional: false, required: true
  private _result = new WorkflowExpressionsElseBranchResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: WorkflowExpressionsElseBranchResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}
export interface WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}
export interface WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array_value Workflow#array_value}
  */
  readonly arrayValue?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#value Workflow#value}
  */
  readonly value?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue;
}

export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference {
    return new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#operation Workflow#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#param_bindings Workflow#param_bindings}
  */
  readonly paramBindings: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#subject Workflow#subject}
  */
  readonly subject: string;
}

export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference {
    return new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsBranchesBranchesConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#conditions Workflow#conditions}
  */
  readonly conditions: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable;
}

export function workflowExpressionsOperationsBranchesBranchesConditionGroupsToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function workflowExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WorkflowExpressionsOperationsBranchesBranchesConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsBranchesBranchesConditionGroupsOutputReference {
    return new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsBranchesBranchesResultArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsOperationsBranchesBranchesResultArrayValueToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}

export class WorkflowExpressionsOperationsBranchesBranchesResultArrayValueList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsBranchesBranchesResultArrayValueOutputReference {
    return new WorkflowExpressionsOperationsBranchesBranchesResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsBranchesBranchesResultValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsOperationsBranchesBranchesResultValueToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}
export interface WorkflowExpressionsOperationsBranchesBranchesResult {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array_value Workflow#array_value}
  */
  readonly arrayValue?: WorkflowExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#value Workflow#value}
  */
  readonly value?: WorkflowExpressionsOperationsBranchesBranchesResultValue;
}

export function workflowExpressionsOperationsBranchesBranchesResultToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(workflowExpressionsOperationsBranchesBranchesResultArrayValueToTerraform, false)(struct!.arrayValue),
    value: workflowExpressionsOperationsBranchesBranchesResultValueToTerraform(struct!.value),
  }
}


export function workflowExpressionsOperationsBranchesBranchesResultToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesResultArrayValueList",
    },
    value: {
      value: workflowExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesResultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new WorkflowExpressionsOperationsBranchesBranchesResultArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: WorkflowExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WorkflowExpressionsOperationsBranchesBranchesResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WorkflowExpressionsOperationsBranchesBranchesResultValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface WorkflowExpressionsOperationsBranchesBranches {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#condition_groups Workflow#condition_groups}
  */
  readonly conditionGroups: WorkflowExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable;
  /**
  * The result assumed if the condition groups are satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#result Workflow#result}
  */
  readonly result: WorkflowExpressionsOperationsBranchesBranchesResult;
}

export function workflowExpressionsOperationsBranchesBranchesToTerraform(struct?: WorkflowExpressionsOperationsBranchesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(workflowExpressionsOperationsBranchesBranchesConditionGroupsToTerraform, false)(struct!.conditionGroups),
    result: workflowExpressionsOperationsBranchesBranchesResultToTerraform(struct!.result),
  }
}


export function workflowExpressionsOperationsBranchesBranchesToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesConditionGroupsList",
    },
    result: {
      value: workflowExpressionsOperationsBranchesBranchesResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsBranchesBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
      this._result.internalValue = value.result;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new WorkflowExpressionsOperationsBranchesBranchesConditionGroupsList(this, "condition_groups", true);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: WorkflowExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // result - computed: false, optional: false, required: true
  private _result = new WorkflowExpressionsOperationsBranchesBranchesResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: WorkflowExpressionsOperationsBranchesBranchesResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}

export class WorkflowExpressionsOperationsBranchesBranchesList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsBranchesBranches[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsBranchesBranchesOutputReference {
    return new WorkflowExpressionsOperationsBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsBranchesReturns {
  /**
  * Whether the return value should be single or multi-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array Workflow#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Expected return type of this expression (what to try casting the result to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#type Workflow#type}
  */
  readonly type: string;
}

export function workflowExpressionsOperationsBranchesReturnsToTerraform(struct?: WorkflowExpressionsOperationsBranchesReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workflowExpressionsOperationsBranchesReturnsToHclTerraform(struct?: WorkflowExpressionsOperationsBranchesReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsBranchesReturns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranchesReturns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkflowExpressionsOperationsBranches {
  /**
  * The branches to apply for this operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#branches Workflow#branches}
  */
  readonly branches: WorkflowExpressionsOperationsBranchesBranches[] | cdktf.IResolvable;
  /**
  * The return type of an operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#returns Workflow#returns}
  */
  readonly returns: WorkflowExpressionsOperationsBranchesReturns;
}

export function workflowExpressionsOperationsBranchesToTerraform(struct?: WorkflowExpressionsOperationsBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: cdktf.listMapper(workflowExpressionsOperationsBranchesBranchesToTerraform, false)(struct!.branches),
    returns: workflowExpressionsOperationsBranchesReturnsToTerraform(struct!.returns),
  }
}


export function workflowExpressionsOperationsBranchesToHclTerraform(struct?: WorkflowExpressionsOperationsBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsBranchesBranchesToHclTerraform, false)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowExpressionsOperationsBranchesBranchesList",
    },
    returns: {
      value: workflowExpressionsOperationsBranchesReturnsToHclTerraform(struct!.returns),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsBranchesReturns",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsBranchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._returns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._returns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._returns.internalValue = value.returns;
    }
  }

  // branches - computed: false, optional: false, required: true
  private _branches = new WorkflowExpressionsOperationsBranchesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: WorkflowExpressionsOperationsBranchesBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // returns - computed: false, optional: false, required: true
  private _returns = new WorkflowExpressionsOperationsBranchesReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
  public putReturns(value: WorkflowExpressionsOperationsBranchesReturns) {
    this._returns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns.internalValue;
  }
}
export interface WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}
export interface WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array_value Workflow#array_value}
  */
  readonly arrayValue?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#value Workflow#value}
  */
  readonly value?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue;
}

export function workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference {
    return new WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsFilterConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#operation Workflow#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#param_bindings Workflow#param_bindings}
  */
  readonly paramBindings: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#subject Workflow#subject}
  */
  readonly subject: string;
}

export function workflowExpressionsOperationsFilterConditionGroupsConditionsToTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function workflowExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: WorkflowExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class WorkflowExpressionsOperationsFilterConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsFilterConditionGroupsConditionsOutputReference {
    return new WorkflowExpressionsOperationsFilterConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsFilterConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#conditions Workflow#conditions}
  */
  readonly conditions: WorkflowExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable;
}

export function workflowExpressionsOperationsFilterConditionGroupsToTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(workflowExpressionsOperationsFilterConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function workflowExpressionsOperationsFilterConditionGroupsToHclTerraform(struct?: WorkflowExpressionsOperationsFilterConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsFilterConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsFilterConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperationsFilterConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsFilterConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new WorkflowExpressionsOperationsFilterConditionGroupsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WorkflowExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WorkflowExpressionsOperationsFilterConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsFilterConditionGroupsOutputReference {
    return new WorkflowExpressionsOperationsFilterConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressionsOperationsFilter {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#condition_groups Workflow#condition_groups}
  */
  readonly conditionGroups: WorkflowExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable;
}

export function workflowExpressionsOperationsFilterToTerraform(struct?: WorkflowExpressionsOperationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(workflowExpressionsOperationsFilterConditionGroupsToTerraform, false)(struct!.conditionGroups),
  }
}


export function workflowExpressionsOperationsFilterToHclTerraform(struct?: WorkflowExpressionsOperationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsFilterConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowExpressionsOperationsFilterConditionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new WorkflowExpressionsOperationsFilterConditionGroupsList(this, "condition_groups", true);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: WorkflowExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }
}
export interface WorkflowExpressionsOperationsNavigate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference: string;
}

export function workflowExpressionsOperationsNavigateToTerraform(struct?: WorkflowExpressionsOperationsNavigate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowExpressionsOperationsNavigateToHclTerraform(struct?: WorkflowExpressionsOperationsNavigate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsNavigateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsNavigate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsNavigate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference = value.reference;
    }
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface WorkflowExpressionsOperationsParseReturns {
  /**
  * Whether the return value should be single or multi-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array Workflow#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Expected return type of this expression (what to try casting the result to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#type Workflow#type}
  */
  readonly type: string;
}

export function workflowExpressionsOperationsParseReturnsToTerraform(struct?: WorkflowExpressionsOperationsParseReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workflowExpressionsOperationsParseReturnsToHclTerraform(struct?: WorkflowExpressionsOperationsParseReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsParseReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsParseReturns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsParseReturns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkflowExpressionsOperationsParse {
  /**
  * The return type of an operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#returns Workflow#returns}
  */
  readonly returns: WorkflowExpressionsOperationsParseReturns;
  /**
  * The ES5 Javascript expression to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#source Workflow#source}
  */
  readonly source: string;
}

export function workflowExpressionsOperationsParseToTerraform(struct?: WorkflowExpressionsOperationsParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    returns: workflowExpressionsOperationsParseReturnsToTerraform(struct!.returns),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function workflowExpressionsOperationsParseToHclTerraform(struct?: WorkflowExpressionsOperationsParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    returns: {
      value: workflowExpressionsOperationsParseReturnsToHclTerraform(struct!.returns),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsParseReturns",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowExpressionsOperationsParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperationsParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._returns.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._returns.internalValue = value.returns;
      this._source = value.source;
    }
  }

  // returns - computed: false, optional: false, required: true
  private _returns = new WorkflowExpressionsOperationsParseReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
  public putReturns(value: WorkflowExpressionsOperationsParseReturns) {
    this._returns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface WorkflowExpressionsOperations {
  /**
  * An operation type that allows for a value to be set conditionally by a series of logical branches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#branches Workflow#branches}
  */
  readonly branches?: WorkflowExpressionsOperationsBranches;
  /**
  * An operation type that allows values to be filtered out by conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#filter Workflow#filter}
  */
  readonly filter?: WorkflowExpressionsOperationsFilter;
  /**
  * An operation type that allows attributes of a type to be accessed by reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#navigate Workflow#navigate}
  */
  readonly navigate?: WorkflowExpressionsOperationsNavigate;
  /**
  * Indicates which operation type to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#operation_type Workflow#operation_type}
  */
  readonly operationType: string;
  /**
  * An operation type that allows a value to parsed from within a JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#parse Workflow#parse}
  */
  readonly parse?: WorkflowExpressionsOperationsParse;
}

export function workflowExpressionsOperationsToTerraform(struct?: WorkflowExpressionsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: workflowExpressionsOperationsBranchesToTerraform(struct!.branches),
    filter: workflowExpressionsOperationsFilterToTerraform(struct!.filter),
    navigate: workflowExpressionsOperationsNavigateToTerraform(struct!.navigate),
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    parse: workflowExpressionsOperationsParseToTerraform(struct!.parse),
  }
}


export function workflowExpressionsOperationsToHclTerraform(struct?: WorkflowExpressionsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: workflowExpressionsOperationsBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsBranches",
    },
    filter: {
      value: workflowExpressionsOperationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsFilter",
    },
    navigate: {
      value: workflowExpressionsOperationsNavigateToHclTerraform(struct!.navigate),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsNavigate",
    },
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse: {
      value: workflowExpressionsOperationsParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsOperationsParse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressionsOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._navigate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.navigate = this._navigate?.internalValue;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressionsOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._navigate.internalValue = undefined;
      this._operationType = undefined;
      this._parse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._filter.internalValue = value.filter;
      this._navigate.internalValue = value.navigate;
      this._operationType = value.operationType;
      this._parse.internalValue = value.parse;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new WorkflowExpressionsOperationsBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: WorkflowExpressionsOperationsBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new WorkflowExpressionsOperationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: WorkflowExpressionsOperationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // navigate - computed: false, optional: true, required: false
  private _navigate = new WorkflowExpressionsOperationsNavigateOutputReference(this, "navigate");
  public get navigate() {
    return this._navigate;
  }
  public putNavigate(value: WorkflowExpressionsOperationsNavigate) {
    this._navigate.internalValue = value;
  }
  public resetNavigate() {
    this._navigate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navigateInput() {
    return this._navigate.internalValue;
  }

  // operation_type - computed: false, optional: false, required: true
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // parse - computed: false, optional: true, required: false
  private _parse = new WorkflowExpressionsOperationsParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: WorkflowExpressionsOperationsParse) {
    this._parse.internalValue = value;
  }
  public resetParse() {
    this._parse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
  }
}

export class WorkflowExpressionsOperationsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressionsOperations[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOperationsOutputReference {
    return new WorkflowExpressionsOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowExpressions {
  /**
  * The else branch to resort to if all operations fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#else_branch Workflow#else_branch}
  */
  readonly elseBranch?: WorkflowExpressionsElseBranch;
  /**
  * The human readable label of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#label Workflow#label}
  */
  readonly label: string;
  /**
  * The operations to execute in sequence for this expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#operations Workflow#operations}
  */
  readonly operations: WorkflowExpressionsOperations[] | cdktf.IResolvable;
  /**
  * A short ID that can be used to reference the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference: string;
  /**
  * The root reference for this expression (i.e. where the expression starts)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#root_reference Workflow#root_reference}
  */
  readonly rootReference: string;
}

export function workflowExpressionsToTerraform(struct?: WorkflowExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    else_branch: workflowExpressionsElseBranchToTerraform(struct!.elseBranch),
    label: cdktf.stringToTerraform(struct!.label),
    operations: cdktf.listMapper(workflowExpressionsOperationsToTerraform, false)(struct!.operations),
    reference: cdktf.stringToTerraform(struct!.reference),
    root_reference: cdktf.stringToTerraform(struct!.rootReference),
  }
}


export function workflowExpressionsToHclTerraform(struct?: WorkflowExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    else_branch: {
      value: workflowExpressionsElseBranchToHclTerraform(struct!.elseBranch),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowExpressionsElseBranch",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(workflowExpressionsOperationsToHclTerraform, false)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowExpressionsOperationsList",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_reference: {
      value: cdktf.stringToHclTerraform(struct!.rootReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elseBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elseBranch = this._elseBranch?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._rootReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootReference = this._rootReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elseBranch.internalValue = undefined;
      this._label = undefined;
      this._operations.internalValue = undefined;
      this._reference = undefined;
      this._rootReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elseBranch.internalValue = value.elseBranch;
      this._label = value.label;
      this._operations.internalValue = value.operations;
      this._reference = value.reference;
      this._rootReference = value.rootReference;
    }
  }

  // else_branch - computed: false, optional: true, required: false
  private _elseBranch = new WorkflowExpressionsElseBranchOutputReference(this, "else_branch");
  public get elseBranch() {
    return this._elseBranch;
  }
  public putElseBranch(value: WorkflowExpressionsElseBranch) {
    this._elseBranch.internalValue = value;
  }
  public resetElseBranch() {
    this._elseBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseBranchInput() {
    return this._elseBranch.internalValue;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new WorkflowExpressionsOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: WorkflowExpressionsOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // root_reference - computed: false, optional: false, required: true
  private _rootReference?: string; 
  public get rootReference() {
    return this.getStringAttribute('root_reference');
  }
  public set rootReference(value: string) {
    this._rootReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootReferenceInput() {
    return this._rootReference;
  }
}

export class WorkflowExpressionsList extends cdktf.ComplexList {
  public internalValue? : WorkflowExpressions[] | cdktf.IResolvable

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
  public get(index: number): WorkflowExpressionsOutputReference {
    return new WorkflowExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowStepsParamBindingsArrayValueToTerraform(struct?: WorkflowStepsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowStepsParamBindingsArrayValueToHclTerraform(struct?: WorkflowStepsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowStepsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowStepsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}

export class WorkflowStepsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : WorkflowStepsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): WorkflowStepsParamBindingsArrayValueOutputReference {
    return new WorkflowStepsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowStepsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#literal Workflow#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#reference Workflow#reference}
  */
  readonly reference?: string;
}

export function workflowStepsParamBindingsValueToTerraform(struct?: WorkflowStepsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function workflowStepsParamBindingsValueToHclTerraform(struct?: WorkflowStepsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowStepsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowStepsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
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
}
export interface WorkflowStepsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#array_value Workflow#array_value}
  */
  readonly arrayValue?: WorkflowStepsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#value Workflow#value}
  */
  readonly value?: WorkflowStepsParamBindingsValue;
}

export function workflowStepsParamBindingsToTerraform(struct?: WorkflowStepsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(workflowStepsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: workflowStepsParamBindingsValueToTerraform(struct!.value),
  }
}


export function workflowStepsParamBindingsToHclTerraform(struct?: WorkflowStepsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(workflowStepsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "set",
      storageClassType: "WorkflowStepsParamBindingsArrayValueList",
    },
    value: {
      value: workflowStepsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkflowStepsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowStepsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowStepsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowStepsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new WorkflowStepsParamBindingsArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: WorkflowStepsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new WorkflowStepsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: WorkflowStepsParamBindingsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class WorkflowStepsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : WorkflowStepsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): WorkflowStepsParamBindingsOutputReference {
    return new WorkflowStepsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#for_each Workflow#for_each}
  */
  readonly forEach?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#id Workflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#name Workflow#name}
  */
  readonly name: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#param_bindings Workflow#param_bindings}
  */
  readonly paramBindings: WorkflowStepsParamBindings[] | cdktf.IResolvable;
}

export function workflowStepsToTerraform(struct?: WorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_each: cdktf.stringToTerraform(struct!.forEach),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    param_bindings: cdktf.listMapper(workflowStepsParamBindingsToTerraform, false)(struct!.paramBindings),
  }
}


export function workflowStepsToHclTerraform(struct?: WorkflowSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_each: {
      value: cdktf.stringToHclTerraform(struct!.forEach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(workflowStepsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowStepsParamBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forEach !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEach = this._forEach;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forEach = undefined;
      this._id = undefined;
      this._name = undefined;
      this._paramBindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forEach = value.forEach;
      this._id = value.id;
      this._name = value.name;
      this._paramBindings.internalValue = value.paramBindings;
    }
  }

  // for_each - computed: false, optional: true, required: false
  private _forEach?: string; 
  public get forEach() {
    return this.getStringAttribute('for_each');
  }
  public set forEach(value: string) {
    this._forEach = value;
  }
  public resetForEach() {
    this._forEach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachInput() {
    return this._forEach;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new WorkflowStepsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: WorkflowStepsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }
}

export class WorkflowStepsList extends cdktf.ComplexList {
  public internalValue? : WorkflowSteps[] | cdktf.IResolvable

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
  public get(index: number): WorkflowStepsOutputReference {
    return new WorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow incident_workflow}
*/
export class Workflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workflow to import
  * @param importFromId The id of the existing Workflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/resources/workflow incident_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_workflow',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.19.0',
        providerVersionConstraint: '5.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionGroups.internalValue = config.conditionGroups;
    this._continueOnStepError = config.continueOnStepError;
    this._delay.internalValue = config.delay;
    this._expressions.internalValue = config.expressions;
    this._folder = config.folder;
    this._includePrivateIncidents = config.includePrivateIncidents;
    this._name = config.name;
    this._onceFor = config.onceFor;
    this._runsOnIncidentModes = config.runsOnIncidentModes;
    this._runsOnIncidents = config.runsOnIncidents;
    this._shortform = config.shortform;
    this._state = config.state;
    this._steps.internalValue = config.steps;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new WorkflowConditionGroupsList(this, "condition_groups", true);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: WorkflowConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // continue_on_step_error - computed: false, optional: false, required: true
  private _continueOnStepError?: boolean | cdktf.IResolvable; 
  public get continueOnStepError() {
    return this.getBooleanAttribute('continue_on_step_error');
  }
  public set continueOnStepError(value: boolean | cdktf.IResolvable) {
    this._continueOnStepError = value;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnStepErrorInput() {
    return this._continueOnStepError;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new WorkflowDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: WorkflowDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new WorkflowExpressionsList(this, "expressions", true);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: WorkflowExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_private_incidents - computed: false, optional: false, required: true
  private _includePrivateIncidents?: boolean | cdktf.IResolvable; 
  public get includePrivateIncidents() {
    return this.getBooleanAttribute('include_private_incidents');
  }
  public set includePrivateIncidents(value: boolean | cdktf.IResolvable) {
    this._includePrivateIncidents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrivateIncidentsInput() {
    return this._includePrivateIncidents;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // once_for - computed: false, optional: false, required: true
  private _onceFor?: string[]; 
  public get onceFor() {
    return this.getListAttribute('once_for');
  }
  public set onceFor(value: string[]) {
    this._onceFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onceForInput() {
    return this._onceFor;
  }

  // runs_on_incident_modes - computed: false, optional: false, required: true
  private _runsOnIncidentModes?: string[]; 
  public get runsOnIncidentModes() {
    return cdktf.Fn.tolist(this.getListAttribute('runs_on_incident_modes'));
  }
  public set runsOnIncidentModes(value: string[]) {
    this._runsOnIncidentModes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runsOnIncidentModesInput() {
    return this._runsOnIncidentModes;
  }

  // runs_on_incidents - computed: false, optional: false, required: true
  private _runsOnIncidents?: string; 
  public get runsOnIncidents() {
    return this.getStringAttribute('runs_on_incidents');
  }
  public set runsOnIncidents(value: string) {
    this._runsOnIncidents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runsOnIncidentsInput() {
    return this._runsOnIncidents;
  }

  // shortform - computed: false, optional: true, required: false
  private _shortform?: string; 
  public get shortform() {
    return this.getStringAttribute('shortform');
  }
  public set shortform(value: string) {
    this._shortform = value;
  }
  public resetShortform() {
    this._shortform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortformInput() {
    return this._shortform;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new WorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: WorkflowSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_groups: cdktf.listMapper(workflowConditionGroupsToTerraform, false)(this._conditionGroups.internalValue),
      continue_on_step_error: cdktf.booleanToTerraform(this._continueOnStepError),
      delay: workflowDelayToTerraform(this._delay.internalValue),
      expressions: cdktf.listMapper(workflowExpressionsToTerraform, false)(this._expressions.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      include_private_incidents: cdktf.booleanToTerraform(this._includePrivateIncidents),
      name: cdktf.stringToTerraform(this._name),
      once_for: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onceFor),
      runs_on_incident_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runsOnIncidentModes),
      runs_on_incidents: cdktf.stringToTerraform(this._runsOnIncidents),
      shortform: cdktf.stringToTerraform(this._shortform),
      state: cdktf.stringToTerraform(this._state),
      steps: cdktf.listMapper(workflowStepsToTerraform, false)(this._steps.internalValue),
      trigger: cdktf.stringToTerraform(this._trigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_groups: {
        value: cdktf.listMapperHcl(workflowConditionGroupsToHclTerraform, false)(this._conditionGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkflowConditionGroupsList",
      },
      continue_on_step_error: {
        value: cdktf.booleanToHclTerraform(this._continueOnStepError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay: {
        value: workflowDelayToHclTerraform(this._delay.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkflowDelay",
      },
      expressions: {
        value: cdktf.listMapperHcl(workflowExpressionsToHclTerraform, false)(this._expressions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkflowExpressionsList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_private_incidents: {
        value: cdktf.booleanToHclTerraform(this._includePrivateIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      once_for: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onceFor),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      runs_on_incident_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runsOnIncidentModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      runs_on_incidents: {
        value: cdktf.stringToHclTerraform(this._runsOnIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shortform: {
        value: cdktf.stringToHclTerraform(this._shortform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktf.listMapperHcl(workflowStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowStepsList",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
