// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, this will disable the automatic assignment of a security group to the load balancer's targets. This option is primarily used to allow targets that are not within the load balancer's own network or SNA (STACKIT network area). When this is enabled, you are fully responsible for ensuring network connectivity to the targets, including managing all routing and security group rules manually. This setting cannot be changed after the load balancer is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#disable_security_group_assignment Loadbalancer#disable_security_group_assignment}
  */
  readonly disableSecurityGroupAssignment?: boolean | cdktf.IResolvable;
  /**
  * External Load Balancer IP address where this Load Balancer is exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#external_address Loadbalancer#external_address}
  */
  readonly externalAddress?: string;
  /**
  * List of all listeners which will accept traffic. Limited to 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#listeners Loadbalancer#listeners}
  */
  readonly listeners: LoadbalancerListeners[] | cdktf.IResolvable;
  /**
  * Load balancer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * List of networks that listeners and targets reside in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#networks Loadbalancer#networks}
  */
  readonly networks: LoadbalancerNetworks[] | cdktf.IResolvable;
  /**
  * Defines any optional functionality you want to have enabled on your load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#options Loadbalancer#options}
  */
  readonly options?: LoadbalancerOptions;
  /**
  * The service plan ID. If not defined, the default service plan is `p10`. Possible values are: `p10`, `p50`, `p250`, `p750`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#plan_id Loadbalancer#plan_id}
  */
  readonly planId?: string;
  /**
  * STACKIT project ID to which the Load Balancer is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#project_id Loadbalancer#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#region Loadbalancer#region}
  */
  readonly region?: string;
  /**
  * List of all target pools which will be used in the Load Balancer. Limited to 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#target_pools Loadbalancer#target_pools}
  */
  readonly targetPools: LoadbalancerTargetPools[] | cdktf.IResolvable;
}
export interface LoadbalancerListenersServerNameIndicators {
  /**
  * A domain name to match in order to pass TLS traffic to the target pool in the current listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name?: string;
}

export function loadbalancerListenersServerNameIndicatorsToTerraform(struct?: LoadbalancerListenersServerNameIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function loadbalancerListenersServerNameIndicatorsToHclTerraform(struct?: LoadbalancerListenersServerNameIndicators | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerListenersServerNameIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerListenersServerNameIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerListenersServerNameIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class LoadbalancerListenersServerNameIndicatorsList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerListenersServerNameIndicators[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerListenersServerNameIndicatorsOutputReference {
    return new LoadbalancerListenersServerNameIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerListenersTcp {
  /**
  * Time after which an idle connection is closed. The default value is set to 300 seconds, and the maximum value is 3600 seconds. The format is a duration and the unit must be seconds. Example: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#idle_timeout Loadbalancer#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function loadbalancerListenersTcpToTerraform(struct?: LoadbalancerListenersTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function loadbalancerListenersTcpToHclTerraform(struct?: LoadbalancerListenersTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerListenersTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerListenersTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerListenersTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface LoadbalancerListenersUdp {
  /**
  * Time after which an idle session is closed. The default value is set to 1 minute, and the maximum value is 2 minutes. The format is a duration and the unit must be seconds. Example: 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#idle_timeout Loadbalancer#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function loadbalancerListenersUdpToTerraform(struct?: LoadbalancerListenersUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function loadbalancerListenersUdpToHclTerraform(struct?: LoadbalancerListenersUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerListenersUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerListenersUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerListenersUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface LoadbalancerListeners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#display_name Loadbalancer#display_name}
  */
  readonly displayName?: string;
  /**
  * Port number where we listen for traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#port Loadbalancer#port}
  */
  readonly port: number;
  /**
  * Protocol is the highest network protocol we understand to load balance. Possible values are: `PROTOCOL_UNSPECIFIED`, `PROTOCOL_TCP`, `PROTOCOL_UDP`, `PROTOCOL_TCP_PROXY`, `PROTOCOL_TLS_PASSTHROUGH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#protocol Loadbalancer#protocol}
  */
  readonly protocol: string;
  /**
  * A list of domain names to match in order to pass TLS traffic to the target pool in the current listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#server_name_indicators Loadbalancer#server_name_indicators}
  */
  readonly serverNameIndicators?: LoadbalancerListenersServerNameIndicators[] | cdktf.IResolvable;
  /**
  * Reference target pool by target pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#target_pool Loadbalancer#target_pool}
  */
  readonly targetPool: string;
  /**
  * Options that are specific to the TCP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#tcp Loadbalancer#tcp}
  */
  readonly tcp?: LoadbalancerListenersTcp;
  /**
  * Options that are specific to the UDP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#udp Loadbalancer#udp}
  */
  readonly udp?: LoadbalancerListenersUdp;
}

