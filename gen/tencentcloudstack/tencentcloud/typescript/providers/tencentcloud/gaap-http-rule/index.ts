// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaapHttpRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timeout of the health check response, default value is 2s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#connect_timeout GaapHttpRule#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Forward domain of the forward rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#domain GaapHttpRule#domain}
  */
  readonly domain: string;
  /**
  * The default value of requested host which is forwarded to the realserver by the listener is `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#forward_host GaapHttpRule#forward_host}
  */
  readonly forwardHost?: string;
  /**
  * Indicates whether health check is enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#health_check GaapHttpRule#health_check}
  */
  readonly healthCheck: boolean | cdktf.IResolvable;
  /**
  * Method of the health check. Valid value: `GET` and `HEAD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#health_check_method GaapHttpRule#health_check_method}
  */
  readonly healthCheckMethod?: string;
  /**
  * Path of health check. Maximum length is 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#health_check_path GaapHttpRule#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Return code of confirmed normal. Valid value: `100`, `200`, `300`, `400` and `500`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#health_check_status_codes GaapHttpRule#health_check_status_codes}
  */
  readonly healthCheckStatusCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#id GaapHttpRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval of the health check, default value is 5s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#interval GaapHttpRule#interval}
  */
  readonly interval?: number;
  /**
  * ID of the layer7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#listener_id GaapHttpRule#listener_id}
  */
  readonly listenerId: string;
  /**
  * Path of the forward rule. Maximum length is 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#path GaapHttpRule#path}
  */
  readonly path: string;
  /**
  * Type of the realserver. Valid value: `IP` and `DOMAIN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#realserver_type GaapHttpRule#realserver_type}
  */
  readonly realserverType: string;
  /**
  * Scheduling policy of the forward rule, default value is `rr`. Valid value: `rr`, `wrr` and `lc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#scheduler GaapHttpRule#scheduler}
  */
  readonly scheduler?: string;
  /**
  * ServerNameIndication (SNI) is required when the SNI switch is turned on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#sni GaapHttpRule#sni}
  */
  readonly sni?: string;
  /**
  * ServerNameIndication (SNI) switch. ON means on and OFF means off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#sni_switch GaapHttpRule#sni_switch}
  */
  readonly sniSwitch?: string;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#realservers GaapHttpRule#realservers}
  */
  readonly realservers?: GaapHttpRuleRealservers[] | cdktf.IResolvable;
}
export interface GaapHttpRuleRealservers {
  /**
  * ID of the GAAP realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#id GaapHttpRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IP of the GAAP realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#ip GaapHttpRule#ip}
  */
  readonly ip: string;
  /**
  * Port of the GAAP realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#port GaapHttpRule#port}
  */
  readonly port: number;
  /**
  * Scheduling weight, default value is `1`. Valid value ranges: (1~100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#weight GaapHttpRule#weight}
  */
  readonly weight?: number;
}

