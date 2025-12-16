// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginJqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#config GatewayPluginJq#config}
  */
  readonly config?: GatewayPluginJqConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#consumer GatewayPluginJq#consumer}
  */
  readonly consumer?: GatewayPluginJqConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#control_plane_id GatewayPluginJq#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#created_at GatewayPluginJq#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#enabled GatewayPluginJq#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#id GatewayPluginJq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#instance_name GatewayPluginJq#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#ordering GatewayPluginJq#ordering}
  */
  readonly ordering?: GatewayPluginJqOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#partials GatewayPluginJq#partials}
  */
  readonly partials?: GatewayPluginJqPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#protocols GatewayPluginJq#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#route GatewayPluginJq#route}
  */
  readonly route?: GatewayPluginJqRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#service GatewayPluginJq#service}
  */
  readonly service?: GatewayPluginJqService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#tags GatewayPluginJq#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#updated_at GatewayPluginJq#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginJqConfigRequestJqProgramOptions {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#ascii_output GatewayPluginJq#ascii_output}
  */
  readonly asciiOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#compact_output GatewayPluginJq#compact_output}
  */
  readonly compactOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#join_output GatewayPluginJq#join_output}
  */
  readonly joinOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#raw_output GatewayPluginJq#raw_output}
  */
  readonly rawOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#sort_keys GatewayPluginJq#sort_keys}
  */
  readonly sortKeys?: boolean | cdktf.IResolvable;
}

export function gatewayPluginJqConfigRequestJqProgramOptionsToTerraform(struct?: GatewayPluginJqConfigRequestJqProgramOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii_output: cdktf.booleanToTerraform(struct!.asciiOutput),
    compact_output: cdktf.booleanToTerraform(struct!.compactOutput),
    join_output: cdktf.booleanToTerraform(struct!.joinOutput),
    raw_output: cdktf.booleanToTerraform(struct!.rawOutput),
    sort_keys: cdktf.booleanToTerraform(struct!.sortKeys),
  }
}


