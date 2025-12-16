// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginSolaceConsumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#config GatewayPluginSolaceConsume#config}
  */
  readonly config: GatewayPluginSolaceConsumeConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#control_plane_id GatewayPluginSolaceConsume#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#created_at GatewayPluginSolaceConsume#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#enabled GatewayPluginSolaceConsume#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#id GatewayPluginSolaceConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#instance_name GatewayPluginSolaceConsume#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#ordering GatewayPluginSolaceConsume#ordering}
  */
  readonly ordering?: GatewayPluginSolaceConsumeOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#partials GatewayPluginSolaceConsume#partials}
  */
  readonly partials?: GatewayPluginSolaceConsumePartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#protocols GatewayPluginSolaceConsume#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#route GatewayPluginSolaceConsume#route}
  */
  readonly route?: GatewayPluginSolaceConsumeRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#service GatewayPluginSolaceConsume#service}
  */
  readonly service?: GatewayPluginSolaceConsumeService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#tags GatewayPluginSolaceConsume#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#updated_at GatewayPluginSolaceConsume#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginSolaceConsumeConfigFlowBinds {
  /**
  * The name of the Queue that is the target of the bind. You can use $(uri_captures['<capture-identifier>']) in this field (replace `<capture-identifier>` with a real value, for example `$uri_captures['queue']` when the matched route has a path `~/(?<queue>[a-z]+)`). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#name GatewayPluginSolaceConsume#name}
  */
  readonly name?: string;
  /**
  * The type of object to which this Flow is bound. Default: "QUEUE"; must be "QUEUE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#type GatewayPluginSolaceConsume#type}
  */
  readonly type?: string;
}

