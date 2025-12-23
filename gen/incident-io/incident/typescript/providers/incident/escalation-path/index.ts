// https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this escalation path, for the user's reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#name EscalationPath#name}
  */
  readonly name: string;
  /**
  * The nodes that form the levels and branches of this escalation path.
  * 
  * -->**Note** Although the `if_else` block is recursive, currently a maximum of 3 levels are supported. Attempting to configure more than 3 levels of nesting will result in a schema error.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#path EscalationPath#path}
  */
  readonly path: EscalationPathPath[] | cdktf.IResolvable;
  /**
  * IDs of the teams that own this escalation path. This will automatically sync escalation paths with the right teams in Catalog. If you have an escalation paths attribute on your Teams, this attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#team_ids EscalationPath#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * The working hours for this escalation path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#working_hours EscalationPath#working_hours}
  */
  readonly workingHours?: EscalationPathWorkingHours[] | cdktf.IResolvable;
}
export interface EscalationPathPathIfElseConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#literal EscalationPath#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#reference EscalationPath#reference}
  */
  readonly reference?: string;
}

export function escalationPathPathIfElseConditionsParamBindingsArrayValueToTerraform(struct?: EscalationPathPathIfElseConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function escalationPathPathIfElseConditionsParamBindingsArrayValueToHclTerraform(struct?: EscalationPathPathIfElseConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
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

export class EscalationPathPathIfElseConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationPathPathIfElseConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
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

export class EscalationPathPathIfElseConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseConditionsParamBindingsArrayValueOutputReference {
    return new EscalationPathPathIfElseConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#literal EscalationPath#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#reference EscalationPath#reference}
  */
  readonly reference?: string;
}

export function escalationPathPathIfElseConditionsParamBindingsValueToTerraform(struct?: EscalationPathPathIfElseConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function escalationPathPathIfElseConditionsParamBindingsValueToHclTerraform(struct?: EscalationPathPathIfElseConditionsParamBindingsValue | cdktf.IResolvable): any {
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

export class EscalationPathPathIfElseConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseConditionsParamBindingsValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationPathPathIfElseConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
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
export interface EscalationPathPathIfElseConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#array_value EscalationPath#array_value}
  */
  readonly arrayValue?: EscalationPathPathIfElseConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#value EscalationPath#value}
  */
  readonly value?: EscalationPathPathIfElseConditionsParamBindingsValue;
}

export function escalationPathPathIfElseConditionsParamBindingsToTerraform(struct?: EscalationPathPathIfElseConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(escalationPathPathIfElseConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: escalationPathPathIfElseConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function escalationPathPathIfElseConditionsParamBindingsToHclTerraform(struct?: EscalationPathPathIfElseConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseConditionsParamBindingsArrayValueList",
    },
    value: {
      value: escalationPathPathIfElseConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseConditionsParamBindings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationPathPathIfElseConditionsParamBindings | cdktf.IResolvable | undefined) {
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
  private _arrayValue = new EscalationPathPathIfElseConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: EscalationPathPathIfElseConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
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
  private _value = new EscalationPathPathIfElseConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: EscalationPathPathIfElseConditionsParamBindingsValue) {
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

export class EscalationPathPathIfElseConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseConditionsParamBindingsOutputReference {
    return new EscalationPathPathIfElseConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#operation EscalationPath#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#param_bindings EscalationPath#param_bindings}
  */
  readonly paramBindings: EscalationPathPathIfElseConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#subject EscalationPath#subject}
  */
  readonly subject: string;
}

export function escalationPathPathIfElseConditionsToTerraform(struct?: EscalationPathPathIfElseConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(escalationPathPathIfElseConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function escalationPathPathIfElseConditionsToHclTerraform(struct?: EscalationPathPathIfElseConditions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(escalationPathPathIfElseConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseConditionsParamBindingsList",
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

export class EscalationPathPathIfElseConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationPathPathIfElseConditions | cdktf.IResolvable | undefined) {
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
  private _paramBindings = new EscalationPathPathIfElseConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: EscalationPathPathIfElseConditionsParamBindings[] | cdktf.IResolvable) {
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

export class EscalationPathPathIfElseConditionsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseConditions[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseConditionsOutputReference {
    return new EscalationPathPathIfElseConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseElsePathLevelRoundRobinConfig {
  /**
  * Whether round robin is enabled for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#enabled EscalationPath#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How long should we wait before rotating to the next target in a round robin, if not set will stick with a single target per level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#rotate_after_seconds EscalationPath#rotate_after_seconds}
  */
  readonly rotateAfterSeconds?: number;
}

export function escalationPathPathIfElseElsePathLevelRoundRobinConfigToTerraform(struct?: EscalationPathPathIfElseElsePathLevelRoundRobinConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotate_after_seconds: cdktf.numberToTerraform(struct!.rotateAfterSeconds),
  }
}


export function escalationPathPathIfElseElsePathLevelRoundRobinConfigToHclTerraform(struct?: EscalationPathPathIfElseElsePathLevelRoundRobinConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotate_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.rotateAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseElsePathLevelRoundRobinConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseElsePathLevelRoundRobinConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotateAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateAfterSeconds = this._rotateAfterSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePathLevelRoundRobinConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rotateAfterSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rotateAfterSeconds = value.rotateAfterSeconds;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rotate_after_seconds - computed: false, optional: true, required: false
  private _rotateAfterSeconds?: number; 
  public get rotateAfterSeconds() {
    return this.getNumberAttribute('rotate_after_seconds');
  }
  public set rotateAfterSeconds(value: number) {
    this._rotateAfterSeconds = value;
  }
  public resetRotateAfterSeconds() {
    this._rotateAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateAfterSecondsInput() {
    return this._rotateAfterSeconds;
  }
}
export interface EscalationPathPathIfElseElsePathLevelTargets {
  /**
  * Uniquely identifies an entity of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#schedule_mode EscalationPath#schedule_mode}
  */
  readonly scheduleMode?: string;
  /**
  * Controls what type of entity this target identifies, such as EscalationPolicy or User. Possible values are: `schedule`, `user`, `slack_channel`, `msteams_channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
  /**
  * The urgency of this escalation path target. Possible values are: `high`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#urgency EscalationPath#urgency}
  */
  readonly urgency: string;
}

export function escalationPathPathIfElseElsePathLevelTargetsToTerraform(struct?: EscalationPathPathIfElseElsePathLevelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    schedule_mode: cdktf.stringToTerraform(struct!.scheduleMode),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function escalationPathPathIfElseElsePathLevelTargetsToHclTerraform(struct?: EscalationPathPathIfElseElsePathLevelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseElsePathLevelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseElsePathLevelTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMode = this._scheduleMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePathLevelTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scheduleMode = undefined;
      this._type = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scheduleMode = value.scheduleMode;
      this._type = value.type;
      this._urgency = value.urgency;
    }
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

  // schedule_mode - computed: true, optional: true, required: false
  private _scheduleMode?: string; 
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }
  public set scheduleMode(value: string) {
    this._scheduleMode = value;
  }
  public resetScheduleMode() {
    this._scheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleModeInput() {
    return this._scheduleMode;
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

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class EscalationPathPathIfElseElsePathLevelTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseElsePathLevelTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseElsePathLevelTargetsOutputReference {
    return new EscalationPathPathIfElseElsePathLevelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseElsePathLevel {
  /**
  * Controls the behaviour of acknowledgements for this level, with 'first' cancelling all other escalations on the same level when someone acks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#ack_mode EscalationPath#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#round_robin_config EscalationPath#round_robin_config}
  */
  readonly roundRobinConfig?: EscalationPathPathIfElseElsePathLevelRoundRobinConfig;
  /**
  * The targets (users or schedules) for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#targets EscalationPath#targets}
  */
  readonly targets: EscalationPathPathIfElseElsePathLevelTargets[] | cdktf.IResolvable;
  /**
  * If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_interval_condition EscalationPath#time_to_ack_interval_condition}
  */
  readonly timeToAckIntervalCondition?: string;
  /**
  * How long should we wait for this level to acknowledge before proceeding to the next node in the path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_seconds EscalationPath#time_to_ack_seconds}
  */
  readonly timeToAckSeconds?: number;
  /**
  * If the time to ack is relative to a time window, this identifies which window it is relative to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_weekday_interval_config_id EscalationPath#time_to_ack_weekday_interval_config_id}
  */
  readonly timeToAckWeekdayIntervalConfigId?: string;
}

export function escalationPathPathIfElseElsePathLevelToTerraform(struct?: EscalationPathPathIfElseElsePathLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_mode: cdktf.stringToTerraform(struct!.ackMode),
    round_robin_config: escalationPathPathIfElseElsePathLevelRoundRobinConfigToTerraform(struct!.roundRobinConfig),
    targets: cdktf.listMapper(escalationPathPathIfElseElsePathLevelTargetsToTerraform, false)(struct!.targets),
    time_to_ack_interval_condition: cdktf.stringToTerraform(struct!.timeToAckIntervalCondition),
    time_to_ack_seconds: cdktf.numberToTerraform(struct!.timeToAckSeconds),
    time_to_ack_weekday_interval_config_id: cdktf.stringToTerraform(struct!.timeToAckWeekdayIntervalConfigId),
  }
}


export function escalationPathPathIfElseElsePathLevelToHclTerraform(struct?: EscalationPathPathIfElseElsePathLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_mode: {
      value: cdktf.stringToHclTerraform(struct!.ackMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    round_robin_config: {
      value: escalationPathPathIfElseElsePathLevelRoundRobinConfigToHclTerraform(struct!.roundRobinConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseElsePathLevelRoundRobinConfig",
    },
    targets: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseElsePathLevelTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseElsePathLevelTargetsList",
    },
    time_to_ack_interval_condition: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckIntervalCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_ack_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToAckSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_ack_weekday_interval_config_id: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckWeekdayIntervalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseElsePathLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseElsePathLevel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackMode = this._ackMode;
    }
    if (this._roundRobinConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobinConfig = this._roundRobinConfig?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._timeToAckIntervalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckIntervalCondition = this._timeToAckIntervalCondition;
    }
    if (this._timeToAckSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckSeconds = this._timeToAckSeconds;
    }
    if (this._timeToAckWeekdayIntervalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckWeekdayIntervalConfigId = this._timeToAckWeekdayIntervalConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePathLevel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackMode = undefined;
      this._roundRobinConfig.internalValue = undefined;
      this._targets.internalValue = undefined;
      this._timeToAckIntervalCondition = undefined;
      this._timeToAckSeconds = undefined;
      this._timeToAckWeekdayIntervalConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackMode = value.ackMode;
      this._roundRobinConfig.internalValue = value.roundRobinConfig;
      this._targets.internalValue = value.targets;
      this._timeToAckIntervalCondition = value.timeToAckIntervalCondition;
      this._timeToAckSeconds = value.timeToAckSeconds;
      this._timeToAckWeekdayIntervalConfigId = value.timeToAckWeekdayIntervalConfigId;
    }
  }

  // ack_mode - computed: true, optional: true, required: false
  private _ackMode?: string; 
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }
  public set ackMode(value: string) {
    this._ackMode = value;
  }
  public resetAckMode() {
    this._ackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackModeInput() {
    return this._ackMode;
  }

  // round_robin_config - computed: false, optional: true, required: false
  private _roundRobinConfig = new EscalationPathPathIfElseElsePathLevelRoundRobinConfigOutputReference(this, "round_robin_config");
  public get roundRobinConfig() {
    return this._roundRobinConfig;
  }
  public putRoundRobinConfig(value: EscalationPathPathIfElseElsePathLevelRoundRobinConfig) {
    this._roundRobinConfig.internalValue = value;
  }
  public resetRoundRobinConfig() {
    this._roundRobinConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinConfigInput() {
    return this._roundRobinConfig.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPathPathIfElseElsePathLevelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPathPathIfElseElsePathLevelTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // time_to_ack_interval_condition - computed: false, optional: true, required: false
  private _timeToAckIntervalCondition?: string; 
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }
  public set timeToAckIntervalCondition(value: string) {
    this._timeToAckIntervalCondition = value;
  }
  public resetTimeToAckIntervalCondition() {
    this._timeToAckIntervalCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckIntervalConditionInput() {
    return this._timeToAckIntervalCondition;
  }

  // time_to_ack_seconds - computed: false, optional: true, required: false
  private _timeToAckSeconds?: number; 
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }
  public set timeToAckSeconds(value: number) {
    this._timeToAckSeconds = value;
  }
  public resetTimeToAckSeconds() {
    this._timeToAckSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckSecondsInput() {
    return this._timeToAckSeconds;
  }

  // time_to_ack_weekday_interval_config_id - computed: false, optional: true, required: false
  private _timeToAckWeekdayIntervalConfigId?: string; 
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
  public set timeToAckWeekdayIntervalConfigId(value: string) {
    this._timeToAckWeekdayIntervalConfigId = value;
  }
  public resetTimeToAckWeekdayIntervalConfigId() {
    this._timeToAckWeekdayIntervalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckWeekdayIntervalConfigIdInput() {
    return this._timeToAckWeekdayIntervalConfigId;
  }
}
export interface EscalationPathPathIfElseElsePathNotifyChannelTargets {
  /**
  * Uniquely identifies an entity of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#schedule_mode EscalationPath#schedule_mode}
  */
  readonly scheduleMode?: string;
  /**
  * Controls what type of entity this target identifies, such as EscalationPolicy or User. Possible values are: `schedule`, `user`, `slack_channel`, `msteams_channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
  /**
  * The urgency of this escalation path target. Possible values are: `high`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#urgency EscalationPath#urgency}
  */
  readonly urgency: string;
}

export function escalationPathPathIfElseElsePathNotifyChannelTargetsToTerraform(struct?: EscalationPathPathIfElseElsePathNotifyChannelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    schedule_mode: cdktf.stringToTerraform(struct!.scheduleMode),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function escalationPathPathIfElseElsePathNotifyChannelTargetsToHclTerraform(struct?: EscalationPathPathIfElseElsePathNotifyChannelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseElsePathNotifyChannelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseElsePathNotifyChannelTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMode = this._scheduleMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePathNotifyChannelTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scheduleMode = undefined;
      this._type = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scheduleMode = value.scheduleMode;
      this._type = value.type;
      this._urgency = value.urgency;
    }
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

  // schedule_mode - computed: true, optional: true, required: false
  private _scheduleMode?: string; 
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }
  public set scheduleMode(value: string) {
    this._scheduleMode = value;
  }
  public resetScheduleMode() {
    this._scheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleModeInput() {
    return this._scheduleMode;
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

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class EscalationPathPathIfElseElsePathNotifyChannelTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseElsePathNotifyChannelTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseElsePathNotifyChannelTargetsOutputReference {
    return new EscalationPathPathIfElseElsePathNotifyChannelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseElsePathNotifyChannel {
  /**
  * The targets (Slack channels) for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#targets EscalationPath#targets}
  */
  readonly targets: EscalationPathPathIfElseElsePathNotifyChannelTargets[] | cdktf.IResolvable;
  /**
  * If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_interval_condition EscalationPath#time_to_ack_interval_condition}
  */
  readonly timeToAckIntervalCondition?: string;
  /**
  * How long should we wait for this level to acknowledge before moving on to the next node in the path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_seconds EscalationPath#time_to_ack_seconds}
  */
  readonly timeToAckSeconds?: number;
  /**
  * If the time to ack is relative to a time window, this identifies which window it is relative to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_weekday_interval_config_id EscalationPath#time_to_ack_weekday_interval_config_id}
  */
  readonly timeToAckWeekdayIntervalConfigId?: string;
}

export function escalationPathPathIfElseElsePathNotifyChannelToTerraform(struct?: EscalationPathPathIfElseElsePathNotifyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(escalationPathPathIfElseElsePathNotifyChannelTargetsToTerraform, false)(struct!.targets),
    time_to_ack_interval_condition: cdktf.stringToTerraform(struct!.timeToAckIntervalCondition),
    time_to_ack_seconds: cdktf.numberToTerraform(struct!.timeToAckSeconds),
    time_to_ack_weekday_interval_config_id: cdktf.stringToTerraform(struct!.timeToAckWeekdayIntervalConfigId),
  }
}


export function escalationPathPathIfElseElsePathNotifyChannelToHclTerraform(struct?: EscalationPathPathIfElseElsePathNotifyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseElsePathNotifyChannelTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseElsePathNotifyChannelTargetsList",
    },
    time_to_ack_interval_condition: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckIntervalCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_ack_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToAckSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_ack_weekday_interval_config_id: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckWeekdayIntervalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseElsePathNotifyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseElsePathNotifyChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._timeToAckIntervalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckIntervalCondition = this._timeToAckIntervalCondition;
    }
    if (this._timeToAckSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckSeconds = this._timeToAckSeconds;
    }
    if (this._timeToAckWeekdayIntervalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckWeekdayIntervalConfigId = this._timeToAckWeekdayIntervalConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePathNotifyChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets.internalValue = undefined;
      this._timeToAckIntervalCondition = undefined;
      this._timeToAckSeconds = undefined;
      this._timeToAckWeekdayIntervalConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets.internalValue = value.targets;
      this._timeToAckIntervalCondition = value.timeToAckIntervalCondition;
      this._timeToAckSeconds = value.timeToAckSeconds;
      this._timeToAckWeekdayIntervalConfigId = value.timeToAckWeekdayIntervalConfigId;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPathPathIfElseElsePathNotifyChannelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPathPathIfElseElsePathNotifyChannelTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // time_to_ack_interval_condition - computed: false, optional: true, required: false
  private _timeToAckIntervalCondition?: string; 
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }
  public set timeToAckIntervalCondition(value: string) {
    this._timeToAckIntervalCondition = value;
  }
  public resetTimeToAckIntervalCondition() {
    this._timeToAckIntervalCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckIntervalConditionInput() {
    return this._timeToAckIntervalCondition;
  }

  // time_to_ack_seconds - computed: false, optional: true, required: false
  private _timeToAckSeconds?: number; 
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }
  public set timeToAckSeconds(value: number) {
    this._timeToAckSeconds = value;
  }
  public resetTimeToAckSeconds() {
    this._timeToAckSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckSecondsInput() {
    return this._timeToAckSeconds;
  }

  // time_to_ack_weekday_interval_config_id - computed: false, optional: true, required: false
  private _timeToAckWeekdayIntervalConfigId?: string; 
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
  public set timeToAckWeekdayIntervalConfigId(value: string) {
    this._timeToAckWeekdayIntervalConfigId = value;
  }
  public resetTimeToAckWeekdayIntervalConfigId() {
    this._timeToAckWeekdayIntervalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckWeekdayIntervalConfigIdInput() {
    return this._timeToAckWeekdayIntervalConfigId;
  }
}
export interface EscalationPathPathIfElseElsePathRepeat {
  /**
  * How many times to repeat these nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#repeat_times EscalationPath#repeat_times}
  */
  readonly repeatTimes: number;
  /**
  * Which node ID we begin repeating from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#to_node EscalationPath#to_node}
  */
  readonly toNode: string;
}

export function escalationPathPathIfElseElsePathRepeatToTerraform(struct?: EscalationPathPathIfElseElsePathRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat_times: cdktf.numberToTerraform(struct!.repeatTimes),
    to_node: cdktf.stringToTerraform(struct!.toNode),
  }
}


export function escalationPathPathIfElseElsePathRepeatToHclTerraform(struct?: EscalationPathPathIfElseElsePathRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat_times: {
      value: cdktf.numberToHclTerraform(struct!.repeatTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_node: {
      value: cdktf.stringToHclTerraform(struct!.toNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseElsePathRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseElsePathRepeat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatTimes = this._repeatTimes;
    }
    if (this._toNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNode = this._toNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePathRepeat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repeatTimes = undefined;
      this._toNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repeatTimes = value.repeatTimes;
      this._toNode = value.toNode;
    }
  }

  // repeat_times - computed: false, optional: false, required: true
  private _repeatTimes?: number; 
  public get repeatTimes() {
    return this.getNumberAttribute('repeat_times');
  }
  public set repeatTimes(value: number) {
    this._repeatTimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTimesInput() {
    return this._repeatTimes;
  }

  // to_node - computed: false, optional: false, required: true
  private _toNode?: string; 
  public get toNode() {
    return this.getStringAttribute('to_node');
  }
  public set toNode(value: string) {
    this._toNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodeInput() {
    return this._toNode;
  }
}
export interface EscalationPathPathIfElseElsePath {
  /**
  * An ID for this node, unique within the escalation path.
  * 
  * This allows you to reference the node in other nodes, such as when configuring a 'repeat' node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#if_else EscalationPath#if_else}
  */
  readonly ifElse?: EscalationPathPathIfElse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#level EscalationPath#level}
  */
  readonly level?: EscalationPathPathIfElseElsePathLevel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#notify_channel EscalationPath#notify_channel}
  */
  readonly notifyChannel?: EscalationPathPathIfElseElsePathNotifyChannel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#repeat EscalationPath#repeat}
  */
  readonly repeat?: EscalationPathPathIfElseElsePathRepeat;
  /**
  * The type of this node. Available types are:
  * * level: A set of targets (users or schedules) that should be paged, either all at once, or with a round-robin configuration.
  * * notify_channel: Send the escalation to a Slack channel, where it can be acked by anyone in the channel.
  * * if_else: Branch the escalation based on a set of conditions.
  * * repeat: Go back to a previous node and repeat the logic from there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
}

export function escalationPathPathIfElseElsePathToTerraform(struct?: EscalationPathPathIfElseElsePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    if_else: escalationPathPathIfElseToTerraform(struct!.ifElse),
    level: escalationPathPathIfElseElsePathLevelToTerraform(struct!.level),
    notify_channel: escalationPathPathIfElseElsePathNotifyChannelToTerraform(struct!.notifyChannel),
    repeat: escalationPathPathIfElseElsePathRepeatToTerraform(struct!.repeat),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function escalationPathPathIfElseElsePathToHclTerraform(struct?: EscalationPathPathIfElseElsePath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_else: {
      value: escalationPathPathIfElseToHclTerraform(struct!.ifElse),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElse",
    },
    level: {
      value: escalationPathPathIfElseElsePathLevelToHclTerraform(struct!.level),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseElsePathLevel",
    },
    notify_channel: {
      value: escalationPathPathIfElseElsePathNotifyChannelToHclTerraform(struct!.notifyChannel),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseElsePathNotifyChannel",
    },
    repeat: {
      value: escalationPathPathIfElseElsePathRepeatToHclTerraform(struct!.repeat),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseElsePathRepeat",
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

export class EscalationPathPathIfElseElsePathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseElsePath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ifElse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifElse = this._ifElse?.internalValue;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    if (this._notifyChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyChannel = this._notifyChannel?.internalValue;
    }
    if (this._repeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseElsePath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ifElse.internalValue = undefined;
      this._level.internalValue = undefined;
      this._notifyChannel.internalValue = undefined;
      this._repeat.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ifElse.internalValue = value.ifElse;
      this._level.internalValue = value.level;
      this._notifyChannel.internalValue = value.notifyChannel;
      this._repeat.internalValue = value.repeat;
      this._type = value.type;
    }
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

  // if_else - computed: false, optional: true, required: false
  private _ifElse = new EscalationPathPathIfElseOutputReference(this, "if_else");
  public get ifElse() {
    return this._ifElse;
  }
  public putIfElse(value: EscalationPathPathIfElse) {
    this._ifElse.internalValue = value;
  }
  public resetIfElse() {
    this._ifElse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifElseInput() {
    return this._ifElse.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new EscalationPathPathIfElseElsePathLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: EscalationPathPathIfElseElsePathLevel) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // notify_channel - computed: false, optional: true, required: false
  private _notifyChannel = new EscalationPathPathIfElseElsePathNotifyChannelOutputReference(this, "notify_channel");
  public get notifyChannel() {
    return this._notifyChannel;
  }
  public putNotifyChannel(value: EscalationPathPathIfElseElsePathNotifyChannel) {
    this._notifyChannel.internalValue = value;
  }
  public resetNotifyChannel() {
    this._notifyChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyChannelInput() {
    return this._notifyChannel.internalValue;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat = new EscalationPathPathIfElseElsePathRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }
  public putRepeat(value: EscalationPathPathIfElseElsePathRepeat) {
    this._repeat.internalValue = value;
  }
  public resetRepeat() {
    this._repeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat.internalValue;
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

export class EscalationPathPathIfElseElsePathList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseElsePath[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseElsePathOutputReference {
    return new EscalationPathPathIfElseElsePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseThenPathLevelRoundRobinConfig {
  /**
  * Whether round robin is enabled for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#enabled EscalationPath#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How long should we wait before rotating to the next target in a round robin, if not set will stick with a single target per level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#rotate_after_seconds EscalationPath#rotate_after_seconds}
  */
  readonly rotateAfterSeconds?: number;
}

export function escalationPathPathIfElseThenPathLevelRoundRobinConfigToTerraform(struct?: EscalationPathPathIfElseThenPathLevelRoundRobinConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotate_after_seconds: cdktf.numberToTerraform(struct!.rotateAfterSeconds),
  }
}


export function escalationPathPathIfElseThenPathLevelRoundRobinConfigToHclTerraform(struct?: EscalationPathPathIfElseThenPathLevelRoundRobinConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotate_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.rotateAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseThenPathLevelRoundRobinConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseThenPathLevelRoundRobinConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotateAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateAfterSeconds = this._rotateAfterSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPathLevelRoundRobinConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rotateAfterSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rotateAfterSeconds = value.rotateAfterSeconds;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rotate_after_seconds - computed: false, optional: true, required: false
  private _rotateAfterSeconds?: number; 
  public get rotateAfterSeconds() {
    return this.getNumberAttribute('rotate_after_seconds');
  }
  public set rotateAfterSeconds(value: number) {
    this._rotateAfterSeconds = value;
  }
  public resetRotateAfterSeconds() {
    this._rotateAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateAfterSecondsInput() {
    return this._rotateAfterSeconds;
  }
}
export interface EscalationPathPathIfElseThenPathLevelTargets {
  /**
  * Uniquely identifies an entity of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#schedule_mode EscalationPath#schedule_mode}
  */
  readonly scheduleMode?: string;
  /**
  * Controls what type of entity this target identifies, such as EscalationPolicy or User. Possible values are: `schedule`, `user`, `slack_channel`, `msteams_channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
  /**
  * The urgency of this escalation path target. Possible values are: `high`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#urgency EscalationPath#urgency}
  */
  readonly urgency: string;
}

export function escalationPathPathIfElseThenPathLevelTargetsToTerraform(struct?: EscalationPathPathIfElseThenPathLevelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    schedule_mode: cdktf.stringToTerraform(struct!.scheduleMode),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function escalationPathPathIfElseThenPathLevelTargetsToHclTerraform(struct?: EscalationPathPathIfElseThenPathLevelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseThenPathLevelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseThenPathLevelTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMode = this._scheduleMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPathLevelTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scheduleMode = undefined;
      this._type = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scheduleMode = value.scheduleMode;
      this._type = value.type;
      this._urgency = value.urgency;
    }
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

  // schedule_mode - computed: true, optional: true, required: false
  private _scheduleMode?: string; 
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }
  public set scheduleMode(value: string) {
    this._scheduleMode = value;
  }
  public resetScheduleMode() {
    this._scheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleModeInput() {
    return this._scheduleMode;
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

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class EscalationPathPathIfElseThenPathLevelTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseThenPathLevelTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseThenPathLevelTargetsOutputReference {
    return new EscalationPathPathIfElseThenPathLevelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseThenPathLevel {
  /**
  * Controls the behaviour of acknowledgements for this level, with 'first' cancelling all other escalations on the same level when someone acks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#ack_mode EscalationPath#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#round_robin_config EscalationPath#round_robin_config}
  */
  readonly roundRobinConfig?: EscalationPathPathIfElseThenPathLevelRoundRobinConfig;
  /**
  * The targets (users or schedules) for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#targets EscalationPath#targets}
  */
  readonly targets: EscalationPathPathIfElseThenPathLevelTargets[] | cdktf.IResolvable;
  /**
  * If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_interval_condition EscalationPath#time_to_ack_interval_condition}
  */
  readonly timeToAckIntervalCondition?: string;
  /**
  * How long should we wait for this level to acknowledge before proceeding to the next node in the path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_seconds EscalationPath#time_to_ack_seconds}
  */
  readonly timeToAckSeconds?: number;
  /**
  * If the time to ack is relative to a time window, this identifies which window it is relative to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_weekday_interval_config_id EscalationPath#time_to_ack_weekday_interval_config_id}
  */
  readonly timeToAckWeekdayIntervalConfigId?: string;
}

export function escalationPathPathIfElseThenPathLevelToTerraform(struct?: EscalationPathPathIfElseThenPathLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_mode: cdktf.stringToTerraform(struct!.ackMode),
    round_robin_config: escalationPathPathIfElseThenPathLevelRoundRobinConfigToTerraform(struct!.roundRobinConfig),
    targets: cdktf.listMapper(escalationPathPathIfElseThenPathLevelTargetsToTerraform, false)(struct!.targets),
    time_to_ack_interval_condition: cdktf.stringToTerraform(struct!.timeToAckIntervalCondition),
    time_to_ack_seconds: cdktf.numberToTerraform(struct!.timeToAckSeconds),
    time_to_ack_weekday_interval_config_id: cdktf.stringToTerraform(struct!.timeToAckWeekdayIntervalConfigId),
  }
}


export function escalationPathPathIfElseThenPathLevelToHclTerraform(struct?: EscalationPathPathIfElseThenPathLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_mode: {
      value: cdktf.stringToHclTerraform(struct!.ackMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    round_robin_config: {
      value: escalationPathPathIfElseThenPathLevelRoundRobinConfigToHclTerraform(struct!.roundRobinConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseThenPathLevelRoundRobinConfig",
    },
    targets: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseThenPathLevelTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseThenPathLevelTargetsList",
    },
    time_to_ack_interval_condition: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckIntervalCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_ack_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToAckSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_ack_weekday_interval_config_id: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckWeekdayIntervalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseThenPathLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseThenPathLevel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackMode = this._ackMode;
    }
    if (this._roundRobinConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobinConfig = this._roundRobinConfig?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._timeToAckIntervalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckIntervalCondition = this._timeToAckIntervalCondition;
    }
    if (this._timeToAckSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckSeconds = this._timeToAckSeconds;
    }
    if (this._timeToAckWeekdayIntervalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckWeekdayIntervalConfigId = this._timeToAckWeekdayIntervalConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPathLevel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackMode = undefined;
      this._roundRobinConfig.internalValue = undefined;
      this._targets.internalValue = undefined;
      this._timeToAckIntervalCondition = undefined;
      this._timeToAckSeconds = undefined;
      this._timeToAckWeekdayIntervalConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackMode = value.ackMode;
      this._roundRobinConfig.internalValue = value.roundRobinConfig;
      this._targets.internalValue = value.targets;
      this._timeToAckIntervalCondition = value.timeToAckIntervalCondition;
      this._timeToAckSeconds = value.timeToAckSeconds;
      this._timeToAckWeekdayIntervalConfigId = value.timeToAckWeekdayIntervalConfigId;
    }
  }

  // ack_mode - computed: true, optional: true, required: false
  private _ackMode?: string; 
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }
  public set ackMode(value: string) {
    this._ackMode = value;
  }
  public resetAckMode() {
    this._ackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackModeInput() {
    return this._ackMode;
  }

  // round_robin_config - computed: false, optional: true, required: false
  private _roundRobinConfig = new EscalationPathPathIfElseThenPathLevelRoundRobinConfigOutputReference(this, "round_robin_config");
  public get roundRobinConfig() {
    return this._roundRobinConfig;
  }
  public putRoundRobinConfig(value: EscalationPathPathIfElseThenPathLevelRoundRobinConfig) {
    this._roundRobinConfig.internalValue = value;
  }
  public resetRoundRobinConfig() {
    this._roundRobinConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinConfigInput() {
    return this._roundRobinConfig.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPathPathIfElseThenPathLevelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPathPathIfElseThenPathLevelTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // time_to_ack_interval_condition - computed: false, optional: true, required: false
  private _timeToAckIntervalCondition?: string; 
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }
  public set timeToAckIntervalCondition(value: string) {
    this._timeToAckIntervalCondition = value;
  }
  public resetTimeToAckIntervalCondition() {
    this._timeToAckIntervalCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckIntervalConditionInput() {
    return this._timeToAckIntervalCondition;
  }

  // time_to_ack_seconds - computed: false, optional: true, required: false
  private _timeToAckSeconds?: number; 
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }
  public set timeToAckSeconds(value: number) {
    this._timeToAckSeconds = value;
  }
  public resetTimeToAckSeconds() {
    this._timeToAckSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckSecondsInput() {
    return this._timeToAckSeconds;
  }

  // time_to_ack_weekday_interval_config_id - computed: false, optional: true, required: false
  private _timeToAckWeekdayIntervalConfigId?: string; 
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
  public set timeToAckWeekdayIntervalConfigId(value: string) {
    this._timeToAckWeekdayIntervalConfigId = value;
  }
  public resetTimeToAckWeekdayIntervalConfigId() {
    this._timeToAckWeekdayIntervalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckWeekdayIntervalConfigIdInput() {
    return this._timeToAckWeekdayIntervalConfigId;
  }
}
export interface EscalationPathPathIfElseThenPathNotifyChannelTargets {
  /**
  * Uniquely identifies an entity of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#schedule_mode EscalationPath#schedule_mode}
  */
  readonly scheduleMode?: string;
  /**
  * Controls what type of entity this target identifies, such as EscalationPolicy or User. Possible values are: `schedule`, `user`, `slack_channel`, `msteams_channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
  /**
  * The urgency of this escalation path target. Possible values are: `high`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#urgency EscalationPath#urgency}
  */
  readonly urgency: string;
}

export function escalationPathPathIfElseThenPathNotifyChannelTargetsToTerraform(struct?: EscalationPathPathIfElseThenPathNotifyChannelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    schedule_mode: cdktf.stringToTerraform(struct!.scheduleMode),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function escalationPathPathIfElseThenPathNotifyChannelTargetsToHclTerraform(struct?: EscalationPathPathIfElseThenPathNotifyChannelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseThenPathNotifyChannelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseThenPathNotifyChannelTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMode = this._scheduleMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPathNotifyChannelTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scheduleMode = undefined;
      this._type = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scheduleMode = value.scheduleMode;
      this._type = value.type;
      this._urgency = value.urgency;
    }
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

  // schedule_mode - computed: true, optional: true, required: false
  private _scheduleMode?: string; 
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }
  public set scheduleMode(value: string) {
    this._scheduleMode = value;
  }
  public resetScheduleMode() {
    this._scheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleModeInput() {
    return this._scheduleMode;
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

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class EscalationPathPathIfElseThenPathNotifyChannelTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseThenPathNotifyChannelTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseThenPathNotifyChannelTargetsOutputReference {
    return new EscalationPathPathIfElseThenPathNotifyChannelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElseThenPathNotifyChannel {
  /**
  * The targets (Slack channels) for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#targets EscalationPath#targets}
  */
  readonly targets: EscalationPathPathIfElseThenPathNotifyChannelTargets[] | cdktf.IResolvable;
  /**
  * If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_interval_condition EscalationPath#time_to_ack_interval_condition}
  */
  readonly timeToAckIntervalCondition?: string;
  /**
  * How long should we wait for this level to acknowledge before moving on to the next node in the path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_seconds EscalationPath#time_to_ack_seconds}
  */
  readonly timeToAckSeconds?: number;
  /**
  * If the time to ack is relative to a time window, this identifies which window it is relative to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_weekday_interval_config_id EscalationPath#time_to_ack_weekday_interval_config_id}
  */
  readonly timeToAckWeekdayIntervalConfigId?: string;
}

export function escalationPathPathIfElseThenPathNotifyChannelToTerraform(struct?: EscalationPathPathIfElseThenPathNotifyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(escalationPathPathIfElseThenPathNotifyChannelTargetsToTerraform, false)(struct!.targets),
    time_to_ack_interval_condition: cdktf.stringToTerraform(struct!.timeToAckIntervalCondition),
    time_to_ack_seconds: cdktf.numberToTerraform(struct!.timeToAckSeconds),
    time_to_ack_weekday_interval_config_id: cdktf.stringToTerraform(struct!.timeToAckWeekdayIntervalConfigId),
  }
}


export function escalationPathPathIfElseThenPathNotifyChannelToHclTerraform(struct?: EscalationPathPathIfElseThenPathNotifyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseThenPathNotifyChannelTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseThenPathNotifyChannelTargetsList",
    },
    time_to_ack_interval_condition: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckIntervalCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_ack_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToAckSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_ack_weekday_interval_config_id: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckWeekdayIntervalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseThenPathNotifyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseThenPathNotifyChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._timeToAckIntervalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckIntervalCondition = this._timeToAckIntervalCondition;
    }
    if (this._timeToAckSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckSeconds = this._timeToAckSeconds;
    }
    if (this._timeToAckWeekdayIntervalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckWeekdayIntervalConfigId = this._timeToAckWeekdayIntervalConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPathNotifyChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets.internalValue = undefined;
      this._timeToAckIntervalCondition = undefined;
      this._timeToAckSeconds = undefined;
      this._timeToAckWeekdayIntervalConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets.internalValue = value.targets;
      this._timeToAckIntervalCondition = value.timeToAckIntervalCondition;
      this._timeToAckSeconds = value.timeToAckSeconds;
      this._timeToAckWeekdayIntervalConfigId = value.timeToAckWeekdayIntervalConfigId;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPathPathIfElseThenPathNotifyChannelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPathPathIfElseThenPathNotifyChannelTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // time_to_ack_interval_condition - computed: false, optional: true, required: false
  private _timeToAckIntervalCondition?: string; 
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }
  public set timeToAckIntervalCondition(value: string) {
    this._timeToAckIntervalCondition = value;
  }
  public resetTimeToAckIntervalCondition() {
    this._timeToAckIntervalCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckIntervalConditionInput() {
    return this._timeToAckIntervalCondition;
  }

  // time_to_ack_seconds - computed: false, optional: true, required: false
  private _timeToAckSeconds?: number; 
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }
  public set timeToAckSeconds(value: number) {
    this._timeToAckSeconds = value;
  }
  public resetTimeToAckSeconds() {
    this._timeToAckSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckSecondsInput() {
    return this._timeToAckSeconds;
  }

  // time_to_ack_weekday_interval_config_id - computed: false, optional: true, required: false
  private _timeToAckWeekdayIntervalConfigId?: string; 
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
  public set timeToAckWeekdayIntervalConfigId(value: string) {
    this._timeToAckWeekdayIntervalConfigId = value;
  }
  public resetTimeToAckWeekdayIntervalConfigId() {
    this._timeToAckWeekdayIntervalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckWeekdayIntervalConfigIdInput() {
    return this._timeToAckWeekdayIntervalConfigId;
  }
}
export interface EscalationPathPathIfElseThenPathRepeat {
  /**
  * How many times to repeat these nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#repeat_times EscalationPath#repeat_times}
  */
  readonly repeatTimes: number;
  /**
  * Which node ID we begin repeating from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#to_node EscalationPath#to_node}
  */
  readonly toNode: string;
}

export function escalationPathPathIfElseThenPathRepeatToTerraform(struct?: EscalationPathPathIfElseThenPathRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat_times: cdktf.numberToTerraform(struct!.repeatTimes),
    to_node: cdktf.stringToTerraform(struct!.toNode),
  }
}


export function escalationPathPathIfElseThenPathRepeatToHclTerraform(struct?: EscalationPathPathIfElseThenPathRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat_times: {
      value: cdktf.numberToHclTerraform(struct!.repeatTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_node: {
      value: cdktf.stringToHclTerraform(struct!.toNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseThenPathRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElseThenPathRepeat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatTimes = this._repeatTimes;
    }
    if (this._toNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNode = this._toNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPathRepeat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repeatTimes = undefined;
      this._toNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repeatTimes = value.repeatTimes;
      this._toNode = value.toNode;
    }
  }

  // repeat_times - computed: false, optional: false, required: true
  private _repeatTimes?: number; 
  public get repeatTimes() {
    return this.getNumberAttribute('repeat_times');
  }
  public set repeatTimes(value: number) {
    this._repeatTimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTimesInput() {
    return this._repeatTimes;
  }

  // to_node - computed: false, optional: false, required: true
  private _toNode?: string; 
  public get toNode() {
    return this.getStringAttribute('to_node');
  }
  public set toNode(value: string) {
    this._toNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodeInput() {
    return this._toNode;
  }
}
export interface EscalationPathPathIfElseThenPath {
  /**
  * An ID for this node, unique within the escalation path.
  * 
  * This allows you to reference the node in other nodes, such as when configuring a 'repeat' node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#if_else EscalationPath#if_else}
  */
  readonly ifElse?: EscalationPathPathIfElse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#level EscalationPath#level}
  */
  readonly level?: EscalationPathPathIfElseThenPathLevel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#notify_channel EscalationPath#notify_channel}
  */
  readonly notifyChannel?: EscalationPathPathIfElseThenPathNotifyChannel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#repeat EscalationPath#repeat}
  */
  readonly repeat?: EscalationPathPathIfElseThenPathRepeat;
  /**
  * The type of this node. Available types are:
  * * level: A set of targets (users or schedules) that should be paged, either all at once, or with a round-robin configuration.
  * * notify_channel: Send the escalation to a Slack channel, where it can be acked by anyone in the channel.
  * * if_else: Branch the escalation based on a set of conditions.
  * * repeat: Go back to a previous node and repeat the logic from there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
}

export function escalationPathPathIfElseThenPathToTerraform(struct?: EscalationPathPathIfElseThenPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    if_else: escalationPathPathIfElseToTerraform(struct!.ifElse),
    level: escalationPathPathIfElseThenPathLevelToTerraform(struct!.level),
    notify_channel: escalationPathPathIfElseThenPathNotifyChannelToTerraform(struct!.notifyChannel),
    repeat: escalationPathPathIfElseThenPathRepeatToTerraform(struct!.repeat),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function escalationPathPathIfElseThenPathToHclTerraform(struct?: EscalationPathPathIfElseThenPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_else: {
      value: escalationPathPathIfElseToHclTerraform(struct!.ifElse),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElse",
    },
    level: {
      value: escalationPathPathIfElseThenPathLevelToHclTerraform(struct!.level),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseThenPathLevel",
    },
    notify_channel: {
      value: escalationPathPathIfElseThenPathNotifyChannelToHclTerraform(struct!.notifyChannel),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseThenPathNotifyChannel",
    },
    repeat: {
      value: escalationPathPathIfElseThenPathRepeatToHclTerraform(struct!.repeat),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElseThenPathRepeat",
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

export class EscalationPathPathIfElseThenPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathIfElseThenPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ifElse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifElse = this._ifElse?.internalValue;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    if (this._notifyChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyChannel = this._notifyChannel?.internalValue;
    }
    if (this._repeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElseThenPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ifElse.internalValue = undefined;
      this._level.internalValue = undefined;
      this._notifyChannel.internalValue = undefined;
      this._repeat.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ifElse.internalValue = value.ifElse;
      this._level.internalValue = value.level;
      this._notifyChannel.internalValue = value.notifyChannel;
      this._repeat.internalValue = value.repeat;
      this._type = value.type;
    }
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

  // if_else - computed: false, optional: true, required: false
  private _ifElse = new EscalationPathPathIfElseOutputReference(this, "if_else");
  public get ifElse() {
    return this._ifElse;
  }
  public putIfElse(value: EscalationPathPathIfElse) {
    this._ifElse.internalValue = value;
  }
  public resetIfElse() {
    this._ifElse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifElseInput() {
    return this._ifElse.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new EscalationPathPathIfElseThenPathLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: EscalationPathPathIfElseThenPathLevel) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // notify_channel - computed: false, optional: true, required: false
  private _notifyChannel = new EscalationPathPathIfElseThenPathNotifyChannelOutputReference(this, "notify_channel");
  public get notifyChannel() {
    return this._notifyChannel;
  }
  public putNotifyChannel(value: EscalationPathPathIfElseThenPathNotifyChannel) {
    this._notifyChannel.internalValue = value;
  }
  public resetNotifyChannel() {
    this._notifyChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyChannelInput() {
    return this._notifyChannel.internalValue;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat = new EscalationPathPathIfElseThenPathRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }
  public putRepeat(value: EscalationPathPathIfElseThenPathRepeat) {
    this._repeat.internalValue = value;
  }
  public resetRepeat() {
    this._repeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat.internalValue;
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

export class EscalationPathPathIfElseThenPathList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathIfElseThenPath[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathIfElseThenPathOutputReference {
    return new EscalationPathPathIfElseThenPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathIfElse {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#conditions EscalationPath#conditions}
  */
  readonly conditions: EscalationPathPathIfElseConditions[] | cdktf.IResolvable;
  /**
  * The nodes that form the levels if our condition is not met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#else_path EscalationPath#else_path}
  */
  readonly elsePath?: EscalationPathPathIfElseElsePath[] | cdktf.IResolvable;
  /**
  * Then path nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#then_path EscalationPath#then_path}
  */
  readonly thenPath: EscalationPathPathIfElseThenPath[] | cdktf.IResolvable;
}

export function escalationPathPathIfElseToTerraform(struct?: EscalationPathPathIfElse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(escalationPathPathIfElseConditionsToTerraform, false)(struct!.conditions),
    else_path: cdktf.listMapper(escalationPathPathIfElseElsePathToTerraform, false)(struct!.elsePath),
    then_path: cdktf.listMapper(escalationPathPathIfElseThenPathToTerraform, false)(struct!.thenPath),
  }
}


export function escalationPathPathIfElseToHclTerraform(struct?: EscalationPathPathIfElse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseConditionsList",
    },
    else_path: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseElsePathToHclTerraform, false)(struct!.elsePath),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseElsePathList",
    },
    then_path: {
      value: cdktf.listMapperHcl(escalationPathPathIfElseThenPathToHclTerraform, false)(struct!.thenPath),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathIfElseThenPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathIfElseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathIfElse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._elsePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elsePath = this._elsePath?.internalValue;
    }
    if (this._thenPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thenPath = this._thenPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathIfElse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._elsePath.internalValue = undefined;
      this._thenPath.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._elsePath.internalValue = value.elsePath;
      this._thenPath.internalValue = value.thenPath;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new EscalationPathPathIfElseConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: EscalationPathPathIfElseConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // else_path - computed: false, optional: true, required: false
  private _elsePath = new EscalationPathPathIfElseElsePathList(this, "else_path", false);
  public get elsePath() {
    return this._elsePath;
  }
  public putElsePath(value: EscalationPathPathIfElseElsePath[] | cdktf.IResolvable) {
    this._elsePath.internalValue = value;
  }
  public resetElsePath() {
    this._elsePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elsePathInput() {
    return this._elsePath.internalValue;
  }

  // then_path - computed: false, optional: false, required: true
  private _thenPath = new EscalationPathPathIfElseThenPathList(this, "then_path", false);
  public get thenPath() {
    return this._thenPath;
  }
  public putThenPath(value: EscalationPathPathIfElseThenPath[] | cdktf.IResolvable) {
    this._thenPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thenPathInput() {
    return this._thenPath.internalValue;
  }
}
export interface EscalationPathPathLevelRoundRobinConfig {
  /**
  * Whether round robin is enabled for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#enabled EscalationPath#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How long should we wait before rotating to the next target in a round robin, if not set will stick with a single target per level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#rotate_after_seconds EscalationPath#rotate_after_seconds}
  */
  readonly rotateAfterSeconds?: number;
}

export function escalationPathPathLevelRoundRobinConfigToTerraform(struct?: EscalationPathPathLevelRoundRobinConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rotate_after_seconds: cdktf.numberToTerraform(struct!.rotateAfterSeconds),
  }
}


export function escalationPathPathLevelRoundRobinConfigToHclTerraform(struct?: EscalationPathPathLevelRoundRobinConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotate_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.rotateAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathLevelRoundRobinConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathLevelRoundRobinConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rotateAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateAfterSeconds = this._rotateAfterSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathLevelRoundRobinConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rotateAfterSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rotateAfterSeconds = value.rotateAfterSeconds;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rotate_after_seconds - computed: false, optional: true, required: false
  private _rotateAfterSeconds?: number; 
  public get rotateAfterSeconds() {
    return this.getNumberAttribute('rotate_after_seconds');
  }
  public set rotateAfterSeconds(value: number) {
    this._rotateAfterSeconds = value;
  }
  public resetRotateAfterSeconds() {
    this._rotateAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateAfterSecondsInput() {
    return this._rotateAfterSeconds;
  }
}
export interface EscalationPathPathLevelTargets {
  /**
  * Uniquely identifies an entity of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#schedule_mode EscalationPath#schedule_mode}
  */
  readonly scheduleMode?: string;
  /**
  * Controls what type of entity this target identifies, such as EscalationPolicy or User. Possible values are: `schedule`, `user`, `slack_channel`, `msteams_channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
  /**
  * The urgency of this escalation path target. Possible values are: `high`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#urgency EscalationPath#urgency}
  */
  readonly urgency: string;
}

export function escalationPathPathLevelTargetsToTerraform(struct?: EscalationPathPathLevelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    schedule_mode: cdktf.stringToTerraform(struct!.scheduleMode),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function escalationPathPathLevelTargetsToHclTerraform(struct?: EscalationPathPathLevelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathLevelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathLevelTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMode = this._scheduleMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathLevelTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scheduleMode = undefined;
      this._type = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scheduleMode = value.scheduleMode;
      this._type = value.type;
      this._urgency = value.urgency;
    }
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

  // schedule_mode - computed: true, optional: true, required: false
  private _scheduleMode?: string; 
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }
  public set scheduleMode(value: string) {
    this._scheduleMode = value;
  }
  public resetScheduleMode() {
    this._scheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleModeInput() {
    return this._scheduleMode;
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

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class EscalationPathPathLevelTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathLevelTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathLevelTargetsOutputReference {
    return new EscalationPathPathLevelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathLevel {
  /**
  * Controls the behaviour of acknowledgements for this level, with 'first' cancelling all other escalations on the same level when someone acks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#ack_mode EscalationPath#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#round_robin_config EscalationPath#round_robin_config}
  */
  readonly roundRobinConfig?: EscalationPathPathLevelRoundRobinConfig;
  /**
  * The targets (users or schedules) for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#targets EscalationPath#targets}
  */
  readonly targets: EscalationPathPathLevelTargets[] | cdktf.IResolvable;
  /**
  * If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_interval_condition EscalationPath#time_to_ack_interval_condition}
  */
  readonly timeToAckIntervalCondition?: string;
  /**
  * How long should we wait for this level to acknowledge before proceeding to the next node in the path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_seconds EscalationPath#time_to_ack_seconds}
  */
  readonly timeToAckSeconds?: number;
  /**
  * If the time to ack is relative to a time window, this identifies which window it is relative to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_weekday_interval_config_id EscalationPath#time_to_ack_weekday_interval_config_id}
  */
  readonly timeToAckWeekdayIntervalConfigId?: string;
}

export function escalationPathPathLevelToTerraform(struct?: EscalationPathPathLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_mode: cdktf.stringToTerraform(struct!.ackMode),
    round_robin_config: escalationPathPathLevelRoundRobinConfigToTerraform(struct!.roundRobinConfig),
    targets: cdktf.listMapper(escalationPathPathLevelTargetsToTerraform, false)(struct!.targets),
    time_to_ack_interval_condition: cdktf.stringToTerraform(struct!.timeToAckIntervalCondition),
    time_to_ack_seconds: cdktf.numberToTerraform(struct!.timeToAckSeconds),
    time_to_ack_weekday_interval_config_id: cdktf.stringToTerraform(struct!.timeToAckWeekdayIntervalConfigId),
  }
}


export function escalationPathPathLevelToHclTerraform(struct?: EscalationPathPathLevel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_mode: {
      value: cdktf.stringToHclTerraform(struct!.ackMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    round_robin_config: {
      value: escalationPathPathLevelRoundRobinConfigToHclTerraform(struct!.roundRobinConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathLevelRoundRobinConfig",
    },
    targets: {
      value: cdktf.listMapperHcl(escalationPathPathLevelTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathLevelTargetsList",
    },
    time_to_ack_interval_condition: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckIntervalCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_ack_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToAckSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_ack_weekday_interval_config_id: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckWeekdayIntervalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathLevel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackMode = this._ackMode;
    }
    if (this._roundRobinConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobinConfig = this._roundRobinConfig?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._timeToAckIntervalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckIntervalCondition = this._timeToAckIntervalCondition;
    }
    if (this._timeToAckSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckSeconds = this._timeToAckSeconds;
    }
    if (this._timeToAckWeekdayIntervalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckWeekdayIntervalConfigId = this._timeToAckWeekdayIntervalConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathLevel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackMode = undefined;
      this._roundRobinConfig.internalValue = undefined;
      this._targets.internalValue = undefined;
      this._timeToAckIntervalCondition = undefined;
      this._timeToAckSeconds = undefined;
      this._timeToAckWeekdayIntervalConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackMode = value.ackMode;
      this._roundRobinConfig.internalValue = value.roundRobinConfig;
      this._targets.internalValue = value.targets;
      this._timeToAckIntervalCondition = value.timeToAckIntervalCondition;
      this._timeToAckSeconds = value.timeToAckSeconds;
      this._timeToAckWeekdayIntervalConfigId = value.timeToAckWeekdayIntervalConfigId;
    }
  }

  // ack_mode - computed: true, optional: true, required: false
  private _ackMode?: string; 
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }
  public set ackMode(value: string) {
    this._ackMode = value;
  }
  public resetAckMode() {
    this._ackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackModeInput() {
    return this._ackMode;
  }

  // round_robin_config - computed: false, optional: true, required: false
  private _roundRobinConfig = new EscalationPathPathLevelRoundRobinConfigOutputReference(this, "round_robin_config");
  public get roundRobinConfig() {
    return this._roundRobinConfig;
  }
  public putRoundRobinConfig(value: EscalationPathPathLevelRoundRobinConfig) {
    this._roundRobinConfig.internalValue = value;
  }
  public resetRoundRobinConfig() {
    this._roundRobinConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinConfigInput() {
    return this._roundRobinConfig.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPathPathLevelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPathPathLevelTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // time_to_ack_interval_condition - computed: false, optional: true, required: false
  private _timeToAckIntervalCondition?: string; 
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }
  public set timeToAckIntervalCondition(value: string) {
    this._timeToAckIntervalCondition = value;
  }
  public resetTimeToAckIntervalCondition() {
    this._timeToAckIntervalCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckIntervalConditionInput() {
    return this._timeToAckIntervalCondition;
  }

  // time_to_ack_seconds - computed: false, optional: true, required: false
  private _timeToAckSeconds?: number; 
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }
  public set timeToAckSeconds(value: number) {
    this._timeToAckSeconds = value;
  }
  public resetTimeToAckSeconds() {
    this._timeToAckSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckSecondsInput() {
    return this._timeToAckSeconds;
  }

  // time_to_ack_weekday_interval_config_id - computed: false, optional: true, required: false
  private _timeToAckWeekdayIntervalConfigId?: string; 
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
  public set timeToAckWeekdayIntervalConfigId(value: string) {
    this._timeToAckWeekdayIntervalConfigId = value;
  }
  public resetTimeToAckWeekdayIntervalConfigId() {
    this._timeToAckWeekdayIntervalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckWeekdayIntervalConfigIdInput() {
    return this._timeToAckWeekdayIntervalConfigId;
  }
}
export interface EscalationPathPathNotifyChannelTargets {
  /**
  * Uniquely identifies an entity of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#schedule_mode EscalationPath#schedule_mode}
  */
  readonly scheduleMode?: string;
  /**
  * Controls what type of entity this target identifies, such as EscalationPolicy or User. Possible values are: `schedule`, `user`, `slack_channel`, `msteams_channel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
  /**
  * The urgency of this escalation path target. Possible values are: `high`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#urgency EscalationPath#urgency}
  */
  readonly urgency: string;
}

export function escalationPathPathNotifyChannelTargetsToTerraform(struct?: EscalationPathPathNotifyChannelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    schedule_mode: cdktf.stringToTerraform(struct!.scheduleMode),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function escalationPathPathNotifyChannelTargetsToHclTerraform(struct?: EscalationPathPathNotifyChannelTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_mode: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathNotifyChannelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPathNotifyChannelTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scheduleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMode = this._scheduleMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathNotifyChannelTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._scheduleMode = undefined;
      this._type = undefined;
      this._urgency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._scheduleMode = value.scheduleMode;
      this._type = value.type;
      this._urgency = value.urgency;
    }
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

  // schedule_mode - computed: true, optional: true, required: false
  private _scheduleMode?: string; 
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }
  public set scheduleMode(value: string) {
    this._scheduleMode = value;
  }
  public resetScheduleMode() {
    this._scheduleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleModeInput() {
    return this._scheduleMode;
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

  // urgency - computed: false, optional: false, required: true
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

export class EscalationPathPathNotifyChannelTargetsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPathNotifyChannelTargets[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathNotifyChannelTargetsOutputReference {
    return new EscalationPathPathNotifyChannelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathPathNotifyChannel {
  /**
  * The targets (Slack channels) for this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#targets EscalationPath#targets}
  */
  readonly targets: EscalationPathPathNotifyChannelTargets[] | cdktf.IResolvable;
  /**
  * If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_interval_condition EscalationPath#time_to_ack_interval_condition}
  */
  readonly timeToAckIntervalCondition?: string;
  /**
  * How long should we wait for this level to acknowledge before moving on to the next node in the path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_seconds EscalationPath#time_to_ack_seconds}
  */
  readonly timeToAckSeconds?: number;
  /**
  * If the time to ack is relative to a time window, this identifies which window it is relative to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#time_to_ack_weekday_interval_config_id EscalationPath#time_to_ack_weekday_interval_config_id}
  */
  readonly timeToAckWeekdayIntervalConfigId?: string;
}

export function escalationPathPathNotifyChannelToTerraform(struct?: EscalationPathPathNotifyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(escalationPathPathNotifyChannelTargetsToTerraform, false)(struct!.targets),
    time_to_ack_interval_condition: cdktf.stringToTerraform(struct!.timeToAckIntervalCondition),
    time_to_ack_seconds: cdktf.numberToTerraform(struct!.timeToAckSeconds),
    time_to_ack_weekday_interval_config_id: cdktf.stringToTerraform(struct!.timeToAckWeekdayIntervalConfigId),
  }
}


export function escalationPathPathNotifyChannelToHclTerraform(struct?: EscalationPathPathNotifyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(escalationPathPathNotifyChannelTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathPathNotifyChannelTargetsList",
    },
    time_to_ack_interval_condition: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckIntervalCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_ack_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToAckSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_ack_weekday_interval_config_id: {
      value: cdktf.stringToHclTerraform(struct!.timeToAckWeekdayIntervalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathNotifyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathNotifyChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._timeToAckIntervalCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckIntervalCondition = this._timeToAckIntervalCondition;
    }
    if (this._timeToAckSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckSeconds = this._timeToAckSeconds;
    }
    if (this._timeToAckWeekdayIntervalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToAckWeekdayIntervalConfigId = this._timeToAckWeekdayIntervalConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathNotifyChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets.internalValue = undefined;
      this._timeToAckIntervalCondition = undefined;
      this._timeToAckSeconds = undefined;
      this._timeToAckWeekdayIntervalConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets.internalValue = value.targets;
      this._timeToAckIntervalCondition = value.timeToAckIntervalCondition;
      this._timeToAckSeconds = value.timeToAckSeconds;
      this._timeToAckWeekdayIntervalConfigId = value.timeToAckWeekdayIntervalConfigId;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new EscalationPathPathNotifyChannelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: EscalationPathPathNotifyChannelTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // time_to_ack_interval_condition - computed: false, optional: true, required: false
  private _timeToAckIntervalCondition?: string; 
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }
  public set timeToAckIntervalCondition(value: string) {
    this._timeToAckIntervalCondition = value;
  }
  public resetTimeToAckIntervalCondition() {
    this._timeToAckIntervalCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckIntervalConditionInput() {
    return this._timeToAckIntervalCondition;
  }

  // time_to_ack_seconds - computed: false, optional: true, required: false
  private _timeToAckSeconds?: number; 
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }
  public set timeToAckSeconds(value: number) {
    this._timeToAckSeconds = value;
  }
  public resetTimeToAckSeconds() {
    this._timeToAckSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckSecondsInput() {
    return this._timeToAckSeconds;
  }

  // time_to_ack_weekday_interval_config_id - computed: false, optional: true, required: false
  private _timeToAckWeekdayIntervalConfigId?: string; 
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
  public set timeToAckWeekdayIntervalConfigId(value: string) {
    this._timeToAckWeekdayIntervalConfigId = value;
  }
  public resetTimeToAckWeekdayIntervalConfigId() {
    this._timeToAckWeekdayIntervalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToAckWeekdayIntervalConfigIdInput() {
    return this._timeToAckWeekdayIntervalConfigId;
  }
}
export interface EscalationPathPathRepeat {
  /**
  * How many times to repeat these nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#repeat_times EscalationPath#repeat_times}
  */
  readonly repeatTimes: number;
  /**
  * Which node ID we begin repeating from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#to_node EscalationPath#to_node}
  */
  readonly toNode: string;
}

export function escalationPathPathRepeatToTerraform(struct?: EscalationPathPathRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat_times: cdktf.numberToTerraform(struct!.repeatTimes),
    to_node: cdktf.stringToTerraform(struct!.toNode),
  }
}


export function escalationPathPathRepeatToHclTerraform(struct?: EscalationPathPathRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat_times: {
      value: cdktf.numberToHclTerraform(struct!.repeatTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_node: {
      value: cdktf.stringToHclTerraform(struct!.toNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathPathRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EscalationPathPathRepeat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatTimes = this._repeatTimes;
    }
    if (this._toNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNode = this._toNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPathRepeat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repeatTimes = undefined;
      this._toNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repeatTimes = value.repeatTimes;
      this._toNode = value.toNode;
    }
  }

  // repeat_times - computed: false, optional: false, required: true
  private _repeatTimes?: number; 
  public get repeatTimes() {
    return this.getNumberAttribute('repeat_times');
  }
  public set repeatTimes(value: number) {
    this._repeatTimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTimesInput() {
    return this._repeatTimes;
  }

  // to_node - computed: false, optional: false, required: true
  private _toNode?: string; 
  public get toNode() {
    return this.getStringAttribute('to_node');
  }
  public set toNode(value: string) {
    this._toNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodeInput() {
    return this._toNode;
  }
}
export interface EscalationPathPath {
  /**
  * An ID for this node, unique within the escalation path.
  * 
  * This allows you to reference the node in other nodes, such as when configuring a 'repeat' node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#if_else EscalationPath#if_else}
  */
  readonly ifElse?: EscalationPathPathIfElse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#level EscalationPath#level}
  */
  readonly level?: EscalationPathPathLevel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#notify_channel EscalationPath#notify_channel}
  */
  readonly notifyChannel?: EscalationPathPathNotifyChannel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#repeat EscalationPath#repeat}
  */
  readonly repeat?: EscalationPathPathRepeat;
  /**
  * The type of this node. Available types are:
  * * level: A set of targets (users or schedules) that should be paged, either all at once, or with a round-robin configuration.
  * * notify_channel: Send the escalation to a Slack channel, where it can be acked by anyone in the channel.
  * * if_else: Branch the escalation based on a set of conditions.
  * * repeat: Go back to a previous node and repeat the logic from there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#type EscalationPath#type}
  */
  readonly type: string;
}

export function escalationPathPathToTerraform(struct?: EscalationPathPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    if_else: escalationPathPathIfElseToTerraform(struct!.ifElse),
    level: escalationPathPathLevelToTerraform(struct!.level),
    notify_channel: escalationPathPathNotifyChannelToTerraform(struct!.notifyChannel),
    repeat: escalationPathPathRepeatToTerraform(struct!.repeat),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function escalationPathPathToHclTerraform(struct?: EscalationPathPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_else: {
      value: escalationPathPathIfElseToHclTerraform(struct!.ifElse),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathIfElse",
    },
    level: {
      value: escalationPathPathLevelToHclTerraform(struct!.level),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathLevel",
    },
    notify_channel: {
      value: escalationPathPathNotifyChannelToHclTerraform(struct!.notifyChannel),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathNotifyChannel",
    },
    repeat: {
      value: escalationPathPathRepeatToHclTerraform(struct!.repeat),
      isBlock: true,
      type: "struct",
      storageClassType: "EscalationPathPathRepeat",
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

export class EscalationPathPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ifElse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifElse = this._ifElse?.internalValue;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    if (this._notifyChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyChannel = this._notifyChannel?.internalValue;
    }
    if (this._repeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ifElse.internalValue = undefined;
      this._level.internalValue = undefined;
      this._notifyChannel.internalValue = undefined;
      this._repeat.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ifElse.internalValue = value.ifElse;
      this._level.internalValue = value.level;
      this._notifyChannel.internalValue = value.notifyChannel;
      this._repeat.internalValue = value.repeat;
      this._type = value.type;
    }
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

  // if_else - computed: false, optional: true, required: false
  private _ifElse = new EscalationPathPathIfElseOutputReference(this, "if_else");
  public get ifElse() {
    return this._ifElse;
  }
  public putIfElse(value: EscalationPathPathIfElse) {
    this._ifElse.internalValue = value;
  }
  public resetIfElse() {
    this._ifElse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifElseInput() {
    return this._ifElse.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new EscalationPathPathLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: EscalationPathPathLevel) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // notify_channel - computed: false, optional: true, required: false
  private _notifyChannel = new EscalationPathPathNotifyChannelOutputReference(this, "notify_channel");
  public get notifyChannel() {
    return this._notifyChannel;
  }
  public putNotifyChannel(value: EscalationPathPathNotifyChannel) {
    this._notifyChannel.internalValue = value;
  }
  public resetNotifyChannel() {
    this._notifyChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyChannelInput() {
    return this._notifyChannel.internalValue;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat = new EscalationPathPathRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }
  public putRepeat(value: EscalationPathPathRepeat) {
    this._repeat.internalValue = value;
  }
  public resetRepeat() {
    this._repeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat.internalValue;
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

export class EscalationPathPathList extends cdktf.ComplexList {
  public internalValue? : EscalationPathPath[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathPathOutputReference {
    return new EscalationPathPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathWorkingHoursWeekdayIntervals {
  /**
  * End time of the interval, in 24hr format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#end_time EscalationPath#end_time}
  */
  readonly endTime: string;
  /**
  * Start time of the interval, in 24hr format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#start_time EscalationPath#start_time}
  */
  readonly startTime: string;
  /**
  * Weekdays for use within a schedule or escalation path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#weekday EscalationPath#weekday}
  */
  readonly weekday: string;
}

export function escalationPathWorkingHoursWeekdayIntervalsToTerraform(struct?: EscalationPathWorkingHoursWeekdayIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}


export function escalationPathWorkingHoursWeekdayIntervalsToHclTerraform(struct?: EscalationPathWorkingHoursWeekdayIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekday: {
      value: cdktf.stringToHclTerraform(struct!.weekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathWorkingHoursWeekdayIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathWorkingHoursWeekdayIntervals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathWorkingHoursWeekdayIntervals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._weekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._weekday = value.weekday;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // weekday - computed: false, optional: false, required: true
  private _weekday?: string; 
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
  public set weekday(value: string) {
    this._weekday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}

export class EscalationPathWorkingHoursWeekdayIntervalsList extends cdktf.ComplexList {
  public internalValue? : EscalationPathWorkingHoursWeekdayIntervals[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathWorkingHoursWeekdayIntervalsOutputReference {
    return new EscalationPathWorkingHoursWeekdayIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationPathWorkingHours {
  /**
  * The unique identifier for this set of working intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#id EscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A human readable label for this set of working intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#name EscalationPath#name}
  */
  readonly name: string;
  /**
  * How to interpret all the intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#timezone EscalationPath#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#weekday_intervals EscalationPath#weekday_intervals}
  */
  readonly weekdayIntervals: EscalationPathWorkingHoursWeekdayIntervals[] | cdktf.IResolvable;
}

export function escalationPathWorkingHoursToTerraform(struct?: EscalationPathWorkingHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    weekday_intervals: cdktf.listMapper(escalationPathWorkingHoursWeekdayIntervalsToTerraform, false)(struct!.weekdayIntervals),
  }
}


export function escalationPathWorkingHoursToHclTerraform(struct?: EscalationPathWorkingHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekday_intervals: {
      value: cdktf.listMapperHcl(escalationPathWorkingHoursWeekdayIntervalsToHclTerraform, false)(struct!.weekdayIntervals),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationPathWorkingHoursWeekdayIntervalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPathWorkingHoursOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPathWorkingHours | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._weekdayIntervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdayIntervals = this._weekdayIntervals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPathWorkingHours | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._timezone = undefined;
      this._weekdayIntervals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._timezone = value.timezone;
      this._weekdayIntervals.internalValue = value.weekdayIntervals;
    }
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

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // weekday_intervals - computed: false, optional: false, required: true
  private _weekdayIntervals = new EscalationPathWorkingHoursWeekdayIntervalsList(this, "weekday_intervals", false);
  public get weekdayIntervals() {
    return this._weekdayIntervals;
  }
  public putWeekdayIntervals(value: EscalationPathWorkingHoursWeekdayIntervals[] | cdktf.IResolvable) {
    this._weekdayIntervals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayIntervalsInput() {
    return this._weekdayIntervals.internalValue;
  }
}

export class EscalationPathWorkingHoursList extends cdktf.ComplexList {
  public internalValue? : EscalationPathWorkingHours[] | cdktf.IResolvable

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
  public get(index: number): EscalationPathWorkingHoursOutputReference {
    return new EscalationPathWorkingHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path incident_escalation_path}
*/
export class EscalationPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_escalation_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationPath to import
  * @param importFromId The id of the existing EscalationPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_escalation_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.24.0/docs/resources/escalation_path incident_escalation_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPathConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPathConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_escalation_path',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.24.0',
        providerVersionConstraint: '5.24.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._path.internalValue = config.path;
    this._teamIds = config.teamIds;
    this._workingHours.internalValue = config.workingHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path - computed: false, optional: false, required: true
  private _path = new EscalationPathPathList(this, "path", false);
  public get path() {
    return this._path;
  }
  public putPath(value: EscalationPathPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // working_hours - computed: false, optional: true, required: false
  private _workingHours = new EscalationPathWorkingHoursList(this, "working_hours", false);
  public get workingHours() {
    return this._workingHours;
  }
  public putWorkingHours(value: EscalationPathWorkingHours[] | cdktf.IResolvable) {
    this._workingHours.internalValue = value;
  }
  public resetWorkingHours() {
    this._workingHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingHoursInput() {
    return this._workingHours.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.listMapper(escalationPathPathToTerraform, false)(this._path.internalValue),
      team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teamIds),
      working_hours: cdktf.listMapper(escalationPathWorkingHoursToTerraform, false)(this._workingHours.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.listMapperHcl(escalationPathPathToHclTerraform, false)(this._path.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPathPathList",
      },
      team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teamIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      working_hours: {
        value: cdktf.listMapperHcl(escalationPathWorkingHoursToHclTerraform, false)(this._workingHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPathWorkingHoursList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
