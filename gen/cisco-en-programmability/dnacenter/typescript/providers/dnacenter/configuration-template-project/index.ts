// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationTemplateProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#parameters ConfigurationTemplateProject#parameters}
  */
  readonly parameters: ConfigurationTemplateProjectParameters;
}
export interface ConfigurationTemplateProjectItemTags {
}

export function configurationTemplateProjectItemTagsToTerraform(struct?: ConfigurationTemplateProjectItemTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTagsToHclTerraform(struct?: ConfigurationTemplateProjectItemTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTags | undefined) {
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

export class ConfigurationTemplateProjectItemTagsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTagsOutputReference {
    return new ConfigurationTemplateProjectItemTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypes {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypes | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRange {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRange | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelection {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelection | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParams {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParams | undefined) {
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
  private _range = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesTags {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesTagsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTags | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTagsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTagsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRange {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRange | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelection {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelection | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParams {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParams | undefined) {
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
  private _range = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesContainingTemplates {
}

export function configurationTemplateProjectItemTemplatesContainingTemplatesToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesContainingTemplatesToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesContainingTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesContainingTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesContainingTemplates | undefined) {
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
  private _deviceTypes = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesDeviceTypesList(this, "device_types", false);
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
  private _rollbackTemplateParams = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_content - computed: true, optional: false, required: false
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }

  // template_params - computed: true, optional: false, required: false
  private _templateParams = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ConfigurationTemplateProjectItemTemplatesContainingTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesContainingTemplatesOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesDeviceTypes {
}

export function configurationTemplateProjectItemTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesDeviceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesDeviceTypes | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesDeviceTypesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRange {
}

export function configurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRange | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelection {
}

export function configurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelection | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesRollbackTemplateParams {
}

export function configurationTemplateProjectItemTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesRollbackTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesRollbackTemplateParams | undefined) {
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
  private _range = new ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesTags {
}

export function configurationTemplateProjectItemTemplatesTagsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesTags | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesTagsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesTagsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesTemplateParamsRange {
}

export function configurationTemplateProjectItemTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesTemplateParamsRange | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesTemplateParamsSelection {
}

export function configurationTemplateProjectItemTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesTemplateParamsSelection | undefined) {
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

export class ConfigurationTemplateProjectItemTemplatesTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesTemplateParams {
}

export function configurationTemplateProjectItemTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesTemplateParams | undefined) {
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
  private _range = new ConfigurationTemplateProjectItemTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new ConfigurationTemplateProjectItemTemplatesTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class ConfigurationTemplateProjectItemTemplatesTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplatesValidationErrors {
}

export function configurationTemplateProjectItemTemplatesValidationErrorsToTerraform(struct?: ConfigurationTemplateProjectItemTemplatesValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesValidationErrorsToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplatesValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesValidationErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplatesValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplatesValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rollback_template_errors - computed: true, optional: false, required: false
  public get rollbackTemplateErrors() {
    return this.getListAttribute('rollback_template_errors');
  }

  // template_errors - computed: true, optional: false, required: false
  public get templateErrors() {
    return this.getListAttribute('template_errors');
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

export class ConfigurationTemplateProjectItemTemplatesValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesValidationErrorsOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItemTemplates {
}

export function configurationTemplateProjectItemTemplatesToTerraform(struct?: ConfigurationTemplateProjectItemTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemTemplatesToHclTerraform(struct?: ConfigurationTemplateProjectItemTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItemTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItemTemplates | undefined) {
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
  private _containingTemplates = new ConfigurationTemplateProjectItemTemplatesContainingTemplatesList(this, "containing_templates", false);
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
  private _deviceTypes = new ConfigurationTemplateProjectItemTemplatesDeviceTypesList(this, "device_types", false);
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
  private _rollbackTemplateParams = new ConfigurationTemplateProjectItemTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
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
  private _tags = new ConfigurationTemplateProjectItemTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_content - computed: true, optional: false, required: false
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }

  // template_params - computed: true, optional: false, required: false
  private _templateParams = new ConfigurationTemplateProjectItemTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }

  // validation_errors - computed: true, optional: false, required: false
  private _validationErrors = new ConfigurationTemplateProjectItemTemplatesValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ConfigurationTemplateProjectItemTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemTemplatesOutputReference {
    return new ConfigurationTemplateProjectItemTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectItem {
}

export function configurationTemplateProjectItemToTerraform(struct?: ConfigurationTemplateProjectItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateProjectItemToHclTerraform(struct?: ConfigurationTemplateProjectItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateProjectItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_deletable - computed: true, optional: false, required: false
  public get isDeletable() {
    return this.getStringAttribute('is_deletable');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new ConfigurationTemplateProjectItemTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // templates - computed: true, optional: false, required: false
  private _templates = new ConfigurationTemplateProjectItemTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }
}

export class ConfigurationTemplateProjectItemList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateProjectItemOutputReference {
    return new ConfigurationTemplateProjectItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#name ConfigurationTemplateProject#name}
  */
  readonly name?: string;
}

export function configurationTemplateProjectParametersTagsToTerraform(struct?: ConfigurationTemplateProjectParametersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateProjectParametersTagsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTags | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTags | cdktf.IResolvable | undefined) {
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
}

export class ConfigurationTemplateProjectParametersTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTagsOutputReference {
    return new ConfigurationTemplateProjectParametersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes {
  /**
  * Device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#product_family ConfigurationTemplateProject#product_family}
  */
  readonly productFamily?: string;
  /**
  * Device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#product_series ConfigurationTemplateProject#product_series}
  */
  readonly productSeries?: string;
  /**
  * Device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#product_type ConfigurationTemplateProject#product_type}
  */
  readonly productType?: string;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes | cdktf.IResolvable): any {
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


export function configurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes | cdktf.IResolvable | undefined) {
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

  // product_family - computed: false, optional: true, required: false
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

  // product_series - computed: false, optional: true, required: false
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

  // product_type - computed: false, optional: true, required: false
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#max_value ConfigurationTemplateProject#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#min_value ConfigurationTemplateProject#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined) {
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

  // max_value - computed: false, optional: true, required: false
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

  // min_value - computed: false, optional: true, required: false
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_selected_values ConfigurationTemplateProject#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_type ConfigurationTemplateProject#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_values ConfigurationTemplateProject#selection_values}
  */
  readonly selectionValues?: string[];
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectionValues),
  }
}


export function configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectionValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: false, optional: true, required: false
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

  // selection_type - computed: false, optional: true, required: false
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

  // selection_values - computed: false, optional: true, required: false
  private _selectionValues?: string[]; 
  public get selectionValues() {
    return this.getListAttribute('selection_values');
  }
  public set selectionValues(value: string[]) {
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
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#binding ConfigurationTemplateProject#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#custom_order ConfigurationTemplateProject#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#data_type ConfigurationTemplateProject#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_value ConfigurationTemplateProject#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#display_name ConfigurationTemplateProject#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#group ConfigurationTemplateProject#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#instruction_text ConfigurationTemplateProject#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#key ConfigurationTemplateProject#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#not_param ConfigurationTemplateProject#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#order ConfigurationTemplateProject#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#param_array ConfigurationTemplateProject#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#parameter_name ConfigurationTemplateProject#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#provider ConfigurationTemplateProject#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#required ConfigurationTemplateProject#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#range ConfigurationTemplateProject#range}
  */
  readonly range?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection ConfigurationTemplateProject#selection}
  */
  readonly selection?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct!.selection),
  }
}


export function configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeList",
    },
    selection: {
      value: configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined) {
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

  // binding - computed: false, optional: true, required: false
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

  // custom_order - computed: false, optional: true, required: false
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

  // data_type - computed: false, optional: true, required: false
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

  // default_value - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
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

  // group - computed: false, optional: true, required: false
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

  // instruction_text - computed: false, optional: true, required: false
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

  // key - computed: false, optional: true, required: false
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

  // not_param - computed: false, optional: true, required: false
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

  // order - computed: false, optional: true, required: false
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

  // param_array - computed: false, optional: true, required: false
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

  // parameter_name - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: true, required: false
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

  // required - computed: false, optional: true, required: false
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
  private _range = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelectionOutputReference(this, "selection");
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsSelection) {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#name ConfigurationTemplateProject#name}
  */
  readonly name?: string;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesTagsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateProjectParametersTemplatesContainingTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags | cdktf.IResolvable | undefined) {
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
}

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTagsOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#max_value ConfigurationTemplateProject#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#min_value ConfigurationTemplateProject#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange | cdktf.IResolvable | undefined) {
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

  // max_value - computed: false, optional: true, required: false
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

  // min_value - computed: false, optional: true, required: false
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_selected_values ConfigurationTemplateProject#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_type ConfigurationTemplateProject#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_values ConfigurationTemplateProject#selection_values}
  */
  readonly selectionValues?: string[];
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectionValues),
  }
}


export function configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectionValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: false, optional: true, required: false
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

  // selection_type - computed: false, optional: true, required: false
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

  // selection_values - computed: false, optional: true, required: false
  private _selectionValues?: string[]; 
  public get selectionValues() {
    return this.getListAttribute('selection_values');
  }
  public set selectionValues(value: string[]) {
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
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#binding ConfigurationTemplateProject#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#custom_order ConfigurationTemplateProject#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#data_type ConfigurationTemplateProject#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_value ConfigurationTemplateProject#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#display_name ConfigurationTemplateProject#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#group ConfigurationTemplateProject#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#instruction_text ConfigurationTemplateProject#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#key ConfigurationTemplateProject#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#not_param ConfigurationTemplateProject#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#order ConfigurationTemplateProject#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#param_array ConfigurationTemplateProject#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#parameter_name ConfigurationTemplateProject#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#provider ConfigurationTemplateProject#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#required ConfigurationTemplateProject#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#range ConfigurationTemplateProject#range}
  */
  readonly range?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection ConfigurationTemplateProject#selection}
  */
  readonly selection?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionToTerraform(struct!.selection),
  }
}


export function configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeList",
    },
    selection: {
      value: configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionToHclTerraform(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams | cdktf.IResolvable | undefined) {
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

  // binding - computed: false, optional: true, required: false
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

  // custom_order - computed: false, optional: true, required: false
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

  // data_type - computed: false, optional: true, required: false
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

  // default_value - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
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

  // group - computed: false, optional: true, required: false
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

  // instruction_text - computed: false, optional: true, required: false
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

  // key - computed: false, optional: true, required: false
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

  // not_param - computed: false, optional: true, required: false
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

  // order - computed: false, optional: true, required: false
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

  // param_array - computed: false, optional: true, required: false
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

  // parameter_name - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: true, required: false
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

  // required - computed: false, optional: true, required: false
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
  private _range = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelectionOutputReference(this, "selection");
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsSelection) {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesContainingTemplates {
  /**
  * Is it composite template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#composite ConfigurationTemplateProject#composite}
  */
  readonly composite?: string;
  /**
  * Description of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template language (JINJA or VELOCITY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#language ConfigurationTemplateProject#language}
  */
  readonly language?: string;
  /**
  * Name of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#name ConfigurationTemplateProject#name}
  */
  readonly name?: string;
  /**
  * Project name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#project_name ConfigurationTemplateProject#project_name}
  */
  readonly projectName?: string;
  /**
  * Template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_content ConfigurationTemplateProject#template_content}
  */
  readonly templateContent?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#version ConfigurationTemplateProject#version}
  */
  readonly version?: string;
  /**
  * device_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#device_types ConfigurationTemplateProject#device_types}
  */
  readonly deviceTypes?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes[] | cdktf.IResolvable;
  /**
  * rollback_template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#rollback_template_params ConfigurationTemplateProject#rollback_template_params}
  */
  readonly rollbackTemplateParams?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#tags ConfigurationTemplateProject#tags}
  */
  readonly tags?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags[] | cdktf.IResolvable;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_params ConfigurationTemplateProject#template_params}
  */
  readonly templateParams?: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams[] | cdktf.IResolvable;
}

export function configurationTemplateProjectParametersTemplatesContainingTemplatesToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplates | cdktf.IResolvable): any {
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
    device_types: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesToTerraform, true)(struct!.deviceTypes),
    rollback_template_params: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsToTerraform, true)(struct!.rollbackTemplateParams),
    tags: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesTagsToTerraform, true)(struct!.tags),
    template_params: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsToTerraform, true)(struct!.templateParams),
  }
}


export function configurationTemplateProjectParametersTemplatesContainingTemplatesToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesContainingTemplates | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesToHclTerraform, true)(struct!.deviceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesList",
    },
    rollback_template_params: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsToHclTerraform, true)(struct!.rollbackTemplateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsList",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTagsList",
    },
    template_params: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesContainingTemplates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplates | cdktf.IResolvable | undefined) {
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

  // composite - computed: false, optional: true, required: false
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

  // language - computed: false, optional: true, required: false
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

  // template_content - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
  private _deviceTypes = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesDeviceTypes[] | cdktf.IResolvable) {
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
  private _rollbackTemplateParams = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }
  public putRollbackTemplateParams(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable) {
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
  private _tags = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTags[] | cdktf.IResolvable) {
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
  private _templateParams = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplatesTemplateParams[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateProjectParametersTemplatesContainingTemplatesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesContainingTemplates[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesContainingTemplatesOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesDeviceTypes {
  /**
  * Device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#product_family ConfigurationTemplateProject#product_family}
  */
  readonly productFamily?: string;
  /**
  * Device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#product_series ConfigurationTemplateProject#product_series}
  */
  readonly productSeries?: string;
  /**
  * Device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#product_type ConfigurationTemplateProject#product_type}
  */
  readonly productType?: string;
}

export function configurationTemplateProjectParametersTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesDeviceTypes | cdktf.IResolvable): any {
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


export function configurationTemplateProjectParametersTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesDeviceTypes | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesDeviceTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesDeviceTypes | cdktf.IResolvable | undefined) {
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

  // product_family - computed: false, optional: true, required: false
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

  // product_series - computed: false, optional: true, required: false
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

  // product_type - computed: false, optional: true, required: false
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

export class ConfigurationTemplateProjectParametersTemplatesDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#max_value ConfigurationTemplateProject#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#min_value ConfigurationTemplateProject#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined) {
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

  // max_value - computed: false, optional: true, required: false
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

  // min_value - computed: false, optional: true, required: false
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

export class ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_selected_values ConfigurationTemplateProject#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_type ConfigurationTemplateProject#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_values ConfigurationTemplateProject#selection_values}
  */
  readonly selectionValues?: string[];
}

export function configurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectionValues),
  }
}


