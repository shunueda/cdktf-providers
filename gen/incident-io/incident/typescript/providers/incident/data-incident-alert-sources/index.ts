// https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentAlertSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter alert sources by source type (e.g., 'webhook', 'email', 'jira'). If provided, only alert sources of this type will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_sources#source_type DataIncidentAlertSources#source_type}
  */
  readonly sourceType?: string;
}
export interface DataIncidentAlertSourcesAlertSourcesJiraOptions {
}

export function dataIncidentAlertSourcesAlertSourcesJiraOptionsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesJiraOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesJiraOptionsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesJiraOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesJiraOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesJiraOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesJiraOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_ids - computed: true, optional: false, required: false
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateAttributesBinding {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateAttributesBinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateAttributesBinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  private _arrayValue = new DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateAttributes {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateAttributesToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_attribute_id - computed: true, optional: false, required: false
  public get alertAttributeId() {
    return this.getStringAttribute('alert_attribute_id');
  }

  // binding - computed: true, optional: false, required: false
  private _binding = new DataIncidentAlertSourcesAlertSourcesTemplateAttributesBindingOutputReference(this, "binding");
  public get binding() {
    return this._binding;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateAttributesOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateDescription {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateDescriptionToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateDescriptionToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResult {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  private _arrayValue = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranch {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  private _arrayValue = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // param_bindings - computed: true, optional: false, required: false
  private _paramBindings = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroups {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResult {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  private _arrayValue = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranches {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_groups - computed: true, optional: false, required: false
  private _conditionGroups = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesConditionGroupsList(this, "condition_groups", true);
  public get conditionGroups() {
    return this._conditionGroups;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturns {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturnsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturnsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array - computed: true, optional: false, required: false
  public get array() {
    return this.getBooleanAttribute('array');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranches {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branches - computed: true, optional: false, required: false
  private _branches = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }

  // returns - computed: true, optional: false, required: false
  private _returns = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  private _arrayValue = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", true);
  public get arrayValue() {
    return this._arrayValue;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditions {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // param_bindings - computed: true, optional: false, required: false
  private _paramBindings = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroups {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilter {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_groups - computed: true, optional: false, required: false
  private _conditionGroups = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterConditionGroupsList(this, "condition_groups", true);
  public get conditionGroups() {
    return this._conditionGroups;
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigate {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigateToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigateToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturns {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturnsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturnsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array - computed: true, optional: false, required: false
  public get array() {
    return this.getBooleanAttribute('array');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParse {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // returns - computed: true, optional: false, required: false
  private _returns = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperations {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branches - computed: true, optional: false, required: false
  private _branches = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // navigate - computed: true, optional: false, required: false
  private _navigate = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsNavigateOutputReference(this, "navigate");
  public get navigate() {
    return this._navigate;
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // parse - computed: true, optional: false, required: false
  private _parse = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateExpressions {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateExpressionsToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // else_branch - computed: true, optional: false, required: false
  private _elseBranch = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsElseBranchOutputReference(this, "else_branch");
  public get elseBranch() {
    return this._elseBranch;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // operations - computed: true, optional: false, required: false
  private _operations = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // root_reference - computed: true, optional: false, required: false
  public get rootReference() {
    return this.getStringAttribute('root_reference');
  }
}

export class DataIncidentAlertSourcesAlertSourcesTemplateExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplateTitle {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateTitleToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateTitleToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplateTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplateTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplateTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentAlertSourcesAlertSourcesTemplate {
}

export function dataIncidentAlertSourcesAlertSourcesTemplateToTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesTemplateToHclTerraform(struct?: DataIncidentAlertSourcesAlertSourcesTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentAlertSourcesAlertSourcesTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSourcesTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataIncidentAlertSourcesAlertSourcesTemplateAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }

  // description - computed: true, optional: false, required: false
  private _description = new DataIncidentAlertSourcesAlertSourcesTemplateDescriptionOutputReference(this, "description");
  public get description() {
    return this._description;
  }

  // expressions - computed: true, optional: false, required: false
  private _expressions = new DataIncidentAlertSourcesAlertSourcesTemplateExpressionsList(this, "expressions", true);
  public get expressions() {
    return this._expressions;
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataIncidentAlertSourcesAlertSourcesTemplateTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
}
export interface DataIncidentAlertSourcesAlertSources {
}

export function dataIncidentAlertSourcesAlertSourcesToTerraform(struct?: DataIncidentAlertSourcesAlertSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentAlertSourcesAlertSourcesToHclTerraform(struct?: DataIncidentAlertSourcesAlertSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentAlertSourcesAlertSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentAlertSourcesAlertSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentAlertSourcesAlertSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jira_options - computed: true, optional: false, required: false
  private _jiraOptions = new DataIncidentAlertSourcesAlertSourcesJiraOptionsOutputReference(this, "jira_options");
  public get jiraOptions() {
    return this._jiraOptions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_token - computed: true, optional: false, required: false
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataIncidentAlertSourcesAlertSourcesTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
}

export class DataIncidentAlertSourcesAlertSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentAlertSourcesAlertSourcesOutputReference {
    return new DataIncidentAlertSourcesAlertSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_sources incident_alert_sources}
*/
export class DataIncidentAlertSources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_alert_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentAlertSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentAlertSources to import
  * @param importFromId The id of the existing DataIncidentAlertSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentAlertSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_alert_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_sources incident_alert_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentAlertSourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIncidentAlertSourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incident_alert_sources',
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
    this._sourceType = config.sourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_sources - computed: true, optional: false, required: false
  private _alertSources = new DataIncidentAlertSourcesAlertSourcesList(this, "alert_sources", false);
  public get alertSources() {
    return this._alertSources;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      source_type: cdktf.stringToTerraform(this._sourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