export function gatewayPluginJqConfigRequestJqProgramOptionsToHclTerraform(struct?: GatewayPluginJqConfigRequestJqProgramOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ascii_output: {
      value: cdktf.booleanToHclTerraform(struct!.asciiOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compact_output: {
      value: cdktf.booleanToHclTerraform(struct!.compactOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    join_output: {
      value: cdktf.booleanToHclTerraform(struct!.joinOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    raw_output: {
      value: cdktf.booleanToHclTerraform(struct!.rawOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_keys: {
      value: cdktf.booleanToHclTerraform(struct!.sortKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqConfigRequestJqProgramOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqConfigRequestJqProgramOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asciiOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.asciiOutput = this._asciiOutput;
    }
    if (this._compactOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactOutput = this._compactOutput;
    }
    if (this._joinOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinOutput = this._joinOutput;
    }
    if (this._rawOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawOutput = this._rawOutput;
    }
    if (this._sortKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortKeys = this._sortKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqConfigRequestJqProgramOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asciiOutput = undefined;
      this._compactOutput = undefined;
      this._joinOutput = undefined;
      this._rawOutput = undefined;
      this._sortKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asciiOutput = value.asciiOutput;
      this._compactOutput = value.compactOutput;
      this._joinOutput = value.joinOutput;
      this._rawOutput = value.rawOutput;
      this._sortKeys = value.sortKeys;
    }
  }

  // ascii_output - computed: true, optional: true, required: false
  private _asciiOutput?: boolean | cdktf.IResolvable; 
  public get asciiOutput() {
    return this.getBooleanAttribute('ascii_output');
  }
  public set asciiOutput(value: boolean | cdktf.IResolvable) {
    this._asciiOutput = value;
  }
  public resetAsciiOutput() {
    this._asciiOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiOutputInput() {
    return this._asciiOutput;
  }

  // compact_output - computed: true, optional: true, required: false
  private _compactOutput?: boolean | cdktf.IResolvable; 
  public get compactOutput() {
    return this.getBooleanAttribute('compact_output');
  }
  public set compactOutput(value: boolean | cdktf.IResolvable) {
    this._compactOutput = value;
  }
  public resetCompactOutput() {
    this._compactOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactOutputInput() {
    return this._compactOutput;
  }

  // join_output - computed: true, optional: true, required: false
  private _joinOutput?: boolean | cdktf.IResolvable; 
  public get joinOutput() {
    return this.getBooleanAttribute('join_output');
  }
  public set joinOutput(value: boolean | cdktf.IResolvable) {
    this._joinOutput = value;
  }
  public resetJoinOutput() {
    this._joinOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinOutputInput() {
    return this._joinOutput;
  }

  // raw_output - computed: true, optional: true, required: false
  private _rawOutput?: boolean | cdktf.IResolvable; 
  public get rawOutput() {
    return this.getBooleanAttribute('raw_output');
  }
  public set rawOutput(value: boolean | cdktf.IResolvable) {
    this._rawOutput = value;
  }
  public resetRawOutput() {
    this._rawOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawOutputInput() {
    return this._rawOutput;
  }

  // sort_keys - computed: true, optional: true, required: false
  private _sortKeys?: boolean | cdktf.IResolvable; 
  public get sortKeys() {
    return this.getBooleanAttribute('sort_keys');
  }
  public set sortKeys(value: boolean | cdktf.IResolvable) {
    this._sortKeys = value;
  }
  public resetSortKeys() {
    this._sortKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortKeysInput() {
    return this._sortKeys;
  }
}
export interface GatewayPluginJqConfigResponseJqProgramOptions {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#ascii_output GatewayPluginJq#ascii_output}
  */
  readonly asciiOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#compact_output GatewayPluginJq#compact_output}
  */
  readonly compactOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#join_output GatewayPluginJq#join_output}
  */
  readonly joinOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#raw_output GatewayPluginJq#raw_output}
  */
  readonly rawOutput?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#sort_keys GatewayPluginJq#sort_keys}
  */
  readonly sortKeys?: boolean | cdktf.IResolvable;
}

export function gatewayPluginJqConfigResponseJqProgramOptionsToTerraform(struct?: GatewayPluginJqConfigResponseJqProgramOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii_output: cdktf.booleanToTerraform(struct!.asciiOutput),
    compact_output: cdktf.booleanToTerraform(struct!.compactOutput),
    join_output: cdktf.booleanToTerraform(struct!.joinOutput),
    raw_output: cdktf.booleanToTerraform(struct!.rawOutput),
    sort_keys: cdktf.booleanToTerraform(struct!.sortKeys),
  }
}


export function gatewayPluginJqConfigResponseJqProgramOptionsToHclTerraform(struct?: GatewayPluginJqConfigResponseJqProgramOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ascii_output: {
      value: cdktf.booleanToHclTerraform(struct!.asciiOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compact_output: {
      value: cdktf.booleanToHclTerraform(struct!.compactOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    join_output: {
      value: cdktf.booleanToHclTerraform(struct!.joinOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    raw_output: {
      value: cdktf.booleanToHclTerraform(struct!.rawOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_keys: {
      value: cdktf.booleanToHclTerraform(struct!.sortKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqConfigResponseJqProgramOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqConfigResponseJqProgramOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asciiOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.asciiOutput = this._asciiOutput;
    }
    if (this._compactOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactOutput = this._compactOutput;
    }
    if (this._joinOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinOutput = this._joinOutput;
    }
    if (this._rawOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawOutput = this._rawOutput;
    }
    if (this._sortKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortKeys = this._sortKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqConfigResponseJqProgramOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asciiOutput = undefined;
      this._compactOutput = undefined;
      this._joinOutput = undefined;
      this._rawOutput = undefined;
      this._sortKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asciiOutput = value.asciiOutput;
      this._compactOutput = value.compactOutput;
      this._joinOutput = value.joinOutput;
      this._rawOutput = value.rawOutput;
      this._sortKeys = value.sortKeys;
    }
  }

  // ascii_output - computed: true, optional: true, required: false
  private _asciiOutput?: boolean | cdktf.IResolvable; 
  public get asciiOutput() {
    return this.getBooleanAttribute('ascii_output');
  }
  public set asciiOutput(value: boolean | cdktf.IResolvable) {
    this._asciiOutput = value;
  }
  public resetAsciiOutput() {
    this._asciiOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiOutputInput() {
    return this._asciiOutput;
  }

  // compact_output - computed: true, optional: true, required: false
  private _compactOutput?: boolean | cdktf.IResolvable; 
  public get compactOutput() {
    return this.getBooleanAttribute('compact_output');
  }
  public set compactOutput(value: boolean | cdktf.IResolvable) {
    this._compactOutput = value;
  }
  public resetCompactOutput() {
    this._compactOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactOutputInput() {
    return this._compactOutput;
  }

  // join_output - computed: true, optional: true, required: false
  private _joinOutput?: boolean | cdktf.IResolvable; 
  public get joinOutput() {
    return this.getBooleanAttribute('join_output');
  }
  public set joinOutput(value: boolean | cdktf.IResolvable) {
    this._joinOutput = value;
  }
  public resetJoinOutput() {
    this._joinOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinOutputInput() {
    return this._joinOutput;
  }

  // raw_output - computed: true, optional: true, required: false
  private _rawOutput?: boolean | cdktf.IResolvable; 
  public get rawOutput() {
    return this.getBooleanAttribute('raw_output');
  }
  public set rawOutput(value: boolean | cdktf.IResolvable) {
    this._rawOutput = value;
  }
  public resetRawOutput() {
    this._rawOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawOutputInput() {
    return this._rawOutput;
  }

  // sort_keys - computed: true, optional: true, required: false
  private _sortKeys?: boolean | cdktf.IResolvable; 
  public get sortKeys() {
    return this.getBooleanAttribute('sort_keys');
  }
  public set sortKeys(value: boolean | cdktf.IResolvable) {
    this._sortKeys = value;
  }
  public resetSortKeys() {
    this._sortKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortKeysInput() {
    return this._sortKeys;
  }
}
export interface GatewayPluginJqConfigA {
  /**
  * Default: ["application/json"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#request_if_media_type GatewayPluginJq#request_if_media_type}
  */
  readonly requestIfMediaType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#request_jq_program GatewayPluginJq#request_jq_program}
  */
  readonly requestJqProgram?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#request_jq_program_options GatewayPluginJq#request_jq_program_options}
  */
  readonly requestJqProgramOptions?: GatewayPluginJqConfigRequestJqProgramOptions;
  /**
  * Default: ["application/json"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#response_if_media_type GatewayPluginJq#response_if_media_type}
  */
  readonly responseIfMediaType?: string[];
  /**
  * Default: [200]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#response_if_status_code GatewayPluginJq#response_if_status_code}
  */
  readonly responseIfStatusCode?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#response_jq_program GatewayPluginJq#response_jq_program}
  */
  readonly responseJqProgram?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#response_jq_program_options GatewayPluginJq#response_jq_program_options}
  */
  readonly responseJqProgramOptions?: GatewayPluginJqConfigResponseJqProgramOptions;
}

export function gatewayPluginJqConfigAToTerraform(struct?: GatewayPluginJqConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_if_media_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestIfMediaType),
    request_jq_program: cdktf.stringToTerraform(struct!.requestJqProgram),
    request_jq_program_options: gatewayPluginJqConfigRequestJqProgramOptionsToTerraform(struct!.requestJqProgramOptions),
    response_if_media_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseIfMediaType),
    response_if_status_code: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.responseIfStatusCode),
    response_jq_program: cdktf.stringToTerraform(struct!.responseJqProgram),
    response_jq_program_options: gatewayPluginJqConfigResponseJqProgramOptionsToTerraform(struct!.responseJqProgramOptions),
  }
}


export function gatewayPluginJqConfigAToHclTerraform(struct?: GatewayPluginJqConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_if_media_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestIfMediaType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_jq_program: {
      value: cdktf.stringToHclTerraform(struct!.requestJqProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_jq_program_options: {
      value: gatewayPluginJqConfigRequestJqProgramOptionsToHclTerraform(struct!.requestJqProgramOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJqConfigRequestJqProgramOptions",
    },
    response_if_media_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseIfMediaType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_if_status_code: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.responseIfStatusCode),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    response_jq_program: {
      value: cdktf.stringToHclTerraform(struct!.responseJqProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_jq_program_options: {
      value: gatewayPluginJqConfigResponseJqProgramOptionsToHclTerraform(struct!.responseJqProgramOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJqConfigResponseJqProgramOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestIfMediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIfMediaType = this._requestIfMediaType;
    }
    if (this._requestJqProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestJqProgram = this._requestJqProgram;
    }
    if (this._requestJqProgramOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestJqProgramOptions = this._requestJqProgramOptions?.internalValue;
    }
    if (this._responseIfMediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseIfMediaType = this._responseIfMediaType;
    }
    if (this._responseIfStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseIfStatusCode = this._responseIfStatusCode;
    }
    if (this._responseJqProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseJqProgram = this._responseJqProgram;
    }
    if (this._responseJqProgramOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseJqProgramOptions = this._responseJqProgramOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestIfMediaType = undefined;
      this._requestJqProgram = undefined;
      this._requestJqProgramOptions.internalValue = undefined;
      this._responseIfMediaType = undefined;
      this._responseIfStatusCode = undefined;
      this._responseJqProgram = undefined;
      this._responseJqProgramOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestIfMediaType = value.requestIfMediaType;
      this._requestJqProgram = value.requestJqProgram;
      this._requestJqProgramOptions.internalValue = value.requestJqProgramOptions;
      this._responseIfMediaType = value.responseIfMediaType;
      this._responseIfStatusCode = value.responseIfStatusCode;
      this._responseJqProgram = value.responseJqProgram;
      this._responseJqProgramOptions.internalValue = value.responseJqProgramOptions;
    }
  }

  // request_if_media_type - computed: true, optional: true, required: false
  private _requestIfMediaType?: string[]; 
  public get requestIfMediaType() {
    return this.getListAttribute('request_if_media_type');
  }
  public set requestIfMediaType(value: string[]) {
    this._requestIfMediaType = value;
  }
  public resetRequestIfMediaType() {
    this._requestIfMediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIfMediaTypeInput() {
    return this._requestIfMediaType;
  }

  // request_jq_program - computed: true, optional: true, required: false
  private _requestJqProgram?: string; 
  public get requestJqProgram() {
    return this.getStringAttribute('request_jq_program');
  }
  public set requestJqProgram(value: string) {
    this._requestJqProgram = value;
  }
  public resetRequestJqProgram() {
    this._requestJqProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestJqProgramInput() {
    return this._requestJqProgram;
  }

  // request_jq_program_options - computed: true, optional: true, required: false
  private _requestJqProgramOptions = new GatewayPluginJqConfigRequestJqProgramOptionsOutputReference(this, "request_jq_program_options");
  public get requestJqProgramOptions() {
    return this._requestJqProgramOptions;
  }
  public putRequestJqProgramOptions(value: GatewayPluginJqConfigRequestJqProgramOptions) {
    this._requestJqProgramOptions.internalValue = value;
  }
  public resetRequestJqProgramOptions() {
    this._requestJqProgramOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestJqProgramOptionsInput() {
    return this._requestJqProgramOptions.internalValue;
  }

  // response_if_media_type - computed: true, optional: true, required: false
  private _responseIfMediaType?: string[]; 
  public get responseIfMediaType() {
    return this.getListAttribute('response_if_media_type');
  }
  public set responseIfMediaType(value: string[]) {
    this._responseIfMediaType = value;
  }
  public resetResponseIfMediaType() {
    this._responseIfMediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseIfMediaTypeInput() {
    return this._responseIfMediaType;
  }

  // response_if_status_code - computed: true, optional: true, required: false
  private _responseIfStatusCode?: number[]; 
  public get responseIfStatusCode() {
    return this.getNumberListAttribute('response_if_status_code');
  }
  public set responseIfStatusCode(value: number[]) {
    this._responseIfStatusCode = value;
  }
  public resetResponseIfStatusCode() {
    this._responseIfStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseIfStatusCodeInput() {
    return this._responseIfStatusCode;
  }

  // response_jq_program - computed: true, optional: true, required: false
  private _responseJqProgram?: string; 
  public get responseJqProgram() {
    return this.getStringAttribute('response_jq_program');
  }
  public set responseJqProgram(value: string) {
    this._responseJqProgram = value;
  }
  public resetResponseJqProgram() {
    this._responseJqProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseJqProgramInput() {
    return this._responseJqProgram;
  }

  // response_jq_program_options - computed: true, optional: true, required: false
  private _responseJqProgramOptions = new GatewayPluginJqConfigResponseJqProgramOptionsOutputReference(this, "response_jq_program_options");
  public get responseJqProgramOptions() {
    return this._responseJqProgramOptions;
  }
  public putResponseJqProgramOptions(value: GatewayPluginJqConfigResponseJqProgramOptions) {
    this._responseJqProgramOptions.internalValue = value;
  }
  public resetResponseJqProgramOptions() {
    this._responseJqProgramOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseJqProgramOptionsInput() {
    return this._responseJqProgramOptions.internalValue;
  }
}
export interface GatewayPluginJqConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#id GatewayPluginJq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJqConsumerToTerraform(struct?: GatewayPluginJqConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJqConsumerToHclTerraform(struct?: GatewayPluginJqConsumer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJqOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#access GatewayPluginJq#access}
  */
  readonly access?: string[];
}

export function gatewayPluginJqOrderingAfterToTerraform(struct?: GatewayPluginJqOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginJqOrderingAfterToHclTerraform(struct?: GatewayPluginJqOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginJqOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#access GatewayPluginJq#access}
  */
  readonly access?: string[];
}

export function gatewayPluginJqOrderingBeforeToTerraform(struct?: GatewayPluginJqOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginJqOrderingBeforeToHclTerraform(struct?: GatewayPluginJqOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginJqOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#after GatewayPluginJq#after}
  */
  readonly after?: GatewayPluginJqOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#before GatewayPluginJq#before}
  */
  readonly before?: GatewayPluginJqOrderingBefore;
}

export function gatewayPluginJqOrderingToTerraform(struct?: GatewayPluginJqOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginJqOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginJqOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginJqOrderingToHclTerraform(struct?: GatewayPluginJqOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginJqOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJqOrderingAfter",
    },
    before: {
      value: gatewayPluginJqOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJqOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginJqOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginJqOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginJqOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginJqOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginJqPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#id GatewayPluginJq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#name GatewayPluginJq#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#path GatewayPluginJq#path}
  */
  readonly path?: string;
}

export function gatewayPluginJqPartialsToTerraform(struct?: GatewayPluginJqPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginJqPartialsToHclTerraform(struct?: GatewayPluginJqPartials | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginJqPartials | cdktf.IResolvable | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
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
      this._path = value.path;
    }
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

  // path - computed: true, optional: true, required: false
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
}

export class GatewayPluginJqPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginJqPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginJqPartialsOutputReference {
    return new GatewayPluginJqPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginJqRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#id GatewayPluginJq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJqRouteToTerraform(struct?: GatewayPluginJqRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJqRouteToHclTerraform(struct?: GatewayPluginJqRoute | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJqService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#id GatewayPluginJq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJqServiceToTerraform(struct?: GatewayPluginJqService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJqServiceToHclTerraform(struct?: GatewayPluginJqService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJqServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJqService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJqService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq konnect_gateway_plugin_jq}
*/
export class GatewayPluginJq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_jq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginJq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginJq to import
  * @param importFromId The id of the existing GatewayPluginJq that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginJq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_jq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_jq konnect_gateway_plugin_jq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginJqConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginJqConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_jq',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._consumer.internalValue = config.consumer;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginJqConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginJqConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginJqConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginJqConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginJqOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginJqOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginJqPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginJqPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginJqRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginJqRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginJqServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginJqService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginJqConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginJqConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginJqOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginJqPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginJqRouteToTerraform(this._route.internalValue),
      service: gatewayPluginJqServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginJqConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJqConfigA",
      },
      consumer: {
        value: gatewayPluginJqConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJqConsumer",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginJqOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJqOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginJqPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginJqPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginJqRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJqRoute",
      },
      service: {
        value: gatewayPluginJqServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJqService",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
