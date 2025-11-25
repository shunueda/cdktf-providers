// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcLbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm for balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#algo TwcLb#algo}
  */
  readonly algo?: string;
  /**
  * Availability zone for load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#availability_zone TwcLb#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Client timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#client_timeout TwcLb#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Connection timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#connect_timeout TwcLb#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Floating IP ID for server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#floating_ip_id TwcLb#floating_ip_id}
  */
  readonly floatingIpId?: string;
  /**
  * Http request timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#httprequest_timeout TwcLb#httprequest_timeout}
  */
  readonly httprequestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#id TwcLb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Backends IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#ips TwcLb#ips}
  */
  readonly ips?: string[];
  /**
  * Keep alive connection from balancer to backend server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#is_keepalive TwcLb#is_keepalive}
  */
  readonly isKeepalive?: boolean | cdktf.IResolvable;
  /**
  * Automatic redirect HTTP to HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#is_ssl TwcLb#is_ssl}
  */
  readonly isSsl?: boolean | cdktf.IResolvable;
  /**
  * Save user session for balancing to same backend server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#is_sticky TwcLb#is_sticky}
  */
  readonly isSticky?: boolean | cdktf.IResolvable;
  /**
  * Use PROXY-protocol for communicating with backend server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#is_use_proxy TwcLb#is_use_proxy}
  */
  readonly isUseProxy?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of connections to backend server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#maxconn TwcLb#maxconn}
  */
  readonly maxconn?: number;
  /**
  * Name for balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#name TwcLb#name}
  */
  readonly name: string;
  /**
  * Preset ID for balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#preset_id TwcLb#preset_id}
  */
  readonly presetId: number;
  /**
  * Project ID for created balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#project_id TwcLb#project_id}
  */
  readonly projectId?: number;
  /**
  * Server timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#server_timeout TwcLb#server_timeout}
  */
  readonly serverTimeout?: number;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#health_check TwcLb#health_check}
  */
  readonly healthCheck?: TwcLbHealthCheck;
  /**
  * local_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#local_network TwcLb#local_network}
  */
  readonly localNetwork?: TwcLbLocalNetwork;
}
export interface TwcLbHealthCheck {
  /**
  * Error requests count threshold for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#fall TwcLb#fall}
  */
  readonly fall?: number;
  /**
  * Interval in seconds for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#inter TwcLb#inter}
  */
  readonly inter?: number;
  /**
  * Path for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#path TwcLb#path}
  */
  readonly path?: string;
  /**
  * TCP port for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#port TwcLb#port}
  */
  readonly port?: number;
  /**
  * Protocol for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#proto TwcLb#proto}
  */
  readonly proto?: string;
  /**
  * Success requests count threshold for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#rise TwcLb#rise}
  */
  readonly rise?: number;
  /**
  * Timeout for active backend health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#timeout TwcLb#timeout}
  */
  readonly timeout?: number;
}

