// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginSolaceUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#config GatewayPluginSolaceUpstream#config}
  */
  readonly config: GatewayPluginSolaceUpstreamConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#control_plane_id GatewayPluginSolaceUpstream#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#created_at GatewayPluginSolaceUpstream#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#enabled GatewayPluginSolaceUpstream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#id GatewayPluginSolaceUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#instance_name GatewayPluginSolaceUpstream#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#ordering GatewayPluginSolaceUpstream#ordering}
  */
  readonly ordering?: GatewayPluginSolaceUpstreamOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#partials GatewayPluginSolaceUpstream#partials}
  */
  readonly partials?: GatewayPluginSolaceUpstreamPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#protocols GatewayPluginSolaceUpstream#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#route GatewayPluginSolaceUpstream#route}
  */
  readonly route?: GatewayPluginSolaceUpstreamRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#service GatewayPluginSolaceUpstream#service}
  */
  readonly service?: GatewayPluginSolaceUpstreamService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#tags GatewayPluginSolaceUpstream#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#updated_at GatewayPluginSolaceUpstream#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginSolaceUpstreamConfigMessageDestinations {
  /**
  * The name of the destination. You can use $(uri_captures['<capture-identifier>']) in this field (replace `<capture-identifier>` with a real value, for example `$uri_captures[’queue’]` when the matched route has a path `~/(?<queue>[a-z]+)`). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#name GatewayPluginSolaceUpstream#name}
  */
  readonly name?: string;
  /**
  * The type of the destination. Default: "QUEUE"; must be one of ["QUEUE", "TOPIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#type GatewayPluginSolaceUpstream#type}
  */
  readonly type?: string;
}

