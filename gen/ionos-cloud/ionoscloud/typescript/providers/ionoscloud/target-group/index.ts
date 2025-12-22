// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Balancing algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#algorithm TargetGroup#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#id TargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#name TargetGroup#name}
  */
  readonly name: string;
  /**
  * Balancing protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#protocol TargetGroup#protocol}
  */
  readonly protocol: string;
  /**
  * The forwarding protocol version. Value is ignored when protocol is not 'HTTP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#protocol_version TargetGroup#protocol_version}
  */
  readonly protocolVersion: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#health_check TargetGroup#health_check}
  */
  readonly healthCheck?: TargetGroupHealthCheck;
  /**
  * http_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#http_health_check TargetGroup#http_health_check}
  */
  readonly httpHealthCheck?: TargetGroupHttpHealthCheck;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#targets TargetGroup#targets}
  */
  readonly targets?: TargetGroupTargets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#timeouts TargetGroup#timeouts}
  */
  readonly timeouts?: TargetGroupTimeouts;
}
export interface TargetGroupHealthCheck {
  /**
  * The interval in milliseconds between consecutive health checks; default is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#check_interval TargetGroup#check_interval}
  */
  readonly checkInterval?: number;
  /**
  * The maximum time in milliseconds to wait for a target to respond to a check. For target VMs with 'Check Interval' set, the lesser of the two  values is used once the TCP connection is established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#check_timeout TargetGroup#check_timeout}
  */
  readonly checkTimeout?: number;
  /**
  * The maximum number of attempts to reconnect to a target after a connection failure. Valid range is 0 to 65535, and default is three reconnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#retries TargetGroup#retries}
  */
  readonly retries?: number;
}

