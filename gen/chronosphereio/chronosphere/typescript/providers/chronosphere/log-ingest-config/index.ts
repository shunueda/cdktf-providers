// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogIngestConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#id LogIngestConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * field_normalization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#field_normalization LogIngestConfig#field_normalization}
  */
  readonly fieldNormalization?: LogIngestConfigFieldNormalization;
  /**
  * field_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#field_parser LogIngestConfig#field_parser}
  */
  readonly fieldParser?: LogIngestConfigFieldParser[] | cdktf.IResolvable;
  /**
  * plaintext_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#plaintext_parser LogIngestConfig#plaintext_parser}
  */
  readonly plaintextParser?: LogIngestConfigPlaintextParser[] | cdktf.IResolvable;
}
export interface LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceToTerraform(struct?: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceToHclTerraform(struct?: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceOutputReference {
    return new LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#default_value LogIngestConfig#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#sanitize_patterns LogIngestConfig#sanitize_patterns}
  */
  readonly sanitizePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#value_map LogIngestConfig#value_map}
  */
  readonly valueMap?: { [key: string]: string };
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#source LogIngestConfig#source}
  */
  readonly source?: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource[] | cdktf.IResolvable;
}

export function logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationToTerraform(struct?: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationOutputReference | LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    sanitize_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sanitizePatterns),
    value_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valueMap),
    source: cdktf.listMapper(logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceToTerraform, true)(struct!.source),
  }
}


