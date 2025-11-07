// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of a valid access zone to map IP address pool to the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#access_zone Networkpool#access_zone}
  */
  readonly accessZone?: string;
  /**
  * OneFS supports the following NIC aggregation modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#aggregation_mode Networkpool#aggregation_mode}
  */
  readonly aggregationMode?: string;
  /**
  * Specifies how IP address allocation is done among pool members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#alloc_method Networkpool#alloc_method}
  */
  readonly allocMethod?: string;
  /**
  * A description of the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#description Networkpool#description}
  */
  readonly description?: string;
  /**
  * Name of the groupnet this pool belongs to. Cannot be modified once designated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#groupnet Networkpool#groupnet}
  */
  readonly groupnet: string;
  /**
  * List of interface members in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#ifaces Networkpool#ifaces}
  */
  readonly ifaces?: NetworkpoolIfaces[] | cdktf.IResolvable;
  /**
  * The name of the pool. It must be unique throughout the given subnet.It's a required field with POST method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#name Networkpool#name}
  */
  readonly name: string;
  /**
  * Indicates that pool contains only RDMA RRoCE capable interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#nfsv3_rroce_only Networkpool#nfsv3_rroce_only}
  */
  readonly nfsv3RroceOnly?: boolean | cdktf.IResolvable;
  /**
  * List of IP address ranges in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#ranges Networkpool#ranges}
  */
  readonly ranges?: NetworkpoolRanges[] | cdktf.IResolvable;
  /**
  * Rebalance policy..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#rebalance_policy Networkpool#rebalance_policy}
  */
  readonly rebalancePolicy?: string;
  /**
  * Time delay in seconds before a node which has been automatically unsuspended becomes usable in SmartConnect responses for pool zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_auto_unsuspend_delay Networkpool#sc_auto_unsuspend_delay}
  */
  readonly scAutoUnsuspendDelay?: number;
  /**
  * SmartConnect client connection balancing policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_connect_policy Networkpool#sc_connect_policy}
  */
  readonly scConnectPolicy?: string;
  /**
  * SmartConnect zone name for the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_dns_zone Networkpool#sc_dns_zone}
  */
  readonly scDnsZone?: string;
  /**
  * List of SmartConnect zone aliases (DNS names) to the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_dns_zone_aliases Networkpool#sc_dns_zone_aliases}
  */
  readonly scDnsZoneAliases?: string[];
  /**
  * SmartConnect IP failover policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_failover_policy Networkpool#sc_failover_policy}
  */
  readonly scFailoverPolicy?: string;
  /**
  * Name of SmartConnect service subnet for this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_subnet Networkpool#sc_subnet}
  */
  readonly scSubnet?: string;
  /**
  * Time to live value for SmartConnect DNS query responses in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#sc_ttl Networkpool#sc_ttl}
  */
  readonly scTtl?: number;
  /**
  * List of interface members in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#static_routes Networkpool#static_routes}
  */
  readonly staticRoutes?: NetworkpoolStaticRoutes[] | cdktf.IResolvable;
  /**
  * The name of the subnet. Cannot be modified once designated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#subnet Networkpool#subnet}
  */
  readonly subnet: string;
}
export interface NetworkpoolIfaces {
  /**
  * A string that defines an interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#iface Networkpool#iface}
  */
  readonly iface?: string;
  /**
  * Logical Node Number (LNN) of a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#lnn Networkpool#lnn}
  */
  readonly lnn?: number;
}

export function networkpoolIfacesToTerraform(struct?: NetworkpoolIfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iface: cdktf.stringToTerraform(struct!.iface),
    lnn: cdktf.numberToTerraform(struct!.lnn),
  }
}


