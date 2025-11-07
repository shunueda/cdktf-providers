// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of workspace selections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#asset_selections Workspace#asset_selections}
  */
  readonly assetSelections: WorkspaceAssetSelections[] | cdktf.IResolvable;
  /**
  * Description of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#description Workspace#description}
  */
  readonly description?: string;
  /**
  * Name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#name Workspace#name}
  */
  readonly name: string;
  /**
  * Mondoo space identifier. If there is no ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#space_id Workspace#space_id}
  */
  readonly spaceId?: string;
}
export interface WorkspaceAssetSelectionsConditionsIntCondition {
  /**
  * Numeric field to match. Valid values: ["RISK_SCORE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#field Workspace#field}
  */
  readonly field: string;
  /**
  * Numeric operator. Valid values: ["EQUAL" "NOT_EQUAL" "GT" "LT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#operator Workspace#operator}
  */
  readonly operator: string;
  /**
  * Int values to match. Values are ORed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#values Workspace#values}
  */
  readonly values: number[];
}

export function workspaceAssetSelectionsConditionsIntConditionToTerraform(struct?: WorkspaceAssetSelectionsConditionsIntCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function workspaceAssetSelectionsConditionsIntConditionToHclTerraform(struct?: WorkspaceAssetSelectionsConditionsIntCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsConditionsIntConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAssetSelectionsConditionsIntCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAssetSelectionsConditionsIntCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface WorkspaceAssetSelectionsConditionsKeyValueConditionValues {
  /**
  * The key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#key Workspace#key}
  */
  readonly key: string;
  /**
  * The value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#value Workspace#value}
  */
  readonly value: string;
}

export function workspaceAssetSelectionsConditionsKeyValueConditionValuesToTerraform(struct?: WorkspaceAssetSelectionsConditionsKeyValueConditionValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function workspaceAssetSelectionsConditionsKeyValueConditionValuesToHclTerraform(struct?: WorkspaceAssetSelectionsConditionsKeyValueConditionValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsConditionsKeyValueConditionValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAssetSelectionsConditionsKeyValueConditionValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAssetSelectionsConditionsKeyValueConditionValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WorkspaceAssetSelectionsConditionsKeyValueConditionValuesList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAssetSelectionsConditionsKeyValueConditionValues[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAssetSelectionsConditionsKeyValueConditionValuesOutputReference {
    return new WorkspaceAssetSelectionsConditionsKeyValueConditionValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceAssetSelectionsConditionsKeyValueCondition {
  /**
  * key:value field to match. Valid values: ["LABELS" "ANNOTATIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#field Workspace#field}
  */
  readonly field: string;
  /**
  * Rating operator. Valid values: ["CONTAINS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#operator Workspace#operator}
  */
  readonly operator: string;
  /**
  * key:value list to match. Values are ORed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#values Workspace#values}
  */
  readonly values: WorkspaceAssetSelectionsConditionsKeyValueConditionValues[] | cdktf.IResolvable;
}

export function workspaceAssetSelectionsConditionsKeyValueConditionToTerraform(struct?: WorkspaceAssetSelectionsConditionsKeyValueCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(workspaceAssetSelectionsConditionsKeyValueConditionValuesToTerraform, false)(struct!.values),
  }
}


export function workspaceAssetSelectionsConditionsKeyValueConditionToHclTerraform(struct?: WorkspaceAssetSelectionsConditionsKeyValueCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(workspaceAssetSelectionsConditionsKeyValueConditionValuesToHclTerraform, false)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceAssetSelectionsConditionsKeyValueConditionValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsConditionsKeyValueConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAssetSelectionsConditionsKeyValueCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAssetSelectionsConditionsKeyValueCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._values.internalValue = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values = new WorkspaceAssetSelectionsConditionsKeyValueConditionValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: WorkspaceAssetSelectionsConditionsKeyValueConditionValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface WorkspaceAssetSelectionsConditionsRatingCondition {
  /**
  * Rating field to match. Valid values: ["RISK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#field Workspace#field}
  */
  readonly field: string;
  /**
  * Rating operator. Valid values: ["EQUAL" "NOT_EQUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#operator Workspace#operator}
  */
  readonly operator: string;
  /**
  * Int values to match. Values are ORed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#values Workspace#values}
  */
  readonly values: string[];
}

export function workspaceAssetSelectionsConditionsRatingConditionToTerraform(struct?: WorkspaceAssetSelectionsConditionsRatingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function workspaceAssetSelectionsConditionsRatingConditionToHclTerraform(struct?: WorkspaceAssetSelectionsConditionsRatingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsConditionsRatingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAssetSelectionsConditionsRatingCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAssetSelectionsConditionsRatingCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface WorkspaceAssetSelectionsConditionsStringCondition {
  /**
  * String field to match. Valid values: ["PLATFORM" "PLATFORM_VERSION" "ASSET_NAME" "ASSET_KIND" "TECHNOLOGY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#field Workspace#field}
  */
  readonly field: string;
  /**
  * String operator. Valid values: ["EQUAL" "NOT_EQUAL" "CONTAINS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#operator Workspace#operator}
  */
  readonly operator: string;
  /**
  * String values to match. Values are ORed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#values Workspace#values}
  */
  readonly values: string[];
}

export function workspaceAssetSelectionsConditionsStringConditionToTerraform(struct?: WorkspaceAssetSelectionsConditionsStringCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function workspaceAssetSelectionsConditionsStringConditionToHclTerraform(struct?: WorkspaceAssetSelectionsConditionsStringCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsConditionsStringConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceAssetSelectionsConditionsStringCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAssetSelectionsConditionsStringCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface WorkspaceAssetSelectionsConditions {
  /**
  * A condition with values of type int.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#int_condition Workspace#int_condition}
  */
  readonly intCondition?: WorkspaceAssetSelectionsConditionsIntCondition;
  /**
  * A condition with values of type key:value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#key_value_condition Workspace#key_value_condition}
  */
  readonly keyValueCondition?: WorkspaceAssetSelectionsConditionsKeyValueCondition;
  /**
  * Operator determining how the condition is joined with the other conditions in the list. Valid values: `AND`, `AND_NOT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#operator Workspace#operator}
  */
  readonly operator: string;
  /**
  * A condition with values of type int.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#rating_condition Workspace#rating_condition}
  */
  readonly ratingCondition?: WorkspaceAssetSelectionsConditionsRatingCondition;
  /**
  * A condition with values of type string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#string_condition Workspace#string_condition}
  */
  readonly stringCondition?: WorkspaceAssetSelectionsConditionsStringCondition;
}

export function workspaceAssetSelectionsConditionsToTerraform(struct?: WorkspaceAssetSelectionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_condition: workspaceAssetSelectionsConditionsIntConditionToTerraform(struct!.intCondition),
    key_value_condition: workspaceAssetSelectionsConditionsKeyValueConditionToTerraform(struct!.keyValueCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    rating_condition: workspaceAssetSelectionsConditionsRatingConditionToTerraform(struct!.ratingCondition),
    string_condition: workspaceAssetSelectionsConditionsStringConditionToTerraform(struct!.stringCondition),
  }
}


export function workspaceAssetSelectionsConditionsToHclTerraform(struct?: WorkspaceAssetSelectionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_condition: {
      value: workspaceAssetSelectionsConditionsIntConditionToHclTerraform(struct!.intCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceAssetSelectionsConditionsIntCondition",
    },
    key_value_condition: {
      value: workspaceAssetSelectionsConditionsKeyValueConditionToHclTerraform(struct!.keyValueCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceAssetSelectionsConditionsKeyValueCondition",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rating_condition: {
      value: workspaceAssetSelectionsConditionsRatingConditionToHclTerraform(struct!.ratingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceAssetSelectionsConditionsRatingCondition",
    },
    string_condition: {
      value: workspaceAssetSelectionsConditionsStringConditionToHclTerraform(struct!.stringCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceAssetSelectionsConditionsStringCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAssetSelectionsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intCondition = this._intCondition?.internalValue;
    }
    if (this._keyValueCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueCondition = this._keyValueCondition?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._ratingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratingCondition = this._ratingCondition?.internalValue;
    }
    if (this._stringCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringCondition = this._stringCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAssetSelectionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intCondition.internalValue = undefined;
      this._keyValueCondition.internalValue = undefined;
      this._operator = undefined;
      this._ratingCondition.internalValue = undefined;
      this._stringCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intCondition.internalValue = value.intCondition;
      this._keyValueCondition.internalValue = value.keyValueCondition;
      this._operator = value.operator;
      this._ratingCondition.internalValue = value.ratingCondition;
      this._stringCondition.internalValue = value.stringCondition;
    }
  }

  // int_condition - computed: false, optional: true, required: false
  private _intCondition = new WorkspaceAssetSelectionsConditionsIntConditionOutputReference(this, "int_condition");
  public get intCondition() {
    return this._intCondition;
  }
  public putIntCondition(value: WorkspaceAssetSelectionsConditionsIntCondition) {
    this._intCondition.internalValue = value;
  }
  public resetIntCondition() {
    this._intCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intConditionInput() {
    return this._intCondition.internalValue;
  }

  // key_value_condition - computed: false, optional: true, required: false
  private _keyValueCondition = new WorkspaceAssetSelectionsConditionsKeyValueConditionOutputReference(this, "key_value_condition");
  public get keyValueCondition() {
    return this._keyValueCondition;
  }
  public putKeyValueCondition(value: WorkspaceAssetSelectionsConditionsKeyValueCondition) {
    this._keyValueCondition.internalValue = value;
  }
  public resetKeyValueCondition() {
    this._keyValueCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueConditionInput() {
    return this._keyValueCondition.internalValue;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // rating_condition - computed: false, optional: true, required: false
  private _ratingCondition = new WorkspaceAssetSelectionsConditionsRatingConditionOutputReference(this, "rating_condition");
  public get ratingCondition() {
    return this._ratingCondition;
  }
  public putRatingCondition(value: WorkspaceAssetSelectionsConditionsRatingCondition) {
    this._ratingCondition.internalValue = value;
  }
  public resetRatingCondition() {
    this._ratingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratingConditionInput() {
    return this._ratingCondition.internalValue;
  }

  // string_condition - computed: false, optional: true, required: false
  private _stringCondition = new WorkspaceAssetSelectionsConditionsStringConditionOutputReference(this, "string_condition");
  public get stringCondition() {
    return this._stringCondition;
  }
  public putStringCondition(value: WorkspaceAssetSelectionsConditionsStringCondition) {
    this._stringCondition.internalValue = value;
  }
  public resetStringCondition() {
    this._stringCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConditionInput() {
    return this._stringCondition.internalValue;
  }
}

export class WorkspaceAssetSelectionsConditionsList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAssetSelectionsConditions[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAssetSelectionsConditionsOutputReference {
    return new WorkspaceAssetSelectionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceAssetSelections {
  /**
  * A list of conditions for the selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#conditions Workspace#conditions}
  */
  readonly conditions: WorkspaceAssetSelectionsConditions[] | cdktf.IResolvable;
}

export function workspaceAssetSelectionsToTerraform(struct?: WorkspaceAssetSelections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(workspaceAssetSelectionsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function workspaceAssetSelectionsToHclTerraform(struct?: WorkspaceAssetSelections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(workspaceAssetSelectionsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceAssetSelectionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAssetSelectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAssetSelections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceAssetSelections | cdktf.IResolvable | undefined) {
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
  private _conditions = new WorkspaceAssetSelectionsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WorkspaceAssetSelectionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WorkspaceAssetSelectionsList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAssetSelections[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAssetSelectionsOutputReference {
    return new WorkspaceAssetSelectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace mondoo_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/workspace mondoo_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_workspace',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetSelections.internalValue = config.assetSelections;
    this._description = config.description;
    this._name = config.name;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_selections - computed: false, optional: false, required: true
  private _assetSelections = new WorkspaceAssetSelectionsList(this, "asset_selections", false);
  public get assetSelections() {
    return this._assetSelections;
  }
  public putAssetSelections(value: WorkspaceAssetSelections[] | cdktf.IResolvable) {
    this._assetSelections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSelectionsInput() {
    return this._assetSelections.internalValue;
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

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_selections: cdktf.listMapper(workspaceAssetSelectionsToTerraform, false)(this._assetSelections.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_selections: {
        value: cdktf.listMapperHcl(workspaceAssetSelectionsToHclTerraform, false)(this._assetSelections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceAssetSelectionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
