// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteEvpnTopologyConfig extends cdktf.TerraformMetaArguments {
  /**
  * EVPN Options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#evpn_options SiteEvpnTopology#evpn_options}
  */
  readonly evpnOptions?: SiteEvpnTopologyEvpnOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#name SiteEvpnTopology#name}
  */
  readonly name: string;
  /**
  * Property key is the pod number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#pod_names SiteEvpnTopology#pod_names}
  */
  readonly podNames?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#site_id SiteEvpnTopology#site_id}
  */
  readonly siteId: string;
  /**
  * Property key can be the switch MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#switches SiteEvpnTopology#switches}
  */
  readonly switches: { [key: string]: SiteEvpnTopologySwitches } | cdktf.IResolvable;
}
export interface SiteEvpnTopologyEvpnOptionsOverlay {
  /**
  * Overlay BGP Local AS Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#as SiteEvpnTopology#as}
  */
  readonly as?: number;
}

export function siteEvpnTopologyEvpnOptionsOverlayToTerraform(struct?: SiteEvpnTopologyEvpnOptionsOverlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.numberToTerraform(struct!.as),
  }
}


export function siteEvpnTopologyEvpnOptionsOverlayToHclTerraform(struct?: SiteEvpnTopologyEvpnOptionsOverlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as: {
      value: cdktf.numberToHclTerraform(struct!.as),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteEvpnTopologyEvpnOptionsOverlayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteEvpnTopologyEvpnOptionsOverlay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteEvpnTopologyEvpnOptionsOverlay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._as = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._as = value.as;
    }
  }

  // as - computed: true, optional: true, required: false
  private _as?: number; 
  public get as() {
    return this.getNumberAttribute('as');
  }
  public set as(value: number) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }
}
export interface SiteEvpnTopologyEvpnOptionsUnderlay {
  /**
  * Underlay BGP Base AS Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#as_base SiteEvpnTopology#as_base}
  */
  readonly asBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#routed_id_prefix SiteEvpnTopology#routed_id_prefix}
  */
  readonly routedIdPrefix?: string;
  /**
  * Underlay subnet, by default, `10.255.240.0/20`, or `fd31:5700::/64` for ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#subnet SiteEvpnTopology#subnet}
  */
  readonly subnet?: string;
  /**
  * If v6 is desired for underlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#use_ipv6 SiteEvpnTopology#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
}

export function siteEvpnTopologyEvpnOptionsUnderlayToTerraform(struct?: SiteEvpnTopologyEvpnOptionsUnderlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_base: cdktf.numberToTerraform(struct!.asBase),
    routed_id_prefix: cdktf.stringToTerraform(struct!.routedIdPrefix),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    use_ipv6: cdktf.booleanToTerraform(struct!.useIpv6),
  }
}


export function siteEvpnTopologyEvpnOptionsUnderlayToHclTerraform(struct?: SiteEvpnTopologyEvpnOptionsUnderlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_base: {
      value: cdktf.numberToHclTerraform(struct!.asBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routed_id_prefix: {
      value: cdktf.stringToHclTerraform(struct!.routedIdPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.useIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteEvpnTopologyEvpnOptionsUnderlayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteEvpnTopologyEvpnOptionsUnderlay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBase = this._asBase;
    }
    if (this._routedIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.routedIdPrefix = this._routedIdPrefix;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._useIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIpv6 = this._useIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteEvpnTopologyEvpnOptionsUnderlay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asBase = undefined;
      this._routedIdPrefix = undefined;
      this._subnet = undefined;
      this._useIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asBase = value.asBase;
      this._routedIdPrefix = value.routedIdPrefix;
      this._subnet = value.subnet;
      this._useIpv6 = value.useIpv6;
    }
  }

  // as_base - computed: true, optional: true, required: false
  private _asBase?: number; 
  public get asBase() {
    return this.getNumberAttribute('as_base');
  }
  public set asBase(value: number) {
    this._asBase = value;
  }
  public resetAsBase() {
    this._asBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBaseInput() {
    return this._asBase;
  }

  // routed_id_prefix - computed: false, optional: true, required: false
  private _routedIdPrefix?: string; 
  public get routedIdPrefix() {
    return this.getStringAttribute('routed_id_prefix');
  }
  public set routedIdPrefix(value: string) {
    this._routedIdPrefix = value;
  }
  public resetRoutedIdPrefix() {
    this._routedIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedIdPrefixInput() {
    return this._routedIdPrefix;
  }

  // subnet - computed: false, optional: true, required: false
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

  // use_ipv6 - computed: true, optional: true, required: false
  private _useIpv6?: boolean | cdktf.IResolvable; 
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
  public set useIpv6(value: boolean | cdktf.IResolvable) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }
}
export interface SiteEvpnTopologyEvpnOptionsVsInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#networks SiteEvpnTopology#networks}
  */
  readonly networks?: string[];
}