export function configurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectionValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: false, optional: true, required: false
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

  // selection_type - computed: false, optional: true, required: false
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

  // selection_values - computed: false, optional: true, required: false
  private _selectionValues?: string[]; 
  public get selectionValues() {
    return this.getListAttribute('selection_values');
  }
  public set selectionValues(value: string[]) {
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
export interface ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#binding ConfigurationTemplateProject#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#custom_order ConfigurationTemplateProject#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#data_type ConfigurationTemplateProject#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_value ConfigurationTemplateProject#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#display_name ConfigurationTemplateProject#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#group ConfigurationTemplateProject#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#instruction_text ConfigurationTemplateProject#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#key ConfigurationTemplateProject#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#not_param ConfigurationTemplateProject#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#order ConfigurationTemplateProject#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#param_array ConfigurationTemplateProject#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#parameter_name ConfigurationTemplateProject#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#provider ConfigurationTemplateProject#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#required ConfigurationTemplateProject#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#range ConfigurationTemplateProject#range}
  */
  readonly range?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection ConfigurationTemplateProject#selection}
  */
  readonly selection?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection;
}

export function configurationTemplateProjectParametersTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: configurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionToTerraform(struct!.selection),
  }
}


export function configurationTemplateProjectParametersTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeList",
    },
    selection: {
      value: configurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined) {
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

  // binding - computed: false, optional: true, required: false
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

  // custom_order - computed: false, optional: true, required: false
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

  // data_type - computed: false, optional: true, required: false
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

  // default_value - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
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

  // group - computed: false, optional: true, required: false
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

  // instruction_text - computed: false, optional: true, required: false
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

  // key - computed: false, optional: true, required: false
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

  // not_param - computed: false, optional: true, required: false
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

  // order - computed: false, optional: true, required: false
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

  // param_array - computed: false, optional: true, required: false
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

  // parameter_name - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: true, required: false
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

  // required - computed: false, optional: true, required: false
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
  private _range = new ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelectionOutputReference(this, "selection");
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsSelection) {
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

export class ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#name ConfigurationTemplateProject#name}
  */
  readonly name?: string;
}

