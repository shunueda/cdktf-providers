// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalNetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Dedicate this External Network to an Org ID (only with IP Spaces, VCD 10.4.1+) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#dedicated_org_id ExternalNetworkV2#dedicated_org_id}
  */
  readonly dedicatedOrgId?: string;
  /**
  * Network description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#description ExternalNetworkV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#id ExternalNetworkV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#name ExternalNetworkV2#name}
  */
  readonly name: string;
  /**
  * Defines intentions to configure NAT and Firewall rules (only with IP Spaces, VCD 10.5.1+) One of `PROVIDER_GATEWAY`,`EDGE_GATEWAY`,`PROVIDER_AND_EDGE_GATEWAY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#nat_and_firewall_service_intention ExternalNetworkV2#nat_and_firewall_service_intention}
  */
  readonly natAndFirewallServiceIntention?: string;
  /**
  * Defines intentions to configure route advertisement (only with IP Spaces, VCD 10.5.1+) One of `IP_SPACE_UPLINKS_ADVERTISED_STRICT`,`IP_SPACE_UPLINKS_ADVERTISED_FLEXIBLE`,`ALL_NETWORKS_ADVERTISED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#route_advertisement_intention ExternalNetworkV2#route_advertisement_intention}
  */
  readonly routeAdvertisementIntention?: string;
  /**
  * Enables IP Spaces for this network (default 'false'). VCD 10.4.1+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#use_ip_spaces ExternalNetworkV2#use_ip_spaces}
  */
  readonly useIpSpaces?: boolean | cdktf.IResolvable;
  /**
  * ip_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#ip_scope ExternalNetworkV2#ip_scope}
  */
  readonly ipScope?: ExternalNetworkV2IpScope[] | cdktf.IResolvable;
  /**
  * nsxt_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#nsxt_network ExternalNetworkV2#nsxt_network}
  */
  readonly nsxtNetwork?: ExternalNetworkV2NsxtNetwork;
  /**
  * vsphere_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#vsphere_network ExternalNetworkV2#vsphere_network}
  */
  readonly vsphereNetwork?: ExternalNetworkV2VsphereNetwork[] | cdktf.IResolvable;
}
export interface ExternalNetworkV2IpScopeStaticIpPool {
  /**
  * End address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#end_address ExternalNetworkV2#end_address}
  */
  readonly endAddress: string;
  /**
  * Start address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#start_address ExternalNetworkV2#start_address}
  */
  readonly startAddress: string;
}

