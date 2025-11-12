// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PulsarjobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#active Pulsarjob#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#app_id Pulsarjob#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#id Pulsarjob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#name Pulsarjob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#shared Pulsarjob#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#type_id Pulsarjob#type_id}
  */
  readonly typeId: string;
  /**
  * blend_metric_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#blend_metric_weights Pulsarjob#blend_metric_weights}
  */
  readonly blendMetricWeights?: PulsarjobBlendMetricWeights;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#config Pulsarjob#config}
  */
  readonly config?: PulsarjobConfigA;
  /**
  * weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#weights Pulsarjob#weights}
  */
  readonly weights?: PulsarjobWeights[] | cdktf.IResolvable;
}
export interface PulsarjobBlendMetricWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#timestamp Pulsarjob#timestamp}
  */
  readonly timestamp: number;
}

export function pulsarjobBlendMetricWeightsToTerraform(struct?: PulsarjobBlendMetricWeightsOutputReference | PulsarjobBlendMetricWeights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp: cdktf.numberToTerraform(struct!.timestamp),
  }
}


export function pulsarjobBlendMetricWeightsToHclTerraform(struct?: PulsarjobBlendMetricWeightsOutputReference | PulsarjobBlendMetricWeights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timestamp: {
      value: cdktf.numberToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PulsarjobBlendMetricWeightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PulsarjobBlendMetricWeights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PulsarjobBlendMetricWeights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timestamp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timestamp = value.timestamp;
    }
  }

  // timestamp - computed: false, optional: false, required: true
  private _timestamp?: number; 
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }
  public set timestamp(value: number) {
    this._timestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }
}
export interface PulsarjobConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#host Pulsarjob#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#http Pulsarjob#http}
  */
  readonly http?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#https Pulsarjob#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#job_timeout_millis Pulsarjob#job_timeout_millis}
  */
  readonly jobTimeoutMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#request_timeout_millis Pulsarjob#request_timeout_millis}
  */
  readonly requestTimeoutMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#static_values Pulsarjob#static_values}
  */
  readonly staticValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#url_path Pulsarjob#url_path}
  */
  readonly urlPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#use_xhr Pulsarjob#use_xhr}
  */
  readonly useXhr?: boolean | cdktf.IResolvable;
}

export function pulsarjobConfigAToTerraform(struct?: PulsarjobConfigAOutputReference | PulsarjobConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http: cdktf.booleanToTerraform(struct!.http),
    https: cdktf.booleanToTerraform(struct!.https),
    job_timeout_millis: cdktf.numberToTerraform(struct!.jobTimeoutMillis),
    request_timeout_millis: cdktf.numberToTerraform(struct!.requestTimeoutMillis),
    static_values: cdktf.booleanToTerraform(struct!.staticValues),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
    use_xhr: cdktf.booleanToTerraform(struct!.useXhr),
  }
}


