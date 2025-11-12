// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlBasedSamplingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#enabled UrlBasedSampling#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Select the scaling factor for the current sampling rate of the system. Possible values: `IncreaseCapturing128Times`, `IncreaseCapturing64Times`, `IncreaseCapturing32Times`, `IncreaseCapturing16Times`, `IncreaseCapturing8Times`, `IncreaseCapturing4Times`, `IncreaseCapturing2Times`, `ReduceCapturingByFactor2`, `ReduceCapturingByFactor4`, `ReduceCapturingByFactor8`, `ReduceCapturingByFactor16`, `ReduceCapturingByFactor32`, `ReduceCapturingByFactor64`, `ReduceCapturingByFactor128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#factor UrlBasedSampling#factor}
  */
  readonly factor?: string;
  /**
  * Possible values: `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#http_method UrlBasedSampling#http_method}
  */
  readonly httpMethod?: string[];
  /**
  * The scaling factor for the defined URL will be applied to any HTTP method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#http_method_any UrlBasedSampling#http_method_any}
  */
  readonly httpMethodAny: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#id UrlBasedSampling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The matching URLs will always be ignored, also if Adaptive Traffic Management is not active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#ignore UrlBasedSampling#ignore}
  */
  readonly ignore: boolean | cdktf.IResolvable;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#insert_after UrlBasedSampling#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Path of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#path UrlBasedSampling#path}
  */
  readonly path?: string;
  /**
  * Path comparison condition. Possible values: `EQUALS`, `DOES_NOT_EQUAL`, `CONTAINS`, `DOES_NOT_CONTAIN`, `STARTS_WITH`, `DOES_NOT_START_WITH`, `ENDS_WITH`, `DOES_NOT_END_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#path_comparison_type UrlBasedSampling#path_comparison_type}
  */
  readonly pathComparisonType?: string;
  /**
  * The scope of this setting (PROCESS_GROUP_INSTANCE, PROCESS_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#scope UrlBasedSampling#scope}
  */
  readonly scope?: string;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#query_parameters UrlBasedSampling#query_parameters}
  */
  readonly queryParameters?: UrlBasedSamplingQueryParameters;
}
export interface UrlBasedSamplingQueryParametersParameter {
  /**
  * Query parameter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#name UrlBasedSampling#name}
  */
  readonly name: string;
  /**
  * Query parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#value UrlBasedSampling#value}
  */
  readonly value?: string;
  /**
  * Query parameter value is undefined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#value_is_undefined UrlBasedSampling#value_is_undefined}
  */
  readonly valueIsUndefined?: boolean | cdktf.IResolvable;
}

export function urlBasedSamplingQueryParametersParameterToTerraform(struct?: UrlBasedSamplingQueryParametersParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_is_undefined: cdktf.booleanToTerraform(struct!.valueIsUndefined),
  }
}


