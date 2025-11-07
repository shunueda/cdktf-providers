// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationTemplateImportTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#parameters ConfigurationTemplateImportTemplate#parameters}
  */
  readonly parameters: ConfigurationTemplateImportTemplateParameters;
}
export interface ConfigurationTemplateImportTemplateItem {
}

export function configurationTemplateImportTemplateItemToTerraform(struct?: ConfigurationTemplateImportTemplateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function configurationTemplateImportTemplateItemToHclTerraform(struct?: ConfigurationTemplateImportTemplateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConfigurationTemplateImportTemplateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateImportTemplateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class ConfigurationTemplateImportTemplateItemList extends cdktf.ComplexList {

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
  public get(index: number): ConfigurationTemplateImportTemplateItemOutputReference {
    return new ConfigurationTemplateImportTemplateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes {
  /**
  * Device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#product_family ConfigurationTemplateImportTemplate#product_family}
  */
  readonly productFamily?: string;
  /**
  * Device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#product_series ConfigurationTemplateImportTemplate#product_series}
  */
  readonly productSeries?: string;
  /**
  * Device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#product_type ConfigurationTemplateImportTemplate#product_type}
  */
  readonly productType?: string;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#max_value ConfigurationTemplateImportTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#min_value ConfigurationTemplateImportTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_selected_values ConfigurationTemplateImportTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_type ConfigurationTemplateImportTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_values ConfigurationTemplateImportTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#binding ConfigurationTemplateImportTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#custom_order ConfigurationTemplateImportTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#data_type ConfigurationTemplateImportTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_value ConfigurationTemplateImportTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#description ConfigurationTemplateImportTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#display_name ConfigurationTemplateImportTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#group ConfigurationTemplateImportTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#instruction_text ConfigurationTemplateImportTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#key ConfigurationTemplateImportTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#not_param ConfigurationTemplateImportTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#order ConfigurationTemplateImportTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#param_array ConfigurationTemplateImportTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#parameter_name ConfigurationTemplateImportTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#provider ConfigurationTemplateImportTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#required ConfigurationTemplateImportTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#range ConfigurationTemplateImportTemplate#range}
  */
  readonly range?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection ConfigurationTemplateImportTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams | cdktf.IResolvable | undefined) {
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
  private _range = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsSelection[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#name ConfigurationTemplateImportTemplate#name}
  */
  readonly name?: string;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#max_value ConfigurationTemplateImportTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#min_value ConfigurationTemplateImportTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_selected_values ConfigurationTemplateImportTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_type ConfigurationTemplateImportTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_values ConfigurationTemplateImportTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#binding ConfigurationTemplateImportTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#custom_order ConfigurationTemplateImportTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#data_type ConfigurationTemplateImportTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_value ConfigurationTemplateImportTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#description ConfigurationTemplateImportTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#display_name ConfigurationTemplateImportTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#group ConfigurationTemplateImportTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#instruction_text ConfigurationTemplateImportTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#key ConfigurationTemplateImportTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#not_param ConfigurationTemplateImportTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#order ConfigurationTemplateImportTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#param_array ConfigurationTemplateImportTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#parameter_name ConfigurationTemplateImportTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#provider ConfigurationTemplateImportTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#required ConfigurationTemplateImportTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#range ConfigurationTemplateImportTemplate#range}
  */
  readonly range?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection ConfigurationTemplateImportTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams | cdktf.IResolvable | undefined) {
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
  private _range = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsSelection[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates {
  /**
  * Is it composite template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#composite ConfigurationTemplateImportTemplate#composite}
  */
  readonly composite?: string;
  /**
  * Description of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#description ConfigurationTemplateImportTemplate#description}
  */
  readonly description?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template language (JINJA or VELOCITY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#language ConfigurationTemplateImportTemplate#language}
  */
  readonly language?: string;
  /**
  * Name of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#name ConfigurationTemplateImportTemplate#name}
  */
  readonly name?: string;
  /**
  * Project name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#project_name ConfigurationTemplateImportTemplate#project_name}
  */
  readonly projectName?: string;
  /**
  * Template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_content ConfigurationTemplateImportTemplate#template_content}
  */
  readonly templateContent?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#version ConfigurationTemplateImportTemplate#version}
  */
  readonly version?: string;
  /**
  * device_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#device_types ConfigurationTemplateImportTemplate#device_types}
  */
  readonly deviceTypes?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes[] | cdktf.IResolvable;
  /**
  * rollback_template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#rollback_template_params ConfigurationTemplateImportTemplate#rollback_template_params}
  */
  readonly rollbackTemplateParams?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#tags ConfigurationTemplateImportTemplate#tags}
  */
  readonly tags?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags[] | cdktf.IResolvable;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_params ConfigurationTemplateImportTemplate#template_params}
  */
  readonly templateParams?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates | cdktf.IResolvable): any {
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
    device_types: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesToTerraform, true)(struct!.deviceTypes),
    rollback_template_params: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsToTerraform, true)(struct!.rollbackTemplateParams),
    tags: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsToTerraform, true)(struct!.tags),
    template_params: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsToTerraform, true)(struct!.templateParams),
  }
}


export function configurationTemplateImportTemplateParametersPayloadContainingTemplatesToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesToHclTerraform, true)(struct!.deviceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesList",
    },
    rollback_template_params: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsToHclTerraform, true)(struct!.rollbackTemplateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsList",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsList",
    },
    template_params: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates | cdktf.IResolvable | undefined) {
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
  private _deviceTypes = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesDeviceTypes[] | cdktf.IResolvable) {
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
  private _rollbackTemplateParams = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }
  public putRollbackTemplateParams(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesRollbackTemplateParams[] | cdktf.IResolvable) {
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
  private _tags = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTags[] | cdktf.IResolvable) {
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
  private _templateParams = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesTemplateParams[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes {
  /**
  * Device family
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#product_family ConfigurationTemplateImportTemplate#product_family}
  */
  readonly productFamily?: string;
  /**
  * Device series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#product_series ConfigurationTemplateImportTemplate#product_series}
  */
  readonly productSeries?: string;
  /**
  * Device type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#product_type ConfigurationTemplateImportTemplate#product_type}
  */
  readonly productType?: string;
}

export function configurationTemplateImportTemplateParametersPayloadDeviceTypesToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadDeviceTypesToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadDeviceTypesOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#max_value ConfigurationTemplateImportTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#min_value ConfigurationTemplateImportTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_selected_values ConfigurationTemplateImportTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_type ConfigurationTemplateImportTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_values ConfigurationTemplateImportTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#binding ConfigurationTemplateImportTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#custom_order ConfigurationTemplateImportTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#data_type ConfigurationTemplateImportTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_value ConfigurationTemplateImportTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#description ConfigurationTemplateImportTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#display_name ConfigurationTemplateImportTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#group ConfigurationTemplateImportTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#instruction_text ConfigurationTemplateImportTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#key ConfigurationTemplateImportTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#not_param ConfigurationTemplateImportTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#order ConfigurationTemplateImportTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#param_array ConfigurationTemplateImportTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#parameter_name ConfigurationTemplateImportTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#provider ConfigurationTemplateImportTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#required ConfigurationTemplateImportTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#range ConfigurationTemplateImportTemplate#range}
  */
  readonly range?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection ConfigurationTemplateImportTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams | cdktf.IResolvable | undefined) {
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
  private _range = new ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsSelection[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadTags {
  /**
  * UUID of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of tag
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#name ConfigurationTemplateImportTemplate#name}
  */
  readonly name?: string;
}

export function configurationTemplateImportTemplateParametersPayloadTagsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function configurationTemplateImportTemplateParametersPayloadTagsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTags | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadTags | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTagsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadTags[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadTagsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange {
  /**
  * UUID of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#max_value ConfigurationTemplateImportTemplate#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#min_value ConfigurationTemplateImportTemplate#min_value}
  */
  readonly minValue?: number;
}

export function configurationTemplateImportTemplateParametersPayloadTemplateParamsRangeToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadTemplateParamsRangeToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRangeList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRangeOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection {
  /**
  * Default selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_selected_values ConfigurationTemplateImportTemplate#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * UUID of selection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of selection(SINGLE_SELECT or MULTI_SELECT)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_type ConfigurationTemplateImportTemplate#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection_values ConfigurationTemplateImportTemplate#selection_values}
  */
  readonly selectionValues?: string;
}

export function configurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadTemplateParams {
  /**
  * Bind to source
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#binding ConfigurationTemplateImportTemplate#binding}
  */
  readonly binding?: string;
  /**
  * CustomOrder of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#custom_order ConfigurationTemplateImportTemplate#custom_order}
  */
  readonly customOrder?: number;
  /**
  * Datatype of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#data_type ConfigurationTemplateImportTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Default value of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#default_value ConfigurationTemplateImportTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#description ConfigurationTemplateImportTemplate#description}
  */
  readonly description?: string;
  /**
  * Display name of param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#display_name ConfigurationTemplateImportTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * group
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#group ConfigurationTemplateImportTemplate#group}
  */
  readonly group?: string;
  /**
  * UUID of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction text for param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#instruction_text ConfigurationTemplateImportTemplate#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#key ConfigurationTemplateImportTemplate#key}
  */
  readonly key?: string;
  /**
  * Is it not a variable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#not_param ConfigurationTemplateImportTemplate#not_param}
  */
  readonly notParam?: string;
  /**
  * Order of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#order ConfigurationTemplateImportTemplate#order}
  */
  readonly order?: number;
  /**
  * Is it an array
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#param_array ConfigurationTemplateImportTemplate#param_array}
  */
  readonly paramArray?: string;
  /**
  * Name of template param
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#parameter_name ConfigurationTemplateImportTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * provider
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#provider ConfigurationTemplateImportTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Is param required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#required ConfigurationTemplateImportTemplate#required}
  */
  readonly required?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#range ConfigurationTemplateImportTemplate#range}
  */
  readonly range?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange[] | cdktf.IResolvable;
  /**
  * selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#selection ConfigurationTemplateImportTemplate#selection}
  */
  readonly selection?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersPayloadTemplateParamsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParams | cdktf.IResolvable): any {
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
    range: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadTemplateParamsRangeToTerraform, true)(struct!.range),
    selection: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionToTerraform, true)(struct!.selection),
  }
}


export function configurationTemplateImportTemplateParametersPayloadTemplateParamsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadTemplateParamsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRangeList",
    },
    selection: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionToHclTerraform, true)(struct!.selection),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadTemplateParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadTemplateParams | cdktf.IResolvable | undefined) {
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
  private _range = new ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsRange[] | cdktf.IResolvable) {
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
  private _selection = new ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelectionList(this, "selection", false);
  public get selection() {
    return this._selection;
  }
  public putSelection(value: ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsSelection[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayloadValidationErrors {
  /**
  * Validation or design conflicts errors of rollback template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#rollback_template_errors ConfigurationTemplateImportTemplate#rollback_template_errors}
  */
  readonly rollbackTemplateErrors?: string[];
  /**
  * Validation or design conflicts errors
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_errors ConfigurationTemplateImportTemplate#template_errors}
  */
  readonly templateErrors?: string[];
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_id ConfigurationTemplateImportTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_version ConfigurationTemplateImportTemplate#template_version}
  */
  readonly templateVersion?: string;
}

export function configurationTemplateImportTemplateParametersPayloadValidationErrorsToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadValidationErrors | cdktf.IResolvable): any {
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


export function configurationTemplateImportTemplateParametersPayloadValidationErrorsToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayloadValidationErrors | cdktf.IResolvable): any {
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

export class ConfigurationTemplateImportTemplateParametersPayloadValidationErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayloadValidationErrors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayloadValidationErrors | cdktf.IResolvable | undefined) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadValidationErrorsList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayloadValidationErrors[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadValidationErrorsOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParametersPayload {
  /**
  * Author of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#author ConfigurationTemplateImportTemplate#author}
  */
  readonly author?: string;
  /**
  * Is it composite template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#composite ConfigurationTemplateImportTemplate#composite}
  */
  readonly composite?: string;
  /**
  * Create time of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#create_time ConfigurationTemplateImportTemplate#create_time}
  */
  readonly createTime?: number;
  /**
  * Custom Params Order
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#custom_params_order ConfigurationTemplateImportTemplate#custom_params_order}
  */
  readonly customParamsOrder?: string;
  /**
  * Description of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#description ConfigurationTemplateImportTemplate#description}
  */
  readonly description?: string;
  /**
  * Define failure policy if template provisioning fails
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#failure_policy ConfigurationTemplateImportTemplate#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * UUID of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#id ConfigurationTemplateImportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template language (JINJA or VELOCITY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#language ConfigurationTemplateImportTemplate#language}
  */
  readonly language?: string;
  /**
  * Update time of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#last_update_time ConfigurationTemplateImportTemplate#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Latest versioned template time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#latest_version_time ConfigurationTemplateImportTemplate#latest_version_time}
  */
  readonly latestVersionTime?: number;
  /**
  * Name of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#name ConfigurationTemplateImportTemplate#name}
  */
  readonly name?: string;
  /**
  * Parent templateID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#parent_template_id ConfigurationTemplateImportTemplate#parent_template_id}
  */
  readonly parentTemplateId?: string;
  /**
  * Project UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#project_id ConfigurationTemplateImportTemplate#project_id}
  */
  readonly projectId?: string;
  /**
  * Project name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#project_name ConfigurationTemplateImportTemplate#project_name}
  */
  readonly projectName?: string;
  /**
  * Rollback template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#rollback_template_content ConfigurationTemplateImportTemplate#rollback_template_content}
  */
  readonly rollbackTemplateContent?: string;
  /**
  * Applicable device software type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#software_type ConfigurationTemplateImportTemplate#software_type}
  */
  readonly softwareType?: string;
  /**
  * Applicable device software variant
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#software_variant ConfigurationTemplateImportTemplate#software_variant}
  */
  readonly softwareVariant?: string;
  /**
  * Applicable device software version
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#software_version ConfigurationTemplateImportTemplate#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Template content
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_content ConfigurationTemplateImportTemplate#template_content}
  */
  readonly templateContent?: string;
  /**
  * Current version of template
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#version ConfigurationTemplateImportTemplate#version}
  */
  readonly version?: string;
  /**
  * containing_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#containing_templates ConfigurationTemplateImportTemplate#containing_templates}
  */
  readonly containingTemplates?: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates[] | cdktf.IResolvable;
  /**
  * device_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#device_types ConfigurationTemplateImportTemplate#device_types}
  */
  readonly deviceTypes?: ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes[] | cdktf.IResolvable;
  /**
  * rollback_template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#rollback_template_params ConfigurationTemplateImportTemplate#rollback_template_params}
  */
  readonly rollbackTemplateParams?: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#tags ConfigurationTemplateImportTemplate#tags}
  */
  readonly tags?: ConfigurationTemplateImportTemplateParametersPayloadTags[] | cdktf.IResolvable;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#template_params ConfigurationTemplateImportTemplate#template_params}
  */
  readonly templateParams?: ConfigurationTemplateImportTemplateParametersPayloadTemplateParams[] | cdktf.IResolvable;
  /**
  * validation_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#validation_errors ConfigurationTemplateImportTemplate#validation_errors}
  */
  readonly validationErrors?: ConfigurationTemplateImportTemplateParametersPayloadValidationErrors[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersPayloadToTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayload | cdktf.IResolvable): any {
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
    containing_templates: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadContainingTemplatesToTerraform, true)(struct!.containingTemplates),
    device_types: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadDeviceTypesToTerraform, true)(struct!.deviceTypes),
    rollback_template_params: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsToTerraform, true)(struct!.rollbackTemplateParams),
    tags: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadTagsToTerraform, true)(struct!.tags),
    template_params: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadTemplateParamsToTerraform, true)(struct!.templateParams),
    validation_errors: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadValidationErrorsToTerraform, true)(struct!.validationErrors),
  }
}