export function targetGroupHealthCheckToTerraform(struct?: TargetGroupHealthCheckOutputReference | TargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_interval: cdktf.numberToTerraform(struct!.checkInterval),
    check_timeout: cdktf.numberToTerraform(struct!.checkTimeout),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function targetGroupHealthCheckToHclTerraform(struct?: TargetGroupHealthCheckOutputReference | TargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_interval: {
      value: cdktf.numberToHclTerraform(struct!.checkInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    check_timeout: {
      value: cdktf.numberToHclTerraform(struct!.checkTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetGroupHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInterval = this._checkInterval;
    }
    if (this._checkTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkTimeout = this._checkTimeout;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkInterval = undefined;
      this._checkTimeout = undefined;
      this._retries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkInterval = value.checkInterval;
      this._checkTimeout = value.checkTimeout;
      this._retries = value.retries;
    }
  }

  // check_interval - computed: true, optional: true, required: false
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  public resetCheckInterval() {
    this._checkInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // check_timeout - computed: true, optional: true, required: false
  private _checkTimeout?: number; 
  public get checkTimeout() {
    return this.getNumberAttribute('check_timeout');
  }
  public set checkTimeout(value: number) {
    this._checkTimeout = value;
  }
  public resetCheckTimeout() {
    this._checkTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTimeoutInput() {
    return this._checkTimeout;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface TargetGroupHttpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#match_type TargetGroup#match_type}
  */
  readonly matchType: string;
  /**
  * The method for the HTTP health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#method TargetGroup#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#negate TargetGroup#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The path (destination URL) for the HTTP health check request; the default is /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#path TargetGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#regex TargetGroup#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * The response returned by the request, depending on the match type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#response TargetGroup#response}
  */
  readonly response: string;
}

export function targetGroupHttpHealthCheckToTerraform(struct?: TargetGroupHttpHealthCheckOutputReference | TargetGroupHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    method: cdktf.stringToTerraform(struct!.method),
    negate: cdktf.booleanToTerraform(struct!.negate),
    path: cdktf.stringToTerraform(struct!.path),
    regex: cdktf.booleanToTerraform(struct!.regex),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function targetGroupHttpHealthCheckToHclTerraform(struct?: TargetGroupHttpHealthCheckOutputReference | TargetGroupHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetGroupHttpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetGroupHttpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupHttpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchType = undefined;
      this._method = undefined;
      this._negate = undefined;
      this._path = undefined;
      this._regex = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchType = value.matchType;
      this._method = value.method;
      this._negate = value.negate;
      this._path = value.path;
      this._regex = value.regex;
      this._response = value.response;
    }
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // response - computed: false, optional: false, required: true
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface TargetGroupTargets {
  /**
  * Makes the target available only if it accepts periodic health check TCP connection attempts; when turned off, the target is considered always available. The health check only consists of a connection attempt to the address and port of the target. Default is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#health_check_enabled TargetGroup#health_check_enabled}
  */
  readonly healthCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * The IP of the balanced target VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#ip TargetGroup#ip}
  */
  readonly ip: string;
  /**
  * Maintenance mode prevents the target from receiving balanced traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#maintenance_enabled TargetGroup#maintenance_enabled}
  */
  readonly maintenanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port of the balanced target service; valid range is 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#port TargetGroup#port}
  */
  readonly port: number;
  /**
  * Proxy protocol version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#proxy_protocol TargetGroup#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * Traffic is distributed in proportion to target weight, relative to the combined weight of all targets. A target with higher weight receives a greater share of traffic. Valid range is 0 to 256 and default is 1; targets with weight of 0 do not participate in load balancing but still accept persistent connections. It is best use values in the middle of the range to leave room for later adjustments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#weight TargetGroup#weight}
  */
  readonly weight: number;
}

export function targetGroupTargetsToTerraform(struct?: TargetGroupTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_enabled: cdktf.booleanToTerraform(struct!.healthCheckEnabled),
    ip: cdktf.stringToTerraform(struct!.ip),
    maintenance_enabled: cdktf.booleanToTerraform(struct!.maintenanceEnabled),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_protocol: cdktf.stringToTerraform(struct!.proxyProtocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function targetGroupTargetsToHclTerraform(struct?: TargetGroupTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.healthCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.maintenanceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.proxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class TargetGroupTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TargetGroupTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckEnabled = this._healthCheckEnabled;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._maintenanceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceEnabled = this._maintenanceEnabled;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetGroupTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheckEnabled = undefined;
      this._ip = undefined;
      this._maintenanceEnabled = undefined;
      this._port = undefined;
      this._proxyProtocol = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheckEnabled = value.healthCheckEnabled;
      this._ip = value.ip;
      this._maintenanceEnabled = value.maintenanceEnabled;
      this._port = value.port;
      this._proxyProtocol = value.proxyProtocol;
      this._weight = value.weight;
    }
  }

  // health_check_enabled - computed: true, optional: true, required: false
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

  // maintenance_enabled - computed: false, optional: true, required: false
  private _maintenanceEnabled?: boolean | cdktf.IResolvable; 
  public get maintenanceEnabled() {
    return this.getBooleanAttribute('maintenance_enabled');
  }
  public set maintenanceEnabled(value: boolean | cdktf.IResolvable) {
    this._maintenanceEnabled = value;
  }
  public resetMaintenanceEnabled() {
    this._maintenanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceEnabledInput() {
    return this._maintenanceEnabled;
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

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: string; 
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class TargetGroupTargetsList extends cdktf.ComplexList {
  public internalValue? : TargetGroupTargets[] | cdktf.IResolvable

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
  public get(index: number): TargetGroupTargetsOutputReference {
    return new TargetGroupTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#create TargetGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#default TargetGroup#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#delete TargetGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#update TargetGroup#update}
  */
  readonly update?: string;
}

export function targetGroupTimeoutsToTerraform(struct?: TargetGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function targetGroupTimeoutsToHclTerraform(struct?: TargetGroupTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class TargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TargetGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: TargetGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group ionoscloud_target_group}
*/
export class TargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetGroup to import
  * @param importFromId The id of the existing TargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/target_group ionoscloud_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_target_group',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._id = config.id;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolVersion = config.protocolVersion;
    this._healthCheck.internalValue = config.healthCheck;
    this._httpHealthCheck.internalValue = config.httpHealthCheck;
    this._targets.internalValue = config.targets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // protocol_version - computed: false, optional: false, required: true
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new TargetGroupHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: TargetGroupHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck = new TargetGroupHttpHealthCheckOutputReference(this, "http_health_check");
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public putHttpHealthCheck(value: TargetGroupHttpHealthCheck) {
    this._httpHealthCheck.internalValue = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new TargetGroupTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: TargetGroupTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TargetGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TargetGroupTimeouts) {
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_version: cdktf.stringToTerraform(this._protocolVersion),
      health_check: targetGroupHealthCheckToTerraform(this._healthCheck.internalValue),
      http_health_check: targetGroupHttpHealthCheckToTerraform(this._httpHealthCheck.internalValue),
      targets: cdktf.listMapper(targetGroupTargetsToTerraform, true)(this._targets.internalValue),
      timeouts: targetGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      protocol_version: {
        value: cdktf.stringToHclTerraform(this._protocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: targetGroupHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TargetGroupHealthCheckList",
      },
      http_health_check: {
        value: targetGroupHttpHealthCheckToHclTerraform(this._httpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TargetGroupHttpHealthCheckList",
      },
      targets: {
        value: cdktf.listMapperHcl(targetGroupTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TargetGroupTargetsList",
      },
      timeouts: {
        value: targetGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TargetGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
