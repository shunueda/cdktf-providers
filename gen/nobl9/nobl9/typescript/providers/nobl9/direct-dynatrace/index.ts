// https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectDynatraceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#description DirectDynatrace#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#display_name DirectDynatrace#display_name}
  */
  readonly displayName?: string;
  /**
  * [required] | Dynatrace Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#dynatrace_token DirectDynatrace#dynatrace_token}
  */
  readonly dynatraceToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#id DirectDynatrace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [Logs documentation](https://docs.nobl9.com/features/slo-troubleshooting/event-logs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#log_collection_enabled DirectDynatrace#log_collection_enabled}
  */
  readonly logCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#name DirectDynatrace#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#project DirectDynatrace#project}
  */
  readonly project: string;
  /**
  * Release channel of the created data source [stable/beta]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#release_channel DirectDynatrace#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used anywhere; however, it's kept for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#source_of DirectDynatrace#source_of}
  */
  readonly sourceOf?: string[];
  /**
  * Dynatrace API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#url DirectDynatrace#url}
  */
  readonly url: string;
  /**
  * historical_data_retrieval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#historical_data_retrieval DirectDynatrace#historical_data_retrieval}
  */
  readonly historicalDataRetrieval?: DirectDynatraceHistoricalDataRetrieval;
  /**
  * query_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#query_delay DirectDynatrace#query_delay}
  */
  readonly queryDelay?: DirectDynatraceQueryDelay;
}
export interface DirectDynatraceHistoricalDataRetrievalDefaultDuration {
  /**
  * Must be one of Minute, Hour, or Day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#unit DirectDynatrace#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#value DirectDynatrace#value}
  */
  readonly value: number;
}