export function pulsarjobConfigAToHclTerraform(struct?: PulsarjobConfigAOutputReference | PulsarjobConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.booleanToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    https: {
      value: cdktf.booleanToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.jobTimeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_values: {
      value: cdktf.booleanToHclTerraform(struct!.staticValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_xhr: {
      value: cdktf.booleanToHclTerraform(struct!.useXhr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PulsarjobConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PulsarjobConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._jobTimeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeoutMillis = this._jobTimeoutMillis;
    }
    if (this._requestTimeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeoutMillis = this._requestTimeoutMillis;
    }
    if (this._staticValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValues = this._staticValues;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    if (this._useXhr !== undefined) {
      hasAnyValues = true;
      internalValueResult.useXhr = this._useXhr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PulsarjobConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http = undefined;
      this._https = undefined;
      this._jobTimeoutMillis = undefined;
      this._requestTimeoutMillis = undefined;
      this._staticValues = undefined;
      this._urlPath = undefined;
      this._useXhr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http = value.http;
      this._https = value.https;
      this._jobTimeoutMillis = value.jobTimeoutMillis;
      this._requestTimeoutMillis = value.requestTimeoutMillis;
      this._staticValues = value.staticValues;
      this._urlPath = value.urlPath;
      this._useXhr = value.useXhr;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http - computed: false, optional: true, required: false
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this.getBooleanAttribute('https');
  }
  public set https(value: boolean | cdktf.IResolvable) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // job_timeout_millis - computed: false, optional: true, required: false
  private _jobTimeoutMillis?: number; 
  public get jobTimeoutMillis() {
    return this.getNumberAttribute('job_timeout_millis');
  }
  public set jobTimeoutMillis(value: number) {
    this._jobTimeoutMillis = value;
  }
  public resetJobTimeoutMillis() {
    this._jobTimeoutMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutMillisInput() {
    return this._jobTimeoutMillis;
  }

  // request_timeout_millis - computed: false, optional: true, required: false
  private _requestTimeoutMillis?: number; 
  public get requestTimeoutMillis() {
    return this.getNumberAttribute('request_timeout_millis');
  }
  public set requestTimeoutMillis(value: number) {
    this._requestTimeoutMillis = value;
  }
  public resetRequestTimeoutMillis() {
    this._requestTimeoutMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutMillisInput() {
    return this._requestTimeoutMillis;
  }

  // static_values - computed: false, optional: true, required: false
  private _staticValues?: boolean | cdktf.IResolvable; 
  public get staticValues() {
    return this.getBooleanAttribute('static_values');
  }
  public set staticValues(value: boolean | cdktf.IResolvable) {
    this._staticValues = value;
  }
  public resetStaticValues() {
    this._staticValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValuesInput() {
    return this._staticValues;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // use_xhr - computed: false, optional: true, required: false
  private _useXhr?: boolean | cdktf.IResolvable; 
  public get useXhr() {
    return this.getBooleanAttribute('use_xhr');
  }
  public set useXhr(value: boolean | cdktf.IResolvable) {
    this._useXhr = value;
  }
  public resetUseXhr() {
    this._useXhr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useXhrInput() {
    return this._useXhr;
  }
}
export interface PulsarjobWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#default_value Pulsarjob#default_value}
  */
  readonly defaultValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#maximize Pulsarjob#maximize}
  */
  readonly maximize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#name Pulsarjob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#weight Pulsarjob#weight}
  */
  readonly weight: number;
}

export function pulsarjobWeightsToTerraform(struct?: PulsarjobWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    maximize: cdktf.booleanToTerraform(struct!.maximize),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function pulsarjobWeightsToHclTerraform(struct?: PulsarjobWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximize: {
      value: cdktf.booleanToHclTerraform(struct!.maximize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PulsarjobWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PulsarjobWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._maximize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximize = this._maximize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PulsarjobWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._maximize = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._maximize = value.maximize;
      this._name = value.name;
      this._weight = value.weight;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // maximize - computed: false, optional: true, required: false
  private _maximize?: boolean | cdktf.IResolvable; 
  public get maximize() {
    return this.getBooleanAttribute('maximize');
  }
  public set maximize(value: boolean | cdktf.IResolvable) {
    this._maximize = value;
  }
  public resetMaximize() {
    this._maximize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximizeInput() {
    return this._maximize;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class PulsarjobWeightsList extends cdktf.ComplexList {
  public internalValue? : PulsarjobWeights[] | cdktf.IResolvable

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
  public get(index: number): PulsarjobWeightsOutputReference {
    return new PulsarjobWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob ns1_pulsarjob}
*/
export class Pulsarjob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_pulsarjob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pulsarjob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pulsarjob to import
  * @param importFromId The id of the existing Pulsarjob that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pulsarjob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_pulsarjob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/pulsarjob ns1_pulsarjob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PulsarjobConfig
  */
  public constructor(scope: Construct, id: string, config: PulsarjobConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_pulsarjob',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._appId = config.appId;
    this._id = config.id;
    this._name = config.name;
    this._shared = config.shared;
    this._typeId = config.typeId;
    this._blendMetricWeights.internalValue = config.blendMetricWeights;
    this._config.internalValue = config.config;
    this._weights.internalValue = config.weights;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getBooleanAttribute('community');
  }

  // customer - computed: true, optional: false, required: false
  public get customer() {
    return this.getNumberAttribute('customer');
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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // blend_metric_weights - computed: false, optional: true, required: false
  private _blendMetricWeights = new PulsarjobBlendMetricWeightsOutputReference(this, "blend_metric_weights");
  public get blendMetricWeights() {
    return this._blendMetricWeights;
  }
  public putBlendMetricWeights(value: PulsarjobBlendMetricWeights) {
    this._blendMetricWeights.internalValue = value;
  }
  public resetBlendMetricWeights() {
    this._blendMetricWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blendMetricWeightsInput() {
    return this._blendMetricWeights.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new PulsarjobConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PulsarjobConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // weights - computed: false, optional: true, required: false
  private _weights = new PulsarjobWeightsList(this, "weights", true);
  public get weights() {
    return this._weights;
  }
  public putWeights(value: PulsarjobWeights[] | cdktf.IResolvable) {
    this._weights.internalValue = value;
  }
  public resetWeights() {
    this._weights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightsInput() {
    return this._weights.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      shared: cdktf.booleanToTerraform(this._shared),
      type_id: cdktf.stringToTerraform(this._typeId),
      blend_metric_weights: pulsarjobBlendMetricWeightsToTerraform(this._blendMetricWeights.internalValue),
      config: pulsarjobConfigAToTerraform(this._config.internalValue),
      weights: cdktf.listMapper(pulsarjobWeightsToTerraform, true)(this._weights.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type_id: {
        value: cdktf.stringToHclTerraform(this._typeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blend_metric_weights: {
        value: pulsarjobBlendMetricWeightsToHclTerraform(this._blendMetricWeights.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PulsarjobBlendMetricWeightsList",
      },
      config: {
        value: pulsarjobConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PulsarjobConfigAList",
      },
      weights: {
        value: cdktf.listMapperHcl(pulsarjobWeightsToHclTerraform, true)(this._weights.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PulsarjobWeightsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
