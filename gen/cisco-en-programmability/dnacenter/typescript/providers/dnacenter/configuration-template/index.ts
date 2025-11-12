// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#parameters ConfigurationTemplate#parameters}
  */
  readonly parameters?: ConfigurationTemplateParameters[] | cdktf.IResolvable;
}
export interface ConfigurationTemplateItemContainingTemplatesDeviceTypes {
}

export function configurationTemplateItemContainingTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesDeviceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesDeviceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // product_family - computed: true, optional: false, required: false
  public get productFamily() {
    return this.getStringAttribute('product_family');
  }

  // product_series - computed: true, optional: false, required: false
  public get productSeries() {
    return this.getStringAttribute('product_series');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }
}

export class ConfigurationTemplateItemContainingTemplatesDeviceTypesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange {
}

export function configurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}

export class ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection {
}

export function configurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_selected_values - computed: true, optional: false, required: false
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }

  // selection_values - computed: true, optional: false, required: false
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
}

export class ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesRollbackTemplateParams {
}

export function configurationTemplateItemContainingTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesRollbackTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesRollbackTemplateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // custom_order - computed: true, optional: false, required: false
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instruction_text - computed: true, optional: false, required: false
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // not_param - computed: true, optional: false, required: false
  public get notParam() {
    return this.getStringAttribute('not_param');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // param_array - computed: true, optional: false, required: false
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // range - computed: true, optional: false, required: false
  private _range = new ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesTags {
}

export function configurationTemplateItemContainingTemplatesTagsToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class ConfigurationTemplateItemContainingTemplatesTagsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesTagsOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesTemplateParamsRange {
}

export function configurationTemplateItemContainingTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesTemplateParamsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}

export class ConfigurationTemplateItemContainingTemplatesTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesTemplateParamsSelection {
}

export function configurationTemplateItemContainingTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_selected_values - computed: true, optional: false, required: false
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }

  // selection_values - computed: true, optional: false, required: false
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
}

export class ConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplatesTemplateParams {
}

export function configurationTemplateItemContainingTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplatesTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplatesTemplateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // custom_order - computed: true, optional: false, required: false
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instruction_text - computed: true, optional: false, required: false
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // not_param - computed: true, optional: false, required: false
  public get notParam() {
    return this.getStringAttribute('not_param');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // param_array - computed: true, optional: false, required: false
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // range - computed: true, optional: false, required: false
  private _range = new ConfigurationTemplateItemContainingTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateItemContainingTemplatesTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemContainingTemplates {
}

export function configurationTemplateItemContainingTemplatesToTerraform(struct?: ConfigurationTemplateItemContainingTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemContainingTemplatesToHclTerraform(struct?: ConfigurationTemplateItemContainingTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemContainingTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemContainingTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite - computed: true, optional: false, required: false
  public get composite() {
    return this.getStringAttribute('composite');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  private _deviceTypes = new ConfigurationTemplateItemContainingTemplatesDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // rollback_template_params - computed: true, optional: false, required: false
  private _rollbackTemplateParams = new ConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new ConfigurationTemplateItemContainingTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_content - computed: true, optional: false, required: false
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }

  // template_params - computed: true, optional: false, required: false
  private _templateParams = new ConfigurationTemplateItemContainingTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ConfigurationTemplateItemContainingTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemContainingTemplatesOutputReference {
    return new ConfigurationTemplateItemContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemDeviceTypes {
}

export function configurationTemplateItemDeviceTypesToTerraform(struct?: ConfigurationTemplateItemDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemDeviceTypesToHclTerraform(struct?: ConfigurationTemplateItemDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemDeviceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemDeviceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // product_family - computed: true, optional: false, required: false
  public get productFamily() {
    return this.getStringAttribute('product_family');
  }

  // product_series - computed: true, optional: false, required: false
  public get productSeries() {
    return this.getStringAttribute('product_series');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }
}

export class ConfigurationTemplateItemDeviceTypesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemDeviceTypesOutputReference {
    return new ConfigurationTemplateItemDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemRollbackTemplateParamsRange {
}

export function configurationTemplateItemRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateItemRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateItemRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemRollbackTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemRollbackTemplateParamsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}

export class ConfigurationTemplateItemRollbackTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateItemRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemRollbackTemplateParamsSelection {
}

export function configurationTemplateItemRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateItemRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateItemRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemRollbackTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemRollbackTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_selected_values - computed: true, optional: false, required: false
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }

  // selection_values - computed: true, optional: false, required: false
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
}

export class ConfigurationTemplateItemRollbackTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateItemRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemRollbackTemplateParams {
}

export function configurationTemplateItemRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateItemRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateItemRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemRollbackTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemRollbackTemplateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // custom_order - computed: true, optional: false, required: false
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instruction_text - computed: true, optional: false, required: false
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // not_param - computed: true, optional: false, required: false
  public get notParam() {
    return this.getStringAttribute('not_param');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // param_array - computed: true, optional: false, required: false
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // range - computed: true, optional: false, required: false
  private _range = new ConfigurationTemplateItemRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateItemRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateItemRollbackTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateItemRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemTags {
}

export function configurationTemplateItemTagsToTerraform(struct?: ConfigurationTemplateItemTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemTagsToHclTerraform(struct?: ConfigurationTemplateItemTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class ConfigurationTemplateItemTagsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemTagsOutputReference {
    return new ConfigurationTemplateItemTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemTemplateParamsRange {
}

export function configurationTemplateItemTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateItemTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateItemTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemTemplateParamsRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}

export class ConfigurationTemplateItemTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateItemTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemTemplateParamsSelection {
}

export function configurationTemplateItemTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateItemTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateItemTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_selected_values - computed: true, optional: false, required: false
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }

  // selection_values - computed: true, optional: false, required: false
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
}

export class ConfigurationTemplateItemTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateItemTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemTemplateParams {
}

export function configurationTemplateItemTemplateParamsToTerraform(struct?: ConfigurationTemplateItemTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemTemplateParamsToHclTerraform(struct?: ConfigurationTemplateItemTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemTemplateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding - computed: true, optional: false, required: false
  public get binding() {
    return this.getStringAttribute('binding');
  }

  // custom_order - computed: true, optional: false, required: false
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instruction_text - computed: true, optional: false, required: false
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // not_param - computed: true, optional: false, required: false
  public get notParam() {
    return this.getStringAttribute('not_param');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // param_array - computed: true, optional: false, required: false
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // range - computed: true, optional: false, required: false
  private _range = new ConfigurationTemplateItemTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateItemTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateItemTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemTemplateParamsOutputReference {
    return new ConfigurationTemplateItemTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItemValidationErrors {
}

export function configurationTemplateItemValidationErrorsToTerraform(struct?: ConfigurationTemplateItemValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemValidationErrorsToHclTerraform(struct?: ConfigurationTemplateItemValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemValidationErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItemValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItemValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rollback_template_errors - computed: true, optional: false, required: false
  public get rollbackTemplateErrors() {
    return this.getStringAttribute('rollback_template_errors');
  }

  // template_errors - computed: true, optional: false, required: false
  public get templateErrors() {
    return this.getStringAttribute('template_errors');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // template_version - computed: true, optional: false, required: false
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }
}

export class ConfigurationTemplateItemValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemValidationErrorsOutputReference {
    return new ConfigurationTemplateItemValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateItem {
}

export function configurationTemplateItemToTerraform(struct?: ConfigurationTemplateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateItemToHclTerraform(struct?: ConfigurationTemplateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // composite - computed: true, optional: false, required: false
  public get composite() {
    return this.getStringAttribute('composite');
  }

  // containing_templates - computed: true, optional: false, required: false
  private _containingTemplates = new ConfigurationTemplateItemContainingTemplatesList(this, "containing_templates", false);
  public get containingTemplates() {
    return this._containingTemplates;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // custom_params_order - computed: true, optional: false, required: false
  public get customParamsOrder() {
    return this.getStringAttribute('custom_params_order');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  private _deviceTypes = new ConfigurationTemplateItemDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }

  // failure_policy - computed: true, optional: false, required: false
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // latest_version_time - computed: true, optional: false, required: false
  public get latestVersionTime() {
    return this.getNumberAttribute('latest_version_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_template_id - computed: true, optional: false, required: false
  public get parentTemplateId() {
    return this.getStringAttribute('parent_template_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // rollback_template_content - computed: true, optional: false, required: false
  public get rollbackTemplateContent() {
    return this.getStringAttribute('rollback_template_content');
  }

  // rollback_template_params - computed: true, optional: false, required: false
  private _rollbackTemplateParams = new ConfigurationTemplateItemRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }

  // software_type - computed: true, optional: false, required: false
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }

  // software_variant - computed: true, optional: false, required: false
  public get softwareVariant() {
    return this.getStringAttribute('software_variant');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new ConfigurationTemplateItemTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_content - computed: true, optional: false, required: false
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }

  // template_params - computed: true, optional: false, required: false
  private _templateParams = new ConfigurationTemplateItemTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }

  // validation_errors - computed: true, optional: false, required: false
  private _validationErrors = new ConfigurationTemplateItemValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ConfigurationTemplateItemList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateItemOutputReference {
    return new ConfigurationTemplateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesDeviceTypes {
  /**
  * Device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#product_family ConfigurationTemplate#product_family}
  */
  readonly productFamily?: string;
  /**
  * Device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#product_series ConfigurationTemplate#product_series}
  */
  readonly productSeries?: string;
  /**
  * Device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#product_type ConfigurationTemplate#product_type}
  */
  readonly productType?: string;
}

export function configurationTemplateParametersContainingTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesDeviceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_family: cdktf.stringToTerraform(struct!.productFamily),
    product_series: cdktf.stringToTerraform(struct!.productSeries),
    product_type: cdktf.stringToTerraform(struct!.productType),
  }
}


export function configurationTemplateParametersContainingTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesDeviceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_family: {
      value: cdktf.stringToHclTerraform(struct!.productFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_series: {
      value: cdktf.stringToHclTerraform(struct!.productSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_type: {
      value: cdktf.stringToHclTerraform(struct!.productType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesDeviceTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._productFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.productFamily = this._productFamily;
    }
    if (this._productSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSeries = this._productSeries;
    }
    if (this._productType !== undefined) {
      hasAnyValues = true;
      internalValueResult.productType = this._productType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesDeviceTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._productFamily = undefined;
      this._productSeries = undefined;
      this._productType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._productFamily = value.productFamily;
      this._productSeries = value.productSeries;
      this._productType = value.productType;
    }
  }

  // product_family - computed: true, optional: true, required: false
  private _productFamily?: string; 
  public get productFamily() {
    return this.getStringAttribute('product_family');
  }
  public set productFamily(value: string) {
    this._productFamily = value;
  }
  public resetProductFamily() {
    this._productFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFamilyInput() {
    return this._productFamily;
  }

  // product_series - computed: true, optional: true, required: false
  private _productSeries?: string; 
  public get productSeries() {
    return this.getStringAttribute('product_series');
  }
  public set productSeries(value: string) {
    this._productSeries = value;
  }
  public resetProductSeries() {
    this._productSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSeriesInput() {
    return this._productSeries;
  }

  // product_type - computed: true, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#max_value ConfigurationTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#min_value ConfigurationTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function configurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
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

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_selected_values ConfigurationTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_type ConfigurationTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_values ConfigurationTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.stringToTerraform(struct!.selectionValues),
  }
}


export function configurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_selected_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSelectedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_values: {
      value: cdktf.stringToHclTerraform(struct!.selectionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSelectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSelectedValues = this._defaultSelectedValues;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    if (this._selectionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionValues = this._selectionValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: true, optional: true, required: false
  private _defaultSelectedValues?: string[]; 
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }
  public set defaultSelectedValues(value: string[]) {
    this._defaultSelectedValues = value;
  }
  public resetDefaultSelectedValues() {
    this._defaultSelectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSelectedValuesInput() {
    return this._defaultSelectedValues;
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

  // selection_type - computed: true, optional: true, required: false
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // selection_values - computed: true, optional: true, required: false
  private _selectionValues?: string; 
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
  public set selectionValues(value: string) {
    this._selectionValues = value;
  }
  public resetSelectionValues() {
    this._selectionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionValuesInput() {
    return this._selectionValues;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#binding ConfigurationTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#custom_order ConfigurationTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#data_type ConfigurationTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_value ConfigurationTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#description ConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#display_name ConfigurationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#group ConfigurationTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#instruction_text ConfigurationTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#key ConfigurationTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#not_param ConfigurationTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#order ConfigurationTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#param_array ConfigurationTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#parameter_name ConfigurationTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#provider ConfigurationTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#required ConfigurationTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#range ConfigurationTemplate#range}
  */
  readonly range?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection ConfigurationTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateParametersContainingTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    custom_order: cdktf.numberToTerraform(struct!.customOrder),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    instruction_text: cdktf.stringToTerraform(struct!.instructionText),
    key: cdktf.stringToTerraform(struct!.key),
    not_param: cdktf.stringToTerraform(struct!.notParam),
    order: cdktf.numberToTerraform(struct!.order),
    param_array: cdktf.stringToTerraform(struct!.paramArray),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    provider: cdktf.stringToTerraform(struct!.provider),
    required: cdktf.stringToTerraform(struct!.required),
    range: cdktf.listMapper(configurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateParametersContainingTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_order: {
      value: cdktf.numberToHclTerraform(struct!.customOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    instruction_text: {
      value: cdktf.stringToHclTerraform(struct!.instructionText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_param: {
      value: cdktf.stringToHclTerraform(struct!.notParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_array: {
      value: cdktf.stringToHclTerraform(struct!.paramArray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._customOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOrder = this._customOrder;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructionText !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructionText = this._instructionText;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._notParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.notParam = this._notParam;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._paramArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramArray = this._paramArray;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._selection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._customOrder = undefined;
      this._dataType = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._group = undefined;
      this._id = undefined;
      this._instructionText = undefined;
      this._key = undefined;
      this._notParam = undefined;
      this._order = undefined;
      this._paramArray = undefined;
      this._parameterName = undefined;
      this._provider = undefined;
      this._required = undefined;
      this._range.internalValue = undefined;
      this._selection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._customOrder = value.customOrder;
      this._dataType = value.dataType;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._displayName = value.displayName;
      this._group = value.group;
      this._id = value.id;
      this._instructionText = value.instructionText;
      this._key = value.key;
      this._notParam = value.notParam;
      this._order = value.order;
      this._paramArray = value.paramArray;
      this._parameterName = value.parameterName;
      this._provider = value.provider;
      this._required = value.required;
      this._range.internalValue = value.range;
      this._selection.internalValue = value.selection;
    }
  }

  // binding - computed: true, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // custom_order - computed: true, optional: true, required: false
  private _customOrder?: number; 
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }
  public set customOrder(value: number) {
    this._customOrder = value;
  }
  public resetCustomOrder() {
    this._customOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOrderInput() {
    return this._customOrder;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // instruction_text - computed: true, optional: true, required: false
  private _instructionText?: string; 
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }
  public set instructionText(value: string) {
    this._instructionText = value;
  }
  public resetInstructionText() {
    this._instructionText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionTextInput() {
    return this._instructionText;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // not_param - computed: true, optional: true, required: false
  private _notParam?: string; 
  public get notParam() {
    return this.getStringAttribute('not_param');
  }
  public set notParam(value: string) {
    this._notParam = value;
  }
  public resetNotParam() {
    this._notParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notParamInput() {
    return this._notParam;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // param_array - computed: true, optional: true, required: false
  private _paramArray?: string; 
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }
  public set paramArray(value: string) {
    this._paramArray = value;
  }
  public resetParamArray() {
    this._paramArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramArrayInput() {
    return this._paramArray;
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // range - computed: false, optional: true, required: false
  private _range = new ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // selection - computed: false, optional: true, required: false
  private _selection = new ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsSelection[] | cdktf.IResolvable) {
    this._selection.internalValue = value;
  }
  public resetSelection() {
    this._selection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection.internalValue;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#name ConfigurationTemplate#name}
  */
  readonly name?: string;
}

export function configurationTemplateParametersContainingTemplatesTagsToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateParametersContainingTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesTags | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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

  // name - computed: true, optional: true, required: false
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
}

export class ConfigurationTemplateParametersContainingTemplatesTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesTagsOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#max_value ConfigurationTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#min_value ConfigurationTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateParametersContainingTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function configurationTemplateParametersContainingTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
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

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_selected_values ConfigurationTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_type ConfigurationTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_values ConfigurationTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateParametersContainingTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.stringToTerraform(struct!.selectionValues),
  }
}


export function configurationTemplateParametersContainingTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_selected_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSelectedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_values: {
      value: cdktf.stringToHclTerraform(struct!.selectionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSelectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSelectedValues = this._defaultSelectedValues;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    if (this._selectionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionValues = this._selectionValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: true, optional: true, required: false
  private _defaultSelectedValues?: string[]; 
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }
  public set defaultSelectedValues(value: string[]) {
    this._defaultSelectedValues = value;
  }
  public resetDefaultSelectedValues() {
    this._defaultSelectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSelectedValuesInput() {
    return this._defaultSelectedValues;
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

  // selection_type - computed: true, optional: true, required: false
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // selection_values - computed: true, optional: true, required: false
  private _selectionValues?: string; 
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
  public set selectionValues(value: string) {
    this._selectionValues = value;
  }
  public resetSelectionValues() {
    this._selectionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionValuesInput() {
    return this._selectionValues;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplatesTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#binding ConfigurationTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#custom_order ConfigurationTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#data_type ConfigurationTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_value ConfigurationTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#description ConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#display_name ConfigurationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#group ConfigurationTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#instruction_text ConfigurationTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#key ConfigurationTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#not_param ConfigurationTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#order ConfigurationTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#param_array ConfigurationTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#parameter_name ConfigurationTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#provider ConfigurationTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#required ConfigurationTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#range ConfigurationTemplate#range}
  */
  readonly range?: ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection ConfigurationTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateParametersContainingTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    custom_order: cdktf.numberToTerraform(struct!.customOrder),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    instruction_text: cdktf.stringToTerraform(struct!.instructionText),
    key: cdktf.stringToTerraform(struct!.key),
    not_param: cdktf.stringToTerraform(struct!.notParam),
    order: cdktf.numberToTerraform(struct!.order),
    param_array: cdktf.stringToTerraform(struct!.paramArray),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    provider: cdktf.stringToTerraform(struct!.provider),
    required: cdktf.stringToTerraform(struct!.required),
    range: cdktf.listMapper(configurationTemplateParametersContainingTemplatesTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateParametersContainingTemplatesTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateParametersContainingTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplatesTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_order: {
      value: cdktf.numberToHclTerraform(struct!.customOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    instruction_text: {
      value: cdktf.stringToHclTerraform(struct!.instructionText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_param: {
      value: cdktf.stringToHclTerraform(struct!.notParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_array: {
      value: cdktf.stringToHclTerraform(struct!.paramArray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplatesTemplateParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._customOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOrder = this._customOrder;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructionText !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructionText = this._instructionText;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._notParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.notParam = this._notParam;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._paramArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramArray = this._paramArray;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._selection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplatesTemplateParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._customOrder = undefined;
      this._dataType = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._group = undefined;
      this._id = undefined;
      this._instructionText = undefined;
      this._key = undefined;
      this._notParam = undefined;
      this._order = undefined;
      this._paramArray = undefined;
      this._parameterName = undefined;
      this._provider = undefined;
      this._required = undefined;
      this._range.internalValue = undefined;
      this._selection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._customOrder = value.customOrder;
      this._dataType = value.dataType;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._displayName = value.displayName;
      this._group = value.group;
      this._id = value.id;
      this._instructionText = value.instructionText;
      this._key = value.key;
      this._notParam = value.notParam;
      this._order = value.order;
      this._paramArray = value.paramArray;
      this._parameterName = value.parameterName;
      this._provider = value.provider;
      this._required = value.required;
      this._range.internalValue = value.range;
      this._selection.internalValue = value.selection;
    }
  }

  // binding - computed: true, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // custom_order - computed: true, optional: true, required: false
  private _customOrder?: number; 
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }
  public set customOrder(value: number) {
    this._customOrder = value;
  }
  public resetCustomOrder() {
    this._customOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOrderInput() {
    return this._customOrder;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // instruction_text - computed: true, optional: true, required: false
  private _instructionText?: string; 
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }
  public set instructionText(value: string) {
    this._instructionText = value;
  }
  public resetInstructionText() {
    this._instructionText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionTextInput() {
    return this._instructionText;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // not_param - computed: true, optional: true, required: false
  private _notParam?: string; 
  public get notParam() {
    return this.getStringAttribute('not_param');
  }
  public set notParam(value: string) {
    this._notParam = value;
  }
  public resetNotParam() {
    this._notParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notParamInput() {
    return this._notParam;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // param_array - computed: true, optional: true, required: false
  private _paramArray?: string; 
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }
  public set paramArray(value: string) {
    this._paramArray = value;
  }
  public resetParamArray() {
    this._paramArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramArrayInput() {
    return this._paramArray;
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // range - computed: false, optional: true, required: false
  private _range = new ConfigurationTemplateParametersContainingTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateParametersContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // selection - computed: false, optional: true, required: false
  private _selection = new ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateParametersContainingTemplatesTemplateParamsSelection[] | cdktf.IResolvable) {
    this._selection.internalValue = value;
  }
  public resetSelection() {
    this._selection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection.internalValue;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplatesTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersContainingTemplates {
  /**
  * Is it composite template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#composite ConfigurationTemplate#composite}
  */
  readonly composite?: string;
  /**
  * Description of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#description ConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template language (JINJA or VELOCITY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#language ConfigurationTemplate#language}
  */
  readonly language?: string;
  /**
  * Name of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#name ConfigurationTemplate#name}
  */
  readonly name?: string;
  /**
  * Project name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#project_name ConfigurationTemplate#project_name}
  */
  readonly projectName?: string;
  /**
  * Template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_content ConfigurationTemplate#template_content}
  */
  readonly templateContent?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#version ConfigurationTemplate#version}
  */
  readonly version?: string;
  /**
  * device_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#device_types ConfigurationTemplate#device_types}
  */
  readonly deviceTypes?: ConfigurationTemplateParametersContainingTemplatesDeviceTypes[] | cdktf.IResolvable;
  /**
  * rollback_template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#rollback_template_params ConfigurationTemplate#rollback_template_params}
  */
  readonly rollbackTemplateParams?: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#tags ConfigurationTemplate#tags}
  */
  readonly tags?: ConfigurationTemplateParametersContainingTemplatesTags[] | cdktf.IResolvable;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_params ConfigurationTemplate#template_params}
  */
  readonly templateParams?: ConfigurationTemplateParametersContainingTemplatesTemplateParams[] | cdktf.IResolvable;
}

export function configurationTemplateParametersContainingTemplatesToTerraform(struct?: ConfigurationTemplateParametersContainingTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    composite: cdktf.stringToTerraform(struct!.composite),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    language: cdktf.stringToTerraform(struct!.language),
    name: cdktf.stringToTerraform(struct!.name),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    template_content: cdktf.stringToTerraform(struct!.templateContent),
    version: cdktf.stringToTerraform(struct!.version),
    device_types: cdktf.listMapper(configurationTemplateParametersContainingTemplatesDeviceTypesToTerraform, true)(struct!.deviceTypes),
    rollback_template_params: cdktf.listMapper(configurationTemplateParametersContainingTemplatesRollbackTemplateParamsToTerraform, true)(struct!.rollbackTemplateParams),
    tags: cdktf.listMapper(configurationTemplateParametersContainingTemplatesTagsToTerraform, true)(struct!.tags),
    template_params: cdktf.listMapper(configurationTemplateParametersContainingTemplatesTemplateParamsToTerraform, true)(struct!.templateParams),
  }
}


export function configurationTemplateParametersContainingTemplatesToHclTerraform(struct?: ConfigurationTemplateParametersContainingTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    composite: {
      value: cdktf.stringToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
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
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_content: {
      value: cdktf.stringToHclTerraform(struct!.templateContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_types: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesDeviceTypesToHclTerraform, true)(struct!.deviceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesDeviceTypesList",
    },
    rollback_template_params: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesRollbackTemplateParamsToHclTerraform, true)(struct!.rollbackTemplateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsList",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesTagsList",
    },
    template_params: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesTemplateParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersContainingTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._templateContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateContent = this._templateContent;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._deviceTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypes = this._deviceTypes?.internalValue;
    }
    if (this._rollbackTemplateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackTemplateParams = this._rollbackTemplateParams?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._templateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateParams = this._templateParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersContainingTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._composite = undefined;
      this._description = undefined;
      this._id = undefined;
      this._language = undefined;
      this._name = undefined;
      this._projectName = undefined;
      this._templateContent = undefined;
      this._version = undefined;
      this._deviceTypes.internalValue = undefined;
      this._rollbackTemplateParams.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._templateParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._composite = value.composite;
      this._description = value.description;
      this._id = value.id;
      this._language = value.language;
      this._name = value.name;
      this._projectName = value.projectName;
      this._templateContent = value.templateContent;
      this._version = value.version;
      this._deviceTypes.internalValue = value.deviceTypes;
      this._rollbackTemplateParams.internalValue = value.rollbackTemplateParams;
      this._tags.internalValue = value.tags;
      this._templateParams.internalValue = value.templateParams;
    }
  }

  // composite - computed: true, optional: true, required: false
  private _composite?: string; 
  public get composite() {
    return this.getStringAttribute('composite');
  }
  public set composite(value: string) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
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

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // template_content - computed: true, optional: true, required: false
  private _templateContent?: string; 
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string) {
    this._templateContent = value;
  }
  public resetTemplateContent() {
    this._templateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // device_types - computed: false, optional: true, required: false
  private _deviceTypes = new ConfigurationTemplateParametersContainingTemplatesDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: ConfigurationTemplateParametersContainingTemplatesDeviceTypes[] | cdktf.IResolvable) {
    this._deviceTypes.internalValue = value;
  }
  public resetDeviceTypes() {
    this._deviceTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes.internalValue;
  }

  // rollback_template_params - computed: false, optional: true, required: false
  private _rollbackTemplateParams = new ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }
  public putRollbackTemplateParams(value: ConfigurationTemplateParametersContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable) {
    this._rollbackTemplateParams.internalValue = value;
  }
  public resetRollbackTemplateParams() {
    this._rollbackTemplateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTemplateParamsInput() {
    return this._rollbackTemplateParams.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ConfigurationTemplateParametersContainingTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateParametersContainingTemplatesTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // template_params - computed: false, optional: true, required: false
  private _templateParams = new ConfigurationTemplateParametersContainingTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: ConfigurationTemplateParametersContainingTemplatesTemplateParams[] | cdktf.IResolvable) {
    this._templateParams.internalValue = value;
  }
  public resetTemplateParams() {
    this._templateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParamsInput() {
    return this._templateParams.internalValue;
  }
}

export class ConfigurationTemplateParametersContainingTemplatesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersContainingTemplates[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersContainingTemplatesOutputReference {
    return new ConfigurationTemplateParametersContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersDeviceTypes {
  /**
  * Device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#product_family ConfigurationTemplate#product_family}
  */
  readonly productFamily?: string;
  /**
  * Device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#product_series ConfigurationTemplate#product_series}
  */
  readonly productSeries?: string;
  /**
  * Device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#product_type ConfigurationTemplate#product_type}
  */
  readonly productType?: string;
}

export function configurationTemplateParametersDeviceTypesToTerraform(struct?: ConfigurationTemplateParametersDeviceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_family: cdktf.stringToTerraform(struct!.productFamily),
    product_series: cdktf.stringToTerraform(struct!.productSeries),
    product_type: cdktf.stringToTerraform(struct!.productType),
  }
}


export function configurationTemplateParametersDeviceTypesToHclTerraform(struct?: ConfigurationTemplateParametersDeviceTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_family: {
      value: cdktf.stringToHclTerraform(struct!.productFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_series: {
      value: cdktf.stringToHclTerraform(struct!.productSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_type: {
      value: cdktf.stringToHclTerraform(struct!.productType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersDeviceTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._productFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.productFamily = this._productFamily;
    }
    if (this._productSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSeries = this._productSeries;
    }
    if (this._productType !== undefined) {
      hasAnyValues = true;
      internalValueResult.productType = this._productType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersDeviceTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._productFamily = undefined;
      this._productSeries = undefined;
      this._productType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._productFamily = value.productFamily;
      this._productSeries = value.productSeries;
      this._productType = value.productType;
    }
  }

  // product_family - computed: true, optional: true, required: false
  private _productFamily?: string; 
  public get productFamily() {
    return this.getStringAttribute('product_family');
  }
  public set productFamily(value: string) {
    this._productFamily = value;
  }
  public resetProductFamily() {
    this._productFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFamilyInput() {
    return this._productFamily;
  }

  // product_series - computed: true, optional: true, required: false
  private _productSeries?: string; 
  public get productSeries() {
    return this.getStringAttribute('product_series');
  }
  public set productSeries(value: string) {
    this._productSeries = value;
  }
  public resetProductSeries() {
    this._productSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSeriesInput() {
    return this._productSeries;
  }

  // product_type - computed: true, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }
}

export class ConfigurationTemplateParametersDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersDeviceTypesOutputReference {
    return new ConfigurationTemplateParametersDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersRollbackTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#max_value ConfigurationTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#min_value ConfigurationTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateParametersRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateParametersRollbackTemplateParamsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function configurationTemplateParametersRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateParametersRollbackTemplateParamsRange | cdktf.IResolvable): any {
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
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersRollbackTemplateParamsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersRollbackTemplateParamsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
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

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class ConfigurationTemplateParametersRollbackTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersRollbackTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateParametersRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersRollbackTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_selected_values ConfigurationTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_type ConfigurationTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_values ConfigurationTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateParametersRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateParametersRollbackTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.stringToTerraform(struct!.selectionValues),
  }
}


export function configurationTemplateParametersRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateParametersRollbackTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_selected_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSelectedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_values: {
      value: cdktf.stringToHclTerraform(struct!.selectionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersRollbackTemplateParamsSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSelectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSelectedValues = this._defaultSelectedValues;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    if (this._selectionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionValues = this._selectionValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersRollbackTemplateParamsSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: true, optional: true, required: false
  private _defaultSelectedValues?: string[]; 
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }
  public set defaultSelectedValues(value: string[]) {
    this._defaultSelectedValues = value;
  }
  public resetDefaultSelectedValues() {
    this._defaultSelectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSelectedValuesInput() {
    return this._defaultSelectedValues;
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

  // selection_type - computed: true, optional: true, required: false
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // selection_values - computed: true, optional: true, required: false
  private _selectionValues?: string; 
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
  public set selectionValues(value: string) {
    this._selectionValues = value;
  }
  public resetSelectionValues() {
    this._selectionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionValuesInput() {
    return this._selectionValues;
  }
}

export class ConfigurationTemplateParametersRollbackTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersRollbackTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateParametersRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersRollbackTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#binding ConfigurationTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#custom_order ConfigurationTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#data_type ConfigurationTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_value ConfigurationTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#description ConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#display_name ConfigurationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#group ConfigurationTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#instruction_text ConfigurationTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#key ConfigurationTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#not_param ConfigurationTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#order ConfigurationTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#param_array ConfigurationTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#parameter_name ConfigurationTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#provider ConfigurationTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#required ConfigurationTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#range ConfigurationTemplate#range}
  */
  readonly range?: ConfigurationTemplateParametersRollbackTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection ConfigurationTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateParametersRollbackTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateParametersRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateParametersRollbackTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    custom_order: cdktf.numberToTerraform(struct!.customOrder),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    instruction_text: cdktf.stringToTerraform(struct!.instructionText),
    key: cdktf.stringToTerraform(struct!.key),
    not_param: cdktf.stringToTerraform(struct!.notParam),
    order: cdktf.numberToTerraform(struct!.order),
    param_array: cdktf.stringToTerraform(struct!.paramArray),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    provider: cdktf.stringToTerraform(struct!.provider),
    required: cdktf.stringToTerraform(struct!.required),
    range: cdktf.listMapper(configurationTemplateParametersRollbackTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateParametersRollbackTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateParametersRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateParametersRollbackTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_order: {
      value: cdktf.numberToHclTerraform(struct!.customOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    instruction_text: {
      value: cdktf.stringToHclTerraform(struct!.instructionText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_param: {
      value: cdktf.stringToHclTerraform(struct!.notParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_array: {
      value: cdktf.stringToHclTerraform(struct!.paramArray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(configurationTemplateParametersRollbackTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersRollbackTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateParametersRollbackTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersRollbackTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersRollbackTemplateParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._customOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOrder = this._customOrder;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructionText !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructionText = this._instructionText;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._notParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.notParam = this._notParam;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._paramArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramArray = this._paramArray;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._selection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersRollbackTemplateParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._customOrder = undefined;
      this._dataType = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._group = undefined;
      this._id = undefined;
      this._instructionText = undefined;
      this._key = undefined;
      this._notParam = undefined;
      this._order = undefined;
      this._paramArray = undefined;
      this._parameterName = undefined;
      this._provider = undefined;
      this._required = undefined;
      this._range.internalValue = undefined;
      this._selection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._customOrder = value.customOrder;
      this._dataType = value.dataType;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._displayName = value.displayName;
      this._group = value.group;
      this._id = value.id;
      this._instructionText = value.instructionText;
      this._key = value.key;
      this._notParam = value.notParam;
      this._order = value.order;
      this._paramArray = value.paramArray;
      this._parameterName = value.parameterName;
      this._provider = value.provider;
      this._required = value.required;
      this._range.internalValue = value.range;
      this._selection.internalValue = value.selection;
    }
  }

  // binding - computed: true, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // custom_order - computed: true, optional: true, required: false
  private _customOrder?: number; 
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }
  public set customOrder(value: number) {
    this._customOrder = value;
  }
  public resetCustomOrder() {
    this._customOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOrderInput() {
    return this._customOrder;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // instruction_text - computed: true, optional: true, required: false
  private _instructionText?: string; 
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }
  public set instructionText(value: string) {
    this._instructionText = value;
  }
  public resetInstructionText() {
    this._instructionText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionTextInput() {
    return this._instructionText;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // not_param - computed: true, optional: true, required: false
  private _notParam?: string; 
  public get notParam() {
    return this.getStringAttribute('not_param');
  }
  public set notParam(value: string) {
    this._notParam = value;
  }
  public resetNotParam() {
    this._notParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notParamInput() {
    return this._notParam;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // param_array - computed: true, optional: true, required: false
  private _paramArray?: string; 
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }
  public set paramArray(value: string) {
    this._paramArray = value;
  }
  public resetParamArray() {
    this._paramArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramArrayInput() {
    return this._paramArray;
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // range - computed: false, optional: true, required: false
  private _range = new ConfigurationTemplateParametersRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateParametersRollbackTemplateParamsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // selection - computed: false, optional: true, required: false
  private _selection = new ConfigurationTemplateParametersRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateParametersRollbackTemplateParamsSelection[] | cdktf.IResolvable) {
    this._selection.internalValue = value;
  }
  public resetSelection() {
    this._selection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection.internalValue;
  }
}

export class ConfigurationTemplateParametersRollbackTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersRollbackTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateParametersRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#name ConfigurationTemplate#name}
  */
  readonly name?: string;
}

export function configurationTemplateParametersTagsToTerraform(struct?: ConfigurationTemplateParametersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateParametersTagsToHclTerraform(struct?: ConfigurationTemplateParametersTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersTags | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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

  // name - computed: true, optional: true, required: false
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
}

export class ConfigurationTemplateParametersTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersTagsOutputReference {
    return new ConfigurationTemplateParametersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#max_value ConfigurationTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#min_value ConfigurationTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateParametersTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateParametersTemplateParamsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function configurationTemplateParametersTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateParametersTemplateParamsRange | cdktf.IResolvable): any {
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
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersTemplateParamsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersTemplateParamsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
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

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class ConfigurationTemplateParametersTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateParametersTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_selected_values ConfigurationTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_type ConfigurationTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection_values ConfigurationTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateParametersTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateParametersTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.stringToTerraform(struct!.selectionValues),
  }
}


export function configurationTemplateParametersTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateParametersTemplateParamsSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_selected_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSelectedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_values: {
      value: cdktf.stringToHclTerraform(struct!.selectionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersTemplateParamsSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSelectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSelectedValues = this._defaultSelectedValues;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    if (this._selectionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionValues = this._selectionValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersTemplateParamsSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: true, optional: true, required: false
  private _defaultSelectedValues?: string[]; 
  public get defaultSelectedValues() {
    return this.getListAttribute('default_selected_values');
  }
  public set defaultSelectedValues(value: string[]) {
    this._defaultSelectedValues = value;
  }
  public resetDefaultSelectedValues() {
    this._defaultSelectedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSelectedValuesInput() {
    return this._defaultSelectedValues;
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

  // selection_type - computed: true, optional: true, required: false
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // selection_values - computed: true, optional: true, required: false
  private _selectionValues?: string; 
  public get selectionValues() {
    return this.getStringAttribute('selection_values');
  }
  public set selectionValues(value: string) {
    this._selectionValues = value;
  }
  public resetSelectionValues() {
    this._selectionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionValuesInput() {
    return this._selectionValues;
  }
}

export class ConfigurationTemplateParametersTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateParametersTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#binding ConfigurationTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#custom_order ConfigurationTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#data_type ConfigurationTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#default_value ConfigurationTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#description ConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#display_name ConfigurationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#group ConfigurationTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#instruction_text ConfigurationTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#key ConfigurationTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#not_param ConfigurationTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#order ConfigurationTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#param_array ConfigurationTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#parameter_name ConfigurationTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#provider ConfigurationTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#required ConfigurationTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#range ConfigurationTemplate#range}
  */
  readonly range?: ConfigurationTemplateParametersTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#selection ConfigurationTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateParametersTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateParametersTemplateParamsToTerraform(struct?: ConfigurationTemplateParametersTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    custom_order: cdktf.numberToTerraform(struct!.customOrder),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    instruction_text: cdktf.stringToTerraform(struct!.instructionText),
    key: cdktf.stringToTerraform(struct!.key),
    not_param: cdktf.stringToTerraform(struct!.notParam),
    order: cdktf.numberToTerraform(struct!.order),
    param_array: cdktf.stringToTerraform(struct!.paramArray),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    provider: cdktf.stringToTerraform(struct!.provider),
    required: cdktf.stringToTerraform(struct!.required),
    range: cdktf.listMapper(configurationTemplateParametersTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateParametersTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateParametersTemplateParamsToHclTerraform(struct?: ConfigurationTemplateParametersTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: cdktf.stringToHclTerraform(struct!.binding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_order: {
      value: cdktf.numberToHclTerraform(struct!.customOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    instruction_text: {
      value: cdktf.stringToHclTerraform(struct!.instructionText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_param: {
      value: cdktf.stringToHclTerraform(struct!.notParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param_array: {
      value: cdktf.stringToHclTerraform(struct!.paramArray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(configurationTemplateParametersTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateParametersTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersTemplateParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._customOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOrder = this._customOrder;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructionText !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructionText = this._instructionText;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._notParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.notParam = this._notParam;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._paramArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramArray = this._paramArray;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._selection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersTemplateParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._customOrder = undefined;
      this._dataType = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._group = undefined;
      this._id = undefined;
      this._instructionText = undefined;
      this._key = undefined;
      this._notParam = undefined;
      this._order = undefined;
      this._paramArray = undefined;
      this._parameterName = undefined;
      this._provider = undefined;
      this._required = undefined;
      this._range.internalValue = undefined;
      this._selection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding = value.binding;
      this._customOrder = value.customOrder;
      this._dataType = value.dataType;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._displayName = value.displayName;
      this._group = value.group;
      this._id = value.id;
      this._instructionText = value.instructionText;
      this._key = value.key;
      this._notParam = value.notParam;
      this._order = value.order;
      this._paramArray = value.paramArray;
      this._parameterName = value.parameterName;
      this._provider = value.provider;
      this._required = value.required;
      this._range.internalValue = value.range;
      this._selection.internalValue = value.selection;
    }
  }

  // binding - computed: true, optional: true, required: false
  private _binding?: string; 
  public get binding() {
    return this.getStringAttribute('binding');
  }
  public set binding(value: string) {
    this._binding = value;
  }
  public resetBinding() {
    this._binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding;
  }

  // custom_order - computed: true, optional: true, required: false
  private _customOrder?: number; 
  public get customOrder() {
    return this.getNumberAttribute('custom_order');
  }
  public set customOrder(value: number) {
    this._customOrder = value;
  }
  public resetCustomOrder() {
    this._customOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOrderInput() {
    return this._customOrder;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // instruction_text - computed: true, optional: true, required: false
  private _instructionText?: string; 
  public get instructionText() {
    return this.getStringAttribute('instruction_text');
  }
  public set instructionText(value: string) {
    this._instructionText = value;
  }
  public resetInstructionText() {
    this._instructionText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionTextInput() {
    return this._instructionText;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // not_param - computed: true, optional: true, required: false
  private _notParam?: string; 
  public get notParam() {
    return this.getStringAttribute('not_param');
  }
  public set notParam(value: string) {
    this._notParam = value;
  }
  public resetNotParam() {
    this._notParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notParamInput() {
    return this._notParam;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // param_array - computed: true, optional: true, required: false
  private _paramArray?: string; 
  public get paramArray() {
    return this.getStringAttribute('param_array');
  }
  public set paramArray(value: string) {
    this._paramArray = value;
  }
  public resetParamArray() {
    this._paramArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramArrayInput() {
    return this._paramArray;
  }

  // parameter_name - computed: true, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // range - computed: false, optional: true, required: false
  private _range = new ConfigurationTemplateParametersTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateParametersTemplateParamsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // selection - computed: false, optional: true, required: false
  private _selection = new ConfigurationTemplateParametersTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateParametersTemplateParamsSelection[] | cdktf.IResolvable) {
    this._selection.internalValue = value;
  }
  public resetSelection() {
    this._selection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection.internalValue;
  }
}

export class ConfigurationTemplateParametersTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersTemplateParamsOutputReference {
    return new ConfigurationTemplateParametersTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParametersValidationErrors {
  /**
  * Validation or design conflicts errors of rollback template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#rollback_template_errors ConfigurationTemplate#rollback_template_errors}
  */
  readonly rollbackTemplateErrors?: string;
  /**
  * Validation or design conflicts errors
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_errors ConfigurationTemplate#template_errors}
  */
  readonly templateErrors?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_id ConfigurationTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_version ConfigurationTemplate#template_version}
  */
  readonly templateVersion?: string;
}

export function configurationTemplateParametersValidationErrorsToTerraform(struct?: ConfigurationTemplateParametersValidationErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollback_template_errors: cdktf.stringToTerraform(struct!.rollbackTemplateErrors),
    template_errors: cdktf.stringToTerraform(struct!.templateErrors),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    template_version: cdktf.stringToTerraform(struct!.templateVersion),
  }
}


export function configurationTemplateParametersValidationErrorsToHclTerraform(struct?: ConfigurationTemplateParametersValidationErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollback_template_errors: {
      value: cdktf.stringToHclTerraform(struct!.rollbackTemplateErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_errors: {
      value: cdktf.stringToHclTerraform(struct!.templateErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_version: {
      value: cdktf.stringToHclTerraform(struct!.templateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersValidationErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParametersValidationErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollbackTemplateErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackTemplateErrors = this._rollbackTemplateErrors;
    }
    if (this._templateErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateErrors = this._templateErrors;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._templateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVersion = this._templateVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParametersValidationErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollbackTemplateErrors = undefined;
      this._templateErrors = undefined;
      this._templateId = undefined;
      this._templateVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollbackTemplateErrors = value.rollbackTemplateErrors;
      this._templateErrors = value.templateErrors;
      this._templateId = value.templateId;
      this._templateVersion = value.templateVersion;
    }
  }

  // rollback_template_errors - computed: true, optional: true, required: false
  private _rollbackTemplateErrors?: string; 
  public get rollbackTemplateErrors() {
    return this.getStringAttribute('rollback_template_errors');
  }
  public set rollbackTemplateErrors(value: string) {
    this._rollbackTemplateErrors = value;
  }
  public resetRollbackTemplateErrors() {
    this._rollbackTemplateErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTemplateErrorsInput() {
    return this._rollbackTemplateErrors;
  }

  // template_errors - computed: true, optional: true, required: false
  private _templateErrors?: string; 
  public get templateErrors() {
    return this.getStringAttribute('template_errors');
  }
  public set templateErrors(value: string) {
    this._templateErrors = value;
  }
  public resetTemplateErrors() {
    this._templateErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateErrorsInput() {
    return this._templateErrors;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_version - computed: true, optional: true, required: false
  private _templateVersion?: string; 
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }
  public set templateVersion(value: string) {
    this._templateVersion = value;
  }
  public resetTemplateVersion() {
    this._templateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion;
  }
}

export class ConfigurationTemplateParametersValidationErrorsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParametersValidationErrors[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersValidationErrorsOutputReference {
    return new ConfigurationTemplateParametersValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateParameters {
  /**
  * Author of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#author ConfigurationTemplate#author}
  */
  readonly author?: string;
  /**
  * Is it composite template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#composite ConfigurationTemplate#composite}
  */
  readonly composite?: string;
  /**
  * Create time of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#create_time ConfigurationTemplate#create_time}
  */
  readonly createTime?: number;
  /**
  * Custom Params Order
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#custom_params_order ConfigurationTemplate#custom_params_order}
  */
  readonly customParamsOrder?: string;
  /**
  * Description of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#description ConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * Define failure policy if template provisioning fails
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#failure_policy ConfigurationTemplate#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#id ConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template language (JINJA or VELOCITY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#language ConfigurationTemplate#language}
  */
  readonly language?: string;
  /**
  * Update time of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#last_update_time ConfigurationTemplate#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Latest versioned template time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#latest_version_time ConfigurationTemplate#latest_version_time}
  */
  readonly latestVersionTime?: number;
  /**
  * Name of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#name ConfigurationTemplate#name}
  */
  readonly name?: string;
  /**
  * Parent templateID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#parent_template_id ConfigurationTemplate#parent_template_id}
  */
  readonly parentTemplateId?: string;
  /**
  * Project UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#project_id ConfigurationTemplate#project_id}
  */
  readonly projectId: string;
  /**
  * Project name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#project_name ConfigurationTemplate#project_name}
  */
  readonly projectName?: string;
  /**
  * Rollback template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#rollback_template_content ConfigurationTemplate#rollback_template_content}
  */
  readonly rollbackTemplateContent?: string;
  /**
  * Applicable device software type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#software_type ConfigurationTemplate#software_type}
  */
  readonly softwareType?: string;
  /**
  * Applicable device software variant
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#software_variant ConfigurationTemplate#software_variant}
  */
  readonly softwareVariant?: string;
  /**
  * Applicable device software version
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#software_version ConfigurationTemplate#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_content ConfigurationTemplate#template_content}
  */
  readonly templateContent?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#version ConfigurationTemplate#version}
  */
  readonly version?: string;
  /**
  * containing_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#containing_templates ConfigurationTemplate#containing_templates}
  */
  readonly containingTemplates?: ConfigurationTemplateParametersContainingTemplates[] | cdktf.IResolvable;
  /**
  * device_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#device_types ConfigurationTemplate#device_types}
  */
  readonly deviceTypes?: ConfigurationTemplateParametersDeviceTypes[] | cdktf.IResolvable;
  /**
  * rollback_template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#rollback_template_params ConfigurationTemplate#rollback_template_params}
  */
  readonly rollbackTemplateParams?: ConfigurationTemplateParametersRollbackTemplateParams[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#tags ConfigurationTemplate#tags}
  */
  readonly tags?: ConfigurationTemplateParametersTags[] | cdktf.IResolvable;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#template_params ConfigurationTemplate#template_params}
  */
  readonly templateParams?: ConfigurationTemplateParametersTemplateParams[] | cdktf.IResolvable;
  /**
  * validation_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#validation_errors ConfigurationTemplate#validation_errors}
  */
  readonly validationErrors?: ConfigurationTemplateParametersValidationErrors[] | cdktf.IResolvable;
}

export function configurationTemplateParametersToTerraform(struct?: ConfigurationTemplateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author: cdktf.stringToTerraform(struct!.author),
    composite: cdktf.stringToTerraform(struct!.composite),
    create_time: cdktf.numberToTerraform(struct!.createTime),
    custom_params_order: cdktf.stringToTerraform(struct!.customParamsOrder),
    description: cdktf.stringToTerraform(struct!.description),
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    id: cdktf.stringToTerraform(struct!.id),
    language: cdktf.stringToTerraform(struct!.language),
    last_update_time: cdktf.numberToTerraform(struct!.lastUpdateTime),
    latest_version_time: cdktf.numberToTerraform(struct!.latestVersionTime),
    name: cdktf.stringToTerraform(struct!.name),
    parent_template_id: cdktf.stringToTerraform(struct!.parentTemplateId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    rollback_template_content: cdktf.stringToTerraform(struct!.rollbackTemplateContent),
    software_type: cdktf.stringToTerraform(struct!.softwareType),
    software_variant: cdktf.stringToTerraform(struct!.softwareVariant),
    software_version: cdktf.stringToTerraform(struct!.softwareVersion),
    template_content: cdktf.stringToTerraform(struct!.templateContent),
    version: cdktf.stringToTerraform(struct!.version),
    containing_templates: cdktf.listMapper(configurationTemplateParametersContainingTemplatesToTerraform, true)(struct!.containingTemplates),
    device_types: cdktf.listMapper(configurationTemplateParametersDeviceTypesToTerraform, true)(struct!.deviceTypes),
    rollback_template_params: cdktf.listMapper(configurationTemplateParametersRollbackTemplateParamsToTerraform, true)(struct!.rollbackTemplateParams),
    tags: cdktf.listMapper(configurationTemplateParametersTagsToTerraform, true)(struct!.tags),
    template_params: cdktf.listMapper(configurationTemplateParametersTemplateParamsToTerraform, true)(struct!.templateParams),
    validation_errors: cdktf.listMapper(configurationTemplateParametersValidationErrorsToTerraform, true)(struct!.validationErrors),
  }
}


export function configurationTemplateParametersToHclTerraform(struct?: ConfigurationTemplateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author: {
      value: cdktf.stringToHclTerraform(struct!.author),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    composite: {
      value: cdktf.stringToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.numberToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_params_order: {
      value: cdktf.stringToHclTerraform(struct!.customParamsOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_policy: {
      value: cdktf.stringToHclTerraform(struct!.failurePolicy),
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
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_update_time: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latest_version_time: {
      value: cdktf.numberToHclTerraform(struct!.latestVersionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_template_id: {
      value: cdktf.stringToHclTerraform(struct!.parentTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback_template_content: {
      value: cdktf.stringToHclTerraform(struct!.rollbackTemplateContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_type: {
      value: cdktf.stringToHclTerraform(struct!.softwareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_variant: {
      value: cdktf.stringToHclTerraform(struct!.softwareVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_version: {
      value: cdktf.stringToHclTerraform(struct!.softwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_content: {
      value: cdktf.stringToHclTerraform(struct!.templateContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containing_templates: {
      value: cdktf.listMapperHcl(configurationTemplateParametersContainingTemplatesToHclTerraform, true)(struct!.containingTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersContainingTemplatesList",
    },
    device_types: {
      value: cdktf.listMapperHcl(configurationTemplateParametersDeviceTypesToHclTerraform, true)(struct!.deviceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersDeviceTypesList",
    },
    rollback_template_params: {
      value: cdktf.listMapperHcl(configurationTemplateParametersRollbackTemplateParamsToHclTerraform, true)(struct!.rollbackTemplateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersRollbackTemplateParamsList",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateParametersTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersTagsList",
    },
    template_params: {
      value: cdktf.listMapperHcl(configurationTemplateParametersTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersTemplateParamsList",
    },
    validation_errors: {
      value: cdktf.listMapperHcl(configurationTemplateParametersValidationErrorsToHclTerraform, true)(struct!.validationErrors),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateParametersValidationErrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._author !== undefined) {
      hasAnyValues = true;
      internalValueResult.author = this._author;
    }
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._customParamsOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParamsOrder = this._customParamsOrder;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._lastUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdateTime = this._lastUpdateTime;
    }
    if (this._latestVersionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestVersionTime = this._latestVersionTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentTemplateId = this._parentTemplateId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._rollbackTemplateContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackTemplateContent = this._rollbackTemplateContent;
    }
    if (this._softwareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareType = this._softwareType;
    }
    if (this._softwareVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVariant = this._softwareVariant;
    }
    if (this._softwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareVersion = this._softwareVersion;
    }
    if (this._templateContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateContent = this._templateContent;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._containingTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containingTemplates = this._containingTemplates?.internalValue;
    }
    if (this._deviceTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypes = this._deviceTypes?.internalValue;
    }
    if (this._rollbackTemplateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackTemplateParams = this._rollbackTemplateParams?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._templateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateParams = this._templateParams?.internalValue;
    }
    if (this._validationErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationErrors = this._validationErrors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._author = undefined;
      this._composite = undefined;
      this._createTime = undefined;
      this._customParamsOrder = undefined;
      this._description = undefined;
      this._failurePolicy = undefined;
      this._id = undefined;
      this._language = undefined;
      this._lastUpdateTime = undefined;
      this._latestVersionTime = undefined;
      this._name = undefined;
      this._parentTemplateId = undefined;
      this._projectId = undefined;
      this._projectName = undefined;
      this._rollbackTemplateContent = undefined;
      this._softwareType = undefined;
      this._softwareVariant = undefined;
      this._softwareVersion = undefined;
      this._templateContent = undefined;
      this._version = undefined;
      this._containingTemplates.internalValue = undefined;
      this._deviceTypes.internalValue = undefined;
      this._rollbackTemplateParams.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._templateParams.internalValue = undefined;
      this._validationErrors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._author = value.author;
      this._composite = value.composite;
      this._createTime = value.createTime;
      this._customParamsOrder = value.customParamsOrder;
      this._description = value.description;
      this._failurePolicy = value.failurePolicy;
      this._id = value.id;
      this._language = value.language;
      this._lastUpdateTime = value.lastUpdateTime;
      this._latestVersionTime = value.latestVersionTime;
      this._name = value.name;
      this._parentTemplateId = value.parentTemplateId;
      this._projectId = value.projectId;
      this._projectName = value.projectName;
      this._rollbackTemplateContent = value.rollbackTemplateContent;
      this._softwareType = value.softwareType;
      this._softwareVariant = value.softwareVariant;
      this._softwareVersion = value.softwareVersion;
      this._templateContent = value.templateContent;
      this._version = value.version;
      this._containingTemplates.internalValue = value.containingTemplates;
      this._deviceTypes.internalValue = value.deviceTypes;
      this._rollbackTemplateParams.internalValue = value.rollbackTemplateParams;
      this._tags.internalValue = value.tags;
      this._templateParams.internalValue = value.templateParams;
      this._validationErrors.internalValue = value.validationErrors;
    }
  }

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // composite - computed: true, optional: true, required: false
  private _composite?: string; 
  public get composite() {
    return this.getStringAttribute('composite');
  }
  public set composite(value: string) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: number; 
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }
  public set createTime(value: number) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // custom_params_order - computed: true, optional: true, required: false
  private _customParamsOrder?: string; 
  public get customParamsOrder() {
    return this.getStringAttribute('custom_params_order');
  }
  public set customParamsOrder(value: string) {
    this._customParamsOrder = value;
  }
  public resetCustomParamsOrder() {
    this._customParamsOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParamsOrderInput() {
    return this._customParamsOrder;
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

  // failure_policy - computed: true, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
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

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // last_update_time - computed: true, optional: true, required: false
  private _lastUpdateTime?: number; 
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }
  public set lastUpdateTime(value: number) {
    this._lastUpdateTime = value;
  }
  public resetLastUpdateTime() {
    this._lastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
  }

  // latest_version_time - computed: true, optional: true, required: false
  private _latestVersionTime?: number; 
  public get latestVersionTime() {
    return this.getNumberAttribute('latest_version_time');
  }
  public set latestVersionTime(value: number) {
    this._latestVersionTime = value;
  }
  public resetLatestVersionTime() {
    this._latestVersionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestVersionTimeInput() {
    return this._latestVersionTime;
  }

  // name - computed: true, optional: true, required: false
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

  // parent_template_id - computed: true, optional: true, required: false
  private _parentTemplateId?: string; 
  public get parentTemplateId() {
    return this.getStringAttribute('parent_template_id');
  }
  public set parentTemplateId(value: string) {
    this._parentTemplateId = value;
  }
  public resetParentTemplateId() {
    this._parentTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTemplateIdInput() {
    return this._parentTemplateId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // rollback_template_content - computed: true, optional: true, required: false
  private _rollbackTemplateContent?: string; 
  public get rollbackTemplateContent() {
    return this.getStringAttribute('rollback_template_content');
  }
  public set rollbackTemplateContent(value: string) {
    this._rollbackTemplateContent = value;
  }
  public resetRollbackTemplateContent() {
    this._rollbackTemplateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTemplateContentInput() {
    return this._rollbackTemplateContent;
  }

  // software_type - computed: true, optional: true, required: false
  private _softwareType?: string; 
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }
  public set softwareType(value: string) {
    this._softwareType = value;
  }
  public resetSoftwareType() {
    this._softwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTypeInput() {
    return this._softwareType;
  }

  // software_variant - computed: true, optional: true, required: false
  private _softwareVariant?: string; 
  public get softwareVariant() {
    return this.getStringAttribute('software_variant');
  }
  public set softwareVariant(value: string) {
    this._softwareVariant = value;
  }
  public resetSoftwareVariant() {
    this._softwareVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVariantInput() {
    return this._softwareVariant;
  }

  // software_version - computed: true, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // template_content - computed: true, optional: true, required: false
  private _templateContent?: string; 
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }
  public set templateContent(value: string) {
    this._templateContent = value;
  }
  public resetTemplateContent() {
    this._templateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateContentInput() {
    return this._templateContent;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // containing_templates - computed: false, optional: true, required: false
  private _containingTemplates = new ConfigurationTemplateParametersContainingTemplatesList(this, "containing_templates", false);
  public get containingTemplates() {
    return this._containingTemplates;
  }
  public putContainingTemplates(value: ConfigurationTemplateParametersContainingTemplates[] | cdktf.IResolvable) {
    this._containingTemplates.internalValue = value;
  }
  public resetContainingTemplates() {
    this._containingTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containingTemplatesInput() {
    return this._containingTemplates.internalValue;
  }

  // device_types - computed: false, optional: true, required: false
  private _deviceTypes = new ConfigurationTemplateParametersDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: ConfigurationTemplateParametersDeviceTypes[] | cdktf.IResolvable) {
    this._deviceTypes.internalValue = value;
  }
  public resetDeviceTypes() {
    this._deviceTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes.internalValue;
  }

  // rollback_template_params - computed: false, optional: true, required: false
  private _rollbackTemplateParams = new ConfigurationTemplateParametersRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }
  public putRollbackTemplateParams(value: ConfigurationTemplateParametersRollbackTemplateParams[] | cdktf.IResolvable) {
    this._rollbackTemplateParams.internalValue = value;
  }
  public resetRollbackTemplateParams() {
    this._rollbackTemplateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTemplateParamsInput() {
    return this._rollbackTemplateParams.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ConfigurationTemplateParametersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateParametersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // template_params - computed: false, optional: true, required: false
  private _templateParams = new ConfigurationTemplateParametersTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: ConfigurationTemplateParametersTemplateParams[] | cdktf.IResolvable) {
    this._templateParams.internalValue = value;
  }
  public resetTemplateParams() {
    this._templateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParamsInput() {
    return this._templateParams.internalValue;
  }

  // validation_errors - computed: false, optional: true, required: false
  private _validationErrors = new ConfigurationTemplateParametersValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }
  public putValidationErrors(value: ConfigurationTemplateParametersValidationErrors[] | cdktf.IResolvable) {
    this._validationErrors.internalValue = value;
  }
  public resetValidationErrors() {
    this._validationErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationErrorsInput() {
    return this._validationErrors.internalValue;
  }
}

export class ConfigurationTemplateParametersList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateParameters[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateParametersOutputReference {
    return new ConfigurationTemplateParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template dnacenter_configuration_template}
*/
export class ConfigurationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationTemplate to import
  * @param importFromId The id of the existing ConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template dnacenter_configuration_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigurationTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new ConfigurationTemplateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ConfigurationTemplateParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConfigurationTemplateParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(configurationTemplateParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(configurationTemplateParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigurationTemplateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