export function gatewayPluginSolaceConsumeConfigFlowBindsToTerraform(struct?: GatewayPluginSolaceConsumeConfigFlowBinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gatewayPluginSolaceConsumeConfigFlowBindsToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigFlowBinds | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumeConfigFlowBindsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSolaceConsumeConfigFlowBinds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeConfigFlowBinds | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSolaceConsumeConfigFlowBindsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSolaceConsumeConfigFlowBinds[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSolaceConsumeConfigFlowBindsOutputReference {
    return new GatewayPluginSolaceConsumeConfigFlowBindsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSolaceConsumeConfigFlow {
  /**
  * Controls how acknowledgments are generated for received Guaranteed messages. When set to `AUTO`, the messages are positively acknowledged upon receiving them. When set to 'CLIENT', the messages are positively or negatively acknowledged by Kong regarding to client delivery status. Default: "CLIENT"; must be one of ["AUTO", "CLIENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#ack_mode GatewayPluginSolaceConsume#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#binds GatewayPluginSolaceConsume#binds}
  */
  readonly binds: GatewayPluginSolaceConsumeConfigFlowBinds[] | cdktf.IResolvable;
  /**
  * The Lua functions that manipulates the message being received from Solace. The `message` variable can be used to access the current message content, and the function can return a new content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#functions GatewayPluginSolaceConsume#functions}
  */
  readonly functions?: string[];
  /**
  * This property controls the maximum number of messages that may be unacknowledged on the Flow. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#max_unacked_messages GatewayPluginSolaceConsume#max_unacked_messages}
  */
  readonly maxUnackedMessages?: number;
  /**
  * Additional Solace flow properties (each setting needs to have `FLOW_` prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#properties GatewayPluginSolaceConsume#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The selector when binding to an endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#selector GatewayPluginSolaceConsume#selector}
  */
  readonly selector?: string;
  /**
  * Specifies in milliseconds how long to wait for messages to appear on each poll before giving up or retrying. Default: 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#wait_timeout GatewayPluginSolaceConsume#wait_timeout}
  */
  readonly waitTimeout?: number;
  /**
  * The Guaranteed message window size for the Flow. Default: 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#window_size GatewayPluginSolaceConsume#window_size}
  */
  readonly windowSize?: number;
}

export function gatewayPluginSolaceConsumeConfigFlowToTerraform(struct?: GatewayPluginSolaceConsumeConfigFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_mode: cdktf.stringToTerraform(struct!.ackMode),
    binds: cdktf.listMapper(gatewayPluginSolaceConsumeConfigFlowBindsToTerraform, false)(struct!.binds),
    functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functions),
    max_unacked_messages: cdktf.numberToTerraform(struct!.maxUnackedMessages),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    selector: cdktf.stringToTerraform(struct!.selector),
    wait_timeout: cdktf.numberToTerraform(struct!.waitTimeout),
    window_size: cdktf.numberToTerraform(struct!.windowSize),
  }
}


export function gatewayPluginSolaceConsumeConfigFlowToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_mode: {
      value: cdktf.stringToHclTerraform(struct!.ackMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binds: {
      value: cdktf.listMapperHcl(gatewayPluginSolaceConsumeConfigFlowBindsToHclTerraform, false)(struct!.binds),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginSolaceConsumeConfigFlowBindsList",
    },
    functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_unacked_messages: {
      value: cdktf.numberToHclTerraform(struct!.maxUnackedMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.numberToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceConsumeConfigFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeConfigFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackMode = this._ackMode;
    }
    if (this._binds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binds = this._binds?.internalValue;
    }
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    if (this._maxUnackedMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnackedMessages = this._maxUnackedMessages;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceConsumeConfigFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackMode = undefined;
      this._binds.internalValue = undefined;
      this._functions = undefined;
      this._maxUnackedMessages = undefined;
      this._properties = undefined;
      this._selector = undefined;
      this._waitTimeout = undefined;
      this._windowSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackMode = value.ackMode;
      this._binds.internalValue = value.binds;
      this._functions = value.functions;
      this._maxUnackedMessages = value.maxUnackedMessages;
      this._properties = value.properties;
      this._selector = value.selector;
      this._waitTimeout = value.waitTimeout;
      this._windowSize = value.windowSize;
    }
  }

  // ack_mode - computed: true, optional: true, required: false
  private _ackMode?: string; 
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }
  public set ackMode(value: string) {
    this._ackMode = value;
  }
  public resetAckMode() {
    this._ackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackModeInput() {
    return this._ackMode;
  }

  // binds - computed: false, optional: false, required: true
  private _binds = new GatewayPluginSolaceConsumeConfigFlowBindsList(this, "binds", false);
  public get binds() {
    return this._binds;
  }
  public putBinds(value: GatewayPluginSolaceConsumeConfigFlowBinds[] | cdktf.IResolvable) {
    this._binds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindsInput() {
    return this._binds.internalValue;
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

  // max_unacked_messages - computed: true, optional: true, required: false
  private _maxUnackedMessages?: number; 
  public get maxUnackedMessages() {
    return this.getNumberAttribute('max_unacked_messages');
  }
  public set maxUnackedMessages(value: number) {
    this._maxUnackedMessages = value;
  }
  public resetMaxUnackedMessages() {
    this._maxUnackedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnackedMessagesInput() {
    return this._maxUnackedMessages;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // window_size - computed: true, optional: true, required: false
  private _windowSize?: number; 
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
  public set windowSize(value: number) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface GatewayPluginSolaceConsumeConfigPolling {
  /**
  * Polling timeout in milliseconds. When set to `0`, the polling works like short-polling and waits at maximum the Flow `wait_timeout` amount of time for the new messages (short-polling). When set to larger than `0`, the connection is kept open and only closed after the timeout or in case messages appear earlier (long-polling). Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#timeout GatewayPluginSolaceConsume#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginSolaceConsumeConfigPollingToTerraform(struct?: GatewayPluginSolaceConsumeConfigPolling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function gatewayPluginSolaceConsumeConfigPollingToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigPolling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GatewayPluginSolaceConsumeConfigPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeConfigPolling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceConsumeConfigPolling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
    }
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
export interface GatewayPluginSolaceConsumeConfigSessionAuthentication {
  /**
  * The OAuth2 access token used with `OAUTH2` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#access_token GatewayPluginSolaceConsume#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#access_token_header GatewayPluginSolaceConsume#access_token_header}
  */
  readonly accessTokenHeader?: string;
  /**
  * The OpenID Connect ID token used with `OAUTH2` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#id_token GatewayPluginSolaceConsume#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#id_token_header GatewayPluginSolaceConsume#id_token_header}
  */
  readonly idTokenHeader?: string;
  /**
  * The password used with `BASIC` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#password GatewayPluginSolaceConsume#password}
  */
  readonly password?: string;
  /**
  * The client authentication scheme used when connection to an event broker. Default: "BASIC"; must be one of ["BASIC", "NONE", "OAUTH2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#scheme GatewayPluginSolaceConsume#scheme}
  */
  readonly scheme?: string;
  /**
  * The username used with `BASIC` authentication scheme when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#username GatewayPluginSolaceConsume#username}
  */
  readonly username?: string;
}

export function gatewayPluginSolaceConsumeConfigSessionAuthenticationToTerraform(struct?: GatewayPluginSolaceConsumeConfigSessionAuthentication | cdktf.IResolvable): any {
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


export function gatewayPluginSolaceConsumeConfigSessionAuthenticationToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigSessionAuthentication | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumeConfigSessionAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeConfigSessionAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeConfigSessionAuthentication | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceConsumeConfigSession {
  /**
  * Session authentication related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#authentication GatewayPluginSolaceConsume#authentication}
  */
  readonly authentication?: GatewayPluginSolaceConsumeConfigSessionAuthentication;
  /**
  * If this property is true and time-to-live has a positive value in a message, the expiration time is calculated when the message is sent or received. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#calculate_message_expiry GatewayPluginSolaceConsume#calculate_message_expiry}
  */
  readonly calculateMessageExpiry?: boolean | cdktf.IResolvable;
  /**
  * The timeout period (in milliseconds) for a connect operation to a given host (per host). Default: 3000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#connect_timeout GatewayPluginSolaceConsume#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * When enabled, a receive timestamp is recorded for each message. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#generate_rcv_timestamps GatewayPluginSolaceConsume#generate_rcv_timestamps}
  */
  readonly generateRcvTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a send timestamp is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#generate_send_timestamps GatewayPluginSolaceConsume#generate_send_timestamps}
  */
  readonly generateSendTimestamps?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a sender id is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#generate_sender_id GatewayPluginSolaceConsume#generate_sender_id}
  */
  readonly generateSenderId?: boolean | cdktf.IResolvable;
  /**
  * When enabled, a sequence number is automatically included (if not already present) in the Solace-defined fields for each message sent. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#generate_sequence_number GatewayPluginSolaceConsume#generate_sequence_number}
  */
  readonly generateSequenceNumber?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 or IPv6 address or host name to connect to (see: https://docs.solace.com/API-Developer-Online-Ref-Documentation/c/index.html#host-entry).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#host GatewayPluginSolaceConsume#host}
  */
  readonly host: string;
  /**
  * Additional Solace session properties (each setting needs to have `SESSION_` prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#properties GatewayPluginSolaceConsume#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Indicates whether the API should validate server certificates with the trusted certificates. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#ssl_validate_certificate GatewayPluginSolaceConsume#ssl_validate_certificate}
  */
  readonly sslValidateCertificate?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN to attempt to join when connecting to an event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#vpn_name GatewayPluginSolaceConsume#vpn_name}
  */
  readonly vpnName?: string;
}

export function gatewayPluginSolaceConsumeConfigSessionToTerraform(struct?: GatewayPluginSolaceConsumeConfigSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginSolaceConsumeConfigSessionAuthenticationToTerraform(struct!.authentication),
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


export function gatewayPluginSolaceConsumeConfigSessionToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginSolaceConsumeConfigSessionAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeConfigSessionAuthentication",
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

export class GatewayPluginSolaceConsumeConfigSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeConfigSession | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeConfigSession | cdktf.IResolvable | undefined) {
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
  private _authentication = new GatewayPluginSolaceConsumeConfigSessionAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginSolaceConsumeConfigSessionAuthentication) {
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
export interface GatewayPluginSolaceConsumeConfigWebsocket {
  /**
  * Specifies the maximal length of payload allowed when receiving WebSocket frames. Default: 65536
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#max_recv_len GatewayPluginSolaceConsume#max_recv_len}
  */
  readonly maxRecvLen?: number;
  /**
  * Specifies the maximal length of payload allowed when sending WebSocket frames. Default: 65536
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#max_send_len GatewayPluginSolaceConsume#max_send_len}
  */
  readonly maxSendLen?: number;
  /**
  * Specifies the network timeout threshold in milliseconds. Default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#timeout GatewayPluginSolaceConsume#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginSolaceConsumeConfigWebsocketToTerraform(struct?: GatewayPluginSolaceConsumeConfigWebsocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_recv_len: cdktf.numberToTerraform(struct!.maxRecvLen),
    max_send_len: cdktf.numberToTerraform(struct!.maxSendLen),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function gatewayPluginSolaceConsumeConfigWebsocketToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigWebsocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_recv_len: {
      value: cdktf.numberToHclTerraform(struct!.maxRecvLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_send_len: {
      value: cdktf.numberToHclTerraform(struct!.maxSendLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GatewayPluginSolaceConsumeConfigWebsocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeConfigWebsocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRecvLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRecvLen = this._maxRecvLen;
    }
    if (this._maxSendLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSendLen = this._maxSendLen;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceConsumeConfigWebsocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRecvLen = undefined;
      this._maxSendLen = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRecvLen = value.maxRecvLen;
      this._maxSendLen = value.maxSendLen;
      this._timeout = value.timeout;
    }
  }

  // max_recv_len - computed: true, optional: true, required: false
  private _maxRecvLen?: number; 
  public get maxRecvLen() {
    return this.getNumberAttribute('max_recv_len');
  }
  public set maxRecvLen(value: number) {
    this._maxRecvLen = value;
  }
  public resetMaxRecvLen() {
    this._maxRecvLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecvLenInput() {
    return this._maxRecvLen;
  }

  // max_send_len - computed: true, optional: true, required: false
  private _maxSendLen?: number; 
  public get maxSendLen() {
    return this.getNumberAttribute('max_send_len');
  }
  public set maxSendLen(value: number) {
    this._maxSendLen = value;
  }
  public resetMaxSendLen() {
    this._maxSendLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSendLenInput() {
    return this._maxSendLen;
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
export interface GatewayPluginSolaceConsumeConfigA {
  /**
  * The flow related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#flow GatewayPluginSolaceConsume#flow}
  */
  readonly flow: GatewayPluginSolaceConsumeConfigFlow;
  /**
  * The mode of operation for the plugin. The `AUTO` determines the mode automatically from the client request. Default: "POLLING"; must be one of ["AUTO", "POLLING", "SERVER-SENT-EVENTS", "WEBSOCKET"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#mode GatewayPluginSolaceConsume#mode}
  */
  readonly mode?: string;
  /**
  * The `POLLING` mode related configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#polling GatewayPluginSolaceConsume#polling}
  */
  readonly polling?: GatewayPluginSolaceConsumeConfigPolling;
  /**
  * Session related configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#session GatewayPluginSolaceConsume#session}
  */
  readonly session: GatewayPluginSolaceConsumeConfigSession;
  /**
  * The `WEBSOCKET` mode related configuration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#websocket GatewayPluginSolaceConsume#websocket}
  */
  readonly websocket?: GatewayPluginSolaceConsumeConfigWebsocket;
}

export function gatewayPluginSolaceConsumeConfigAToTerraform(struct?: GatewayPluginSolaceConsumeConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow: gatewayPluginSolaceConsumeConfigFlowToTerraform(struct!.flow),
    mode: cdktf.stringToTerraform(struct!.mode),
    polling: gatewayPluginSolaceConsumeConfigPollingToTerraform(struct!.polling),
    session: gatewayPluginSolaceConsumeConfigSessionToTerraform(struct!.session),
    websocket: gatewayPluginSolaceConsumeConfigWebsocketToTerraform(struct!.websocket),
  }
}


export function gatewayPluginSolaceConsumeConfigAToHclTerraform(struct?: GatewayPluginSolaceConsumeConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow: {
      value: gatewayPluginSolaceConsumeConfigFlowToHclTerraform(struct!.flow),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeConfigFlow",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polling: {
      value: gatewayPluginSolaceConsumeConfigPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeConfigPolling",
    },
    session: {
      value: gatewayPluginSolaceConsumeConfigSessionToHclTerraform(struct!.session),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeConfigSession",
    },
    websocket: {
      value: gatewayPluginSolaceConsumeConfigWebsocketToHclTerraform(struct!.websocket),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeConfigWebsocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceConsumeConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flow = this._flow?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    if (this._session?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session?.internalValue;
    }
    if (this._websocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocket = this._websocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSolaceConsumeConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flow.internalValue = undefined;
      this._mode = undefined;
      this._polling.internalValue = undefined;
      this._session.internalValue = undefined;
      this._websocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flow.internalValue = value.flow;
      this._mode = value.mode;
      this._polling.internalValue = value.polling;
      this._session.internalValue = value.session;
      this._websocket.internalValue = value.websocket;
    }
  }

  // flow - computed: false, optional: false, required: true
  private _flow = new GatewayPluginSolaceConsumeConfigFlowOutputReference(this, "flow");
  public get flow() {
    return this._flow;
  }
  public putFlow(value: GatewayPluginSolaceConsumeConfigFlow) {
    this._flow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow.internalValue;
  }

  // mode - computed: true, optional: true, required: false
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

  // polling - computed: true, optional: true, required: false
  private _polling = new GatewayPluginSolaceConsumeConfigPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: GatewayPluginSolaceConsumeConfigPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }

  // session - computed: false, optional: false, required: true
  private _session = new GatewayPluginSolaceConsumeConfigSessionOutputReference(this, "session");
  public get session() {
    return this._session;
  }
  public putSession(value: GatewayPluginSolaceConsumeConfigSession) {
    this._session.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session.internalValue;
  }

  // websocket - computed: true, optional: true, required: false
  private _websocket = new GatewayPluginSolaceConsumeConfigWebsocketOutputReference(this, "websocket");
  public get websocket() {
    return this._websocket;
  }
  public putWebsocket(value: GatewayPluginSolaceConsumeConfigWebsocket) {
    this._websocket.internalValue = value;
  }
  public resetWebsocket() {
    this._websocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket.internalValue;
  }
}
export interface GatewayPluginSolaceConsumeOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#access GatewayPluginSolaceConsume#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSolaceConsumeOrderingAfterToTerraform(struct?: GatewayPluginSolaceConsumeOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSolaceConsumeOrderingAfterToHclTerraform(struct?: GatewayPluginSolaceConsumeOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumeOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceConsumeOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#access GatewayPluginSolaceConsume#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSolaceConsumeOrderingBeforeToTerraform(struct?: GatewayPluginSolaceConsumeOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSolaceConsumeOrderingBeforeToHclTerraform(struct?: GatewayPluginSolaceConsumeOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumeOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceConsumeOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#after GatewayPluginSolaceConsume#after}
  */
  readonly after?: GatewayPluginSolaceConsumeOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#before GatewayPluginSolaceConsume#before}
  */
  readonly before?: GatewayPluginSolaceConsumeOrderingBefore;
}

export function gatewayPluginSolaceConsumeOrderingToTerraform(struct?: GatewayPluginSolaceConsumeOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginSolaceConsumeOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginSolaceConsumeOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginSolaceConsumeOrderingToHclTerraform(struct?: GatewayPluginSolaceConsumeOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginSolaceConsumeOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeOrderingAfter",
    },
    before: {
      value: gatewayPluginSolaceConsumeOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSolaceConsumeOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSolaceConsumeOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginSolaceConsumeOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginSolaceConsumeOrderingAfter) {
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
  private _before = new GatewayPluginSolaceConsumeOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginSolaceConsumeOrderingBefore) {
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
export interface GatewayPluginSolaceConsumePartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#id GatewayPluginSolaceConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#name GatewayPluginSolaceConsume#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#path GatewayPluginSolaceConsume#path}
  */
  readonly path?: string;
}

export function gatewayPluginSolaceConsumePartialsToTerraform(struct?: GatewayPluginSolaceConsumePartials | cdktf.IResolvable): any {
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


export function gatewayPluginSolaceConsumePartialsToHclTerraform(struct?: GatewayPluginSolaceConsumePartials | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumePartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSolaceConsumePartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumePartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSolaceConsumePartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSolaceConsumePartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSolaceConsumePartialsOutputReference {
    return new GatewayPluginSolaceConsumePartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSolaceConsumeRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#id GatewayPluginSolaceConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSolaceConsumeRouteToTerraform(struct?: GatewayPluginSolaceConsumeRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSolaceConsumeRouteToHclTerraform(struct?: GatewayPluginSolaceConsumeRoute | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumeRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSolaceConsumeService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#id GatewayPluginSolaceConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSolaceConsumeServiceToTerraform(struct?: GatewayPluginSolaceConsumeService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSolaceConsumeServiceToHclTerraform(struct?: GatewayPluginSolaceConsumeService | cdktf.IResolvable): any {
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

export class GatewayPluginSolaceConsumeServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSolaceConsumeService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSolaceConsumeService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume konnect_gateway_plugin_solace_consume}
*/
export class GatewayPluginSolaceConsume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_solace_consume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginSolaceConsume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginSolaceConsume to import
  * @param importFromId The id of the existing GatewayPluginSolaceConsume that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginSolaceConsume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_solace_consume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_solace_consume konnect_gateway_plugin_solace_consume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginSolaceConsumeConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginSolaceConsumeConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_solace_consume',
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
  private _config = new GatewayPluginSolaceConsumeConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginSolaceConsumeConfigA) {
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
  private _ordering = new GatewayPluginSolaceConsumeOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginSolaceConsumeOrdering) {
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
  private _partials = new GatewayPluginSolaceConsumePartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginSolaceConsumePartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginSolaceConsumeRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginSolaceConsumeRoute) {
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
  private _service = new GatewayPluginSolaceConsumeServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginSolaceConsumeService) {
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
      config: gatewayPluginSolaceConsumeConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginSolaceConsumeOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginSolaceConsumePartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginSolaceConsumeRouteToTerraform(this._route.internalValue),
      service: gatewayPluginSolaceConsumeServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginSolaceConsumeConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceConsumeConfigA",
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
        value: gatewayPluginSolaceConsumeOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceConsumeOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginSolaceConsumePartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginSolaceConsumePartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginSolaceConsumeRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceConsumeRoute",
      },
      service: {
        value: gatewayPluginSolaceConsumeServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSolaceConsumeService",
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
