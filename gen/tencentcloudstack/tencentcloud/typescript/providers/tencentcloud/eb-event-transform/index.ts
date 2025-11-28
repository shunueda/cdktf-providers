// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbEventTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * event bus Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#event_bus_id EbEventTransform#event_bus_id}
  */
  readonly eventBusId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#id EbEventTransform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ruleId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#rule_id EbEventTransform#rule_id}
  */
  readonly ruleId: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#transformations EbEventTransform#transformations}
  */
  readonly transformations: EbEventTransformTransformations[] | cdktf.IResolvable;
}
export interface EbEventTransformTransformationsEtlFilter {
  /**
  * Grammatical Rules are consistent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#filter EbEventTransform#filter}
  */
  readonly filter: string;
}

export function ebEventTransformTransformationsEtlFilterToTerraform(struct?: EbEventTransformTransformationsEtlFilterOutputReference | EbEventTransformTransformationsEtlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function ebEventTransformTransformationsEtlFilterToHclTerraform(struct?: EbEventTransformTransformationsEtlFilterOutputReference | EbEventTransformTransformationsEtlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTransformTransformationsEtlFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTransformTransformationsEtlFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTransformTransformationsEtlFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface EbEventTransformTransformationsExtractionTextParams {
  /**
  * Fill in the regular expression: length 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#regex EbEventTransform#regex}
  */
  readonly regex?: string;
  /**
  * `Comma`, `|`, `tab`, `space`, `newline`, `%`, `#`, the limit length is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#separator EbEventTransform#separator}
  */
  readonly separator?: string;
}

export function ebEventTransformTransformationsExtractionTextParamsToTerraform(struct?: EbEventTransformTransformationsExtractionTextParamsOutputReference | EbEventTransformTransformationsExtractionTextParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}


export function ebEventTransformTransformationsExtractionTextParamsToHclTerraform(struct?: EbEventTransformTransformationsExtractionTextParamsOutputReference | EbEventTransformTransformationsExtractionTextParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTransformTransformationsExtractionTextParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTransformTransformationsExtractionTextParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTransformTransformationsExtractionTextParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
      this._separator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
      this._separator = value.separator;
    }
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface EbEventTransformTransformationsExtraction {
  /**
  * JsonPath, if not specified, the default value $.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#extraction_input_path EbEventTransform#extraction_input_path}
  */
  readonly extractionInputPath: string;
  /**
  * Value: `TEXT`, `JSON`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#format EbEventTransform#format}
  */
  readonly format: string;
  /**
  * text_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#text_params EbEventTransform#text_params}
  */
  readonly textParams?: EbEventTransformTransformationsExtractionTextParams;
}

export function ebEventTransformTransformationsExtractionToTerraform(struct?: EbEventTransformTransformationsExtractionOutputReference | EbEventTransformTransformationsExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extraction_input_path: cdktf.stringToTerraform(struct!.extractionInputPath),
    format: cdktf.stringToTerraform(struct!.format),
    text_params: ebEventTransformTransformationsExtractionTextParamsToTerraform(struct!.textParams),
  }
}


export function ebEventTransformTransformationsExtractionToHclTerraform(struct?: EbEventTransformTransformationsExtractionOutputReference | EbEventTransformTransformationsExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extraction_input_path: {
      value: cdktf.stringToHclTerraform(struct!.extractionInputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_params: {
      value: ebEventTransformTransformationsExtractionTextParamsToHclTerraform(struct!.textParams),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTransformTransformationsExtractionTextParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTransformTransformationsExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTransformTransformationsExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionInputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionInputPath = this._extractionInputPath;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._textParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textParams = this._textParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTransformTransformationsExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extractionInputPath = undefined;
      this._format = undefined;
      this._textParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extractionInputPath = value.extractionInputPath;
      this._format = value.format;
      this._textParams.internalValue = value.textParams;
    }
  }

  // extraction_input_path - computed: false, optional: false, required: true
  private _extractionInputPath?: string; 
  public get extractionInputPath() {
    return this.getStringAttribute('extraction_input_path');
  }
  public set extractionInputPath(value: string) {
    this._extractionInputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInputPathInput() {
    return this._extractionInputPath;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // text_params - computed: false, optional: true, required: false
  private _textParams = new EbEventTransformTransformationsExtractionTextParamsOutputReference(this, "text_params");
  public get textParams() {
    return this._textParams;
  }
  public putTextParams(value: EbEventTransformTransformationsExtractionTextParams) {
    this._textParams.internalValue = value;
  }
  public resetTextParams() {
    this._textParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textParamsInput() {
    return this._textParams.internalValue;
  }
}
export interface EbEventTransformTransformationsTransformOutputStructs {
  /**
  * Corresponding to the key in the output json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#key EbEventTransform#key}
  */
  readonly key: string;
  /**
  * You can fill in the json-path and also support constants or built-in keyword date types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#value EbEventTransform#value}
  */
  readonly value: string;
  /**
  * The data type of value, optional values: `STRING`, `NUMBER`, `BOOLEAN`, `NULL`, `SYS_VARIABLE`, `JSONPATH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#value_type EbEventTransform#value_type}
  */
  readonly valueType: string;
}

export function ebEventTransformTransformationsTransformOutputStructsToTerraform(struct?: EbEventTransformTransformationsTransformOutputStructs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function ebEventTransformTransformationsTransformOutputStructsToHclTerraform(struct?: EbEventTransformTransformationsTransformOutputStructs | cdktf.IResolvable): any {
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
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTransformTransformationsTransformOutputStructsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EbEventTransformTransformationsTransformOutputStructs | cdktf.IResolvable | undefined {
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
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTransformTransformationsTransformOutputStructs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
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
      this._valueType = value.valueType;
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

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class EbEventTransformTransformationsTransformOutputStructsList extends cdktf.ComplexList {
  public internalValue? : EbEventTransformTransformationsTransformOutputStructs[] | cdktf.IResolvable

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
  public get(index: number): EbEventTransformTransformationsTransformOutputStructsOutputReference {
    return new EbEventTransformTransformationsTransformOutputStructsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EbEventTransformTransformationsTransform {
  /**
  * output_structs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#output_structs EbEventTransform#output_structs}
  */
  readonly outputStructs: EbEventTransformTransformationsTransformOutputStructs[] | cdktf.IResolvable;
}

export function ebEventTransformTransformationsTransformToTerraform(struct?: EbEventTransformTransformationsTransformOutputReference | EbEventTransformTransformationsTransform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_structs: cdktf.listMapper(ebEventTransformTransformationsTransformOutputStructsToTerraform, true)(struct!.outputStructs),
  }
}


export function ebEventTransformTransformationsTransformToHclTerraform(struct?: EbEventTransformTransformationsTransformOutputReference | EbEventTransformTransformationsTransform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_structs: {
      value: cdktf.listMapperHcl(ebEventTransformTransformationsTransformOutputStructsToHclTerraform, true)(struct!.outputStructs),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTransformTransformationsTransformOutputStructsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTransformTransformationsTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbEventTransformTransformationsTransform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputStructs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStructs = this._outputStructs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTransformTransformationsTransform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputStructs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputStructs.internalValue = value.outputStructs;
    }
  }

  // output_structs - computed: false, optional: false, required: true
  private _outputStructs = new EbEventTransformTransformationsTransformOutputStructsList(this, "output_structs", false);
  public get outputStructs() {
    return this._outputStructs;
  }
  public putOutputStructs(value: EbEventTransformTransformationsTransformOutputStructs[] | cdktf.IResolvable) {
    this._outputStructs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStructsInput() {
    return this._outputStructs.internalValue;
  }
}
export interface EbEventTransformTransformations {
  /**
  * etl_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#etl_filter EbEventTransform#etl_filter}
  */
  readonly etlFilter?: EbEventTransformTransformationsEtlFilter;
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#extraction EbEventTransform#extraction}
  */
  readonly extraction?: EbEventTransformTransformationsExtraction;
  /**
  * transform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#transform EbEventTransform#transform}
  */
  readonly transform?: EbEventTransformTransformationsTransform;
}

export function ebEventTransformTransformationsToTerraform(struct?: EbEventTransformTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etl_filter: ebEventTransformTransformationsEtlFilterToTerraform(struct!.etlFilter),
    extraction: ebEventTransformTransformationsExtractionToTerraform(struct!.extraction),
    transform: ebEventTransformTransformationsTransformToTerraform(struct!.transform),
  }
}


export function ebEventTransformTransformationsToHclTerraform(struct?: EbEventTransformTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etl_filter: {
      value: ebEventTransformTransformationsEtlFilterToHclTerraform(struct!.etlFilter),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTransformTransformationsEtlFilterList",
    },
    extraction: {
      value: ebEventTransformTransformationsExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTransformTransformationsExtractionList",
    },
    transform: {
      value: ebEventTransformTransformationsTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "list",
      storageClassType: "EbEventTransformTransformationsTransformList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbEventTransformTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EbEventTransformTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etlFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etlFilter = this._etlFilter?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._transform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbEventTransformTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etlFilter.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._transform.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etlFilter.internalValue = value.etlFilter;
      this._extraction.internalValue = value.extraction;
      this._transform.internalValue = value.transform;
    }
  }

  // etl_filter - computed: false, optional: true, required: false
  private _etlFilter = new EbEventTransformTransformationsEtlFilterOutputReference(this, "etl_filter");
  public get etlFilter() {
    return this._etlFilter;
  }
  public putEtlFilter(value: EbEventTransformTransformationsEtlFilter) {
    this._etlFilter.internalValue = value;
  }
  public resetEtlFilter() {
    this._etlFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etlFilterInput() {
    return this._etlFilter.internalValue;
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new EbEventTransformTransformationsExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: EbEventTransformTransformationsExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // transform - computed: false, optional: true, required: false
  private _transform = new EbEventTransformTransformationsTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: EbEventTransformTransformationsTransform) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }
}

export class EbEventTransformTransformationsList extends cdktf.ComplexList {
  public internalValue? : EbEventTransformTransformations[] | cdktf.IResolvable

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
  public get(index: number): EbEventTransformTransformationsOutputReference {
    return new EbEventTransformTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform tencentcloud_eb_event_transform}
*/
export class EbEventTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eb_event_transform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbEventTransform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbEventTransform to import
  * @param importFromId The id of the existing EbEventTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbEventTransform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eb_event_transform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/eb_event_transform tencentcloud_eb_event_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbEventTransformConfig
  */
  public constructor(scope: Construct, id: string, config: EbEventTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eb_event_transform',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eventBusId = config.eventBusId;
    this._id = config.id;
    this._ruleId = config.ruleId;
    this._transformations.internalValue = config.transformations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_bus_id - computed: false, optional: false, required: true
  private _eventBusId?: string; 
  public get eventBusId() {
    return this.getStringAttribute('event_bus_id');
  }
  public set eventBusId(value: string) {
    this._eventBusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusIdInput() {
    return this._eventBusId;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // transformations - computed: false, optional: false, required: true
  private _transformations = new EbEventTransformTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: EbEventTransformTransformations[] | cdktf.IResolvable) {
    this._transformations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_bus_id: cdktf.stringToTerraform(this._eventBusId),
      id: cdktf.stringToTerraform(this._id),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      transformations: cdktf.listMapper(ebEventTransformTransformationsToTerraform, true)(this._transformations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_bus_id: {
        value: cdktf.stringToHclTerraform(this._eventBusId),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transformations: {
        value: cdktf.listMapperHcl(ebEventTransformTransformationsToHclTerraform, true)(this._transformations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbEventTransformTransformationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
