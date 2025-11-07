// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Ably application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#app_id RuleHttp#app_id}
  */
  readonly appId: string;
  /**
  * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint specified by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#request_mode RuleHttp#request_mode}
  */
  readonly requestMode?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#source RuleHttp#source}
  */
  readonly source: RuleHttpSource;
  /**
  * The status of the rule. Rules can be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#status RuleHttp#status}
  */
  readonly status?: string;
  /**
  * object (rule_source)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#target RuleHttp#target}
  */
  readonly target: RuleHttpTarget;
}
export interface RuleHttpSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#channel_filter RuleHttp#channel_filter}
  */
  readonly channelFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#type RuleHttp#type}
  */
  readonly type: string;
}

export function ruleHttpSourceToTerraform(struct?: RuleHttpSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_filter: cdktf.stringToTerraform(struct!.channelFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ruleHttpSourceToHclTerraform(struct?: RuleHttpSource | cdktf.IResolvable): any {
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

export class RuleHttpSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleHttpSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RuleHttpSource | cdktf.IResolvable | undefined) {
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
export interface RuleHttpTargetHeaders {
  /**
  * The name of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#name RuleHttp#name}
  */
  readonly name: string;
  /**
  * The value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#value RuleHttp#value}
  */
  readonly value: string;
}

export function ruleHttpTargetHeadersToTerraform(struct?: RuleHttpTargetHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ruleHttpTargetHeadersToHclTerraform(struct?: RuleHttpTargetHeaders | cdktf.IResolvable): any {
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

export class RuleHttpTargetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleHttpTargetHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RuleHttpTargetHeaders | cdktf.IResolvable | undefined) {
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

export class RuleHttpTargetHeadersList extends cdktf.ComplexList {
  public internalValue? : RuleHttpTargetHeaders[] | cdktf.IResolvable

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
  public get(index: number): RuleHttpTargetHeadersOutputReference {
    return new RuleHttpTargetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleHttpTarget {
  /**
  * Delivered messages are wrapped in an Ably envelope by default that contains metadata about the message and its payload. The form of the envelope depends on whether it is part of a Webhook/Function or a Queue/Firehose rule. For everything besides Webhooks, you can ensure you only get the raw payload by unchecking "Enveloped" when setting up the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#enveloped RuleHttp#enveloped}
  */
  readonly enveloped?: boolean | cdktf.IResolvable;
  /**
  * JSON provides a text-based encoding, whereas MsgPack provides a more efficient binary encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#format RuleHttp#format}
  */
  readonly format?: string;
  /**
  * If you have additional information to send, you'll need to include the relevant headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#headers RuleHttp#headers}
  */
  readonly headers?: RuleHttpTargetHeaders[] | cdktf.IResolvable;
  /**
  * The signing key ID for use in batch mode. Ably will optionally sign the payload using an API key ensuring your servers can validate the payload using the private API key. See the [webhook security docs](https://ably.com/docs/general/webhooks#security) for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#signing_key_id RuleHttp#signing_key_id}
  */
  readonly signingKeyId?: string;
  /**
  * The webhook URL that Ably will POST events to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#url RuleHttp#url}
  */
  readonly url: string;
}

export function ruleHttpTargetToTerraform(struct?: RuleHttpTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enveloped: cdktf.booleanToTerraform(struct!.enveloped),
    format: cdktf.stringToTerraform(struct!.format),
    headers: cdktf.listMapper(ruleHttpTargetHeadersToTerraform, false)(struct!.headers),
    signing_key_id: cdktf.stringToTerraform(struct!.signingKeyId),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ruleHttpTargetToHclTerraform(struct?: RuleHttpTarget | cdktf.IResolvable): any {
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
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(ruleHttpTargetHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "RuleHttpTargetHeadersList",
    },
    signing_key_id: {
      value: cdktf.stringToHclTerraform(struct!.signingKeyId),
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

export class RuleHttpTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleHttpTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enveloped !== undefined) {
      hasAnyValues = true;
      internalValueResult.enveloped = this._enveloped;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._signingKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKeyId = this._signingKeyId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleHttpTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enveloped = undefined;
      this._format = undefined;
      this._headers.internalValue = undefined;
      this._signingKeyId = undefined;
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
      this._format = value.format;
      this._headers.internalValue = value.headers;
      this._signingKeyId = value.signingKeyId;
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
  private _headers = new RuleHttpTargetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: RuleHttpTargetHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // signing_key_id - computed: false, optional: true, required: false
  private _signingKeyId?: string; 
  public get signingKeyId() {
    return this.getStringAttribute('signing_key_id');
  }
  public set signingKeyId(value: string) {
    this._signingKeyId = value;
  }
  public resetSigningKeyId() {
    this._signingKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyIdInput() {
    return this._signingKeyId;
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
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http ably_rule_http}
*/
export class RuleHttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_rule_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleHttp to import
  * @param importFromId The id of the existing RuleHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_rule_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/rule_http ably_rule_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleHttpConfig
  */
  public constructor(scope: Construct, id: string, config: RuleHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_rule_http',
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
  private _source = new RuleHttpSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RuleHttpSource) {
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
  private _target = new RuleHttpTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: RuleHttpTarget) {
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
      source: ruleHttpSourceToTerraform(this._source.internalValue),
      status: cdktf.stringToTerraform(this._status),
      target: ruleHttpTargetToTerraform(this._target.internalValue),
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
        value: ruleHttpSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RuleHttpSource",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: ruleHttpTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RuleHttpTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
