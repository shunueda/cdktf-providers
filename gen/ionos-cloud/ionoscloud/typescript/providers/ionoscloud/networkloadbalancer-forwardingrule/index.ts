// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkloadbalancerForwardingruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm for the balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#algorithm NetworkloadbalancerForwardingrule#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Listening IP. (inbound)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#listener_ip NetworkloadbalancerForwardingrule#listener_ip}
  */
  readonly listenerIp: string;
  /**
  * Listening port number. (inbound) (range: 1 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#listener_port NetworkloadbalancerForwardingrule#listener_port}
  */
  readonly listenerPort: number;
  /**
  * A name of that Network Load Balancer forwarding rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#name NetworkloadbalancerForwardingrule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}
  */
  readonly networkloadbalancerId: string;
  /**
  * Protocol of the balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#protocol NetworkloadbalancerForwardingrule#protocol}
  */
  readonly protocol: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}
  */
  readonly healthCheck?: NetworkloadbalancerForwardingruleHealthCheck;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#targets NetworkloadbalancerForwardingrule#targets}
  */
  readonly targets: NetworkloadbalancerForwardingruleTargets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#timeouts NetworkloadbalancerForwardingrule#timeouts}
  */
  readonly timeouts?: NetworkloadbalancerForwardingruleTimeouts;
}
export interface NetworkloadbalancerForwardingruleHealthCheck {
  /**
  * ClientTimeout is expressed in milliseconds. This inactivity timeout applies when the client is expected to acknowledge or send data. If unset the default of 50 seconds will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#client_timeout NetworkloadbalancerForwardingrule#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed. If unset, the default of 5 seconds will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#connect_timeout NetworkloadbalancerForwardingrule#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Retries specifies the number of retries to perform on a target VM after a connection failure. If unset, the default value of 3 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#retries NetworkloadbalancerForwardingrule#retries}
  */
  readonly retries?: number;
  /**
  * TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side. If unset, the default of 50 seconds will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#target_timeout NetworkloadbalancerForwardingrule#target_timeout}
  */
  readonly targetTimeout?: number;
}

export function networkloadbalancerForwardingruleHealthCheckToTerraform(struct?: NetworkloadbalancerForwardingruleHealthCheckOutputReference | NetworkloadbalancerForwardingruleHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_timeout: cdktf.numberToTerraform(struct!.clientTimeout),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    retries: cdktf.numberToTerraform(struct!.retries),
    target_timeout: cdktf.numberToTerraform(struct!.targetTimeout),
  }
}


export function networkloadbalancerForwardingruleHealthCheckToHclTerraform(struct?: NetworkloadbalancerForwardingruleHealthCheckOutputReference | NetworkloadbalancerForwardingruleHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_timeout: {
      value: cdktf.numberToHclTerraform(struct!.clientTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
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
    target_timeout: {
      value: cdktf.numberToHclTerraform(struct!.targetTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkloadbalancerForwardingruleHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkloadbalancerForwardingruleHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTimeout = this._clientTimeout;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._targetTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTimeout = this._targetTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkloadbalancerForwardingruleHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientTimeout = undefined;
      this._connectTimeout = undefined;
      this._retries = undefined;
      this._targetTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientTimeout = value.clientTimeout;
      this._connectTimeout = value.connectTimeout;
      this._retries = value.retries;
      this._targetTimeout = value.targetTimeout;
    }
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

  // target_timeout - computed: true, optional: true, required: false
  private _targetTimeout?: number; 
  public get targetTimeout() {
    return this.getNumberAttribute('target_timeout');
  }
  public set targetTimeout(value: number) {
    this._targetTimeout = value;
  }
  public resetTargetTimeout() {
    this._targetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimeoutInput() {
    return this._targetTimeout;
  }
}
export interface NetworkloadbalancerForwardingruleTargetsHealthCheck {
  /**
  * Check specifies whether the target VM's health is checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#check NetworkloadbalancerForwardingrule#check}
  */
  readonly check?: boolean | cdktf.IResolvable;
  /**
  * CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#check_interval NetworkloadbalancerForwardingrule#check_interval}
  */
  readonly checkInterval?: number;
  /**
  * Maintenance specifies if a target VM should be marked as down, even if it is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#maintenance NetworkloadbalancerForwardingrule#maintenance}
  */
  readonly maintenance?: boolean | cdktf.IResolvable;
}

export function networkloadbalancerForwardingruleTargetsHealthCheckToTerraform(struct?: NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference | NetworkloadbalancerForwardingruleTargetsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.booleanToTerraform(struct!.check),
    check_interval: cdktf.numberToTerraform(struct!.checkInterval),
    maintenance: cdktf.booleanToTerraform(struct!.maintenance),
  }
}


export function networkloadbalancerForwardingruleTargetsHealthCheckToHclTerraform(struct?: NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference | NetworkloadbalancerForwardingruleTargetsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.booleanToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_interval: {
      value: cdktf.numberToHclTerraform(struct!.checkInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance: {
      value: cdktf.booleanToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkloadbalancerForwardingruleTargetsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._checkInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInterval = this._checkInterval;
    }
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkloadbalancerForwardingruleTargetsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._check = undefined;
      this._checkInterval = undefined;
      this._maintenance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._check = value.check;
      this._checkInterval = value.checkInterval;
      this._maintenance = value.maintenance;
    }
  }

  // check - computed: true, optional: true, required: false
  private _check?: boolean | cdktf.IResolvable; 
  public get check() {
    return this.getBooleanAttribute('check');
  }
  public set check(value: boolean | cdktf.IResolvable) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
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

  // maintenance - computed: true, optional: true, required: false
  private _maintenance?: boolean | cdktf.IResolvable; 
  public get maintenance() {
    return this.getBooleanAttribute('maintenance');
  }
  public set maintenance(value: boolean | cdktf.IResolvable) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }
}
export interface NetworkloadbalancerForwardingruleTargets {
  /**
  * IP of a balanced target VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#ip NetworkloadbalancerForwardingrule#ip}
  */
  readonly ip: string;
  /**
  * Port of the balanced target service. (range: 1 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#port NetworkloadbalancerForwardingrule#port}
  */
  readonly port: number;
  /**
  * Proxy protocol version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#proxy_protocol NetworkloadbalancerForwardingrule#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * Weight parameter is used to adjust the target VM's weight relative to other target VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#weight NetworkloadbalancerForwardingrule#weight}
  */
  readonly weight: number;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}
  */
  readonly healthCheck?: NetworkloadbalancerForwardingruleTargetsHealthCheck;
}

export function networkloadbalancerForwardingruleTargetsToTerraform(struct?: NetworkloadbalancerForwardingruleTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_protocol: cdktf.stringToTerraform(struct!.proxyProtocol),
    weight: cdktf.numberToTerraform(struct!.weight),
    health_check: networkloadbalancerForwardingruleTargetsHealthCheckToTerraform(struct!.healthCheck),
  }
}