export function configurationTemplateProjectParametersTemplatesTagsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateProjectParametersTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTags | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesTags | cdktf.IResolvable | undefined) {
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
}

export class ConfigurationTemplateProjectParametersTemplatesTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesTagsOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#max_value ConfigurationTemplateProject#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#min_value ConfigurationTemplateProject#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateProjectParametersTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateProjectParametersTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateProjectParametersTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange | cdktf.IResolvable | undefined) {
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

  // max_value - computed: false, optional: true, required: false
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

  // min_value - computed: false, optional: true, required: false
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

export class ConfigurationTemplateProjectParametersTemplatesTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_selected_values ConfigurationTemplateProject#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_type ConfigurationTemplateProject#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection_values ConfigurationTemplateProject#selection_values}
  */
  readonly selectionValues?: string[];
}

export function configurationTemplateProjectParametersTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    id: cdktf.stringToTerraform(struct!.id),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectionValues),
  }
}


export function configurationTemplateProjectParametersTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelectionOutputReference | ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectionValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSelectedValues = undefined;
      this._id = undefined;
      this._selectionType = undefined;
      this._selectionValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._id = value.id;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
    }
  }

  // default_selected_values - computed: false, optional: true, required: false
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

  // selection_type - computed: false, optional: true, required: false
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

  // selection_values - computed: false, optional: true, required: false
  private _selectionValues?: string[]; 
  public get selectionValues() {
    return this.getListAttribute('selection_values');
  }
  public set selectionValues(value: string[]) {
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
export interface ConfigurationTemplateProjectParametersTemplatesTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#binding ConfigurationTemplateProject#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#custom_order ConfigurationTemplateProject#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#data_type ConfigurationTemplateProject#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#default_value ConfigurationTemplateProject#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#display_name ConfigurationTemplateProject#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#group ConfigurationTemplateProject#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#instruction_text ConfigurationTemplateProject#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#key ConfigurationTemplateProject#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#not_param ConfigurationTemplateProject#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#order ConfigurationTemplateProject#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#param_array ConfigurationTemplateProject#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#parameter_name ConfigurationTemplateProject#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#provider ConfigurationTemplateProject#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#required ConfigurationTemplateProject#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#range ConfigurationTemplateProject#range}
  */
  readonly range?: ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#selection ConfigurationTemplateProject#selection}
  */
  readonly selection?: ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection;
}

export function configurationTemplateProjectParametersTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateProjectParametersTemplatesTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: configurationTemplateProjectParametersTemplatesTemplateParamsSelectionToTerraform(struct!.selection),
  }
}


export function configurationTemplateProjectParametersTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesTemplateParamsRangeList",
    },
    selection: {
      value: configurationTemplateProjectParametersTemplatesTemplateParamsSelectionToHclTerraform(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesTemplateParams | cdktf.IResolvable | undefined) {
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

  // binding - computed: false, optional: true, required: false
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

  // custom_order - computed: false, optional: true, required: false
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

  // data_type - computed: false, optional: true, required: false
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

  // default_value - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
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

  // group - computed: false, optional: true, required: false
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

  // instruction_text - computed: false, optional: true, required: false
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

  // key - computed: false, optional: true, required: false
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

  // not_param - computed: false, optional: true, required: false
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

  // order - computed: false, optional: true, required: false
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

  // param_array - computed: false, optional: true, required: false
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

  // parameter_name - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: true, required: false
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

  // required - computed: false, optional: true, required: false
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
  private _range = new ConfigurationTemplateProjectParametersTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateProjectParametersTemplatesTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelectionOutputReference(this, "selection");
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateProjectParametersTemplatesTemplateParamsSelection) {
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

export class ConfigurationTemplateProjectParametersTemplatesTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplatesTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParametersTemplatesValidationErrors {
  /**
  * Validation or design conflicts errors of rollback template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#rollback_template_errors ConfigurationTemplateProject#rollback_template_errors}
  */
  readonly rollbackTemplateErrors?: string[];
  /**
  * Validation or design conflicts errors
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_errors ConfigurationTemplateProject#template_errors}
  */
  readonly templateErrors?: string[];
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_id ConfigurationTemplateProject#template_id}
  */
  readonly templateId?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_version ConfigurationTemplateProject#template_version}
  */
  readonly templateVersion?: string;
}

export function configurationTemplateProjectParametersTemplatesValidationErrorsToTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesValidationErrorsOutputReference | ConfigurationTemplateProjectParametersTemplatesValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollback_template_errors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rollbackTemplateErrors),
    template_errors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateErrors),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    template_version: cdktf.stringToTerraform(struct!.templateVersion),
  }
}