export function twcLbHealthCheckToTerraform(struct?: TwcLbHealthCheckOutputReference | TwcLbHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall: cdktf.numberToTerraform(struct!.fall),
    inter: cdktf.numberToTerraform(struct!.inter),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    rise: cdktf.numberToTerraform(struct!.rise),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function twcLbHealthCheckToHclTerraform(struct?: TwcLbHealthCheckOutputReference | TwcLbHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall: {
      value: cdktf.numberToHclTerraform(struct!.fall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inter: {
      value: cdktf.numberToHclTerraform(struct!.inter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rise: {
      value: cdktf.numberToHclTerraform(struct!.rise),
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

export class TwcLbHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcLbHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fall !== undefined) {
      hasAnyValues = true;
      internalValueResult.fall = this._fall;
    }
    if (this._inter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inter = this._inter;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._rise !== undefined) {
      hasAnyValues = true;
      internalValueResult.rise = this._rise;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcLbHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fall = undefined;
      this._inter = undefined;
      this._path = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._rise = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fall = value.fall;
      this._inter = value.inter;
      this._path = value.path;
      this._port = value.port;
      this._proto = value.proto;
      this._rise = value.rise;
      this._timeout = value.timeout;
    }
  }

  // fall - computed: false, optional: true, required: false
  private _fall?: number; 
  public get fall() {
    return this.getNumberAttribute('fall');
  }
  public set fall(value: number) {
    this._fall = value;
  }
  public resetFall() {
    this._fall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallInput() {
    return this._fall;
  }

  // inter - computed: false, optional: true, required: false
  private _inter?: number; 
  public get inter() {
    return this.getNumberAttribute('inter');
  }
  public set inter(value: number) {
    this._inter = value;
  }
  public resetInter() {
    this._inter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interInput() {
    return this._inter;
  }

  // path - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // rise - computed: false, optional: true, required: false
  private _rise?: number; 
  public get rise() {
    return this.getNumberAttribute('rise');
  }
  public set rise(value: number) {
    this._rise = value;
  }
  public resetRise() {
    this._rise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseInput() {
    return this._rise;
  }

  // timeout - computed: false, optional: true, required: false
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
export interface TwcLbLocalNetwork {
  /**
  * ID of VPC for assign address from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#id TwcLb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Address in VPC subnetwork for manual assign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#ip TwcLb#ip}
  */
  readonly ip?: string;
}

export function twcLbLocalNetworkToTerraform(struct?: TwcLbLocalNetworkOutputReference | TwcLbLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function twcLbLocalNetworkToHclTerraform(struct?: TwcLbLocalNetworkOutputReference | TwcLbLocalNetwork): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TwcLbLocalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcLbLocalNetwork | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcLbLocalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._ip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._ip = value.ip;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb twc_lb}
*/
export class TwcLb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_lb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcLb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcLb to import
  * @param importFromId The id of the existing TwcLb that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcLb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_lb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb twc_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcLbConfig
  */
  public constructor(scope: Construct, id: string, config: TwcLbConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_lb',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algo = config.algo;
    this._availabilityZone = config.availabilityZone;
    this._clientTimeout = config.clientTimeout;
    this._connectTimeout = config.connectTimeout;
    this._floatingIpId = config.floatingIpId;
    this._httprequestTimeout = config.httprequestTimeout;
    this._id = config.id;
    this._ips = config.ips;
    this._isKeepalive = config.isKeepalive;
    this._isSsl = config.isSsl;
    this._isSticky = config.isSticky;
    this._isUseProxy = config.isUseProxy;
    this._maxconn = config.maxconn;
    this._name = config.name;
    this._presetId = config.presetId;
    this._projectId = config.projectId;
    this._serverTimeout = config.serverTimeout;
    this._healthCheck.internalValue = config.healthCheck;
    this._localNetwork.internalValue = config.localNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algo - computed: false, optional: true, required: false
  private _algo?: string; 
  public get algo() {
    return this.getStringAttribute('algo');
  }
  public set algo(value: string) {
    this._algo = value;
  }
  public resetAlgo() {
    this._algo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algoInput() {
    return this._algo;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // client_timeout - computed: true, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this.getNumberAttribute('client_timeout');
  }
  public set clientTimeout(value: number) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
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

  // floating_ip_id - computed: false, optional: true, required: false
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  public resetFloatingIpId() {
    this._floatingIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
  }

  // httprequest_timeout - computed: true, optional: true, required: false
  private _httprequestTimeout?: number; 
  public get httprequestTimeout() {
    return this.getNumberAttribute('httprequest_timeout');
  }
  public set httprequestTimeout(value: number) {
    this._httprequestTimeout = value;
  }
  public resetHttprequestTimeout() {
    this._httprequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httprequestTimeoutInput() {
    return this._httprequestTimeout;
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // is_keepalive - computed: true, optional: true, required: false
  private _isKeepalive?: boolean | cdktf.IResolvable; 
  public get isKeepalive() {
    return this.getBooleanAttribute('is_keepalive');
  }
  public set isKeepalive(value: boolean | cdktf.IResolvable) {
    this._isKeepalive = value;
  }
  public resetIsKeepalive() {
    this._isKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepaliveInput() {
    return this._isKeepalive;
  }

  // is_ssl - computed: true, optional: true, required: false
  private _isSsl?: boolean | cdktf.IResolvable; 
  public get isSsl() {
    return this.getBooleanAttribute('is_ssl');
  }
  public set isSsl(value: boolean | cdktf.IResolvable) {
    this._isSsl = value;
  }
  public resetIsSsl() {
    this._isSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslInput() {
    return this._isSsl;
  }

  // is_sticky - computed: true, optional: true, required: false
  private _isSticky?: boolean | cdktf.IResolvable; 
  public get isSticky() {
    return this.getBooleanAttribute('is_sticky');
  }
  public set isSticky(value: boolean | cdktf.IResolvable) {
    this._isSticky = value;
  }
  public resetIsSticky() {
    this._isSticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStickyInput() {
    return this._isSticky;
  }

  // is_use_proxy - computed: true, optional: true, required: false
  private _isUseProxy?: boolean | cdktf.IResolvable; 
  public get isUseProxy() {
    return this.getBooleanAttribute('is_use_proxy');
  }
  public set isUseProxy(value: boolean | cdktf.IResolvable) {
    this._isUseProxy = value;
  }
  public resetIsUseProxy() {
    this._isUseProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUseProxyInput() {
    return this._isUseProxy;
  }

  // local_ip - computed: true, optional: false, required: false
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }

  // maxconn - computed: true, optional: true, required: false
  private _maxconn?: number; 
  public get maxconn() {
    return this.getNumberAttribute('maxconn');
  }
  public set maxconn(value: number) {
    this._maxconn = value;
  }
  public resetMaxconn() {
    this._maxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxconnInput() {
    return this._maxconn;
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

  // preset_id - computed: false, optional: false, required: true
  private _presetId?: number; 
  public get presetId() {
    return this.getNumberAttribute('preset_id');
  }
  public set presetId(value: number) {
    this._presetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // server_timeout - computed: true, optional: true, required: false
  private _serverTimeout?: number; 
  public get serverTimeout() {
    return this.getNumberAttribute('server_timeout');
  }
  public set serverTimeout(value: number) {
    this._serverTimeout = value;
  }
  public resetServerTimeout() {
    this._serverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimeoutInput() {
    return this._serverTimeout;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new TwcLbHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: TwcLbHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // local_network - computed: false, optional: true, required: false
  private _localNetwork = new TwcLbLocalNetworkOutputReference(this, "local_network");
  public get localNetwork() {
    return this._localNetwork;
  }
  public putLocalNetwork(value: TwcLbLocalNetwork) {
    this._localNetwork.internalValue = value;
  }
  public resetLocalNetwork() {
    this._localNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkInput() {
    return this._localNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algo: cdktf.stringToTerraform(this._algo),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      httprequest_timeout: cdktf.numberToTerraform(this._httprequestTimeout),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      is_keepalive: cdktf.booleanToTerraform(this._isKeepalive),
      is_ssl: cdktf.booleanToTerraform(this._isSsl),
      is_sticky: cdktf.booleanToTerraform(this._isSticky),
      is_use_proxy: cdktf.booleanToTerraform(this._isUseProxy),
      maxconn: cdktf.numberToTerraform(this._maxconn),
      name: cdktf.stringToTerraform(this._name),
      preset_id: cdktf.numberToTerraform(this._presetId),
      project_id: cdktf.numberToTerraform(this._projectId),
      server_timeout: cdktf.numberToTerraform(this._serverTimeout),
      health_check: twcLbHealthCheckToTerraform(this._healthCheck.internalValue),
      local_network: twcLbLocalNetworkToTerraform(this._localNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algo: {
        value: cdktf.stringToHclTerraform(this._algo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
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
      floating_ip_id: {
        value: cdktf.stringToHclTerraform(this._floatingIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httprequest_timeout: {
        value: cdktf.numberToHclTerraform(this._httprequestTimeout),
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
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_keepalive: {
        value: cdktf.booleanToHclTerraform(this._isKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ssl: {
        value: cdktf.booleanToHclTerraform(this._isSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sticky: {
        value: cdktf.booleanToHclTerraform(this._isSticky),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_use_proxy: {
        value: cdktf.booleanToHclTerraform(this._isUseProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maxconn: {
        value: cdktf.numberToHclTerraform(this._maxconn),
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
      preset_id: {
        value: cdktf.numberToHclTerraform(this._presetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_timeout: {
        value: cdktf.numberToHclTerraform(this._serverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: twcLbHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcLbHealthCheckList",
      },
      local_network: {
        value: twcLbLocalNetworkToHclTerraform(this._localNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcLbLocalNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