export function siteEvpnTopologyEvpnOptionsVsInstancesToTerraform(struct?: SiteEvpnTopologyEvpnOptionsVsInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function siteEvpnTopologyEvpnOptionsVsInstancesToHclTerraform(struct?: SiteEvpnTopologyEvpnOptionsVsInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteEvpnTopologyEvpnOptionsVsInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteEvpnTopologyEvpnOptionsVsInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteEvpnTopologyEvpnOptionsVsInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networks = value.networks;
    }
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}

export class SiteEvpnTopologyEvpnOptionsVsInstancesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteEvpnTopologyEvpnOptionsVsInstances } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteEvpnTopologyEvpnOptionsVsInstancesOutputReference {
    return new SiteEvpnTopologyEvpnOptionsVsInstancesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteEvpnTopologyEvpnOptions {
  /**
  * Optional, for dhcp_relay, unique loopback IPs are required for ERB or IPClos where we can set option-82 server_id-overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#auto_loopback_subnet SiteEvpnTopology#auto_loopback_subnet}
  */
  readonly autoLoopbackSubnet?: string;
  /**
  * Optional, for dhcp_relay, unique loopback IPs are required for ERB or IPClos where we can set option-82 server_id-overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#auto_loopback_subnet6 SiteEvpnTopology#auto_loopback_subnet6}
  */
  readonly autoLoopbackSubnet6?: string;
  /**
  * Optional, this generates router_id automatically, if specified, `router_id_prefix` is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#auto_router_id_subnet SiteEvpnTopology#auto_router_id_subnet}
  */
  readonly autoRouterIdSubnet?: string;
  /**
  * Optional, this generates router_id automatically, if specified, `router_id_prefix` is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#auto_router_id_subnet6 SiteEvpnTopology#auto_router_id_subnet6}
  */
  readonly autoRouterIdSubnet6?: string;
  /**
  * Optional, for ERB or CLOS, you can either use esilag to upstream routers or to also be the virtual-gateway. When `routed_at` != `core`, whether to do virtual-gateway at core as well
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#core_as_border SiteEvpnTopology#core_as_border}
  */
  readonly coreAsBorder?: boolean | cdktf.IResolvable;
  /**
  * if the mangement traffic goes inbnd, during installation, only the border/core switches are connected to the Internet to allow initial configuration to be pushed down and leave the downstream access switches stay in the Factory Default state enabling inband-ztp allows upstream switches to use LLDP to assign IP and gives Internet to downstream switches in that state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#enable_inband_ztp SiteEvpnTopology#enable_inband_ztp}
  */
  readonly enableInbandZtp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#overlay SiteEvpnTopology#overlay}
  */
  readonly overlay?: SiteEvpnTopologyEvpnOptionsOverlay;
  /**
  * Only for by Core-Distribution architecture when `evpn_options.routed_at`==`core`. By default, JUNOS uses 00-00-5e-00-01-01 as the virtual-gateway-address's v4_mac. If enabled, 00-00-5e-00-0X-YY will be used (where XX=vlan_id/256, YY=vlan_id%256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#per_vlan_vga_v4_mac SiteEvpnTopology#per_vlan_vga_v4_mac}
  */
  readonly perVlanVgaV4Mac?: boolean | cdktf.IResolvable;
  /**
  * Only for by Core-Distribution architecture when `evpn_options.routed_at`==`core`. By default, JUNOS uses 00-00-5e-00-02-01 as the virtual-gateway-address's v6_mac. If enabled, 00-00-5e-00-1X-YY will be used (where XX=vlan_id/256, YY=vlan_id%256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#per_vlan_vga_v6_mac SiteEvpnTopology#per_vlan_vga_v6_mac}
  */
  readonly perVlanVgaV6Mac?: boolean | cdktf.IResolvable;
  /**
  * optional, where virtual-gateway should reside. enum: `core`, `distribution`, `edge`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#routed_at SiteEvpnTopology#routed_at}
  */
  readonly routedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#underlay SiteEvpnTopology#underlay}
  */
  readonly underlay?: SiteEvpnTopologyEvpnOptionsUnderlay;
  /**
  * Optional, for EX9200 only to segregate virtual-switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#vs_instances SiteEvpnTopology#vs_instances}
  */
  readonly vsInstances?: { [key: string]: SiteEvpnTopologyEvpnOptionsVsInstances } | cdktf.IResolvable;
}

export function siteEvpnTopologyEvpnOptionsToTerraform(struct?: SiteEvpnTopologyEvpnOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_loopback_subnet: cdktf.stringToTerraform(struct!.autoLoopbackSubnet),
    auto_loopback_subnet6: cdktf.stringToTerraform(struct!.autoLoopbackSubnet6),
    auto_router_id_subnet: cdktf.stringToTerraform(struct!.autoRouterIdSubnet),
    auto_router_id_subnet6: cdktf.stringToTerraform(struct!.autoRouterIdSubnet6),
    core_as_border: cdktf.booleanToTerraform(struct!.coreAsBorder),
    enable_inband_ztp: cdktf.booleanToTerraform(struct!.enableInbandZtp),
    overlay: siteEvpnTopologyEvpnOptionsOverlayToTerraform(struct!.overlay),
    per_vlan_vga_v4_mac: cdktf.booleanToTerraform(struct!.perVlanVgaV4Mac),
    per_vlan_vga_v6_mac: cdktf.booleanToTerraform(struct!.perVlanVgaV6Mac),
    routed_at: cdktf.stringToTerraform(struct!.routedAt),
    underlay: siteEvpnTopologyEvpnOptionsUnderlayToTerraform(struct!.underlay),
    vs_instances: cdktf.hashMapper(siteEvpnTopologyEvpnOptionsVsInstancesToTerraform)(struct!.vsInstances),
  }
}


