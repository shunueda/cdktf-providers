// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * filterConflictingTemplates query parameter. Filter template(s) based on confliting templates
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#filter_conflicting_templates DataDnacenterConfigurationTemplate#filter_conflicting_templates}
  */
  readonly filterConflictingTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#id DataDnacenterConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * latestVersion query parameter. latestVersion flag to get the latest versioned template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#latest_version DataDnacenterConfigurationTemplate#latest_version}
  */
  readonly latestVersion?: boolean | cdktf.IResolvable;
  /**
  * productFamily query parameter. Filter template(s) based on device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#product_family DataDnacenterConfigurationTemplate#product_family}
  */
  readonly productFamily?: string;
  /**
  * productSeries query parameter. Filter template(s) based on device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#product_series DataDnacenterConfigurationTemplate#product_series}
  */
  readonly productSeries?: string;
  /**
  * productType query parameter. Filter template(s) based on device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#product_type DataDnacenterConfigurationTemplate#product_type}
  */
  readonly productType?: string;
  /**
  * projectId query parameter. Filter template(s) based on project UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#project_id DataDnacenterConfigurationTemplate#project_id}
  */
  readonly projectId?: string;
  /**
  * projectNames query parameter. Filter template(s) based on project names
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#project_names DataDnacenterConfigurationTemplate#project_names}
  */
  readonly projectNames?: string[];
  /**
  * softwareType query parameter. Filter template(s) based software type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#software_type DataDnacenterConfigurationTemplate#software_type}
  */
  readonly softwareType?: string;
  /**
  * softwareVersion query parameter. Filter template(s) based softwareVersion
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#software_version DataDnacenterConfigurationTemplate#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * sortOrder query parameter. Sort Order Ascending (asc) or Descending (des)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#sort_order DataDnacenterConfigurationTemplate#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * tags query parameter. Filter template(s) based on tags
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#tags DataDnacenterConfigurationTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * templateId path parameter. TemplateId(UUID) to get details of the template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#template_id DataDnacenterConfigurationTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * unCommitted query parameter. Filter template(s) based on template commited or not
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#un_committed DataDnacenterConfigurationTemplate#un_committed}
  */
  readonly unCommitted?: boolean | cdktf.IResolvable;
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypes {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypes | undefined) {
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

export class DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRange | undefined) {
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

export class DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelection | undefined) {
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

export class DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParams {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParams | undefined) {
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
  private _range = new DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesTags {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesTagsToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesTagsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesTags | undefined) {
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

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesTagsOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRange {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRange | undefined) {
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

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelection {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelection | undefined) {
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

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParams {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParams | undefined) {
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
  private _range = new DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemContainingTemplates {
}

export function dataDnacenterConfigurationTemplateItemContainingTemplatesToTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemContainingTemplatesToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemContainingTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemContainingTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemContainingTemplates | undefined) {
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
  private _deviceTypes = new DataDnacenterConfigurationTemplateItemContainingTemplatesDeviceTypesList(this, "device_types", false);
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
  private _rollbackTemplateParams = new DataDnacenterConfigurationTemplateItemContainingTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataDnacenterConfigurationTemplateItemContainingTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_content - computed: true, optional: false, required: false
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }

  // template_params - computed: true, optional: false, required: false
  private _templateParams = new DataDnacenterConfigurationTemplateItemContainingTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataDnacenterConfigurationTemplateItemContainingTemplatesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemContainingTemplatesOutputReference {
    return new DataDnacenterConfigurationTemplateItemContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemDeviceTypes {
}

export function dataDnacenterConfigurationTemplateItemDeviceTypesToTerraform(struct?: DataDnacenterConfigurationTemplateItemDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemDeviceTypesToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemDeviceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemDeviceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemDeviceTypes | undefined) {
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

export class DataDnacenterConfigurationTemplateItemDeviceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemDeviceTypesOutputReference {
    return new DataDnacenterConfigurationTemplateItemDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRange {
}

export function dataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeToTerraform(struct?: DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRange | undefined) {
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

export class DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeOutputReference {
    return new DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelection {
}

export function dataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionToTerraform(struct?: DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelection | undefined) {
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

export class DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionOutputReference {
    return new DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemRollbackTemplateParams {
}

export function dataDnacenterConfigurationTemplateItemRollbackTemplateParamsToTerraform(struct?: DataDnacenterConfigurationTemplateItemRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemRollbackTemplateParamsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemRollbackTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemRollbackTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemRollbackTemplateParams | undefined) {
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
  private _range = new DataDnacenterConfigurationTemplateItemRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new DataDnacenterConfigurationTemplateItemRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class DataDnacenterConfigurationTemplateItemRollbackTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemRollbackTemplateParamsOutputReference {
    return new DataDnacenterConfigurationTemplateItemRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemTags {
}

export function dataDnacenterConfigurationTemplateItemTagsToTerraform(struct?: DataDnacenterConfigurationTemplateItemTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemTagsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemTags | undefined) {
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

export class DataDnacenterConfigurationTemplateItemTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemTagsOutputReference {
    return new DataDnacenterConfigurationTemplateItemTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemTemplateParamsRange {
}

export function dataDnacenterConfigurationTemplateItemTemplateParamsRangeToTerraform(struct?: DataDnacenterConfigurationTemplateItemTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemTemplateParamsRangeToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemTemplateParamsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemTemplateParamsRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemTemplateParamsRange | undefined) {
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

export class DataDnacenterConfigurationTemplateItemTemplateParamsRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemTemplateParamsRangeOutputReference {
    return new DataDnacenterConfigurationTemplateItemTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemTemplateParamsSelection {
}

export function dataDnacenterConfigurationTemplateItemTemplateParamsSelectionToTerraform(struct?: DataDnacenterConfigurationTemplateItemTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemTemplateParamsSelectionToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemTemplateParamsSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemTemplateParamsSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemTemplateParamsSelection | undefined) {
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

export class DataDnacenterConfigurationTemplateItemTemplateParamsSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemTemplateParamsSelectionOutputReference {
    return new DataDnacenterConfigurationTemplateItemTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemTemplateParams {
}

export function dataDnacenterConfigurationTemplateItemTemplateParamsToTerraform(struct?: DataDnacenterConfigurationTemplateItemTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemTemplateParamsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemTemplateParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemTemplateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemTemplateParams | undefined) {
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
  private _range = new DataDnacenterConfigurationTemplateItemTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // selection - computed: true, optional: false, required: false
  private _selection = new DataDnacenterConfigurationTemplateItemTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
}

export class DataDnacenterConfigurationTemplateItemTemplateParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemTemplateParamsOutputReference {
    return new DataDnacenterConfigurationTemplateItemTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemValidationErrors {
}

export function dataDnacenterConfigurationTemplateItemValidationErrorsToTerraform(struct?: DataDnacenterConfigurationTemplateItemValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemValidationErrorsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemValidationErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemValidationErrors | undefined) {
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

export class DataDnacenterConfigurationTemplateItemValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemValidationErrorsOutputReference {
    return new DataDnacenterConfigurationTemplateItemValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItem {
}

export function dataDnacenterConfigurationTemplateItemToTerraform(struct?: DataDnacenterConfigurationTemplateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemToHclTerraform(struct?: DataDnacenterConfigurationTemplateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItem | undefined) {
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
  private _containingTemplates = new DataDnacenterConfigurationTemplateItemContainingTemplatesList(this, "containing_templates", false);
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
  private _deviceTypes = new DataDnacenterConfigurationTemplateItemDeviceTypesList(this, "device_types", false);
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
  private _rollbackTemplateParams = new DataDnacenterConfigurationTemplateItemRollbackTemplateParamsList(this, "rollback_template_params", false);
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
  private _tags = new DataDnacenterConfigurationTemplateItemTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_content - computed: true, optional: false, required: false
  public get templateContent() {
    return this.getStringAttribute('template_content');
  }

  // template_params - computed: true, optional: false, required: false
  private _templateParams = new DataDnacenterConfigurationTemplateItemTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }

  // validation_errors - computed: true, optional: false, required: false
  private _validationErrors = new DataDnacenterConfigurationTemplateItemValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataDnacenterConfigurationTemplateItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemOutputReference {
    return new DataDnacenterConfigurationTemplateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItemsVersionsInfo {
}

export function dataDnacenterConfigurationTemplateItemsVersionsInfoToTerraform(struct?: DataDnacenterConfigurationTemplateItemsVersionsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemsVersionsInfoToHclTerraform(struct?: DataDnacenterConfigurationTemplateItemsVersionsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemsVersionsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItemsVersionsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItemsVersionsInfo | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_comment - computed: true, optional: false, required: false
  public get versionComment() {
    return this.getStringAttribute('version_comment');
  }

  // version_time - computed: true, optional: false, required: false
  public get versionTime() {
    return this.getNumberAttribute('version_time');
  }
}

export class DataDnacenterConfigurationTemplateItemsVersionsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemsVersionsInfoOutputReference {
    return new DataDnacenterConfigurationTemplateItemsVersionsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterConfigurationTemplateItems {
}

export function dataDnacenterConfigurationTemplateItemsToTerraform(struct?: DataDnacenterConfigurationTemplateItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterConfigurationTemplateItemsToHclTerraform(struct?: DataDnacenterConfigurationTemplateItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterConfigurationTemplateItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterConfigurationTemplateItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterConfigurationTemplateItems | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // versions_info - computed: true, optional: false, required: false
  private _versionsInfo = new DataDnacenterConfigurationTemplateItemsVersionsInfoList(this, "versions_info", false);
  public get versionsInfo() {
    return this._versionsInfo;
  }
}

export class DataDnacenterConfigurationTemplateItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterConfigurationTemplateItemsOutputReference {
    return new DataDnacenterConfigurationTemplateItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template dnacenter_configuration_template}
*/
export class DataDnacenterConfigurationTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterConfigurationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterConfigurationTemplate to import
  * @param importFromId The id of the existing DataDnacenterConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/configuration_template dnacenter_configuration_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterConfigurationTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterConfigurationTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_configuration_template',
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
    this._filterConflictingTemplates = config.filterConflictingTemplates;
    this._id = config.id;
    this._latestVersion = config.latestVersion;
    this._productFamily = config.productFamily;
    this._productSeries = config.productSeries;
    this._productType = config.productType;
    this._projectId = config.projectId;
    this._projectNames = config.projectNames;
    this._softwareType = config.softwareType;
    this._softwareVersion = config.softwareVersion;
    this._sortOrder = config.sortOrder;
    this._tags = config.tags;
    this._templateId = config.templateId;
    this._unCommitted = config.unCommitted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_conflicting_templates - computed: false, optional: true, required: false
  private _filterConflictingTemplates?: boolean | cdktf.IResolvable; 
  public get filterConflictingTemplates() {
    return this.getBooleanAttribute('filter_conflicting_templates');
  }
  public set filterConflictingTemplates(value: boolean | cdktf.IResolvable) {
    this._filterConflictingTemplates = value;
  }
  public resetFilterConflictingTemplates() {
    this._filterConflictingTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConflictingTemplatesInput() {
    return this._filterConflictingTemplates;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterConfigurationTemplateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterConfigurationTemplateItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // latest_version - computed: false, optional: true, required: false
  private _latestVersion?: boolean | cdktf.IResolvable; 
  public get latestVersion() {
    return this.getBooleanAttribute('latest_version');
  }
  public set latestVersion(value: boolean | cdktf.IResolvable) {
    this._latestVersion = value;
  }
  public resetLatestVersion() {
    this._latestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestVersionInput() {
    return this._latestVersion;
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

  // project_names - computed: false, optional: true, required: false
  private _projectNames?: string[]; 
  public get projectNames() {
    return this.getListAttribute('project_names');
  }
  public set projectNames(value: string[]) {
    this._projectNames = value;
  }
  public resetProjectNames() {
    this._projectNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNamesInput() {
    return this._projectNames;
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

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // un_committed - computed: false, optional: true, required: false
  private _unCommitted?: boolean | cdktf.IResolvable; 
  public get unCommitted() {
    return this.getBooleanAttribute('un_committed');
  }
  public set unCommitted(value: boolean | cdktf.IResolvable) {
    this._unCommitted = value;
  }
  public resetUnCommitted() {
    this._unCommitted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unCommittedInput() {
    return this._unCommitted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_conflicting_templates: cdktf.booleanToTerraform(this._filterConflictingTemplates),
      id: cdktf.stringToTerraform(this._id),
      latest_version: cdktf.booleanToTerraform(this._latestVersion),
      product_family: cdktf.stringToTerraform(this._productFamily),
      product_series: cdktf.stringToTerraform(this._productSeries),
      product_type: cdktf.stringToTerraform(this._productType),
      project_id: cdktf.stringToTerraform(this._projectId),
      project_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectNames),
      software_type: cdktf.stringToTerraform(this._softwareType),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
      un_committed: cdktf.booleanToTerraform(this._unCommitted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_conflicting_templates: {
        value: cdktf.booleanToHclTerraform(this._filterConflictingTemplates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest_version: {
        value: cdktf.booleanToHclTerraform(this._latestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product_family: {
        value: cdktf.stringToHclTerraform(this._productFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_series: {
        value: cdktf.stringToHclTerraform(this._productSeries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_type: {
        value: cdktf.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_type: {
        value: cdktf.stringToHclTerraform(this._softwareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      un_committed: {
        value: cdktf.booleanToHclTerraform(this._unCommitted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
