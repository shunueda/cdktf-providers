// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulePulsarConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Ably application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#app_id RulePulsar#app_id}
  */
  readonly appId: string;
  /**
  * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#request_mode RulePulsar#request_mode}
  */
  readonly requestMode?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#source RulePulsar#source}
  */
  readonly source: RulePulsarSource;
  /**
  * The status of the rule. Rules can be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#status RulePulsar#status}
  */
  readonly status?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#target RulePulsar#target}
  */
  readonly target: RulePulsarTarget;
}
export interface RulePulsarSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#channel_filter RulePulsar#channel_filter}
  */
  readonly channelFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#type RulePulsar#type}
  */
  readonly type: string;
}

export function rulePulsarSourceToTerraform(struct?: RulePulsarSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_filter: cdktf.stringToTerraform(struct!.channelFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function rulePulsarSourceToHclTerraform(struct?: RulePulsarSource | cdktf.IResolvable): any {
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

export class RulePulsarSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RulePulsarSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RulePulsarSource | cdktf.IResolvable | undefined) {
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
export interface RulePulsarTargetAuthentication {
  /**
  * Authentication mode, in this case JSON Web Token. Use `jwt`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#mode RulePulsar#mode}
  */
  readonly mode: string;
  /**
  * The JWT string.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#token RulePulsar#token}
  */
  readonly token: string;
}

export function rulePulsarTargetAuthenticationToTerraform(struct?: RulePulsarTargetAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function rulePulsarTargetAuthenticationToHclTerraform(struct?: RulePulsarTargetAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulePulsarTargetAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RulePulsarTargetAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulePulsarTargetAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._token = value.token;
    }
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface RulePulsarTarget {
  /**
  * Pulsar supports authenticating clients using security tokens that are based on JSON Web Tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#authentication RulePulsar#authentication}
  */
  readonly authentication: RulePulsarTargetAuthentication;
  /**
  * Delivered messages are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#enveloped RulePulsar#enveloped}
  */
  readonly enveloped?: boolean | cdktf.IResolvable;
  /**
  * JSON provides a text-based encoding, whereas MsgPack provides a more efficient binary encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#format RulePulsar#format}
  */
  readonly format?: string;
  /**
  * The optional routing key (partition key) used to publish messages. Supports interpolation as described in the [Ably FAQs](https://faqs.ably.com/what-is-the-format-of-the-routingkey-for-an-amqp-or-kinesis-reactor-rule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#routing_key RulePulsar#routing_key}
  */
  readonly routingKey: string;
  /**
  * The URL of the Pulsar cluster in the form pulsar://host:port or pulsar+ssl://host:port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#service_url RulePulsar#service_url}
  */
  readonly serviceUrl: string;
  /**
  * All connections to a Pulsar endpoint require TLS. The tls_trust_certs option allows you to configure different or additional trust anchors for those TLS connections. This enables server verification. You can specify an optional list of trusted CA certificates to use to verify the TLS certificate presented by the Pulsar cluster. Each certificate should be encoded in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#tls_trust_certs RulePulsar#tls_trust_certs}
  */
  readonly tlsTrustCerts?: string[];
  /**
  * A Pulsar topic. This is a named channel for transmission of messages between producers and consumers. The topic has the form: {persistent|non-persistent}://tenant/namespace/topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#topic RulePulsar#topic}
  */
  readonly topic: string;
}

export function rulePulsarTargetToTerraform(struct?: RulePulsarTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: rulePulsarTargetAuthenticationToTerraform(struct!.authentication),
    enveloped: cdktf.booleanToTerraform(struct!.enveloped),
    format: cdktf.stringToTerraform(struct!.format),
    routing_key: cdktf.stringToTerraform(struct!.routingKey),
    service_url: cdktf.stringToTerraform(struct!.serviceUrl),
    tls_trust_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsTrustCerts),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function rulePulsarTargetToHclTerraform(struct?: RulePulsarTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: rulePulsarTargetAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "RulePulsarTargetAuthentication",
    },
    enveloped: {
      value: cdktf.booleanToHclTerraform(struct!.enveloped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_key: {
      value: cdktf.stringToHclTerraform(struct!.routingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_url: {
      value: cdktf.stringToHclTerraform(struct!.serviceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_trust_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsTrustCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulePulsarTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RulePulsarTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._enveloped !== undefined) {
      hasAnyValues = true;
      internalValueResult.enveloped = this._enveloped;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._serviceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUrl = this._serviceUrl;
    }
    if (this._tlsTrustCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTrustCerts = this._tlsTrustCerts;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulePulsarTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._enveloped = undefined;
      this._format = undefined;
      this._routingKey = undefined;
      this._serviceUrl = undefined;
      this._tlsTrustCerts = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._enveloped = value.enveloped;
      this._format = value.format;
      this._routingKey = value.routingKey;
      this._serviceUrl = value.serviceUrl;
      this._tlsTrustCerts = value.tlsTrustCerts;
      this._topic = value.topic;
    }
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new RulePulsarTargetAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: RulePulsarTargetAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
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

  // service_url - computed: false, optional: false, required: true
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }

  // tls_trust_certs - computed: false, optional: true, required: false
  private _tlsTrustCerts?: string[]; 
  public get tlsTrustCerts() {
    return this.getListAttribute('tls_trust_certs');
  }
  public set tlsTrustCerts(value: string[]) {
    this._tlsTrustCerts = value;
  }
  public resetTlsTrustCerts() {
    this._tlsTrustCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTrustCertsInput() {
    return this._tlsTrustCerts;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar ably_rule_pulsar}
*/
export class RulePulsar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_rule_pulsar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RulePulsar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RulePulsar to import
  * @param importFromId The id of the existing RulePulsar that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RulePulsar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_rule_pulsar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_pulsar ably_rule_pulsar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulePulsarConfig
  */
  public constructor(scope: Construct, id: string, config: RulePulsarConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_rule_pulsar',
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
  private _source = new RulePulsarSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RulePulsarSource) {
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
  private _target = new RulePulsarTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: RulePulsarTarget) {
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
      source: rulePulsarSourceToTerraform(this._source.internalValue),
      status: cdktf.stringToTerraform(this._status),
      target: rulePulsarTargetToTerraform(this._target.internalValue),
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
        value: rulePulsarSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RulePulsarSource",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: rulePulsarTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RulePulsarTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