export function loadbalancerListenersToTerraform(struct?: LoadbalancerListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    server_name_indicators: cdktf.listMapper(loadbalancerListenersServerNameIndicatorsToTerraform, false)(struct!.serverNameIndicators),
    target_pool: cdktf.stringToTerraform(struct!.targetPool),
    tcp: loadbalancerListenersTcpToTerraform(struct!.tcp),
    udp: loadbalancerListenersUdpToTerraform(struct!.udp),
  }
}


export function loadbalancerListenersToHclTerraform(struct?: LoadbalancerListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name_indicators: {
      value: cdktf.listMapperHcl(loadbalancerListenersServerNameIndicatorsToHclTerraform, false)(struct!.serverNameIndicators),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerListenersServerNameIndicatorsList",
    },
    target_pool: {
      value: cdktf.stringToHclTerraform(struct!.targetPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: loadbalancerListenersTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerListenersTcp",
    },
    udp: {
      value: loadbalancerListenersUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerListenersUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serverNameIndicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNameIndicators = this._serverNameIndicators?.internalValue;
    }
    if (this._targetPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPool = this._targetPool;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serverNameIndicators.internalValue = undefined;
      this._targetPool = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serverNameIndicators.internalValue = value.serverNameIndicators;
      this._targetPool = value.targetPool;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // server_name_indicators - computed: false, optional: true, required: false
  private _serverNameIndicators = new LoadbalancerListenersServerNameIndicatorsList(this, "server_name_indicators", false);
  public get serverNameIndicators() {
    return this._serverNameIndicators;
  }
  public putServerNameIndicators(value: LoadbalancerListenersServerNameIndicators[] | cdktf.IResolvable) {
    this._serverNameIndicators.internalValue = value;
  }
  public resetServerNameIndicators() {
    this._serverNameIndicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameIndicatorsInput() {
    return this._serverNameIndicators.internalValue;
  }

  // target_pool - computed: false, optional: false, required: true
  private _targetPool?: string; 
  public get targetPool() {
    return this.getStringAttribute('target_pool');
  }
  public set targetPool(value: string) {
    this._targetPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolInput() {
    return this._targetPool;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new LoadbalancerListenersTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: LoadbalancerListenersTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new LoadbalancerListenersUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: LoadbalancerListenersUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}

export class LoadbalancerListenersList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerListeners[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerListenersOutputReference {
    return new LoadbalancerListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerNetworks {
  /**
  * Openstack network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#network_id Loadbalancer#network_id}
  */
  readonly networkId: string;
  /**
  * The role defines how the load balancer is using the network. Possible values are: `ROLE_UNSPECIFIED`, `ROLE_LISTENERS_AND_TARGETS`, `ROLE_LISTENERS`, `ROLE_TARGETS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#role Loadbalancer#role}
  */
  readonly role: string;
}

export function loadbalancerNetworksToTerraform(struct?: LoadbalancerNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function loadbalancerNetworksToHclTerraform(struct?: LoadbalancerNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._role = value.role;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class LoadbalancerNetworksList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerNetworks[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerNetworksOutputReference {
    return new LoadbalancerNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerOptionsObservabilityLogs {
  /**
  * Credentials reference for logs. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#credentials_ref Loadbalancer#credentials_ref}
  */
  readonly credentialsRef?: string;
  /**
  * Credentials reference for logs. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#push_url Loadbalancer#push_url}
  */
  readonly pushUrl?: string;
}

export function loadbalancerOptionsObservabilityLogsToTerraform(struct?: LoadbalancerOptionsObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_ref: cdktf.stringToTerraform(struct!.credentialsRef),
    push_url: cdktf.stringToTerraform(struct!.pushUrl),
  }
}


export function loadbalancerOptionsObservabilityLogsToHclTerraform(struct?: LoadbalancerOptionsObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.credentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_url: {
      value: cdktf.stringToHclTerraform(struct!.pushUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerOptionsObservabilityLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerOptionsObservabilityLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsRef = this._credentialsRef;
    }
    if (this._pushUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushUrl = this._pushUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerOptionsObservabilityLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsRef = undefined;
      this._pushUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsRef = value.credentialsRef;
      this._pushUrl = value.pushUrl;
    }
  }

  // credentials_ref - computed: true, optional: true, required: false
  private _credentialsRef?: string; 
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }
  public set credentialsRef(value: string) {
    this._credentialsRef = value;
  }
  public resetCredentialsRef() {
    this._credentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsRefInput() {
    return this._credentialsRef;
  }

  // push_url - computed: true, optional: true, required: false
  private _pushUrl?: string; 
  public get pushUrl() {
    return this.getStringAttribute('push_url');
  }
  public set pushUrl(value: string) {
    this._pushUrl = value;
  }
  public resetPushUrl() {
    this._pushUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushUrlInput() {
    return this._pushUrl;
  }
}
export interface LoadbalancerOptionsObservabilityMetrics {
  /**
  * Credentials reference for metrics. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#credentials_ref Loadbalancer#credentials_ref}
  */
  readonly credentialsRef?: string;
  /**
  * Credentials reference for metrics. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#push_url Loadbalancer#push_url}
  */
  readonly pushUrl?: string;
}

export function loadbalancerOptionsObservabilityMetricsToTerraform(struct?: LoadbalancerOptionsObservabilityMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_ref: cdktf.stringToTerraform(struct!.credentialsRef),
    push_url: cdktf.stringToTerraform(struct!.pushUrl),
  }
}


export function loadbalancerOptionsObservabilityMetricsToHclTerraform(struct?: LoadbalancerOptionsObservabilityMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.credentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_url: {
      value: cdktf.stringToHclTerraform(struct!.pushUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerOptionsObservabilityMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerOptionsObservabilityMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsRef = this._credentialsRef;
    }
    if (this._pushUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushUrl = this._pushUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerOptionsObservabilityMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsRef = undefined;
      this._pushUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsRef = value.credentialsRef;
      this._pushUrl = value.pushUrl;
    }
  }

  // credentials_ref - computed: true, optional: true, required: false
  private _credentialsRef?: string; 
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }
  public set credentialsRef(value: string) {
    this._credentialsRef = value;
  }
  public resetCredentialsRef() {
    this._credentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsRefInput() {
    return this._credentialsRef;
  }

  // push_url - computed: true, optional: true, required: false
  private _pushUrl?: string; 
  public get pushUrl() {
    return this.getStringAttribute('push_url');
  }
  public set pushUrl(value: string) {
    this._pushUrl = value;
  }
  public resetPushUrl() {
    this._pushUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushUrlInput() {
    return this._pushUrl;
  }
}
export interface LoadbalancerOptionsObservability {
  /**
  * Observability logs configuration. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#logs Loadbalancer#logs}
  */
  readonly logs?: LoadbalancerOptionsObservabilityLogs;
  /**
  * Observability metrics configuration. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#metrics Loadbalancer#metrics}
  */
  readonly metrics?: LoadbalancerOptionsObservabilityMetrics;
}

export function loadbalancerOptionsObservabilityToTerraform(struct?: LoadbalancerOptionsObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs: loadbalancerOptionsObservabilityLogsToTerraform(struct!.logs),
    metrics: loadbalancerOptionsObservabilityMetricsToTerraform(struct!.metrics),
  }
}


export function loadbalancerOptionsObservabilityToHclTerraform(struct?: LoadbalancerOptionsObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs: {
      value: loadbalancerOptionsObservabilityLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerOptionsObservabilityLogs",
    },
    metrics: {
      value: loadbalancerOptionsObservabilityMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerOptionsObservabilityMetrics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerOptionsObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerOptionsObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerOptionsObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logs.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logs.internalValue = value.logs;
      this._metrics.internalValue = value.metrics;
    }
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new LoadbalancerOptionsObservabilityLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: LoadbalancerOptionsObservabilityLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics = new LoadbalancerOptionsObservabilityMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: LoadbalancerOptionsObservabilityMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface LoadbalancerOptions {
  /**
  * Load Balancer is accessible only from an IP address in this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#acl Loadbalancer#acl}
  */
  readonly acl?: string[];
  /**
  * We offer Load Balancer metrics observability via ARGUS or external solutions. Not changeable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#observability Loadbalancer#observability}
  */
  readonly observability?: LoadbalancerOptionsObservability;
  /**
  * If true, Load Balancer is accessible only via a private network IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#private_network_only Loadbalancer#private_network_only}
  */
  readonly privateNetworkOnly?: boolean | cdktf.IResolvable;
}

export function loadbalancerOptionsToTerraform(struct?: LoadbalancerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acl),
    observability: loadbalancerOptionsObservabilityToTerraform(struct!.observability),
    private_network_only: cdktf.booleanToTerraform(struct!.privateNetworkOnly),
  }
}


export function loadbalancerOptionsToHclTerraform(struct?: LoadbalancerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    observability: {
      value: loadbalancerOptionsObservabilityToHclTerraform(struct!.observability),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerOptionsObservability",
    },
    private_network_only: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworkOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._observability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observability = this._observability?.internalValue;
    }
    if (this._privateNetworkOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkOnly = this._privateNetworkOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._observability.internalValue = undefined;
      this._privateNetworkOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._observability.internalValue = value.observability;
      this._privateNetworkOnly = value.privateNetworkOnly;
    }
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string[]; 
  public get acl() {
    return cdktf.Fn.tolist(this.getListAttribute('acl'));
  }
  public set acl(value: string[]) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // observability - computed: true, optional: true, required: false
  private _observability = new LoadbalancerOptionsObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: LoadbalancerOptionsObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // private_network_only - computed: true, optional: true, required: false
  private _privateNetworkOnly?: boolean | cdktf.IResolvable; 
  public get privateNetworkOnly() {
    return this.getBooleanAttribute('private_network_only');
  }
  public set privateNetworkOnly(value: boolean | cdktf.IResolvable) {
    this._privateNetworkOnly = value;
  }
  public resetPrivateNetworkOnly() {
    this._privateNetworkOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkOnlyInput() {
    return this._privateNetworkOnly;
  }
}
export interface LoadbalancerTargetPoolsActiveHealthCheck {
  /**
  * Healthy threshold of the health checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#healthy_threshold Loadbalancer#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Interval duration of health checking in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#interval Loadbalancer#interval}
  */
  readonly interval?: string;
  /**
  * Interval duration threshold of the health checking in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#interval_jitter Loadbalancer#interval_jitter}
  */
  readonly intervalJitter?: string;
  /**
  * Active health checking timeout duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#timeout Loadbalancer#timeout}
  */
  readonly timeout?: string;
  /**
  * Unhealthy threshold of the health checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#unhealthy_threshold Loadbalancer#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function loadbalancerTargetPoolsActiveHealthCheckToTerraform(struct?: LoadbalancerTargetPoolsActiveHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_jitter: cdktf.stringToTerraform(struct!.intervalJitter),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function loadbalancerTargetPoolsActiveHealthCheckToHclTerraform(struct?: LoadbalancerTargetPoolsActiveHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_jitter: {
      value: cdktf.stringToHclTerraform(struct!.intervalJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerTargetPoolsActiveHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerTargetPoolsActiveHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitter = this._intervalJitter;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerTargetPoolsActiveHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._intervalJitter = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._intervalJitter = value.intervalJitter;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: true, optional: true, required: false
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_jitter - computed: true, optional: true, required: false
  private _intervalJitter?: string; 
  public get intervalJitter() {
    return this.getStringAttribute('interval_jitter');
  }
  public set intervalJitter(value: string) {
    this._intervalJitter = value;
  }
  public resetIntervalJitter() {
    this._intervalJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterInput() {
    return this._intervalJitter;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
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
}
export interface LoadbalancerTargetPoolsSessionPersistence {
  /**
  * If true then all connections from one source IP address are redirected to the same target. This setting changes the load balancing algorithm to Maglev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#use_source_ip_address Loadbalancer#use_source_ip_address}
  */
  readonly useSourceIpAddress?: boolean | cdktf.IResolvable;
}

export function loadbalancerTargetPoolsSessionPersistenceToTerraform(struct?: LoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_source_ip_address: cdktf.booleanToTerraform(struct!.useSourceIpAddress),
  }
}


export function loadbalancerTargetPoolsSessionPersistenceToHclTerraform(struct?: LoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_source_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerTargetPoolsSessionPersistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIpAddress = this._useSourceIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerTargetPoolsSessionPersistence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useSourceIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useSourceIpAddress = value.useSourceIpAddress;
    }
  }

  // use_source_ip_address - computed: false, optional: true, required: false
  private _useSourceIpAddress?: boolean | cdktf.IResolvable; 
  public get useSourceIpAddress() {
    return this.getBooleanAttribute('use_source_ip_address');
  }
  public set useSourceIpAddress(value: boolean | cdktf.IResolvable) {
    this._useSourceIpAddress = value;
  }
  public resetUseSourceIpAddress() {
    this._useSourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpAddressInput() {
    return this._useSourceIpAddress;
  }
}
export interface LoadbalancerTargetPoolsTargets {
  /**
  * Target display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#display_name Loadbalancer#display_name}
  */
  readonly displayName: string;
  /**
  * Target IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#ip Loadbalancer#ip}
  */
  readonly ip: string;
}

export function loadbalancerTargetPoolsTargetsToTerraform(struct?: LoadbalancerTargetPoolsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function loadbalancerTargetPoolsTargetsToHclTerraform(struct?: LoadbalancerTargetPoolsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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

export class LoadbalancerTargetPoolsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerTargetPoolsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerTargetPoolsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._ip = value.ip;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class LoadbalancerTargetPoolsTargetsList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerTargetPoolsTargets[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerTargetPoolsTargetsOutputReference {
    return new LoadbalancerTargetPoolsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerTargetPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#active_health_check Loadbalancer#active_health_check}
  */
  readonly activeHealthCheck?: LoadbalancerTargetPoolsActiveHealthCheck;
  /**
  * Target pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * Here you can setup various session persistence options, so far only "`use_source_ip_address`" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#session_persistence Loadbalancer#session_persistence}
  */
  readonly sessionPersistence?: LoadbalancerTargetPoolsSessionPersistence;
  /**
  * Identical port number where each target listens for traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}
  */
  readonly targetPort: number;
  /**
  * List of all targets which will be used in the pool. Limited to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#targets Loadbalancer#targets}
  */
  readonly targets: LoadbalancerTargetPoolsTargets[] | cdktf.IResolvable;
}

export function loadbalancerTargetPoolsToTerraform(struct?: LoadbalancerTargetPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_health_check: loadbalancerTargetPoolsActiveHealthCheckToTerraform(struct!.activeHealthCheck),
    name: cdktf.stringToTerraform(struct!.name),
    session_persistence: loadbalancerTargetPoolsSessionPersistenceToTerraform(struct!.sessionPersistence),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    targets: cdktf.listMapper(loadbalancerTargetPoolsTargetsToTerraform, false)(struct!.targets),
  }
}


export function loadbalancerTargetPoolsToHclTerraform(struct?: LoadbalancerTargetPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_health_check: {
      value: loadbalancerTargetPoolsActiveHealthCheckToHclTerraform(struct!.activeHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerTargetPoolsActiveHealthCheck",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_persistence: {
      value: loadbalancerTargetPoolsSessionPersistenceToHclTerraform(struct!.sessionPersistence),
      isBlock: true,
      type: "struct",
      storageClassType: "LoadbalancerTargetPoolsSessionPersistence",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktf.listMapperHcl(loadbalancerTargetPoolsTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "LoadbalancerTargetPoolsTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerTargetPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerTargetPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeHealthCheck = this._activeHealthCheck?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sessionPersistence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistence = this._sessionPersistence?.internalValue;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerTargetPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeHealthCheck.internalValue = undefined;
      this._name = undefined;
      this._sessionPersistence.internalValue = undefined;
      this._targetPort = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeHealthCheck.internalValue = value.activeHealthCheck;
      this._name = value.name;
      this._sessionPersistence.internalValue = value.sessionPersistence;
      this._targetPort = value.targetPort;
      this._targets.internalValue = value.targets;
    }
  }

  // active_health_check - computed: true, optional: true, required: false
  private _activeHealthCheck = new LoadbalancerTargetPoolsActiveHealthCheckOutputReference(this, "active_health_check");
  public get activeHealthCheck() {
    return this._activeHealthCheck;
  }
  public putActiveHealthCheck(value: LoadbalancerTargetPoolsActiveHealthCheck) {
    this._activeHealthCheck.internalValue = value;
  }
  public resetActiveHealthCheck() {
    this._activeHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeHealthCheckInput() {
    return this._activeHealthCheck.internalValue;
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

  // session_persistence - computed: false, optional: true, required: false
  private _sessionPersistence = new LoadbalancerTargetPoolsSessionPersistenceOutputReference(this, "session_persistence");
  public get sessionPersistence() {
    return this._sessionPersistence;
  }
  public putSessionPersistence(value: LoadbalancerTargetPoolsSessionPersistence) {
    this._sessionPersistence.internalValue = value;
  }
  public resetSessionPersistence() {
    this._sessionPersistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceInput() {
    return this._sessionPersistence.internalValue;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new LoadbalancerTargetPoolsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: LoadbalancerTargetPoolsTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class LoadbalancerTargetPoolsList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerTargetPools[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerTargetPoolsOutputReference {
    return new LoadbalancerTargetPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer stackit_loadbalancer}
*/
export class Loadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Loadbalancer to import
  * @param importFromId The id of the existing Loadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Loadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/loadbalancer stackit_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableSecurityGroupAssignment = config.disableSecurityGroupAssignment;
    this._externalAddress = config.externalAddress;
    this._listeners.internalValue = config.listeners;
    this._name = config.name;
    this._networks.internalValue = config.networks;
    this._options.internalValue = config.options;
    this._planId = config.planId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._targetPools.internalValue = config.targetPools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_security_group_assignment - computed: true, optional: true, required: false
  private _disableSecurityGroupAssignment?: boolean | cdktf.IResolvable; 
  public get disableSecurityGroupAssignment() {
    return this.getBooleanAttribute('disable_security_group_assignment');
  }
  public set disableSecurityGroupAssignment(value: boolean | cdktf.IResolvable) {
    this._disableSecurityGroupAssignment = value;
  }
  public resetDisableSecurityGroupAssignment() {
    this._disableSecurityGroupAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityGroupAssignmentInput() {
    return this._disableSecurityGroupAssignment;
  }

  // external_address - computed: false, optional: true, required: false
  private _externalAddress?: string; 
  public get externalAddress() {
    return this.getStringAttribute('external_address');
  }
  public set externalAddress(value: string) {
    this._externalAddress = value;
  }
  public resetExternalAddress() {
    this._externalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressInput() {
    return this._externalAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listeners - computed: false, optional: false, required: true
  private _listeners = new LoadbalancerListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: LoadbalancerListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
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

  // networks - computed: false, optional: false, required: true
  private _networks = new LoadbalancerNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: LoadbalancerNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // options - computed: true, optional: true, required: false
  private _options = new LoadbalancerOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: LoadbalancerOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // plan_id - computed: true, optional: true, required: false
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  public resetPlanId() {
    this._planId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // private_address - computed: true, optional: false, required: false
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // target_pools - computed: false, optional: false, required: true
  private _targetPools = new LoadbalancerTargetPoolsList(this, "target_pools", false);
  public get targetPools() {
    return this._targetPools;
  }
  public putTargetPools(value: LoadbalancerTargetPools[] | cdktf.IResolvable) {
    this._targetPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolsInput() {
    return this._targetPools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_security_group_assignment: cdktf.booleanToTerraform(this._disableSecurityGroupAssignment),
      external_address: cdktf.stringToTerraform(this._externalAddress),
      listeners: cdktf.listMapper(loadbalancerListenersToTerraform, false)(this._listeners.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(loadbalancerNetworksToTerraform, false)(this._networks.internalValue),
      options: loadbalancerOptionsToTerraform(this._options.internalValue),
      plan_id: cdktf.stringToTerraform(this._planId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      target_pools: cdktf.listMapper(loadbalancerTargetPoolsToTerraform, false)(this._targetPools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_security_group_assignment: {
        value: cdktf.booleanToHclTerraform(this._disableSecurityGroupAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_address: {
        value: cdktf.stringToHclTerraform(this._externalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listeners: {
        value: cdktf.listMapperHcl(loadbalancerListenersToHclTerraform, false)(this._listeners.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerListenersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(loadbalancerNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerNetworksList",
      },
      options: {
        value: loadbalancerOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadbalancerOptions",
      },
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_pools: {
        value: cdktf.listMapperHcl(loadbalancerTargetPoolsToHclTerraform, false)(this._targetPools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadbalancerTargetPoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
