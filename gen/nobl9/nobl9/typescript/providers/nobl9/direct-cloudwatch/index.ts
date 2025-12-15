// https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectCloudwatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#description DirectCloudwatch#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#display_name DirectCloudwatch#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#id DirectCloudwatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [Logs documentation](https://docs.nobl9.com/features/slo-troubleshooting/event-logs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#log_collection_enabled DirectCloudwatch#log_collection_enabled}
  */
  readonly logCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#name DirectCloudwatch#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#project DirectCloudwatch#project}
  */
  readonly project: string;
  /**
  * Release channel of the created data source [stable/beta]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#release_channel DirectCloudwatch#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * [required] | ARN of the AWS IAM Role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#role_arn DirectCloudwatch#role_arn}
  */
  readonly roleArn?: string;
  /**
  * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used anywhere; however, it's kept for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#source_of DirectCloudwatch#source_of}
  */
  readonly sourceOf?: string[];
  /**
  * historical_data_retrieval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#historical_data_retrieval DirectCloudwatch#historical_data_retrieval}
  */
  readonly historicalDataRetrieval?: DirectCloudwatchHistoricalDataRetrieval;
  /**
  * query_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#query_delay DirectCloudwatch#query_delay}
  */
  readonly queryDelay?: DirectCloudwatchQueryDelay;
}
export interface DirectCloudwatchHistoricalDataRetrievalDefaultDuration {
  /**
  * Must be one of Minute, Hour, or Day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#unit DirectCloudwatch#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#value DirectCloudwatch#value}
  */
  readonly value: number;
}

