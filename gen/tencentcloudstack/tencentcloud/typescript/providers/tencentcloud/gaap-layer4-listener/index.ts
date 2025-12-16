// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaapLayer4ListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * UDP origin station health check probe port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#check_port GaapLayer4Listener#check_port}
  */
  readonly checkPort?: number;
  /**
  * UDP origin server health type. PORT means check port, and PING means PING.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#check_type GaapLayer4Listener#check_type}
  */
  readonly checkType?: string;
  /**
  * The way the listener gets the client IP, 0 for TOA, 1 for Proxy Protocol, default value is 0. NOTES: Only supports listeners of `TCP` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#client_ip_method GaapLayer4Listener#client_ip_method}
  */
  readonly clientIpMethod?: number;
  /**
  * Timeout of the health check response, should less than interval, default value is 2s. NOTES: Require less than `interval`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#connect_timeout GaapLayer4Listener#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * UDP source station health check port probe message type: TEXT represents text. Only used when the health check type is PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#context_type GaapLayer4Listener#context_type}
  */
  readonly contextType?: string;
  /**
  * Indicates whether health check is enable, default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#health_check GaapLayer4Listener#health_check}
  */
  readonly healthCheck?: boolean | cdktf.IResolvable;
  /**
  * Health threshold, which indicates how many consecutive inspections are successful, the source station is determined to be healthy. Range from 1 to 10. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#healthy_threshold GaapLayer4Listener#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#id GaapLayer4Listener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval of the health check, default value is 5s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#interval GaapLayer4Listener#interval}
  */
  readonly interval?: number;
  /**
  * Name of the layer4 listener, the maximum length is 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#name GaapLayer4Listener#name}
  */
  readonly name: string;
  /**
  * Port of the layer4 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#port GaapLayer4Listener#port}
  */
  readonly port: number;
  /**
  * Protocol of the layer4 listener. Valid value: `TCP` and `UDP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#protocol GaapLayer4Listener#protocol}
  */
  readonly protocol: string;
  /**
  * ID of the GAAP proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#proxy_id GaapLayer4Listener#proxy_id}
  */
  readonly proxyId: string;
  /**
  * Type of the realserver. Valid value: `IP` and `DOMAIN`. NOTES: when the `protocol` is specified as `TCP` and the `scheduler` is specified as `wrr`, the item can only be set to `IP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#realserver_type GaapLayer4Listener#realserver_type}
  */
  readonly realserverType: string;
  /**
  * UDP source server health check port detects received messages. Only used when the health check type is PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#recv_context GaapLayer4Listener#recv_context}
  */
  readonly recvContext?: string;
  /**
  * Scheduling policy of the layer4 listener, default value is `rr`. Valid value: `rr`, `wrr` and `lc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#scheduler GaapLayer4Listener#scheduler}
  */
  readonly scheduler?: string;
  /**
  * UDP source server health check port detection sends messages. Only used when health check type is PORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#send_context GaapLayer4Listener#send_context}
  */
  readonly sendContext?: string;
  /**
  * Unhealthy threshold, which indicates how many consecutive check failures the source station is considered unhealthy. Range from 1 to 10. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#unhealthy_threshold GaapLayer4Listener#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * realserver_bind_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#realserver_bind_set GaapLayer4Listener#realserver_bind_set}
  */
  readonly realserverBindSet?: GaapLayer4ListenerRealserverBindSet[] | cdktf.IResolvable;
}
export interface GaapLayer4ListenerRealserverBindSet {
  /**
  * ID of the GAAP realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#id GaapLayer4Listener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IP of the GAAP realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#ip GaapLayer4Listener#ip}
  */
  readonly ip: string;
  /**
  * Port of the GAAP realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#port GaapLayer4Listener#port}
  */
  readonly port: number;
  /**
  * Scheduling weight, default value is `1`. The range of values is [1,100].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#weight GaapLayer4Listener#weight}
  */
  readonly weight?: number;
}

