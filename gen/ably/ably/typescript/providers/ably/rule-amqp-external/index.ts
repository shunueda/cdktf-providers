// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleAmqpExternalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Ably application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#app_id RuleAmqpExternal#app_id}
  */
  readonly appId: string;
  /**
  * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#request_mode RuleAmqpExternal#request_mode}
  */
  readonly requestMode?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#source RuleAmqpExternal#source}
  */
  readonly source: RuleAmqpExternalSource;
  /**
  * The status of the rule. Rules can be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#status RuleAmqpExternal#status}
  */
  readonly status?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#target RuleAmqpExternal#target}
  */
  readonly target: RuleAmqpExternalTarget;
}
export interface RuleAmqpExternalSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#channel_filter RuleAmqpExternal#channel_filter}
  */
  readonly channelFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#type RuleAmqpExternal#type}
  */
  readonly type: string;
}

export function ruleAmqpExternalSourceToTerraform(struct?: RuleAmqpExternalSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_filter: cdktf.stringToTerraform(struct!.channelFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ruleAmqpExternalSourceToHclTerraform(struct?: RuleAmqpExternalSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_filter: {
      value: cdktf.stringToHclTerraform(struct!.channelFilter),
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

export class RuleAmqpExternalSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleAmqpExternalSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelFilter = this._channelFilter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleAmqpExternalSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelFilter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelFilter = value.channelFilter;
      this._type = value.type;
    }
  }

  // channel_filter - computed: false, optional: true, required: false
  private _channelFilter?: string; 
  public get channelFilter() {
    return this.getStringAttribute('channel_filter');
  }
  public set channelFilter(value: string) {
    this._channelFilter = value;
  }
  public resetChannelFilter() {
    this._channelFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelFilterInput() {
    return this._channelFilter;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface RuleAmqpExternalTargetHeaders {
  /**
  * The name of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#name RuleAmqpExternal#name}
  */
  readonly name: string;
  /**
  * The value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#value RuleAmqpExternal#value}
  */
  readonly value: string;
}

export function ruleAmqpExternalTargetHeadersToTerraform(struct?: RuleAmqpExternalTargetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ruleAmqpExternalTargetHeadersToHclTerraform(struct?: RuleAmqpExternalTargetHeaders | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleAmqpExternalTargetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleAmqpExternalTargetHeaders | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleAmqpExternalTargetHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RuleAmqpExternalTargetHeadersList extends cdktf.ComplexList {
  public internalValue? : RuleAmqpExternalTargetHeaders[] | cdktf.IResolvable

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
  public get(index: number): RuleAmqpExternalTargetHeadersOutputReference {
    return new RuleAmqpExternalTargetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleAmqpExternalTarget {
  /**
  * Delivered messages are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#enveloped RuleAmqpExternal#enveloped}
  */
  readonly enveloped?: boolean | cdktf.IResolvable;
  /**
  * The RabbitMQ exchange, if needed, supports interpolation; see https://faqs.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule for more info. If you don't use RabbitMQ exchanges, leave this blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#exchange RuleAmqpExternal#exchange}
  */
  readonly exchange: string;
  /**
  * JSON provides a text-based encoding, whereas MsgPack provides a more efficient binary encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#format RuleAmqpExternal#format}
  */
  readonly format?: string;
  /**
  * If you have additional information to send, you'll need to include the relevant headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#headers RuleAmqpExternal#headers}
  */
  readonly headers?: RuleAmqpExternalTargetHeaders[] | cdktf.IResolvable;
  /**
  * Reject delivery of the message if the route does not exist, otherwise fail silently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#mandatory_route RuleAmqpExternal#mandatory_route}
  */
  readonly mandatoryRoute: boolean | cdktf.IResolvable;
  /**
  * You can optionally override the default TTL on a queue and specify a TTL in minutes for messages to be persisted. It is unusual to change the default TTL, so if this field is left empty, the default TTL for the queue will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#message_ttl RuleAmqpExternal#message_ttl}
  */
  readonly messageTtl?: number;
  /**
  * Marks the message as persistent, instructing the broker to write it to disk if it is in a durable queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#persistent_messages RuleAmqpExternal#persistent_messages}
  */
  readonly persistentMessages: boolean | cdktf.IResolvable;
  /**
  * The Kafka partition key. This is used to determine which partition a message should be routed to, where a topic has been partitioned. routingKey should be in the format topic:key where topic is the topic to publish to, and key is the value to use as the message key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#routing_key RuleAmqpExternal#routing_key}
  */
  readonly routingKey: string;
  /**
  * The webhook URL that Ably will POST events to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#url RuleAmqpExternal#url}
  */
  readonly url: string;
}

export function ruleAmqpExternalTargetToTerraform(struct?: RuleAmqpExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enveloped: cdktf.booleanToTerraform(struct!.enveloped),
    exchange: cdktf.stringToTerraform(struct!.exchange),
    format: cdktf.stringToTerraform(struct!.format),
    headers: cdktf.listMapper(ruleAmqpExternalTargetHeadersToTerraform, false)(struct!.headers),
    mandatory_route: cdktf.booleanToTerraform(struct!.mandatoryRoute),
    message_ttl: cdktf.numberToTerraform(struct!.messageTtl),
    persistent_messages: cdktf.booleanToTerraform(struct!.persistentMessages),
    routing_key: cdktf.stringToTerraform(struct!.routingKey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ruleAmqpExternalTargetToHclTerraform(struct?: RuleAmqpExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enveloped: {
      value: cdktf.booleanToHclTerraform(struct!.enveloped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exchange: {
      value: cdktf.stringToHclTerraform(struct!.exchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(ruleAmqpExternalTargetHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "RuleAmqpExternalTargetHeadersList",
    },
    mandatory_route: {
      value: cdktf.booleanToHclTerraform(struct!.mandatoryRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_ttl: {
      value: cdktf.numberToHclTerraform(struct!.messageTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_messages: {
      value: cdktf.booleanToHclTerraform(struct!.persistentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_key: {
      value: cdktf.stringToHclTerraform(struct!.routingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RuleAmqpExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleAmqpExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enveloped !== undefined) {
      hasAnyValues = true;
      internalValueResult.enveloped = this._enveloped;
    }
    if (this._exchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchange = this._exchange;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._mandatoryRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryRoute = this._mandatoryRoute;
    }
    if (this._messageTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTtl = this._messageTtl;
    }
    if (this._persistentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentMessages = this._persistentMessages;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleAmqpExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enveloped = undefined;
      this._exchange = undefined;
      this._format = undefined;
      this._headers.internalValue = undefined;
      this._mandatoryRoute = undefined;
      this._messageTtl = undefined;
      this._persistentMessages = undefined;
      this._routingKey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enveloped = value.enveloped;
      this._exchange = value.exchange;
      this._format = value.format;
      this._headers.internalValue = value.headers;
      this._mandatoryRoute = value.mandatoryRoute;
      this._messageTtl = value.messageTtl;
      this._persistentMessages = value.persistentMessages;
      this._routingKey = value.routingKey;
      this._url = value.url;
    }
  }

  // enveloped - computed: true, optional: true, required: false
  private _enveloped?: boolean | cdktf.IResolvable; 
  public get enveloped() {
    return this.getBooleanAttribute('enveloped');
  }
  public set enveloped(value: boolean | cdktf.IResolvable) {
    this._enveloped = value;
  }
  public resetEnveloped() {
    this._enveloped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envelopedInput() {
    return this._enveloped;
  }

  // exchange - computed: false, optional: false, required: true
  private _exchange?: string; 
  public get exchange() {
    return this.getStringAttribute('exchange');
  }
  public set exchange(value: string) {
    this._exchange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeInput() {
    return this._exchange;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new RuleAmqpExternalTargetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: RuleAmqpExternalTargetHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // mandatory_route - computed: false, optional: false, required: true
  private _mandatoryRoute?: boolean | cdktf.IResolvable; 
  public get mandatoryRoute() {
    return this.getBooleanAttribute('mandatory_route');
  }
  public set mandatoryRoute(value: boolean | cdktf.IResolvable) {
    this._mandatoryRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryRouteInput() {
    return this._mandatoryRoute;
  }

  // message_ttl - computed: false, optional: true, required: false
  private _messageTtl?: number; 
  public get messageTtl() {
    return this.getNumberAttribute('message_ttl');
  }
  public set messageTtl(value: number) {
    this._messageTtl = value;
  }
  public resetMessageTtl() {
    this._messageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTtlInput() {
    return this._messageTtl;
  }

  // persistent_messages - computed: false, optional: false, required: true
  private _persistentMessages?: boolean | cdktf.IResolvable; 
  public get persistentMessages() {
    return this.getBooleanAttribute('persistent_messages');
  }
  public set persistentMessages(value: boolean | cdktf.IResolvable) {
    this._persistentMessages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentMessagesInput() {
    return this._persistentMessages;
  }

  // routing_key - computed: false, optional: false, required: true
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external ably_rule_amqp_external}
*/
export class RuleAmqpExternal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_rule_amqp_external";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleAmqpExternal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleAmqpExternal to import
  * @param importFromId The id of the existing RuleAmqpExternal that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleAmqpExternal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_rule_amqp_external", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_amqp_external ably_rule_amqp_external} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleAmqpExternalConfig
  */
  public constructor(scope: Construct, id: string, config: RuleAmqpExternalConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_rule_amqp_external',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._requestMode = config.requestMode;
    this._source.internalValue = config.source;
    this._status = config.status;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // request_mode - computed: true, optional: true, required: false
  private _requestMode?: string; 
  public get requestMode() {
    return this.getStringAttribute('request_mode');
  }
  public set requestMode(value: string) {
    this._requestMode = value;
  }
  public resetRequestMode() {
    this._requestMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModeInput() {
    return this._requestMode;
  }

  // source - computed: false, optional: false, required: true
  private _source = new RuleAmqpExternalSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RuleAmqpExternalSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // status - computed: false, optional: true, required: false
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

  // target - computed: false, optional: false, required: true
  private _target = new RuleAmqpExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: RuleAmqpExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      request_mode: cdktf.stringToTerraform(this._requestMode),
      source: ruleAmqpExternalSourceToTerraform(this._source.internalValue),
      status: cdktf.stringToTerraform(this._status),
      target: ruleAmqpExternalTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_mode: {
        value: cdktf.stringToHclTerraform(this._requestMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: ruleAmqpExternalSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RuleAmqpExternalSource",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: ruleAmqpExternalTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RuleAmqpExternalTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