export function directCloudwatchHistoricalDataRetrievalDefaultDurationToTerraform(struct?: DirectCloudwatchHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directCloudwatchHistoricalDataRetrievalDefaultDurationToHclTerraform(struct?: DirectCloudwatchHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectCloudwatchHistoricalDataRetrievalDefaultDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectCloudwatchHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectCloudwatchHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DirectCloudwatchHistoricalDataRetrievalDefaultDurationList extends cdktf.ComplexList {
  public internalValue? : DirectCloudwatchHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable

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
  public get(index: number): DirectCloudwatchHistoricalDataRetrievalDefaultDurationOutputReference {
    return new DirectCloudwatchHistoricalDataRetrievalDefaultDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectCloudwatchHistoricalDataRetrievalMaxDuration {
  /**
  * Must be one of Minute, Hour, or Day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#unit DirectCloudwatch#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#value DirectCloudwatch#value}
  */
  readonly value: number;
}

export function directCloudwatchHistoricalDataRetrievalMaxDurationToTerraform(struct?: DirectCloudwatchHistoricalDataRetrievalMaxDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directCloudwatchHistoricalDataRetrievalMaxDurationToHclTerraform(struct?: DirectCloudwatchHistoricalDataRetrievalMaxDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectCloudwatchHistoricalDataRetrievalMaxDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectCloudwatchHistoricalDataRetrievalMaxDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectCloudwatchHistoricalDataRetrievalMaxDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DirectCloudwatchHistoricalDataRetrievalMaxDurationList extends cdktf.ComplexList {
  public internalValue? : DirectCloudwatchHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable

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
  public get(index: number): DirectCloudwatchHistoricalDataRetrievalMaxDurationOutputReference {
    return new DirectCloudwatchHistoricalDataRetrievalMaxDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectCloudwatchHistoricalDataRetrieval {
  /**
  * default_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#default_duration DirectCloudwatch#default_duration}
  */
  readonly defaultDuration: DirectCloudwatchHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable;
  /**
  * max_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#max_duration DirectCloudwatch#max_duration}
  */
  readonly maxDuration: DirectCloudwatchHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable;
}

export function directCloudwatchHistoricalDataRetrievalToTerraform(struct?: DirectCloudwatchHistoricalDataRetrievalOutputReference | DirectCloudwatchHistoricalDataRetrieval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_duration: cdktf.listMapper(directCloudwatchHistoricalDataRetrievalDefaultDurationToTerraform, true)(struct!.defaultDuration),
    max_duration: cdktf.listMapper(directCloudwatchHistoricalDataRetrievalMaxDurationToTerraform, true)(struct!.maxDuration),
  }
}


export function directCloudwatchHistoricalDataRetrievalToHclTerraform(struct?: DirectCloudwatchHistoricalDataRetrievalOutputReference | DirectCloudwatchHistoricalDataRetrieval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_duration: {
      value: cdktf.listMapperHcl(directCloudwatchHistoricalDataRetrievalDefaultDurationToHclTerraform, true)(struct!.defaultDuration),
      isBlock: true,
      type: "list",
      storageClassType: "DirectCloudwatchHistoricalDataRetrievalDefaultDurationList",
    },
    max_duration: {
      value: cdktf.listMapperHcl(directCloudwatchHistoricalDataRetrievalMaxDurationToHclTerraform, true)(struct!.maxDuration),
      isBlock: true,
      type: "list",
      storageClassType: "DirectCloudwatchHistoricalDataRetrievalMaxDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectCloudwatchHistoricalDataRetrievalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectCloudwatchHistoricalDataRetrieval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDuration = this._defaultDuration?.internalValue;
    }
    if (this._maxDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectCloudwatchHistoricalDataRetrieval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDuration.internalValue = undefined;
      this._maxDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDuration.internalValue = value.defaultDuration;
      this._maxDuration.internalValue = value.maxDuration;
    }
  }

  // default_duration - computed: false, optional: false, required: true
  private _defaultDuration = new DirectCloudwatchHistoricalDataRetrievalDefaultDurationList(this, "default_duration", false);
  public get defaultDuration() {
    return this._defaultDuration;
  }
  public putDefaultDuration(value: DirectCloudwatchHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable) {
    this._defaultDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDurationInput() {
    return this._defaultDuration.internalValue;
  }

  // max_duration - computed: false, optional: false, required: true
  private _maxDuration = new DirectCloudwatchHistoricalDataRetrievalMaxDurationList(this, "max_duration", false);
  public get maxDuration() {
    return this._maxDuration;
  }
  public putMaxDuration(value: DirectCloudwatchHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable) {
    this._maxDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration.internalValue;
  }
}
export interface DirectCloudwatchQueryDelay {
  /**
  * Must be one of Minute or Second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#unit DirectCloudwatch#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#value DirectCloudwatch#value}
  */
  readonly value: number;
}

export function directCloudwatchQueryDelayToTerraform(struct?: DirectCloudwatchQueryDelayOutputReference | DirectCloudwatchQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directCloudwatchQueryDelayToHclTerraform(struct?: DirectCloudwatchQueryDelayOutputReference | DirectCloudwatchQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectCloudwatchQueryDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectCloudwatchQueryDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectCloudwatchQueryDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch nobl9_direct_cloudwatch}
*/
export class DirectCloudwatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_direct_cloudwatch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectCloudwatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectCloudwatch to import
  * @param importFromId The id of the existing DirectCloudwatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectCloudwatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_direct_cloudwatch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.1/docs/resources/direct_cloudwatch nobl9_direct_cloudwatch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectCloudwatchConfig
  */
  public constructor(scope: Construct, id: string, config: DirectCloudwatchConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_direct_cloudwatch',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.45.1',
        providerVersionConstraint: '0.45.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._logCollectionEnabled = config.logCollectionEnabled;
    this._name = config.name;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._roleArn = config.roleArn;
    this._sourceOf = config.sourceOf;
    this._historicalDataRetrieval.internalValue = config.historicalDataRetrieval;
    this._queryDelay.internalValue = config.queryDelay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // log_collection_enabled - computed: false, optional: true, required: false
  private _logCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get logCollectionEnabled() {
    return this.getBooleanAttribute('log_collection_enabled');
  }
  public set logCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._logCollectionEnabled = value;
  }
  public resetLogCollectionEnabled() {
    this._logCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionEnabledInput() {
    return this._logCollectionEnabled;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // source_of - computed: false, optional: true, required: false
  private _sourceOf?: string[]; 
  public get sourceOf() {
    return this.getListAttribute('source_of');
  }
  public set sourceOf(value: string[]) {
    this._sourceOf = value;
  }
  public resetSourceOf() {
    this._sourceOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOfInput() {
    return this._sourceOf;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // historical_data_retrieval - computed: false, optional: true, required: false
  private _historicalDataRetrieval = new DirectCloudwatchHistoricalDataRetrievalOutputReference(this, "historical_data_retrieval");
  public get historicalDataRetrieval() {
    return this._historicalDataRetrieval;
  }
  public putHistoricalDataRetrieval(value: DirectCloudwatchHistoricalDataRetrieval) {
    this._historicalDataRetrieval.internalValue = value;
  }
  public resetHistoricalDataRetrieval() {
    this._historicalDataRetrieval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalDataRetrievalInput() {
    return this._historicalDataRetrieval.internalValue;
  }

  // query_delay - computed: false, optional: true, required: false
  private _queryDelay = new DirectCloudwatchQueryDelayOutputReference(this, "query_delay");
  public get queryDelay() {
    return this._queryDelay;
  }
  public putQueryDelay(value: DirectCloudwatchQueryDelay) {
    this._queryDelay.internalValue = value;
  }
  public resetQueryDelay() {
    this._queryDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDelayInput() {
    return this._queryDelay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      log_collection_enabled: cdktf.booleanToTerraform(this._logCollectionEnabled),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      source_of: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceOf),
      historical_data_retrieval: directCloudwatchHistoricalDataRetrievalToTerraform(this._historicalDataRetrieval.internalValue),
      query_delay: directCloudwatchQueryDelayToTerraform(this._queryDelay.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      log_collection_enabled: {
        value: cdktf.booleanToHclTerraform(this._logCollectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_of: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceOf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      historical_data_retrieval: {
        value: directCloudwatchHistoricalDataRetrievalToHclTerraform(this._historicalDataRetrieval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirectCloudwatchHistoricalDataRetrievalList",
      },
      query_delay: {
        value: directCloudwatchQueryDelayToHclTerraform(this._queryDelay.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectCloudwatchQueryDelayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