export function gaapLayer4ListenerRealserverBindSetToTerraform(struct?: GaapLayer4ListenerRealserverBindSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gaapLayer4ListenerRealserverBindSetToHclTerraform(struct?: GaapLayer4ListenerRealserverBindSet | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaapLayer4ListenerRealserverBindSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaapLayer4ListenerRealserverBindSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaapLayer4ListenerRealserverBindSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
      this._port = value.port;
      this._weight = value.weight;
    }
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GaapLayer4ListenerRealserverBindSetList extends cdktf.ComplexList {
  public internalValue? : GaapLayer4ListenerRealserverBindSet[] | cdktf.IResolvable

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
  public get(index: number): GaapLayer4ListenerRealserverBindSetOutputReference {
    return new GaapLayer4ListenerRealserverBindSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener tencentcloud_gaap_layer4_listener}
*/
export class GaapLayer4Listener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_layer4_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaapLayer4Listener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaapLayer4Listener to import
  * @param importFromId The id of the existing GaapLayer4Listener that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaapLayer4Listener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_layer4_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/gaap_layer4_listener tencentcloud_gaap_layer4_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaapLayer4ListenerConfig
  */
  public constructor(scope: Construct, id: string, config: GaapLayer4ListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_layer4_listener',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkPort = config.checkPort;
    this._checkType = config.checkType;
    this._clientIpMethod = config.clientIpMethod;
    this._connectTimeout = config.connectTimeout;
    this._contextType = config.contextType;
    this._healthCheck = config.healthCheck;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
    this._proxyId = config.proxyId;
    this._realserverType = config.realserverType;
    this._recvContext = config.recvContext;
    this._scheduler = config.scheduler;
    this._sendContext = config.sendContext;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._realserverBindSet.internalValue = config.realserverBindSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_port - computed: true, optional: true, required: false
  private _checkPort?: number; 
  public get checkPort() {
    return this.getNumberAttribute('check_port');
  }
  public set checkPort(value: number) {
    this._checkPort = value;
  }
  public resetCheckPort() {
    this._checkPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPortInput() {
    return this._checkPort;
  }

  // check_type - computed: true, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // client_ip_method - computed: false, optional: true, required: false
  private _clientIpMethod?: number; 
  public get clientIpMethod() {
    return this.getNumberAttribute('client_ip_method');
  }
  public set clientIpMethod(value: number) {
    this._clientIpMethod = value;
  }
  public resetClientIpMethod() {
    this._clientIpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpMethodInput() {
    return this._clientIpMethod;
  }

  // connect_timeout - computed: false, optional: true, required: false
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

  // context_type - computed: true, optional: true, required: false
  private _contextType?: string; 
  public get contextType() {
    return this.getStringAttribute('context_type');
  }
  public set contextType(value: string) {
    this._contextType = value;
  }
  public resetContextType() {
    this._contextType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextTypeInput() {
    return this._contextType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: boolean | cdktf.IResolvable; 
  public get healthCheck() {
    return this.getBooleanAttribute('health_check');
  }
  public set healthCheck(value: boolean | cdktf.IResolvable) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
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

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // realserver_type - computed: false, optional: false, required: true
  private _realserverType?: string; 
  public get realserverType() {
    return this.getStringAttribute('realserver_type');
  }
  public set realserverType(value: string) {
    this._realserverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realserverTypeInput() {
    return this._realserverType;
  }

  // recv_context - computed: true, optional: true, required: false
  private _recvContext?: string; 
  public get recvContext() {
    return this.getStringAttribute('recv_context');
  }
  public set recvContext(value: string) {
    this._recvContext = value;
  }
  public resetRecvContext() {
    this._recvContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvContextInput() {
    return this._recvContext;
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

  // send_context - computed: true, optional: true, required: false
  private _sendContext?: string; 
  public get sendContext() {
    return this.getStringAttribute('send_context');
  }
  public set sendContext(value: string) {
    this._sendContext = value;
  }
  public resetSendContext() {
    this._sendContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendContextInput() {
    return this._sendContext;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // realserver_bind_set - computed: false, optional: true, required: false
  private _realserverBindSet = new GaapLayer4ListenerRealserverBindSetList(this, "realserver_bind_set", true);
  public get realserverBindSet() {
    return this._realserverBindSet;
  }
  public putRealserverBindSet(value: GaapLayer4ListenerRealserverBindSet[] | cdktf.IResolvable) {
    this._realserverBindSet.internalValue = value;
  }
  public resetRealserverBindSet() {
    this._realserverBindSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserverBindSetInput() {
    return this._realserverBindSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_port: cdktf.numberToTerraform(this._checkPort),
      check_type: cdktf.stringToTerraform(this._checkType),
      client_ip_method: cdktf.numberToTerraform(this._clientIpMethod),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      context_type: cdktf.stringToTerraform(this._contextType),
      health_check: cdktf.booleanToTerraform(this._healthCheck),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      realserver_type: cdktf.stringToTerraform(this._realserverType),
      recv_context: cdktf.stringToTerraform(this._recvContext),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      send_context: cdktf.stringToTerraform(this._sendContext),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      realserver_bind_set: cdktf.listMapper(gaapLayer4ListenerRealserverBindSetToTerraform, true)(this._realserverBindSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_port: {
        value: cdktf.numberToHclTerraform(this._checkPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_type: {
        value: cdktf.stringToHclTerraform(this._checkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip_method: {
        value: cdktf.numberToHclTerraform(this._clientIpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      context_type: {
        value: cdktf.stringToHclTerraform(this._contextType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.booleanToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      healthy_threshold: {
        value: cdktf.numberToHclTerraform(this._healthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realserver_type: {
        value: cdktf.stringToHclTerraform(this._realserverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recv_context: {
        value: cdktf.stringToHclTerraform(this._recvContext),
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
      send_context: {
        value: cdktf.stringToHclTerraform(this._sendContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unhealthy_threshold: {
        value: cdktf.numberToHclTerraform(this._unhealthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      realserver_bind_set: {
        value: cdktf.listMapperHcl(gaapLayer4ListenerRealserverBindSetToHclTerraform, true)(this._realserverBindSet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GaapLayer4ListenerRealserverBindSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
