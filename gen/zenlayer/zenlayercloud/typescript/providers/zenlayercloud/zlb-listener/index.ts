// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZlbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection timeout for health check. Valid values: `1` to `15`. `health_check_conn_timeout` takes effect only if `health_check_enabled` is set to true. Default is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_conn_timeout ZlbListener#health_check_conn_timeout}
  */
  readonly healthCheckConnTimeout?: number;
  /**
  * Interval between health checks. Measured in second. Valid values: `3` to `30`. `health_check_delay_loop` takes effect only if `health_check_enabled` is set to true. Default is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_delay_loop ZlbListener#health_check_delay_loop}
  */
  readonly healthCheckDelayLoop?: number;
  /**
  * Health check delay try time.Valid values: `1` to `15`. `health_check_delay_try` takes effect only if `health_check_enabled` is set to true. Default is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_delay_try ZlbListener#health_check_delay_try}
  */
  readonly healthCheckDelayTry?: number;
  /**
  * Indicates whether health check is enabled. Default is `true`. When health check is disabled, other health check parameter can't be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_enabled ZlbListener#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * HTTP request URL for health check. The value should start with '/', Default is `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_http_get_url ZlbListener#health_check_http_get_url}
  */
  readonly healthCheckHttpGetUrl?: string;
  /**
  * HTTP status code for health check. Required when `check_type` is `HTTP_GET`. Valid values: `100` to `599`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_http_status_code ZlbListener#health_check_http_status_code}
  */
  readonly healthCheckHttpStatusCode?: number;
  /**
  * Health check port. Defaults to the backend server port. Valid values: `1` to `65535`. `health_check_port` takes effect only if `health_check_enabled` is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_port ZlbListener#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Number of retry attempts for health check. Valid values: `1` to `5`. `health_check_retry` takes effect only if `health_check_enabled` is set to true. Default is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_retry ZlbListener#health_check_retry}
  */
  readonly healthCheckRetry?: number;
  /**
  * Health check protocols. Valid values: `PING_CHECK`, `TCP`, `HTTP_GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#health_check_type ZlbListener#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#id ZlbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Forwarding mode of the listener. Valid values: `DR`, `FNAT`. Default is `FNAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#kind ZlbListener#kind}
  */
  readonly kind?: string;
  /**
  * The name of the load balancer listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#listener_name ZlbListener#listener_name}
  */
  readonly listenerName: string;
  /**
  * The port of listener. Multiple ports are separated by commas. When the port is a range, connect with -, for example: 10000-10005.The value range of the port is 1 to 65535. Please note that the port cannot overlap with other ports of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#port ZlbListener#port}
  */
  readonly port: string;
  /**
  * The protocol of listener. Valid values: `TCP`, `UDP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#protocol ZlbListener#protocol}
  */
  readonly protocol: string;
  /**
  * Scheduling algorithm of the listener. Valid values: `mh`, `rr`, `wrr`, `lc`, `wlc`, `sh`, `dh`. Default value: `mh`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#scheduler ZlbListener#scheduler}
  */
  readonly scheduler?: string;
  /**
  * The ID of load balancer that the listener belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#zlb_id ZlbListener#zlb_id}
  */
  readonly zlbId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#timeouts ZlbListener#timeouts}
  */
  readonly timeouts?: ZlbListenerTimeouts;
}
export interface ZlbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#create ZlbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#delete ZlbListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#update ZlbListener#update}
  */
  readonly update?: string;
}

