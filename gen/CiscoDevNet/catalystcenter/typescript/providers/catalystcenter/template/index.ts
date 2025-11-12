// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is it composite template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#composite Template#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * Containing templates for composite template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#containing_templates Template#containing_templates}
  */
  readonly containingTemplates?: TemplateContainingTemplates[] | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * List of device types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#device_types Template#device_types}
  */
  readonly deviceTypes: TemplateDeviceTypes[] | cdktf.IResolvable;
  /**
  * Language of the template
  *   - Choices: `JINJA`, `VELOCITY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#language Template#language}
  */
  readonly language: string;
  /**
  * Name of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#project_id Template#project_id}
  */
  readonly projectId: string;
  /**
  * Software type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#software_type Template#software_type}
  */
  readonly softwareType: string;
  /**
  * Software variant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#software_variant Template#software_variant}
  */
  readonly softwareVariant?: string;
  /**
  * Software version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#software_version Template#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Template content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#template_content Template#template_content}
  */
  readonly templateContent?: string;
  /**
  * List of template parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#template_params Template#template_params}
  */
  readonly templateParams?: TemplateTemplateParams[] | cdktf.IResolvable;
}
export interface TemplateContainingTemplates {
  /**
  * Is it composite template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#composite Template#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * ID of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#id Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Language of the template
  *   - Choices: `JINJA`, `VELOCITY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#language Template#language}
  */
  readonly language: string;
  /**
  * Name of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#project_name Template#project_name}
  */
  readonly projectName: string;
}

export function templateContainingTemplatesToTerraform(struct?: TemplateContainingTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    composite: cdktf.booleanToTerraform(struct!.composite),
    id: cdktf.stringToTerraform(struct!.id),
    language: cdktf.stringToTerraform(struct!.language),
    name: cdktf.stringToTerraform(struct!.name),
    project_name: cdktf.stringToTerraform(struct!.projectName),
  }
}


export function templateContainingTemplatesToHclTerraform(struct?: TemplateContainingTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    composite: {
      value: cdktf.booleanToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateContainingTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateContainingTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateContainingTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._composite = undefined;
      this._id = undefined;
      this._language = undefined;
      this._name = undefined;
      this._projectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._composite = value.composite;
      this._id = value.id;
      this._language = value.language;
      this._name = value.name;
      this._projectName = value.projectName;
    }
  }

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
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

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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
}

