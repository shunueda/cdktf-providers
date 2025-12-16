// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiMcpProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#config GatewayPluginAiMcpProxy#config}
  */
  readonly config: GatewayPluginAiMcpProxyConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#control_plane_id GatewayPluginAiMcpProxy#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#created_at GatewayPluginAiMcpProxy#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#enabled GatewayPluginAiMcpProxy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#id GatewayPluginAiMcpProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#instance_name GatewayPluginAiMcpProxy#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#ordering GatewayPluginAiMcpProxy#ordering}
  */
  readonly ordering?: GatewayPluginAiMcpProxyOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#partials GatewayPluginAiMcpProxy#partials}
  */
  readonly partials?: GatewayPluginAiMcpProxyPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#protocols GatewayPluginAiMcpProxy#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#route GatewayPluginAiMcpProxy#route}
  */
  readonly route?: GatewayPluginAiMcpProxyRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#service GatewayPluginAiMcpProxy#service}
  */
  readonly service?: GatewayPluginAiMcpProxyService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#tags GatewayPluginAiMcpProxy#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#updated_at GatewayPluginAiMcpProxy#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiMcpProxyConfigLogging {
  /**
  * If enabled, will log the request and response body into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#log_payloads GatewayPluginAiMcpProxy#log_payloads}
  */
  readonly logPayloads?: boolean | cdktf.IResolvable;
  /**
  * If enabled, will add mcp metrics into the Kong log plugin(s) output. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#log_statistics GatewayPluginAiMcpProxy#log_statistics}
  */
  readonly logStatistics?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAiMcpProxyConfigLoggingToTerraform(struct?: GatewayPluginAiMcpProxyConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_payloads: cdktf.booleanToTerraform(struct!.logPayloads),
    log_statistics: cdktf.booleanToTerraform(struct!.logStatistics),
  }
}