export function networkloadbalancerForwardingruleTargetsToHclTerraform(struct?: NetworkloadbalancerForwardingruleTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    health_check: {
      value: networkloadbalancerForwardingruleTargetsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkloadbalancerForwardingruleTargetsHealthCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkloadbalancerForwardingruleTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkloadbalancerForwardingruleTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
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
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkloadbalancerForwardingruleTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._proxyProtocol = undefined;
      this._weight = undefined;
      this._healthCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
      this._proxyProtocol = value.proxyProtocol;
      this._weight = value.weight;
      this._healthCheck.internalValue = value.healthCheck;
    }
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

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: NetworkloadbalancerForwardingruleTargetsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }
}

export class NetworkloadbalancerForwardingruleTargetsList extends cdktf.ComplexList {
  public internalValue? : NetworkloadbalancerForwardingruleTargets[] | cdktf.IResolvable

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
  public get(index: number): NetworkloadbalancerForwardingruleTargetsOutputReference {
    return new NetworkloadbalancerForwardingruleTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkloadbalancerForwardingruleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}
  */
  readonly update?: string;
}

export function networkloadbalancerForwardingruleTimeoutsToTerraform(struct?: NetworkloadbalancerForwardingruleTimeouts | cdktf.IResolvable): any {
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


export function networkloadbalancerForwardingruleTimeoutsToHclTerraform(struct?: NetworkloadbalancerForwardingruleTimeouts | cdktf.IResolvable): any {
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

export class NetworkloadbalancerForwardingruleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkloadbalancerForwardingruleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkloadbalancerForwardingruleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule ionoscloud_networkloadbalancer_forwardingrule}
*/
export class NetworkloadbalancerForwardingrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_networkloadbalancer_forwardingrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkloadbalancerForwardingrule to import
  * @param importFromId The id of the existing NetworkloadbalancerForwardingrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkloadbalancerForwardingrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_networkloadbalancer_forwardingrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/networkloadbalancer_forwardingrule ionoscloud_networkloadbalancer_forwardingrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkloadbalancerForwardingruleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkloadbalancerForwardingruleConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_networkloadbalancer_forwardingrule',
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
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._listenerIp = config.listenerIp;
    this._listenerPort = config.listenerPort;
    this._name = config.name;
    this._networkloadbalancerId = config.networkloadbalancerId;
    this._protocol = config.protocol;
    this._healthCheck.internalValue = config.healthCheck;
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

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // listener_ip - computed: false, optional: false, required: true
  private _listenerIp?: string; 
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }
  public set listenerIp(value: string) {
    this._listenerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIpInput() {
    return this._listenerIp;
  }

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
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

  // networkloadbalancer_id - computed: false, optional: false, required: true
  private _networkloadbalancerId?: string; 
  public get networkloadbalancerId() {
    return this.getStringAttribute('networkloadbalancer_id');
  }
  public set networkloadbalancerId(value: string) {
    this._networkloadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkloadbalancerIdInput() {
    return this._networkloadbalancerId;
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

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new NetworkloadbalancerForwardingruleHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: NetworkloadbalancerForwardingruleHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new NetworkloadbalancerForwardingruleTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: NetworkloadbalancerForwardingruleTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkloadbalancerForwardingruleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkloadbalancerForwardingruleTimeouts) {
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
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      listener_ip: cdktf.stringToTerraform(this._listenerIp),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      name: cdktf.stringToTerraform(this._name),
      networkloadbalancer_id: cdktf.stringToTerraform(this._networkloadbalancerId),
      protocol: cdktf.stringToTerraform(this._protocol),
      health_check: networkloadbalancerForwardingruleHealthCheckToTerraform(this._healthCheck.internalValue),
      targets: cdktf.listMapper(networkloadbalancerForwardingruleTargetsToTerraform, true)(this._targets.internalValue),
      timeouts: networkloadbalancerForwardingruleTimeoutsToTerraform(this._timeouts.internalValue),
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
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      listener_ip: {
        value: cdktf.stringToHclTerraform(this._listenerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
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
      networkloadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._networkloadbalancerId),
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
      health_check: {
        value: networkloadbalancerForwardingruleHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkloadbalancerForwardingruleHealthCheckList",
      },
      targets: {
        value: cdktf.listMapperHcl(networkloadbalancerForwardingruleTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkloadbalancerForwardingruleTargetsList",
      },
      timeouts: {
        value: networkloadbalancerForwardingruleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkloadbalancerForwardingruleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