export function siteEvpnTopologyEvpnOptionsToHclTerraform(struct?: SiteEvpnTopologyEvpnOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_loopback_subnet: {
      value: cdktf.stringToHclTerraform(struct!.autoLoopbackSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_loopback_subnet6: {
      value: cdktf.stringToHclTerraform(struct!.autoLoopbackSubnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_router_id_subnet: {
      value: cdktf.stringToHclTerraform(struct!.autoRouterIdSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_router_id_subnet6: {
      value: cdktf.stringToHclTerraform(struct!.autoRouterIdSubnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    core_as_border: {
      value: cdktf.booleanToHclTerraform(struct!.coreAsBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_inband_ztp: {
      value: cdktf.booleanToHclTerraform(struct!.enableInbandZtp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overlay: {
      value: siteEvpnTopologyEvpnOptionsOverlayToHclTerraform(struct!.overlay),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteEvpnTopologyEvpnOptionsOverlay",
    },
    per_vlan_vga_v4_mac: {
      value: cdktf.booleanToHclTerraform(struct!.perVlanVgaV4Mac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_vlan_vga_v6_mac: {
      value: cdktf.booleanToHclTerraform(struct!.perVlanVgaV6Mac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routed_at: {
      value: cdktf.stringToHclTerraform(struct!.routedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    underlay: {
      value: siteEvpnTopologyEvpnOptionsUnderlayToHclTerraform(struct!.underlay),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteEvpnTopologyEvpnOptionsUnderlay",
    },
    vs_instances: {
      value: cdktf.hashMapperHcl(siteEvpnTopologyEvpnOptionsVsInstancesToHclTerraform)(struct!.vsInstances),
      isBlock: true,
      type: "map",
      storageClassType: "SiteEvpnTopologyEvpnOptionsVsInstancesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteEvpnTopologyEvpnOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteEvpnTopologyEvpnOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoLoopbackSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLoopbackSubnet = this._autoLoopbackSubnet;
    }
    if (this._autoLoopbackSubnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLoopbackSubnet6 = this._autoLoopbackSubnet6;
    }
    if (this._autoRouterIdSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRouterIdSubnet = this._autoRouterIdSubnet;
    }
    if (this._autoRouterIdSubnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRouterIdSubnet6 = this._autoRouterIdSubnet6;
    }
    if (this._coreAsBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreAsBorder = this._coreAsBorder;
    }
    if (this._enableInbandZtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInbandZtp = this._enableInbandZtp;
    }
    if (this._overlay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlay = this._overlay?.internalValue;
    }
    if (this._perVlanVgaV4Mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.perVlanVgaV4Mac = this._perVlanVgaV4Mac;
    }
    if (this._perVlanVgaV6Mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.perVlanVgaV6Mac = this._perVlanVgaV6Mac;
    }
    if (this._routedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.routedAt = this._routedAt;
    }
    if (this._underlay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.underlay = this._underlay?.internalValue;
    }
    if (this._vsInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsInstances = this._vsInstances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteEvpnTopologyEvpnOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoLoopbackSubnet = undefined;
      this._autoLoopbackSubnet6 = undefined;
      this._autoRouterIdSubnet = undefined;
      this._autoRouterIdSubnet6 = undefined;
      this._coreAsBorder = undefined;
      this._enableInbandZtp = undefined;
      this._overlay.internalValue = undefined;
      this._perVlanVgaV4Mac = undefined;
      this._perVlanVgaV6Mac = undefined;
      this._routedAt = undefined;
      this._underlay.internalValue = undefined;
      this._vsInstances.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoLoopbackSubnet = value.autoLoopbackSubnet;
      this._autoLoopbackSubnet6 = value.autoLoopbackSubnet6;
      this._autoRouterIdSubnet = value.autoRouterIdSubnet;
      this._autoRouterIdSubnet6 = value.autoRouterIdSubnet6;
      this._coreAsBorder = value.coreAsBorder;
      this._enableInbandZtp = value.enableInbandZtp;
      this._overlay.internalValue = value.overlay;
      this._perVlanVgaV4Mac = value.perVlanVgaV4Mac;
      this._perVlanVgaV6Mac = value.perVlanVgaV6Mac;
      this._routedAt = value.routedAt;
      this._underlay.internalValue = value.underlay;
      this._vsInstances.internalValue = value.vsInstances;
    }
  }

  // auto_loopback_subnet - computed: true, optional: true, required: false
  private _autoLoopbackSubnet?: string; 
  public get autoLoopbackSubnet() {
    return this.getStringAttribute('auto_loopback_subnet');
  }
  public set autoLoopbackSubnet(value: string) {
    this._autoLoopbackSubnet = value;
  }
  public resetAutoLoopbackSubnet() {
    this._autoLoopbackSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoopbackSubnetInput() {
    return this._autoLoopbackSubnet;
  }

  // auto_loopback_subnet6 - computed: true, optional: true, required: false
  private _autoLoopbackSubnet6?: string; 
  public get autoLoopbackSubnet6() {
    return this.getStringAttribute('auto_loopback_subnet6');
  }
  public set autoLoopbackSubnet6(value: string) {
    this._autoLoopbackSubnet6 = value;
  }
  public resetAutoLoopbackSubnet6() {
    this._autoLoopbackSubnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoopbackSubnet6Input() {
    return this._autoLoopbackSubnet6;
  }

  // auto_router_id_subnet - computed: true, optional: true, required: false
  private _autoRouterIdSubnet?: string; 
  public get autoRouterIdSubnet() {
    return this.getStringAttribute('auto_router_id_subnet');
  }
  public set autoRouterIdSubnet(value: string) {
    this._autoRouterIdSubnet = value;
  }
  public resetAutoRouterIdSubnet() {
    this._autoRouterIdSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRouterIdSubnetInput() {
    return this._autoRouterIdSubnet;
  }

  // auto_router_id_subnet6 - computed: false, optional: true, required: false
  private _autoRouterIdSubnet6?: string; 
  public get autoRouterIdSubnet6() {
    return this.getStringAttribute('auto_router_id_subnet6');
  }
  public set autoRouterIdSubnet6(value: string) {
    this._autoRouterIdSubnet6 = value;
  }
  public resetAutoRouterIdSubnet6() {
    this._autoRouterIdSubnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRouterIdSubnet6Input() {
    return this._autoRouterIdSubnet6;
  }

  // core_as_border - computed: true, optional: true, required: false
  private _coreAsBorder?: boolean | cdktf.IResolvable; 
  public get coreAsBorder() {
    return this.getBooleanAttribute('core_as_border');
  }
  public set coreAsBorder(value: boolean | cdktf.IResolvable) {
    this._coreAsBorder = value;
  }
  public resetCoreAsBorder() {
    this._coreAsBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAsBorderInput() {
    return this._coreAsBorder;
  }

  // enable_inband_ztp - computed: true, optional: true, required: false
  private _enableInbandZtp?: boolean | cdktf.IResolvable; 
  public get enableInbandZtp() {
    return this.getBooleanAttribute('enable_inband_ztp');
  }
  public set enableInbandZtp(value: boolean | cdktf.IResolvable) {
    this._enableInbandZtp = value;
  }
  public resetEnableInbandZtp() {
    this._enableInbandZtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInbandZtpInput() {
    return this._enableInbandZtp;
  }

  // overlay - computed: false, optional: true, required: false
  private _overlay = new SiteEvpnTopologyEvpnOptionsOverlayOutputReference(this, "overlay");
  public get overlay() {
    return this._overlay;
  }
  public putOverlay(value: SiteEvpnTopologyEvpnOptionsOverlay) {
    this._overlay.internalValue = value;
  }
  public resetOverlay() {
    this._overlay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayInput() {
    return this._overlay.internalValue;
  }

  // per_vlan_vga_v4_mac - computed: true, optional: true, required: false
  private _perVlanVgaV4Mac?: boolean | cdktf.IResolvable; 
  public get perVlanVgaV4Mac() {
    return this.getBooleanAttribute('per_vlan_vga_v4_mac');
  }
  public set perVlanVgaV4Mac(value: boolean | cdktf.IResolvable) {
    this._perVlanVgaV4Mac = value;
  }
  public resetPerVlanVgaV4Mac() {
    this._perVlanVgaV4Mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVlanVgaV4MacInput() {
    return this._perVlanVgaV4Mac;
  }

  // per_vlan_vga_v6_mac - computed: true, optional: true, required: false
  private _perVlanVgaV6Mac?: boolean | cdktf.IResolvable; 
  public get perVlanVgaV6Mac() {
    return this.getBooleanAttribute('per_vlan_vga_v6_mac');
  }
  public set perVlanVgaV6Mac(value: boolean | cdktf.IResolvable) {
    this._perVlanVgaV6Mac = value;
  }
  public resetPerVlanVgaV6Mac() {
    this._perVlanVgaV6Mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVlanVgaV6MacInput() {
    return this._perVlanVgaV6Mac;
  }

  // routed_at - computed: true, optional: true, required: false
  private _routedAt?: string; 
  public get routedAt() {
    return this.getStringAttribute('routed_at');
  }
  public set routedAt(value: string) {
    this._routedAt = value;
  }
  public resetRoutedAt() {
    this._routedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedAtInput() {
    return this._routedAt;
  }

  // underlay - computed: false, optional: true, required: false
  private _underlay = new SiteEvpnTopologyEvpnOptionsUnderlayOutputReference(this, "underlay");
  public get underlay() {
    return this._underlay;
  }
  public putUnderlay(value: SiteEvpnTopologyEvpnOptionsUnderlay) {
    this._underlay.internalValue = value;
  }
  public resetUnderlay() {
    this._underlay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayInput() {
    return this._underlay.internalValue;
  }

  // vs_instances - computed: false, optional: true, required: false
  private _vsInstances = new SiteEvpnTopologyEvpnOptionsVsInstancesMap(this, "vs_instances");
  public get vsInstances() {
    return this._vsInstances;
  }
  public putVsInstances(value: { [key: string]: SiteEvpnTopologyEvpnOptionsVsInstances } | cdktf.IResolvable) {
    this._vsInstances.internalValue = value;
  }
  public resetVsInstances() {
    this._vsInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsInstancesInput() {
    return this._vsInstances.internalValue;
  }
}
export interface SiteEvpnTopologySwitches {
  /**
  * Optionally, for distribution / access / esilag-access, they can be placed into different pods. e.g. 
  *   * for CLOS, to group dist / access switches into pods
  *   * for ERB/CRB, to group dist / esilag-access into pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#pod SiteEvpnTopology#pod}
  */
  readonly pod?: number;
  /**
  * By default, core switches are assumed to be connecting all pods. 
  * if you want to limit the pods, you can specify pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#pods SiteEvpnTopology#pods}
  */
  readonly pods?: number[];
  /**
  * use `role`==`none` to remove a switch from the topology. enum: `access`, `collapsed-core`, `core`, `distribution`, `esilag-access`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#role SiteEvpnTopology#role}
  */
  readonly role: string;
}

export function siteEvpnTopologySwitchesToTerraform(struct?: SiteEvpnTopologySwitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod: cdktf.numberToTerraform(struct!.pod),
    pods: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.pods),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function siteEvpnTopologySwitchesToHclTerraform(struct?: SiteEvpnTopologySwitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod: {
      value: cdktf.numberToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pods: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.pods),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
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

export class SiteEvpnTopologySwitchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteEvpnTopologySwitches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteEvpnTopologySwitches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pod = undefined;
      this._pods = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pod = value.pod;
      this._pods = value.pods;
      this._role = value.role;
    }
  }

  // deviceprofile_id - computed: true, optional: false, required: false
  public get deviceprofileId() {
    return this.getStringAttribute('deviceprofile_id');
  }

  // downlink_ips - computed: true, optional: false, required: false
  public get downlinkIps() {
    return this.getListAttribute('downlink_ips');
  }

  // downlinks - computed: true, optional: false, required: false
  public get downlinks() {
    return this.getListAttribute('downlinks');
  }

  // esilaglinks - computed: true, optional: false, required: false
  public get esilaglinks() {
    return this.getListAttribute('esilaglinks');
  }

  // evpn_id - computed: true, optional: false, required: false
  public get evpnId() {
    return this.getNumberAttribute('evpn_id');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // pod - computed: true, optional: true, required: false
  private _pod?: number; 
  public get pod() {
    return this.getNumberAttribute('pod');
  }
  public set pod(value: number) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // pods - computed: true, optional: true, required: false
  private _pods?: number[]; 
  public get pods() {
    return this.getNumberListAttribute('pods');
  }
  public set pods(value: number[]) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
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

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // suggested_downlinks - computed: true, optional: false, required: false
  public get suggestedDownlinks() {
    return this.getListAttribute('suggested_downlinks');
  }

  // suggested_esilaglinks - computed: true, optional: false, required: false
  public get suggestedEsilaglinks() {
    return this.getListAttribute('suggested_esilaglinks');
  }

  // suggested_uplinks - computed: true, optional: false, required: false
  public get suggestedUplinks() {
    return this.getListAttribute('suggested_uplinks');
  }

  // uplinks - computed: true, optional: false, required: false
  public get uplinks() {
    return this.getListAttribute('uplinks');
  }
}

export class SiteEvpnTopologySwitchesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteEvpnTopologySwitches } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteEvpnTopologySwitchesOutputReference {
    return new SiteEvpnTopologySwitchesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology mist_site_evpn_topology}
*/
export class SiteEvpnTopology extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_evpn_topology";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteEvpnTopology resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteEvpnTopology to import
  * @param importFromId The id of the existing SiteEvpnTopology that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteEvpnTopology to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_evpn_topology", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/site_evpn_topology mist_site_evpn_topology} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteEvpnTopologyConfig
  */
  public constructor(scope: Construct, id: string, config: SiteEvpnTopologyConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_evpn_topology',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._evpnOptions.internalValue = config.evpnOptions;
    this._name = config.name;
    this._podNames = config.podNames;
    this._siteId = config.siteId;
    this._switches.internalValue = config.switches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // evpn_options - computed: false, optional: true, required: false
  private _evpnOptions = new SiteEvpnTopologyEvpnOptionsOutputReference(this, "evpn_options");
  public get evpnOptions() {
    return this._evpnOptions;
  }
  public putEvpnOptions(value: SiteEvpnTopologyEvpnOptions) {
    this._evpnOptions.internalValue = value;
  }
  public resetEvpnOptions() {
    this._evpnOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnOptionsInput() {
    return this._evpnOptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // pod_names - computed: true, optional: true, required: false
  private _podNames?: { [key: string]: string }; 
  public get podNames() {
    return this.getStringMapAttribute('pod_names');
  }
  public set podNames(value: { [key: string]: string }) {
    this._podNames = value;
  }
  public resetPodNames() {
    this._podNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNamesInput() {
    return this._podNames;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // switches - computed: false, optional: false, required: true
  private _switches = new SiteEvpnTopologySwitchesMap(this, "switches");
  public get switches() {
    return this._switches;
  }
  public putSwitches(value: { [key: string]: SiteEvpnTopologySwitches } | cdktf.IResolvable) {
    this._switches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchesInput() {
    return this._switches.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      evpn_options: siteEvpnTopologyEvpnOptionsToTerraform(this._evpnOptions.internalValue),
      name: cdktf.stringToTerraform(this._name),
      pod_names: cdktf.hashMapper(cdktf.stringToTerraform)(this._podNames),
      site_id: cdktf.stringToTerraform(this._siteId),
      switches: cdktf.hashMapper(siteEvpnTopologySwitchesToTerraform)(this._switches.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      evpn_options: {
        value: siteEvpnTopologyEvpnOptionsToHclTerraform(this._evpnOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteEvpnTopologyEvpnOptions",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_names: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._podNames),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switches: {
        value: cdktf.hashMapperHcl(siteEvpnTopologySwitchesToHclTerraform)(this._switches.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteEvpnTopologySwitchesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