export function gatewayPluginAiMcpProxyConfigLoggingToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_payloads: {
      value: cdktf.booleanToHclTerraform(struct!.logPayloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_statistics: {
      value: cdktf.booleanToHclTerraform(struct!.logStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpProxyConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logPayloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPayloads = this._logPayloads;
    }
    if (this._logStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatistics = this._logStatistics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logPayloads = undefined;
      this._logStatistics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logPayloads = value.logPayloads;
      this._logStatistics = value.logStatistics;
    }
  }

  // log_payloads - computed: true, optional: true, required: false
  private _logPayloads?: boolean | cdktf.IResolvable; 
  public get logPayloads() {
    return this.getBooleanAttribute('log_payloads');
  }
  public set logPayloads(value: boolean | cdktf.IResolvable) {
    this._logPayloads = value;
  }
  public resetLogPayloads() {
    this._logPayloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPayloadsInput() {
    return this._logPayloads;
  }

  // log_statistics - computed: true, optional: true, required: false
  private _logStatistics?: boolean | cdktf.IResolvable; 
  public get logStatistics() {
    return this.getBooleanAttribute('log_statistics');
  }
  public set logStatistics(value: boolean | cdktf.IResolvable) {
    this._logStatistics = value;
  }
  public resetLogStatistics() {
    this._logStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatisticsInput() {
    return this._logStatistics;
  }
}
export interface GatewayPluginAiMcpProxyConfigServer {
  /**
  * Whether to forward the client request headers to the upstream server when calling the tools. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#forward_client_headers GatewayPluginAiMcpProxy#forward_client_headers}
  */
  readonly forwardClientHeaders?: boolean | cdktf.IResolvable;
  /**
  * The tag of the MCP server. This is used to filter the exported MCP tools. The field should contain exactly one tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#tag GatewayPluginAiMcpProxy#tag}
  */
  readonly tag?: string;
  /**
  * The timeout for calling the tools in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#timeout GatewayPluginAiMcpProxy#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginAiMcpProxyConfigServerToTerraform(struct?: GatewayPluginAiMcpProxyConfigServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_client_headers: cdktf.booleanToTerraform(struct!.forwardClientHeaders),
    tag: cdktf.stringToTerraform(struct!.tag),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function gatewayPluginAiMcpProxyConfigServerToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_client_headers: {
      value: cdktf.booleanToHclTerraform(struct!.forwardClientHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpProxyConfigServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyConfigServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardClientHeaders = this._forwardClientHeaders;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardClientHeaders = undefined;
      this._tag = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardClientHeaders = value.forwardClientHeaders;
      this._tag = value.tag;
      this._timeout = value.timeout;
    }
  }

  // forward_client_headers - computed: true, optional: true, required: false
  private _forwardClientHeaders?: boolean | cdktf.IResolvable; 
  public get forwardClientHeaders() {
    return this.getBooleanAttribute('forward_client_headers');
  }
  public set forwardClientHeaders(value: boolean | cdktf.IResolvable) {
    this._forwardClientHeaders = value;
  }
  public resetForwardClientHeaders() {
    this._forwardClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardClientHeadersInput() {
    return this._forwardClientHeaders;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // timeout - computed: true, optional: true, required: false
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
}
export interface GatewayPluginAiMcpProxyConfigToolsAnnotations {
  /**
  * If true, the tool may perform destructive updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#destructive_hint GatewayPluginAiMcpProxy#destructive_hint}
  */
  readonly destructiveHint?: boolean | cdktf.IResolvable;
  /**
  * If true, repeated calls with same args have no additional effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#idempotent_hint GatewayPluginAiMcpProxy#idempotent_hint}
  */
  readonly idempotentHint?: boolean | cdktf.IResolvable;
  /**
  * If true, tool interacts with external entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#open_world_hint GatewayPluginAiMcpProxy#open_world_hint}
  */
  readonly openWorldHint?: boolean | cdktf.IResolvable;
  /**
  * If true, the tool does not modify its environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#read_only_hint GatewayPluginAiMcpProxy#read_only_hint}
  */
  readonly readOnlyHint?: boolean | cdktf.IResolvable;
  /**
  * Human-readable title for the tool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#title GatewayPluginAiMcpProxy#title}
  */
  readonly title?: string;
}

export function gatewayPluginAiMcpProxyConfigToolsAnnotationsToTerraform(struct?: GatewayPluginAiMcpProxyConfigToolsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destructive_hint: cdktf.booleanToTerraform(struct!.destructiveHint),
    idempotent_hint: cdktf.booleanToTerraform(struct!.idempotentHint),
    open_world_hint: cdktf.booleanToTerraform(struct!.openWorldHint),
    read_only_hint: cdktf.booleanToTerraform(struct!.readOnlyHint),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function gatewayPluginAiMcpProxyConfigToolsAnnotationsToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigToolsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destructive_hint: {
      value: cdktf.booleanToHclTerraform(struct!.destructiveHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idempotent_hint: {
      value: cdktf.booleanToHclTerraform(struct!.idempotentHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_world_hint: {
      value: cdktf.booleanToHclTerraform(struct!.openWorldHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_hint: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyHint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GatewayPluginAiMcpProxyConfigToolsAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyConfigToolsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destructiveHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.destructiveHint = this._destructiveHint;
    }
    if (this._idempotentHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.idempotentHint = this._idempotentHint;
    }
    if (this._openWorldHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.openWorldHint = this._openWorldHint;
    }
    if (this._readOnlyHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyHint = this._readOnlyHint;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigToolsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destructiveHint = undefined;
      this._idempotentHint = undefined;
      this._openWorldHint = undefined;
      this._readOnlyHint = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destructiveHint = value.destructiveHint;
      this._idempotentHint = value.idempotentHint;
      this._openWorldHint = value.openWorldHint;
      this._readOnlyHint = value.readOnlyHint;
      this._title = value.title;
    }
  }

  // destructive_hint - computed: true, optional: true, required: false
  private _destructiveHint?: boolean | cdktf.IResolvable; 
  public get destructiveHint() {
    return this.getBooleanAttribute('destructive_hint');
  }
  public set destructiveHint(value: boolean | cdktf.IResolvable) {
    this._destructiveHint = value;
  }
  public resetDestructiveHint() {
    this._destructiveHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destructiveHintInput() {
    return this._destructiveHint;
  }

  // idempotent_hint - computed: true, optional: true, required: false
  private _idempotentHint?: boolean | cdktf.IResolvable; 
  public get idempotentHint() {
    return this.getBooleanAttribute('idempotent_hint');
  }
  public set idempotentHint(value: boolean | cdktf.IResolvable) {
    this._idempotentHint = value;
  }
  public resetIdempotentHint() {
    this._idempotentHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotentHintInput() {
    return this._idempotentHint;
  }

  // open_world_hint - computed: true, optional: true, required: false
  private _openWorldHint?: boolean | cdktf.IResolvable; 
  public get openWorldHint() {
    return this.getBooleanAttribute('open_world_hint');
  }
  public set openWorldHint(value: boolean | cdktf.IResolvable) {
    this._openWorldHint = value;
  }
  public resetOpenWorldHint() {
    this._openWorldHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openWorldHintInput() {
    return this._openWorldHint;
  }

  // read_only_hint - computed: true, optional: true, required: false
  private _readOnlyHint?: boolean | cdktf.IResolvable; 
  public get readOnlyHint() {
    return this.getBooleanAttribute('read_only_hint');
  }
  public set readOnlyHint(value: boolean | cdktf.IResolvable) {
    this._readOnlyHint = value;
  }
  public resetReadOnlyHint() {
    this._readOnlyHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyHintInput() {
    return this._readOnlyHint;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GatewayPluginAiMcpProxyConfigToolsParametersSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#type GatewayPluginAiMcpProxy#type}
  */
  readonly type?: string;
}

export function gatewayPluginAiMcpProxyConfigToolsParametersSchemaToTerraform(struct?: GatewayPluginAiMcpProxyConfigToolsParametersSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayPluginAiMcpProxyConfigToolsParametersSchemaToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigToolsParametersSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GatewayPluginAiMcpProxyConfigToolsParametersSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyConfigToolsParametersSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigToolsParametersSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
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
}
export interface GatewayPluginAiMcpProxyConfigToolsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#description GatewayPluginAiMcpProxy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#in GatewayPluginAiMcpProxy#in}
  */
  readonly in?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#name GatewayPluginAiMcpProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#required GatewayPluginAiMcpProxy#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#schema GatewayPluginAiMcpProxy#schema}
  */
  readonly schema?: GatewayPluginAiMcpProxyConfigToolsParametersSchema;
}

export function gatewayPluginAiMcpProxyConfigToolsParametersToTerraform(struct?: GatewayPluginAiMcpProxyConfigToolsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    in: cdktf.stringToTerraform(struct!.in),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema: gatewayPluginAiMcpProxyConfigToolsParametersSchemaToTerraform(struct!.schema),
  }
}


export function gatewayPluginAiMcpProxyConfigToolsParametersToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigToolsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema: {
      value: gatewayPluginAiMcpProxyConfigToolsParametersSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpProxyConfigToolsParametersSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpProxyConfigToolsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiMcpProxyConfigToolsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigToolsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._in = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._in = value.in;
      this._name = value.name;
      this._required = value.required;
      this._schema.internalValue = value.schema;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // in - computed: true, optional: true, required: false
  private _in?: string; 
  public get in() {
    return this.getStringAttribute('in');
  }
  public set in(value: string) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
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

  // required - computed: true, optional: true, required: false
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

  // schema - computed: true, optional: true, required: false
  private _schema = new GatewayPluginAiMcpProxyConfigToolsParametersSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: GatewayPluginAiMcpProxyConfigToolsParametersSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class GatewayPluginAiMcpProxyConfigToolsParametersList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiMcpProxyConfigToolsParameters[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiMcpProxyConfigToolsParametersOutputReference {
    return new GatewayPluginAiMcpProxyConfigToolsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiMcpProxyConfigTools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#annotations GatewayPluginAiMcpProxy#annotations}
  */
  readonly annotations?: GatewayPluginAiMcpProxyConfigToolsAnnotations;
  /**
  * The description of the MCP tool. This is used to provide information about the tool's functionality and usage. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#description GatewayPluginAiMcpProxy#description}
  */
  readonly description?: string;
  /**
  * The headers of the exported API. By default, Kong will extract the headers from API configuration. If the configured headers are not exactly matched, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#headers GatewayPluginAiMcpProxy#headers}
  */
  readonly headers?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The host of the exported API. By default, Kong will extract the host from API configuration. If the configured host is wildcard, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#host GatewayPluginAiMcpProxy#host}
  */
  readonly host?: string;
  /**
  * The method of the exported API. By default, Kong will extract the method from API configuration. If the configured method is not exactly matched, this field is required. must be one of ["DELETE", "GET", "PATCH", "POST", "PUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#method GatewayPluginAiMcpProxy#method}
  */
  readonly method?: string;
  /**
  * The API parameters specification defined in OpenAPI. For example, '[{"name": "city", "in": "query", "description": "Name of the city to get the weather for", "required": true, "schema": {"type": "string"}}]'.See https://swagger.io/docs/specification/v3_0/describing-parameters/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#parameters GatewayPluginAiMcpProxy#parameters}
  */
  readonly parameters?: GatewayPluginAiMcpProxyConfigToolsParameters[] | cdktf.IResolvable;
  /**
  * The path of the exported API. By default, Kong will extract the path from API configuration. If the configured path is not exactly matched, this field is required. Paths not starting with '/' are treated as relative paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#path GatewayPluginAiMcpProxy#path}
  */
  readonly path?: string;
  /**
  * The query arguments of the exported API. If the generated query arguments are not exactly matched, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#query GatewayPluginAiMcpProxy#query}
  */
  readonly query?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The API requestBody specification defined in OpenAPI. For example, '{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"color":{"type":"array","items":{"type":"string"}}}}}}'.See https://swagger.io/docs/specification/v3_0/describing-request-body/describing-request-body/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#request_body GatewayPluginAiMcpProxy#request_body}
  */
  readonly requestBody?: string;
  /**
  * The scheme of the exported API. By default, Kong will extract the scheme from API configuration. If the configured scheme is not expected, this field can be used to override it. must be one of ["http", "https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#scheme GatewayPluginAiMcpProxy#scheme}
  */
  readonly scheme?: string;
}

export function gatewayPluginAiMcpProxyConfigToolsToTerraform(struct?: GatewayPluginAiMcpProxyConfigTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: gatewayPluginAiMcpProxyConfigToolsAnnotationsToTerraform(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    parameters: cdktf.listMapper(gatewayPluginAiMcpProxyConfigToolsParametersToTerraform, false)(struct!.parameters),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.query),
    request_body: cdktf.stringToTerraform(struct!.requestBody),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function gatewayPluginAiMcpProxyConfigToolsToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: gatewayPluginAiMcpProxyConfigToolsAnnotationsToHclTerraform(struct!.annotations),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpProxyConfigToolsAnnotations",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(gatewayPluginAiMcpProxyConfigToolsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiMcpProxyConfigToolsParametersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.query),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    request_body: {
      value: cdktf.stringToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpProxyConfigToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiMcpProxyConfigTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._headers = undefined;
      this._host = undefined;
      this._method = undefined;
      this._parameters.internalValue = undefined;
      this._path = undefined;
      this._query = undefined;
      this._requestBody = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._headers = value.headers;
      this._host = value.host;
      this._method = value.method;
      this._parameters.internalValue = value.parameters;
      this._path = value.path;
      this._query = value.query;
      this._requestBody = value.requestBody;
      this._scheme = value.scheme;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new GatewayPluginAiMcpProxyConfigToolsAnnotationsOutputReference(this, "annotations");
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: GatewayPluginAiMcpProxyConfigToolsAnnotations) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get headers() {
    return this.interpolationForAttribute('headers');
  }
  public set headers(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters = new GatewayPluginAiMcpProxyConfigToolsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GatewayPluginAiMcpProxyConfigToolsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
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

  // query - computed: false, optional: true, required: false
  private _query?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get query() {
    return this.interpolationForAttribute('query');
  }
  public set query(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class GatewayPluginAiMcpProxyConfigToolsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiMcpProxyConfigTools[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiMcpProxyConfigToolsOutputReference {
    return new GatewayPluginAiMcpProxyConfigToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiMcpProxyConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#logging GatewayPluginAiMcpProxy#logging}
  */
  readonly logging?: GatewayPluginAiMcpProxyConfigLogging;
  /**
  * max allowed body size allowed to be handled as MCP request. Default: 8192
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#max_request_body_size GatewayPluginAiMcpProxy#max_request_body_size}
  */
  readonly maxRequestBodySize?: number;
  /**
  * The mode of the MCP proxy. Possible values are: 'passthrough-listener', 'conversion-listener', 'conversion-only', 'listener'. must be one of ["conversion-listener", "conversion-only", "listener", "passthrough-listener"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#mode GatewayPluginAiMcpProxy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#server GatewayPluginAiMcpProxy#server}
  */
  readonly server?: GatewayPluginAiMcpProxyConfigServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#tools GatewayPluginAiMcpProxy#tools}
  */
  readonly tools?: GatewayPluginAiMcpProxyConfigTools[] | cdktf.IResolvable;
}

export function gatewayPluginAiMcpProxyConfigAToTerraform(struct?: GatewayPluginAiMcpProxyConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: gatewayPluginAiMcpProxyConfigLoggingToTerraform(struct!.logging),
    max_request_body_size: cdktf.numberToTerraform(struct!.maxRequestBodySize),
    mode: cdktf.stringToTerraform(struct!.mode),
    server: gatewayPluginAiMcpProxyConfigServerToTerraform(struct!.server),
    tools: cdktf.listMapper(gatewayPluginAiMcpProxyConfigToolsToTerraform, false)(struct!.tools),
  }
}


export function gatewayPluginAiMcpProxyConfigAToHclTerraform(struct?: GatewayPluginAiMcpProxyConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: gatewayPluginAiMcpProxyConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpProxyConfigLogging",
    },
    max_request_body_size: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: gatewayPluginAiMcpProxyConfigServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpProxyConfigServer",
    },
    tools: {
      value: cdktf.listMapperHcl(gatewayPluginAiMcpProxyConfigToolsToHclTerraform, false)(struct!.tools),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiMcpProxyConfigToolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpProxyConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._maxRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySize = this._maxRequestBodySize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._tools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiMcpProxyConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logging.internalValue = undefined;
      this._maxRequestBodySize = undefined;
      this._mode = undefined;
      this._server.internalValue = undefined;
      this._tools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logging.internalValue = value.logging;
      this._maxRequestBodySize = value.maxRequestBodySize;
      this._mode = value.mode;
      this._server.internalValue = value.server;
      this._tools.internalValue = value.tools;
    }
  }

  // logging - computed: true, optional: true, required: false
  private _logging = new GatewayPluginAiMcpProxyConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: GatewayPluginAiMcpProxyConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // max_request_body_size - computed: true, optional: true, required: false
  private _maxRequestBodySize?: number; 
  public get maxRequestBodySize() {
    return this.getNumberAttribute('max_request_body_size');
  }
  public set maxRequestBodySize(value: number) {
    this._maxRequestBodySize = value;
  }
  public resetMaxRequestBodySize() {
    this._maxRequestBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodySizeInput() {
    return this._maxRequestBodySize;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // server - computed: true, optional: true, required: false
  private _server = new GatewayPluginAiMcpProxyConfigServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: GatewayPluginAiMcpProxyConfigServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // tools - computed: false, optional: true, required: false
  private _tools = new GatewayPluginAiMcpProxyConfigToolsList(this, "tools", false);
  public get tools() {
    return this._tools;
  }
  public putTools(value: GatewayPluginAiMcpProxyConfigTools[] | cdktf.IResolvable) {
    this._tools.internalValue = value;
  }
  public resetTools() {
    this._tools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools.internalValue;
  }
}
export interface GatewayPluginAiMcpProxyOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#access GatewayPluginAiMcpProxy#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiMcpProxyOrderingAfterToTerraform(struct?: GatewayPluginAiMcpProxyOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiMcpProxyOrderingAfterToHclTerraform(struct?: GatewayPluginAiMcpProxyOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiMcpProxyOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiMcpProxyOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiMcpProxyOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#access GatewayPluginAiMcpProxy#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiMcpProxyOrderingBeforeToTerraform(struct?: GatewayPluginAiMcpProxyOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiMcpProxyOrderingBeforeToHclTerraform(struct?: GatewayPluginAiMcpProxyOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiMcpProxyOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiMcpProxyOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiMcpProxyOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#after GatewayPluginAiMcpProxy#after}
  */
  readonly after?: GatewayPluginAiMcpProxyOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#before GatewayPluginAiMcpProxy#before}
  */
  readonly before?: GatewayPluginAiMcpProxyOrderingBefore;
}

export function gatewayPluginAiMcpProxyOrderingToTerraform(struct?: GatewayPluginAiMcpProxyOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiMcpProxyOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiMcpProxyOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiMcpProxyOrderingToHclTerraform(struct?: GatewayPluginAiMcpProxyOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiMcpProxyOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpProxyOrderingAfter",
    },
    before: {
      value: gatewayPluginAiMcpProxyOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiMcpProxyOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiMcpProxyOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiMcpProxyOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiMcpProxyOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiMcpProxyOrderingAfter) {
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
  private _before = new GatewayPluginAiMcpProxyOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiMcpProxyOrderingBefore) {
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
export interface GatewayPluginAiMcpProxyPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#id GatewayPluginAiMcpProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#name GatewayPluginAiMcpProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#path GatewayPluginAiMcpProxy#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiMcpProxyPartialsToTerraform(struct?: GatewayPluginAiMcpProxyPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiMcpProxyPartialsToHclTerraform(struct?: GatewayPluginAiMcpProxyPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiMcpProxyPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiMcpProxyPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiMcpProxyPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiMcpProxyPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiMcpProxyPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiMcpProxyPartialsOutputReference {
    return new GatewayPluginAiMcpProxyPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiMcpProxyRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#id GatewayPluginAiMcpProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiMcpProxyRouteToTerraform(struct?: GatewayPluginAiMcpProxyRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiMcpProxyRouteToHclTerraform(struct?: GatewayPluginAiMcpProxyRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiMcpProxyRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiMcpProxyRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiMcpProxyService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#id GatewayPluginAiMcpProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiMcpProxyServiceToTerraform(struct?: GatewayPluginAiMcpProxyService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiMcpProxyServiceToHclTerraform(struct?: GatewayPluginAiMcpProxyService | cdktf.IResolvable): any {
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

export class GatewayPluginAiMcpProxyServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiMcpProxyService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiMcpProxyService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy konnect_gateway_plugin_ai_mcp_proxy}
*/
export class GatewayPluginAiMcpProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_mcp_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiMcpProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiMcpProxy to import
  * @param importFromId The id of the existing GatewayPluginAiMcpProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiMcpProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_mcp_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_mcp_proxy konnect_gateway_plugin_ai_mcp_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiMcpProxyConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiMcpProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_mcp_proxy',
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
  private _config = new GatewayPluginAiMcpProxyConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiMcpProxyConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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
  private _ordering = new GatewayPluginAiMcpProxyOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiMcpProxyOrdering) {
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
  private _partials = new GatewayPluginAiMcpProxyPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiMcpProxyPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiMcpProxyRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiMcpProxyRoute) {
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
  private _service = new GatewayPluginAiMcpProxyServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiMcpProxyService) {
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
      config: gatewayPluginAiMcpProxyConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiMcpProxyOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiMcpProxyPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiMcpProxyRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiMcpProxyServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiMcpProxyConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpProxyConfigA",
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
        value: gatewayPluginAiMcpProxyOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpProxyOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiMcpProxyPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiMcpProxyPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiMcpProxyRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpProxyRoute",
      },
      service: {
        value: gatewayPluginAiMcpProxyServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiMcpProxyService",
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