export function configurationTemplateImportTemplateParametersPayloadToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersPayload | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadContainingTemplatesToHclTerraform, true)(struct!.containingTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesList",
    },
    device_types: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadDeviceTypesToHclTerraform, true)(struct!.deviceTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadDeviceTypesList",
    },
    rollback_template_params: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsToHclTerraform, true)(struct!.rollbackTemplateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsList",
    },
    tags: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadTagsList",
    },
    template_params: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsList",
    },
    validation_errors: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadValidationErrorsToHclTerraform, true)(struct!.validationErrors),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadValidationErrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationTemplateImportTemplateParametersPayload | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigurationTemplateImportTemplateParametersPayload | cdktf.IResolvable | undefined) {
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
  private _containingTemplates = new ConfigurationTemplateImportTemplateParametersPayloadContainingTemplatesList(this, "containing_templates", false);
  public get containingTemplates() {
    return this._containingTemplates;
  }
  public putContainingTemplates(value: ConfigurationTemplateImportTemplateParametersPayloadContainingTemplates[] | cdktf.IResolvable) {
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
  private _deviceTypes = new ConfigurationTemplateImportTemplateParametersPayloadDeviceTypesList(this, "device_types", false);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: ConfigurationTemplateImportTemplateParametersPayloadDeviceTypes[] | cdktf.IResolvable) {
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
  private _rollbackTemplateParams = new ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParamsList(this, "rollback_template_params", false);
  public get rollbackTemplateParams() {
    return this._rollbackTemplateParams;
  }
  public putRollbackTemplateParams(value: ConfigurationTemplateImportTemplateParametersPayloadRollbackTemplateParams[] | cdktf.IResolvable) {
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
  private _tags = new ConfigurationTemplateImportTemplateParametersPayloadTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigurationTemplateImportTemplateParametersPayloadTags[] | cdktf.IResolvable) {
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
  private _templateParams = new ConfigurationTemplateImportTemplateParametersPayloadTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: ConfigurationTemplateImportTemplateParametersPayloadTemplateParams[] | cdktf.IResolvable) {
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
  private _validationErrors = new ConfigurationTemplateImportTemplateParametersPayloadValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }
  public putValidationErrors(value: ConfigurationTemplateImportTemplateParametersPayloadValidationErrors[] | cdktf.IResolvable) {
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

export class ConfigurationTemplateImportTemplateParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : ConfigurationTemplateImportTemplateParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationTemplateImportTemplateParametersPayloadOutputReference {
    return new ConfigurationTemplateImportTemplateParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigurationTemplateImportTemplateParameters {
  /**
  * doVersion query parameter. If this flag is true then it creates a new version of the template with the imported contents in case if the templates already exists. " If this flag is false and if template already exists, then operation fails with 'Template already exists' error
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#do_version ConfigurationTemplateImportTemplate#do_version}
  */
  readonly doVersion?: boolean | cdktf.IResolvable;
  /**
  * projectName path parameter. Project name to create template under the project
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#project_name ConfigurationTemplateImportTemplate#project_name}
  */
  readonly projectName: string;
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#payload ConfigurationTemplateImportTemplate#payload}
  */
  readonly payload?: ConfigurationTemplateImportTemplateParametersPayload[] | cdktf.IResolvable;
}

export function configurationTemplateImportTemplateParametersToTerraform(struct?: ConfigurationTemplateImportTemplateParametersOutputReference | ConfigurationTemplateImportTemplateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    do_version: cdktf.booleanToTerraform(struct!.doVersion),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    payload: cdktf.listMapper(configurationTemplateImportTemplateParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function configurationTemplateImportTemplateParametersToHclTerraform(struct?: ConfigurationTemplateImportTemplateParametersOutputReference | ConfigurationTemplateImportTemplateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    do_version: {
      value: cdktf.booleanToHclTerraform(struct!.doVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.listMapperHcl(configurationTemplateImportTemplateParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigurationTemplateImportTemplateParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationTemplateImportTemplateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigurationTemplateImportTemplateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.doVersion = this._doVersion;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationTemplateImportTemplateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._doVersion = undefined;
      this._projectName = undefined;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._doVersion = value.doVersion;
      this._projectName = value.projectName;
      this._payload.internalValue = value.payload;
    }
  }

  // do_version - computed: false, optional: true, required: false
  private _doVersion?: boolean | cdktf.IResolvable; 
  public get doVersion() {
    return this.getBooleanAttribute('do_version');
  }
  public set doVersion(value: boolean | cdktf.IResolvable) {
    this._doVersion = value;
  }
  public resetDoVersion() {
    this._doVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doVersionInput() {
    return this._doVersion;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new ConfigurationTemplateImportTemplateParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: ConfigurationTemplateImportTemplateParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template dnacenter_configuration_template_import_template}
*/
export class ConfigurationTemplateImportTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_configuration_template_import_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationTemplateImportTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationTemplateImportTemplate to import
  * @param importFromId The id of the existing ConfigurationTemplateImportTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationTemplateImportTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_configuration_template_import_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/configuration_template_import_template dnacenter_configuration_template_import_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationTemplateImportTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationTemplateImportTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_configuration_template_import_template',
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
  private _item = new ConfigurationTemplateImportTemplateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new ConfigurationTemplateImportTemplateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ConfigurationTemplateImportTemplateParameters) {
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
      parameters: configurationTemplateImportTemplateParametersToTerraform(this._parameters.internalValue),
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
        value: configurationTemplateImportTemplateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigurationTemplateImportTemplateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
