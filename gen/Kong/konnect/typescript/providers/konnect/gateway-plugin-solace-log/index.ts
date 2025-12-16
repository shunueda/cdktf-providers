// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginSolaceLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#config GatewayPluginSolaceLog#config}
  */
  readonly config: GatewayPluginSolaceLogConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#control_plane_id GatewayPluginSolaceLog#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#created_at GatewayPluginSolaceLog#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#enabled GatewayPluginSolaceLog#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#id GatewayPluginSolaceLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#instance_name GatewayPluginSolaceLog#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#ordering GatewayPluginSolaceLog#ordering}
  */
  readonly ordering?: GatewayPluginSolaceLogOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#partials GatewayPluginSolaceLog#partials}
  */
  readonly partials?: GatewayPluginSolaceLogPartials[] | cdktf.IResolvable;
  /**
  * A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support tcp and tls. Default: ["grpc","grpcs","http","https","ws","wss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#protocols GatewayPluginSolaceLog#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#route GatewayPluginSolaceLog#route}
  */
  readonly route?: GatewayPluginSolaceLogRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#service GatewayPluginSolaceLog#service}
  */
  readonly service?: GatewayPluginSolaceLogService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#tags GatewayPluginSolaceLog#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#updated_at GatewayPluginSolaceLog#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginSolaceLogConfigMessageDestinations {
  /**
  * The name of the destination. You can use `$(uri_captures['<capture-identifier>'])` in this field to capture the name from a regex request URI (replace `<capture-identifier>` with a real value; for example `$(uri_captures['queue'])` when the matched route has a path `~/(?<queue>[a-z]+)`). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#name GatewayPluginSolaceLog#name}
  */
  readonly name?: string;
  /**
  * The type of the destination. Default: "QUEUE"; must be one of ["QUEUE", "TOPIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#type GatewayPluginSolaceLog#type}
  */
  readonly type?: string;
}

