// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgegatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration of the vShield edge VM for this gateway. One of: compact, full ("Large"), full4 ("Quad Large"), x-large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#configuration Edgegateway#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#description Edgegateway#description}
  */
  readonly description?: string;
  /**
  * Enable distributed routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#distributed_routing Edgegateway#distributed_routing}
  */
  readonly distributedRouting?: boolean | cdktf.IResolvable;
  /**
  * Enable FIPS mode. FIPS mode turns on the cipher suites that comply with FIPS. (False by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#fips_mode_enabled Edgegateway#fips_mode_enabled}
  */
  readonly fipsModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * 'accept' or 'deny'. Default 'deny'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#fw_default_rule_action Edgegateway#fw_default_rule_action}
  */
  readonly fwDefaultRuleAction?: string;
  /**
  * Enable logging for default rule. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#fw_default_rule_logging_enabled Edgegateway#fw_default_rule_logging_enabled}
  */
  readonly fwDefaultRuleLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable firewall. Default 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#fw_enabled Edgegateway#fw_enabled}
  */
  readonly fwEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable high availability on this edge gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#ha_enabled Edgegateway#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#id Edgegateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable load balancer acceleration. (Disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#lb_acceleration_enabled Edgegateway#lb_acceleration_enabled}
  */
  readonly lbAccelerationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable load balancing. (Disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#lb_enabled Edgegateway#lb_enabled}
  */
  readonly lbEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable load balancer logging. (Disabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#lb_logging_enabled Edgegateway#lb_logging_enabled}
  */
  readonly lbLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Log level. One of 'emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug'. ('info' by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#lb_loglevel Edgegateway#lb_loglevel}
  */
  readonly lbLoglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#name Edgegateway#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#org Edgegateway#org}
  */
  readonly org?: string;
  /**
  * If true, default gateway will be used for the edge gateways' default routing and DNS forwarding.(False by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#use_default_route_for_dns_relay Edgegateway#use_default_route_for_dns_relay}
  */
  readonly useDefaultRouteForDnsRelay?: boolean | cdktf.IResolvable;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#vdc Edgegateway#vdc}
  */
  readonly vdc?: string;
  /**
  * external_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#external_network Edgegateway#external_network}
  */
  readonly externalNetwork: EdgegatewayExternalNetwork[] | cdktf.IResolvable;
}
export interface EdgegatewayExternalNetworkSubnetSuballocatePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#end_address Edgegateway#end_address}
  */
  readonly endAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#start_address Edgegateway#start_address}
  */
  readonly startAddress: string;
}

export function edgegatewayExternalNetworkSubnetSuballocatePoolToTerraform(struct?: EdgegatewayExternalNetworkSubnetSuballocatePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function edgegatewayExternalNetworkSubnetSuballocatePoolToHclTerraform(struct?: EdgegatewayExternalNetworkSubnetSuballocatePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgegatewayExternalNetworkSubnetSuballocatePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgegatewayExternalNetworkSubnetSuballocatePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgegatewayExternalNetworkSubnetSuballocatePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class EdgegatewayExternalNetworkSubnetSuballocatePoolList extends cdktf.ComplexList {
  public internalValue? : EdgegatewayExternalNetworkSubnetSuballocatePool[] | cdktf.IResolvable

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
  public get(index: number): EdgegatewayExternalNetworkSubnetSuballocatePoolOutputReference {
    return new EdgegatewayExternalNetworkSubnetSuballocatePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgegatewayExternalNetworkSubnet {
  /**
  * Gateway address for a subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#gateway Edgegateway#gateway}
  */
  readonly gateway: string;
  /**
  * IP address on the edge gateway - will be auto-assigned if not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#ip_address Edgegateway#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Netmask address for a subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#netmask Edgegateway#netmask}
  */
  readonly netmask: string;
  /**
  * Defines if this subnet should be used as default gateway for edge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#use_for_default_route Edgegateway#use_for_default_route}
  */
  readonly useForDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * suballocate_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#suballocate_pool Edgegateway#suballocate_pool}
  */
  readonly suballocatePool?: EdgegatewayExternalNetworkSubnetSuballocatePool[] | cdktf.IResolvable;
}

export function edgegatewayExternalNetworkSubnetToTerraform(struct?: EdgegatewayExternalNetworkSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    use_for_default_route: cdktf.booleanToTerraform(struct!.useForDefaultRoute),
    suballocate_pool: cdktf.listMapper(edgegatewayExternalNetworkSubnetSuballocatePoolToTerraform, true)(struct!.suballocatePool),
  }
}


export function edgegatewayExternalNetworkSubnetToHclTerraform(struct?: EdgegatewayExternalNetworkSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_for_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.useForDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suballocate_pool: {
      value: cdktf.listMapperHcl(edgegatewayExternalNetworkSubnetSuballocatePoolToHclTerraform, true)(struct!.suballocatePool),
      isBlock: true,
      type: "set",
      storageClassType: "EdgegatewayExternalNetworkSubnetSuballocatePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgegatewayExternalNetworkSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgegatewayExternalNetworkSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._useForDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.useForDefaultRoute = this._useForDefaultRoute;
    }
    if (this._suballocatePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suballocatePool = this._suballocatePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgegatewayExternalNetworkSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._ipAddress = undefined;
      this._netmask = undefined;
      this._useForDefaultRoute = undefined;
      this._suballocatePool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._ipAddress = value.ipAddress;
      this._netmask = value.netmask;
      this._useForDefaultRoute = value.useForDefaultRoute;
      this._suballocatePool.internalValue = value.suballocatePool;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // use_for_default_route - computed: false, optional: true, required: false
  private _useForDefaultRoute?: boolean | cdktf.IResolvable; 
  public get useForDefaultRoute() {
    return this.getBooleanAttribute('use_for_default_route');
  }
  public set useForDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._useForDefaultRoute = value;
  }
  public resetUseForDefaultRoute() {
    this._useForDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForDefaultRouteInput() {
    return this._useForDefaultRoute;
  }

  // suballocate_pool - computed: false, optional: true, required: false
  private _suballocatePool = new EdgegatewayExternalNetworkSubnetSuballocatePoolList(this, "suballocate_pool", true);
  public get suballocatePool() {
    return this._suballocatePool;
  }
  public putSuballocatePool(value: EdgegatewayExternalNetworkSubnetSuballocatePool[] | cdktf.IResolvable) {
    this._suballocatePool.internalValue = value;
  }
  public resetSuballocatePool() {
    this._suballocatePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suballocatePoolInput() {
    return this._suballocatePool.internalValue;
  }
}

export class EdgegatewayExternalNetworkSubnetList extends cdktf.ComplexList {
  public internalValue? : EdgegatewayExternalNetworkSubnet[] | cdktf.IResolvable

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
  public get(index: number): EdgegatewayExternalNetworkSubnetOutputReference {
    return new EdgegatewayExternalNetworkSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgegatewayExternalNetwork {
  /**
  * Enable rate limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#enable_rate_limit Edgegateway#enable_rate_limit}
  */
  readonly enableRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Incoming rate limit (Mbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#incoming_rate_limit Edgegateway#incoming_rate_limit}
  */
  readonly incomingRateLimit?: number;
  /**
  * External network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#name Edgegateway#name}
  */
  readonly name: string;
  /**
  * Outgoing rate limit (Mbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#outgoing_rate_limit Edgegateway#outgoing_rate_limit}
  */
  readonly outgoingRateLimit?: number;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#subnet Edgegateway#subnet}
  */
  readonly subnet?: EdgegatewayExternalNetworkSubnet[] | cdktf.IResolvable;
}

export function edgegatewayExternalNetworkToTerraform(struct?: EdgegatewayExternalNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_rate_limit: cdktf.booleanToTerraform(struct!.enableRateLimit),
    incoming_rate_limit: cdktf.numberToTerraform(struct!.incomingRateLimit),
    name: cdktf.stringToTerraform(struct!.name),
    outgoing_rate_limit: cdktf.numberToTerraform(struct!.outgoingRateLimit),
    subnet: cdktf.listMapper(edgegatewayExternalNetworkSubnetToTerraform, true)(struct!.subnet),
  }
}


export function edgegatewayExternalNetworkToHclTerraform(struct?: EdgegatewayExternalNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.enableRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    incoming_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.incomingRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outgoing_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.outgoingRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet: {
      value: cdktf.listMapperHcl(edgegatewayExternalNetworkSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "EdgegatewayExternalNetworkSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgegatewayExternalNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgegatewayExternalNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRateLimit = this._enableRateLimit;
    }
    if (this._incomingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingRateLimit = this._incomingRateLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outgoingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.outgoingRateLimit = this._outgoingRateLimit;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgegatewayExternalNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableRateLimit = undefined;
      this._incomingRateLimit = undefined;
      this._name = undefined;
      this._outgoingRateLimit = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableRateLimit = value.enableRateLimit;
      this._incomingRateLimit = value.incomingRateLimit;
      this._name = value.name;
      this._outgoingRateLimit = value.outgoingRateLimit;
      this._subnet.internalValue = value.subnet;
    }
  }

  // enable_rate_limit - computed: false, optional: true, required: false
  private _enableRateLimit?: boolean | cdktf.IResolvable; 
  public get enableRateLimit() {
    return this.getBooleanAttribute('enable_rate_limit');
  }
  public set enableRateLimit(value: boolean | cdktf.IResolvable) {
    this._enableRateLimit = value;
  }
  public resetEnableRateLimit() {
    this._enableRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRateLimitInput() {
    return this._enableRateLimit;
  }

  // incoming_rate_limit - computed: false, optional: true, required: false
  private _incomingRateLimit?: number; 
  public get incomingRateLimit() {
    return this.getNumberAttribute('incoming_rate_limit');
  }
  public set incomingRateLimit(value: number) {
    this._incomingRateLimit = value;
  }
  public resetIncomingRateLimit() {
    this._incomingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingRateLimitInput() {
    return this._incomingRateLimit;
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

  // outgoing_rate_limit - computed: false, optional: true, required: false
  private _outgoingRateLimit?: number; 
  public get outgoingRateLimit() {
    return this.getNumberAttribute('outgoing_rate_limit');
  }
  public set outgoingRateLimit(value: number) {
    this._outgoingRateLimit = value;
  }
  public resetOutgoingRateLimit() {
    this._outgoingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingRateLimitInput() {
    return this._outgoingRateLimit;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new EdgegatewayExternalNetworkSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: EdgegatewayExternalNetworkSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class EdgegatewayExternalNetworkList extends cdktf.ComplexList {
  public internalValue? : EdgegatewayExternalNetwork[] | cdktf.IResolvable

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
  public get(index: number): EdgegatewayExternalNetworkOutputReference {
    return new EdgegatewayExternalNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway vcd_edgegateway}
*/
export class Edgegateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_edgegateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Edgegateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Edgegateway to import
  * @param importFromId The id of the existing Edgegateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Edgegateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_edgegateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/edgegateway vcd_edgegateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgegatewayConfig
  */
  public constructor(scope: Construct, id: string, config: EdgegatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_edgegateway',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration = config.configuration;
    this._description = config.description;
    this._distributedRouting = config.distributedRouting;
    this._fipsModeEnabled = config.fipsModeEnabled;
    this._fwDefaultRuleAction = config.fwDefaultRuleAction;
    this._fwDefaultRuleLoggingEnabled = config.fwDefaultRuleLoggingEnabled;
    this._fwEnabled = config.fwEnabled;
    this._haEnabled = config.haEnabled;
    this._id = config.id;
    this._lbAccelerationEnabled = config.lbAccelerationEnabled;
    this._lbEnabled = config.lbEnabled;
    this._lbLoggingEnabled = config.lbLoggingEnabled;
    this._lbLoglevel = config.lbLoglevel;
    this._name = config.name;
    this._org = config.org;
    this._useDefaultRouteForDnsRelay = config.useDefaultRouteForDnsRelay;
    this._vdc = config.vdc;
    this._externalNetwork.internalValue = config.externalNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // default_external_network_ip - computed: true, optional: false, required: false
  public get defaultExternalNetworkIp() {
    return this.getStringAttribute('default_external_network_ip');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distributed_routing - computed: false, optional: true, required: false
  private _distributedRouting?: boolean | cdktf.IResolvable; 
  public get distributedRouting() {
    return this.getBooleanAttribute('distributed_routing');
  }
  public set distributedRouting(value: boolean | cdktf.IResolvable) {
    this._distributedRouting = value;
  }
  public resetDistributedRouting() {
    this._distributedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedRoutingInput() {
    return this._distributedRouting;
  }

  // external_network_ips - computed: true, optional: false, required: false
  public get externalNetworkIps() {
    return this.getListAttribute('external_network_ips');
  }

  // fips_mode_enabled - computed: false, optional: true, required: false
  private _fipsModeEnabled?: boolean | cdktf.IResolvable; 
  public get fipsModeEnabled() {
    return this.getBooleanAttribute('fips_mode_enabled');
  }
  public set fipsModeEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsModeEnabled = value;
  }
  public resetFipsModeEnabled() {
    this._fipsModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsModeEnabledInput() {
    return this._fipsModeEnabled;
  }

  // fw_default_rule_action - computed: false, optional: true, required: false
  private _fwDefaultRuleAction?: string; 
  public get fwDefaultRuleAction() {
    return this.getStringAttribute('fw_default_rule_action');
  }
  public set fwDefaultRuleAction(value: string) {
    this._fwDefaultRuleAction = value;
  }
  public resetFwDefaultRuleAction() {
    this._fwDefaultRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDefaultRuleActionInput() {
    return this._fwDefaultRuleAction;
  }

  // fw_default_rule_logging_enabled - computed: false, optional: true, required: false
  private _fwDefaultRuleLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get fwDefaultRuleLoggingEnabled() {
    return this.getBooleanAttribute('fw_default_rule_logging_enabled');
  }
  public set fwDefaultRuleLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._fwDefaultRuleLoggingEnabled = value;
  }
  public resetFwDefaultRuleLoggingEnabled() {
    this._fwDefaultRuleLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDefaultRuleLoggingEnabledInput() {
    return this._fwDefaultRuleLoggingEnabled;
  }

  // fw_enabled - computed: false, optional: true, required: false
  private _fwEnabled?: boolean | cdktf.IResolvable; 
  public get fwEnabled() {
    return this.getBooleanAttribute('fw_enabled');
  }
  public set fwEnabled(value: boolean | cdktf.IResolvable) {
    this._fwEnabled = value;
  }
  public resetFwEnabled() {
    this._fwEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwEnabledInput() {
    return this._fwEnabled;
  }

  // ha_enabled - computed: false, optional: true, required: false
  private _haEnabled?: boolean | cdktf.IResolvable; 
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
  }
  public set haEnabled(value: boolean | cdktf.IResolvable) {
    this._haEnabled = value;
  }
  public resetHaEnabled() {
    this._haEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnabledInput() {
    return this._haEnabled;
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

  // lb_acceleration_enabled - computed: false, optional: true, required: false
  private _lbAccelerationEnabled?: boolean | cdktf.IResolvable; 
  public get lbAccelerationEnabled() {
    return this.getBooleanAttribute('lb_acceleration_enabled');
  }
  public set lbAccelerationEnabled(value: boolean | cdktf.IResolvable) {
    this._lbAccelerationEnabled = value;
  }
  public resetLbAccelerationEnabled() {
    this._lbAccelerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAccelerationEnabledInput() {
    return this._lbAccelerationEnabled;
  }

  // lb_enabled - computed: false, optional: true, required: false
  private _lbEnabled?: boolean | cdktf.IResolvable; 
  public get lbEnabled() {
    return this.getBooleanAttribute('lb_enabled');
  }
  public set lbEnabled(value: boolean | cdktf.IResolvable) {
    this._lbEnabled = value;
  }
  public resetLbEnabled() {
    this._lbEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbEnabledInput() {
    return this._lbEnabled;
  }

  // lb_logging_enabled - computed: false, optional: true, required: false
  private _lbLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get lbLoggingEnabled() {
    return this.getBooleanAttribute('lb_logging_enabled');
  }
  public set lbLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._lbLoggingEnabled = value;
  }
  public resetLbLoggingEnabled() {
    this._lbLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbLoggingEnabledInput() {
    return this._lbLoggingEnabled;
  }

  // lb_loglevel - computed: false, optional: true, required: false
  private _lbLoglevel?: string; 
  public get lbLoglevel() {
    return this.getStringAttribute('lb_loglevel');
  }
  public set lbLoglevel(value: string) {
    this._lbLoglevel = value;
  }
  public resetLbLoglevel() {
    this._lbLoglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbLoglevelInput() {
    return this._lbLoglevel;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // use_default_route_for_dns_relay - computed: true, optional: true, required: false
  private _useDefaultRouteForDnsRelay?: boolean | cdktf.IResolvable; 
  public get useDefaultRouteForDnsRelay() {
    return this.getBooleanAttribute('use_default_route_for_dns_relay');
  }
  public set useDefaultRouteForDnsRelay(value: boolean | cdktf.IResolvable) {
    this._useDefaultRouteForDnsRelay = value;
  }
  public resetUseDefaultRouteForDnsRelay() {
    this._useDefaultRouteForDnsRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultRouteForDnsRelayInput() {
    return this._useDefaultRouteForDnsRelay;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // external_network - computed: false, optional: false, required: true
  private _externalNetwork = new EdgegatewayExternalNetworkList(this, "external_network", true);
  public get externalNetwork() {
    return this._externalNetwork;
  }
  public putExternalNetwork(value: EdgegatewayExternalNetwork[] | cdktf.IResolvable) {
    this._externalNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkInput() {
    return this._externalNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: cdktf.stringToTerraform(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      distributed_routing: cdktf.booleanToTerraform(this._distributedRouting),
      fips_mode_enabled: cdktf.booleanToTerraform(this._fipsModeEnabled),
      fw_default_rule_action: cdktf.stringToTerraform(this._fwDefaultRuleAction),
      fw_default_rule_logging_enabled: cdktf.booleanToTerraform(this._fwDefaultRuleLoggingEnabled),
      fw_enabled: cdktf.booleanToTerraform(this._fwEnabled),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      id: cdktf.stringToTerraform(this._id),
      lb_acceleration_enabled: cdktf.booleanToTerraform(this._lbAccelerationEnabled),
      lb_enabled: cdktf.booleanToTerraform(this._lbEnabled),
      lb_logging_enabled: cdktf.booleanToTerraform(this._lbLoggingEnabled),
      lb_loglevel: cdktf.stringToTerraform(this._lbLoglevel),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      use_default_route_for_dns_relay: cdktf.booleanToTerraform(this._useDefaultRouteForDnsRelay),
      vdc: cdktf.stringToTerraform(this._vdc),
      external_network: cdktf.listMapper(edgegatewayExternalNetworkToTerraform, true)(this._externalNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distributed_routing: {
        value: cdktf.booleanToHclTerraform(this._distributedRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fips_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._fipsModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fw_default_rule_action: {
        value: cdktf.stringToHclTerraform(this._fwDefaultRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_default_rule_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._fwDefaultRuleLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fw_enabled: {
        value: cdktf.booleanToHclTerraform(this._fwEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_enabled: {
        value: cdktf.booleanToHclTerraform(this._haEnabled),
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
      lb_acceleration_enabled: {
        value: cdktf.booleanToHclTerraform(this._lbAccelerationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_enabled: {
        value: cdktf.booleanToHclTerraform(this._lbEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._lbLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_loglevel: {
        value: cdktf.stringToHclTerraform(this._lbLoglevel),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_route_for_dns_relay: {
        value: cdktf.booleanToHclTerraform(this._useDefaultRouteForDnsRelay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_network: {
        value: cdktf.listMapperHcl(edgegatewayExternalNetworkToHclTerraform, true)(this._externalNetwork.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgegatewayExternalNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