export function configurationTemplateProjectParametersTemplatesValidationErrorsToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplatesValidationErrorsOutputReference | ConfigurationTemplateProjectParametersTemplatesValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollback_template_errors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rollbackTemplateErrors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template_errors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateErrors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ConfigurationTemplateProjectParametersTemplatesValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateProjectParametersTemplatesValidationErrors | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplatesValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rollbackTemplateErrors = undefined;
      this._templateErrors = undefined;
      this._templateId = undefined;
      this._templateVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rollbackTemplateErrors = value.rollbackTemplateErrors;
      this._templateErrors = value.templateErrors;
      this._templateId = value.templateId;
      this._templateVersion = value.templateVersion;
    }
  }

  // rollback_template_errors - computed: false, optional: true, required: false
  private _rollbackTemplateErrors?: string[]; 
  public get rollbackTemplateErrors() {
    return this.getListAttribute('rollback_template_errors');
  }
  public set rollbackTemplateErrors(value: string[]) {
    this._rollbackTemplateErrors = value;
  }
  public resetRollbackTemplateErrors() {
    this._rollbackTemplateErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTemplateErrorsInput() {
    return this._rollbackTemplateErrors;
  }

  // template_errors - computed: false, optional: true, required: false
  private _templateErrors?: string[]; 
  public get templateErrors() {
    return this.getListAttribute('template_errors');
  }
  public set templateErrors(value: string[]) {
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

  // template_version - computed: false, optional: true, required: false
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
export interface ConfigurationTemplateProjectParametersTemplates {
  /**
  * Author of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#author ConfigurationTemplateProject#author}
  */
  readonly author?: string;
  /**
  * Is it composite template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#composite ConfigurationTemplateProject#composite}
  */
  readonly composite?: string;
  /**
  * Create time of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#create_time ConfigurationTemplateProject#create_time}
  */
  readonly createTime?: number;
  /**
  * Custom Params Order
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#custom_params_order ConfigurationTemplateProject#custom_params_order}
  */
  readonly customParamsOrder?: string;
  /**
  * Description of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * Define failure policy if template provisioning fails
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#failure_policy ConfigurationTemplateProject#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template language (JINJA or VELOCITY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#language ConfigurationTemplateProject#language}
  */
  readonly language?: string;
  /**
  * Update time of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#last_update_time ConfigurationTemplateProject#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Latest versioned template time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#latest_version_time ConfigurationTemplateProject#latest_version_time}
  */
  readonly latestVersionTime?: number;
  /**
  * Name of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#name ConfigurationTemplateProject#name}
  */
  readonly name?: string;
  /**
  * Parent templateID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#parent_template_id ConfigurationTemplateProject#parent_template_id}
  */
  readonly parentTemplateId?: string;
  /**
  * Project UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#project_id ConfigurationTemplateProject#project_id}
  */
  readonly projectId?: string;
  /**
  * Project name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#project_name ConfigurationTemplateProject#project_name}
  */
  readonly projectName?: string;
  /**
  * Rollback template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#rollback_template_content ConfigurationTemplateProject#rollback_template_content}
  */
  readonly rollbackTemplateContent?: string;
  /**
  * Applicable device software type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#software_type ConfigurationTemplateProject#software_type}
  */
  readonly softwareType?: string;
  /**
  * Applicable device software variant
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#software_variant ConfigurationTemplateProject#software_variant}
  */
  readonly softwareVariant?: string;
  /**
  * Applicable device software version
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#software_version ConfigurationTemplateProject#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_content ConfigurationTemplateProject#template_content}
  */
  readonly templateContent?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#version ConfigurationTemplateProject#version}
  */
  readonly version?: string;
  /**
  * containing_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#containing_templates ConfigurationTemplateProject#containing_templates}
  */
  readonly containingTemplates?: ConfigurationTemplateProjectParametersTemplatesContainingTemplates[] | cdktf.IResolvable;
  /**
  * device_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#device_types ConfigurationTemplateProject#device_types}
  */
  readonly deviceTypes?: ConfigurationTemplateProjectParametersTemplatesDeviceTypes[] | cdktf.IResolvable;
  /**
  * rollback_template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#rollback_template_params ConfigurationTemplateProject#rollback_template_params}
  */
  readonly rollbackTemplateParams?: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#tags ConfigurationTemplateProject#tags}
  */
  readonly tags?: ConfigurationTemplateProjectParametersTemplatesTags[] | cdktf.IResolvable;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#template_params ConfigurationTemplateProject#template_params}
  */
  readonly templateParams?: ConfigurationTemplateProjectParametersTemplatesTemplateParams[] | cdktf.IResolvable;
  /**
  * validation_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#validation_errors ConfigurationTemplateProject#validation_errors}
  */
  readonly validationErrors?: ConfigurationTemplateProjectParametersTemplatesValidationErrors;
}

export function configurationTemplateProjectParametersTemplatesToTerraform(struct?: ConfigurationTemplateProjectParametersTemplates | cdktf.IResolvable): any {
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
    containing_templates: cdktf.listMapper(configurationTemplateProjectParametersTemplatesContainingTemplatesToTerraform, true)(struct!.containingTemplates),
    device_types: cdktf.listMapper(configurationTemplateProjectParametersTemplatesDeviceTypesToTerraform, true)(struct!.deviceTypes),
    rollback_template_params: cdktf.listMapper(configurationTemplateProjectParametersTemplatesRollbackTemplateParamsToTerraform, true)(struct!.rollbackTemplateParams),
    tags: cdktf.listMapper(configurationTemplateProjectParametersTemplatesTagsToTerraform, true)(struct!.tags),
    template_params: cdktf.listMapper(configurationTemplateProjectParametersTemplatesTemplateParamsToTerraform, true)(struct!.templateParams),
    validation_errors: configurationTemplateProjectParametersTemplatesValidationErrorsToTerraform(struct!.validationErrors),
  }
}


export function configurationTemplateProjectParametersTemplatesToHclTerraform(struct?: ConfigurationTemplateProjectParametersTemplates | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesContainingTemplatesToHclTerraform, true)(struct!.containingTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesContainingTemplatesList",
    },
    device_types: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesDeviceTypesToHclTerraform, true)(struct!.deviceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesDeviceTypesList",
    },
    rollback_template_params: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesRollbackTemplateParamsToHclTerraform, true)(struct!.rollbackTemplateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsList",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesTagsList",
    },
    template_params: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesTemplateParamsList",
    },
    validation_errors: {
      value: configurationTemplateProjectParametersTemplatesValidationErrorsToHclTerraform(struct!.validationErrors),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesValidationErrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateProjectParametersTemplates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateProjectParametersTemplates | cdktf.IResolvable | undefined) {
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

  // author - computed: false, optional: true, required: false
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

  // composite - computed: false, optional: true, required: false
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

  // create_time - computed: false, optional: true, required: false
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

  // custom_params_order - computed: false, optional: true, required: false
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

  // failure_policy - computed: false, optional: true, required: false
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

  // language - computed: false, optional: true, required: false
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

  // last_update_time - computed: false, optional: true, required: false
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

  // latest_version_time - computed: false, optional: true, required: false
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

  // parent_template_id - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
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

  // rollback_template_content - computed: false, optional: true, required: false
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

  // software_type - computed: false, optional: true, required: false
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

  // software_variant - computed: false, optional: true, required: false
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

  // software_version - computed: false, optional: true, required: false
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

  // template_content - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
  private _containingTemplates = new ConfigurationTemplateProjectParametersTemplatesContainingTemplatesList(this, "containing_templates", false);
  public get containingTemplates() {
    return this._containingTemplates;
  }
  public putContainingTemplates(value: ConfigurationTemplateProjectParametersTemplatesContainingTemplates[] | cdktf.IResolvable) {
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
  private _deviceTypes = new ConfigurationTemplateProjectParametersTemplatesDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: ConfigurationTemplateProjectParametersTemplatesDeviceTypes[] | cdktf.IResolvable) {
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
  private _rollbackTemplateParams = new ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }
  public putRollbackTemplateParams(value: ConfigurationTemplateProjectParametersTemplatesRollbackTemplateParams[] | cdktf.IResolvable) {
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
  private _tags = new ConfigurationTemplateProjectParametersTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateProjectParametersTemplatesTags[] | cdktf.IResolvable) {
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
  private _templateParams = new ConfigurationTemplateProjectParametersTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: ConfigurationTemplateProjectParametersTemplatesTemplateParams[] | cdktf.IResolvable) {
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
  private _validationErrors = new ConfigurationTemplateProjectParametersTemplatesValidationErrorsOutputReference(this, "validation_errors");
  public get validationErrors() {
    return this._validationErrors;
  }
  public putValidationErrors(value: ConfigurationTemplateProjectParametersTemplatesValidationErrors) {
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

export class ConfigurationTemplateProjectParametersTemplatesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateProjectParametersTemplates[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateProjectParametersTemplatesOutputReference {
    return new ConfigurationTemplateProjectParametersTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateProjectParameters {
  /**
  * Create time of project
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#create_time ConfigurationTemplateProject#create_time}
  */
  readonly createTime?: number;
  /**
  * Description of project
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#description ConfigurationTemplateProject#description}
  */
  readonly description?: string;
  /**
  * UUID of project
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#id ConfigurationTemplateProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Update time of project
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#last_update_time ConfigurationTemplateProject#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Name of project
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#name ConfigurationTemplateProject#name}
  */
  readonly name: string;
  /**
  * projectId path parameter. projectId(UUID) of project to be deleted
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#project_id ConfigurationTemplateProject#project_id}
  */
  readonly projectId?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#tags ConfigurationTemplateProject#tags}
  */
  readonly tags?: ConfigurationTemplateProjectParametersTags[] | cdktf.IResolvable;
  /**
  * templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#templates ConfigurationTemplateProject#templates}
  */
  readonly templates?: ConfigurationTemplateProjectParametersTemplates[] | cdktf.IResolvable;
}

export function configurationTemplateProjectParametersToTerraform(struct?: ConfigurationTemplateProjectParametersOutputReference | ConfigurationTemplateProjectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_time: cdktf.numberToTerraform(struct!.createTime),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    last_update_time: cdktf.numberToTerraform(struct!.lastUpdateTime),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    tags: cdktf.listMapper(configurationTemplateProjectParametersTagsToTerraform, true)(struct!.tags),
    templates: cdktf.listMapper(configurationTemplateProjectParametersTemplatesToTerraform, true)(struct!.templates),
  }
}


export function configurationTemplateProjectParametersToHclTerraform(struct?: ConfigurationTemplateProjectParametersOutputReference | ConfigurationTemplateProjectParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_time: {
      value: cdktf.numberToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    last_update_time: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdateTime),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTagsList",
    },
    templates: {
      value: cdktf.listMapperHcl(configurationTemplateProjectParametersTemplatesToHclTerraform, true)(struct!.templates),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateProjectParametersTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateProjectParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateProjectParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lastUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdateTime = this._lastUpdateTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateProjectParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createTime = undefined;
      this._description = undefined;
      this._id = undefined;
      this._lastUpdateTime = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._tags.internalValue = undefined;
      this._templates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createTime = value.createTime;
      this._description = value.description;
      this._id = value.id;
      this._lastUpdateTime = value.lastUpdateTime;
      this._name = value.name;
      this._projectId = value.projectId;
      this._tags.internalValue = value.tags;
      this._templates.internalValue = value.templates;
    }
  }

  // create_time - computed: false, optional: true, required: false
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

  // last_update_time - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ConfigurationTemplateProjectParametersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateProjectParametersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new ConfigurationTemplateProjectParametersTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: ConfigurationTemplateProjectParametersTemplates[] | cdktf.IResolvable) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project dnacenter_configuration_template_project}
*/
export class ConfigurationTemplateProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_configuration_template_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationTemplateProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationTemplateProject to import
  * @param importFromId The id of the existing ConfigurationTemplateProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationTemplateProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_configuration_template_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_project dnacenter_configuration_template_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationTemplateProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationTemplateProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_configuration_template_project',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
  private _item = new ConfigurationTemplateProjectItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new ConfigurationTemplateProjectParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConfigurationTemplateProjectParameters) {
    this._parameters.internalValue = value;
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
      parameters: configurationTemplateProjectParametersToTerraform(this._parameters.internalValue),
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
        value: configurationTemplateProjectParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigurationTemplateProjectParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
