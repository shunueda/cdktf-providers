// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaDataViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#data_view KibanaDataView#data_view}
  */
  readonly dataView: KibanaDataViewDataView;
  /**
  * Overrides an existing data view if a data view with the provided title already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#override KibanaDataView#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#space_id KibanaDataView#space_id}
  */
  readonly spaceId?: string;
}
export interface KibanaDataViewDataViewFieldAttrs {
  /**
  * Popularity count for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#count KibanaDataView#count}
  */
  readonly count?: number;
  /**
  * Custom label for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#custom_label KibanaDataView#custom_label}
  */
  readonly customLabel?: string;
}

export function kibanaDataViewDataViewFieldAttrsToTerraform(struct?: KibanaDataViewDataViewFieldAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
  }
}


export function kibanaDataViewDataViewFieldAttrsToHclTerraform(struct?: KibanaDataViewDataViewFieldAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_label: {
      value: cdktf.stringToHclTerraform(struct!.customLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaDataViewDataViewFieldAttrsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): KibanaDataViewDataViewFieldAttrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaDataViewDataViewFieldAttrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._customLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._customLabel = value.customLabel;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // custom_label - computed: false, optional: true, required: false
  private _customLabel?: string; 
  public get customLabel() {
    return this.getStringAttribute('custom_label');
  }
  public set customLabel(value: string) {
    this._customLabel = value;
  }
  public resetCustomLabel() {
    this._customLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelInput() {
    return this._customLabel;
  }
}

export class KibanaDataViewDataViewFieldAttrsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: KibanaDataViewDataViewFieldAttrs } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): KibanaDataViewDataViewFieldAttrsOutputReference {
    return new KibanaDataViewDataViewFieldAttrsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface KibanaDataViewDataViewFieldFormatsParamsColors {
  /**
  * Background color in hex format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#background KibanaDataView#background}
  */
  readonly background?: string;
  /**
  * Range for the color rule (e.g., `-Infinity:Infinity`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#range KibanaDataView#range}
  */
  readonly range?: string;
  /**
  * Regex pattern for the color rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#regex KibanaDataView#regex}
  */
  readonly regex?: string;
  /**
  * Text color in hex format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#text KibanaDataView#text}
  */
  readonly text?: string;
}

export function kibanaDataViewDataViewFieldFormatsParamsColorsToTerraform(struct?: KibanaDataViewDataViewFieldFormatsParamsColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background: cdktf.stringToTerraform(struct!.background),
    range: cdktf.stringToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function kibanaDataViewDataViewFieldFormatsParamsColorsToHclTerraform(struct?: KibanaDataViewDataViewFieldFormatsParamsColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background: {
      value: cdktf.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaDataViewDataViewFieldFormatsParamsColorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaDataViewDataViewFieldFormatsParamsColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaDataViewDataViewFieldFormatsParamsColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._range = undefined;
      this._regex = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._range = value.range;
      this._regex = value.regex;
      this._text = value.text;
    }
  }

  // background - computed: false, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
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

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class KibanaDataViewDataViewFieldFormatsParamsColorsList extends cdktf.ComplexList {
  public internalValue? : KibanaDataViewDataViewFieldFormatsParamsColors[] | cdktf.IResolvable

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
  public get(index: number): KibanaDataViewDataViewFieldFormatsParamsColorsOutputReference {
    return new KibanaDataViewDataViewFieldFormatsParamsColorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaDataViewDataViewFieldFormatsParamsLookupEntries {
  /**
  * Key for the lookup entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#key KibanaDataView#key}
  */
  readonly key: string;
  /**
  * Value for the lookup entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#value KibanaDataView#value}
  */
  readonly value: string;
}

export function kibanaDataViewDataViewFieldFormatsParamsLookupEntriesToTerraform(struct?: KibanaDataViewDataViewFieldFormatsParamsLookupEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kibanaDataViewDataViewFieldFormatsParamsLookupEntriesToHclTerraform(struct?: KibanaDataViewDataViewFieldFormatsParamsLookupEntries | cdktf.IResolvable): any {
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

export class KibanaDataViewDataViewFieldFormatsParamsLookupEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaDataViewDataViewFieldFormatsParamsLookupEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KibanaDataViewDataViewFieldFormatsParamsLookupEntries | cdktf.IResolvable | undefined) {
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

export class KibanaDataViewDataViewFieldFormatsParamsLookupEntriesList extends cdktf.ComplexList {
  public internalValue? : KibanaDataViewDataViewFieldFormatsParamsLookupEntries[] | cdktf.IResolvable

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
  public get(index: number): KibanaDataViewDataViewFieldFormatsParamsLookupEntriesOutputReference {
    return new KibanaDataViewDataViewFieldFormatsParamsLookupEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaDataViewDataViewFieldFormatsParams {
  /**
  * Color rules for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#colors KibanaDataView#colors}
  */
  readonly colors?: KibanaDataViewDataViewFieldFormatsParamsColors[] | cdktf.IResolvable;
  /**
  * Length to truncate the field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#field_length KibanaDataView#field_length}
  */
  readonly fieldLength?: number;
  /**
  * Field type for color formatting (e.g., `string`, `number`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#field_type KibanaDataView#field_type}
  */
  readonly fieldType?: string;
  /**
  * Height for image type URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#height KibanaDataView#height}
  */
  readonly height?: number;
  /**
  * Whether to include a space before the suffix in duration format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#include_space_with_suffix KibanaDataView#include_space_with_suffix}
  */
  readonly includeSpaceWithSuffix?: boolean | cdktf.IResolvable;
  /**
  * Input format for duration fields (e.g., `hours`, `minutes`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#input_format KibanaDataView#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Label template for the field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#labeltemplate KibanaDataView#labeltemplate}
  */
  readonly labeltemplate?: string;
  /**
  * Key-value pairs for static lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#lookup_entries KibanaDataView#lookup_entries}
  */
  readonly lookupEntries?: KibanaDataViewDataViewFieldFormatsParamsLookupEntries[] | cdktf.IResolvable;
  /**
  * Output format for duration fields (e.g., `humanizePrecise`, `humanize`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#output_format KibanaDataView#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Precision for duration output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#output_precision KibanaDataView#output_precision}
  */
  readonly outputPrecision?: number;
  /**
  * Pattern for formatting the field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#pattern KibanaDataView#pattern}
  */
  readonly pattern?: string;
  /**
  * Timezone for date formatting (e.g., `America/New_York`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#timezone KibanaDataView#timezone}
  */
  readonly timezone?: string;
  /**
  * Transform to apply to string fields (e.g., `upper`, `lower`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#transform KibanaDataView#transform}
  */
  readonly transform?: string;
  /**
  * Type of URL format (e.g., `a`, `img`, `audio`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#type KibanaDataView#type}
  */
  readonly type?: string;
  /**
  * Value to display when key is not found in lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#unknown_key_value KibanaDataView#unknown_key_value}
  */
  readonly unknownKeyValue?: string;
  /**
  * URL template for the field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#urltemplate KibanaDataView#urltemplate}
  */
  readonly urltemplate?: string;
  /**
  * Whether to use short suffixes in duration format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#use_short_suffix KibanaDataView#use_short_suffix}
  */
  readonly useShortSuffix?: boolean | cdktf.IResolvable;
  /**
  * Width for image type URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#width KibanaDataView#width}
  */
  readonly width?: number;
}

export function kibanaDataViewDataViewFieldFormatsParamsToTerraform(struct?: KibanaDataViewDataViewFieldFormatsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: cdktf.listMapper(kibanaDataViewDataViewFieldFormatsParamsColorsToTerraform, false)(struct!.colors),
    field_length: cdktf.numberToTerraform(struct!.fieldLength),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    height: cdktf.numberToTerraform(struct!.height),
    include_space_with_suffix: cdktf.booleanToTerraform(struct!.includeSpaceWithSuffix),
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    labeltemplate: cdktf.stringToTerraform(struct!.labeltemplate),
    lookup_entries: cdktf.listMapper(kibanaDataViewDataViewFieldFormatsParamsLookupEntriesToTerraform, false)(struct!.lookupEntries),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    output_precision: cdktf.numberToTerraform(struct!.outputPrecision),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    transform: cdktf.stringToTerraform(struct!.transform),
    type: cdktf.stringToTerraform(struct!.type),
    unknown_key_value: cdktf.stringToTerraform(struct!.unknownKeyValue),
    urltemplate: cdktf.stringToTerraform(struct!.urltemplate),
    use_short_suffix: cdktf.booleanToTerraform(struct!.useShortSuffix),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function kibanaDataViewDataViewFieldFormatsParamsToHclTerraform(struct?: KibanaDataViewDataViewFieldFormatsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: cdktf.listMapperHcl(kibanaDataViewDataViewFieldFormatsParamsColorsToHclTerraform, false)(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaDataViewDataViewFieldFormatsParamsColorsList",
    },
    field_length: {
      value: cdktf.numberToHclTerraform(struct!.fieldLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_space_with_suffix: {
      value: cdktf.booleanToHclTerraform(struct!.includeSpaceWithSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format: {
      value: cdktf.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeltemplate: {
      value: cdktf.stringToHclTerraform(struct!.labeltemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookup_entries: {
      value: cdktf.listMapperHcl(kibanaDataViewDataViewFieldFormatsParamsLookupEntriesToHclTerraform, false)(struct!.lookupEntries),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaDataViewDataViewFieldFormatsParamsLookupEntriesList",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_precision: {
      value: cdktf.numberToHclTerraform(struct!.outputPrecision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    transform: {
      value: cdktf.stringToHclTerraform(struct!.transform),
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
    unknown_key_value: {
      value: cdktf.stringToHclTerraform(struct!.unknownKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urltemplate: {
      value: cdktf.stringToHclTerraform(struct!.urltemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_short_suffix: {
      value: cdktf.booleanToHclTerraform(struct!.useShortSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaDataViewDataViewFieldFormatsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaDataViewDataViewFieldFormatsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._fieldLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLength = this._fieldLength;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._includeSpaceWithSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSpaceWithSuffix = this._includeSpaceWithSuffix;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._labeltemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.labeltemplate = this._labeltemplate;
    }
    if (this._lookupEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupEntries = this._lookupEntries?.internalValue;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._outputPrecision !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPrecision = this._outputPrecision;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknownKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownKeyValue = this._unknownKeyValue;
    }
    if (this._urltemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urltemplate = this._urltemplate;
    }
    if (this._useShortSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.useShortSuffix = this._useShortSuffix;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaDataViewDataViewFieldFormatsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colors.internalValue = undefined;
      this._fieldLength = undefined;
      this._fieldType = undefined;
      this._height = undefined;
      this._includeSpaceWithSuffix = undefined;
      this._inputFormat = undefined;
      this._labeltemplate = undefined;
      this._lookupEntries.internalValue = undefined;
      this._outputFormat = undefined;
      this._outputPrecision = undefined;
      this._pattern = undefined;
      this._timezone = undefined;
      this._transform = undefined;
      this._type = undefined;
      this._unknownKeyValue = undefined;
      this._urltemplate = undefined;
      this._useShortSuffix = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colors.internalValue = value.colors;
      this._fieldLength = value.fieldLength;
      this._fieldType = value.fieldType;
      this._height = value.height;
      this._includeSpaceWithSuffix = value.includeSpaceWithSuffix;
      this._inputFormat = value.inputFormat;
      this._labeltemplate = value.labeltemplate;
      this._lookupEntries.internalValue = value.lookupEntries;
      this._outputFormat = value.outputFormat;
      this._outputPrecision = value.outputPrecision;
      this._pattern = value.pattern;
      this._timezone = value.timezone;
      this._transform = value.transform;
      this._type = value.type;
      this._unknownKeyValue = value.unknownKeyValue;
      this._urltemplate = value.urltemplate;
      this._useShortSuffix = value.useShortSuffix;
      this._width = value.width;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new KibanaDataViewDataViewFieldFormatsParamsColorsList(this, "colors", false);
  public get colors() {
    return this._colors;
  }
  public putColors(value: KibanaDataViewDataViewFieldFormatsParamsColors[] | cdktf.IResolvable) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // field_length - computed: false, optional: true, required: false
  private _fieldLength?: number; 
  public get fieldLength() {
    return this.getNumberAttribute('field_length');
  }
  public set fieldLength(value: number) {
    this._fieldLength = value;
  }
  public resetFieldLength() {
    this._fieldLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLengthInput() {
    return this._fieldLength;
  }

  // field_type - computed: false, optional: true, required: false
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  public resetFieldType() {
    this._fieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // include_space_with_suffix - computed: false, optional: true, required: false
  private _includeSpaceWithSuffix?: boolean | cdktf.IResolvable; 
  public get includeSpaceWithSuffix() {
    return this.getBooleanAttribute('include_space_with_suffix');
  }
  public set includeSpaceWithSuffix(value: boolean | cdktf.IResolvable) {
    this._includeSpaceWithSuffix = value;
  }
  public resetIncludeSpaceWithSuffix() {
    this._includeSpaceWithSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSpaceWithSuffixInput() {
    return this._includeSpaceWithSuffix;
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // labeltemplate - computed: false, optional: true, required: false
  private _labeltemplate?: string; 
  public get labeltemplate() {
    return this.getStringAttribute('labeltemplate');
  }
  public set labeltemplate(value: string) {
    this._labeltemplate = value;
  }
  public resetLabeltemplate() {
    this._labeltemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeltemplateInput() {
    return this._labeltemplate;
  }

  // lookup_entries - computed: false, optional: true, required: false
  private _lookupEntries = new KibanaDataViewDataViewFieldFormatsParamsLookupEntriesList(this, "lookup_entries", false);
  public get lookupEntries() {
    return this._lookupEntries;
  }
  public putLookupEntries(value: KibanaDataViewDataViewFieldFormatsParamsLookupEntries[] | cdktf.IResolvable) {
    this._lookupEntries.internalValue = value;
  }
  public resetLookupEntries() {
    this._lookupEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupEntriesInput() {
    return this._lookupEntries.internalValue;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // output_precision - computed: false, optional: true, required: false
  private _outputPrecision?: number; 
  public get outputPrecision() {
    return this.getNumberAttribute('output_precision');
  }
  public set outputPrecision(value: number) {
    this._outputPrecision = value;
  }
  public resetOutputPrecision() {
    this._outputPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPrecisionInput() {
    return this._outputPrecision;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // transform - computed: false, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknown_key_value - computed: false, optional: true, required: false
  private _unknownKeyValue?: string; 
  public get unknownKeyValue() {
    return this.getStringAttribute('unknown_key_value');
  }
  public set unknownKeyValue(value: string) {
    this._unknownKeyValue = value;
  }
  public resetUnknownKeyValue() {
    this._unknownKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownKeyValueInput() {
    return this._unknownKeyValue;
  }

  // urltemplate - computed: false, optional: true, required: false
  private _urltemplate?: string; 
  public get urltemplate() {
    return this.getStringAttribute('urltemplate');
  }
  public set urltemplate(value: string) {
    this._urltemplate = value;
  }
  public resetUrltemplate() {
    this._urltemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urltemplateInput() {
    return this._urltemplate;
  }

  // use_short_suffix - computed: false, optional: true, required: false
  private _useShortSuffix?: boolean | cdktf.IResolvable; 
  public get useShortSuffix() {
    return this.getBooleanAttribute('use_short_suffix');
  }
  public set useShortSuffix(value: boolean | cdktf.IResolvable) {
    this._useShortSuffix = value;
  }
  public resetUseShortSuffix() {
    this._useShortSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useShortSuffixInput() {
    return this._useShortSuffix;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface KibanaDataViewDataViewFieldFormats {
  /**
  * The ID of the field format. Valid values include: `boolean`, `color`, `date`, `duration`, `number`, `percent`, `relative_date`, `static_lookup`, `string`, `truncate`, `url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#id KibanaDataView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#params KibanaDataView#params}
  */
  readonly params?: KibanaDataViewDataViewFieldFormatsParams;
}

export function kibanaDataViewDataViewFieldFormatsToTerraform(struct?: KibanaDataViewDataViewFieldFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    params: kibanaDataViewDataViewFieldFormatsParamsToTerraform(struct!.params),
  }
}


export function kibanaDataViewDataViewFieldFormatsToHclTerraform(struct?: KibanaDataViewDataViewFieldFormats | cdktf.IResolvable): any {
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
    params: {
      value: kibanaDataViewDataViewFieldFormatsParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "struct",
      storageClassType: "KibanaDataViewDataViewFieldFormatsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaDataViewDataViewFieldFormatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): KibanaDataViewDataViewFieldFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaDataViewDataViewFieldFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._params.internalValue = value.params;
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

  // params - computed: false, optional: true, required: false
  private _params = new KibanaDataViewDataViewFieldFormatsParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: KibanaDataViewDataViewFieldFormatsParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class KibanaDataViewDataViewFieldFormatsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: KibanaDataViewDataViewFieldFormats } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): KibanaDataViewDataViewFieldFormatsOutputReference {
    return new KibanaDataViewDataViewFieldFormatsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface KibanaDataViewDataViewRuntimeFieldMap {
  /**
  * Script of the runtime field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#script_source KibanaDataView#script_source}
  */
  readonly scriptSource: string;
  /**
  * Mapping type of the runtime field. For more information, check [Field data types](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/mapping-types.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#type KibanaDataView#type}
  */
  readonly type: string;
}

export function kibanaDataViewDataViewRuntimeFieldMapToTerraform(struct?: KibanaDataViewDataViewRuntimeFieldMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_source: cdktf.stringToTerraform(struct!.scriptSource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kibanaDataViewDataViewRuntimeFieldMapToHclTerraform(struct?: KibanaDataViewDataViewRuntimeFieldMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script_source: {
      value: cdktf.stringToHclTerraform(struct!.scriptSource),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaDataViewDataViewRuntimeFieldMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): KibanaDataViewDataViewRuntimeFieldMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSource = this._scriptSource;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaDataViewDataViewRuntimeFieldMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scriptSource = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scriptSource = value.scriptSource;
      this._type = value.type;
    }
  }

  // script_source - computed: false, optional: false, required: true
  private _scriptSource?: string; 
  public get scriptSource() {
    return this.getStringAttribute('script_source');
  }
  public set scriptSource(value: string) {
    this._scriptSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSourceInput() {
    return this._scriptSource;
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

export class KibanaDataViewDataViewRuntimeFieldMapMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: KibanaDataViewDataViewRuntimeFieldMap } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): KibanaDataViewDataViewRuntimeFieldMapOutputReference {
    return new KibanaDataViewDataViewRuntimeFieldMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface KibanaDataViewDataView {
  /**
  * Allows the Data view saved object to exist before the data is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#allow_no_index KibanaDataView#allow_no_index}
  */
  readonly allowNoIndex?: boolean | cdktf.IResolvable;
  /**
  * Map of field attributes by field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#field_attrs KibanaDataView#field_attrs}
  */
  readonly fieldAttrs?: { [key: string]: KibanaDataViewDataViewFieldAttrs } | cdktf.IResolvable;
  /**
  * Map of field formats by field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#field_formats KibanaDataView#field_formats}
  */
  readonly fieldFormats?: { [key: string]: KibanaDataViewDataViewFieldFormats } | cdktf.IResolvable;
  /**
  * Saved object ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#id KibanaDataView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Data view name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#name KibanaDataView#name}
  */
  readonly name?: string;
  /**
  * Array of space IDs for sharing the Data view between multiple spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#namespaces KibanaDataView#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Map of runtime field definitions by field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#runtime_field_map KibanaDataView#runtime_field_map}
  */
  readonly runtimeFieldMap?: { [key: string]: KibanaDataViewDataViewRuntimeFieldMap } | cdktf.IResolvable;
  /**
  * List of field names you want to filter out in Discover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#source_filters KibanaDataView#source_filters}
  */
  readonly sourceFilters?: string[];
  /**
  * Timestamp field name, which you use for time-based Data views.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#time_field_name KibanaDataView#time_field_name}
  */
  readonly timeFieldName?: string;
  /**
  * Comma-separated list of data streams, indices, and aliases that you want to search. Supports wildcards (*).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#title KibanaDataView#title}
  */
  readonly title: string;
}

export function kibanaDataViewDataViewToTerraform(struct?: KibanaDataViewDataView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_index: cdktf.booleanToTerraform(struct!.allowNoIndex),
    field_attrs: cdktf.hashMapper(kibanaDataViewDataViewFieldAttrsToTerraform)(struct!.fieldAttrs),
    field_formats: cdktf.hashMapper(kibanaDataViewDataViewFieldFormatsToTerraform)(struct!.fieldFormats),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    runtime_field_map: cdktf.hashMapper(kibanaDataViewDataViewRuntimeFieldMapToTerraform)(struct!.runtimeFieldMap),
    source_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceFilters),
    time_field_name: cdktf.stringToTerraform(struct!.timeFieldName),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function kibanaDataViewDataViewToHclTerraform(struct?: KibanaDataViewDataView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_index: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_attrs: {
      value: cdktf.hashMapperHcl(kibanaDataViewDataViewFieldAttrsToHclTerraform)(struct!.fieldAttrs),
      isBlock: true,
      type: "map",
      storageClassType: "KibanaDataViewDataViewFieldAttrsMap",
    },
    field_formats: {
      value: cdktf.hashMapperHcl(kibanaDataViewDataViewFieldFormatsToHclTerraform)(struct!.fieldFormats),
      isBlock: true,
      type: "map",
      storageClassType: "KibanaDataViewDataViewFieldFormatsMap",
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
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_field_map: {
      value: cdktf.hashMapperHcl(kibanaDataViewDataViewRuntimeFieldMapToHclTerraform)(struct!.runtimeFieldMap),
      isBlock: true,
      type: "map",
      storageClassType: "KibanaDataViewDataViewRuntimeFieldMapMap",
    },
    source_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_field_name: {
      value: cdktf.stringToHclTerraform(struct!.timeFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaDataViewDataViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaDataViewDataView | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoIndex = this._allowNoIndex;
    }
    if (this._fieldAttrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldAttrs = this._fieldAttrs?.internalValue;
    }
    if (this._fieldFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldFormats = this._fieldFormats?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._runtimeFieldMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeFieldMap = this._runtimeFieldMap?.internalValue;
    }
    if (this._sourceFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFilters = this._sourceFilters;
    }
    if (this._timeFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFieldName = this._timeFieldName;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaDataViewDataView | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoIndex = undefined;
      this._fieldAttrs.internalValue = undefined;
      this._fieldFormats.internalValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._namespaces = undefined;
      this._runtimeFieldMap.internalValue = undefined;
      this._sourceFilters = undefined;
      this._timeFieldName = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoIndex = value.allowNoIndex;
      this._fieldAttrs.internalValue = value.fieldAttrs;
      this._fieldFormats.internalValue = value.fieldFormats;
      this._id = value.id;
      this._name = value.name;
      this._namespaces = value.namespaces;
      this._runtimeFieldMap.internalValue = value.runtimeFieldMap;
      this._sourceFilters = value.sourceFilters;
      this._timeFieldName = value.timeFieldName;
      this._title = value.title;
    }
  }

  // allow_no_index - computed: true, optional: true, required: false
  private _allowNoIndex?: boolean | cdktf.IResolvable; 
  public get allowNoIndex() {
    return this.getBooleanAttribute('allow_no_index');
  }
  public set allowNoIndex(value: boolean | cdktf.IResolvable) {
    this._allowNoIndex = value;
  }
  public resetAllowNoIndex() {
    this._allowNoIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoIndexInput() {
    return this._allowNoIndex;
  }

  // field_attrs - computed: false, optional: true, required: false
  private _fieldAttrs = new KibanaDataViewDataViewFieldAttrsMap(this, "field_attrs");
  public get fieldAttrs() {
    return this._fieldAttrs;
  }
  public putFieldAttrs(value: { [key: string]: KibanaDataViewDataViewFieldAttrs } | cdktf.IResolvable) {
    this._fieldAttrs.internalValue = value;
  }
  public resetFieldAttrs() {
    this._fieldAttrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldAttrsInput() {
    return this._fieldAttrs.internalValue;
  }

  // field_formats - computed: false, optional: true, required: false
  private _fieldFormats = new KibanaDataViewDataViewFieldFormatsMap(this, "field_formats");
  public get fieldFormats() {
    return this._fieldFormats;
  }
  public putFieldFormats(value: { [key: string]: KibanaDataViewDataViewFieldFormats } | cdktf.IResolvable) {
    this._fieldFormats.internalValue = value;
  }
  public resetFieldFormats() {
    this._fieldFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldFormatsInput() {
    return this._fieldFormats.internalValue;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // runtime_field_map - computed: false, optional: true, required: false
  private _runtimeFieldMap = new KibanaDataViewDataViewRuntimeFieldMapMap(this, "runtime_field_map");
  public get runtimeFieldMap() {
    return this._runtimeFieldMap;
  }
  public putRuntimeFieldMap(value: { [key: string]: KibanaDataViewDataViewRuntimeFieldMap } | cdktf.IResolvable) {
    this._runtimeFieldMap.internalValue = value;
  }
  public resetRuntimeFieldMap() {
    this._runtimeFieldMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeFieldMapInput() {
    return this._runtimeFieldMap.internalValue;
  }

  // source_filters - computed: false, optional: true, required: false
  private _sourceFilters?: string[]; 
  public get sourceFilters() {
    return this.getListAttribute('source_filters');
  }
  public set sourceFilters(value: string[]) {
    this._sourceFilters = value;
  }
  public resetSourceFilters() {
    this._sourceFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFiltersInput() {
    return this._sourceFilters;
  }

  // time_field_name - computed: true, optional: true, required: false
  private _timeFieldName?: string; 
  public get timeFieldName() {
    return this.getStringAttribute('time_field_name');
  }
  public set timeFieldName(value: string) {
    this._timeFieldName = value;
  }
  public resetTimeFieldName() {
    this._timeFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFieldNameInput() {
    return this._timeFieldName;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view elasticstack_kibana_data_view}
*/
export class KibanaDataView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_data_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaDataView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaDataView to import
  * @param importFromId The id of the existing KibanaDataView that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaDataView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_data_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_data_view elasticstack_kibana_data_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaDataViewConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaDataViewConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_data_view',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataView.internalValue = config.dataView;
    this._override = config.override;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_view - computed: false, optional: false, required: true
  private _dataView = new KibanaDataViewDataViewOutputReference(this, "data_view");
  public get dataView() {
    return this._dataView;
  }
  public putDataView(value: KibanaDataViewDataView) {
    this._dataView.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataViewInput() {
    return this._dataView.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
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
      data_view: kibanaDataViewDataViewToTerraform(this._dataView.internalValue),
      override: cdktf.booleanToTerraform(this._override),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_view: {
        value: kibanaDataViewDataViewToHclTerraform(this._dataView.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaDataViewDataView",
      },
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