export function gaapHttpRuleRealserversToTerraform(struct?: GaapHttpRuleRealservers | cdktf.IResolvable): any {
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


export function gaapHttpRuleRealserversToHclTerraform(struct?: GaapHttpRuleRealservers | cdktf.IResolvable): any {
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

export class GaapHttpRuleRealserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaapHttpRuleRealservers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaapHttpRuleRealservers | cdktf.IResolvable | undefined) {
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

export class GaapHttpRuleRealserversList extends cdktf.ComplexList {
  public internalValue? : GaapHttpRuleRealservers[] | cdktf.IResolvable

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
  public get(index: number): GaapHttpRuleRealserversOutputReference {
    return new GaapHttpRuleRealserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule tencentcloud_gaap_http_rule}
*/
export class GaapHttpRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_http_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaapHttpRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaapHttpRule to import
  * @param importFromId The id of the existing GaapHttpRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaapHttpRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_http_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/gaap_http_rule tencentcloud_gaap_http_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaapHttpRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GaapHttpRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_http_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectTimeout = config.connectTimeout;
    this._domain = config.domain;
    this._forwardHost = config.forwardHost;
    this._healthCheck = config.healthCheck;
    this._healthCheckMethod = config.healthCheckMethod;
    this._healthCheckPath = config.healthCheckPath;
    this._healthCheckStatusCodes = config.healthCheckStatusCodes;
    this._id = config.id;
    this._interval = config.interval;
    this._listenerId = config.listenerId;
    this._path = config.path;
    this._realserverType = config.realserverType;
    this._scheduler = config.scheduler;
    this._sni = config.sni;
    this._sniSwitch = config.sniSwitch;
    this._realservers.internalValue = config.realservers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // forward_host - computed: false, optional: true, required: false
  private _forwardHost?: string; 
  public get forwardHost() {
    return this.getStringAttribute('forward_host');
  }
  public set forwardHost(value: string) {
    this._forwardHost = value;
  }
  public resetForwardHost() {
    this._forwardHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostInput() {
    return this._forwardHost;
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck?: boolean | cdktf.IResolvable; 
  public get healthCheck() {
    return this.getBooleanAttribute('health_check');
  }
  public set healthCheck(value: boolean | cdktf.IResolvable) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_method - computed: false, optional: true, required: false
  private _healthCheckMethod?: string; 
  public get healthCheckMethod() {
    return this.getStringAttribute('health_check_method');
  }
  public set healthCheckMethod(value: string) {
    this._healthCheckMethod = value;
  }
  public resetHealthCheckMethod() {
    this._healthCheckMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckMethodInput() {
    return this._healthCheckMethod;
  }

  // health_check_path - computed: false, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // health_check_status_codes - computed: true, optional: true, required: false
  private _healthCheckStatusCodes?: number[]; 
  public get healthCheckStatusCodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('health_check_status_codes')));
  }
  public set healthCheckStatusCodes(value: number[]) {
    this._healthCheckStatusCodes = value;
  }
  public resetHealthCheckStatusCodes() {
    this._healthCheckStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStatusCodesInput() {
    return this._healthCheckStatusCodes;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // sni_switch - computed: true, optional: true, required: false
  private _sniSwitch?: string; 
  public get sniSwitch() {
    return this.getStringAttribute('sni_switch');
  }
  public set sniSwitch(value: string) {
    this._sniSwitch = value;
  }
  public resetSniSwitch() {
    this._sniSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniSwitchInput() {
    return this._sniSwitch;
  }

  // realservers - computed: false, optional: true, required: false
  private _realservers = new GaapHttpRuleRealserversList(this, "realservers", true);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: GaapHttpRuleRealservers[] | cdktf.IResolvable) {
    this._realservers.internalValue = value;
  }
  public resetRealservers() {
    this._realservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserversInput() {
    return this._realservers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      domain: cdktf.stringToTerraform(this._domain),
      forward_host: cdktf.stringToTerraform(this._forwardHost),
      health_check: cdktf.booleanToTerraform(this._healthCheck),
      health_check_method: cdktf.stringToTerraform(this._healthCheckMethod),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      health_check_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._healthCheckStatusCodes),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      path: cdktf.stringToTerraform(this._path),
      realserver_type: cdktf.stringToTerraform(this._realserverType),
      scheduler: cdktf.stringToTerraform(this._scheduler),
      sni: cdktf.stringToTerraform(this._sni),
      sni_switch: cdktf.stringToTerraform(this._sniSwitch),
      realservers: cdktf.listMapper(gaapHttpRuleRealserversToTerraform, true)(this._realservers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_host: {
        value: cdktf.stringToHclTerraform(this._forwardHost),
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
      health_check_method: {
        value: cdktf.stringToHclTerraform(this._healthCheckMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_path: {
        value: cdktf.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._healthCheckStatusCodes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      scheduler: {
        value: cdktf.stringToHclTerraform(this._scheduler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni: {
        value: cdktf.stringToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_switch: {
        value: cdktf.stringToHclTerraform(this._sniSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realservers: {
        value: cdktf.listMapperHcl(gaapHttpRuleRealserversToHclTerraform, true)(this._realservers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GaapHttpRuleRealserversList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