export function urlBasedSamplingQueryParametersParameterToHclTerraform(struct?: UrlBasedSamplingQueryParametersParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    value_is_undefined: {
      value: cdktf.booleanToHclTerraform(struct!.valueIsUndefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlBasedSamplingQueryParametersParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlBasedSamplingQueryParametersParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueIsUndefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueIsUndefined = this._valueIsUndefined;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlBasedSamplingQueryParametersParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueIsUndefined = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueIsUndefined = value.valueIsUndefined;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_is_undefined - computed: false, optional: true, required: false
  private _valueIsUndefined?: boolean | cdktf.IResolvable; 
  public get valueIsUndefined() {
    return this.getBooleanAttribute('value_is_undefined');
  }
  public set valueIsUndefined(value: boolean | cdktf.IResolvable) {
    this._valueIsUndefined = value;
  }
  public resetValueIsUndefined() {
    this._valueIsUndefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIsUndefinedInput() {
    return this._valueIsUndefined;
  }
}

export class UrlBasedSamplingQueryParametersParameterList extends cdktf.ComplexList {
  public internalValue? : UrlBasedSamplingQueryParametersParameter[] | cdktf.IResolvable

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
  public get(index: number): UrlBasedSamplingQueryParametersParameterOutputReference {
    return new UrlBasedSamplingQueryParametersParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlBasedSamplingQueryParameters {
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#parameter UrlBasedSampling#parameter}
  */
  readonly parameter: UrlBasedSamplingQueryParametersParameter[] | cdktf.IResolvable;
}

export function urlBasedSamplingQueryParametersToTerraform(struct?: UrlBasedSamplingQueryParametersOutputReference | UrlBasedSamplingQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.listMapper(urlBasedSamplingQueryParametersParameterToTerraform, true)(struct!.parameter),
  }
}


export function urlBasedSamplingQueryParametersToHclTerraform(struct?: UrlBasedSamplingQueryParametersOutputReference | UrlBasedSamplingQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.listMapperHcl(urlBasedSamplingQueryParametersParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "UrlBasedSamplingQueryParametersParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlBasedSamplingQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlBasedSamplingQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlBasedSamplingQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter.internalValue = value.parameter;
    }
  }

  // parameter - computed: false, optional: false, required: true
  private _parameter = new UrlBasedSamplingQueryParametersParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: UrlBasedSamplingQueryParametersParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling dynatrace_url_based_sampling}
*/
export class UrlBasedSampling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_url_based_sampling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlBasedSampling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlBasedSampling to import
  * @param importFromId The id of the existing UrlBasedSampling that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlBasedSampling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_url_based_sampling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/url_based_sampling dynatrace_url_based_sampling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlBasedSamplingConfig
  */
  public constructor(scope: Construct, id: string, config: UrlBasedSamplingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_url_based_sampling',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._factor = config.factor;
    this._httpMethod = config.httpMethod;
    this._httpMethodAny = config.httpMethodAny;
    this._id = config.id;
    this._ignore = config.ignore;
    this._insertAfter = config.insertAfter;
    this._path = config.path;
    this._pathComparisonType = config.pathComparisonType;
    this._scope = config.scope;
    this._queryParameters.internalValue = config.queryParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string[]; 
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }
  public set httpMethod(value: string[]) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_method_any - computed: false, optional: false, required: true
  private _httpMethodAny?: boolean | cdktf.IResolvable; 
  public get httpMethodAny() {
    return this.getBooleanAttribute('http_method_any');
  }
  public set httpMethodAny(value: boolean | cdktf.IResolvable) {
    this._httpMethodAny = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodAnyInput() {
    return this._httpMethodAny;
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

  // ignore - computed: false, optional: false, required: true
  private _ignore?: boolean | cdktf.IResolvable; 
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }
  public set ignore(value: boolean | cdktf.IResolvable) {
    this._ignore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_comparison_type - computed: false, optional: true, required: false
  private _pathComparisonType?: string; 
  public get pathComparisonType() {
    return this.getStringAttribute('path_comparison_type');
  }
  public set pathComparisonType(value: string) {
    this._pathComparisonType = value;
  }
  public resetPathComparisonType() {
    this._pathComparisonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathComparisonTypeInput() {
    return this._pathComparisonType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new UrlBasedSamplingQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: UrlBasedSamplingQueryParameters) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      factor: cdktf.stringToTerraform(this._factor),
      http_method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpMethod),
      http_method_any: cdktf.booleanToTerraform(this._httpMethodAny),
      id: cdktf.stringToTerraform(this._id),
      ignore: cdktf.booleanToTerraform(this._ignore),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      path: cdktf.stringToTerraform(this._path),
      path_comparison_type: cdktf.stringToTerraform(this._pathComparisonType),
      scope: cdktf.stringToTerraform(this._scope),
      query_parameters: urlBasedSamplingQueryParametersToTerraform(this._queryParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      factor: {
        value: cdktf.stringToHclTerraform(this._factor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpMethod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_method_any: {
        value: cdktf.booleanToHclTerraform(this._httpMethodAny),
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
      ignore: {
        value: cdktf.booleanToHclTerraform(this._ignore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_comparison_type: {
        value: cdktf.stringToHclTerraform(this._pathComparisonType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_parameters: {
        value: urlBasedSamplingQueryParametersToHclTerraform(this._queryParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlBasedSamplingQueryParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