export function gatewayPluginSolaceLogConfigMessageDestinationsToTerraform(struct?: GatewayPluginSolaceLogConfigMessageDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayPluginSolaceLogConfigMessageDestinationsToHclTerraform(struct?: GatewayPluginSolaceLogConfigMessageDestinations | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogConfigMessageDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSolaceLogConfigMessageDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogConfigMessageDestinations | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSolaceLogConfigMessageDestinationsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSolaceLogConfigMessageDestinations[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSolaceLogConfigMessageDestinationsOutputReference {
    return new GatewayPluginSolaceLogConfigMessageDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSolaceLogConfigMessage {
  /**
  * When using a non-DIRECT guaranteed delivery mode, this property sets the log message acknowledgement timeout (waiting time). Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#ack_timeout GatewayPluginSolaceLog#ack_timeout}
  */
  readonly ackTimeout?: number;
  /**
  * A key-value map that dynamically modifies log fields using Lua code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#custom_fields_by_lua GatewayPluginSolaceLog#custom_fields_by_lua}
  */
  readonly customFieldsByLua?: { [key: string]: string };
  /**
  * Sets the log message delivery mode. Default: "DIRECT"; must be one of ["DIRECT", "PERSISTENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#delivery_mode GatewayPluginSolaceLog#delivery_mode}
  */
  readonly deliveryMode?: string;
  /**
  * The log message destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#destinations GatewayPluginSolaceLog#destinations}
  */
  readonly destinations: GatewayPluginSolaceLogConfigMessageDestinations[] | cdktf.IResolvable;
  /**
  * Sets the dead message queue (DMQ) eligible property on the log message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#dmq_eligible GatewayPluginSolaceLog#dmq_eligible}
  */
  readonly dmqEligible?: boolean | cdktf.IResolvable;
  /**
  * Sets the log message priority. Default: 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#priority GatewayPluginSolaceLog#priority}
  */
  readonly priority?: number;
  /**
  * Allows the application to set the sender identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#sender_id GatewayPluginSolaceLog#sender_id}
  */
  readonly senderId?: string;
  /**
  * Enable or disable the tracing. This is primarily used for distributed tracing and log message correlation, especially in debugging or tracking log message flows across multiple systems. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#tracing GatewayPluginSolaceLog#tracing}
  */
  readonly tracing?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the log message should be included in distributed tracing (i.e., if it should be "sampled" for the tracing). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#tracing_sampled GatewayPluginSolaceLog#tracing_sampled}
  */
  readonly tracingSampled?: boolean | cdktf.IResolvable;
  /**
  * Sets the time to live (TTL) in milliseconds for the log message. Setting the time to live to zero disables the TTL for the log message. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#ttl GatewayPluginSolaceLog#ttl}
  */
  readonly ttl?: number;
}

export function gatewayPluginSolaceLogConfigMessageToTerraform(struct?: GatewayPluginSolaceLogConfigMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_timeout: cdktf.numberToTerraform(struct!.ackTimeout),
    custom_fields_by_lua: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customFieldsByLua),
    delivery_mode: cdktf.stringToTerraform(struct!.deliveryMode),
    destinations: cdktf.listMapper(gatewayPluginSolaceLogConfigMessageDestinationsToTerraform, false)(struct!.destinations),
    dmq_eligible: cdktf.booleanToTerraform(struct!.dmqEligible),
    priority: cdktf.numberToTerraform(struct!.priority),
    sender_id: cdktf.stringToTerraform(struct!.senderId),
    tracing: cdktf.booleanToTerraform(struct!.tracing),
    tracing_sampled: cdktf.booleanToTerraform(struct!.tracingSampled),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function gatewayPluginSolaceLogConfigMessageToHclTerraform(struct?: GatewayPluginSolaceLogConfigMessage | cdktf.IResolvable): any {
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
    custom_fields_by_lua: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customFieldsByLua),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    delivery_mode: {
      value: cdktf.stringToHclTerraform(struct!.deliveryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(gatewayPluginSolaceLogConfigMessageDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginSolaceLogConfigMessageDestinationsList",
    },
    dmq_eligible: {
      value: cdktf.booleanToHclTerraform(struct!.dmqEligible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GatewayPluginSolaceLogConfigMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogConfigMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackTimeout = this._ackTimeout;
    }
    if (this._customFieldsByLua !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsByLua = this._customFieldsByLua;
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

  public set internalValue(value: GatewayPluginSolaceLogConfigMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackTimeout = undefined;
      this._customFieldsByLua = undefined;
      this._deliveryMode = undefined;
      this._destinations.internalValue = undefined;
      this._dmqEligible = undefined;
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
      this._customFieldsByLua = value.customFieldsByLua;
      this._deliveryMode = value.deliveryMode;
      this._destinations.internalValue = value.destinations;
      this._dmqEligible = value.dmqEligible;
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

  // custom_fields_by_lua - computed: false, optional: true, required: false
  private _customFieldsByLua?: { [key: string]: string }; 
  public get customFieldsByLua() {
    return this.getStringMapAttribute('custom_fields_by_lua');
  }
  public set customFieldsByLua(value: { [key: string]: string }) {
    this._customFieldsByLua = value;
  }
  public resetCustomFieldsByLua() {
    this._customFieldsByLua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsByLuaInput() {
    return this._customFieldsByLua;
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
  private _destinations = new GatewayPluginSolaceLogConfigMessageDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: GatewayPluginSolaceLogConfigMessageDestinations[] | cdktf.IResolvable) {
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
export interface GatewayPluginSolaceLogConfigSessionAuthentication {
  /**
  * The OAuth2 access token used with `OAUTH2` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#access_token GatewayPluginSolaceLog#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#access_token_header GatewayPluginSolaceLog#access_token_header}
  */
  readonly accessTokenHeader?: string;
  /**
  * The OpenID Connect ID token used with `OAUTH2` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#id_token GatewayPluginSolaceLog#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#id_token_header GatewayPluginSolaceLog#id_token_header}
  */
  readonly idTokenHeader?: string;
  /**
  * The password used with `BASIC` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#password GatewayPluginSolaceLog#password}
  */
  readonly password?: string;
  /**
  * The client authentication scheme used when connection to an event broker. Default: "BASIC"; must be one of ["BASIC", "NONE", "OAUTH2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#scheme GatewayPluginSolaceLog#scheme}
  */
  readonly scheme?: string;
  /**
  * The username used with `BASIC` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#username GatewayPluginSolaceLog#username}
  */
  readonly username?: string;
}

export function gatewayPluginSolaceLogConfigSessionAuthenticationToTerraform(struct?: GatewayPluginSolaceLogConfigSessionAuthentication | cdktf.IResolvable): any {
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


export function gatewayPluginSolaceLogConfigSessionAuthenticationToHclTerraform(struct?: GatewayPluginSolaceLogConfigSessionAuthentication | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogConfigSessionAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogConfigSessionAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogConfigSessionAuthentication | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceLogConfigSession {
  /**
  * Session authentication related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#authentication GatewayPluginSolaceLog#authentication}
  */
  readonly authentication?: GatewayPluginSolaceLogConfigSessionAuthentication;
  /**
  * If this property is true and time-to-live has a positive value in a message, the expiration time is calculated when the message is sent or received. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#calculate_message_expiry GatewayPluginSolaceLog#calculate_message_expiry}
  */
  readonly calculateMessageExpiry?: boolean | cdktf.IResolvable;
  /**
  * The timeout period (in milliseconds) for a connect operation to a given host (per host). Default: 3000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#connect_timeout GatewayPluginSolaceLog#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * When enabled, a receive timestamp is recorded for each message. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#generate_rcv_timestamps GatewayPluginSolaceLog#generate_rcv_timestamps}
  */
  readonly generateRcvTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a send timestamp is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#generate_send_timestamps GatewayPluginSolaceLog#generate_send_timestamps}
  */
  readonly generateSendTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a sender id is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#generate_sender_id GatewayPluginSolaceLog#generate_sender_id}
  */
  readonly generateSenderId?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a sequence number is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#generate_sequence_number GatewayPluginSolaceLog#generate_sequence_number}
  */
  readonly generateSequenceNumber?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 or IPv6 address or host name to connect to (see: https://docs.solace.com/API-Developer-Online-Ref-Documentation/c/index.html#host-entry).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#host GatewayPluginSolaceLog#host}
  */
  readonly host: string;
  /**
  * Additional Solace session properties (each setting needs to have `SESSION_` prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#properties GatewayPluginSolaceLog#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Indicates whether the API should validate server certificates with the trusted certificates. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#ssl_validate_certificate GatewayPluginSolaceLog#ssl_validate_certificate}
  */
  readonly sslValidateCertificate?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN to attempt to join when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#vpn_name GatewayPluginSolaceLog#vpn_name}
  */
  readonly vpnName?: string;
}

export function gatewayPluginSolaceLogConfigSessionToTerraform(struct?: GatewayPluginSolaceLogConfigSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginSolaceLogConfigSessionAuthenticationToTerraform(struct!.authentication),
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


export function gatewayPluginSolaceLogConfigSessionToHclTerraform(struct?: GatewayPluginSolaceLogConfigSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginSolaceLogConfigSessionAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceLogConfigSessionAuthentication",
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

export class GatewayPluginSolaceLogConfigSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogConfigSession | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogConfigSession | cdktf.IResolvable | undefined) {
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
  private _authentication = new GatewayPluginSolaceLogConfigSessionAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginSolaceLogConfigSessionAuthentication) {
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
export interface GatewayPluginSolaceLogConfigA {
  /**
  * The log message related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#message GatewayPluginSolaceLog#message}
  */
  readonly message: GatewayPluginSolaceLogConfigMessage;
  /**
  * Session related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#session GatewayPluginSolaceLog#session}
  */
  readonly session: GatewayPluginSolaceLogConfigSession;
}

export function gatewayPluginSolaceLogConfigAToTerraform(struct?: GatewayPluginSolaceLogConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: gatewayPluginSolaceLogConfigMessageToTerraform(struct!.message),
    session: gatewayPluginSolaceLogConfigSessionToTerraform(struct!.session),
  }
}


export function gatewayPluginSolaceLogConfigAToHclTerraform(struct?: GatewayPluginSolaceLogConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: gatewayPluginSolaceLogConfigMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceLogConfigMessage",
    },
    session: {
      value: gatewayPluginSolaceLogConfigSessionToHclTerraform(struct!.session),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceLogConfigSession",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceLogConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogConfigA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogConfigA | cdktf.IResolvable | undefined) {
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
  private _message = new GatewayPluginSolaceLogConfigMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: GatewayPluginSolaceLogConfigMessage) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // session - computed: false, optional: false, required: true
  private _session = new GatewayPluginSolaceLogConfigSessionOutputReference(this, "session");
  public get session() {
    return this._session;
  }
  public putSession(value: GatewayPluginSolaceLogConfigSession) {
    this._session.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session.internalValue;
  }
}
export interface GatewayPluginSolaceLogOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#access GatewayPluginSolaceLog#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSolaceLogOrderingAfterToTerraform(struct?: GatewayPluginSolaceLogOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSolaceLogOrderingAfterToHclTerraform(struct?: GatewayPluginSolaceLogOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceLogOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#access GatewayPluginSolaceLog#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSolaceLogOrderingBeforeToTerraform(struct?: GatewayPluginSolaceLogOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSolaceLogOrderingBeforeToHclTerraform(struct?: GatewayPluginSolaceLogOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceLogOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#after GatewayPluginSolaceLog#after}
  */
  readonly after?: GatewayPluginSolaceLogOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#before GatewayPluginSolaceLog#before}
  */
  readonly before?: GatewayPluginSolaceLogOrderingBefore;
}

export function gatewayPluginSolaceLogOrderingToTerraform(struct?: GatewayPluginSolaceLogOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginSolaceLogOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginSolaceLogOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginSolaceLogOrderingToHclTerraform(struct?: GatewayPluginSolaceLogOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginSolaceLogOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceLogOrderingAfter",
    },
    before: {
      value: gatewayPluginSolaceLogOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceLogOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceLogOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginSolaceLogOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginSolaceLogOrderingAfter) {
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
  private _before = new GatewayPluginSolaceLogOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginSolaceLogOrderingBefore) {
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
export interface GatewayPluginSolaceLogPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#id GatewayPluginSolaceLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#name GatewayPluginSolaceLog#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#path GatewayPluginSolaceLog#path}
  */
  readonly path?: string;
}

export function gatewayPluginSolaceLogPartialsToTerraform(struct?: GatewayPluginSolaceLogPartials | cdktf.IResolvable): any {
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


export function gatewayPluginSolaceLogPartialsToHclTerraform(struct?: GatewayPluginSolaceLogPartials | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSolaceLogPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSolaceLogPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSolaceLogPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSolaceLogPartialsOutputReference {
    return new GatewayPluginSolaceLogPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSolaceLogRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#id GatewayPluginSolaceLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSolaceLogRouteToTerraform(struct?: GatewayPluginSolaceLogRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSolaceLogRouteToHclTerraform(struct?: GatewayPluginSolaceLogRoute | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceLogService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#id GatewayPluginSolaceLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSolaceLogServiceToTerraform(struct?: GatewayPluginSolaceLogService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSolaceLogServiceToHclTerraform(struct?: GatewayPluginSolaceLogService | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceLogServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceLogService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceLogService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log konnect_gateway_plugin_solace_log}
*/
export class GatewayPluginSolaceLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_solace_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginSolaceLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginSolaceLog to import
  * @param importFromId The id of the existing GatewayPluginSolaceLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginSolaceLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_solace_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_log konnect_gateway_plugin_solace_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginSolaceLogConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginSolaceLogConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_solace_log',
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
  private _config = new GatewayPluginSolaceLogConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginSolaceLogConfigA) {
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
  private _ordering = new GatewayPluginSolaceLogOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginSolaceLogOrdering) {
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
  private _partials = new GatewayPluginSolaceLogPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginSolaceLogPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginSolaceLogRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginSolaceLogRoute) {
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
  private _service = new GatewayPluginSolaceLogServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginSolaceLogService) {
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
      config: gatewayPluginSolaceLogConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginSolaceLogOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginSolaceLogPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginSolaceLogRouteToTerraform(this._route.internalValue),
      service: gatewayPluginSolaceLogServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginSolaceLogConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceLogConfigA",
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
        value: gatewayPluginSolaceLogOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceLogOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginSolaceLogPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginSolaceLogPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginSolaceLogRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceLogRoute",
      },
      service: {
        value: gatewayPluginSolaceLogServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceLogService",
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