export function networkpoolIfacesToHclTerraform(struct?: NetworkpoolIfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lnn: {
      value: cdktf.numberToHclTerraform(struct!.lnn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkpoolIfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkpoolIfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    if (this._lnn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnn = this._lnn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkpoolIfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iface = undefined;
      this._lnn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iface = value.iface;
      this._lnn = value.lnn;
    }
  }

  // iface - computed: true, optional: true, required: false
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }

  // lnn - computed: true, optional: true, required: false
  private _lnn?: number; 
  public get lnn() {
    return this.getNumberAttribute('lnn');
  }
  public set lnn(value: number) {
    this._lnn = value;
  }
  public resetLnn() {
    this._lnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnnInput() {
    return this._lnn;
  }
}

export class NetworkpoolIfacesList extends cdktf.ComplexList {
  public internalValue? : NetworkpoolIfaces[] | cdktf.IResolvable

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
  public get(index: number): NetworkpoolIfacesOutputReference {
    return new NetworkpoolIfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkpoolRanges {
  /**
  * High IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#high Networkpool#high}
  */
  readonly high?: string;
  /**
  * Low IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#low Networkpool#low}
  */
  readonly low?: string;
}

export function networkpoolRangesToTerraform(struct?: NetworkpoolRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.stringToTerraform(struct!.high),
    low: cdktf.stringToTerraform(struct!.low),
  }
}


export function networkpoolRangesToHclTerraform(struct?: NetworkpoolRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.stringToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low: {
      value: cdktf.stringToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkpoolRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkpoolRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkpoolRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // high - computed: true, optional: true, required: false
  private _high?: string; 
  public get high() {
    return this.getStringAttribute('high');
  }
  public set high(value: string) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: true, required: false
  private _low?: string; 
  public get low() {
    return this.getStringAttribute('low');
  }
  public set low(value: string) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}

export class NetworkpoolRangesList extends cdktf.ComplexList {
  public internalValue? : NetworkpoolRanges[] | cdktf.IResolvable

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
  public get(index: number): NetworkpoolRangesOutputReference {
    return new NetworkpoolRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkpoolStaticRoutes {
  /**
  * Address of the gateway in the format: yyy.yyy.yyy.yyy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#gateway Networkpool#gateway}
  */
  readonly gateway?: string;
  /**
  * Prefix length in the format: nn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#prefixlen Networkpool#prefixlen}
  */
  readonly prefixlen?: number;
  /**
  * Network address in the format: xxx.xxx.xxx.xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#subnet Networkpool#subnet}
  */
  readonly subnet?: string;
}

export function networkpoolStaticRoutesToTerraform(struct?: NetworkpoolStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefixlen: cdktf.numberToTerraform(struct!.prefixlen),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function networkpoolStaticRoutesToHclTerraform(struct?: NetworkpoolStaticRoutes | cdktf.IResolvable): any {
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
    prefixlen: {
      value: cdktf.numberToHclTerraform(struct!.prefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkpoolStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkpoolStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixlen = this._prefixlen;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkpoolStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._prefixlen = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._prefixlen = value.prefixlen;
      this._subnet = value.subnet;
    }
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // prefixlen - computed: true, optional: true, required: false
  private _prefixlen?: number; 
  public get prefixlen() {
    return this.getNumberAttribute('prefixlen');
  }
  public set prefixlen(value: number) {
    this._prefixlen = value;
  }
  public resetPrefixlen() {
    this._prefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixlenInput() {
    return this._prefixlen;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class NetworkpoolStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : NetworkpoolStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): NetworkpoolStaticRoutesOutputReference {
    return new NetworkpoolStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool powerscale_networkpool}
*/
export class Networkpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_networkpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Networkpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Networkpool to import
  * @param importFromId The id of the existing Networkpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Networkpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_networkpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/networkpool powerscale_networkpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkpoolConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_networkpool',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessZone = config.accessZone;
    this._aggregationMode = config.aggregationMode;
    this._allocMethod = config.allocMethod;
    this._description = config.description;
    this._groupnet = config.groupnet;
    this._ifaces.internalValue = config.ifaces;
    this._name = config.name;
    this._nfsv3RroceOnly = config.nfsv3RroceOnly;
    this._ranges.internalValue = config.ranges;
    this._rebalancePolicy = config.rebalancePolicy;
    this._scAutoUnsuspendDelay = config.scAutoUnsuspendDelay;
    this._scConnectPolicy = config.scConnectPolicy;
    this._scDnsZone = config.scDnsZone;
    this._scDnsZoneAliases = config.scDnsZoneAliases;
    this._scFailoverPolicy = config.scFailoverPolicy;
    this._scSubnet = config.scSubnet;
    this._scTtl = config.scTtl;
    this._staticRoutes.internalValue = config.staticRoutes;
    this._subnet = config.subnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_zone - computed: true, optional: true, required: false
  private _accessZone?: string; 
  public get accessZone() {
    return this.getStringAttribute('access_zone');
  }
  public set accessZone(value: string) {
    this._accessZone = value;
  }
  public resetAccessZone() {
    this._accessZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessZoneInput() {
    return this._accessZone;
  }

  // addr_family - computed: true, optional: false, required: false
  public get addrFamily() {
    return this.getStringAttribute('addr_family');
  }

  // aggregation_mode - computed: true, optional: true, required: false
  private _aggregationMode?: string; 
  public get aggregationMode() {
    return this.getStringAttribute('aggregation_mode');
  }
  public set aggregationMode(value: string) {
    this._aggregationMode = value;
  }
  public resetAggregationMode() {
    this._aggregationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationModeInput() {
    return this._aggregationMode;
  }

  // alloc_method - computed: true, optional: true, required: false
  private _allocMethod?: string; 
  public get allocMethod() {
    return this.getStringAttribute('alloc_method');
  }
  public set allocMethod(value: string) {
    this._allocMethod = value;
  }
  public resetAllocMethod() {
    this._allocMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocMethodInput() {
    return this._allocMethod;
  }

  // description - computed: true, optional: true, required: false
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

  // groupnet - computed: false, optional: false, required: true
  private _groupnet?: string; 
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }
  public set groupnet(value: string) {
    this._groupnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnetInput() {
    return this._groupnet;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ifaces - computed: true, optional: true, required: false
  private _ifaces = new NetworkpoolIfacesList(this, "ifaces", true);
  public get ifaces() {
    return this._ifaces;
  }
  public putIfaces(value: NetworkpoolIfaces[] | cdktf.IResolvable) {
    this._ifaces.internalValue = value;
  }
  public resetIfaces() {
    this._ifaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifacesInput() {
    return this._ifaces.internalValue;
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

  // nfsv3_rroce_only - computed: true, optional: true, required: false
  private _nfsv3RroceOnly?: boolean | cdktf.IResolvable; 
  public get nfsv3RroceOnly() {
    return this.getBooleanAttribute('nfsv3_rroce_only');
  }
  public set nfsv3RroceOnly(value: boolean | cdktf.IResolvable) {
    this._nfsv3RroceOnly = value;
  }
  public resetNfsv3RroceOnly() {
    this._nfsv3RroceOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3RroceOnlyInput() {
    return this._nfsv3RroceOnly;
  }

  // ranges - computed: true, optional: true, required: false
  private _ranges = new NetworkpoolRangesList(this, "ranges", true);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: NetworkpoolRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // rebalance_policy - computed: true, optional: true, required: false
  private _rebalancePolicy?: string; 
  public get rebalancePolicy() {
    return this.getStringAttribute('rebalance_policy');
  }
  public set rebalancePolicy(value: string) {
    this._rebalancePolicy = value;
  }
  public resetRebalancePolicy() {
    this._rebalancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalancePolicyInput() {
    return this._rebalancePolicy;
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.getListAttribute('rules');
  }

  // sc_auto_unsuspend_delay - computed: true, optional: true, required: false
  private _scAutoUnsuspendDelay?: number; 
  public get scAutoUnsuspendDelay() {
    return this.getNumberAttribute('sc_auto_unsuspend_delay');
  }
  public set scAutoUnsuspendDelay(value: number) {
    this._scAutoUnsuspendDelay = value;
  }
  public resetScAutoUnsuspendDelay() {
    this._scAutoUnsuspendDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scAutoUnsuspendDelayInput() {
    return this._scAutoUnsuspendDelay;
  }

  // sc_connect_policy - computed: true, optional: true, required: false
  private _scConnectPolicy?: string; 
  public get scConnectPolicy() {
    return this.getStringAttribute('sc_connect_policy');
  }
  public set scConnectPolicy(value: string) {
    this._scConnectPolicy = value;
  }
  public resetScConnectPolicy() {
    this._scConnectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scConnectPolicyInput() {
    return this._scConnectPolicy;
  }

  // sc_dns_zone - computed: true, optional: true, required: false
  private _scDnsZone?: string; 
  public get scDnsZone() {
    return this.getStringAttribute('sc_dns_zone');
  }
  public set scDnsZone(value: string) {
    this._scDnsZone = value;
  }
  public resetScDnsZone() {
    this._scDnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scDnsZoneInput() {
    return this._scDnsZone;
  }

  // sc_dns_zone_aliases - computed: true, optional: true, required: false
  private _scDnsZoneAliases?: string[]; 
  public get scDnsZoneAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('sc_dns_zone_aliases'));
  }
  public set scDnsZoneAliases(value: string[]) {
    this._scDnsZoneAliases = value;
  }
  public resetScDnsZoneAliases() {
    this._scDnsZoneAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scDnsZoneAliasesInput() {
    return this._scDnsZoneAliases;
  }

  // sc_failover_policy - computed: true, optional: true, required: false
  private _scFailoverPolicy?: string; 
  public get scFailoverPolicy() {
    return this.getStringAttribute('sc_failover_policy');
  }
  public set scFailoverPolicy(value: string) {
    this._scFailoverPolicy = value;
  }
  public resetScFailoverPolicy() {
    this._scFailoverPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scFailoverPolicyInput() {
    return this._scFailoverPolicy;
  }

  // sc_subnet - computed: true, optional: true, required: false
  private _scSubnet?: string; 
  public get scSubnet() {
    return this.getStringAttribute('sc_subnet');
  }
  public set scSubnet(value: string) {
    this._scSubnet = value;
  }
  public resetScSubnet() {
    this._scSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scSubnetInput() {
    return this._scSubnet;
  }

  // sc_suspended_nodes - computed: true, optional: false, required: false
  public get scSuspendedNodes() {
    return this.getNumberListAttribute('sc_suspended_nodes');
  }

  // sc_ttl - computed: true, optional: true, required: false
  private _scTtl?: number; 
  public get scTtl() {
    return this.getNumberAttribute('sc_ttl');
  }
  public set scTtl(value: number) {
    this._scTtl = value;
  }
  public resetScTtl() {
    this._scTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scTtlInput() {
    return this._scTtl;
  }

  // static_routes - computed: true, optional: true, required: false
  private _staticRoutes = new NetworkpoolStaticRoutesList(this, "static_routes", true);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: NetworkpoolStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_zone: cdktf.stringToTerraform(this._accessZone),
      aggregation_mode: cdktf.stringToTerraform(this._aggregationMode),
      alloc_method: cdktf.stringToTerraform(this._allocMethod),
      description: cdktf.stringToTerraform(this._description),
      groupnet: cdktf.stringToTerraform(this._groupnet),
      ifaces: cdktf.listMapper(networkpoolIfacesToTerraform, false)(this._ifaces.internalValue),
      name: cdktf.stringToTerraform(this._name),
      nfsv3_rroce_only: cdktf.booleanToTerraform(this._nfsv3RroceOnly),
      ranges: cdktf.listMapper(networkpoolRangesToTerraform, false)(this._ranges.internalValue),
      rebalance_policy: cdktf.stringToTerraform(this._rebalancePolicy),
      sc_auto_unsuspend_delay: cdktf.numberToTerraform(this._scAutoUnsuspendDelay),
      sc_connect_policy: cdktf.stringToTerraform(this._scConnectPolicy),
      sc_dns_zone: cdktf.stringToTerraform(this._scDnsZone),
      sc_dns_zone_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scDnsZoneAliases),
      sc_failover_policy: cdktf.stringToTerraform(this._scFailoverPolicy),
      sc_subnet: cdktf.stringToTerraform(this._scSubnet),
      sc_ttl: cdktf.numberToTerraform(this._scTtl),
      static_routes: cdktf.listMapper(networkpoolStaticRoutesToTerraform, false)(this._staticRoutes.internalValue),
      subnet: cdktf.stringToTerraform(this._subnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_zone: {
        value: cdktf.stringToHclTerraform(this._accessZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregation_mode: {
        value: cdktf.stringToHclTerraform(this._aggregationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alloc_method: {
        value: cdktf.stringToHclTerraform(this._allocMethod),
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
      groupnet: {
        value: cdktf.stringToHclTerraform(this._groupnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifaces: {
        value: cdktf.listMapperHcl(networkpoolIfacesToHclTerraform, false)(this._ifaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkpoolIfacesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfsv3_rroce_only: {
        value: cdktf.booleanToHclTerraform(this._nfsv3RroceOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ranges: {
        value: cdktf.listMapperHcl(networkpoolRangesToHclTerraform, false)(this._ranges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkpoolRangesList",
      },
      rebalance_policy: {
        value: cdktf.stringToHclTerraform(this._rebalancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sc_auto_unsuspend_delay: {
        value: cdktf.numberToHclTerraform(this._scAutoUnsuspendDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sc_connect_policy: {
        value: cdktf.stringToHclTerraform(this._scConnectPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sc_dns_zone: {
        value: cdktf.stringToHclTerraform(this._scDnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sc_dns_zone_aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scDnsZoneAliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sc_failover_policy: {
        value: cdktf.stringToHclTerraform(this._scFailoverPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sc_subnet: {
        value: cdktf.stringToHclTerraform(this._scSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sc_ttl: {
        value: cdktf.numberToHclTerraform(this._scTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_routes: {
        value: cdktf.listMapperHcl(networkpoolStaticRoutesToHclTerraform, false)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkpoolStaticRoutesList",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
