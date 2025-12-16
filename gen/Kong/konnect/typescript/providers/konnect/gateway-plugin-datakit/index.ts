// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginDatakitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#config GatewayPluginDatakit#config}
  */
  readonly config: GatewayPluginDatakitConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#consumer GatewayPluginDatakit#consumer}
  */
  readonly consumer?: GatewayPluginDatakitConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#consumer_group GatewayPluginDatakit#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginDatakitConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#control_plane_id GatewayPluginDatakit#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#created_at GatewayPluginDatakit#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#enabled GatewayPluginDatakit#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#id GatewayPluginDatakit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#instance_name GatewayPluginDatakit#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ordering GatewayPluginDatakit#ordering}
  */
  readonly ordering?: GatewayPluginDatakitOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#partials GatewayPluginDatakit#partials}
  */
  readonly partials?: GatewayPluginDatakitPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#protocols GatewayPluginDatakit#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#route GatewayPluginDatakit#route}
  */
  readonly route?: GatewayPluginDatakitRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#service GatewayPluginDatakit#service}
  */
  readonly service?: GatewayPluginDatakitService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#tags GatewayPluginDatakit#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#updated_at GatewayPluginDatakit#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginDatakitConfigNodesBranchOutputs {
  /**
  * node output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#else GatewayPluginDatakit#else}
  */
  readonly else?: string;
  /**
  * node output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#then GatewayPluginDatakit#then}
  */
  readonly then?: string;
}

export function gatewayPluginDatakitConfigNodesBranchOutputsToTerraform(struct?: GatewayPluginDatakitConfigNodesBranchOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    else: cdktf.stringToTerraform(struct!.else),
    then: cdktf.stringToTerraform(struct!.then),
  }
}


export function gatewayPluginDatakitConfigNodesBranchOutputsToHclTerraform(struct?: GatewayPluginDatakitConfigNodesBranchOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    else: {
      value: cdktf.stringToHclTerraform(struct!.else),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    then: {
      value: cdktf.stringToHclTerraform(struct!.then),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesBranchOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesBranchOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._else !== undefined) {
      hasAnyValues = true;
      internalValueResult.else = this._else;
    }
    if (this._then !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesBranchOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._else = undefined;
      this._then = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._else = value.else;
      this._then = value.then;
    }
  }

  // else - computed: true, optional: true, required: false
  private _else?: string; 
  public get else() {
    return this.getStringAttribute('else');
  }
  public set else(value: string) {
    this._else = value;
  }
  public resetElse() {
    this._else = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseInput() {
    return this._else;
  }

  // then - computed: true, optional: true, required: false
  private _then?: string; 
  public get then() {
    return this.getStringAttribute('then');
  }
  public set then(value: string) {
    this._then = value;
  }
  public resetThen() {
    this._then = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then;
  }
}
export interface GatewayPluginDatakitConfigNodesBranch {
  /**
  * nodes to execute if the input condition is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#else GatewayPluginDatakit#else}
  */
  readonly else?: string[];
  /**
  * branch node input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#input GatewayPluginDatakit#input}
  */
  readonly input?: string;
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * branch node output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#output GatewayPluginDatakit#output}
  */
  readonly output?: string;
  /**
  * branch node outputs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#outputs GatewayPluginDatakit#outputs}
  */
  readonly outputs?: GatewayPluginDatakitConfigNodesBranchOutputs;
  /**
  * nodes to execute if the input condition is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#then GatewayPluginDatakit#then}
  */
  readonly then?: string[];
}

export function gatewayPluginDatakitConfigNodesBranchToTerraform(struct?: GatewayPluginDatakitConfigNodesBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    else: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.else),
    input: cdktf.stringToTerraform(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
    outputs: gatewayPluginDatakitConfigNodesBranchOutputsToTerraform(struct!.outputs),
    then: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.then),
  }
}


export function gatewayPluginDatakitConfigNodesBranchToHclTerraform(struct?: GatewayPluginDatakitConfigNodesBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    else: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.else),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: gatewayPluginDatakitConfigNodesBranchOutputsToHclTerraform(struct!.outputs),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesBranchOutputs",
    },
    then: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.then),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._else !== undefined) {
      hasAnyValues = true;
      internalValueResult.else = this._else;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._then !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._else = undefined;
      this._input = undefined;
      this._name = undefined;
      this._output = undefined;
      this._outputs.internalValue = undefined;
      this._then = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._else = value.else;
      this._input = value.input;
      this._name = value.name;
      this._output = value.output;
      this._outputs.internalValue = value.outputs;
      this._then = value.then;
    }
  }

  // else - computed: false, optional: true, required: false
  private _else?: string[]; 
  public get else() {
    return this.getListAttribute('else');
  }
  public set else(value: string[]) {
    this._else = value;
  }
  public resetElse() {
    this._else = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseInput() {
    return this._else;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // outputs - computed: true, optional: true, required: false
  private _outputs = new GatewayPluginDatakitConfigNodesBranchOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: GatewayPluginDatakitConfigNodesBranchOutputs) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then?: string[]; 
  public get then() {
    return this.getListAttribute('then');
  }
  public set then(value: string[]) {
    this._then = value;
  }
  public resetThen() {
    this._then = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then;
  }
}
export interface GatewayPluginDatakitConfigNodesCacheInputs {
  /**
  * The data to be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#data GatewayPluginDatakit#data}
  */
  readonly data?: string;
  /**
  * The cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#key GatewayPluginDatakit#key}
  */
  readonly key?: string;
  /**
  * The TTL in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ttl GatewayPluginDatakit#ttl}
  */
  readonly ttl?: string;
}