export function gatewayPluginSolaceUpstreamConfigMessageDestinationsToTerraform(struct?: GatewayPluginSolaceUpstreamConfigMessageDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayPluginSolaceUpstreamConfigMessageDestinationsToHclTerraform(struct?: GatewayPluginSolaceUpstreamConfigMessageDestinations | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceUpstreamConfigMessageDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSolaceUpstreamConfigMessageDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceUpstreamConfigMessageDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class GatewayPluginSolaceUpstreamConfigMessageDestinationsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSolaceUpstreamConfigMessageDestinations[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSolaceUpstreamConfigMessageDestinationsOutputReference {
    return new GatewayPluginSolaceUpstreamConfigMessageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSolaceUpstreamConfigMessage {
  /**
  * When using a non-DIRECT guaranteed delivery mode, this property sets the message acknowledgement timeout in milliseconds (waiting time). Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#ack_timeout GatewayPluginSolaceUpstream#ack_timeout}
  */
  readonly ackTimeout?: number;
  /**
  * When not using `forward_method`, `forward_uri`, `forward_headers` or `forward_body`, this sets the message content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#default_content GatewayPluginSolaceUpstream#default_content}
  */
  readonly defaultContent?: string;
  /**
  * Sets the message delivery mode. Default: "DIRECT"; must be one of ["DIRECT", "PERSISTENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#delivery_mode GatewayPluginSolaceUpstream#delivery_mode}
  */
  readonly deliveryMode?: string;
  /**
  * The message destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#destinations GatewayPluginSolaceUpstream#destinations}
  */
  readonly destinations: GatewayPluginSolaceUpstreamConfigMessageDestinations[] | cdktf.IResolvable;
  /**
  * Sets the dead message queue (DMQ) eligible property on the message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#dmq_eligible GatewayPluginSolaceUpstream#dmq_eligible}
  */
  readonly dmqEligible?: boolean | cdktf.IResolvable;
  /**
  * Include the request body and the body arguments in the message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#forward_body GatewayPluginSolaceUpstream#forward_body}
  */
  readonly forwardBody?: boolean | cdktf.IResolvable;
  /**
  * Include the request headers in the message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#forward_headers GatewayPluginSolaceUpstream#forward_headers}
  */
  readonly forwardHeaders?: boolean | cdktf.IResolvable;
  /**
  * Include the request method in the message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#forward_method GatewayPluginSolaceUpstream#forward_method}
  */
  readonly forwardMethod?: boolean | cdktf.IResolvable;
  /**
  * Include the request URI and the URI arguments (as in, query arguments) in the message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#forward_uri GatewayPluginSolaceUpstream#forward_uri}
  */
  readonly forwardUri?: boolean | cdktf.IResolvable;
  /**
  * The Lua functions that manipulates (or generates) the message being sent to Solace. The `message` variable can be used to access the current message content, and the function can return a new content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#functions GatewayPluginSolaceUpstream#functions}
  */
  readonly functions?: string[];
  /**
  * Sets the message priority. Default: 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#priority GatewayPluginSolaceUpstream#priority}
  */
  readonly priority?: number;
  /**
  * Allows the application to set the content of the sender identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#sender_id GatewayPluginSolaceUpstream#sender_id}
  */
  readonly senderId?: string;
  /**
  * Enable or disable the tracing. This is primarily used for distributed tracing and message correlation, especially in debugging or tracking message flows across multiple systems. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#tracing GatewayPluginSolaceUpstream#tracing}
  */
  readonly tracing?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the message should be included in distributed tracing (i.e., if it should be "sampled" for the tracing). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#tracing_sampled GatewayPluginSolaceUpstream#tracing_sampled}
  */
  readonly tracingSampled?: boolean | cdktf.IResolvable;
  /**
  * Sets the time to live (TTL) in milliseconds for the message. Setting the time to live to zero disables the TTL for the message. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#ttl GatewayPluginSolaceUpstream#ttl}
  */
  readonly ttl?: number;
}

export function gatewayPluginSolaceUpstreamConfigMessageToTerraform(struct?: GatewayPluginSolaceUpstreamConfigMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_timeout: cdktf.numberToTerraform(struct!.ackTimeout),
    default_content: cdktf.stringToTerraform(struct!.defaultContent),
    delivery_mode: cdktf.stringToTerraform(struct!.deliveryMode),
    destinations: cdktf.listMapper(gatewayPluginSolaceUpstreamConfigMessageDestinationsToTerraform, false)(struct!.destinations),
    dmq_eligible: cdktf.booleanToTerraform(struct!.dmqEligible),
    forward_body: cdktf.booleanToTerraform(struct!.forwardBody),
    forward_headers: cdktf.booleanToTerraform(struct!.forwardHeaders),
    forward_method: cdktf.booleanToTerraform(struct!.forwardMethod),
    forward_uri: cdktf.booleanToTerraform(struct!.forwardUri),
    functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functions),
    priority: cdktf.numberToTerraform(struct!.priority),
    sender_id: cdktf.stringToTerraform(struct!.senderId),
    tracing: cdktf.booleanToTerraform(struct!.tracing),
    tracing_sampled: cdktf.booleanToTerraform(struct!.tracingSampled),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function gatewayPluginSolaceUpstreamConfigMessageToHclTerraform(struct?: GatewayPluginSolaceUpstreamConfigMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ackTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_content: {
      value: cdktf.stringToHclTerraform(struct!.defaultContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delivery_mode: {
      value: cdktf.stringToHclTerraform(struct!.deliveryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(gatewayPluginSolaceUpstreamConfigMessageDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginSolaceUpstreamConfigMessageDestinationsList",
    },
    dmq_eligible: {
      value: cdktf.booleanToHclTerraform(struct!.dmqEligible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_body: {
      value: cdktf.booleanToHclTerraform(struct!.forwardBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_headers: {
      value: cdktf.booleanToHclTerraform(struct!.forwardHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_method: {
      value: cdktf.booleanToHclTerraform(struct!.forwardMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_uri: {
      value: cdktf.booleanToHclTerraform(struct!.forwardUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sender_id: {
      value: cdktf.stringToHclTerraform(struct!.senderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing: {
      value: cdktf.booleanToHclTerraform(struct!.tracing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracing_sampled: {
      value: cdktf.booleanToHclTerraform(struct!.tracingSampled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GatewayPluginSolaceUpstreamConfigMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamConfigMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackTimeout = this._ackTimeout;
    }
    if (this._defaultContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultContent = this._defaultContent;
    }
    if (this._deliveryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMode = this._deliveryMode;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._dmqEligible !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmqEligible = this._dmqEligible;
    }
    if (this._forwardBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardBody = this._forwardBody;
    }
    if (this._forwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHeaders = this._forwardHeaders;
    }
    if (this._forwardMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardMethod = this._forwardMethod;
    }
    if (this._forwardUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUri = this._forwardUri;
    }
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._senderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderId = this._senderId;
    }
    if (this._tracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing;
    }
    if (this._tracingSampled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingSampled = this._tracingSampled;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceUpstreamConfigMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackTimeout = undefined;
      this._defaultContent = undefined;
      this._deliveryMode = undefined;
      this._destinations.internalValue = undefined;
      this._dmqEligible = undefined;
      this._forwardBody = undefined;
      this._forwardHeaders = undefined;
      this._forwardMethod = undefined;
      this._forwardUri = undefined;
      this._functions = undefined;
      this._priority = undefined;
      this._senderId = undefined;
      this._tracing = undefined;
      this._tracingSampled = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackTimeout = value.ackTimeout;
      this._defaultContent = value.defaultContent;
      this._deliveryMode = value.deliveryMode;
      this._destinations.internalValue = value.destinations;
      this._dmqEligible = value.dmqEligible;
      this._forwardBody = value.forwardBody;
      this._forwardHeaders = value.forwardHeaders;
      this._forwardMethod = value.forwardMethod;
      this._forwardUri = value.forwardUri;
      this._functions = value.functions;
      this._priority = value.priority;
      this._senderId = value.senderId;
      this._tracing = value.tracing;
      this._tracingSampled = value.tracingSampled;
      this._ttl = value.ttl;
    }
  }

  // ack_timeout - computed: true, optional: true, required: false
  private _ackTimeout?: number; 
  public get ackTimeout() {
    return this.getNumberAttribute('ack_timeout');
  }
  public set ackTimeout(value: number) {
    this._ackTimeout = value;
  }
  public resetAckTimeout() {
    this._ackTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackTimeoutInput() {
    return this._ackTimeout;
  }

  // default_content - computed: false, optional: true, required: false
  private _defaultContent?: string; 
  public get defaultContent() {
    return this.getStringAttribute('default_content');
  }
  public set defaultContent(value: string) {
    this._defaultContent = value;
  }
  public resetDefaultContent() {
    this._defaultContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContentInput() {
    return this._defaultContent;
  }

  // delivery_mode - computed: true, optional: true, required: false
  private _deliveryMode?: string; 
  public get deliveryMode() {
    return this.getStringAttribute('delivery_mode');
  }
  public set deliveryMode(value: string) {
    this._deliveryMode = value;
  }
  public resetDeliveryMode() {
    this._deliveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryModeInput() {
    return this._deliveryMode;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new GatewayPluginSolaceUpstreamConfigMessageDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: GatewayPluginSolaceUpstreamConfigMessageDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // dmq_eligible - computed: true, optional: true, required: false
  private _dmqEligible?: boolean | cdktf.IResolvable; 
  public get dmqEligible() {
    return this.getBooleanAttribute('dmq_eligible');
  }
  public set dmqEligible(value: boolean | cdktf.IResolvable) {
    this._dmqEligible = value;
  }
  public resetDmqEligible() {
    this._dmqEligible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmqEligibleInput() {
    return this._dmqEligible;
  }

  // forward_body - computed: true, optional: true, required: false
  private _forwardBody?: boolean | cdktf.IResolvable; 
  public get forwardBody() {
    return this.getBooleanAttribute('forward_body');
  }
  public set forwardBody(value: boolean | cdktf.IResolvable) {
    this._forwardBody = value;
  }
  public resetForwardBody() {
    this._forwardBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardBodyInput() {
    return this._forwardBody;
  }

  // forward_headers - computed: true, optional: true, required: false
  private _forwardHeaders?: boolean | cdktf.IResolvable; 
  public get forwardHeaders() {
    return this.getBooleanAttribute('forward_headers');
  }
  public set forwardHeaders(value: boolean | cdktf.IResolvable) {
    this._forwardHeaders = value;
  }
  public resetForwardHeaders() {
    this._forwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHeadersInput() {
    return this._forwardHeaders;
  }

  // forward_method - computed: true, optional: true, required: false
  private _forwardMethod?: boolean | cdktf.IResolvable; 
  public get forwardMethod() {
    return this.getBooleanAttribute('forward_method');
  }
  public set forwardMethod(value: boolean | cdktf.IResolvable) {
    this._forwardMethod = value;
  }
  public resetForwardMethod() {
    this._forwardMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardMethodInput() {
    return this._forwardMethod;
  }

  // forward_uri - computed: true, optional: true, required: false
  private _forwardUri?: boolean | cdktf.IResolvable; 
  public get forwardUri() {
    return this.getBooleanAttribute('forward_uri');
  }
  public set forwardUri(value: boolean | cdktf.IResolvable) {
    this._forwardUri = value;
  }
  public resetForwardUri() {
    this._forwardUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUriInput() {
    return this._forwardUri;
  }

  // functions - computed: false, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // sender_id - computed: false, optional: true, required: false
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // tracing - computed: true, optional: true, required: false
  private _tracing?: boolean | cdktf.IResolvable; 
  public get tracing() {
    return this.getBooleanAttribute('tracing');
  }
  public set tracing(value: boolean | cdktf.IResolvable) {
    this._tracing = value;
  }
  public resetTracing() {
    this._tracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing;
  }

  // tracing_sampled - computed: true, optional: true, required: false
  private _tracingSampled?: boolean | cdktf.IResolvable; 
  public get tracingSampled() {
    return this.getBooleanAttribute('tracing_sampled');
  }
  public set tracingSampled(value: boolean | cdktf.IResolvable) {
    this._tracingSampled = value;
  }
  public resetTracingSampled() {
    this._tracingSampled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingSampledInput() {
    return this._tracingSampled;
  }

  // ttl - computed: true, optional: true, required: false
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
export interface GatewayPluginSolaceUpstreamConfigSessionAuthentication {
  /**
  * The OAuth2 access token used with `OAUTH2` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#access_token GatewayPluginSolaceUpstream#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#access_token_header GatewayPluginSolaceUpstream#access_token_header}
  */
  readonly accessTokenHeader?: string;
  /**
  * The OpenID Connect ID token used with `OAUTH2` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#id_token GatewayPluginSolaceUpstream#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#id_token_header GatewayPluginSolaceUpstream#id_token_header}
  */
  readonly idTokenHeader?: string;
  /**
  * The password used with `BASIC` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#password GatewayPluginSolaceUpstream#password}
  */
  readonly password?: string;
  /**
  * The client authentication scheme used when connection to an event broker. Default: "BASIC"; must be one of ["BASIC", "NONE", "OAUTH2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#scheme GatewayPluginSolaceUpstream#scheme}
  */
  readonly scheme?: string;
  /**
  * The username used with `BASIC` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#username GatewayPluginSolaceUpstream#username}
  */
  readonly username?: string;
}

export function gatewayPluginSolaceUpstreamConfigSessionAuthenticationToTerraform(struct?: GatewayPluginSolaceUpstreamConfigSessionAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    access_token_header: cdktf.stringToTerraform(struct!.accessTokenHeader),
    id_token: cdktf.stringToTerraform(struct!.idToken),
    id_token_header: cdktf.stringToTerraform(struct!.idTokenHeader),
    password: cdktf.stringToTerraform(struct!.password),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginSolaceUpstreamConfigSessionAuthenticationToHclTerraform(struct?: GatewayPluginSolaceUpstreamConfigSessionAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_header: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token: {
      value: cdktf.stringToHclTerraform(struct!.idToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_header: {
      value: cdktf.stringToHclTerraform(struct!.idTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class GatewayPluginSolaceUpstreamConfigSessionAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamConfigSessionAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._accessTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenHeader = this._accessTokenHeader;
    }
    if (this._idToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken;
    }
    if (this._idTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenHeader = this._idTokenHeader;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceUpstreamConfigSessionAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._accessTokenHeader = undefined;
      this._idToken = undefined;
      this._idTokenHeader = undefined;
      this._password = undefined;
      this._scheme = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._accessTokenHeader = value.accessTokenHeader;
      this._idToken = value.idToken;
      this._idTokenHeader = value.idTokenHeader;
      this._password = value.password;
      this._scheme = value.scheme;
      this._username = value.username;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // access_token_header - computed: true, optional: true, required: false
  private _accessTokenHeader?: string; 
  public get accessTokenHeader() {
    return this.getStringAttribute('access_token_header');
  }
  public set accessTokenHeader(value: string) {
    this._accessTokenHeader = value;
  }
  public resetAccessTokenHeader() {
    this._accessTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenHeaderInput() {
    return this._accessTokenHeader;
  }

  // id_token - computed: true, optional: true, required: false
  private _idToken?: string; 
  public get idToken() {
    return this.getStringAttribute('id_token');
  }
  public set idToken(value: string) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken;
  }

  // id_token_header - computed: true, optional: true, required: false
  private _idTokenHeader?: string; 
  public get idTokenHeader() {
    return this.getStringAttribute('id_token_header');
  }
  public set idTokenHeader(value: string) {
    this._idTokenHeader = value;
  }
  public resetIdTokenHeader() {
    this._idTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenHeaderInput() {
    return this._idTokenHeader;
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
export interface GatewayPluginSolaceUpstreamConfigSession {
  /**
  * Session authentication related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#authentication GatewayPluginSolaceUpstream#authentication}
  */
  readonly authentication?: GatewayPluginSolaceUpstreamConfigSessionAuthentication;
  /**
  * If this property is true and time-to-live has a positive value in a message, the expiration time is calculated when the message is sent or received. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#calculate_message_expiry GatewayPluginSolaceUpstream#calculate_message_expiry}
  */
  readonly calculateMessageExpiry?: boolean | cdktf.IResolvable;
  /**
  * The timeout period (in milliseconds) for a connect operation to a given host (per host). Default: 3000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#connect_timeout GatewayPluginSolaceUpstream#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * When enabled, a receive timestamp is recorded for each message. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#generate_rcv_timestamps GatewayPluginSolaceUpstream#generate_rcv_timestamps}
  */
  readonly generateRcvTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a send timestamp is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#generate_send_timestamps GatewayPluginSolaceUpstream#generate_send_timestamps}
  */
  readonly generateSendTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a sender id is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#generate_sender_id GatewayPluginSolaceUpstream#generate_sender_id}
  */
  readonly generateSenderId?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a sequence number is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#generate_sequence_number GatewayPluginSolaceUpstream#generate_sequence_number}
  */
  readonly generateSequenceNumber?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 or IPv6 address or host name to connect to (see: https://docs.solace.com/API-Developer-Online-Ref-Documentation/c/index.html#host-entry).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#host GatewayPluginSolaceUpstream#host}
  */
  readonly host: string;
  /**
  * Additional Solace session properties (each setting needs to have `SESSION_` prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#properties GatewayPluginSolaceUpstream#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Indicates whether the API should validate server certificates with the trusted certificates. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#ssl_validate_certificate GatewayPluginSolaceUpstream#ssl_validate_certificate}
  */
  readonly sslValidateCertificate?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN to attempt to join when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#vpn_name GatewayPluginSolaceUpstream#vpn_name}
  */
  readonly vpnName?: string;
}

export function gatewayPluginSolaceUpstreamConfigSessionToTerraform(struct?: GatewayPluginSolaceUpstreamConfigSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginSolaceUpstreamConfigSessionAuthenticationToTerraform(struct!.authentication),
    calculate_message_expiry: cdktf.booleanToTerraform(struct!.calculateMessageExpiry),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    generate_rcv_timestamps: cdktf.booleanToTerraform(struct!.generateRcvTimestamps),
    generate_send_timestamps: cdktf.booleanToTerraform(struct!.generateSendTimestamps),
    generate_sender_id: cdktf.booleanToTerraform(struct!.generateSenderId),
    generate_sequence_number: cdktf.booleanToTerraform(struct!.generateSequenceNumber),
    host: cdktf.stringToTerraform(struct!.host),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    ssl_validate_certificate: cdktf.booleanToTerraform(struct!.sslValidateCertificate),
    vpn_name: cdktf.stringToTerraform(struct!.vpnName),
  }
}


export function gatewayPluginSolaceUpstreamConfigSessionToHclTerraform(struct?: GatewayPluginSolaceUpstreamConfigSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginSolaceUpstreamConfigSessionAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceUpstreamConfigSessionAuthentication",
    },
    calculate_message_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.calculateMessageExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generate_rcv_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.generateRcvTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_send_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.generateSendTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_sender_id: {
      value: cdktf.booleanToHclTerraform(struct!.generateSenderId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_sequence_number: {
      value: cdktf.booleanToHclTerraform(struct!.generateSequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssl_validate_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.sslValidateCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_name: {
      value: cdktf.stringToHclTerraform(struct!.vpnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceUpstreamConfigSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamConfigSession | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._calculateMessageExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculateMessageExpiry = this._calculateMessageExpiry;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._generateRcvTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateRcvTimestamps = this._generateRcvTimestamps;
    }
    if (this._generateSendTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateSendTimestamps = this._generateSendTimestamps;
    }
    if (this._generateSenderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateSenderId = this._generateSenderId;
    }
    if (this._generateSequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateSequenceNumber = this._generateSequenceNumber;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._sslValidateCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslValidateCertificate = this._sslValidateCertificate;
    }
    if (this._vpnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnName = this._vpnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceUpstreamConfigSession | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._calculateMessageExpiry = undefined;
      this._connectTimeout = undefined;
      this._generateRcvTimestamps = undefined;
      this._generateSendTimestamps = undefined;
      this._generateSenderId = undefined;
      this._generateSequenceNumber = undefined;
      this._host = undefined;
      this._properties = undefined;
      this._sslValidateCertificate = undefined;
      this._vpnName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._calculateMessageExpiry = value.calculateMessageExpiry;
      this._connectTimeout = value.connectTimeout;
      this._generateRcvTimestamps = value.generateRcvTimestamps;
      this._generateSendTimestamps = value.generateSendTimestamps;
      this._generateSenderId = value.generateSenderId;
      this._generateSequenceNumber = value.generateSequenceNumber;
      this._host = value.host;
      this._properties = value.properties;
      this._sslValidateCertificate = value.sslValidateCertificate;
      this._vpnName = value.vpnName;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new GatewayPluginSolaceUpstreamConfigSessionAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginSolaceUpstreamConfigSessionAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // calculate_message_expiry - computed: true, optional: true, required: false
  private _calculateMessageExpiry?: boolean | cdktf.IResolvable; 
  public get calculateMessageExpiry() {
    return this.getBooleanAttribute('calculate_message_expiry');
  }
  public set calculateMessageExpiry(value: boolean | cdktf.IResolvable) {
    this._calculateMessageExpiry = value;
  }
  public resetCalculateMessageExpiry() {
    this._calculateMessageExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculateMessageExpiryInput() {
    return this._calculateMessageExpiry;
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

  // generate_rcv_timestamps - computed: true, optional: true, required: false
  private _generateRcvTimestamps?: boolean | cdktf.IResolvable; 
  public get generateRcvTimestamps() {
    return this.getBooleanAttribute('generate_rcv_timestamps');
  }
  public set generateRcvTimestamps(value: boolean | cdktf.IResolvable) {
    this._generateRcvTimestamps = value;
  }
  public resetGenerateRcvTimestamps() {
    this._generateRcvTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateRcvTimestampsInput() {
    return this._generateRcvTimestamps;
  }

  // generate_send_timestamps - computed: true, optional: true, required: false
  private _generateSendTimestamps?: boolean | cdktf.IResolvable; 
  public get generateSendTimestamps() {
    return this.getBooleanAttribute('generate_send_timestamps');
  }
  public set generateSendTimestamps(value: boolean | cdktf.IResolvable) {
    this._generateSendTimestamps = value;
  }
  public resetGenerateSendTimestamps() {
    this._generateSendTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSendTimestampsInput() {
    return this._generateSendTimestamps;
  }

  // generate_sender_id - computed: true, optional: true, required: false
  private _generateSenderId?: boolean | cdktf.IResolvable; 
  public get generateSenderId() {
    return this.getBooleanAttribute('generate_sender_id');
  }
  public set generateSenderId(value: boolean | cdktf.IResolvable) {
    this._generateSenderId = value;
  }
  public resetGenerateSenderId() {
    this._generateSenderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSenderIdInput() {
    return this._generateSenderId;
  }

  // generate_sequence_number - computed: true, optional: true, required: false
  private _generateSequenceNumber?: boolean | cdktf.IResolvable; 
  public get generateSequenceNumber() {
    return this.getBooleanAttribute('generate_sequence_number');
  }
  public set generateSequenceNumber(value: boolean | cdktf.IResolvable) {
    this._generateSequenceNumber = value;
  }
  public resetGenerateSequenceNumber() {
    this._generateSequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSequenceNumberInput() {
    return this._generateSequenceNumber;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ssl_validate_certificate - computed: true, optional: true, required: false
  private _sslValidateCertificate?: boolean | cdktf.IResolvable; 
  public get sslValidateCertificate() {
    return this.getBooleanAttribute('ssl_validate_certificate');
  }
  public set sslValidateCertificate(value: boolean | cdktf.IResolvable) {
    this._sslValidateCertificate = value;
  }
  public resetSslValidateCertificate() {
    this._sslValidateCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslValidateCertificateInput() {
    return this._sslValidateCertificate;
  }

  // vpn_name - computed: false, optional: true, required: false
  private _vpnName?: string; 
  public get vpnName() {
    return this.getStringAttribute('vpn_name');
  }
  public set vpnName(value: string) {
    this._vpnName = value;
  }
  public resetVpnName() {
    this._vpnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNameInput() {
    return this._vpnName;
  }
}
export interface GatewayPluginSolaceUpstreamConfigA {
  /**
  * The message related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#message GatewayPluginSolaceUpstream#message}
  */
  readonly message: GatewayPluginSolaceUpstreamConfigMessage;
  /**
  * Session related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#session GatewayPluginSolaceUpstream#session}
  */
  readonly session: GatewayPluginSolaceUpstreamConfigSession;
}

export function gatewayPluginSolaceUpstreamConfigAToTerraform(struct?: GatewayPluginSolaceUpstreamConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: gatewayPluginSolaceUpstreamConfigMessageToTerraform(struct!.message),
    session: gatewayPluginSolaceUpstreamConfigSessionToTerraform(struct!.session),
  }
}


export function gatewayPluginSolaceUpstreamConfigAToHclTerraform(struct?: GatewayPluginSolaceUpstreamConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: gatewayPluginSolaceUpstreamConfigMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceUpstreamConfigMessage",
    },
    session: {
      value: gatewayPluginSolaceUpstreamConfigSessionToHclTerraform(struct!.session),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceUpstreamConfigSession",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceUpstreamConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._session?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceUpstreamConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._session.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._session.internalValue = value.session;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message = new GatewayPluginSolaceUpstreamConfigMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: GatewayPluginSolaceUpstreamConfigMessage) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // session - computed: false, optional: false, required: true
  private _session = new GatewayPluginSolaceUpstreamConfigSessionOutputReference(this, "session");
  public get session() {
    return this._session;
  }
  public putSession(value: GatewayPluginSolaceUpstreamConfigSession) {
    this._session.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session.internalValue;
  }
}
export interface GatewayPluginSolaceUpstreamOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#access GatewayPluginSolaceUpstream#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSolaceUpstreamOrderingAfterToTerraform(struct?: GatewayPluginSolaceUpstreamOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSolaceUpstreamOrderingAfterToHclTerraform(struct?: GatewayPluginSolaceUpstreamOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceUpstreamOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceUpstreamOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceUpstreamOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#access GatewayPluginSolaceUpstream#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSolaceUpstreamOrderingBeforeToTerraform(struct?: GatewayPluginSolaceUpstreamOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSolaceUpstreamOrderingBeforeToHclTerraform(struct?: GatewayPluginSolaceUpstreamOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceUpstreamOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceUpstreamOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceUpstreamOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#after GatewayPluginSolaceUpstream#after}
  */
  readonly after?: GatewayPluginSolaceUpstreamOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#before GatewayPluginSolaceUpstream#before}
  */
  readonly before?: GatewayPluginSolaceUpstreamOrderingBefore;
}

export function gatewayPluginSolaceUpstreamOrderingToTerraform(struct?: GatewayPluginSolaceUpstreamOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginSolaceUpstreamOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginSolaceUpstreamOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginSolaceUpstreamOrderingToHclTerraform(struct?: GatewayPluginSolaceUpstreamOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginSolaceUpstreamOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceUpstreamOrderingAfter",
    },
    before: {
      value: gatewayPluginSolaceUpstreamOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceUpstreamOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceUpstreamOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceUpstreamOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginSolaceUpstreamOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginSolaceUpstreamOrderingAfter) {
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
  private _before = new GatewayPluginSolaceUpstreamOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginSolaceUpstreamOrderingBefore) {
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
export interface GatewayPluginSolaceUpstreamPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#id GatewayPluginSolaceUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#name GatewayPluginSolaceUpstream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#path GatewayPluginSolaceUpstream#path}
  */
  readonly path?: string;
}

export function gatewayPluginSolaceUpstreamPartialsToTerraform(struct?: GatewayPluginSolaceUpstreamPartials | cdktf.IResolvable): any {
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


export function gatewayPluginSolaceUpstreamPartialsToHclTerraform(struct?: GatewayPluginSolaceUpstreamPartials | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceUpstreamPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSolaceUpstreamPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceUpstreamPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSolaceUpstreamPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSolaceUpstreamPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSolaceUpstreamPartialsOutputReference {
    return new GatewayPluginSolaceUpstreamPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSolaceUpstreamRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#id GatewayPluginSolaceUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSolaceUpstreamRouteToTerraform(struct?: GatewayPluginSolaceUpstreamRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSolaceUpstreamRouteToHclTerraform(struct?: GatewayPluginSolaceUpstreamRoute | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceUpstreamRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceUpstreamRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceUpstreamService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#id GatewayPluginSolaceUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSolaceUpstreamServiceToTerraform(struct?: GatewayPluginSolaceUpstreamService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSolaceUpstreamServiceToHclTerraform(struct?: GatewayPluginSolaceUpstreamService | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceUpstreamServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceUpstreamService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceUpstreamService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream konnect_gateway_plugin_solace_upstream}
*/
export class GatewayPluginSolaceUpstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_solace_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginSolaceUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginSolaceUpstream to import
  * @param importFromId The id of the existing GatewayPluginSolaceUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginSolaceUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_solace_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_solace_upstream konnect_gateway_plugin_solace_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginSolaceUpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginSolaceUpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_solace_upstream',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
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
  private _config = new GatewayPluginSolaceUpstreamConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginSolaceUpstreamConfigA) {
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
  private _ordering = new GatewayPluginSolaceUpstreamOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginSolaceUpstreamOrdering) {
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
  private _partials = new GatewayPluginSolaceUpstreamPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginSolaceUpstreamPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginSolaceUpstreamRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginSolaceUpstreamRoute) {
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
  private _service = new GatewayPluginSolaceUpstreamServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginSolaceUpstreamService) {
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
      config: gatewayPluginSolaceUpstreamConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginSolaceUpstreamOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginSolaceUpstreamPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginSolaceUpstreamRouteToTerraform(this._route.internalValue),
      service: gatewayPluginSolaceUpstreamServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginSolaceUpstreamConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceUpstreamConfigA",
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
        value: gatewayPluginSolaceUpstreamOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceUpstreamOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginSolaceUpstreamPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginSolaceUpstreamPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginSolaceUpstreamRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceUpstreamRoute",
      },
      service: {
        value: gatewayPluginSolaceUpstreamServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceUpstreamService",
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