export function directDynatraceHistoricalDataRetrievalDefaultDurationToTerraform(struct?: DirectDynatraceHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directDynatraceHistoricalDataRetrievalDefaultDurationToHclTerraform(struct?: DirectDynatraceHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable): any {
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

export class DirectDynatraceHistoricalDataRetrievalDefaultDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectDynatraceHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DirectDynatraceHistoricalDataRetrievalDefaultDuration | cdktf.IResolvable | undefined) {
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

export class DirectDynatraceHistoricalDataRetrievalDefaultDurationList extends cdktf.ComplexList {
  public internalValue? : DirectDynatraceHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable

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
  public get(index: number): DirectDynatraceHistoricalDataRetrievalDefaultDurationOutputReference {
    return new DirectDynatraceHistoricalDataRetrievalDefaultDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectDynatraceHistoricalDataRetrievalMaxDuration {
  /**
  * Must be one of Minute, Hour, or Day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#unit DirectDynatrace#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#value DirectDynatrace#value}
  */
  readonly value: number;
}

export function directDynatraceHistoricalDataRetrievalMaxDurationToTerraform(struct?: DirectDynatraceHistoricalDataRetrievalMaxDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directDynatraceHistoricalDataRetrievalMaxDurationToHclTerraform(struct?: DirectDynatraceHistoricalDataRetrievalMaxDuration | cdktf.IResolvable): any {
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

export class DirectDynatraceHistoricalDataRetrievalMaxDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectDynatraceHistoricalDataRetrievalMaxDuration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DirectDynatraceHistoricalDataRetrievalMaxDuration | cdktf.IResolvable | undefined) {
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

export class DirectDynatraceHistoricalDataRetrievalMaxDurationList extends cdktf.ComplexList {
  public internalValue? : DirectDynatraceHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable

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
  public get(index: number): DirectDynatraceHistoricalDataRetrievalMaxDurationOutputReference {
    return new DirectDynatraceHistoricalDataRetrievalMaxDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectDynatraceHistoricalDataRetrieval {
  /**
  * default_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#default_duration DirectDynatrace#default_duration}
  */
  readonly defaultDuration: DirectDynatraceHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable;
  /**
  * max_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#max_duration DirectDynatrace#max_duration}
  */
  readonly maxDuration: DirectDynatraceHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable;
}

export function directDynatraceHistoricalDataRetrievalToTerraform(struct?: DirectDynatraceHistoricalDataRetrievalOutputReference | DirectDynatraceHistoricalDataRetrieval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_duration: cdktf.listMapper(directDynatraceHistoricalDataRetrievalDefaultDurationToTerraform, true)(struct!.defaultDuration),
    max_duration: cdktf.listMapper(directDynatraceHistoricalDataRetrievalMaxDurationToTerraform, true)(struct!.maxDuration),
  }
}


export function directDynatraceHistoricalDataRetrievalToHclTerraform(struct?: DirectDynatraceHistoricalDataRetrievalOutputReference | DirectDynatraceHistoricalDataRetrieval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_duration: {
      value: cdktf.listMapperHcl(directDynatraceHistoricalDataRetrievalDefaultDurationToHclTerraform, true)(struct!.defaultDuration),
      isBlock: true,
      type: "list",
      storageClassType: "DirectDynatraceHistoricalDataRetrievalDefaultDurationList",
    },
    max_duration: {
      value: cdktf.listMapperHcl(directDynatraceHistoricalDataRetrievalMaxDurationToHclTerraform, true)(struct!.maxDuration),
      isBlock: true,
      type: "list",
      storageClassType: "DirectDynatraceHistoricalDataRetrievalMaxDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectDynatraceHistoricalDataRetrievalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectDynatraceHistoricalDataRetrieval | undefined {
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

  public set internalValue(value: DirectDynatraceHistoricalDataRetrieval | undefined) {
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
  private _defaultDuration = new DirectDynatraceHistoricalDataRetrievalDefaultDurationList(this, "default_duration", false);
  public get defaultDuration() {
    return this._defaultDuration;
  }
  public putDefaultDuration(value: DirectDynatraceHistoricalDataRetrievalDefaultDuration[] | cdktf.IResolvable) {
    this._defaultDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDurationInput() {
    return this._defaultDuration.internalValue;
  }

  // max_duration - computed: false, optional: false, required: true
  private _maxDuration = new DirectDynatraceHistoricalDataRetrievalMaxDurationList(this, "max_duration", false);
  public get maxDuration() {
    return this._maxDuration;
  }
  public putMaxDuration(value: DirectDynatraceHistoricalDataRetrievalMaxDuration[] | cdktf.IResolvable) {
    this._maxDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration.internalValue;
  }
}
export interface DirectDynatraceQueryDelay {
  /**
  * Must be one of Minute or Second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#unit DirectDynatrace#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#value DirectDynatrace#value}
  */
  readonly value: number;
}

export function directDynatraceQueryDelayToTerraform(struct?: DirectDynatraceQueryDelayOutputReference | DirectDynatraceQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directDynatraceQueryDelayToHclTerraform(struct?: DirectDynatraceQueryDelayOutputReference | DirectDynatraceQueryDelay): any {
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

export class DirectDynatraceQueryDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectDynatraceQueryDelay | undefined {
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

  public set internalValue(value: DirectDynatraceQueryDelay | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace nobl9_direct_dynatrace}
*/
export class DirectDynatrace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_direct_dynatrace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectDynatrace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectDynatrace to import
  * @param importFromId The id of the existing DirectDynatrace that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectDynatrace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_direct_dynatrace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/direct_dynatrace nobl9_direct_dynatrace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectDynatraceConfig
  */
  public constructor(scope: Construct, id: string, config: DirectDynatraceConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_direct_dynatrace',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.45.0',
        providerVersionConstraint: '0.45.0'
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
    this._dynatraceToken = config.dynatraceToken;
    this._id = config.id;
    this._logCollectionEnabled = config.logCollectionEnabled;
    this._name = config.name;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._sourceOf = config.sourceOf;
    this._url = config.url;
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

  // dynatrace_token - computed: true, optional: true, required: false
  private _dynatraceToken?: string; 
  public get dynatraceToken() {
    return this.getStringAttribute('dynatrace_token');
  }
  public set dynatraceToken(value: string) {
    this._dynatraceToken = value;
  }
  public resetDynatraceToken() {
    this._dynatraceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceTokenInput() {
    return this._dynatraceToken;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // historical_data_retrieval - computed: false, optional: true, required: false
  private _historicalDataRetrieval = new DirectDynatraceHistoricalDataRetrievalOutputReference(this, "historical_data_retrieval");
  public get historicalDataRetrieval() {
    return this._historicalDataRetrieval;
  }
  public putHistoricalDataRetrieval(value: DirectDynatraceHistoricalDataRetrieval) {
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
  private _queryDelay = new DirectDynatraceQueryDelayOutputReference(this, "query_delay");
  public get queryDelay() {
    return this._queryDelay;
  }
  public putQueryDelay(value: DirectDynatraceQueryDelay) {
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
      dynatrace_token: cdktf.stringToTerraform(this._dynatraceToken),
      id: cdktf.stringToTerraform(this._id),
      log_collection_enabled: cdktf.booleanToTerraform(this._logCollectionEnabled),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      source_of: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceOf),
      url: cdktf.stringToTerraform(this._url),
      historical_data_retrieval: directDynatraceHistoricalDataRetrievalToTerraform(this._historicalDataRetrieval.internalValue),
      query_delay: directDynatraceQueryDelayToTerraform(this._queryDelay.internalValue),
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
      dynatrace_token: {
        value: cdktf.stringToHclTerraform(this._dynatraceToken),
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
      source_of: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceOf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      historical_data_retrieval: {
        value: directDynatraceHistoricalDataRetrievalToHclTerraform(this._historicalDataRetrieval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirectDynatraceHistoricalDataRetrievalList",
      },
      query_delay: {
        value: directDynatraceQueryDelayToHclTerraform(this._queryDelay.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectDynatraceQueryDelayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
