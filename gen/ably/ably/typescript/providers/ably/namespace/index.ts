// https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#app_id Namespace#app_id}
  */
  readonly appId: string;
  /**
  * Require clients to be authenticated to use channels in this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#authenticated Namespace#authenticated}
  */
  readonly authenticated?: boolean | cdktf.IResolvable;
  /**
  * If true, channels within this namespace will start batching inbound messages instead of sending them out immediately to subscribers as per the configured policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#batching_enabled Namespace#batching_enabled}
  */
  readonly batchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * When configured, sets the maximium batching interval in the channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#batching_interval Namespace#batching_interval}
  */
  readonly batchingInterval?: number;
  /**
  * If true, enables conflation for channels within this namespace. Conflation reduces the number of messages sent to subscribers by combining multiple messages into a single message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#conflation_enabled Namespace#conflation_enabled}
  */
  readonly conflationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval in milliseconds at which messages are conflated. This determines how frequently messages are combined into a single message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#conflation_interval Namespace#conflation_interval}
  */
  readonly conflationInterval?: number;
  /**
  * The key used to determine which messages should be conflated. Messages with the same conflation key will be combined into a single message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#conflation_key Namespace#conflation_key}
  */
  readonly conflationKey?: string;
  /**
  * If true, messages received on a channel will contain a unique timeserial that can be referenced by later messages for use with message interactions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#expose_timeserial Namespace#expose_timeserial}
  */
  readonly exposeTimeserial?: boolean | cdktf.IResolvable;
  /**
  * The namespace or channel name that the channel rule will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * If true, the last message on each channel will persist for 365 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#persist_last Namespace#persist_last}
  */
  readonly persistLast?: boolean | cdktf.IResolvable;
  /**
  * If true, messages will be stored for 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#persisted Namespace#persisted}
  */
  readonly persisted?: boolean | cdktf.IResolvable;
  /**
  * If true, publishing messages with a push payload in the extras field is permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#push_enabled Namespace#push_enabled}
  */
  readonly pushEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, only clients that are connected using TLS will be permitted to subscribe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#tls_only Namespace#tls_only}
  */
  readonly tlsOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace ably_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ably_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ably_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ably/ably/0.11.1/docs/resources/namespace ably_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'ably_namespace',
      terraformGeneratorMetadata: {
        providerName: 'ably',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
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
    this._authenticated = config.authenticated;
    this._batchingEnabled = config.batchingEnabled;
    this._batchingInterval = config.batchingInterval;
    this._conflationEnabled = config.conflationEnabled;
    this._conflationInterval = config.conflationInterval;
    this._conflationKey = config.conflationKey;
    this._exposeTimeserial = config.exposeTimeserial;
    this._id = config.id;
    this._persistLast = config.persistLast;
    this._persisted = config.persisted;
    this._pushEnabled = config.pushEnabled;
    this._tlsOnly = config.tlsOnly;
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

  // authenticated - computed: true, optional: true, required: false
  private _authenticated?: boolean | cdktf.IResolvable; 
  public get authenticated() {
    return this.getBooleanAttribute('authenticated');
  }
  public set authenticated(value: boolean | cdktf.IResolvable) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // batching_enabled - computed: true, optional: true, required: false
  private _batchingEnabled?: boolean | cdktf.IResolvable; 
  public get batchingEnabled() {
    return this.getBooleanAttribute('batching_enabled');
  }
  public set batchingEnabled(value: boolean | cdktf.IResolvable) {
    this._batchingEnabled = value;
  }
  public resetBatchingEnabled() {
    this._batchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingEnabledInput() {
    return this._batchingEnabled;
  }

  // batching_interval - computed: true, optional: true, required: false
  private _batchingInterval?: number; 
  public get batchingInterval() {
    return this.getNumberAttribute('batching_interval');
  }
  public set batchingInterval(value: number) {
    this._batchingInterval = value;
  }
  public resetBatchingInterval() {
    this._batchingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingIntervalInput() {
    return this._batchingInterval;
  }

  // conflation_enabled - computed: true, optional: true, required: false
  private _conflationEnabled?: boolean | cdktf.IResolvable; 
  public get conflationEnabled() {
    return this.getBooleanAttribute('conflation_enabled');
  }
  public set conflationEnabled(value: boolean | cdktf.IResolvable) {
    this._conflationEnabled = value;
  }
  public resetConflationEnabled() {
    this._conflationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflationEnabledInput() {
    return this._conflationEnabled;
  }

  // conflation_interval - computed: true, optional: true, required: false
  private _conflationInterval?: number; 
  public get conflationInterval() {
    return this.getNumberAttribute('conflation_interval');
  }
  public set conflationInterval(value: number) {
    this._conflationInterval = value;
  }
  public resetConflationInterval() {
    this._conflationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflationIntervalInput() {
    return this._conflationInterval;
  }

  // conflation_key - computed: true, optional: true, required: false
  private _conflationKey?: string; 
  public get conflationKey() {
    return this.getStringAttribute('conflation_key');
  }
  public set conflationKey(value: string) {
    this._conflationKey = value;
  }
  public resetConflationKey() {
    this._conflationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflationKeyInput() {
    return this._conflationKey;
  }

  // expose_timeserial - computed: true, optional: true, required: false
  private _exposeTimeserial?: boolean | cdktf.IResolvable; 
  public get exposeTimeserial() {
    return this.getBooleanAttribute('expose_timeserial');
  }
  public set exposeTimeserial(value: boolean | cdktf.IResolvable) {
    this._exposeTimeserial = value;
  }
  public resetExposeTimeserial() {
    this._exposeTimeserial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeTimeserialInput() {
    return this._exposeTimeserial;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // persist_last - computed: true, optional: true, required: false
  private _persistLast?: boolean | cdktf.IResolvable; 
  public get persistLast() {
    return this.getBooleanAttribute('persist_last');
  }
  public set persistLast(value: boolean | cdktf.IResolvable) {
    this._persistLast = value;
  }
  public resetPersistLast() {
    this._persistLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistLastInput() {
    return this._persistLast;
  }

  // persisted - computed: true, optional: true, required: false
  private _persisted?: boolean | cdktf.IResolvable; 
  public get persisted() {
    return this.getBooleanAttribute('persisted');
  }
  public set persisted(value: boolean | cdktf.IResolvable) {
    this._persisted = value;
  }
  public resetPersisted() {
    this._persisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistedInput() {
    return this._persisted;
  }

  // push_enabled - computed: true, optional: true, required: false
  private _pushEnabled?: boolean | cdktf.IResolvable; 
  public get pushEnabled() {
    return this.getBooleanAttribute('push_enabled');
  }
  public set pushEnabled(value: boolean | cdktf.IResolvable) {
    this._pushEnabled = value;
  }
  public resetPushEnabled() {
    this._pushEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEnabledInput() {
    return this._pushEnabled;
  }

  // tls_only - computed: true, optional: true, required: false
  private _tlsOnly?: boolean | cdktf.IResolvable; 
  public get tlsOnly() {
    return this.getBooleanAttribute('tls_only');
  }
  public set tlsOnly(value: boolean | cdktf.IResolvable) {
    this._tlsOnly = value;
  }
  public resetTlsOnly() {
    this._tlsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOnlyInput() {
    return this._tlsOnly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      authenticated: cdktf.booleanToTerraform(this._authenticated),
      batching_enabled: cdktf.booleanToTerraform(this._batchingEnabled),
      batching_interval: cdktf.numberToTerraform(this._batchingInterval),
      conflation_enabled: cdktf.booleanToTerraform(this._conflationEnabled),
      conflation_interval: cdktf.numberToTerraform(this._conflationInterval),
      conflation_key: cdktf.stringToTerraform(this._conflationKey),
      expose_timeserial: cdktf.booleanToTerraform(this._exposeTimeserial),
      id: cdktf.stringToTerraform(this._id),
      persist_last: cdktf.booleanToTerraform(this._persistLast),
      persisted: cdktf.booleanToTerraform(this._persisted),
      push_enabled: cdktf.booleanToTerraform(this._pushEnabled),
      tls_only: cdktf.booleanToTerraform(this._tlsOnly),
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
      authenticated: {
        value: cdktf.booleanToHclTerraform(this._authenticated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      batching_enabled: {
        value: cdktf.booleanToHclTerraform(this._batchingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      batching_interval: {
        value: cdktf.numberToHclTerraform(this._batchingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conflation_enabled: {
        value: cdktf.booleanToHclTerraform(this._conflationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conflation_interval: {
        value: cdktf.numberToHclTerraform(this._conflationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conflation_key: {
        value: cdktf.stringToHclTerraform(this._conflationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expose_timeserial: {
        value: cdktf.booleanToHclTerraform(this._exposeTimeserial),
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
      persist_last: {
        value: cdktf.booleanToHclTerraform(this._persistLast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      persisted: {
        value: cdktf.booleanToHclTerraform(this._persisted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_enabled: {
        value: cdktf.booleanToHclTerraform(this._pushEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_only: {
        value: cdktf.booleanToHclTerraform(this._tlsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