export function gatewayPluginDatakitConfigNodesCacheInputsToTerraform(struct?: GatewayPluginDatakitConfigNodesCacheInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    key: cdktf.stringToTerraform(struct!.key),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function gatewayPluginDatakitConfigNodesCacheInputsToHclTerraform(struct?: GatewayPluginDatakitConfigNodesCacheInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesCacheInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesCacheInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesCacheInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._key = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._key = value.key;
      this._ttl = value.ttl;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // key - computed: true, optional: true, required: false
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

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface GatewayPluginDatakitConfigNodesCacheOutputs {
  /**
  * The data that was cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#data GatewayPluginDatakit#data}
  */
  readonly data?: string;
  /**
  * Signals a cache hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#hit GatewayPluginDatakit#hit}
  */
  readonly hit?: string;
  /**
  * Signals a cache miss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#miss GatewayPluginDatakit#miss}
  */
  readonly miss?: string;
  /**
  * Signals whether data was stored in cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#stored GatewayPluginDatakit#stored}
  */
  readonly stored?: string;
}

export function gatewayPluginDatakitConfigNodesCacheOutputsToTerraform(struct?: GatewayPluginDatakitConfigNodesCacheOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    hit: cdktf.stringToTerraform(struct!.hit),
    miss: cdktf.stringToTerraform(struct!.miss),
    stored: cdktf.stringToTerraform(struct!.stored),
  }
}


export function gatewayPluginDatakitConfigNodesCacheOutputsToHclTerraform(struct?: GatewayPluginDatakitConfigNodesCacheOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hit: {
      value: cdktf.stringToHclTerraform(struct!.hit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    miss: {
      value: cdktf.stringToHclTerraform(struct!.miss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stored: {
      value: cdktf.stringToHclTerraform(struct!.stored),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesCacheOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesCacheOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._hit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hit = this._hit;
    }
    if (this._miss !== undefined) {
      hasAnyValues = true;
      internalValueResult.miss = this._miss;
    }
    if (this._stored !== undefined) {
      hasAnyValues = true;
      internalValueResult.stored = this._stored;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesCacheOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._hit = undefined;
      this._miss = undefined;
      this._stored = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._hit = value.hit;
      this._miss = value.miss;
      this._stored = value.stored;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // hit - computed: true, optional: true, required: false
  private _hit?: string; 
  public get hit() {
    return this.getStringAttribute('hit');
  }
  public set hit(value: string) {
    this._hit = value;
  }
  public resetHit() {
    this._hit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitInput() {
    return this._hit;
  }

  // miss - computed: true, optional: true, required: false
  private _miss?: string; 
  public get miss() {
    return this.getStringAttribute('miss');
  }
  public set miss(value: string) {
    this._miss = value;
  }
  public resetMiss() {
    this._miss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missInput() {
    return this._miss;
  }

  // stored - computed: true, optional: true, required: false
  private _stored?: string; 
  public get stored() {
    return this.getStringAttribute('stored');
  }
  public set stored(value: string) {
    this._stored = value;
  }
  public resetStored() {
    this._stored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedInput() {
    return this._stored;
  }
}
export interface GatewayPluginDatakitConfigNodesCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#bypass_on_error GatewayPluginDatakit#bypass_on_error}
  */
  readonly bypassOnError?: boolean | cdktf.IResolvable;
  /**
  * cache node input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#input GatewayPluginDatakit#input}
  */
  readonly input?: string;
  /**
  * cache node inputs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#inputs GatewayPluginDatakit#inputs}
  */
  readonly inputs?: GatewayPluginDatakitConfigNodesCacheInputs;
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * cache node output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#output GatewayPluginDatakit#output}
  */
  readonly output?: string;
  /**
  * cache node outputs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#outputs GatewayPluginDatakit#outputs}
  */
  readonly outputs?: GatewayPluginDatakitConfigNodesCacheOutputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ttl GatewayPluginDatakit#ttl}
  */
  readonly ttl?: number;
}

export function gatewayPluginDatakitConfigNodesCacheToTerraform(struct?: GatewayPluginDatakitConfigNodesCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_on_error: cdktf.booleanToTerraform(struct!.bypassOnError),
    input: cdktf.stringToTerraform(struct!.input),
    inputs: gatewayPluginDatakitConfigNodesCacheInputsToTerraform(struct!.inputs),
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
    outputs: gatewayPluginDatakitConfigNodesCacheOutputsToTerraform(struct!.outputs),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function gatewayPluginDatakitConfigNodesCacheToHclTerraform(struct?: GatewayPluginDatakitConfigNodesCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.bypassOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: gatewayPluginDatakitConfigNodesCacheInputsToHclTerraform(struct!.inputs),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesCacheInputs",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: gatewayPluginDatakitConfigNodesCacheOutputsToHclTerraform(struct!.outputs),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesCacheOutputs",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassOnError = this._bypassOnError;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassOnError = undefined;
      this._input = undefined;
      this._inputs.internalValue = undefined;
      this._name = undefined;
      this._output = undefined;
      this._outputs.internalValue = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassOnError = value.bypassOnError;
      this._input = value.input;
      this._inputs.internalValue = value.inputs;
      this._name = value.name;
      this._output = value.output;
      this._outputs.internalValue = value.outputs;
      this._ttl = value.ttl;
    }
  }

  // bypass_on_error - computed: false, optional: true, required: false
  private _bypassOnError?: boolean | cdktf.IResolvable; 
  public get bypassOnError() {
    return this.getBooleanAttribute('bypass_on_error');
  }
  public set bypassOnError(value: boolean | cdktf.IResolvable) {
    this._bypassOnError = value;
  }
  public resetBypassOnError() {
    this._bypassOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassOnErrorInput() {
    return this._bypassOnError;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // inputs - computed: true, optional: true, required: false
  private _inputs = new GatewayPluginDatakitConfigNodesCacheInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: GatewayPluginDatakitConfigNodesCacheInputs) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // outputs - computed: true, optional: true, required: false
  private _outputs = new GatewayPluginDatakitConfigNodesCacheOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: GatewayPluginDatakitConfigNodesCacheOutputs) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface GatewayPluginDatakitConfigNodesCallInputs {
  /**
  * HTTP request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#body GatewayPluginDatakit#body}
  */
  readonly body?: string;
  /**
  * HTTP request headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#headers GatewayPluginDatakit#headers}
  */
  readonly headers?: string;
  /**
  * HTTP request query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#query GatewayPluginDatakit#query}
  */
  readonly query?: string;
}

export function gatewayPluginDatakitConfigNodesCallInputsToTerraform(struct?: GatewayPluginDatakitConfigNodesCallInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.stringToTerraform(struct!.headers),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function gatewayPluginDatakitConfigNodesCallInputsToHclTerraform(struct?: GatewayPluginDatakitConfigNodesCallInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesCallInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesCallInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesCallInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers = value.headers;
      this._query = value.query;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface GatewayPluginDatakitConfigNodesCallOutputs {
  /**
  * HTTP response body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#body GatewayPluginDatakit#body}
  */
  readonly body?: string;
  /**
  * HTTP response headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#headers GatewayPluginDatakit#headers}
  */
  readonly headers?: string;
  /**
  * HTTP response status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#status GatewayPluginDatakit#status}
  */
  readonly status?: string;
}

export function gatewayPluginDatakitConfigNodesCallOutputsToTerraform(struct?: GatewayPluginDatakitConfigNodesCallOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.stringToTerraform(struct!.headers),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function gatewayPluginDatakitConfigNodesCallOutputsToHclTerraform(struct?: GatewayPluginDatakitConfigNodesCallOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesCallOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesCallOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesCallOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers = value.headers;
      this._status = value.status;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface GatewayPluginDatakitConfigNodesCall {
  /**
  * call node input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#input GatewayPluginDatakit#input}
  */
  readonly input?: string;
  /**
  * call node inputs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#inputs GatewayPluginDatakit#inputs}
  */
  readonly inputs?: GatewayPluginDatakitConfigNodesCallInputs;
  /**
  * A string representing an HTTP method, such as GET, POST, PUT, or DELETE. The string must contain only uppercase letters. Default: "GET"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#method GatewayPluginDatakit#method}
  */
  readonly method?: string;
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * call node output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#output GatewayPluginDatakit#output}
  */
  readonly output?: string;
  /**
  * call node outputs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#outputs GatewayPluginDatakit#outputs}
  */
  readonly outputs?: GatewayPluginDatakitConfigNodesCallOutputs;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ssl_server_name GatewayPluginDatakit#ssl_server_name}
  */
  readonly sslServerName?: string;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#timeout GatewayPluginDatakit#timeout}
  */
  readonly timeout?: number;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#url GatewayPluginDatakit#url}
  */
  readonly url?: string;
}

export function gatewayPluginDatakitConfigNodesCallToTerraform(struct?: GatewayPluginDatakitConfigNodesCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    inputs: gatewayPluginDatakitConfigNodesCallInputsToTerraform(struct!.inputs),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
    outputs: gatewayPluginDatakitConfigNodesCallOutputsToTerraform(struct!.outputs),
    ssl_server_name: cdktf.stringToTerraform(struct!.sslServerName),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gatewayPluginDatakitConfigNodesCallToHclTerraform(struct?: GatewayPluginDatakitConfigNodesCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: gatewayPluginDatakitConfigNodesCallInputsToHclTerraform(struct!.inputs),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesCallInputs",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: gatewayPluginDatakitConfigNodesCallOutputsToHclTerraform(struct!.outputs),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesCallOutputs",
    },
    ssl_server_name: {
      value: cdktf.stringToHclTerraform(struct!.sslServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._sslServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerName = this._sslServerName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._inputs.internalValue = undefined;
      this._method = undefined;
      this._name = undefined;
      this._output = undefined;
      this._outputs.internalValue = undefined;
      this._sslServerName = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._inputs.internalValue = value.inputs;
      this._method = value.method;
      this._name = value.name;
      this._output = value.output;
      this._outputs.internalValue = value.outputs;
      this._sslServerName = value.sslServerName;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // inputs - computed: true, optional: true, required: false
  private _inputs = new GatewayPluginDatakitConfigNodesCallInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: GatewayPluginDatakitConfigNodesCallInputs) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // outputs - computed: true, optional: true, required: false
  private _outputs = new GatewayPluginDatakitConfigNodesCallOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: GatewayPluginDatakitConfigNodesCallOutputs) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // ssl_server_name - computed: false, optional: true, required: false
  private _sslServerName?: string; 
  public get sslServerName() {
    return this.getStringAttribute('ssl_server_name');
  }
  public set sslServerName(value: string) {
    this._sslServerName = value;
  }
  public resetSslServerName() {
    this._sslServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerNameInput() {
    return this._sslServerName;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GatewayPluginDatakitConfigNodesExitInputs {
  /**
  * HTTP response body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#body GatewayPluginDatakit#body}
  */
  readonly body?: string;
  /**
  * HTTP response headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#headers GatewayPluginDatakit#headers}
  */
  readonly headers?: string;
}

export function gatewayPluginDatakitConfigNodesExitInputsToTerraform(struct?: GatewayPluginDatakitConfigNodesExitInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.stringToTerraform(struct!.headers),
  }
}


export function gatewayPluginDatakitConfigNodesExitInputsToHclTerraform(struct?: GatewayPluginDatakitConfigNodesExitInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesExitInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesExitInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesExitInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._headers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._headers = value.headers;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }
}
export interface GatewayPluginDatakitConfigNodesExit {
  /**
  * exit node input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#input GatewayPluginDatakit#input}
  */
  readonly input?: string;
  /**
  * exit node inputs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#inputs GatewayPluginDatakit#inputs}
  */
  readonly inputs?: GatewayPluginDatakitConfigNodesExitInputs;
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * HTTP status code. Default: 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#status GatewayPluginDatakit#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#warn_headers_sent GatewayPluginDatakit#warn_headers_sent}
  */
  readonly warnHeadersSent?: boolean | cdktf.IResolvable;
}

export function gatewayPluginDatakitConfigNodesExitToTerraform(struct?: GatewayPluginDatakitConfigNodesExit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    inputs: gatewayPluginDatakitConfigNodesExitInputsToTerraform(struct!.inputs),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.numberToTerraform(struct!.status),
    warn_headers_sent: cdktf.booleanToTerraform(struct!.warnHeadersSent),
  }
}


export function gatewayPluginDatakitConfigNodesExitToHclTerraform(struct?: GatewayPluginDatakitConfigNodesExit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: gatewayPluginDatakitConfigNodesExitInputsToHclTerraform(struct!.inputs),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesExitInputs",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warn_headers_sent: {
      value: cdktf.booleanToHclTerraform(struct!.warnHeadersSent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesExitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesExit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._warnHeadersSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnHeadersSent = this._warnHeadersSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesExit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._inputs.internalValue = undefined;
      this._name = undefined;
      this._status = undefined;
      this._warnHeadersSent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._inputs.internalValue = value.inputs;
      this._name = value.name;
      this._status = value.status;
      this._warnHeadersSent = value.warnHeadersSent;
    }
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // inputs - computed: true, optional: true, required: false
  private _inputs = new GatewayPluginDatakitConfigNodesExitInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: GatewayPluginDatakitConfigNodesExitInputs) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
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

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // warn_headers_sent - computed: false, optional: true, required: false
  private _warnHeadersSent?: boolean | cdktf.IResolvable; 
  public get warnHeadersSent() {
    return this.getBooleanAttribute('warn_headers_sent');
  }
  public set warnHeadersSent(value: boolean | cdktf.IResolvable) {
    this._warnHeadersSent = value;
  }
  public resetWarnHeadersSent() {
    this._warnHeadersSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnHeadersSentInput() {
    return this._warnHeadersSent;
  }
}
export interface GatewayPluginDatakitConfigNodesJq {
  /**
  * filter input(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#input GatewayPluginDatakit#input}
  */
  readonly input?: string;
  /**
  * filter input(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#inputs GatewayPluginDatakit#inputs}
  */
  readonly inputs?: { [key: string]: string };
  /**
  * The jq filter text. Refer to https://jqlang.org/manual/ for full documentation. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#jq GatewayPluginDatakit#jq}
  */
  readonly jq?: string;
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * filter output(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#output GatewayPluginDatakit#output}
  */
  readonly output?: string;
}

export function gatewayPluginDatakitConfigNodesJqToTerraform(struct?: GatewayPluginDatakitConfigNodesJq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    inputs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inputs),
    jq: cdktf.stringToTerraform(struct!.jq),
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
  }
}


export function gatewayPluginDatakitConfigNodesJqToHclTerraform(struct?: GatewayPluginDatakitConfigNodesJq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inputs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jq: {
      value: cdktf.stringToHclTerraform(struct!.jq),
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesJqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesJq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._jq !== undefined) {
      hasAnyValues = true;
      internalValueResult.jq = this._jq;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesJq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._inputs = undefined;
      this._jq = undefined;
      this._name = undefined;
      this._output = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._inputs = value.inputs;
      this._jq = value.jq;
      this._name = value.name;
      this._output = value.output;
    }
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: { [key: string]: string }; 
  public get inputs() {
    return this.getStringMapAttribute('inputs');
  }
  public set inputs(value: { [key: string]: string }) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // jq - computed: true, optional: true, required: false
  private _jq?: string; 
  public get jq() {
    return this.getStringAttribute('jq');
  }
  public set jq(value: string) {
    this._jq = value;
  }
  public resetJq() {
    this._jq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqInput() {
    return this._jq;
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }
}
export interface GatewayPluginDatakitConfigNodesProperty {
  /**
  * The expected mime type of the property value. When set to `application/json`, SET operations will JSON-encode input data before writing it, and GET operations will JSON-decode output data after reading it. Otherwise, this setting has no effect. must be one of ["application/json", "application/octet-stream", "text/plain"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#content_type GatewayPluginDatakit#content_type}
  */
  readonly contentType?: string;
  /**
  * Property input source. When connected, this node operates in SET mode and writes input data to the property. Otherwise, the node operates in GET mode and reads the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#input GatewayPluginDatakit#input}
  */
  readonly input?: string;
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * Property output. This can be connected regardless of whether the node is operating in GET mode or SET mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#output GatewayPluginDatakit#output}
  */
  readonly output?: string;
  /**
  * The property name to get/set. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#property GatewayPluginDatakit#property}
  */
  readonly property?: string;
}

export function gatewayPluginDatakitConfigNodesPropertyToTerraform(struct?: GatewayPluginDatakitConfigNodesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    input: cdktf.stringToTerraform(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function gatewayPluginDatakitConfigNodesPropertyToHclTerraform(struct?: GatewayPluginDatakitConfigNodesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._input = undefined;
      this._name = undefined;
      this._output = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._input = value.input;
      this._name = value.name;
      this._output = value.output;
      this._property = value.property;
    }
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // property - computed: true, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}
export interface GatewayPluginDatakitConfigNodesStatic {
  /**
  * A label that uniquely identifies the node within the plugin configuration so that it can be used for input/output connections. Must be valid `snake_case` or `kebab-case`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * The entire `.values` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#output GatewayPluginDatakit#output}
  */
  readonly output?: string;
  /**
  * Individual items from `.values`, referenced by key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#outputs GatewayPluginDatakit#outputs}
  */
  readonly outputs?: { [key: string]: string };
  /**
  * An object with string keys and freeform values. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#values GatewayPluginDatakit#values}
  */
  readonly values?: string;
}

export function gatewayPluginDatakitConfigNodesStaticToTerraform(struct?: GatewayPluginDatakitConfigNodesStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    output: cdktf.stringToTerraform(struct!.output),
    outputs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.outputs),
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function gatewayPluginDatakitConfigNodesStaticToHclTerraform(struct?: GatewayPluginDatakitConfigNodesStatic | cdktf.IResolvable): any {
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.outputs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigNodesStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._outputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodesStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._output = undefined;
      this._outputs = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._output = value.output;
      this._outputs = value.outputs;
      this._values = value.values;
    }
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

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: { [key: string]: string }; 
  public get outputs() {
    return this.getStringMapAttribute('outputs');
  }
  public set outputs(value: { [key: string]: string }) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GatewayPluginDatakitConfigNodes {
  /**
  * Execute different nodes based on some input condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#branch GatewayPluginDatakit#branch}
  */
  readonly branch?: GatewayPluginDatakitConfigNodesBranch;
  /**
  * Fetch cached data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#cache GatewayPluginDatakit#cache}
  */
  readonly cache?: GatewayPluginDatakitConfigNodesCache;
  /**
  * Make an external HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#call GatewayPluginDatakit#call}
  */
  readonly call?: GatewayPluginDatakitConfigNodesCall;
  /**
  * Terminate the request and send a response to the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#exit GatewayPluginDatakit#exit}
  */
  readonly exit?: GatewayPluginDatakitConfigNodesExit;
  /**
  * Process data using `jq` syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#jq GatewayPluginDatakit#jq}
  */
  readonly jq?: GatewayPluginDatakitConfigNodesJq;
  /**
  * Get or set a property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#property GatewayPluginDatakit#property}
  */
  readonly property?: GatewayPluginDatakitConfigNodesProperty;
  /**
  * Produce reusable outputs from statically-configured values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#static GatewayPluginDatakit#static}
  */
  readonly static?: GatewayPluginDatakitConfigNodesStatic;
}

export function gatewayPluginDatakitConfigNodesToTerraform(struct?: GatewayPluginDatakitConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: gatewayPluginDatakitConfigNodesBranchToTerraform(struct!.branch),
    cache: gatewayPluginDatakitConfigNodesCacheToTerraform(struct!.cache),
    call: gatewayPluginDatakitConfigNodesCallToTerraform(struct!.call),
    exit: gatewayPluginDatakitConfigNodesExitToTerraform(struct!.exit),
    jq: gatewayPluginDatakitConfigNodesJqToTerraform(struct!.jq),
    property: gatewayPluginDatakitConfigNodesPropertyToTerraform(struct!.property),
    static: gatewayPluginDatakitConfigNodesStaticToTerraform(struct!.static),
  }
}


export function gatewayPluginDatakitConfigNodesToHclTerraform(struct?: GatewayPluginDatakitConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: gatewayPluginDatakitConfigNodesBranchToHclTerraform(struct!.branch),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesBranch",
    },
    cache: {
      value: gatewayPluginDatakitConfigNodesCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesCache",
    },
    call: {
      value: gatewayPluginDatakitConfigNodesCallToHclTerraform(struct!.call),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesCall",
    },
    exit: {
      value: gatewayPluginDatakitConfigNodesExitToHclTerraform(struct!.exit),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesExit",
    },
    jq: {
      value: gatewayPluginDatakitConfigNodesJqToHclTerraform(struct!.jq),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesJq",
    },
    property: {
      value: gatewayPluginDatakitConfigNodesPropertyToHclTerraform(struct!.property),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesProperty",
    },
    static: {
      value: gatewayPluginDatakitConfigNodesStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigNodesStatic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginDatakitConfigNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch?.internalValue;
    }
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._call?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.call = this._call?.internalValue;
    }
    if (this._exit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exit = this._exit?.internalValue;
    }
    if (this._jq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jq = this._jq?.internalValue;
    }
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch.internalValue = undefined;
      this._cache.internalValue = undefined;
      this._call.internalValue = undefined;
      this._exit.internalValue = undefined;
      this._jq.internalValue = undefined;
      this._property.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch.internalValue = value.branch;
      this._cache.internalValue = value.cache;
      this._call.internalValue = value.call;
      this._exit.internalValue = value.exit;
      this._jq.internalValue = value.jq;
      this._property.internalValue = value.property;
      this._static.internalValue = value.static;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch = new GatewayPluginDatakitConfigNodesBranchOutputReference(this, "branch");
  public get branch() {
    return this._branch;
  }
  public putBranch(value: GatewayPluginDatakitConfigNodesBranch) {
    this._branch.internalValue = value;
  }
  public resetBranch() {
    this._branch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch.internalValue;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new GatewayPluginDatakitConfigNodesCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: GatewayPluginDatakitConfigNodesCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // call - computed: false, optional: true, required: false
  private _call = new GatewayPluginDatakitConfigNodesCallOutputReference(this, "call");
  public get call() {
    return this._call;
  }
  public putCall(value: GatewayPluginDatakitConfigNodesCall) {
    this._call.internalValue = value;
  }
  public resetCall() {
    this._call.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call.internalValue;
  }

  // exit - computed: false, optional: true, required: false
  private _exit = new GatewayPluginDatakitConfigNodesExitOutputReference(this, "exit");
  public get exit() {
    return this._exit;
  }
  public putExit(value: GatewayPluginDatakitConfigNodesExit) {
    this._exit.internalValue = value;
  }
  public resetExit() {
    this._exit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitInput() {
    return this._exit.internalValue;
  }

  // jq - computed: false, optional: true, required: false
  private _jq = new GatewayPluginDatakitConfigNodesJqOutputReference(this, "jq");
  public get jq() {
    return this._jq;
  }
  public putJq(value: GatewayPluginDatakitConfigNodesJq) {
    this._jq.internalValue = value;
  }
  public resetJq() {
    this._jq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqInput() {
    return this._jq.internalValue;
  }

  // property - computed: false, optional: true, required: false
  private _property = new GatewayPluginDatakitConfigNodesPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }
  public putProperty(value: GatewayPluginDatakitConfigNodesProperty) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new GatewayPluginDatakitConfigNodesStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: GatewayPluginDatakitConfigNodesStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}

export class GatewayPluginDatakitConfigNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginDatakitConfigNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginDatakitConfigNodesOutputReference {
    return new GatewayPluginDatakitConfigNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginDatakitConfigResourcesCacheMemory {
  /**
  * The name of the shared dictionary in which to hold cache entities when the memory strategy is selected. Note that this dictionary currently must be defined manually in the Kong Nginx template. Default: "kong_db_cache"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#dictionary_name GatewayPluginDatakit#dictionary_name}
  */
  readonly dictionaryName?: string;
}

export function gatewayPluginDatakitConfigResourcesCacheMemoryToTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
  }
}


export function gatewayPluginDatakitConfigResourcesCacheMemoryToHclTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.dictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigResourcesCacheMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigResourcesCacheMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryName = this._dictionaryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigResourcesCacheMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dictionaryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dictionaryName = value.dictionaryName;
    }
  }

  // dictionary_name - computed: true, optional: true, required: false
  private _dictionaryName?: string; 
  public get dictionaryName() {
    return this.getStringAttribute('dictionary_name');
  }
  public set dictionaryName(value: string) {
    this._dictionaryName = value;
  }
  public resetDictionaryName() {
    this._dictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryNameInput() {
    return this._dictionaryName;
  }
}
export interface GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ip GatewayPluginDatakit#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#port GatewayPluginDatakit#port}
  */
  readonly port?: number;
}

export function gatewayPluginDatakitConfigResourcesCacheRedisClusterNodesToTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginDatakitConfigResourcesCacheRedisClusterNodesToHclTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigResourcesCacheRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GatewayPluginDatakitConfigResourcesCacheRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginDatakitConfigResourcesCacheRedisClusterNodesOutputReference {
    return new GatewayPluginDatakitConfigResourcesCacheRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#host GatewayPluginDatakit#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#port GatewayPluginDatakit#port}
  */
  readonly port?: number;
}

export function gatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesToTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesToHclTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesOutputReference {
    return new GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginDatakitConfigResourcesCacheRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#cluster_max_redirections GatewayPluginDatakit#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#cluster_nodes GatewayPluginDatakit#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#connect_timeout GatewayPluginDatakit#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#connection_is_proxied GatewayPluginDatakit#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#database GatewayPluginDatakit#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#host GatewayPluginDatakit#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#keepalive_backlog GatewayPluginDatakit#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#keepalive_pool_size GatewayPluginDatakit#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#password GatewayPluginDatakit#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#port GatewayPluginDatakit#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#read_timeout GatewayPluginDatakit#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#send_timeout GatewayPluginDatakit#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#sentinel_master GatewayPluginDatakit#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#sentinel_nodes GatewayPluginDatakit#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#sentinel_password GatewayPluginDatakit#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#sentinel_role GatewayPluginDatakit#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#sentinel_username GatewayPluginDatakit#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#server_name GatewayPluginDatakit#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ssl GatewayPluginDatakit#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#ssl_verify GatewayPluginDatakit#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#username GatewayPluginDatakit#username}
  */
  readonly username?: string;
}

export function gatewayPluginDatakitConfigResourcesCacheRedisToTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginDatakitConfigResourcesCacheRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_is_proxied: cdktf.booleanToTerraform(struct!.connectionIsProxied),
    database: cdktf.numberToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    keepalive_backlog: cdktf.numberToTerraform(struct!.keepaliveBacklog),
    keepalive_pool_size: cdktf.numberToTerraform(struct!.keepalivePoolSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    sentinel_master: cdktf.stringToTerraform(struct!.sentinelMaster),
    sentinel_nodes: cdktf.listMapper(gatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginDatakitConfigResourcesCacheRedisToHclTerraform(struct?: GatewayPluginDatakitConfigResourcesCacheRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_max_redirections: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxRedirections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginDatakitConfigResourcesCacheRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginDatakitConfigResourcesCacheRedisClusterNodesList",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_is_proxied: {
      value: cdktf.booleanToHclTerraform(struct!.connectionIsProxied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_backlog: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sentinel_master: {
      value: cdktf.stringToHclTerraform(struct!.sentinelMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesList",
    },
    sentinel_password: {
      value: cdktf.stringToHclTerraform(struct!.sentinelPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_role: {
      value: cdktf.stringToHclTerraform(struct!.sentinelRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_username: {
      value: cdktf.stringToHclTerraform(struct!.sentinelUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigResourcesCacheRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigResourcesCacheRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMaxRedirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxRedirections = this._clusterMaxRedirections;
    }
    if (this._clusterNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodes = this._clusterNodes?.internalValue;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionIsProxied !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIsProxied = this._connectionIsProxied;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keepaliveBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveBacklog = this._keepaliveBacklog;
    }
    if (this._keepalivePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePoolSize = this._keepalivePoolSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._sentinelMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMaster = this._sentinelMaster;
    }
    if (this._sentinelNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelNodes = this._sentinelNodes?.internalValue;
    }
    if (this._sentinelPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPassword = this._sentinelPassword;
    }
    if (this._sentinelRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelRole = this._sentinelRole;
    }
    if (this._sentinelUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelUsername = this._sentinelUsername;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigResourcesCacheRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = undefined;
      this._clusterNodes.internalValue = undefined;
      this._connectTimeout = undefined;
      this._connectionIsProxied = undefined;
      this._database = undefined;
      this._host = undefined;
      this._keepaliveBacklog = undefined;
      this._keepalivePoolSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._sentinelMaster = undefined;
      this._sentinelNodes.internalValue = undefined;
      this._sentinelPassword = undefined;
      this._sentinelRole = undefined;
      this._sentinelUsername = undefined;
      this._serverName = undefined;
      this._ssl = undefined;
      this._sslVerify = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = value.clusterMaxRedirections;
      this._clusterNodes.internalValue = value.clusterNodes;
      this._connectTimeout = value.connectTimeout;
      this._connectionIsProxied = value.connectionIsProxied;
      this._database = value.database;
      this._host = value.host;
      this._keepaliveBacklog = value.keepaliveBacklog;
      this._keepalivePoolSize = value.keepalivePoolSize;
      this._password = value.password;
      this._port = value.port;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._sentinelMaster = value.sentinelMaster;
      this._sentinelNodes.internalValue = value.sentinelNodes;
      this._sentinelPassword = value.sentinelPassword;
      this._sentinelRole = value.sentinelRole;
      this._sentinelUsername = value.sentinelUsername;
      this._serverName = value.serverName;
      this._ssl = value.ssl;
      this._sslVerify = value.sslVerify;
      this._username = value.username;
    }
  }

  // cluster_max_redirections - computed: true, optional: true, required: false
  private _clusterMaxRedirections?: number; 
  public get clusterMaxRedirections() {
    return this.getNumberAttribute('cluster_max_redirections');
  }
  public set clusterMaxRedirections(value: number) {
    this._clusterMaxRedirections = value;
  }
  public resetClusterMaxRedirections() {
    this._clusterMaxRedirections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxRedirectionsInput() {
    return this._clusterMaxRedirections;
  }

  // cluster_nodes - computed: true, optional: true, required: false
  private _clusterNodes = new GatewayPluginDatakitConfigResourcesCacheRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginDatakitConfigResourcesCacheRedisClusterNodes[] | cdktf.IResolvable) {
    this._clusterNodes.internalValue = value;
  }
  public resetClusterNodes() {
    this._clusterNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodesInput() {
    return this._clusterNodes.internalValue;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_is_proxied - computed: true, optional: true, required: false
  private _connectionIsProxied?: boolean | cdktf.IResolvable; 
  public get connectionIsProxied() {
    return this.getBooleanAttribute('connection_is_proxied');
  }
  public set connectionIsProxied(value: boolean | cdktf.IResolvable) {
    this._connectionIsProxied = value;
  }
  public resetConnectionIsProxied() {
    this._connectionIsProxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIsProxiedInput() {
    return this._connectionIsProxied;
  }

  // database - computed: true, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
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

  // keepalive_backlog - computed: true, optional: true, required: false
  private _keepaliveBacklog?: number; 
  public get keepaliveBacklog() {
    return this.getNumberAttribute('keepalive_backlog');
  }
  public set keepaliveBacklog(value: number) {
    this._keepaliveBacklog = value;
  }
  public resetKeepaliveBacklog() {
    this._keepaliveBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveBacklogInput() {
    return this._keepaliveBacklog;
  }

  // keepalive_pool_size - computed: true, optional: true, required: false
  private _keepalivePoolSize?: number; 
  public get keepalivePoolSize() {
    return this.getNumberAttribute('keepalive_pool_size');
  }
  public set keepalivePoolSize(value: number) {
    this._keepalivePoolSize = value;
  }
  public resetKeepalivePoolSize() {
    this._keepalivePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePoolSizeInput() {
    return this._keepalivePoolSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // sentinel_master - computed: true, optional: true, required: false
  private _sentinelMaster?: string; 
  public get sentinelMaster() {
    return this.getStringAttribute('sentinel_master');
  }
  public set sentinelMaster(value: string) {
    this._sentinelMaster = value;
  }
  public resetSentinelMaster() {
    this._sentinelMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMasterInput() {
    return this._sentinelMaster;
  }

  // sentinel_nodes - computed: true, optional: true, required: false
  private _sentinelNodes = new GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginDatakitConfigResourcesCacheRedisSentinelNodes[] | cdktf.IResolvable) {
    this._sentinelNodes.internalValue = value;
  }
  public resetSentinelNodes() {
    this._sentinelNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelNodesInput() {
    return this._sentinelNodes.internalValue;
  }

  // sentinel_password - computed: true, optional: true, required: false
  private _sentinelPassword?: string; 
  public get sentinelPassword() {
    return this.getStringAttribute('sentinel_password');
  }
  public set sentinelPassword(value: string) {
    this._sentinelPassword = value;
  }
  public resetSentinelPassword() {
    this._sentinelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPasswordInput() {
    return this._sentinelPassword;
  }

  // sentinel_role - computed: true, optional: true, required: false
  private _sentinelRole?: string; 
  public get sentinelRole() {
    return this.getStringAttribute('sentinel_role');
  }
  public set sentinelRole(value: string) {
    this._sentinelRole = value;
  }
  public resetSentinelRole() {
    this._sentinelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelRoleInput() {
    return this._sentinelRole;
  }

  // sentinel_username - computed: true, optional: true, required: false
  private _sentinelUsername?: string; 
  public get sentinelUsername() {
    return this.getStringAttribute('sentinel_username');
  }
  public set sentinelUsername(value: string) {
    this._sentinelUsername = value;
  }
  public resetSentinelUsername() {
    this._sentinelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelUsernameInput() {
    return this._sentinelUsername;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginDatakitConfigResourcesCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#memory GatewayPluginDatakit#memory}
  */
  readonly memory?: GatewayPluginDatakitConfigResourcesCacheMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#redis GatewayPluginDatakit#redis}
  */
  readonly redis?: GatewayPluginDatakitConfigResourcesCacheRedis;
  /**
  * The backing data store in which to hold cache entities. Accepted values are: `memory` and `redis`. must be one of ["memory", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#strategy GatewayPluginDatakit#strategy}
  */
  readonly strategy?: string;
}

export function gatewayPluginDatakitConfigResourcesCacheToTerraform(struct?: GatewayPluginDatakitConfigResourcesCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory: gatewayPluginDatakitConfigResourcesCacheMemoryToTerraform(struct!.memory),
    redis: gatewayPluginDatakitConfigResourcesCacheRedisToTerraform(struct!.redis),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function gatewayPluginDatakitConfigResourcesCacheToHclTerraform(struct?: GatewayPluginDatakitConfigResourcesCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory: {
      value: gatewayPluginDatakitConfigResourcesCacheMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigResourcesCacheMemory",
    },
    redis: {
      value: gatewayPluginDatakitConfigResourcesCacheRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigResourcesCacheRedis",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigResourcesCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigResourcesCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigResourcesCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memory.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memory.internalValue = value.memory;
      this._redis.internalValue = value.redis;
      this._strategy = value.strategy;
    }
  }

  // memory - computed: true, optional: true, required: false
  private _memory = new GatewayPluginDatakitConfigResourcesCacheMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: GatewayPluginDatakitConfigResourcesCacheMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginDatakitConfigResourcesCacheRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginDatakitConfigResourcesCacheRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface GatewayPluginDatakitConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#cache GatewayPluginDatakit#cache}
  */
  readonly cache?: GatewayPluginDatakitConfigResourcesCache;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#vault GatewayPluginDatakit#vault}
  */
  readonly vault?: { [key: string]: string };
}

export function gatewayPluginDatakitConfigResourcesToTerraform(struct?: GatewayPluginDatakitConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: gatewayPluginDatakitConfigResourcesCacheToTerraform(struct!.cache),
    vault: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vault),
  }
}


export function gatewayPluginDatakitConfigResourcesToHclTerraform(struct?: GatewayPluginDatakitConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: gatewayPluginDatakitConfigResourcesCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigResourcesCache",
    },
    vault: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vault),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._vault !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache.internalValue = undefined;
      this._vault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache.internalValue = value.cache;
      this._vault = value.vault;
    }
  }

  // cache - computed: true, optional: true, required: false
  private _cache = new GatewayPluginDatakitConfigResourcesCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: GatewayPluginDatakitConfigResourcesCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // vault - computed: true, optional: true, required: false
  private _vault?: { [key: string]: string }; 
  public get vault() {
    return this.getStringMapAttribute('vault');
  }
  public set vault(value: { [key: string]: string }) {
    this._vault = value;
  }
  public resetVault() {
    this._vault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }
}
export interface GatewayPluginDatakitConfigA {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#debug GatewayPluginDatakit#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#nodes GatewayPluginDatakit#nodes}
  */
  readonly nodes: GatewayPluginDatakitConfigNodes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#resources GatewayPluginDatakit#resources}
  */
  readonly resources?: GatewayPluginDatakitConfigResources;
}

export function gatewayPluginDatakitConfigAToTerraform(struct?: GatewayPluginDatakitConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.booleanToTerraform(struct!.debug),
    nodes: cdktf.listMapper(gatewayPluginDatakitConfigNodesToTerraform, false)(struct!.nodes),
    resources: gatewayPluginDatakitConfigResourcesToTerraform(struct!.resources),
  }
}


export function gatewayPluginDatakitConfigAToHclTerraform(struct?: GatewayPluginDatakitConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nodes: {
      value: cdktf.listMapperHcl(gatewayPluginDatakitConfigNodesToHclTerraform, false)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginDatakitConfigNodesList",
    },
    resources: {
      value: gatewayPluginDatakitConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginDatakitConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._nodes.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._nodes.internalValue = value.nodes;
      this._resources.internalValue = value.resources;
    }
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new GatewayPluginDatakitConfigNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: GatewayPluginDatakitConfigNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new GatewayPluginDatakitConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: GatewayPluginDatakitConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface GatewayPluginDatakitConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#id GatewayPluginDatakit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginDatakitConsumerToTerraform(struct?: GatewayPluginDatakitConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginDatakitConsumerToHclTerraform(struct?: GatewayPluginDatakitConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginDatakitConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#id GatewayPluginDatakit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginDatakitConsumerGroupToTerraform(struct?: GatewayPluginDatakitConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginDatakitConsumerGroupToHclTerraform(struct?: GatewayPluginDatakitConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginDatakitOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#access GatewayPluginDatakit#access}
  */
  readonly access?: string[];
}

export function gatewayPluginDatakitOrderingAfterToTerraform(struct?: GatewayPluginDatakitOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginDatakitOrderingAfterToHclTerraform(struct?: GatewayPluginDatakitOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginDatakitOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#access GatewayPluginDatakit#access}
  */
  readonly access?: string[];
}

export function gatewayPluginDatakitOrderingBeforeToTerraform(struct?: GatewayPluginDatakitOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginDatakitOrderingBeforeToHclTerraform(struct?: GatewayPluginDatakitOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginDatakitOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#after GatewayPluginDatakit#after}
  */
  readonly after?: GatewayPluginDatakitOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#before GatewayPluginDatakit#before}
  */
  readonly before?: GatewayPluginDatakitOrderingBefore;
}

export function gatewayPluginDatakitOrderingToTerraform(struct?: GatewayPluginDatakitOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginDatakitOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginDatakitOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginDatakitOrderingToHclTerraform(struct?: GatewayPluginDatakitOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginDatakitOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitOrderingAfter",
    },
    before: {
      value: gatewayPluginDatakitOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginDatakitOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginDatakitOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginDatakitOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginDatakitOrderingAfter) {
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
  private _before = new GatewayPluginDatakitOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginDatakitOrderingBefore) {
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
export interface GatewayPluginDatakitPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#id GatewayPluginDatakit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#name GatewayPluginDatakit#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#path GatewayPluginDatakit#path}
  */
  readonly path?: string;
}

export function gatewayPluginDatakitPartialsToTerraform(struct?: GatewayPluginDatakitPartials | cdktf.IResolvable): any {
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


export function gatewayPluginDatakitPartialsToHclTerraform(struct?: GatewayPluginDatakitPartials | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginDatakitPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginDatakitPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginDatakitPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginDatakitPartialsOutputReference {
    return new GatewayPluginDatakitPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginDatakitRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#id GatewayPluginDatakit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginDatakitRouteToTerraform(struct?: GatewayPluginDatakitRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginDatakitRouteToHclTerraform(struct?: GatewayPluginDatakitRoute | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginDatakitService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#id GatewayPluginDatakit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginDatakitServiceToTerraform(struct?: GatewayPluginDatakitService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginDatakitServiceToHclTerraform(struct?: GatewayPluginDatakitService | cdktf.IResolvable): any {
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

export class GatewayPluginDatakitServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginDatakitService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginDatakitService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit konnect_gateway_plugin_datakit}
*/
export class GatewayPluginDatakit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_datakit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginDatakit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginDatakit to import
  * @param importFromId The id of the existing GatewayPluginDatakit that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginDatakit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_datakit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_datakit konnect_gateway_plugin_datakit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginDatakitConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginDatakitConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_datakit',
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
    this._consumerGroup.internalValue = config.consumerGroup;
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginDatakitConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginDatakitConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginDatakitConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginDatakitConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // consumer_group - computed: true, optional: true, required: false
  private _consumerGroup = new GatewayPluginDatakitConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginDatakitConsumerGroup) {
    this._consumerGroup.internalValue = value;
  }
  public resetConsumerGroup() {
    this._consumerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup.internalValue;
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
  private _ordering = new GatewayPluginDatakitOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginDatakitOrdering) {
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
  private _partials = new GatewayPluginDatakitPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginDatakitPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginDatakitRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginDatakitRoute) {
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
  private _service = new GatewayPluginDatakitServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginDatakitService) {
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
      config: gatewayPluginDatakitConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginDatakitConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginDatakitConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginDatakitOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginDatakitPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginDatakitRouteToTerraform(this._route.internalValue),
      service: gatewayPluginDatakitServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginDatakitConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginDatakitConfigA",
      },
      consumer: {
        value: gatewayPluginDatakitConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginDatakitConsumer",
      },
      consumer_group: {
        value: gatewayPluginDatakitConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginDatakitConsumerGroup",
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
        value: gatewayPluginDatakitOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginDatakitOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginDatakitPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginDatakitPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginDatakitRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginDatakitRoute",
      },
      service: {
        value: gatewayPluginDatakitServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginDatakitService",
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