export function logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationToHclTerraform(struct?: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationOutputReference | LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sanitize_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sanitizePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valueMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source: {
      value: cdktf.listMapperHcl(logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sanitizePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanitizePatterns = this._sanitizePatterns;
    }
    if (this._valueMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sanitizePatterns = undefined;
      this._valueMap = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sanitizePatterns = value.sanitizePatterns;
      this._valueMap = value.valueMap;
      this._source.internalValue = value.source;
    }
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

  // sanitize_patterns - computed: false, optional: true, required: false
  private _sanitizePatterns?: string[]; 
  public get sanitizePatterns() {
    return this.getListAttribute('sanitize_patterns');
  }
  public set sanitizePatterns(value: string[]) {
    this._sanitizePatterns = value;
  }
  public resetSanitizePatterns() {
    this._sanitizePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanitizePatternsInput() {
    return this._sanitizePatterns;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap?: { [key: string]: string }; 
  public get valueMap() {
    return this.getStringMapAttribute('value_map');
  }
  public set valueMap(value: { [key: string]: string }) {
    this._valueMap = value;
  }
  public resetValueMap() {
    this._valueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap;
  }

  // source - computed: false, optional: true, required: false
  private _source = new LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LogIngestConfigFieldNormalizationCustomFieldNormalization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#target LogIngestConfig#target}
  */
  readonly target?: string;
  /**
  * normalization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#normalization LogIngestConfig#normalization}
  */
  readonly normalization?: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization;
}

export function logIngestConfigFieldNormalizationCustomFieldNormalizationToTerraform(struct?: LogIngestConfigFieldNormalizationCustomFieldNormalization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    normalization: logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationToTerraform(struct!.normalization),
  }
}


export function logIngestConfigFieldNormalizationCustomFieldNormalizationToHclTerraform(struct?: LogIngestConfigFieldNormalizationCustomFieldNormalization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalization: {
      value: logIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationToHclTerraform(struct!.normalization),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationCustomFieldNormalizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldNormalizationCustomFieldNormalization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._normalization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalization = this._normalization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationCustomFieldNormalization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._normalization.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._normalization.internalValue = value.normalization;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // normalization - computed: false, optional: true, required: false
  private _normalization = new LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalizationOutputReference(this, "normalization");
  public get normalization() {
    return this._normalization;
  }
  public putNormalization(value: LogIngestConfigFieldNormalizationCustomFieldNormalizationNormalization) {
    this._normalization.internalValue = value;
  }
  public resetNormalization() {
    this._normalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationInput() {
    return this._normalization.internalValue;
  }
}

export class LogIngestConfigFieldNormalizationCustomFieldNormalizationList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldNormalizationCustomFieldNormalization[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldNormalizationCustomFieldNormalizationOutputReference {
    return new LogIngestConfigFieldNormalizationCustomFieldNormalizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigFieldNormalizationMessageSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldNormalizationMessageSourceToTerraform(struct?: LogIngestConfigFieldNormalizationMessageSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldNormalizationMessageSourceToHclTerraform(struct?: LogIngestConfigFieldNormalizationMessageSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationMessageSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldNormalizationMessageSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationMessageSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class LogIngestConfigFieldNormalizationMessageSourceList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldNormalizationMessageSource[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldNormalizationMessageSourceOutputReference {
    return new LogIngestConfigFieldNormalizationMessageSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigFieldNormalizationMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#default_value LogIngestConfig#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#sanitize_patterns LogIngestConfig#sanitize_patterns}
  */
  readonly sanitizePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#value_map LogIngestConfig#value_map}
  */
  readonly valueMap?: { [key: string]: string };
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#source LogIngestConfig#source}
  */
  readonly source?: LogIngestConfigFieldNormalizationMessageSource[] | cdktf.IResolvable;
}

export function logIngestConfigFieldNormalizationMessageToTerraform(struct?: LogIngestConfigFieldNormalizationMessageOutputReference | LogIngestConfigFieldNormalizationMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    sanitize_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sanitizePatterns),
    value_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valueMap),
    source: cdktf.listMapper(logIngestConfigFieldNormalizationMessageSourceToTerraform, true)(struct!.source),
  }
}


export function logIngestConfigFieldNormalizationMessageToHclTerraform(struct?: LogIngestConfigFieldNormalizationMessageOutputReference | LogIngestConfigFieldNormalizationMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sanitize_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sanitizePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valueMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source: {
      value: cdktf.listMapperHcl(logIngestConfigFieldNormalizationMessageSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationMessageSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalizationMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sanitizePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanitizePatterns = this._sanitizePatterns;
    }
    if (this._valueMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sanitizePatterns = undefined;
      this._valueMap = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sanitizePatterns = value.sanitizePatterns;
      this._valueMap = value.valueMap;
      this._source.internalValue = value.source;
    }
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

  // sanitize_patterns - computed: false, optional: true, required: false
  private _sanitizePatterns?: string[]; 
  public get sanitizePatterns() {
    return this.getListAttribute('sanitize_patterns');
  }
  public set sanitizePatterns(value: string[]) {
    this._sanitizePatterns = value;
  }
  public resetSanitizePatterns() {
    this._sanitizePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanitizePatternsInput() {
    return this._sanitizePatterns;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap?: { [key: string]: string }; 
  public get valueMap() {
    return this.getStringMapAttribute('value_map');
  }
  public set valueMap(value: { [key: string]: string }) {
    this._valueMap = value;
  }
  public resetValueMap() {
    this._valueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap;
  }

  // source - computed: false, optional: true, required: false
  private _source = new LogIngestConfigFieldNormalizationMessageSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: LogIngestConfigFieldNormalizationMessageSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceToTerraform(struct?: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceToHclTerraform(struct?: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceOutputReference {
    return new LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigFieldNormalizationPrimaryKeyNormalization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#default_value LogIngestConfig#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#sanitize_patterns LogIngestConfig#sanitize_patterns}
  */
  readonly sanitizePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#value_map LogIngestConfig#value_map}
  */
  readonly valueMap?: { [key: string]: string };
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#source LogIngestConfig#source}
  */
  readonly source?: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource[] | cdktf.IResolvable;
}

export function logIngestConfigFieldNormalizationPrimaryKeyNormalizationToTerraform(struct?: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationOutputReference | LogIngestConfigFieldNormalizationPrimaryKeyNormalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    sanitize_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sanitizePatterns),
    value_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valueMap),
    source: cdktf.listMapper(logIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceToTerraform, true)(struct!.source),
  }
}


export function logIngestConfigFieldNormalizationPrimaryKeyNormalizationToHclTerraform(struct?: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationOutputReference | LogIngestConfigFieldNormalizationPrimaryKeyNormalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sanitize_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sanitizePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valueMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source: {
      value: cdktf.listMapperHcl(logIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationPrimaryKeyNormalizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalizationPrimaryKeyNormalization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sanitizePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanitizePatterns = this._sanitizePatterns;
    }
    if (this._valueMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationPrimaryKeyNormalization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sanitizePatterns = undefined;
      this._valueMap = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sanitizePatterns = value.sanitizePatterns;
      this._valueMap = value.valueMap;
      this._source.internalValue = value.source;
    }
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

  // sanitize_patterns - computed: false, optional: true, required: false
  private _sanitizePatterns?: string[]; 
  public get sanitizePatterns() {
    return this.getListAttribute('sanitize_patterns');
  }
  public set sanitizePatterns(value: string[]) {
    this._sanitizePatterns = value;
  }
  public resetSanitizePatterns() {
    this._sanitizePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanitizePatternsInput() {
    return this._sanitizePatterns;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap?: { [key: string]: string }; 
  public get valueMap() {
    return this.getStringMapAttribute('value_map');
  }
  public set valueMap(value: { [key: string]: string }) {
    this._valueMap = value;
  }
  public resetValueMap() {
    this._valueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap;
  }

  // source - computed: false, optional: true, required: false
  private _source = new LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: LogIngestConfigFieldNormalizationPrimaryKeyNormalizationSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LogIngestConfigFieldNormalizationPrimaryKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#target LogIngestConfig#target}
  */
  readonly target?: string;
  /**
  * normalization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#normalization LogIngestConfig#normalization}
  */
  readonly normalization?: LogIngestConfigFieldNormalizationPrimaryKeyNormalization;
}

export function logIngestConfigFieldNormalizationPrimaryKeyToTerraform(struct?: LogIngestConfigFieldNormalizationPrimaryKeyOutputReference | LogIngestConfigFieldNormalizationPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    normalization: logIngestConfigFieldNormalizationPrimaryKeyNormalizationToTerraform(struct!.normalization),
  }
}


export function logIngestConfigFieldNormalizationPrimaryKeyToHclTerraform(struct?: LogIngestConfigFieldNormalizationPrimaryKeyOutputReference | LogIngestConfigFieldNormalizationPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalization: {
      value: logIngestConfigFieldNormalizationPrimaryKeyNormalizationToHclTerraform(struct!.normalization),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationPrimaryKeyNormalizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationPrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalizationPrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._normalization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalization = this._normalization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationPrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._normalization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._normalization.internalValue = value.normalization;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // normalization - computed: false, optional: true, required: false
  private _normalization = new LogIngestConfigFieldNormalizationPrimaryKeyNormalizationOutputReference(this, "normalization");
  public get normalization() {
    return this._normalization;
  }
  public putNormalization(value: LogIngestConfigFieldNormalizationPrimaryKeyNormalization) {
    this._normalization.internalValue = value;
  }
  public resetNormalization() {
    this._normalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationInput() {
    return this._normalization.internalValue;
  }
}
export interface LogIngestConfigFieldNormalizationSeveritySource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldNormalizationSeveritySourceToTerraform(struct?: LogIngestConfigFieldNormalizationSeveritySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldNormalizationSeveritySourceToHclTerraform(struct?: LogIngestConfigFieldNormalizationSeveritySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationSeveritySourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldNormalizationSeveritySource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationSeveritySource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class LogIngestConfigFieldNormalizationSeveritySourceList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldNormalizationSeveritySource[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldNormalizationSeveritySourceOutputReference {
    return new LogIngestConfigFieldNormalizationSeveritySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigFieldNormalizationSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#default_value LogIngestConfig#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#sanitize_patterns LogIngestConfig#sanitize_patterns}
  */
  readonly sanitizePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#value_map LogIngestConfig#value_map}
  */
  readonly valueMap?: { [key: string]: string };
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#source LogIngestConfig#source}
  */
  readonly source?: LogIngestConfigFieldNormalizationSeveritySource[] | cdktf.IResolvable;
}

export function logIngestConfigFieldNormalizationSeverityToTerraform(struct?: LogIngestConfigFieldNormalizationSeverityOutputReference | LogIngestConfigFieldNormalizationSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    sanitize_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sanitizePatterns),
    value_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valueMap),
    source: cdktf.listMapper(logIngestConfigFieldNormalizationSeveritySourceToTerraform, true)(struct!.source),
  }
}


export function logIngestConfigFieldNormalizationSeverityToHclTerraform(struct?: LogIngestConfigFieldNormalizationSeverityOutputReference | LogIngestConfigFieldNormalizationSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sanitize_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sanitizePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valueMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source: {
      value: cdktf.listMapperHcl(logIngestConfigFieldNormalizationSeveritySourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationSeveritySourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalizationSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sanitizePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanitizePatterns = this._sanitizePatterns;
    }
    if (this._valueMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sanitizePatterns = undefined;
      this._valueMap = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sanitizePatterns = value.sanitizePatterns;
      this._valueMap = value.valueMap;
      this._source.internalValue = value.source;
    }
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

  // sanitize_patterns - computed: false, optional: true, required: false
  private _sanitizePatterns?: string[]; 
  public get sanitizePatterns() {
    return this.getListAttribute('sanitize_patterns');
  }
  public set sanitizePatterns(value: string[]) {
    this._sanitizePatterns = value;
  }
  public resetSanitizePatterns() {
    this._sanitizePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanitizePatternsInput() {
    return this._sanitizePatterns;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap?: { [key: string]: string }; 
  public get valueMap() {
    return this.getStringMapAttribute('value_map');
  }
  public set valueMap(value: { [key: string]: string }) {
    this._valueMap = value;
  }
  public resetValueMap() {
    this._valueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap;
  }

  // source - computed: false, optional: true, required: false
  private _source = new LogIngestConfigFieldNormalizationSeveritySourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: LogIngestConfigFieldNormalizationSeveritySource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LogIngestConfigFieldNormalizationTimestampSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldNormalizationTimestampSourceToTerraform(struct?: LogIngestConfigFieldNormalizationTimestampSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldNormalizationTimestampSourceToHclTerraform(struct?: LogIngestConfigFieldNormalizationTimestampSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationTimestampSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldNormalizationTimestampSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationTimestampSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class LogIngestConfigFieldNormalizationTimestampSourceList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldNormalizationTimestampSource[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldNormalizationTimestampSourceOutputReference {
    return new LogIngestConfigFieldNormalizationTimestampSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigFieldNormalizationTimestamp {
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#source LogIngestConfig#source}
  */
  readonly source?: LogIngestConfigFieldNormalizationTimestampSource[] | cdktf.IResolvable;
}

export function logIngestConfigFieldNormalizationTimestampToTerraform(struct?: LogIngestConfigFieldNormalizationTimestampOutputReference | LogIngestConfigFieldNormalizationTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.listMapper(logIngestConfigFieldNormalizationTimestampSourceToTerraform, true)(struct!.source),
  }
}


export function logIngestConfigFieldNormalizationTimestampToHclTerraform(struct?: LogIngestConfigFieldNormalizationTimestampOutputReference | LogIngestConfigFieldNormalizationTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.listMapperHcl(logIngestConfigFieldNormalizationTimestampSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationTimestampSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationTimestampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalizationTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalizationTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source = new LogIngestConfigFieldNormalizationTimestampSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: LogIngestConfigFieldNormalizationTimestampSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LogIngestConfigFieldNormalization {
  /**
  * custom_field_normalization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#custom_field_normalization LogIngestConfig#custom_field_normalization}
  */
  readonly customFieldNormalization?: LogIngestConfigFieldNormalizationCustomFieldNormalization[] | cdktf.IResolvable;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#message LogIngestConfig#message}
  */
  readonly message?: LogIngestConfigFieldNormalizationMessage;
  /**
  * primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#primary_key LogIngestConfig#primary_key}
  */
  readonly primaryKey?: LogIngestConfigFieldNormalizationPrimaryKey;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#severity LogIngestConfig#severity}
  */
  readonly severity?: LogIngestConfigFieldNormalizationSeverity;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#timestamp LogIngestConfig#timestamp}
  */
  readonly timestamp?: LogIngestConfigFieldNormalizationTimestamp;
}

export function logIngestConfigFieldNormalizationToTerraform(struct?: LogIngestConfigFieldNormalizationOutputReference | LogIngestConfigFieldNormalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_field_normalization: cdktf.listMapper(logIngestConfigFieldNormalizationCustomFieldNormalizationToTerraform, true)(struct!.customFieldNormalization),
    message: logIngestConfigFieldNormalizationMessageToTerraform(struct!.message),
    primary_key: logIngestConfigFieldNormalizationPrimaryKeyToTerraform(struct!.primaryKey),
    severity: logIngestConfigFieldNormalizationSeverityToTerraform(struct!.severity),
    timestamp: logIngestConfigFieldNormalizationTimestampToTerraform(struct!.timestamp),
  }
}


export function logIngestConfigFieldNormalizationToHclTerraform(struct?: LogIngestConfigFieldNormalizationOutputReference | LogIngestConfigFieldNormalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_field_normalization: {
      value: cdktf.listMapperHcl(logIngestConfigFieldNormalizationCustomFieldNormalizationToHclTerraform, true)(struct!.customFieldNormalization),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationCustomFieldNormalizationList",
    },
    message: {
      value: logIngestConfigFieldNormalizationMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationMessageList",
    },
    primary_key: {
      value: logIngestConfigFieldNormalizationPrimaryKeyToHclTerraform(struct!.primaryKey),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationPrimaryKeyList",
    },
    severity: {
      value: logIngestConfigFieldNormalizationSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationSeverityList",
    },
    timestamp: {
      value: logIngestConfigFieldNormalizationTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldNormalizationTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldNormalizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldNormalization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFieldNormalization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldNormalization = this._customFieldNormalization?.internalValue;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._primaryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldNormalization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFieldNormalization.internalValue = undefined;
      this._message.internalValue = undefined;
      this._primaryKey.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._timestamp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFieldNormalization.internalValue = value.customFieldNormalization;
      this._message.internalValue = value.message;
      this._primaryKey.internalValue = value.primaryKey;
      this._severity.internalValue = value.severity;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // custom_field_normalization - computed: false, optional: true, required: false
  private _customFieldNormalization = new LogIngestConfigFieldNormalizationCustomFieldNormalizationList(this, "custom_field_normalization", false);
  public get customFieldNormalization() {
    return this._customFieldNormalization;
  }
  public putCustomFieldNormalization(value: LogIngestConfigFieldNormalizationCustomFieldNormalization[] | cdktf.IResolvable) {
    this._customFieldNormalization.internalValue = value;
  }
  public resetCustomFieldNormalization() {
    this._customFieldNormalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldNormalizationInput() {
    return this._customFieldNormalization.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new LogIngestConfigFieldNormalizationMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: LogIngestConfigFieldNormalizationMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey = new LogIngestConfigFieldNormalizationPrimaryKeyOutputReference(this, "primary_key");
  public get primaryKey() {
    return this._primaryKey;
  }
  public putPrimaryKey(value: LogIngestConfigFieldNormalizationPrimaryKey) {
    this._primaryKey.internalValue = value;
  }
  public resetPrimaryKey() {
    this._primaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new LogIngestConfigFieldNormalizationSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: LogIngestConfigFieldNormalizationSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new LogIngestConfigFieldNormalizationTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: LogIngestConfigFieldNormalizationTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}
export interface LogIngestConfigFieldParserDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldParserDestinationToTerraform(struct?: LogIngestConfigFieldParserDestinationOutputReference | LogIngestConfigFieldParserDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldParserDestinationToHclTerraform(struct?: LogIngestConfigFieldParserDestinationOutputReference | LogIngestConfigFieldParserDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldParserDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldParserDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldParserDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogIngestConfigFieldParserParserKeyValueParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#delimiter LogIngestConfig#delimiter}
  */
  readonly delimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#pair_separator LogIngestConfig#pair_separator}
  */
  readonly pairSeparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#trim_set LogIngestConfig#trim_set}
  */
  readonly trimSet?: string;
}

export function logIngestConfigFieldParserParserKeyValueParserToTerraform(struct?: LogIngestConfigFieldParserParserKeyValueParserOutputReference | LogIngestConfigFieldParserParserKeyValueParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    pair_separator: cdktf.stringToTerraform(struct!.pairSeparator),
    trim_set: cdktf.stringToTerraform(struct!.trimSet),
  }
}


export function logIngestConfigFieldParserParserKeyValueParserToHclTerraform(struct?: LogIngestConfigFieldParserParserKeyValueParserOutputReference | LogIngestConfigFieldParserParserKeyValueParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pair_separator: {
      value: cdktf.stringToHclTerraform(struct!.pairSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_set: {
      value: cdktf.stringToHclTerraform(struct!.trimSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldParserParserKeyValueParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldParserParserKeyValueParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._pairSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairSeparator = this._pairSeparator;
    }
    if (this._trimSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSet = this._trimSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldParserParserKeyValueParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._pairSeparator = undefined;
      this._trimSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._pairSeparator = value.pairSeparator;
      this._trimSet = value.trimSet;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // pair_separator - computed: false, optional: false, required: true
  private _pairSeparator?: string; 
  public get pairSeparator() {
    return this.getStringAttribute('pair_separator');
  }
  public set pairSeparator(value: string) {
    this._pairSeparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairSeparatorInput() {
    return this._pairSeparator;
  }

  // trim_set - computed: false, optional: true, required: false
  private _trimSet?: string; 
  public get trimSet() {
    return this.getStringAttribute('trim_set');
  }
  public set trimSet(value: string) {
    this._trimSet = value;
  }
  public resetTrimSet() {
    this._trimSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSetInput() {
    return this._trimSet;
  }
}
export interface LogIngestConfigFieldParserParserRegexParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#regex LogIngestConfig#regex}
  */
  readonly regex: string;
}

export function logIngestConfigFieldParserParserRegexParserToTerraform(struct?: LogIngestConfigFieldParserParserRegexParserOutputReference | LogIngestConfigFieldParserParserRegexParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function logIngestConfigFieldParserParserRegexParserToHclTerraform(struct?: LogIngestConfigFieldParserParserRegexParserOutputReference | LogIngestConfigFieldParserParserRegexParser): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldParserParserRegexParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldParserParserRegexParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldParserParserRegexParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface LogIngestConfigFieldParserParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#parser_type LogIngestConfig#parser_type}
  */
  readonly parserType: string;
  /**
  * key_value_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#key_value_parser LogIngestConfig#key_value_parser}
  */
  readonly keyValueParser?: LogIngestConfigFieldParserParserKeyValueParser;
  /**
  * regex_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#regex_parser LogIngestConfig#regex_parser}
  */
  readonly regexParser?: LogIngestConfigFieldParserParserRegexParser;
}

export function logIngestConfigFieldParserParserToTerraform(struct?: LogIngestConfigFieldParserParserOutputReference | LogIngestConfigFieldParserParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parser_type: cdktf.stringToTerraform(struct!.parserType),
    key_value_parser: logIngestConfigFieldParserParserKeyValueParserToTerraform(struct!.keyValueParser),
    regex_parser: logIngestConfigFieldParserParserRegexParserToTerraform(struct!.regexParser),
  }
}


export function logIngestConfigFieldParserParserToHclTerraform(struct?: LogIngestConfigFieldParserParserOutputReference | LogIngestConfigFieldParserParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parser_type: {
      value: cdktf.stringToHclTerraform(struct!.parserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_parser: {
      value: logIngestConfigFieldParserParserKeyValueParserToHclTerraform(struct!.keyValueParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldParserParserKeyValueParserList",
    },
    regex_parser: {
      value: logIngestConfigFieldParserParserRegexParserToHclTerraform(struct!.regexParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldParserParserRegexParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldParserParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldParserParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserType = this._parserType;
    }
    if (this._keyValueParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueParser = this._keyValueParser?.internalValue;
    }
    if (this._regexParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexParser = this._regexParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldParserParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parserType = undefined;
      this._keyValueParser.internalValue = undefined;
      this._regexParser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parserType = value.parserType;
      this._keyValueParser.internalValue = value.keyValueParser;
      this._regexParser.internalValue = value.regexParser;
    }
  }

  // parser_type - computed: false, optional: false, required: true
  private _parserType?: string; 
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }
  public set parserType(value: string) {
    this._parserType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserTypeInput() {
    return this._parserType;
  }

  // key_value_parser - computed: false, optional: true, required: false
  private _keyValueParser = new LogIngestConfigFieldParserParserKeyValueParserOutputReference(this, "key_value_parser");
  public get keyValueParser() {
    return this._keyValueParser;
  }
  public putKeyValueParser(value: LogIngestConfigFieldParserParserKeyValueParser) {
    this._keyValueParser.internalValue = value;
  }
  public resetKeyValueParser() {
    this._keyValueParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueParserInput() {
    return this._keyValueParser.internalValue;
  }

  // regex_parser - computed: false, optional: true, required: false
  private _regexParser = new LogIngestConfigFieldParserParserRegexParserOutputReference(this, "regex_parser");
  public get regexParser() {
    return this._regexParser;
  }
  public putRegexParser(value: LogIngestConfigFieldParserParserRegexParser) {
    this._regexParser.internalValue = value;
  }
  public resetRegexParser() {
    this._regexParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexParserInput() {
    return this._regexParser.internalValue;
  }
}
export interface LogIngestConfigFieldParserSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#selector LogIngestConfig#selector}
  */
  readonly selector: string;
}

export function logIngestConfigFieldParserSourceToTerraform(struct?: LogIngestConfigFieldParserSourceOutputReference | LogIngestConfigFieldParserSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function logIngestConfigFieldParserSourceToHclTerraform(struct?: LogIngestConfigFieldParserSourceOutputReference | LogIngestConfigFieldParserSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldParserSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigFieldParserSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldParserSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface LogIngestConfigFieldParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#mode LogIngestConfig#mode}
  */
  readonly mode?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#destination LogIngestConfig#destination}
  */
  readonly destination?: LogIngestConfigFieldParserDestination;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#parser LogIngestConfig#parser}
  */
  readonly parser: LogIngestConfigFieldParserParser;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#source LogIngestConfig#source}
  */
  readonly source: LogIngestConfigFieldParserSource;
}

export function logIngestConfigFieldParserToTerraform(struct?: LogIngestConfigFieldParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    destination: logIngestConfigFieldParserDestinationToTerraform(struct!.destination),
    parser: logIngestConfigFieldParserParserToTerraform(struct!.parser),
    source: logIngestConfigFieldParserSourceToTerraform(struct!.source),
  }
}


export function logIngestConfigFieldParserToHclTerraform(struct?: LogIngestConfigFieldParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: logIngestConfigFieldParserDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldParserDestinationList",
    },
    parser: {
      value: logIngestConfigFieldParserParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldParserParserList",
    },
    source: {
      value: logIngestConfigFieldParserSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigFieldParserSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigFieldParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigFieldParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigFieldParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._destination.internalValue = undefined;
      this._parser.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._destination.internalValue = value.destination;
      this._parser.internalValue = value.parser;
      this._source.internalValue = value.source;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new LogIngestConfigFieldParserDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LogIngestConfigFieldParserDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // parser - computed: false, optional: false, required: true
  private _parser = new LogIngestConfigFieldParserParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: LogIngestConfigFieldParserParser) {
    this._parser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new LogIngestConfigFieldParserSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: LogIngestConfigFieldParserSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class LogIngestConfigFieldParserList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigFieldParser[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigFieldParserOutputReference {
    return new LogIngestConfigFieldParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogIngestConfigPlaintextParserParserKeyValueParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#delimiter LogIngestConfig#delimiter}
  */
  readonly delimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#pair_separator LogIngestConfig#pair_separator}
  */
  readonly pairSeparator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#trim_set LogIngestConfig#trim_set}
  */
  readonly trimSet?: string;
}

export function logIngestConfigPlaintextParserParserKeyValueParserToTerraform(struct?: LogIngestConfigPlaintextParserParserKeyValueParserOutputReference | LogIngestConfigPlaintextParserParserKeyValueParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    pair_separator: cdktf.stringToTerraform(struct!.pairSeparator),
    trim_set: cdktf.stringToTerraform(struct!.trimSet),
  }
}


export function logIngestConfigPlaintextParserParserKeyValueParserToHclTerraform(struct?: LogIngestConfigPlaintextParserParserKeyValueParserOutputReference | LogIngestConfigPlaintextParserParserKeyValueParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pair_separator: {
      value: cdktf.stringToHclTerraform(struct!.pairSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_set: {
      value: cdktf.stringToHclTerraform(struct!.trimSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigPlaintextParserParserKeyValueParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigPlaintextParserParserKeyValueParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._pairSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairSeparator = this._pairSeparator;
    }
    if (this._trimSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSet = this._trimSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigPlaintextParserParserKeyValueParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._pairSeparator = undefined;
      this._trimSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._pairSeparator = value.pairSeparator;
      this._trimSet = value.trimSet;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // pair_separator - computed: false, optional: false, required: true
  private _pairSeparator?: string; 
  public get pairSeparator() {
    return this.getStringAttribute('pair_separator');
  }
  public set pairSeparator(value: string) {
    this._pairSeparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairSeparatorInput() {
    return this._pairSeparator;
  }

  // trim_set - computed: false, optional: true, required: false
  private _trimSet?: string; 
  public get trimSet() {
    return this.getStringAttribute('trim_set');
  }
  public set trimSet(value: string) {
    this._trimSet = value;
  }
  public resetTrimSet() {
    this._trimSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSetInput() {
    return this._trimSet;
  }
}
export interface LogIngestConfigPlaintextParserParserRegexParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#regex LogIngestConfig#regex}
  */
  readonly regex: string;
}

export function logIngestConfigPlaintextParserParserRegexParserToTerraform(struct?: LogIngestConfigPlaintextParserParserRegexParserOutputReference | LogIngestConfigPlaintextParserParserRegexParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function logIngestConfigPlaintextParserParserRegexParserToHclTerraform(struct?: LogIngestConfigPlaintextParserParserRegexParserOutputReference | LogIngestConfigPlaintextParserParserRegexParser): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigPlaintextParserParserRegexParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigPlaintextParserParserRegexParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigPlaintextParserParserRegexParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface LogIngestConfigPlaintextParserParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#parser_type LogIngestConfig#parser_type}
  */
  readonly parserType: string;
  /**
  * key_value_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#key_value_parser LogIngestConfig#key_value_parser}
  */
  readonly keyValueParser?: LogIngestConfigPlaintextParserParserKeyValueParser;
  /**
  * regex_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#regex_parser LogIngestConfig#regex_parser}
  */
  readonly regexParser?: LogIngestConfigPlaintextParserParserRegexParser;
}

export function logIngestConfigPlaintextParserParserToTerraform(struct?: LogIngestConfigPlaintextParserParserOutputReference | LogIngestConfigPlaintextParserParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parser_type: cdktf.stringToTerraform(struct!.parserType),
    key_value_parser: logIngestConfigPlaintextParserParserKeyValueParserToTerraform(struct!.keyValueParser),
    regex_parser: logIngestConfigPlaintextParserParserRegexParserToTerraform(struct!.regexParser),
  }
}


export function logIngestConfigPlaintextParserParserToHclTerraform(struct?: LogIngestConfigPlaintextParserParserOutputReference | LogIngestConfigPlaintextParserParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parser_type: {
      value: cdktf.stringToHclTerraform(struct!.parserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_parser: {
      value: logIngestConfigPlaintextParserParserKeyValueParserToHclTerraform(struct!.keyValueParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigPlaintextParserParserKeyValueParserList",
    },
    regex_parser: {
      value: logIngestConfigPlaintextParserParserRegexParserToHclTerraform(struct!.regexParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigPlaintextParserParserRegexParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigPlaintextParserParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogIngestConfigPlaintextParserParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserType = this._parserType;
    }
    if (this._keyValueParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValueParser = this._keyValueParser?.internalValue;
    }
    if (this._regexParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexParser = this._regexParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigPlaintextParserParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parserType = undefined;
      this._keyValueParser.internalValue = undefined;
      this._regexParser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parserType = value.parserType;
      this._keyValueParser.internalValue = value.keyValueParser;
      this._regexParser.internalValue = value.regexParser;
    }
  }

  // parser_type - computed: false, optional: false, required: true
  private _parserType?: string; 
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }
  public set parserType(value: string) {
    this._parserType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserTypeInput() {
    return this._parserType;
  }

  // key_value_parser - computed: false, optional: true, required: false
  private _keyValueParser = new LogIngestConfigPlaintextParserParserKeyValueParserOutputReference(this, "key_value_parser");
  public get keyValueParser() {
    return this._keyValueParser;
  }
  public putKeyValueParser(value: LogIngestConfigPlaintextParserParserKeyValueParser) {
    this._keyValueParser.internalValue = value;
  }
  public resetKeyValueParser() {
    this._keyValueParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueParserInput() {
    return this._keyValueParser.internalValue;
  }

  // regex_parser - computed: false, optional: true, required: false
  private _regexParser = new LogIngestConfigPlaintextParserParserRegexParserOutputReference(this, "regex_parser");
  public get regexParser() {
    return this._regexParser;
  }
  public putRegexParser(value: LogIngestConfigPlaintextParserParserRegexParser) {
    this._regexParser.internalValue = value;
  }
  public resetRegexParser() {
    this._regexParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexParserInput() {
    return this._regexParser.internalValue;
  }
}
export interface LogIngestConfigPlaintextParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#keep_original LogIngestConfig#keep_original}
  */
  readonly keepOriginal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#mode LogIngestConfig#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#name LogIngestConfig#name}
  */
  readonly name: string;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#parser LogIngestConfig#parser}
  */
  readonly parser: LogIngestConfigPlaintextParserParser;
}

export function logIngestConfigPlaintextParserToTerraform(struct?: LogIngestConfigPlaintextParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_original: cdktf.booleanToTerraform(struct!.keepOriginal),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    parser: logIngestConfigPlaintextParserParserToTerraform(struct!.parser),
  }
}


export function logIngestConfigPlaintextParserToHclTerraform(struct?: LogIngestConfigPlaintextParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_original: {
      value: cdktf.booleanToHclTerraform(struct!.keepOriginal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    parser: {
      value: logIngestConfigPlaintextParserParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "LogIngestConfigPlaintextParserParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogIngestConfigPlaintextParserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogIngestConfigPlaintextParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepOriginal !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepOriginal = this._keepOriginal;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogIngestConfigPlaintextParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepOriginal = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._parser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepOriginal = value.keepOriginal;
      this._mode = value.mode;
      this._name = value.name;
      this._parser.internalValue = value.parser;
    }
  }

  // keep_original - computed: false, optional: true, required: false
  private _keepOriginal?: boolean | cdktf.IResolvable; 
  public get keepOriginal() {
    return this.getBooleanAttribute('keep_original');
  }
  public set keepOriginal(value: boolean | cdktf.IResolvable) {
    this._keepOriginal = value;
  }
  public resetKeepOriginal() {
    this._keepOriginal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepOriginalInput() {
    return this._keepOriginal;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // parser - computed: false, optional: false, required: true
  private _parser = new LogIngestConfigPlaintextParserParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: LogIngestConfigPlaintextParserParser) {
    this._parser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }
}

export class LogIngestConfigPlaintextParserList extends cdktf.ComplexList {
  public internalValue? : LogIngestConfigPlaintextParser[] | cdktf.IResolvable

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
  public get(index: number): LogIngestConfigPlaintextParserOutputReference {
    return new LogIngestConfigPlaintextParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config chronosphere_log_ingest_config}
*/
export class LogIngestConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_log_ingest_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogIngestConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogIngestConfig to import
  * @param importFromId The id of the existing LogIngestConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogIngestConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_log_ingest_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/log_ingest_config chronosphere_log_ingest_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogIngestConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogIngestConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_log_ingest_config',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
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
    this._fieldNormalization.internalValue = config.fieldNormalization;
    this._fieldParser.internalValue = config.fieldParser;
    this._plaintextParser.internalValue = config.plaintextParser;
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

  // field_normalization - computed: false, optional: true, required: false
  private _fieldNormalization = new LogIngestConfigFieldNormalizationOutputReference(this, "field_normalization");
  public get fieldNormalization() {
    return this._fieldNormalization;
  }
  public putFieldNormalization(value: LogIngestConfigFieldNormalization) {
    this._fieldNormalization.internalValue = value;
  }
  public resetFieldNormalization() {
    this._fieldNormalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNormalizationInput() {
    return this._fieldNormalization.internalValue;
  }

  // field_parser - computed: false, optional: true, required: false
  private _fieldParser = new LogIngestConfigFieldParserList(this, "field_parser", false);
  public get fieldParser() {
    return this._fieldParser;
  }
  public putFieldParser(value: LogIngestConfigFieldParser[] | cdktf.IResolvable) {
    this._fieldParser.internalValue = value;
  }
  public resetFieldParser() {
    this._fieldParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldParserInput() {
    return this._fieldParser.internalValue;
  }

  // plaintext_parser - computed: false, optional: true, required: false
  private _plaintextParser = new LogIngestConfigPlaintextParserList(this, "plaintext_parser", false);
  public get plaintextParser() {
    return this._plaintextParser;
  }
  public putPlaintextParser(value: LogIngestConfigPlaintextParser[] | cdktf.IResolvable) {
    this._plaintextParser.internalValue = value;
  }
  public resetPlaintextParser() {
    this._plaintextParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextParserInput() {
    return this._plaintextParser.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      field_normalization: logIngestConfigFieldNormalizationToTerraform(this._fieldNormalization.internalValue),
      field_parser: cdktf.listMapper(logIngestConfigFieldParserToTerraform, true)(this._fieldParser.internalValue),
      plaintext_parser: cdktf.listMapper(logIngestConfigPlaintextParserToTerraform, true)(this._plaintextParser.internalValue),
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
      field_normalization: {
        value: logIngestConfigFieldNormalizationToHclTerraform(this._fieldNormalization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogIngestConfigFieldNormalizationList",
      },
      field_parser: {
        value: cdktf.listMapperHcl(logIngestConfigFieldParserToHclTerraform, true)(this._fieldParser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogIngestConfigFieldParserList",
      },
      plaintext_parser: {
        value: cdktf.listMapperHcl(logIngestConfigPlaintextParserToHclTerraform, true)(this._plaintextParser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogIngestConfigPlaintextParserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
