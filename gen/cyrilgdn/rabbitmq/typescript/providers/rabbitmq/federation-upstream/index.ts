// https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FederationUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#id FederationUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#name FederationUpstream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#vhost FederationUpstream#vhost}
  */
  readonly vhost: string;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#definition FederationUpstream#definition}
  */
  readonly definition: FederationUpstreamDefinition;
}
export interface FederationUpstreamDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#ack_mode FederationUpstream#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#exchange FederationUpstream#exchange}
  */
  readonly exchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#expires FederationUpstream#expires}
  */
  readonly expires?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#max_hops FederationUpstream#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#message_ttl FederationUpstream#message_ttl}
  */
  readonly messageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#prefetch_count FederationUpstream#prefetch_count}
  */
  readonly prefetchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#queue FederationUpstream#queue}
  */
  readonly queue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#reconnect_delay FederationUpstream#reconnect_delay}
  */
  readonly reconnectDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#trust_user_id FederationUpstream#trust_user_id}
  */
  readonly trustUserId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#uri FederationUpstream#uri}
  */
  readonly uri: string;
}

export function federationUpstreamDefinitionToTerraform(struct?: FederationUpstreamDefinitionOutputReference | FederationUpstreamDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_mode: cdktf.stringToTerraform(struct!.ackMode),
    exchange: cdktf.stringToTerraform(struct!.exchange),
    expires: cdktf.numberToTerraform(struct!.expires),
    max_hops: cdktf.numberToTerraform(struct!.maxHops),
    message_ttl: cdktf.numberToTerraform(struct!.messageTtl),
    prefetch_count: cdktf.numberToTerraform(struct!.prefetchCount),
    queue: cdktf.stringToTerraform(struct!.queue),
    reconnect_delay: cdktf.numberToTerraform(struct!.reconnectDelay),
    trust_user_id: cdktf.booleanToTerraform(struct!.trustUserId),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function federationUpstreamDefinitionToHclTerraform(struct?: FederationUpstreamDefinitionOutputReference | FederationUpstreamDefinition): any {
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
    exchange: {
      value: cdktf.stringToHclTerraform(struct!.exchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires: {
      value: cdktf.numberToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_hops: {
      value: cdktf.numberToHclTerraform(struct!.maxHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_ttl: {
      value: cdktf.numberToHclTerraform(struct!.messageTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefetch_count: {
      value: cdktf.numberToHclTerraform(struct!.prefetchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reconnect_delay: {
      value: cdktf.numberToHclTerraform(struct!.reconnectDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trust_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.trustUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FederationUpstreamDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FederationUpstreamDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackMode = this._ackMode;
    }
    if (this._exchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchange = this._exchange;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._maxHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHops = this._maxHops;
    }
    if (this._messageTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTtl = this._messageTtl;
    }
    if (this._prefetchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefetchCount = this._prefetchCount;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._reconnectDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconnectDelay = this._reconnectDelay;
    }
    if (this._trustUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustUserId = this._trustUserId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FederationUpstreamDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackMode = undefined;
      this._exchange = undefined;
      this._expires = undefined;
      this._maxHops = undefined;
      this._messageTtl = undefined;
      this._prefetchCount = undefined;
      this._queue = undefined;
      this._reconnectDelay = undefined;
      this._trustUserId = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackMode = value.ackMode;
      this._exchange = value.exchange;
      this._expires = value.expires;
      this._maxHops = value.maxHops;
      this._messageTtl = value.messageTtl;
      this._prefetchCount = value.prefetchCount;
      this._queue = value.queue;
      this._reconnectDelay = value.reconnectDelay;
      this._trustUserId = value.trustUserId;
      this._uri = value.uri;
    }
  }

  // ack_mode - computed: false, optional: true, required: false
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

  // exchange - computed: false, optional: true, required: false
  private _exchange?: string; 
  public get exchange() {
    return this.getStringAttribute('exchange');
  }
  public set exchange(value: string) {
    this._exchange = value;
  }
  public resetExchange() {
    this._exchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeInput() {
    return this._exchange;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: number; 
  public get expires() {
    return this.getNumberAttribute('expires');
  }
  public set expires(value: number) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // max_hops - computed: false, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
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

  // prefetch_count - computed: false, optional: true, required: false
  private _prefetchCount?: number; 
  public get prefetchCount() {
    return this.getNumberAttribute('prefetch_count');
  }
  public set prefetchCount(value: number) {
    this._prefetchCount = value;
  }
  public resetPrefetchCount() {
    this._prefetchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchCountInput() {
    return this._prefetchCount;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // reconnect_delay - computed: false, optional: true, required: false
  private _reconnectDelay?: number; 
  public get reconnectDelay() {
    return this.getNumberAttribute('reconnect_delay');
  }
  public set reconnectDelay(value: number) {
    this._reconnectDelay = value;
  }
  public resetReconnectDelay() {
    this._reconnectDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconnectDelayInput() {
    return this._reconnectDelay;
  }

  // trust_user_id - computed: false, optional: true, required: false
  private _trustUserId?: boolean | cdktf.IResolvable; 
  public get trustUserId() {
    return this.getBooleanAttribute('trust_user_id');
  }
  public set trustUserId(value: boolean | cdktf.IResolvable) {
    this._trustUserId = value;
  }
  public resetTrustUserId() {
    this._trustUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustUserIdInput() {
    return this._trustUserId;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream rabbitmq_federation_upstream}
*/
export class FederationUpstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rabbitmq_federation_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FederationUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FederationUpstream to import
  * @param importFromId The id of the existing FederationUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FederationUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rabbitmq_federation_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/federation_upstream rabbitmq_federation_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FederationUpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: FederationUpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'rabbitmq_federation_upstream',
      terraformGeneratorMetadata: {
        providerName: 'rabbitmq',
        providerVersion: '1.10.1',
        providerVersionConstraint: '1.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._vhost = config.vhost;
    this._definition.internalValue = config.definition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
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

  // vhost - computed: false, optional: false, required: true
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new FederationUpstreamDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: FederationUpstreamDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vhost: cdktf.stringToTerraform(this._vhost),
      definition: federationUpstreamDefinitionToTerraform(this._definition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition: {
        value: federationUpstreamDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FederationUpstreamDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