export function externalNetworkV2IpScopeStaticIpPoolToTerraform(struct?: ExternalNetworkV2IpScopeStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function externalNetworkV2IpScopeStaticIpPoolToHclTerraform(struct?: ExternalNetworkV2IpScopeStaticIpPool | cdktf.IResolvable): any {
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

export class ExternalNetworkV2IpScopeStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalNetworkV2IpScopeStaticIpPool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalNetworkV2IpScopeStaticIpPool | cdktf.IResolvable | undefined) {
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

export class ExternalNetworkV2IpScopeStaticIpPoolList extends cdktf.ComplexList {
  public internalValue? : ExternalNetworkV2IpScopeStaticIpPool[] | cdktf.IResolvable

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
  public get(index: number): ExternalNetworkV2IpScopeStaticIpPoolOutputReference {
    return new ExternalNetworkV2IpScopeStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalNetworkV2IpScope {
  /**
  * Primary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#dns1 ExternalNetworkV2#dns1}
  */
  readonly dns1?: string;
  /**
  * Secondary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#dns2 ExternalNetworkV2#dns2}
  */
  readonly dns2?: string;
  /**
  * DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#dns_suffix ExternalNetworkV2#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * If subnet is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#enabled ExternalNetworkV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Gateway of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#gateway ExternalNetworkV2#gateway}
  */
  readonly gateway: string;
  /**
  * Network mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#prefix_length ExternalNetworkV2#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#static_ip_pool ExternalNetworkV2#static_ip_pool}
  */
  readonly staticIpPool?: ExternalNetworkV2IpScopeStaticIpPool[] | cdktf.IResolvable;
}

export function externalNetworkV2IpScopeToTerraform(struct?: ExternalNetworkV2IpScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns1: cdktf.stringToTerraform(struct!.dns1),
    dns2: cdktf.stringToTerraform(struct!.dns2),
    dns_suffix: cdktf.stringToTerraform(struct!.dnsSuffix),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    static_ip_pool: cdktf.listMapper(externalNetworkV2IpScopeStaticIpPoolToTerraform, true)(struct!.staticIpPool),
  }
}


export function externalNetworkV2IpScopeToHclTerraform(struct?: ExternalNetworkV2IpScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns1: {
      value: cdktf.stringToHclTerraform(struct!.dns1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns2: {
      value: cdktf.stringToHclTerraform(struct!.dns2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.dnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ip_pool: {
      value: cdktf.listMapperHcl(externalNetworkV2IpScopeStaticIpPoolToHclTerraform, true)(struct!.staticIpPool),
      isBlock: true,
      type: "set",
      storageClassType: "ExternalNetworkV2IpScopeStaticIpPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalNetworkV2IpScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalNetworkV2IpScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns1 = this._dns1;
    }
    if (this._dns2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns2 = this._dns2;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._staticIpPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPool = this._staticIpPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalNetworkV2IpScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns1 = undefined;
      this._dns2 = undefined;
      this._dnsSuffix = undefined;
      this._enabled = undefined;
      this._gateway = undefined;
      this._prefixLength = undefined;
      this._staticIpPool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns1 = value.dns1;
      this._dns2 = value.dns2;
      this._dnsSuffix = value.dnsSuffix;
      this._enabled = value.enabled;
      this._gateway = value.gateway;
      this._prefixLength = value.prefixLength;
      this._staticIpPool.internalValue = value.staticIpPool;
    }
  }

  // dns1 - computed: false, optional: true, required: false
  private _dns1?: string; 
  public get dns1() {
    return this.getStringAttribute('dns1');
  }
  public set dns1(value: string) {
    this._dns1 = value;
  }
  public resetDns1() {
    this._dns1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns1Input() {
    return this._dns1;
  }

  // dns2 - computed: false, optional: true, required: false
  private _dns2?: string; 
  public get dns2() {
    return this.getStringAttribute('dns2');
  }
  public set dns2(value: string) {
    this._dns2 = value;
  }
  public resetDns2() {
    this._dns2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns2Input() {
    return this._dns2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool = new ExternalNetworkV2IpScopeStaticIpPoolList(this, "static_ip_pool", true);
  public get staticIpPool() {
    return this._staticIpPool;
  }
  public putStaticIpPool(value: ExternalNetworkV2IpScopeStaticIpPool[] | cdktf.IResolvable) {
    this._staticIpPool.internalValue = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool.internalValue;
  }
}

export class ExternalNetworkV2IpScopeList extends cdktf.ComplexList {
  public internalValue? : ExternalNetworkV2IpScope[] | cdktf.IResolvable

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
  public get(index: number): ExternalNetworkV2IpScopeOutputReference {
    return new ExternalNetworkV2IpScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalNetworkV2NsxtNetwork {
  /**
  * ID of NSX-T manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#nsxt_manager_id ExternalNetworkV2#nsxt_manager_id}
  */
  readonly nsxtManagerId: string;
  /**
  * Name of NSX-T segment (for NSX-T segment backed external network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#nsxt_segment_name ExternalNetworkV2#nsxt_segment_name}
  */
  readonly nsxtSegmentName?: string;
  /**
  * ID of NSX-T Tier-0 router (for T0 gateway backed external network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#nsxt_tier0_router_id ExternalNetworkV2#nsxt_tier0_router_id}
  */
  readonly nsxtTier0RouterId?: string;
}

export function externalNetworkV2NsxtNetworkToTerraform(struct?: ExternalNetworkV2NsxtNetworkOutputReference | ExternalNetworkV2NsxtNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsxt_manager_id: cdktf.stringToTerraform(struct!.nsxtManagerId),
    nsxt_segment_name: cdktf.stringToTerraform(struct!.nsxtSegmentName),
    nsxt_tier0_router_id: cdktf.stringToTerraform(struct!.nsxtTier0RouterId),
  }
}


export function externalNetworkV2NsxtNetworkToHclTerraform(struct?: ExternalNetworkV2NsxtNetworkOutputReference | ExternalNetworkV2NsxtNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsxt_manager_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxtManagerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsxt_segment_name: {
      value: cdktf.stringToHclTerraform(struct!.nsxtSegmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsxt_tier0_router_id: {
      value: cdktf.stringToHclTerraform(struct!.nsxtTier0RouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalNetworkV2NsxtNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalNetworkV2NsxtNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsxtManagerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtManagerId = this._nsxtManagerId;
    }
    if (this._nsxtSegmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtSegmentName = this._nsxtSegmentName;
    }
    if (this._nsxtTier0RouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtTier0RouterId = this._nsxtTier0RouterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalNetworkV2NsxtNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsxtManagerId = undefined;
      this._nsxtSegmentName = undefined;
      this._nsxtTier0RouterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsxtManagerId = value.nsxtManagerId;
      this._nsxtSegmentName = value.nsxtSegmentName;
      this._nsxtTier0RouterId = value.nsxtTier0RouterId;
    }
  }

  // nsxt_manager_id - computed: false, optional: false, required: true
  private _nsxtManagerId?: string; 
  public get nsxtManagerId() {
    return this.getStringAttribute('nsxt_manager_id');
  }
  public set nsxtManagerId(value: string) {
    this._nsxtManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtManagerIdInput() {
    return this._nsxtManagerId;
  }

  // nsxt_segment_name - computed: false, optional: true, required: false
  private _nsxtSegmentName?: string; 
  public get nsxtSegmentName() {
    return this.getStringAttribute('nsxt_segment_name');
  }
  public set nsxtSegmentName(value: string) {
    this._nsxtSegmentName = value;
  }
  public resetNsxtSegmentName() {
    this._nsxtSegmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtSegmentNameInput() {
    return this._nsxtSegmentName;
  }

  // nsxt_tier0_router_id - computed: false, optional: true, required: false
  private _nsxtTier0RouterId?: string; 
  public get nsxtTier0RouterId() {
    return this.getStringAttribute('nsxt_tier0_router_id');
  }
  public set nsxtTier0RouterId(value: string) {
    this._nsxtTier0RouterId = value;
  }
  public resetNsxtTier0RouterId() {
    this._nsxtTier0RouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtTier0RouterIdInput() {
    return this._nsxtTier0RouterId;
  }
}
export interface ExternalNetworkV2VsphereNetwork {
  /**
  * The name of the port group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#portgroup_id ExternalNetworkV2#portgroup_id}
  */
  readonly portgroupId: string;
  /**
  * The vCenter server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#vcenter_id ExternalNetworkV2#vcenter_id}
  */
  readonly vcenterId: string;
}

export function externalNetworkV2VsphereNetworkToTerraform(struct?: ExternalNetworkV2VsphereNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    portgroup_id: cdktf.stringToTerraform(struct!.portgroupId),
    vcenter_id: cdktf.stringToTerraform(struct!.vcenterId),
  }
}


export function externalNetworkV2VsphereNetworkToHclTerraform(struct?: ExternalNetworkV2VsphereNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    portgroup_id: {
      value: cdktf.stringToHclTerraform(struct!.portgroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_id: {
      value: cdktf.stringToHclTerraform(struct!.vcenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalNetworkV2VsphereNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalNetworkV2VsphereNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portgroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portgroupId = this._portgroupId;
    }
    if (this._vcenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterId = this._vcenterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalNetworkV2VsphereNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portgroupId = undefined;
      this._vcenterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portgroupId = value.portgroupId;
      this._vcenterId = value.vcenterId;
    }
  }

  // portgroup_id - computed: false, optional: false, required: true
  private _portgroupId?: string; 
  public get portgroupId() {
    return this.getStringAttribute('portgroup_id');
  }
  public set portgroupId(value: string) {
    this._portgroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupIdInput() {
    return this._portgroupId;
  }

  // vcenter_id - computed: false, optional: false, required: true
  private _vcenterId?: string; 
  public get vcenterId() {
    return this.getStringAttribute('vcenter_id');
  }
  public set vcenterId(value: string) {
    this._vcenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterIdInput() {
    return this._vcenterId;
  }
}

export class ExternalNetworkV2VsphereNetworkList extends cdktf.ComplexList {
  public internalValue? : ExternalNetworkV2VsphereNetwork[] | cdktf.IResolvable

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
  public get(index: number): ExternalNetworkV2VsphereNetworkOutputReference {
    return new ExternalNetworkV2VsphereNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2 vcd_external_network_v2}
*/
export class ExternalNetworkV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_external_network_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalNetworkV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalNetworkV2 to import
  * @param importFromId The id of the existing ExternalNetworkV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalNetworkV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_external_network_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network_v2 vcd_external_network_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalNetworkV2Config
  */
  public constructor(scope: Construct, id: string, config: ExternalNetworkV2Config) {
    super(scope, id, {
      terraformResourceType: 'vcd_external_network_v2',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dedicatedOrgId = config.dedicatedOrgId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._natAndFirewallServiceIntention = config.natAndFirewallServiceIntention;
    this._routeAdvertisementIntention = config.routeAdvertisementIntention;
    this._useIpSpaces = config.useIpSpaces;
    this._ipScope.internalValue = config.ipScope;
    this._nsxtNetwork.internalValue = config.nsxtNetwork;
    this._vsphereNetwork.internalValue = config.vsphereNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_org_id - computed: true, optional: true, required: false
  private _dedicatedOrgId?: string; 
  public get dedicatedOrgId() {
    return this.getStringAttribute('dedicated_org_id');
  }
  public set dedicatedOrgId(value: string) {
    this._dedicatedOrgId = value;
  }
  public resetDedicatedOrgId() {
    this._dedicatedOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedOrgIdInput() {
    return this._dedicatedOrgId;
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

  // nat_and_firewall_service_intention - computed: true, optional: true, required: false
  private _natAndFirewallServiceIntention?: string; 
  public get natAndFirewallServiceIntention() {
    return this.getStringAttribute('nat_and_firewall_service_intention');
  }
  public set natAndFirewallServiceIntention(value: string) {
    this._natAndFirewallServiceIntention = value;
  }
  public resetNatAndFirewallServiceIntention() {
    this._natAndFirewallServiceIntention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natAndFirewallServiceIntentionInput() {
    return this._natAndFirewallServiceIntention;
  }

  // route_advertisement_intention - computed: true, optional: true, required: false
  private _routeAdvertisementIntention?: string; 
  public get routeAdvertisementIntention() {
    return this.getStringAttribute('route_advertisement_intention');
  }
  public set routeAdvertisementIntention(value: string) {
    this._routeAdvertisementIntention = value;
  }
  public resetRouteAdvertisementIntention() {
    this._routeAdvertisementIntention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAdvertisementIntentionInput() {
    return this._routeAdvertisementIntention;
  }

  // use_ip_spaces - computed: false, optional: true, required: false
  private _useIpSpaces?: boolean | cdktf.IResolvable; 
  public get useIpSpaces() {
    return this.getBooleanAttribute('use_ip_spaces');
  }
  public set useIpSpaces(value: boolean | cdktf.IResolvable) {
    this._useIpSpaces = value;
  }
  public resetUseIpSpaces() {
    this._useIpSpaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpSpacesInput() {
    return this._useIpSpaces;
  }

  // ip_scope - computed: false, optional: true, required: false
  private _ipScope = new ExternalNetworkV2IpScopeList(this, "ip_scope", true);
  public get ipScope() {
    return this._ipScope;
  }
  public putIpScope(value: ExternalNetworkV2IpScope[] | cdktf.IResolvable) {
    this._ipScope.internalValue = value;
  }
  public resetIpScope() {
    this._ipScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipScopeInput() {
    return this._ipScope.internalValue;
  }

  // nsxt_network - computed: false, optional: true, required: false
  private _nsxtNetwork = new ExternalNetworkV2NsxtNetworkOutputReference(this, "nsxt_network");
  public get nsxtNetwork() {
    return this._nsxtNetwork;
  }
  public putNsxtNetwork(value: ExternalNetworkV2NsxtNetwork) {
    this._nsxtNetwork.internalValue = value;
  }
  public resetNsxtNetwork() {
    this._nsxtNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtNetworkInput() {
    return this._nsxtNetwork.internalValue;
  }

  // vsphere_network - computed: false, optional: true, required: false
  private _vsphereNetwork = new ExternalNetworkV2VsphereNetworkList(this, "vsphere_network", true);
  public get vsphereNetwork() {
    return this._vsphereNetwork;
  }
  public putVsphereNetwork(value: ExternalNetworkV2VsphereNetwork[] | cdktf.IResolvable) {
    this._vsphereNetwork.internalValue = value;
  }
  public resetVsphereNetwork() {
    this._vsphereNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereNetworkInput() {
    return this._vsphereNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_org_id: cdktf.stringToTerraform(this._dedicatedOrgId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat_and_firewall_service_intention: cdktf.stringToTerraform(this._natAndFirewallServiceIntention),
      route_advertisement_intention: cdktf.stringToTerraform(this._routeAdvertisementIntention),
      use_ip_spaces: cdktf.booleanToTerraform(this._useIpSpaces),
      ip_scope: cdktf.listMapper(externalNetworkV2IpScopeToTerraform, true)(this._ipScope.internalValue),
      nsxt_network: externalNetworkV2NsxtNetworkToTerraform(this._nsxtNetwork.internalValue),
      vsphere_network: cdktf.listMapper(externalNetworkV2VsphereNetworkToTerraform, true)(this._vsphereNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_org_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedOrgId),
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
      nat_and_firewall_service_intention: {
        value: cdktf.stringToHclTerraform(this._natAndFirewallServiceIntention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_advertisement_intention: {
        value: cdktf.stringToHclTerraform(this._routeAdvertisementIntention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ip_spaces: {
        value: cdktf.booleanToHclTerraform(this._useIpSpaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_scope: {
        value: cdktf.listMapperHcl(externalNetworkV2IpScopeToHclTerraform, true)(this._ipScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ExternalNetworkV2IpScopeList",
      },
      nsxt_network: {
        value: externalNetworkV2NsxtNetworkToHclTerraform(this._nsxtNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalNetworkV2NsxtNetworkList",
      },
      vsphere_network: {
        value: cdktf.listMapperHcl(externalNetworkV2VsphereNetworkToHclTerraform, true)(this._vsphereNetwork.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ExternalNetworkV2VsphereNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