export function zlbListenerTimeoutsToTerraform(struct?: ZlbListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function zlbListenerTimeoutsToHclTerraform(struct?: ZlbListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZlbListenerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZlbListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener zenlayercloud_zlb_listener}
*/
export class ZlbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zlb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZlbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZlbListener to import
  * @param importFromId The id of the existing ZlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZlbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zlb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zlb_listener zenlayercloud_zlb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZlbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: ZlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zlb_listener',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._healthCheckConnTimeout = config.healthCheckConnTimeout;
    this._healthCheckDelayLoop = config.healthCheckDelayLoop;
    this._healthCheckDelayTry = config.healthCheckDelayTry;
    this._healthCheckEnabled = config.healthCheckEnabled;
    this._healthCheckHttpGetUrl = config.healthCheckHttpGetUrl;
    this._healthCheckHttpStatusCode = config.healthCheckHttpStatusCode;
    this._healthCheckPort = config.healthCheckPort;
    this._healthCheckRetry = config.healthCheckRetry;
    this._healthCheckType = config.healthCheckType;
    this._id = config.id;
    this._kind = config.kind;
    this._listenerName = config.listenerName;
    this._port = config.port;
    this._protocol = config.protocol;
    this._scheduler = config.scheduler;
    this._zlbId = config.zlbId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // health_check_conn_timeout - computed: true, optional: true, required: false
  private _healthCheckConnTimeout?: number; 
  public get healthCheckConnTimeout() {
    return this.getNumberAttribute('health_check_conn_timeout');
  }
  public set healthCheckConnTimeout(value: number) {
    this._healthCheckConnTimeout = value;
  }
  public resetHealthCheckConnTimeout() {
    this._healthCheckConnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConnTimeoutInput() {
    return this._healthCheckConnTimeout;
  }

  // health_check_delay_loop - computed: true, optional: true, required: false
  private _healthCheckDelayLoop?: number; 
  public get healthCheckDelayLoop() {
    return this.getNumberAttribute('health_check_delay_loop');
  }
  public set healthCheckDelayLoop(value: number) {
    this._healthCheckDelayLoop = value;
  }
  public resetHealthCheckDelayLoop() {
    this._healthCheckDelayLoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDelayLoopInput() {
    return this._healthCheckDelayLoop;
  }

  // health_check_delay_try - computed: true, optional: true, required: false
  private _healthCheckDelayTry?: number; 
  public get healthCheckDelayTry() {
    return this.getNumberAttribute('health_check_delay_try');
  }
  public set healthCheckDelayTry(value: number) {
    this._healthCheckDelayTry = value;
  }
  public resetHealthCheckDelayTry() {
    this._healthCheckDelayTry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDelayTryInput() {
    return this._healthCheckDelayTry;
  }

  // health_check_enabled - computed: false, optional: true, required: false
  private _healthCheckEnabled?: boolean | cdktf.IResolvable; 
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }
  public set healthCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._healthCheckEnabled = value;
  }
  public resetHealthCheckEnabled() {
    this._healthCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckEnabledInput() {
    return this._healthCheckEnabled;
  }

  // health_check_http_get_url - computed: true, optional: true, required: false
  private _healthCheckHttpGetUrl?: string; 
  public get healthCheckHttpGetUrl() {
    return this.getStringAttribute('health_check_http_get_url');
  }
  public set healthCheckHttpGetUrl(value: string) {
    this._healthCheckHttpGetUrl = value;
  }
  public resetHealthCheckHttpGetUrl() {
    this._healthCheckHttpGetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpGetUrlInput() {
    return this._healthCheckHttpGetUrl;
  }

  // health_check_http_status_code - computed: true, optional: true, required: false
  private _healthCheckHttpStatusCode?: number; 
  public get healthCheckHttpStatusCode() {
    return this.getNumberAttribute('health_check_http_status_code');
  }
  public set healthCheckHttpStatusCode(value: number) {
    this._healthCheckHttpStatusCode = value;
  }
  public resetHealthCheckHttpStatusCode() {
    this._healthCheckHttpStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpStatusCodeInput() {
    return this._healthCheckHttpStatusCode;
  }

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_retry - computed: true, optional: true, required: false
  private _healthCheckRetry?: number; 
  public get healthCheckRetry() {
    return this.getNumberAttribute('health_check_retry');
  }
  public set healthCheckRetry(value: number) {
    this._healthCheckRetry = value;
  }
  public resetHealthCheckRetry() {
    this._healthCheckRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRetryInput() {
    return this._healthCheckRetry;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // listener_name - computed: false, optional: false, required: true
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // zlb_id - computed: false, optional: false, required: true
  private _zlbId?: string; 
  public get zlbId() {
    return this.getStringAttribute('zlb_id');
  }
  public set zlbId(value: string) {
    this._zlbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zlbIdInput() {
    return this._zlbId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ZlbListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ZlbListenerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check_conn_timeout: cdktf.numberToTerraform(this._healthCheckConnTimeout),
      health_check_delay_loop: cdktf.numberToTerraform(this._healthCheckDelayLoop),
      health_check_delay_try: cdktf.numberToTerraform(this._healthCheckDelayTry),
      health_check_enabled: cdktf.booleanToTerraform(this._healthCheckEnabled),
      health_check_http_get_url: cdktf.stringToTerraform(this._healthCheckHttpGetUrl),
      health_check_http_status_code: cdktf.numberToTerraform(this._healthCheckHttpStatusCode),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      health_check_retry: cdktf.numberToTerraform(this._healthCheckRetry),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      listener_name: cdktf.stringToTerraform(this._listenerName),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      zlb_id: cdktf.stringToTerraform(this._zlbId),
      timeouts: zlbListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_check_conn_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckConnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_delay_loop: {
        value: cdktf.numberToHclTerraform(this._healthCheckDelayLoop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_delay_try: {
        value: cdktf.numberToHclTerraform(this._healthCheckDelayTry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._healthCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_http_get_url: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpGetUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_http_status_code: {
        value: cdktf.numberToHclTerraform(this._healthCheckHttpStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_retry: {
        value: cdktf.numberToHclTerraform(this._healthCheckRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_name: {
        value: cdktf.stringToHclTerraform(this._listenerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler: {
        value: cdktf.stringToHclTerraform(this._scheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zlb_id: {
        value: cdktf.stringToHclTerraform(this._zlbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: zlbListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZlbListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