export class TemplateContainingTemplatesList extends cdktf.ComplexList {
  public internalValue? : TemplateContainingTemplates[] | cdktf.IResolvable

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
  public get(index: number): TemplateContainingTemplatesOutputReference {
    return new TemplateContainingTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateDeviceTypes {
  /**
  * Product family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#product_family Template#product_family}
  */
  readonly productFamily: string;
  /**
  * Product series
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#product_series Template#product_series}
  */
  readonly productSeries?: string;
  /**
  * Product type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#product_type Template#product_type}
  */
  readonly productType?: string;
}

export function templateDeviceTypesToTerraform(struct?: TemplateDeviceTypes | cdktf.IResolvable): any {
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


export function templateDeviceTypesToHclTerraform(struct?: TemplateDeviceTypes | cdktf.IResolvable): any {
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

export class TemplateDeviceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateDeviceTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TemplateDeviceTypes | cdktf.IResolvable | undefined) {
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

  // product_family - computed: false, optional: false, required: true
  private _productFamily?: string; 
  public get productFamily() {
    return this.getStringAttribute('product_family');
  }
  public set productFamily(value: string) {
    this._productFamily = value;
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

export class TemplateDeviceTypesList extends cdktf.ComplexList {
  public internalValue? : TemplateDeviceTypes[] | cdktf.IResolvable

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
  public get(index: number): TemplateDeviceTypesOutputReference {
    return new TemplateDeviceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateTemplateParamsRanges {
  /**
  * Max value of range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#max_value Template#max_value}
  */
  readonly maxValue?: number;
  /**
  * Min value of range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#min_value Template#min_value}
  */
  readonly minValue?: number;
}

export function templateTemplateParamsRangesToTerraform(struct?: TemplateTemplateParamsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function templateTemplateParamsRangesToHclTerraform(struct?: TemplateTemplateParamsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class TemplateTemplateParamsRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateTemplateParamsRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: TemplateTemplateParamsRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
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

export class TemplateTemplateParamsRangesList extends cdktf.ComplexList {
  public internalValue? : TemplateTemplateParamsRanges[] | cdktf.IResolvable

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
  public get(index: number): TemplateTemplateParamsRangesOutputReference {
    return new TemplateTemplateParamsRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateTemplateParams {
  /**
  * Bind to source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#binding Template#binding}
  */
  readonly binding?: string;
  /**
  * Datatype of template parameter
  *   - Choices: `STRING`, `INTEGER`, `IPADDRESS`, `MACADDRESS`, `SECTIONDIVIDER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#data_type Template#data_type}
  */
  readonly dataType: string;
  /**
  * Default selection values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#default_selected_values Template#default_selected_values}
  */
  readonly defaultSelectedValues?: string[];
  /**
  * Default value of template parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#default_value Template#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Description of template parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * Display name of template parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#display_name Template#display_name}
  */
  readonly displayName?: string;
  /**
  * Instruction text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#instruction_text Template#instruction_text}
  */
  readonly instructionText?: string;
  /**
  * Is it not a variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#not_param Template#not_param}
  */
  readonly notParam?: boolean | cdktf.IResolvable;
  /**
  * Is it an array
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#param_array Template#param_array}
  */
  readonly paramArray?: boolean | cdktf.IResolvable;
  /**
  * Name of the template parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#parameter_name Template#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * List of ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#ranges Template#ranges}
  */
  readonly ranges?: TemplateTemplateParamsRanges[] | cdktf.IResolvable;
  /**
  * Is parameter required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#required Template#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Type of selection
  *   - Choices: `SINGLE_SELECT`, `MULTI_SELECT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#selection_type Template#selection_type}
  */
  readonly selectionType?: string;
  /**
  * Selection values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#selection_values Template#selection_values}
  */
  readonly selectionValues?: { [key: string]: string };
}

export function templateTemplateParamsToTerraform(struct?: TemplateTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: cdktf.stringToTerraform(struct!.binding),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    default_selected_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultSelectedValues),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    instruction_text: cdktf.stringToTerraform(struct!.instructionText),
    not_param: cdktf.booleanToTerraform(struct!.notParam),
    param_array: cdktf.booleanToTerraform(struct!.paramArray),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    ranges: cdktf.listMapper(templateTemplateParamsRangesToTerraform, false)(struct!.ranges),
    required: cdktf.booleanToTerraform(struct!.required),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
    selection_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selectionValues),
  }
}


export function templateTemplateParamsToHclTerraform(struct?: TemplateTemplateParams | cdktf.IResolvable): any {
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
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_selected_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultSelectedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    instruction_text: {
      value: cdktf.stringToHclTerraform(struct!.instructionText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_param: {
      value: cdktf.booleanToHclTerraform(struct!.notParam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    param_array: {
      value: cdktf.booleanToHclTerraform(struct!.paramArray),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ranges: {
      value: cdktf.listMapperHcl(templateTemplateParamsRangesToHclTerraform, false)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateTemplateParamsRangesList",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selectionValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateTemplateParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._defaultSelectedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSelectedValues = this._defaultSelectedValues;
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
    if (this._instructionText !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructionText = this._instructionText;
    }
    if (this._notParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.notParam = this._notParam;
    }
    if (this._paramArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramArray = this._paramArray;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
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

  public set internalValue(value: TemplateTemplateParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding = undefined;
      this._dataType = undefined;
      this._defaultSelectedValues = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._instructionText = undefined;
      this._notParam = undefined;
      this._paramArray = undefined;
      this._parameterName = undefined;
      this._ranges.internalValue = undefined;
      this._required = undefined;
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
      this._binding = value.binding;
      this._dataType = value.dataType;
      this._defaultSelectedValues = value.defaultSelectedValues;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._displayName = value.displayName;
      this._instructionText = value.instructionText;
      this._notParam = value.notParam;
      this._paramArray = value.paramArray;
      this._parameterName = value.parameterName;
      this._ranges.internalValue = value.ranges;
      this._required = value.required;
      this._selectionType = value.selectionType;
      this._selectionValues = value.selectionValues;
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

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // default_selected_values - computed: false, optional: true, required: false
  private _defaultSelectedValues?: string[]; 
  public get defaultSelectedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('default_selected_values'));
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

  // not_param - computed: false, optional: true, required: false
  private _notParam?: boolean | cdktf.IResolvable; 
  public get notParam() {
    return this.getBooleanAttribute('not_param');
  }
  public set notParam(value: boolean | cdktf.IResolvable) {
    this._notParam = value;
  }
  public resetNotParam() {
    this._notParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notParamInput() {
    return this._notParam;
  }

  // param_array - computed: false, optional: true, required: false
  private _paramArray?: boolean | cdktf.IResolvable; 
  public get paramArray() {
    return this.getBooleanAttribute('param_array');
  }
  public set paramArray(value: boolean | cdktf.IResolvable) {
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

  // ranges - computed: false, optional: true, required: false
  private _ranges = new TemplateTemplateParamsRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: TemplateTemplateParamsRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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
  private _selectionValues?: { [key: string]: string }; 
  public get selectionValues() {
    return this.getStringMapAttribute('selection_values');
  }
  public set selectionValues(value: { [key: string]: string }) {
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

export class TemplateTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : TemplateTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): TemplateTemplateParamsOutputReference {
    return new TemplateTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template catalystcenter_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/template catalystcenter_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_template',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._composite = config.composite;
    this._containingTemplates.internalValue = config.containingTemplates;
    this._description = config.description;
    this._deviceTypes.internalValue = config.deviceTypes;
    this._language = config.language;
    this._name = config.name;
    this._projectId = config.projectId;
    this._softwareType = config.softwareType;
    this._softwareVariant = config.softwareVariant;
    this._softwareVersion = config.softwareVersion;
    this._templateContent = config.templateContent;
    this._templateParams.internalValue = config.templateParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // containing_templates - computed: false, optional: true, required: false
  private _containingTemplates = new TemplateContainingTemplatesList(this, "containing_templates", false);
  public get containingTemplates() {
    return this._containingTemplates;
  }
  public putContainingTemplates(value: TemplateContainingTemplates[] | cdktf.IResolvable) {
    this._containingTemplates.internalValue = value;
  }
  public resetContainingTemplates() {
    this._containingTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containingTemplatesInput() {
    return this._containingTemplates.internalValue;
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

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes = new TemplateDeviceTypesList(this, "device_types", true);
  public get deviceTypes() {
    return this._deviceTypes;
  }
  public putDeviceTypes(value: TemplateDeviceTypes[] | cdktf.IResolvable) {
    this._deviceTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // software_type - computed: false, optional: false, required: true
  private _softwareType?: string; 
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }
  public set softwareType(value: string) {
    this._softwareType = value;
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

  // template_params - computed: false, optional: true, required: false
  private _templateParams = new TemplateTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: TemplateTemplateParams[] | cdktf.IResolvable) {
    this._templateParams.internalValue = value;
  }
  public resetTemplateParams() {
    this._templateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParamsInput() {
    return this._templateParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      composite: cdktf.booleanToTerraform(this._composite),
      containing_templates: cdktf.listMapper(templateContainingTemplatesToTerraform, false)(this._containingTemplates.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(templateDeviceTypesToTerraform, false)(this._deviceTypes.internalValue),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      software_type: cdktf.stringToTerraform(this._softwareType),
      software_variant: cdktf.stringToTerraform(this._softwareVariant),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      template_content: cdktf.stringToTerraform(this._templateContent),
      template_params: cdktf.listMapper(templateTemplateParamsToTerraform, false)(this._templateParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      composite: {
        value: cdktf.booleanToHclTerraform(this._composite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      containing_templates: {
        value: cdktf.listMapperHcl(templateContainingTemplatesToHclTerraform, false)(this._containingTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateContainingTemplatesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(templateDeviceTypesToHclTerraform, false)(this._deviceTypes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TemplateDeviceTypesList",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_type: {
        value: cdktf.stringToHclTerraform(this._softwareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_variant: {
        value: cdktf.stringToHclTerraform(this._softwareVariant),
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
      template_content: {
        value: cdktf.stringToHclTerraform(this._templateContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_params: {
        value: cdktf.listMapperHcl(templateTemplateParamsToHclTerraform, false)(this._templateParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateTemplateParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
