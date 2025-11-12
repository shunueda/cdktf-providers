// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * OMP Advertise IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#advertise_omp_ipv4s ServiceLanVpnFeature#advertise_omp_ipv4s}
  */
  readonly advertiseOmpIpv4S?: ServiceLanVpnFeatureAdvertiseOmpIpv4S[] | cdktf.IResolvable;
  /**
  * OMP Advertise IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#advertise_omp_ipv6s ServiceLanVpnFeature#advertise_omp_ipv6s}
  */
  readonly advertiseOmpIpv6S?: ServiceLanVpnFeatureAdvertiseOmpIpv6S[] | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#config_description ServiceLanVpnFeature#config_description}
  */
  readonly configDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#config_description_variable ServiceLanVpnFeature#config_description_variable}
  */
  readonly configDescriptionVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#description ServiceLanVpnFeature#description}
  */
  readonly description?: string;
  /**
  * Enable SDWAN Remote Access
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#enable_sdwan_remote_access ServiceLanVpnFeature#enable_sdwan_remote_access}
  */
  readonly enableSdwanRemoteAccess?: boolean | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#feature_profile_id ServiceLanVpnFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * IPv4 Static GRE Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#gre_routes ServiceLanVpnFeature#gre_routes}
  */
  readonly greRoutes?: ServiceLanVpnFeatureGreRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#host_mappings ServiceLanVpnFeature#host_mappings}
  */
  readonly hostMappings?: ServiceLanVpnFeatureHostMappings[] | cdktf.IResolvable;
  /**
  * IPv4 Static IPSEC Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipsec_routes ServiceLanVpnFeature#ipsec_routes}
  */
  readonly ipsecRoutes?: ServiceLanVpnFeatureIpsecRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv4_export_route_targets ServiceLanVpnFeature#ipv4_export_route_targets}
  */
  readonly ipv4ExportRouteTargets?: ServiceLanVpnFeatureIpv4ExportRouteTargets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv4_import_route_targets ServiceLanVpnFeature#ipv4_import_route_targets}
  */
  readonly ipv4ImportRouteTargets?: ServiceLanVpnFeatureIpv4ImportRouteTargets[] | cdktf.IResolvable;
  /**
  * IPv4 Static Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv4_static_routes ServiceLanVpnFeature#ipv4_static_routes}
  */
  readonly ipv4StaticRoutes?: ServiceLanVpnFeatureIpv4StaticRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv6_export_route_targets ServiceLanVpnFeature#ipv6_export_route_targets}
  */
  readonly ipv6ExportRouteTargets?: ServiceLanVpnFeatureIpv6ExportRouteTargets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv6_import_route_targets ServiceLanVpnFeature#ipv6_import_route_targets}
  */
  readonly ipv6ImportRouteTargets?: ServiceLanVpnFeatureIpv6ImportRouteTargets[] | cdktf.IResolvable;
  /**
  * IPv6 Static Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv6_static_routes ServiceLanVpnFeature#ipv6_static_routes}
  */
  readonly ipv6StaticRoutes?: ServiceLanVpnFeatureIpv6StaticRoutes[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#name ServiceLanVpnFeature#name}
  */
  readonly name: string;
  /**
  * NAT64 V4 Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_64_v4_pools ServiceLanVpnFeature#nat_64_v4_pools}
  */
  readonly nat64V4Pools?: ServiceLanVpnFeatureNat64V4Pools[] | cdktf.IResolvable;
  /**
  * NAT Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pools ServiceLanVpnFeature#nat_pools}
  */
  readonly natPools?: ServiceLanVpnFeatureNatPools[] | cdktf.IResolvable;
  /**
  * NAT Port Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_port_forwards ServiceLanVpnFeature#nat_port_forwards}
  */
  readonly natPortForwards?: ServiceLanVpnFeatureNatPortForwards[] | cdktf.IResolvable;
  /**
  * OMP Admin Distance IPv4
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#omp_admin_distance_ipv4 ServiceLanVpnFeature#omp_admin_distance_ipv4}
  */
  readonly ompAdminDistanceIpv4?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#omp_admin_distance_ipv4_variable ServiceLanVpnFeature#omp_admin_distance_ipv4_variable}
  */
  readonly ompAdminDistanceIpv4Variable?: string;
  /**
  * OMP Admin Distance IPv6
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#omp_admin_distance_ipv6 ServiceLanVpnFeature#omp_admin_distance_ipv6}
  */
  readonly ompAdminDistanceIpv6?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#omp_admin_distance_ipv6_variable ServiceLanVpnFeature#omp_admin_distance_ipv6_variable}
  */
  readonly ompAdminDistanceIpv6Variable?: string;
  /**
  * Primary DNS Address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#primary_dns_address_ipv4 ServiceLanVpnFeature#primary_dns_address_ipv4}
  */
  readonly primaryDnsAddressIpv4?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#primary_dns_address_ipv4_variable ServiceLanVpnFeature#primary_dns_address_ipv4_variable}
  */
  readonly primaryDnsAddressIpv4Variable?: string;
  /**
  * Primary DNS Address (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#primary_dns_address_ipv6 ServiceLanVpnFeature#primary_dns_address_ipv6}
  */
  readonly primaryDnsAddressIpv6?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#primary_dns_address_ipv6_variable ServiceLanVpnFeature#primary_dns_address_ipv6_variable}
  */
  readonly primaryDnsAddressIpv6Variable?: string;
  /**
  * Enable route leaking from Global to Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_leak_from_global_vpns ServiceLanVpnFeature#route_leak_from_global_vpns}
  */
  readonly routeLeakFromGlobalVpns?: ServiceLanVpnFeatureRouteLeakFromGlobalVpns[] | cdktf.IResolvable;
  /**
  * Enable route leak from another Service VPN to current Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_leak_from_other_services ServiceLanVpnFeature#route_leak_from_other_services}
  */
  readonly routeLeakFromOtherServices?: ServiceLanVpnFeatureRouteLeakFromOtherServices[] | cdktf.IResolvable;
  /**
  * Enable route leaking from Service to Global VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_leak_to_global_vpns ServiceLanVpnFeature#route_leak_to_global_vpns}
  */
  readonly routeLeakToGlobalVpns?: ServiceLanVpnFeatureRouteLeakToGlobalVpns[] | cdktf.IResolvable;
  /**
  * Secondary DNS Address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#secondary_dns_address_ipv4 ServiceLanVpnFeature#secondary_dns_address_ipv4}
  */
  readonly secondaryDnsAddressIpv4?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#secondary_dns_address_ipv4_variable ServiceLanVpnFeature#secondary_dns_address_ipv4_variable}
  */
  readonly secondaryDnsAddressIpv4Variable?: string;
  /**
  * Secondary DNS Address (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#secondary_dns_address_ipv6 ServiceLanVpnFeature#secondary_dns_address_ipv6}
  */
  readonly secondaryDnsAddressIpv6?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#secondary_dns_address_ipv6_variable ServiceLanVpnFeature#secondary_dns_address_ipv6_variable}
  */
  readonly secondaryDnsAddressIpv6Variable?: string;
  /**
  * Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#service_routes ServiceLanVpnFeature#service_routes}
  */
  readonly serviceRoutes?: ServiceLanVpnFeatureServiceRoutes[] | cdktf.IResolvable;
  /**
  * Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#services ServiceLanVpnFeature#services}
  */
  readonly services?: ServiceLanVpnFeatureServices[] | cdktf.IResolvable;
  /**
  * Static NAT Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#static_nats ServiceLanVpnFeature#static_nats}
  */
  readonly staticNats?: ServiceLanVpnFeatureStaticNats[] | cdktf.IResolvable;
  /**
  * VPN
  *   - Range: `1`-`65527`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#vpn ServiceLanVpnFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#vpn_variable ServiceLanVpnFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}
export interface ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes {
  /**
  * Aggregate Only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#aggregate_only ServiceLanVpnFeature#aggregate_only}
  */
  readonly aggregateOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address ServiceLanVpnFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address_variable ServiceLanVpnFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * Applied to Region
  *   - Choices: `core-and-access`, `core`, `access`
  *   - Default value: `core-and-access`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#region ServiceLanVpnFeature#region}
  */
  readonly region?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#region_variable ServiceLanVpnFeature#region_variable}
  */
  readonly regionVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask ServiceLanVpnFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask_variable ServiceLanVpnFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function serviceLanVpnFeatureAdvertiseOmpIpv4SPrefixesToTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_only: cdktf.booleanToTerraform(struct!.aggregateOnly),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    region: cdktf.stringToTerraform(struct!.region),
    region_variable: cdktf.stringToTerraform(struct!.regionVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
  }
}


export function serviceLanVpnFeatureAdvertiseOmpIpv4SPrefixesToHclTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_only: {
      value: cdktf.booleanToHclTerraform(struct!.aggregateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_variable: {
      value: cdktf.stringToHclTerraform(struct!.regionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateOnly = this._aggregateOnly;
    }
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._regionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionVariable = this._regionVariable;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateOnly = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._region = undefined;
      this._regionVariable = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateOnly = value.aggregateOnly;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._region = value.region;
      this._regionVariable = value.regionVariable;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
    }
  }

  // aggregate_only - computed: false, optional: true, required: false
  private _aggregateOnly?: boolean | cdktf.IResolvable; 
  public get aggregateOnly() {
    return this.getBooleanAttribute('aggregate_only');
  }
  public set aggregateOnly(value: boolean | cdktf.IResolvable) {
    this._aggregateOnly = value;
  }
  public resetAggregateOnly() {
    this._aggregateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateOnlyInput() {
    return this._aggregateOnly;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
  }

  // region - computed: false, optional: true, required: false
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

  // region_variable - computed: false, optional: true, required: false
  private _regionVariable?: string; 
  public get regionVariable() {
    return this.getStringAttribute('region_variable');
  }
  public set regionVariable(value: string) {
    this._regionVariable = value;
  }
  public resetRegionVariable() {
    this._regionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionVariableInput() {
    return this._regionVariable;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesOutputReference {
    return new ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureAdvertiseOmpIpv4S {
  /**
  * IPv4 Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefixes ServiceLanVpnFeature#prefixes}
  */
  readonly prefixes?: ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes[] | cdktf.IResolvable;
  /**
  * Protocol
  *   - Choices: `bgp`, `ospf`, `ospfv3`, `connected`, `static`, `network`, `aggregate`, `eigrp`, `lisp`, `isis`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol ServiceLanVpnFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_variable ServiceLanVpnFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_policy_id ServiceLanVpnFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
}

export function serviceLanVpnFeatureAdvertiseOmpIpv4SToTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv4S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefixes: cdktf.listMapper(serviceLanVpnFeatureAdvertiseOmpIpv4SPrefixesToTerraform, false)(struct!.prefixes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
  }
}


export function serviceLanVpnFeatureAdvertiseOmpIpv4SToHclTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv4S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefixes: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureAdvertiseOmpIpv4SPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv4SOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureAdvertiseOmpIpv4S | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureAdvertiseOmpIpv4S | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = value.prefixes;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicyId = value.routePolicyId;
    }
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: ServiceLanVpnFeatureAdvertiseOmpIpv4SPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv4SList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureAdvertiseOmpIpv4S[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureAdvertiseOmpIpv4SOutputReference {
    return new ServiceLanVpnFeatureAdvertiseOmpIpv4SOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes {
  /**
  * Aggregate Only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#aggregate_only ServiceLanVpnFeature#aggregate_only}
  */
  readonly aggregateOnly?: boolean | cdktf.IResolvable;
  /**
  * IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefix ServiceLanVpnFeature#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefix_variable ServiceLanVpnFeature#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function serviceLanVpnFeatureAdvertiseOmpIpv6SPrefixesToTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_only: cdktf.booleanToTerraform(struct!.aggregateOnly),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function serviceLanVpnFeatureAdvertiseOmpIpv6SPrefixesToHclTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_only: {
      value: cdktf.booleanToHclTerraform(struct!.aggregateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateOnly = this._aggregateOnly;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateOnly = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateOnly = value.aggregateOnly;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // aggregate_only - computed: false, optional: true, required: false
  private _aggregateOnly?: boolean | cdktf.IResolvable; 
  public get aggregateOnly() {
    return this.getBooleanAttribute('aggregate_only');
  }
  public set aggregateOnly(value: boolean | cdktf.IResolvable) {
    this._aggregateOnly = value;
  }
  public resetAggregateOnly() {
    this._aggregateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateOnlyInput() {
    return this._aggregateOnly;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesOutputReference {
    return new ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureAdvertiseOmpIpv6S {
  /**
  * IPv6 Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefixes ServiceLanVpnFeature#prefixes}
  */
  readonly prefixes?: ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes[] | cdktf.IResolvable;
  /**
  * Protocol
  *   - Choices: `BGP`, `OSPF`, `Connected`, `Static`, `Network`, `Aggregate`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol ServiceLanVpnFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Sub Type
  *   - Choices: `External`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_sub_type ServiceLanVpnFeature#protocol_sub_type}
  */
  readonly protocolSubType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_sub_type_variable ServiceLanVpnFeature#protocol_sub_type_variable}
  */
  readonly protocolSubTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_variable ServiceLanVpnFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_policy_id ServiceLanVpnFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
}

export function serviceLanVpnFeatureAdvertiseOmpIpv6SToTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv6S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefixes: cdktf.listMapper(serviceLanVpnFeatureAdvertiseOmpIpv6SPrefixesToTerraform, false)(struct!.prefixes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_sub_type: cdktf.stringToTerraform(struct!.protocolSubType),
    protocol_sub_type_variable: cdktf.stringToTerraform(struct!.protocolSubTypeVariable),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
  }
}


export function serviceLanVpnFeatureAdvertiseOmpIpv6SToHclTerraform(struct?: ServiceLanVpnFeatureAdvertiseOmpIpv6S | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefixes: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureAdvertiseOmpIpv6SPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolSubTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv6SOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureAdvertiseOmpIpv6S | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolSubType = this._protocolSubType;
    }
    if (this._protocolSubTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolSubTypeVariable = this._protocolSubTypeVariable;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureAdvertiseOmpIpv6S | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = undefined;
      this._protocol = undefined;
      this._protocolSubType = undefined;
      this._protocolSubTypeVariable = undefined;
      this._protocolVariable = undefined;
      this._routePolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes.internalValue = value.prefixes;
      this._protocol = value.protocol;
      this._protocolSubType = value.protocolSubType;
      this._protocolSubTypeVariable = value.protocolSubTypeVariable;
      this._protocolVariable = value.protocolVariable;
      this._routePolicyId = value.routePolicyId;
    }
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: ServiceLanVpnFeatureAdvertiseOmpIpv6SPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_sub_type - computed: false, optional: true, required: false
  private _protocolSubType?: string; 
  public get protocolSubType() {
    return this.getStringAttribute('protocol_sub_type');
  }
  public set protocolSubType(value: string) {
    this._protocolSubType = value;
  }
  public resetProtocolSubType() {
    this._protocolSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolSubTypeInput() {
    return this._protocolSubType;
  }

  // protocol_sub_type_variable - computed: false, optional: true, required: false
  private _protocolSubTypeVariable?: string; 
  public get protocolSubTypeVariable() {
    return this.getStringAttribute('protocol_sub_type_variable');
  }
  public set protocolSubTypeVariable(value: string) {
    this._protocolSubTypeVariable = value;
  }
  public resetProtocolSubTypeVariable() {
    this._protocolSubTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolSubTypeVariableInput() {
    return this._protocolSubTypeVariable;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }
}

export class ServiceLanVpnFeatureAdvertiseOmpIpv6SList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureAdvertiseOmpIpv6S[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureAdvertiseOmpIpv6SOutputReference {
    return new ServiceLanVpnFeatureAdvertiseOmpIpv6SOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureGreRoutes {
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#interface ServiceLanVpnFeature#interface}
  */
  readonly interface?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#interface_variable ServiceLanVpnFeature#interface_variable}
  */
  readonly interfaceVariable?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address ServiceLanVpnFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address_variable ServiceLanVpnFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask ServiceLanVpnFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask_variable ServiceLanVpnFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
  /**
  * Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#vpn ServiceLanVpnFeature#vpn}
  */
  readonly vpn?: number;
}

export function serviceLanVpnFeatureGreRoutesToTerraform(struct?: ServiceLanVpnFeatureGreRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    interface_variable: cdktf.stringToTerraform(struct!.interfaceVariable),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
  }
}


export function serviceLanVpnFeatureGreRoutesToHclTerraform(struct?: ServiceLanVpnFeatureGreRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureGreRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureGreRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVariable = this._interfaceVariable;
    }
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureGreRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._interfaceVariable = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
      this._vpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._interfaceVariable = value.interfaceVariable;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
      this._vpn = value.vpn;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_variable - computed: false, optional: true, required: false
  private _interfaceVariable?: string; 
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }
  public set interfaceVariable(value: string) {
    this._interfaceVariable = value;
  }
  public resetInterfaceVariable() {
    this._interfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVariableInput() {
    return this._interfaceVariable;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}

export class ServiceLanVpnFeatureGreRoutesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureGreRoutes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureGreRoutesOutputReference {
    return new ServiceLanVpnFeatureGreRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureHostMappings {
  /**
  * Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#host_name ServiceLanVpnFeature#host_name}
  */
  readonly hostName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#host_name_variable ServiceLanVpnFeature#host_name_variable}
  */
  readonly hostNameVariable?: string;
  /**
  * List of IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#list_of_ips ServiceLanVpnFeature#list_of_ips}
  */
  readonly listOfIps?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#list_of_ips_variable ServiceLanVpnFeature#list_of_ips_variable}
  */
  readonly listOfIpsVariable?: string;
}

export function serviceLanVpnFeatureHostMappingsToTerraform(struct?: ServiceLanVpnFeatureHostMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    host_name_variable: cdktf.stringToTerraform(struct!.hostNameVariable),
    list_of_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listOfIps),
    list_of_ips_variable: cdktf.stringToTerraform(struct!.listOfIpsVariable),
  }
}


export function serviceLanVpnFeatureHostMappingsToHclTerraform(struct?: ServiceLanVpnFeatureHostMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_of_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listOfIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    list_of_ips_variable: {
      value: cdktf.stringToHclTerraform(struct!.listOfIpsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureHostMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureHostMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hostNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameVariable = this._hostNameVariable;
    }
    if (this._listOfIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.listOfIps = this._listOfIps;
    }
    if (this._listOfIpsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.listOfIpsVariable = this._listOfIpsVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureHostMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._hostNameVariable = undefined;
      this._listOfIps = undefined;
      this._listOfIpsVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._hostNameVariable = value.hostNameVariable;
      this._listOfIps = value.listOfIps;
      this._listOfIpsVariable = value.listOfIpsVariable;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_name_variable - computed: false, optional: true, required: false
  private _hostNameVariable?: string; 
  public get hostNameVariable() {
    return this.getStringAttribute('host_name_variable');
  }
  public set hostNameVariable(value: string) {
    this._hostNameVariable = value;
  }
  public resetHostNameVariable() {
    this._hostNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameVariableInput() {
    return this._hostNameVariable;
  }

  // list_of_ips - computed: false, optional: true, required: false
  private _listOfIps?: string[]; 
  public get listOfIps() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_ips'));
  }
  public set listOfIps(value: string[]) {
    this._listOfIps = value;
  }
  public resetListOfIps() {
    this._listOfIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOfIpsInput() {
    return this._listOfIps;
  }

  // list_of_ips_variable - computed: false, optional: true, required: false
  private _listOfIpsVariable?: string; 
  public get listOfIpsVariable() {
    return this.getStringAttribute('list_of_ips_variable');
  }
  public set listOfIpsVariable(value: string) {
    this._listOfIpsVariable = value;
  }
  public resetListOfIpsVariable() {
    this._listOfIpsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOfIpsVariableInput() {
    return this._listOfIpsVariable;
  }
}

export class ServiceLanVpnFeatureHostMappingsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureHostMappings[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureHostMappingsOutputReference {
    return new ServiceLanVpnFeatureHostMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpsecRoutes {
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#interface ServiceLanVpnFeature#interface}
  */
  readonly interface?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#interface_variable ServiceLanVpnFeature#interface_variable}
  */
  readonly interfaceVariable?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address ServiceLanVpnFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address_variable ServiceLanVpnFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask ServiceLanVpnFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask_variable ServiceLanVpnFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function serviceLanVpnFeatureIpsecRoutesToTerraform(struct?: ServiceLanVpnFeatureIpsecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    interface_variable: cdktf.stringToTerraform(struct!.interfaceVariable),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
  }
}


export function serviceLanVpnFeatureIpsecRoutesToHclTerraform(struct?: ServiceLanVpnFeatureIpsecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpsecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpsecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVariable = this._interfaceVariable;
    }
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpsecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._interfaceVariable = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._interfaceVariable = value.interfaceVariable;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_variable - computed: false, optional: true, required: false
  private _interfaceVariable?: string; 
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }
  public set interfaceVariable(value: string) {
    this._interfaceVariable = value;
  }
  public resetInterfaceVariable() {
    this._interfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVariableInput() {
    return this._interfaceVariable;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }
}

export class ServiceLanVpnFeatureIpsecRoutesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpsecRoutes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpsecRoutesOutputReference {
    return new ServiceLanVpnFeatureIpsecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv4ExportRouteTargets {
  /**
  * Route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target ServiceLanVpnFeature#route_target}
  */
  readonly routeTarget?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target_variable ServiceLanVpnFeature#route_target_variable}
  */
  readonly routeTargetVariable?: string;
}

export function serviceLanVpnFeatureIpv4ExportRouteTargetsToTerraform(struct?: ServiceLanVpnFeatureIpv4ExportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
    route_target_variable: cdktf.stringToTerraform(struct!.routeTargetVariable),
  }
}


export function serviceLanVpnFeatureIpv4ExportRouteTargetsToHclTerraform(struct?: ServiceLanVpnFeatureIpv4ExportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv4ExportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv4ExportRouteTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    if (this._routeTargetVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetVariable = this._routeTargetVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv4ExportRouteTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
      this._routeTargetVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
      this._routeTargetVariable = value.routeTargetVariable;
    }
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // route_target_variable - computed: false, optional: true, required: false
  private _routeTargetVariable?: string; 
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
  public set routeTargetVariable(value: string) {
    this._routeTargetVariable = value;
  }
  public resetRouteTargetVariable() {
    this._routeTargetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetVariableInput() {
    return this._routeTargetVariable;
  }
}

export class ServiceLanVpnFeatureIpv4ExportRouteTargetsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv4ExportRouteTargets[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv4ExportRouteTargetsOutputReference {
    return new ServiceLanVpnFeatureIpv4ExportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv4ImportRouteTargets {
  /**
  * Route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target ServiceLanVpnFeature#route_target}
  */
  readonly routeTarget?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target_variable ServiceLanVpnFeature#route_target_variable}
  */
  readonly routeTargetVariable?: string;
}

export function serviceLanVpnFeatureIpv4ImportRouteTargetsToTerraform(struct?: ServiceLanVpnFeatureIpv4ImportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
    route_target_variable: cdktf.stringToTerraform(struct!.routeTargetVariable),
  }
}


export function serviceLanVpnFeatureIpv4ImportRouteTargetsToHclTerraform(struct?: ServiceLanVpnFeatureIpv4ImportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv4ImportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv4ImportRouteTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    if (this._routeTargetVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetVariable = this._routeTargetVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv4ImportRouteTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
      this._routeTargetVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
      this._routeTargetVariable = value.routeTargetVariable;
    }
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // route_target_variable - computed: false, optional: true, required: false
  private _routeTargetVariable?: string; 
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
  public set routeTargetVariable(value: string) {
    this._routeTargetVariable = value;
  }
  public resetRouteTargetVariable() {
    this._routeTargetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetVariableInput() {
    return this._routeTargetVariable;
  }
}

export class ServiceLanVpnFeatureIpv4ImportRouteTargetsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv4ImportRouteTargets[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv4ImportRouteTargetsOutputReference {
    return new ServiceLanVpnFeatureIpv4ImportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#address ServiceLanVpnFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#address_variable ServiceLanVpnFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#administrative_distance ServiceLanVpnFeature#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#administrative_distance_variable ServiceLanVpnFeature#administrative_distance_variable}
  */
  readonly administrativeDistanceVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#tracker_id ServiceLanVpnFeature#tracker_id}
  */
  readonly trackerId?: string;
}

export function serviceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersToTerraform(struct?: ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    administrative_distance_variable: cdktf.stringToTerraform(struct!.administrativeDistanceVariable),
    tracker_id: cdktf.stringToTerraform(struct!.trackerId),
  }
}


export function serviceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersToHclTerraform(struct?: ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrative_distance: {
      value: cdktf.numberToHclTerraform(struct!.administrativeDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    administrative_distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.administrativeDistanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_id: {
      value: cdktf.stringToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._administrativeDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistance = this._administrativeDistance;
    }
    if (this._administrativeDistanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistanceVariable = this._administrativeDistanceVariable;
    }
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._administrativeDistance = undefined;
      this._administrativeDistanceVariable = undefined;
      this._trackerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._administrativeDistance = value.administrativeDistance;
      this._administrativeDistanceVariable = value.administrativeDistanceVariable;
      this._trackerId = value.trackerId;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // administrative_distance - computed: false, optional: true, required: false
  private _administrativeDistance?: number; 
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }
  public set administrativeDistance(value: number) {
    this._administrativeDistance = value;
  }
  public resetAdministrativeDistance() {
    this._administrativeDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceInput() {
    return this._administrativeDistance;
  }

  // administrative_distance_variable - computed: false, optional: true, required: false
  private _administrativeDistanceVariable?: string; 
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
  public set administrativeDistanceVariable(value: string) {
    this._administrativeDistanceVariable = value;
  }
  public resetAdministrativeDistanceVariable() {
    this._administrativeDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceVariableInput() {
    return this._administrativeDistanceVariable;
  }

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: string; 
  public get trackerId() {
    return this.getStringAttribute('tracker_id');
  }
  public set trackerId(value: string) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }
}

export class ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersOutputReference {
    return new ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv4StaticRoutesNextHops {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#address ServiceLanVpnFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#address_variable ServiceLanVpnFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#administrative_distance ServiceLanVpnFeature#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#administrative_distance_variable ServiceLanVpnFeature#administrative_distance_variable}
  */
  readonly administrativeDistanceVariable?: string;
}

export function serviceLanVpnFeatureIpv4StaticRoutesNextHopsToTerraform(struct?: ServiceLanVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    administrative_distance_variable: cdktf.stringToTerraform(struct!.administrativeDistanceVariable),
  }
}


export function serviceLanVpnFeatureIpv4StaticRoutesNextHopsToHclTerraform(struct?: ServiceLanVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrative_distance: {
      value: cdktf.numberToHclTerraform(struct!.administrativeDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    administrative_distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.administrativeDistanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv4StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._administrativeDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistance = this._administrativeDistance;
    }
    if (this._administrativeDistanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistanceVariable = this._administrativeDistanceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._administrativeDistance = undefined;
      this._administrativeDistanceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._administrativeDistance = value.administrativeDistance;
      this._administrativeDistanceVariable = value.administrativeDistanceVariable;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // administrative_distance - computed: false, optional: true, required: false
  private _administrativeDistance?: number; 
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }
  public set administrativeDistance(value: number) {
    this._administrativeDistance = value;
  }
  public resetAdministrativeDistance() {
    this._administrativeDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceInput() {
    return this._administrativeDistance;
  }

  // administrative_distance_variable - computed: false, optional: true, required: false
  private _administrativeDistanceVariable?: string; 
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
  public set administrativeDistanceVariable(value: string) {
    this._administrativeDistanceVariable = value;
  }
  public resetAdministrativeDistanceVariable() {
    this._administrativeDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceVariableInput() {
    return this._administrativeDistanceVariable;
  }
}

export class ServiceLanVpnFeatureIpv4StaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv4StaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv4StaticRoutesNextHopsOutputReference {
    return new ServiceLanVpnFeatureIpv4StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv4StaticRoutes {
  /**
  * IPv4 Route Gateway DHCP, Attribute conditional on `gateway` being equal to `dhcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#dhcp ServiceLanVpnFeature#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Gateway type
  *   - Choices: `nextHop`, `null0`, `vpn`, `dhcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#gateway ServiceLanVpnFeature#gateway}
  */
  readonly gateway?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address ServiceLanVpnFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address_variable ServiceLanVpnFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * IPv4 Route Gateway Next Hop with Tracker, Attribute conditional on `gateway` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#next_hop_with_trackers ServiceLanVpnFeature#next_hop_with_trackers}
  */
  readonly nextHopWithTrackers?: ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers[] | cdktf.IResolvable;
  /**
  * IPv4 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#next_hops ServiceLanVpnFeature#next_hops}
  */
  readonly nextHops?: ServiceLanVpnFeatureIpv4StaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * IPv4 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `null0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#null0 ServiceLanVpnFeature#null0}
  */
  readonly null0?: boolean | cdktf.IResolvable;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask ServiceLanVpnFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask_variable ServiceLanVpnFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
  /**
  * IPv4 Route Gateway VPN, Attribute conditional on `gateway` being equal to `vpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#vpn ServiceLanVpnFeature#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function serviceLanVpnFeatureIpv4StaticRoutesToTerraform(struct?: ServiceLanVpnFeatureIpv4StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    next_hop_with_trackers: cdktf.listMapper(serviceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersToTerraform, false)(struct!.nextHopWithTrackers),
    next_hops: cdktf.listMapper(serviceLanVpnFeatureIpv4StaticRoutesNextHopsToTerraform, false)(struct!.nextHops),
    null0: cdktf.booleanToTerraform(struct!.null0),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function serviceLanVpnFeatureIpv4StaticRoutesToHclTerraform(struct?: ServiceLanVpnFeatureIpv4StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
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
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_with_trackers: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersToHclTerraform, false)(struct!.nextHopWithTrackers),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersList",
    },
    next_hops: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv4StaticRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureIpv4StaticRoutesNextHopsList",
    },
    null0: {
      value: cdktf.booleanToHclTerraform(struct!.null0),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.booleanToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv4StaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
    }
    if (this._nextHopWithTrackers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopWithTrackers = this._nextHopWithTrackers?.internalValue;
    }
    if (this._nextHops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHops = this._nextHops?.internalValue;
    }
    if (this._null0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.null0 = this._null0;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv4StaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._gateway = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._nextHopWithTrackers.internalValue = undefined;
      this._nextHops.internalValue = undefined;
      this._null0 = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
      this._vpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._gateway = value.gateway;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._nextHopWithTrackers.internalValue = value.nextHopWithTrackers;
      this._nextHops.internalValue = value.nextHops;
      this._null0 = value.null0;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
      this._vpn = value.vpn;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gateway - computed: false, optional: true, required: false
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

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
  }

  // next_hop_with_trackers - computed: false, optional: true, required: false
  private _nextHopWithTrackers = new ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackersList(this, "next_hop_with_trackers", false);
  public get nextHopWithTrackers() {
    return this._nextHopWithTrackers;
  }
  public putNextHopWithTrackers(value: ServiceLanVpnFeatureIpv4StaticRoutesNextHopWithTrackers[] | cdktf.IResolvable) {
    this._nextHopWithTrackers.internalValue = value;
  }
  public resetNextHopWithTrackers() {
    this._nextHopWithTrackers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopWithTrackersInput() {
    return this._nextHopWithTrackers.internalValue;
  }

  // next_hops - computed: false, optional: true, required: false
  private _nextHops = new ServiceLanVpnFeatureIpv4StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: ServiceLanVpnFeatureIpv4StaticRoutesNextHops[] | cdktf.IResolvable) {
    this._nextHops.internalValue = value;
  }
  public resetNextHops() {
    this._nextHops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsInput() {
    return this._nextHops.internalValue;
  }

  // null0 - computed: false, optional: true, required: false
  private _null0?: boolean | cdktf.IResolvable; 
  public get null0() {
    return this.getBooleanAttribute('null0');
  }
  public set null0(value: boolean | cdktf.IResolvable) {
    this._null0 = value;
  }
  public resetNull0() {
    this._null0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get null0Input() {
    return this._null0;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}

export class ServiceLanVpnFeatureIpv4StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv4StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv4StaticRoutesOutputReference {
    return new ServiceLanVpnFeatureIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv6ExportRouteTargets {
  /**
  * Route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target ServiceLanVpnFeature#route_target}
  */
  readonly routeTarget?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target_variable ServiceLanVpnFeature#route_target_variable}
  */
  readonly routeTargetVariable?: string;
}

export function serviceLanVpnFeatureIpv6ExportRouteTargetsToTerraform(struct?: ServiceLanVpnFeatureIpv6ExportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
    route_target_variable: cdktf.stringToTerraform(struct!.routeTargetVariable),
  }
}


export function serviceLanVpnFeatureIpv6ExportRouteTargetsToHclTerraform(struct?: ServiceLanVpnFeatureIpv6ExportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv6ExportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv6ExportRouteTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    if (this._routeTargetVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetVariable = this._routeTargetVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv6ExportRouteTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
      this._routeTargetVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
      this._routeTargetVariable = value.routeTargetVariable;
    }
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // route_target_variable - computed: false, optional: true, required: false
  private _routeTargetVariable?: string; 
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
  public set routeTargetVariable(value: string) {
    this._routeTargetVariable = value;
  }
  public resetRouteTargetVariable() {
    this._routeTargetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetVariableInput() {
    return this._routeTargetVariable;
  }
}

export class ServiceLanVpnFeatureIpv6ExportRouteTargetsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv6ExportRouteTargets[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv6ExportRouteTargetsOutputReference {
    return new ServiceLanVpnFeatureIpv6ExportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv6ImportRouteTargets {
  /**
  * Route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target ServiceLanVpnFeature#route_target}
  */
  readonly routeTarget?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_target_variable ServiceLanVpnFeature#route_target_variable}
  */
  readonly routeTargetVariable?: string;
}

export function serviceLanVpnFeatureIpv6ImportRouteTargetsToTerraform(struct?: ServiceLanVpnFeatureIpv6ImportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
    route_target_variable: cdktf.stringToTerraform(struct!.routeTargetVariable),
  }
}


export function serviceLanVpnFeatureIpv6ImportRouteTargetsToHclTerraform(struct?: ServiceLanVpnFeatureIpv6ImportRouteTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_target_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeTargetVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv6ImportRouteTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv6ImportRouteTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    if (this._routeTargetVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetVariable = this._routeTargetVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv6ImportRouteTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
      this._routeTargetVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
      this._routeTargetVariable = value.routeTargetVariable;
    }
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // route_target_variable - computed: false, optional: true, required: false
  private _routeTargetVariable?: string; 
  public get routeTargetVariable() {
    return this.getStringAttribute('route_target_variable');
  }
  public set routeTargetVariable(value: string) {
    this._routeTargetVariable = value;
  }
  public resetRouteTargetVariable() {
    this._routeTargetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetVariableInput() {
    return this._routeTargetVariable;
  }
}

export class ServiceLanVpnFeatureIpv6ImportRouteTargetsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv6ImportRouteTargets[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv6ImportRouteTargetsOutputReference {
    return new ServiceLanVpnFeatureIpv6ImportRouteTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv6StaticRoutesNextHops {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#address ServiceLanVpnFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#address_variable ServiceLanVpnFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`254`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#administrative_distance ServiceLanVpnFeature#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#administrative_distance_variable ServiceLanVpnFeature#administrative_distance_variable}
  */
  readonly administrativeDistanceVariable?: string;
}

export function serviceLanVpnFeatureIpv6StaticRoutesNextHopsToTerraform(struct?: ServiceLanVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    administrative_distance_variable: cdktf.stringToTerraform(struct!.administrativeDistanceVariable),
  }
}


export function serviceLanVpnFeatureIpv6StaticRoutesNextHopsToHclTerraform(struct?: ServiceLanVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrative_distance: {
      value: cdktf.numberToHclTerraform(struct!.administrativeDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    administrative_distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.administrativeDistanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv6StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._administrativeDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistance = this._administrativeDistance;
    }
    if (this._administrativeDistanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistanceVariable = this._administrativeDistanceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._administrativeDistance = undefined;
      this._administrativeDistanceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._administrativeDistance = value.administrativeDistance;
      this._administrativeDistanceVariable = value.administrativeDistanceVariable;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // administrative_distance - computed: false, optional: true, required: false
  private _administrativeDistance?: number; 
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }
  public set administrativeDistance(value: number) {
    this._administrativeDistance = value;
  }
  public resetAdministrativeDistance() {
    this._administrativeDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceInput() {
    return this._administrativeDistance;
  }

  // administrative_distance_variable - computed: false, optional: true, required: false
  private _administrativeDistanceVariable?: string; 
  public get administrativeDistanceVariable() {
    return this.getStringAttribute('administrative_distance_variable');
  }
  public set administrativeDistanceVariable(value: string) {
    this._administrativeDistanceVariable = value;
  }
  public resetAdministrativeDistanceVariable() {
    this._administrativeDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceVariableInput() {
    return this._administrativeDistanceVariable;
  }
}

export class ServiceLanVpnFeatureIpv6StaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv6StaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv6StaticRoutesNextHopsOutputReference {
    return new ServiceLanVpnFeatureIpv6StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureIpv6StaticRoutes {
  /**
  * Gateway type
  *   - Choices: `nextHop`, `null0`, `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#gateway ServiceLanVpnFeature#gateway}
  */
  readonly gateway?: string;
  /**
  * IPv6 Nat, Attribute conditional on `gateway` being equal to `nat`
  *   - Choices: `NAT64`, `NAT66`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat ServiceLanVpnFeature#nat}
  */
  readonly nat?: string;
  /**
  * Variable name, Attribute conditional on `gateway` being equal to `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_variable ServiceLanVpnFeature#nat_variable}
  */
  readonly natVariable?: string;
  /**
  * IPv6 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#next_hops ServiceLanVpnFeature#next_hops}
  */
  readonly nextHops?: ServiceLanVpnFeatureIpv6StaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * IPv6 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `null0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#null0 ServiceLanVpnFeature#null0}
  */
  readonly null0?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefix ServiceLanVpnFeature#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefix_variable ServiceLanVpnFeature#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function serviceLanVpnFeatureIpv6StaticRoutesToTerraform(struct?: ServiceLanVpnFeatureIpv6StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    nat: cdktf.stringToTerraform(struct!.nat),
    nat_variable: cdktf.stringToTerraform(struct!.natVariable),
    next_hops: cdktf.listMapper(serviceLanVpnFeatureIpv6StaticRoutesNextHopsToTerraform, false)(struct!.nextHops),
    null0: cdktf.booleanToTerraform(struct!.null0),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function serviceLanVpnFeatureIpv6StaticRoutesToHclTerraform(struct?: ServiceLanVpnFeatureIpv6StaticRoutes | cdktf.IResolvable): any {
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
    nat: {
      value: cdktf.stringToHclTerraform(struct!.nat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_variable: {
      value: cdktf.stringToHclTerraform(struct!.natVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hops: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv6StaticRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureIpv6StaticRoutesNextHopsList",
    },
    null0: {
      value: cdktf.booleanToHclTerraform(struct!.null0),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureIpv6StaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._natVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natVariable = this._natVariable;
    }
    if (this._nextHops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHops = this._nextHops?.internalValue;
    }
    if (this._null0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.null0 = this._null0;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureIpv6StaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._nat = undefined;
      this._natVariable = undefined;
      this._nextHops.internalValue = undefined;
      this._null0 = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._nat = value.nat;
      this._natVariable = value.natVariable;
      this._nextHops.internalValue = value.nextHops;
      this._null0 = value.null0;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // gateway - computed: false, optional: true, required: false
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

  // nat - computed: false, optional: true, required: false
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat_variable - computed: false, optional: true, required: false
  private _natVariable?: string; 
  public get natVariable() {
    return this.getStringAttribute('nat_variable');
  }
  public set natVariable(value: string) {
    this._natVariable = value;
  }
  public resetNatVariable() {
    this._natVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natVariableInput() {
    return this._natVariable;
  }

  // next_hops - computed: false, optional: true, required: false
  private _nextHops = new ServiceLanVpnFeatureIpv6StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: ServiceLanVpnFeatureIpv6StaticRoutesNextHops[] | cdktf.IResolvable) {
    this._nextHops.internalValue = value;
  }
  public resetNextHops() {
    this._nextHops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsInput() {
    return this._nextHops.internalValue;
  }

  // null0 - computed: false, optional: true, required: false
  private _null0?: boolean | cdktf.IResolvable; 
  public get null0() {
    return this.getBooleanAttribute('null0');
  }
  public set null0(value: boolean | cdktf.IResolvable) {
    this._null0 = value;
  }
  public resetNull0() {
    this._null0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get null0Input() {
    return this._null0;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class ServiceLanVpnFeatureIpv6StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureIpv6StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureIpv6StaticRoutesOutputReference {
    return new ServiceLanVpnFeatureIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureNat64V4Pools {
  /**
  * NAT64 v4 Pool Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#name ServiceLanVpnFeature#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#name_variable ServiceLanVpnFeature#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * NAT64 Overload
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#overload ServiceLanVpnFeature#overload}
  */
  readonly overload?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#overload_variable ServiceLanVpnFeature#overload_variable}
  */
  readonly overloadVariable?: string;
  /**
  * NAT64 Pool Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_end ServiceLanVpnFeature#range_end}
  */
  readonly rangeEnd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_end_variable ServiceLanVpnFeature#range_end_variable}
  */
  readonly rangeEndVariable?: string;
  /**
  * NAT64 Pool Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_start ServiceLanVpnFeature#range_start}
  */
  readonly rangeStart?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_start_variable ServiceLanVpnFeature#range_start_variable}
  */
  readonly rangeStartVariable?: string;
}

export function serviceLanVpnFeatureNat64V4PoolsToTerraform(struct?: ServiceLanVpnFeatureNat64V4Pools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    overload: cdktf.booleanToTerraform(struct!.overload),
    overload_variable: cdktf.stringToTerraform(struct!.overloadVariable),
    range_end: cdktf.stringToTerraform(struct!.rangeEnd),
    range_end_variable: cdktf.stringToTerraform(struct!.rangeEndVariable),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    range_start_variable: cdktf.stringToTerraform(struct!.rangeStartVariable),
  }
}


export function serviceLanVpnFeatureNat64V4PoolsToHclTerraform(struct?: ServiceLanVpnFeatureNat64V4Pools | cdktf.IResolvable): any {
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
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overload: {
      value: cdktf.booleanToHclTerraform(struct!.overload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overload_variable: {
      value: cdktf.stringToHclTerraform(struct!.overloadVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_end: {
      value: cdktf.stringToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_end_variable: {
      value: cdktf.stringToHclTerraform(struct!.rangeEndVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_start: {
      value: cdktf.stringToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_start_variable: {
      value: cdktf.stringToHclTerraform(struct!.rangeStartVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureNat64V4PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureNat64V4Pools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._overload !== undefined) {
      hasAnyValues = true;
      internalValueResult.overload = this._overload;
    }
    if (this._overloadVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.overloadVariable = this._overloadVariable;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeEndVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEndVariable = this._rangeEndVariable;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    if (this._rangeStartVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStartVariable = this._rangeStartVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureNat64V4Pools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._overload = undefined;
      this._overloadVariable = undefined;
      this._rangeEnd = undefined;
      this._rangeEndVariable = undefined;
      this._rangeStart = undefined;
      this._rangeStartVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._overload = value.overload;
      this._overloadVariable = value.overloadVariable;
      this._rangeEnd = value.rangeEnd;
      this._rangeEndVariable = value.rangeEndVariable;
      this._rangeStart = value.rangeStart;
      this._rangeStartVariable = value.rangeStartVariable;
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

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // overload - computed: false, optional: true, required: false
  private _overload?: boolean | cdktf.IResolvable; 
  public get overload() {
    return this.getBooleanAttribute('overload');
  }
  public set overload(value: boolean | cdktf.IResolvable) {
    this._overload = value;
  }
  public resetOverload() {
    this._overload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadInput() {
    return this._overload;
  }

  // overload_variable - computed: false, optional: true, required: false
  private _overloadVariable?: string; 
  public get overloadVariable() {
    return this.getStringAttribute('overload_variable');
  }
  public set overloadVariable(value: string) {
    this._overloadVariable = value;
  }
  public resetOverloadVariable() {
    this._overloadVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadVariableInput() {
    return this._overloadVariable;
  }

  // range_end - computed: false, optional: true, required: false
  private _rangeEnd?: string; 
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }
  public set rangeEnd(value: string) {
    this._rangeEnd = value;
  }
  public resetRangeEnd() {
    this._rangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_end_variable - computed: false, optional: true, required: false
  private _rangeEndVariable?: string; 
  public get rangeEndVariable() {
    return this.getStringAttribute('range_end_variable');
  }
  public set rangeEndVariable(value: string) {
    this._rangeEndVariable = value;
  }
  public resetRangeEndVariable() {
    this._rangeEndVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndVariableInput() {
    return this._rangeEndVariable;
  }

  // range_start - computed: false, optional: true, required: false
  private _rangeStart?: string; 
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }
  public set rangeStart(value: string) {
    this._rangeStart = value;
  }
  public resetRangeStart() {
    this._rangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }

  // range_start_variable - computed: false, optional: true, required: false
  private _rangeStartVariable?: string; 
  public get rangeStartVariable() {
    return this.getStringAttribute('range_start_variable');
  }
  public set rangeStartVariable(value: string) {
    this._rangeStartVariable = value;
  }
  public resetRangeStartVariable() {
    this._rangeStartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartVariableInput() {
    return this._rangeStartVariable;
  }
}

export class ServiceLanVpnFeatureNat64V4PoolsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureNat64V4Pools[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureNat64V4PoolsOutputReference {
    return new ServiceLanVpnFeatureNat64V4PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureNatPools {
  /**
  * NAT Direction
  *   - Choices: `inside`, `outside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#direction ServiceLanVpnFeature#direction}
  */
  readonly direction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#direction_variable ServiceLanVpnFeature#direction_variable}
  */
  readonly directionVariable?: string;
  /**
  * NAT Pool Name
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pool_name ServiceLanVpnFeature#nat_pool_name}
  */
  readonly natPoolName?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pool_name_variable ServiceLanVpnFeature#nat_pool_name_variable}
  */
  readonly natPoolNameVariable?: string;
  /**
  * NAT Overload
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#overload ServiceLanVpnFeature#overload}
  */
  readonly overload?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#overload_variable ServiceLanVpnFeature#overload_variable}
  */
  readonly overloadVariable?: string;
  /**
  * NAT Pool Prefix Length
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefix_length ServiceLanVpnFeature#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#prefix_length_variable ServiceLanVpnFeature#prefix_length_variable}
  */
  readonly prefixLengthVariable?: string;
  /**
  * NAT Pool Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_end ServiceLanVpnFeature#range_end}
  */
  readonly rangeEnd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_end_variable ServiceLanVpnFeature#range_end_variable}
  */
  readonly rangeEndVariable?: string;
  /**
  * NAT Pool Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_start ServiceLanVpnFeature#range_start}
  */
  readonly rangeStart?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#range_start_variable ServiceLanVpnFeature#range_start_variable}
  */
  readonly rangeStartVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#tracker_object_id ServiceLanVpnFeature#tracker_object_id}
  */
  readonly trackerObjectId?: string;
}

export function serviceLanVpnFeatureNatPoolsToTerraform(struct?: ServiceLanVpnFeatureNatPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    direction_variable: cdktf.stringToTerraform(struct!.directionVariable),
    nat_pool_name: cdktf.numberToTerraform(struct!.natPoolName),
    nat_pool_name_variable: cdktf.stringToTerraform(struct!.natPoolNameVariable),
    overload: cdktf.booleanToTerraform(struct!.overload),
    overload_variable: cdktf.stringToTerraform(struct!.overloadVariable),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    prefix_length_variable: cdktf.stringToTerraform(struct!.prefixLengthVariable),
    range_end: cdktf.stringToTerraform(struct!.rangeEnd),
    range_end_variable: cdktf.stringToTerraform(struct!.rangeEndVariable),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    range_start_variable: cdktf.stringToTerraform(struct!.rangeStartVariable),
    tracker_object_id: cdktf.stringToTerraform(struct!.trackerObjectId),
  }
}


export function serviceLanVpnFeatureNatPoolsToHclTerraform(struct?: ServiceLanVpnFeatureNatPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.directionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.natPoolNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overload: {
      value: cdktf.booleanToHclTerraform(struct!.overload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overload_variable: {
      value: cdktf.stringToHclTerraform(struct!.overloadVariable),
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
    prefix_length_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixLengthVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_end: {
      value: cdktf.stringToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_end_variable: {
      value: cdktf.stringToHclTerraform(struct!.rangeEndVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_start: {
      value: cdktf.stringToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_start_variable: {
      value: cdktf.stringToHclTerraform(struct!.rangeStartVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_object_id: {
      value: cdktf.stringToHclTerraform(struct!.trackerObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureNatPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureNatPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._directionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.directionVariable = this._directionVariable;
    }
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._natPoolNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolNameVariable = this._natPoolNameVariable;
    }
    if (this._overload !== undefined) {
      hasAnyValues = true;
      internalValueResult.overload = this._overload;
    }
    if (this._overloadVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.overloadVariable = this._overloadVariable;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._prefixLengthVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLengthVariable = this._prefixLengthVariable;
    }
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeEndVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEndVariable = this._rangeEndVariable;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    if (this._rangeStartVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStartVariable = this._rangeStartVariable;
    }
    if (this._trackerObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerObjectId = this._trackerObjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureNatPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._directionVariable = undefined;
      this._natPoolName = undefined;
      this._natPoolNameVariable = undefined;
      this._overload = undefined;
      this._overloadVariable = undefined;
      this._prefixLength = undefined;
      this._prefixLengthVariable = undefined;
      this._rangeEnd = undefined;
      this._rangeEndVariable = undefined;
      this._rangeStart = undefined;
      this._rangeStartVariable = undefined;
      this._trackerObjectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._directionVariable = value.directionVariable;
      this._natPoolName = value.natPoolName;
      this._natPoolNameVariable = value.natPoolNameVariable;
      this._overload = value.overload;
      this._overloadVariable = value.overloadVariable;
      this._prefixLength = value.prefixLength;
      this._prefixLengthVariable = value.prefixLengthVariable;
      this._rangeEnd = value.rangeEnd;
      this._rangeEndVariable = value.rangeEndVariable;
      this._rangeStart = value.rangeStart;
      this._rangeStartVariable = value.rangeStartVariable;
      this._trackerObjectId = value.trackerObjectId;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // direction_variable - computed: false, optional: true, required: false
  private _directionVariable?: string; 
  public get directionVariable() {
    return this.getStringAttribute('direction_variable');
  }
  public set directionVariable(value: string) {
    this._directionVariable = value;
  }
  public resetDirectionVariable() {
    this._directionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionVariableInput() {
    return this._directionVariable;
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: number; 
  public get natPoolName() {
    return this.getNumberAttribute('nat_pool_name');
  }
  public set natPoolName(value: number) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // nat_pool_name_variable - computed: false, optional: true, required: false
  private _natPoolNameVariable?: string; 
  public get natPoolNameVariable() {
    return this.getStringAttribute('nat_pool_name_variable');
  }
  public set natPoolNameVariable(value: string) {
    this._natPoolNameVariable = value;
  }
  public resetNatPoolNameVariable() {
    this._natPoolNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameVariableInput() {
    return this._natPoolNameVariable;
  }

  // overload - computed: false, optional: true, required: false
  private _overload?: boolean | cdktf.IResolvable; 
  public get overload() {
    return this.getBooleanAttribute('overload');
  }
  public set overload(value: boolean | cdktf.IResolvable) {
    this._overload = value;
  }
  public resetOverload() {
    this._overload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadInput() {
    return this._overload;
  }

  // overload_variable - computed: false, optional: true, required: false
  private _overloadVariable?: string; 
  public get overloadVariable() {
    return this.getStringAttribute('overload_variable');
  }
  public set overloadVariable(value: string) {
    this._overloadVariable = value;
  }
  public resetOverloadVariable() {
    this._overloadVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadVariableInput() {
    return this._overloadVariable;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // prefix_length_variable - computed: false, optional: true, required: false
  private _prefixLengthVariable?: string; 
  public get prefixLengthVariable() {
    return this.getStringAttribute('prefix_length_variable');
  }
  public set prefixLengthVariable(value: string) {
    this._prefixLengthVariable = value;
  }
  public resetPrefixLengthVariable() {
    this._prefixLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthVariableInput() {
    return this._prefixLengthVariable;
  }

  // range_end - computed: false, optional: true, required: false
  private _rangeEnd?: string; 
  public get rangeEnd() {
    return this.getStringAttribute('range_end');
  }
  public set rangeEnd(value: string) {
    this._rangeEnd = value;
  }
  public resetRangeEnd() {
    this._rangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_end_variable - computed: false, optional: true, required: false
  private _rangeEndVariable?: string; 
  public get rangeEndVariable() {
    return this.getStringAttribute('range_end_variable');
  }
  public set rangeEndVariable(value: string) {
    this._rangeEndVariable = value;
  }
  public resetRangeEndVariable() {
    this._rangeEndVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndVariableInput() {
    return this._rangeEndVariable;
  }

  // range_start - computed: false, optional: true, required: false
  private _rangeStart?: string; 
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }
  public set rangeStart(value: string) {
    this._rangeStart = value;
  }
  public resetRangeStart() {
    this._rangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }

  // range_start_variable - computed: false, optional: true, required: false
  private _rangeStartVariable?: string; 
  public get rangeStartVariable() {
    return this.getStringAttribute('range_start_variable');
  }
  public set rangeStartVariable(value: string) {
    this._rangeStartVariable = value;
  }
  public resetRangeStartVariable() {
    this._rangeStartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartVariableInput() {
    return this._rangeStartVariable;
  }

  // tracker_object_id - computed: false, optional: true, required: false
  private _trackerObjectId?: string; 
  public get trackerObjectId() {
    return this.getStringAttribute('tracker_object_id');
  }
  public set trackerObjectId(value: string) {
    this._trackerObjectId = value;
  }
  public resetTrackerObjectId() {
    this._trackerObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerObjectIdInput() {
    return this._trackerObjectId;
  }
}

export class ServiceLanVpnFeatureNatPoolsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureNatPools[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureNatPoolsOutputReference {
    return new ServiceLanVpnFeatureNatPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureNatPortForwards {
  /**
  * NAT Pool Name
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pool_name ServiceLanVpnFeature#nat_pool_name}
  */
  readonly natPoolName?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pool_name_variable ServiceLanVpnFeature#nat_pool_name_variable}
  */
  readonly natPoolNameVariable?: string;
  /**
  * Protocol
  *   - Choices: `TCP`, `UDP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol ServiceLanVpnFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_variable ServiceLanVpnFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_ip ServiceLanVpnFeature#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_ip_variable ServiceLanVpnFeature#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_port ServiceLanVpnFeature#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_port_variable ServiceLanVpnFeature#source_port_variable}
  */
  readonly sourcePortVariable?: string;
  /**
  * Translate Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#translate_port ServiceLanVpnFeature#translate_port}
  */
  readonly translatePort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#translate_port_variable ServiceLanVpnFeature#translate_port_variable}
  */
  readonly translatePortVariable?: string;
  /**
  * Translated Source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#translated_source_ip ServiceLanVpnFeature#translated_source_ip}
  */
  readonly translatedSourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#translated_source_ip_variable ServiceLanVpnFeature#translated_source_ip_variable}
  */
  readonly translatedSourceIpVariable?: string;
}

export function serviceLanVpnFeatureNatPortForwardsToTerraform(struct?: ServiceLanVpnFeatureNatPortForwards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_pool_name: cdktf.numberToTerraform(struct!.natPoolName),
    nat_pool_name_variable: cdktf.stringToTerraform(struct!.natPoolNameVariable),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_port_variable: cdktf.stringToTerraform(struct!.sourcePortVariable),
    translate_port: cdktf.numberToTerraform(struct!.translatePort),
    translate_port_variable: cdktf.stringToTerraform(struct!.translatePortVariable),
    translated_source_ip: cdktf.stringToTerraform(struct!.translatedSourceIp),
    translated_source_ip_variable: cdktf.stringToTerraform(struct!.translatedSourceIpVariable),
  }
}


export function serviceLanVpnFeatureNatPortForwardsToHclTerraform(struct?: ServiceLanVpnFeatureNatPortForwards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.natPoolNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_port: {
      value: cdktf.numberToHclTerraform(struct!.translatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    translate_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.translatePortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.translatedSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.translatedSourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureNatPortForwardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureNatPortForwards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._natPoolNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolNameVariable = this._natPoolNameVariable;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourcePortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortVariable = this._sourcePortVariable;
    }
    if (this._translatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatePort = this._translatePort;
    }
    if (this._translatePortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatePortVariable = this._translatePortVariable;
    }
    if (this._translatedSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedSourceIp = this._translatedSourceIp;
    }
    if (this._translatedSourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedSourceIpVariable = this._translatedSourceIpVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureNatPortForwards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natPoolName = undefined;
      this._natPoolNameVariable = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourcePort = undefined;
      this._sourcePortVariable = undefined;
      this._translatePort = undefined;
      this._translatePortVariable = undefined;
      this._translatedSourceIp = undefined;
      this._translatedSourceIpVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natPoolName = value.natPoolName;
      this._natPoolNameVariable = value.natPoolNameVariable;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourcePort = value.sourcePort;
      this._sourcePortVariable = value.sourcePortVariable;
      this._translatePort = value.translatePort;
      this._translatePortVariable = value.translatePortVariable;
      this._translatedSourceIp = value.translatedSourceIp;
      this._translatedSourceIpVariable = value.translatedSourceIpVariable;
    }
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: number; 
  public get natPoolName() {
    return this.getNumberAttribute('nat_pool_name');
  }
  public set natPoolName(value: number) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // nat_pool_name_variable - computed: false, optional: true, required: false
  private _natPoolNameVariable?: string; 
  public get natPoolNameVariable() {
    return this.getStringAttribute('nat_pool_name_variable');
  }
  public set natPoolNameVariable(value: string) {
    this._natPoolNameVariable = value;
  }
  public resetNatPoolNameVariable() {
    this._natPoolNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameVariableInput() {
    return this._natPoolNameVariable;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_variable - computed: false, optional: true, required: false
  private _sourceIpVariable?: string; 
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }
  public set sourceIpVariable(value: string) {
    this._sourceIpVariable = value;
  }
  public resetSourceIpVariable() {
    this._sourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpVariableInput() {
    return this._sourceIpVariable;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_port_variable - computed: false, optional: true, required: false
  private _sourcePortVariable?: string; 
  public get sourcePortVariable() {
    return this.getStringAttribute('source_port_variable');
  }
  public set sourcePortVariable(value: string) {
    this._sourcePortVariable = value;
  }
  public resetSourcePortVariable() {
    this._sourcePortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortVariableInput() {
    return this._sourcePortVariable;
  }

  // translate_port - computed: false, optional: true, required: false
  private _translatePort?: number; 
  public get translatePort() {
    return this.getNumberAttribute('translate_port');
  }
  public set translatePort(value: number) {
    this._translatePort = value;
  }
  public resetTranslatePort() {
    this._translatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatePortInput() {
    return this._translatePort;
  }

  // translate_port_variable - computed: false, optional: true, required: false
  private _translatePortVariable?: string; 
  public get translatePortVariable() {
    return this.getStringAttribute('translate_port_variable');
  }
  public set translatePortVariable(value: string) {
    this._translatePortVariable = value;
  }
  public resetTranslatePortVariable() {
    this._translatePortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatePortVariableInput() {
    return this._translatePortVariable;
  }

  // translated_source_ip - computed: false, optional: true, required: false
  private _translatedSourceIp?: string; 
  public get translatedSourceIp() {
    return this.getStringAttribute('translated_source_ip');
  }
  public set translatedSourceIp(value: string) {
    this._translatedSourceIp = value;
  }
  public resetTranslatedSourceIp() {
    this._translatedSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceIpInput() {
    return this._translatedSourceIp;
  }

  // translated_source_ip_variable - computed: false, optional: true, required: false
  private _translatedSourceIpVariable?: string; 
  public get translatedSourceIpVariable() {
    return this.getStringAttribute('translated_source_ip_variable');
  }
  public set translatedSourceIpVariable(value: string) {
    this._translatedSourceIpVariable = value;
  }
  public resetTranslatedSourceIpVariable() {
    this._translatedSourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceIpVariableInput() {
    return this._translatedSourceIpVariable;
  }
}

export class ServiceLanVpnFeatureNatPortForwardsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureNatPortForwards[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureNatPortForwardsOutputReference {
    return new ServiceLanVpnFeatureNatPortForwardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions {
  /**
  * Protocol to restributed leaked routes
  *   - Choices: `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol ServiceLanVpnFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_variable ServiceLanVpnFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#redistribution_policy_id ServiceLanVpnFeature#redistribution_policy_id}
  */
  readonly redistributionPolicyId?: string;
}

export function serviceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsToTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    redistribution_policy_id: cdktf.stringToTerraform(struct!.redistributionPolicyId),
  }
}


export function serviceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsToHclTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redistribution_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.redistributionPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._redistributionPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionPolicyId = this._redistributionPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._redistributionPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._redistributionPolicyId = value.redistributionPolicyId;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // redistribution_policy_id - computed: false, optional: true, required: false
  private _redistributionPolicyId?: string; 
  public get redistributionPolicyId() {
    return this.getStringAttribute('redistribution_policy_id');
  }
  public set redistributionPolicyId(value: string) {
    this._redistributionPolicyId = value;
  }
  public resetRedistributionPolicyId() {
    this._redistributionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionPolicyIdInput() {
    return this._redistributionPolicyId;
  }
}

export class ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsOutputReference {
    return new ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureRouteLeakFromGlobalVpns {
  /**
  * Redistribute Routes to specific Protocol on Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#redistributions ServiceLanVpnFeature#redistributions}
  */
  readonly redistributions?: ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_policy_id ServiceLanVpnFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
  /**
  * Leak Routes of particular protocol from Global to Service VPN
  *   - Choices: `static`, `connected`, `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_protocol ServiceLanVpnFeature#route_protocol}
  */
  readonly routeProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_protocol_variable ServiceLanVpnFeature#route_protocol_variable}
  */
  readonly routeProtocolVariable?: string;
}

export function serviceLanVpnFeatureRouteLeakFromGlobalVpnsToTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromGlobalVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redistributions: cdktf.listMapper(serviceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsToTerraform, false)(struct!.redistributions),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
    route_protocol: cdktf.stringToTerraform(struct!.routeProtocol),
    route_protocol_variable: cdktf.stringToTerraform(struct!.routeProtocolVariable),
  }
}


export function serviceLanVpnFeatureRouteLeakFromGlobalVpnsToHclTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromGlobalVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redistributions: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsToHclTerraform, false)(struct!.redistributions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsList",
    },
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_protocol: {
      value: cdktf.stringToHclTerraform(struct!.routeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeProtocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureRouteLeakFromGlobalVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureRouteLeakFromGlobalVpns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redistributions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributions = this._redistributions?.internalValue;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    if (this._routeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeProtocol = this._routeProtocol;
    }
    if (this._routeProtocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeProtocolVariable = this._routeProtocolVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureRouteLeakFromGlobalVpns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redistributions.internalValue = undefined;
      this._routePolicyId = undefined;
      this._routeProtocol = undefined;
      this._routeProtocolVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redistributions.internalValue = value.redistributions;
      this._routePolicyId = value.routePolicyId;
      this._routeProtocol = value.routeProtocol;
      this._routeProtocolVariable = value.routeProtocolVariable;
    }
  }

  // redistributions - computed: false, optional: true, required: false
  private _redistributions = new ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributionsList(this, "redistributions", false);
  public get redistributions() {
    return this._redistributions;
  }
  public putRedistributions(value: ServiceLanVpnFeatureRouteLeakFromGlobalVpnsRedistributions[] | cdktf.IResolvable) {
    this._redistributions.internalValue = value;
  }
  public resetRedistributions() {
    this._redistributions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionsInput() {
    return this._redistributions.internalValue;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // route_protocol - computed: false, optional: true, required: false
  private _routeProtocol?: string; 
  public get routeProtocol() {
    return this.getStringAttribute('route_protocol');
  }
  public set routeProtocol(value: string) {
    this._routeProtocol = value;
  }
  public resetRouteProtocol() {
    this._routeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeProtocolInput() {
    return this._routeProtocol;
  }

  // route_protocol_variable - computed: false, optional: true, required: false
  private _routeProtocolVariable?: string; 
  public get routeProtocolVariable() {
    return this.getStringAttribute('route_protocol_variable');
  }
  public set routeProtocolVariable(value: string) {
    this._routeProtocolVariable = value;
  }
  public resetRouteProtocolVariable() {
    this._routeProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeProtocolVariableInput() {
    return this._routeProtocolVariable;
  }
}

export class ServiceLanVpnFeatureRouteLeakFromGlobalVpnsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureRouteLeakFromGlobalVpns[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureRouteLeakFromGlobalVpnsOutputReference {
    return new ServiceLanVpnFeatureRouteLeakFromGlobalVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions {
  /**
  * Protocol to restributed leaked routes
  *   - Choices: `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol ServiceLanVpnFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_variable ServiceLanVpnFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#redistribution_policy_id ServiceLanVpnFeature#redistribution_policy_id}
  */
  readonly redistributionPolicyId?: string;
}

export function serviceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsToTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    redistribution_policy_id: cdktf.stringToTerraform(struct!.redistributionPolicyId),
  }
}


export function serviceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsToHclTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redistribution_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.redistributionPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._redistributionPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionPolicyId = this._redistributionPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._redistributionPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._redistributionPolicyId = value.redistributionPolicyId;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // redistribution_policy_id - computed: false, optional: true, required: false
  private _redistributionPolicyId?: string; 
  public get redistributionPolicyId() {
    return this.getStringAttribute('redistribution_policy_id');
  }
  public set redistributionPolicyId(value: string) {
    this._redistributionPolicyId = value;
  }
  public resetRedistributionPolicyId() {
    this._redistributionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionPolicyIdInput() {
    return this._redistributionPolicyId;
  }
}

export class ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsOutputReference {
    return new ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureRouteLeakFromOtherServices {
  /**
  * Redistribute Route to specific Protocol on Current Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#redistributions ServiceLanVpnFeature#redistributions}
  */
  readonly redistributions?: ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_policy_id ServiceLanVpnFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
  /**
  * Leak Route of particular protocol from Source Service VPN
  *   - Choices: `static`, `connected`, `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_protocol ServiceLanVpnFeature#route_protocol}
  */
  readonly routeProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_protocol_variable ServiceLanVpnFeature#route_protocol_variable}
  */
  readonly routeProtocolVariable?: string;
  /**
  * Source Service VPN from where route are to be leaked
  *   - Range: `1`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_vpn ServiceLanVpnFeature#source_vpn}
  */
  readonly sourceVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_vpn_variable ServiceLanVpnFeature#source_vpn_variable}
  */
  readonly sourceVpnVariable?: string;
}

export function serviceLanVpnFeatureRouteLeakFromOtherServicesToTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromOtherServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redistributions: cdktf.listMapper(serviceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsToTerraform, false)(struct!.redistributions),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
    route_protocol: cdktf.stringToTerraform(struct!.routeProtocol),
    route_protocol_variable: cdktf.stringToTerraform(struct!.routeProtocolVariable),
    source_vpn: cdktf.numberToTerraform(struct!.sourceVpn),
    source_vpn_variable: cdktf.stringToTerraform(struct!.sourceVpnVariable),
  }
}


export function serviceLanVpnFeatureRouteLeakFromOtherServicesToHclTerraform(struct?: ServiceLanVpnFeatureRouteLeakFromOtherServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redistributions: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsToHclTerraform, false)(struct!.redistributions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsList",
    },
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_protocol: {
      value: cdktf.stringToHclTerraform(struct!.routeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeProtocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vpn: {
      value: cdktf.numberToHclTerraform(struct!.sourceVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceVpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureRouteLeakFromOtherServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureRouteLeakFromOtherServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redistributions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributions = this._redistributions?.internalValue;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    if (this._routeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeProtocol = this._routeProtocol;
    }
    if (this._routeProtocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeProtocolVariable = this._routeProtocolVariable;
    }
    if (this._sourceVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpn = this._sourceVpn;
    }
    if (this._sourceVpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnVariable = this._sourceVpnVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureRouteLeakFromOtherServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redistributions.internalValue = undefined;
      this._routePolicyId = undefined;
      this._routeProtocol = undefined;
      this._routeProtocolVariable = undefined;
      this._sourceVpn = undefined;
      this._sourceVpnVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redistributions.internalValue = value.redistributions;
      this._routePolicyId = value.routePolicyId;
      this._routeProtocol = value.routeProtocol;
      this._routeProtocolVariable = value.routeProtocolVariable;
      this._sourceVpn = value.sourceVpn;
      this._sourceVpnVariable = value.sourceVpnVariable;
    }
  }

  // redistributions - computed: false, optional: true, required: false
  private _redistributions = new ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributionsList(this, "redistributions", false);
  public get redistributions() {
    return this._redistributions;
  }
  public putRedistributions(value: ServiceLanVpnFeatureRouteLeakFromOtherServicesRedistributions[] | cdktf.IResolvable) {
    this._redistributions.internalValue = value;
  }
  public resetRedistributions() {
    this._redistributions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionsInput() {
    return this._redistributions.internalValue;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // route_protocol - computed: false, optional: true, required: false
  private _routeProtocol?: string; 
  public get routeProtocol() {
    return this.getStringAttribute('route_protocol');
  }
  public set routeProtocol(value: string) {
    this._routeProtocol = value;
  }
  public resetRouteProtocol() {
    this._routeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeProtocolInput() {
    return this._routeProtocol;
  }

  // route_protocol_variable - computed: false, optional: true, required: false
  private _routeProtocolVariable?: string; 
  public get routeProtocolVariable() {
    return this.getStringAttribute('route_protocol_variable');
  }
  public set routeProtocolVariable(value: string) {
    this._routeProtocolVariable = value;
  }
  public resetRouteProtocolVariable() {
    this._routeProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeProtocolVariableInput() {
    return this._routeProtocolVariable;
  }

  // source_vpn - computed: false, optional: true, required: false
  private _sourceVpn?: number; 
  public get sourceVpn() {
    return this.getNumberAttribute('source_vpn');
  }
  public set sourceVpn(value: number) {
    this._sourceVpn = value;
  }
  public resetSourceVpn() {
    this._sourceVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnInput() {
    return this._sourceVpn;
  }

  // source_vpn_variable - computed: false, optional: true, required: false
  private _sourceVpnVariable?: string; 
  public get sourceVpnVariable() {
    return this.getStringAttribute('source_vpn_variable');
  }
  public set sourceVpnVariable(value: string) {
    this._sourceVpnVariable = value;
  }
  public resetSourceVpnVariable() {
    this._sourceVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnVariableInput() {
    return this._sourceVpnVariable;
  }
}

export class ServiceLanVpnFeatureRouteLeakFromOtherServicesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureRouteLeakFromOtherServices[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureRouteLeakFromOtherServicesOutputReference {
    return new ServiceLanVpnFeatureRouteLeakFromOtherServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions {
  /**
  * Protocol to restributed leaked routes
  *   - Choices: `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol ServiceLanVpnFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#protocol_variable ServiceLanVpnFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#redistribution_policy_id ServiceLanVpnFeature#redistribution_policy_id}
  */
  readonly redistributionPolicyId?: string;
}

export function serviceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsToTerraform(struct?: ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    redistribution_policy_id: cdktf.stringToTerraform(struct!.redistributionPolicyId),
  }
}


export function serviceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsToHclTerraform(struct?: ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redistribution_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.redistributionPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._redistributionPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionPolicyId = this._redistributionPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._redistributionPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._redistributionPolicyId = value.redistributionPolicyId;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // redistribution_policy_id - computed: false, optional: true, required: false
  private _redistributionPolicyId?: string; 
  public get redistributionPolicyId() {
    return this.getStringAttribute('redistribution_policy_id');
  }
  public set redistributionPolicyId(value: string) {
    this._redistributionPolicyId = value;
  }
  public resetRedistributionPolicyId() {
    this._redistributionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionPolicyIdInput() {
    return this._redistributionPolicyId;
  }
}

export class ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsOutputReference {
    return new ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureRouteLeakToGlobalVpns {
  /**
  * Redistribute Routes to specific Protocol on Global VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#redistributions ServiceLanVpnFeature#redistributions}
  */
  readonly redistributions?: ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_policy_id ServiceLanVpnFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
  /**
  * Leak Routes of particular protocol from Service to Global VPN
  *   - Choices: `static`, `connected`, `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_protocol ServiceLanVpnFeature#route_protocol}
  */
  readonly routeProtocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#route_protocol_variable ServiceLanVpnFeature#route_protocol_variable}
  */
  readonly routeProtocolVariable?: string;
}

export function serviceLanVpnFeatureRouteLeakToGlobalVpnsToTerraform(struct?: ServiceLanVpnFeatureRouteLeakToGlobalVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redistributions: cdktf.listMapper(serviceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsToTerraform, false)(struct!.redistributions),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
    route_protocol: cdktf.stringToTerraform(struct!.routeProtocol),
    route_protocol_variable: cdktf.stringToTerraform(struct!.routeProtocolVariable),
  }
}


export function serviceLanVpnFeatureRouteLeakToGlobalVpnsToHclTerraform(struct?: ServiceLanVpnFeatureRouteLeakToGlobalVpns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redistributions: {
      value: cdktf.listMapperHcl(serviceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsToHclTerraform, false)(struct!.redistributions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsList",
    },
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_protocol: {
      value: cdktf.stringToHclTerraform(struct!.routeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.routeProtocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureRouteLeakToGlobalVpnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureRouteLeakToGlobalVpns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redistributions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributions = this._redistributions?.internalValue;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    if (this._routeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeProtocol = this._routeProtocol;
    }
    if (this._routeProtocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeProtocolVariable = this._routeProtocolVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureRouteLeakToGlobalVpns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redistributions.internalValue = undefined;
      this._routePolicyId = undefined;
      this._routeProtocol = undefined;
      this._routeProtocolVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redistributions.internalValue = value.redistributions;
      this._routePolicyId = value.routePolicyId;
      this._routeProtocol = value.routeProtocol;
      this._routeProtocolVariable = value.routeProtocolVariable;
    }
  }

  // redistributions - computed: false, optional: true, required: false
  private _redistributions = new ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributionsList(this, "redistributions", false);
  public get redistributions() {
    return this._redistributions;
  }
  public putRedistributions(value: ServiceLanVpnFeatureRouteLeakToGlobalVpnsRedistributions[] | cdktf.IResolvable) {
    this._redistributions.internalValue = value;
  }
  public resetRedistributions() {
    this._redistributions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionsInput() {
    return this._redistributions.internalValue;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // route_protocol - computed: false, optional: true, required: false
  private _routeProtocol?: string; 
  public get routeProtocol() {
    return this.getStringAttribute('route_protocol');
  }
  public set routeProtocol(value: string) {
    this._routeProtocol = value;
  }
  public resetRouteProtocol() {
    this._routeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeProtocolInput() {
    return this._routeProtocol;
  }

  // route_protocol_variable - computed: false, optional: true, required: false
  private _routeProtocolVariable?: string; 
  public get routeProtocolVariable() {
    return this.getStringAttribute('route_protocol_variable');
  }
  public set routeProtocolVariable(value: string) {
    this._routeProtocolVariable = value;
  }
  public resetRouteProtocolVariable() {
    this._routeProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeProtocolVariableInput() {
    return this._routeProtocolVariable;
  }
}

export class ServiceLanVpnFeatureRouteLeakToGlobalVpnsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureRouteLeakToGlobalVpns[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureRouteLeakToGlobalVpnsOutputReference {
    return new ServiceLanVpnFeatureRouteLeakToGlobalVpnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureServiceRoutes {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address ServiceLanVpnFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#network_address_variable ServiceLanVpnFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * Service
  *   - Choices: `SIG`
  *   - Default value: `SIG`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#service ServiceLanVpnFeature#service}
  */
  readonly service?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#service_variable ServiceLanVpnFeature#service_variable}
  */
  readonly serviceVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask ServiceLanVpnFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#subnet_mask_variable ServiceLanVpnFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
  /**
  * Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#vpn ServiceLanVpnFeature#vpn}
  */
  readonly vpn?: number;
}

export function serviceLanVpnFeatureServiceRoutesToTerraform(struct?: ServiceLanVpnFeatureServiceRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    service: cdktf.stringToTerraform(struct!.service),
    service_variable: cdktf.stringToTerraform(struct!.serviceVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
  }
}


export function serviceLanVpnFeatureServiceRoutesToHclTerraform(struct?: ServiceLanVpnFeatureServiceRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_variable: {
      value: cdktf.stringToHclTerraform(struct!.serviceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureServiceRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureServiceRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVariable = this._serviceVariable;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureServiceRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._service = undefined;
      this._serviceVariable = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
      this._vpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._service = value.service;
      this._serviceVariable = value.serviceVariable;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
      this._vpn = value.vpn;
    }
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_variable - computed: false, optional: true, required: false
  private _serviceVariable?: string; 
  public get serviceVariable() {
    return this.getStringAttribute('service_variable');
  }
  public set serviceVariable(value: string) {
    this._serviceVariable = value;
  }
  public resetServiceVariable() {
    this._serviceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVariableInput() {
    return this._serviceVariable;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}

export class ServiceLanVpnFeatureServiceRoutesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureServiceRoutes[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureServiceRoutesOutputReference {
    return new ServiceLanVpnFeatureServiceRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureServices {
  /**
  * IPv4 Addresses (Maximum: 4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv4_addresses ServiceLanVpnFeature#ipv4_addresses}
  */
  readonly ipv4Addresses?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#ipv4_addresses_variable ServiceLanVpnFeature#ipv4_addresses_variable}
  */
  readonly ipv4AddressesVariable?: string;
  /**
  * Service Type
  *   - Choices: `FW`, `IDS`, `IDP`, `netsvc1`, `netsvc2`, `netsvc3`, `netsvc4`, `TE`, `appqoe`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#service_type ServiceLanVpnFeature#service_type}
  */
  readonly serviceType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#service_type_variable ServiceLanVpnFeature#service_type_variable}
  */
  readonly serviceTypeVariable?: string;
  /**
  * Tracking
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#tracking ServiceLanVpnFeature#tracking}
  */
  readonly tracking?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#tracking_variable ServiceLanVpnFeature#tracking_variable}
  */
  readonly trackingVariable?: string;
}

export function serviceLanVpnFeatureServicesToTerraform(struct?: ServiceLanVpnFeatureServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Addresses),
    ipv4_addresses_variable: cdktf.stringToTerraform(struct!.ipv4AddressesVariable),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    service_type_variable: cdktf.stringToTerraform(struct!.serviceTypeVariable),
    tracking: cdktf.booleanToTerraform(struct!.tracking),
    tracking_variable: cdktf.stringToTerraform(struct!.trackingVariable),
  }
}


export function serviceLanVpnFeatureServicesToHclTerraform(struct?: ServiceLanVpnFeatureServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Addresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv4_addresses_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.serviceTypeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking: {
      value: cdktf.booleanToHclTerraform(struct!.tracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracking_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackingVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addresses = this._ipv4Addresses;
    }
    if (this._ipv4AddressesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressesVariable = this._ipv4AddressesVariable;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._serviceTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypeVariable = this._serviceTypeVariable;
    }
    if (this._tracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracking = this._tracking;
    }
    if (this._trackingVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingVariable = this._trackingVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addresses = undefined;
      this._ipv4AddressesVariable = undefined;
      this._serviceType = undefined;
      this._serviceTypeVariable = undefined;
      this._tracking = undefined;
      this._trackingVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addresses = value.ipv4Addresses;
      this._ipv4AddressesVariable = value.ipv4AddressesVariable;
      this._serviceType = value.serviceType;
      this._serviceTypeVariable = value.serviceTypeVariable;
      this._tracking = value.tracking;
      this._trackingVariable = value.trackingVariable;
    }
  }

  // ipv4_addresses - computed: false, optional: true, required: false
  private _ipv4Addresses?: string[]; 
  public get ipv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }
  public set ipv4Addresses(value: string[]) {
    this._ipv4Addresses = value;
  }
  public resetIpv4Addresses() {
    this._ipv4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressesInput() {
    return this._ipv4Addresses;
  }

  // ipv4_addresses_variable - computed: false, optional: true, required: false
  private _ipv4AddressesVariable?: string; 
  public get ipv4AddressesVariable() {
    return this.getStringAttribute('ipv4_addresses_variable');
  }
  public set ipv4AddressesVariable(value: string) {
    this._ipv4AddressesVariable = value;
  }
  public resetIpv4AddressesVariable() {
    this._ipv4AddressesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressesVariableInput() {
    return this._ipv4AddressesVariable;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // service_type_variable - computed: false, optional: true, required: false
  private _serviceTypeVariable?: string; 
  public get serviceTypeVariable() {
    return this.getStringAttribute('service_type_variable');
  }
  public set serviceTypeVariable(value: string) {
    this._serviceTypeVariable = value;
  }
  public resetServiceTypeVariable() {
    this._serviceTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeVariableInput() {
    return this._serviceTypeVariable;
  }

  // tracking - computed: false, optional: true, required: false
  private _tracking?: boolean | cdktf.IResolvable; 
  public get tracking() {
    return this.getBooleanAttribute('tracking');
  }
  public set tracking(value: boolean | cdktf.IResolvable) {
    this._tracking = value;
  }
  public resetTracking() {
    this._tracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingInput() {
    return this._tracking;
  }

  // tracking_variable - computed: false, optional: true, required: false
  private _trackingVariable?: string; 
  public get trackingVariable() {
    return this.getStringAttribute('tracking_variable');
  }
  public set trackingVariable(value: string) {
    this._trackingVariable = value;
  }
  public resetTrackingVariable() {
    this._trackingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingVariableInput() {
    return this._trackingVariable;
  }
}

export class ServiceLanVpnFeatureServicesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureServices[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureServicesOutputReference {
    return new ServiceLanVpnFeatureServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnFeatureStaticNats {
  /**
  * NAT Pool Name
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pool_name ServiceLanVpnFeature#nat_pool_name}
  */
  readonly natPoolName?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#nat_pool_name_variable ServiceLanVpnFeature#nat_pool_name_variable}
  */
  readonly natPoolNameVariable?: string;
  /**
  * Source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_ip ServiceLanVpnFeature#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#source_ip_variable ServiceLanVpnFeature#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Static NAT Direction
  *   - Choices: `inside`, `outside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#static_nat_direction ServiceLanVpnFeature#static_nat_direction}
  */
  readonly staticNatDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#static_nat_direction_variable ServiceLanVpnFeature#static_nat_direction_variable}
  */
  readonly staticNatDirectionVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#tracker_object_id ServiceLanVpnFeature#tracker_object_id}
  */
  readonly trackerObjectId?: string;
  /**
  * Translated Source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#translated_source_ip ServiceLanVpnFeature#translated_source_ip}
  */
  readonly translatedSourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#translated_source_ip_variable ServiceLanVpnFeature#translated_source_ip_variable}
  */
  readonly translatedSourceIpVariable?: string;
}

export function serviceLanVpnFeatureStaticNatsToTerraform(struct?: ServiceLanVpnFeatureStaticNats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_pool_name: cdktf.numberToTerraform(struct!.natPoolName),
    nat_pool_name_variable: cdktf.stringToTerraform(struct!.natPoolNameVariable),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    static_nat_direction: cdktf.stringToTerraform(struct!.staticNatDirection),
    static_nat_direction_variable: cdktf.stringToTerraform(struct!.staticNatDirectionVariable),
    tracker_object_id: cdktf.stringToTerraform(struct!.trackerObjectId),
    translated_source_ip: cdktf.stringToTerraform(struct!.translatedSourceIp),
    translated_source_ip_variable: cdktf.stringToTerraform(struct!.translatedSourceIpVariable),
  }
}


export function serviceLanVpnFeatureStaticNatsToHclTerraform(struct?: ServiceLanVpnFeatureStaticNats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_pool_name: {
      value: cdktf.numberToHclTerraform(struct!.natPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.natPoolNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat_direction: {
      value: cdktf.stringToHclTerraform(struct!.staticNatDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat_direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.staticNatDirectionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_object_id: {
      value: cdktf.stringToHclTerraform(struct!.trackerObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.translatedSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.translatedSourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnFeatureStaticNatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnFeatureStaticNats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolName = this._natPoolName;
    }
    if (this._natPoolNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolNameVariable = this._natPoolNameVariable;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._staticNatDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirection = this._staticNatDirection;
    }
    if (this._staticNatDirectionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirectionVariable = this._staticNatDirectionVariable;
    }
    if (this._trackerObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerObjectId = this._trackerObjectId;
    }
    if (this._translatedSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedSourceIp = this._translatedSourceIp;
    }
    if (this._translatedSourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedSourceIpVariable = this._translatedSourceIpVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnFeatureStaticNats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natPoolName = undefined;
      this._natPoolNameVariable = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._staticNatDirection = undefined;
      this._staticNatDirectionVariable = undefined;
      this._trackerObjectId = undefined;
      this._translatedSourceIp = undefined;
      this._translatedSourceIpVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natPoolName = value.natPoolName;
      this._natPoolNameVariable = value.natPoolNameVariable;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._staticNatDirection = value.staticNatDirection;
      this._staticNatDirectionVariable = value.staticNatDirectionVariable;
      this._trackerObjectId = value.trackerObjectId;
      this._translatedSourceIp = value.translatedSourceIp;
      this._translatedSourceIpVariable = value.translatedSourceIpVariable;
    }
  }

  // nat_pool_name - computed: false, optional: true, required: false
  private _natPoolName?: number; 
  public get natPoolName() {
    return this.getNumberAttribute('nat_pool_name');
  }
  public set natPoolName(value: number) {
    this._natPoolName = value;
  }
  public resetNatPoolName() {
    this._natPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameInput() {
    return this._natPoolName;
  }

  // nat_pool_name_variable - computed: false, optional: true, required: false
  private _natPoolNameVariable?: string; 
  public get natPoolNameVariable() {
    return this.getStringAttribute('nat_pool_name_variable');
  }
  public set natPoolNameVariable(value: string) {
    this._natPoolNameVariable = value;
  }
  public resetNatPoolNameVariable() {
    this._natPoolNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolNameVariableInput() {
    return this._natPoolNameVariable;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_variable - computed: false, optional: true, required: false
  private _sourceIpVariable?: string; 
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }
  public set sourceIpVariable(value: string) {
    this._sourceIpVariable = value;
  }
  public resetSourceIpVariable() {
    this._sourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpVariableInput() {
    return this._sourceIpVariable;
  }

  // static_nat_direction - computed: false, optional: true, required: false
  private _staticNatDirection?: string; 
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }
  public set staticNatDirection(value: string) {
    this._staticNatDirection = value;
  }
  public resetStaticNatDirection() {
    this._staticNatDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatDirectionInput() {
    return this._staticNatDirection;
  }

  // static_nat_direction_variable - computed: false, optional: true, required: false
  private _staticNatDirectionVariable?: string; 
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }
  public set staticNatDirectionVariable(value: string) {
    this._staticNatDirectionVariable = value;
  }
  public resetStaticNatDirectionVariable() {
    this._staticNatDirectionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatDirectionVariableInput() {
    return this._staticNatDirectionVariable;
  }

  // tracker_object_id - computed: false, optional: true, required: false
  private _trackerObjectId?: string; 
  public get trackerObjectId() {
    return this.getStringAttribute('tracker_object_id');
  }
  public set trackerObjectId(value: string) {
    this._trackerObjectId = value;
  }
  public resetTrackerObjectId() {
    this._trackerObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerObjectIdInput() {
    return this._trackerObjectId;
  }

  // translated_source_ip - computed: false, optional: true, required: false
  private _translatedSourceIp?: string; 
  public get translatedSourceIp() {
    return this.getStringAttribute('translated_source_ip');
  }
  public set translatedSourceIp(value: string) {
    this._translatedSourceIp = value;
  }
  public resetTranslatedSourceIp() {
    this._translatedSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceIpInput() {
    return this._translatedSourceIp;
  }

  // translated_source_ip_variable - computed: false, optional: true, required: false
  private _translatedSourceIpVariable?: string; 
  public get translatedSourceIpVariable() {
    return this.getStringAttribute('translated_source_ip_variable');
  }
  public set translatedSourceIpVariable(value: string) {
    this._translatedSourceIpVariable = value;
  }
  public resetTranslatedSourceIpVariable() {
    this._translatedSourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceIpVariableInput() {
    return this._translatedSourceIpVariable;
  }
}

export class ServiceLanVpnFeatureStaticNatsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnFeatureStaticNats[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnFeatureStaticNatsOutputReference {
    return new ServiceLanVpnFeatureStaticNatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature sdwan_service_lan_vpn_feature}
*/
export class ServiceLanVpnFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnFeature to import
  * @param importFromId The id of the existing ServiceLanVpnFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_feature sdwan_service_lan_vpn_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseOmpIpv4S.internalValue = config.advertiseOmpIpv4S;
    this._advertiseOmpIpv6S.internalValue = config.advertiseOmpIpv6S;
    this._configDescription = config.configDescription;
    this._configDescriptionVariable = config.configDescriptionVariable;
    this._description = config.description;
    this._enableSdwanRemoteAccess = config.enableSdwanRemoteAccess;
    this._featureProfileId = config.featureProfileId;
    this._greRoutes.internalValue = config.greRoutes;
    this._hostMappings.internalValue = config.hostMappings;
    this._ipsecRoutes.internalValue = config.ipsecRoutes;
    this._ipv4ExportRouteTargets.internalValue = config.ipv4ExportRouteTargets;
    this._ipv4ImportRouteTargets.internalValue = config.ipv4ImportRouteTargets;
    this._ipv4StaticRoutes.internalValue = config.ipv4StaticRoutes;
    this._ipv6ExportRouteTargets.internalValue = config.ipv6ExportRouteTargets;
    this._ipv6ImportRouteTargets.internalValue = config.ipv6ImportRouteTargets;
    this._ipv6StaticRoutes.internalValue = config.ipv6StaticRoutes;
    this._name = config.name;
    this._nat64V4Pools.internalValue = config.nat64V4Pools;
    this._natPools.internalValue = config.natPools;
    this._natPortForwards.internalValue = config.natPortForwards;
    this._ompAdminDistanceIpv4 = config.ompAdminDistanceIpv4;
    this._ompAdminDistanceIpv4Variable = config.ompAdminDistanceIpv4Variable;
    this._ompAdminDistanceIpv6 = config.ompAdminDistanceIpv6;
    this._ompAdminDistanceIpv6Variable = config.ompAdminDistanceIpv6Variable;
    this._primaryDnsAddressIpv4 = config.primaryDnsAddressIpv4;
    this._primaryDnsAddressIpv4Variable = config.primaryDnsAddressIpv4Variable;
    this._primaryDnsAddressIpv6 = config.primaryDnsAddressIpv6;
    this._primaryDnsAddressIpv6Variable = config.primaryDnsAddressIpv6Variable;
    this._routeLeakFromGlobalVpns.internalValue = config.routeLeakFromGlobalVpns;
    this._routeLeakFromOtherServices.internalValue = config.routeLeakFromOtherServices;
    this._routeLeakToGlobalVpns.internalValue = config.routeLeakToGlobalVpns;
    this._secondaryDnsAddressIpv4 = config.secondaryDnsAddressIpv4;
    this._secondaryDnsAddressIpv4Variable = config.secondaryDnsAddressIpv4Variable;
    this._secondaryDnsAddressIpv6 = config.secondaryDnsAddressIpv6;
    this._secondaryDnsAddressIpv6Variable = config.secondaryDnsAddressIpv6Variable;
    this._serviceRoutes.internalValue = config.serviceRoutes;
    this._services.internalValue = config.services;
    this._staticNats.internalValue = config.staticNats;
    this._vpn = config.vpn;
    this._vpnVariable = config.vpnVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_omp_ipv4s - computed: false, optional: true, required: false
  private _advertiseOmpIpv4S = new ServiceLanVpnFeatureAdvertiseOmpIpv4SList(this, "advertise_omp_ipv4s", false);
  public get advertiseOmpIpv4S() {
    return this._advertiseOmpIpv4S;
  }
  public putAdvertiseOmpIpv4S(value: ServiceLanVpnFeatureAdvertiseOmpIpv4S[] | cdktf.IResolvable) {
    this._advertiseOmpIpv4S.internalValue = value;
  }
  public resetAdvertiseOmpIpv4S() {
    this._advertiseOmpIpv4S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOmpIpv4SInput() {
    return this._advertiseOmpIpv4S.internalValue;
  }

  // advertise_omp_ipv6s - computed: false, optional: true, required: false
  private _advertiseOmpIpv6S = new ServiceLanVpnFeatureAdvertiseOmpIpv6SList(this, "advertise_omp_ipv6s", false);
  public get advertiseOmpIpv6S() {
    return this._advertiseOmpIpv6S;
  }
  public putAdvertiseOmpIpv6S(value: ServiceLanVpnFeatureAdvertiseOmpIpv6S[] | cdktf.IResolvable) {
    this._advertiseOmpIpv6S.internalValue = value;
  }
  public resetAdvertiseOmpIpv6S() {
    this._advertiseOmpIpv6S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOmpIpv6SInput() {
    return this._advertiseOmpIpv6S.internalValue;
  }

  // config_description - computed: false, optional: true, required: false
  private _configDescription?: string; 
  public get configDescription() {
    return this.getStringAttribute('config_description');
  }
  public set configDescription(value: string) {
    this._configDescription = value;
  }
  public resetConfigDescription() {
    this._configDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDescriptionInput() {
    return this._configDescription;
  }

  // config_description_variable - computed: false, optional: true, required: false
  private _configDescriptionVariable?: string; 
  public get configDescriptionVariable() {
    return this.getStringAttribute('config_description_variable');
  }
  public set configDescriptionVariable(value: string) {
    this._configDescriptionVariable = value;
  }
  public resetConfigDescriptionVariable() {
    this._configDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDescriptionVariableInput() {
    return this._configDescriptionVariable;
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

  // enable_sdwan_remote_access - computed: false, optional: true, required: false
  private _enableSdwanRemoteAccess?: boolean | cdktf.IResolvable; 
  public get enableSdwanRemoteAccess() {
    return this.getBooleanAttribute('enable_sdwan_remote_access');
  }
  public set enableSdwanRemoteAccess(value: boolean | cdktf.IResolvable) {
    this._enableSdwanRemoteAccess = value;
  }
  public resetEnableSdwanRemoteAccess() {
    this._enableSdwanRemoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSdwanRemoteAccessInput() {
    return this._enableSdwanRemoteAccess;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // gre_routes - computed: false, optional: true, required: false
  private _greRoutes = new ServiceLanVpnFeatureGreRoutesList(this, "gre_routes", false);
  public get greRoutes() {
    return this._greRoutes;
  }
  public putGreRoutes(value: ServiceLanVpnFeatureGreRoutes[] | cdktf.IResolvable) {
    this._greRoutes.internalValue = value;
  }
  public resetGreRoutes() {
    this._greRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greRoutesInput() {
    return this._greRoutes.internalValue;
  }

  // host_mappings - computed: false, optional: true, required: false
  private _hostMappings = new ServiceLanVpnFeatureHostMappingsList(this, "host_mappings", false);
  public get hostMappings() {
    return this._hostMappings;
  }
  public putHostMappings(value: ServiceLanVpnFeatureHostMappings[] | cdktf.IResolvable) {
    this._hostMappings.internalValue = value;
  }
  public resetHostMappings() {
    this._hostMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMappingsInput() {
    return this._hostMappings.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipsec_routes - computed: false, optional: true, required: false
  private _ipsecRoutes = new ServiceLanVpnFeatureIpsecRoutesList(this, "ipsec_routes", false);
  public get ipsecRoutes() {
    return this._ipsecRoutes;
  }
  public putIpsecRoutes(value: ServiceLanVpnFeatureIpsecRoutes[] | cdktf.IResolvable) {
    this._ipsecRoutes.internalValue = value;
  }
  public resetIpsecRoutes() {
    this._ipsecRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRoutesInput() {
    return this._ipsecRoutes.internalValue;
  }

  // ipv4_export_route_targets - computed: false, optional: true, required: false
  private _ipv4ExportRouteTargets = new ServiceLanVpnFeatureIpv4ExportRouteTargetsList(this, "ipv4_export_route_targets", false);
  public get ipv4ExportRouteTargets() {
    return this._ipv4ExportRouteTargets;
  }
  public putIpv4ExportRouteTargets(value: ServiceLanVpnFeatureIpv4ExportRouteTargets[] | cdktf.IResolvable) {
    this._ipv4ExportRouteTargets.internalValue = value;
  }
  public resetIpv4ExportRouteTargets() {
    this._ipv4ExportRouteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ExportRouteTargetsInput() {
    return this._ipv4ExportRouteTargets.internalValue;
  }

  // ipv4_import_route_targets - computed: false, optional: true, required: false
  private _ipv4ImportRouteTargets = new ServiceLanVpnFeatureIpv4ImportRouteTargetsList(this, "ipv4_import_route_targets", false);
  public get ipv4ImportRouteTargets() {
    return this._ipv4ImportRouteTargets;
  }
  public putIpv4ImportRouteTargets(value: ServiceLanVpnFeatureIpv4ImportRouteTargets[] | cdktf.IResolvable) {
    this._ipv4ImportRouteTargets.internalValue = value;
  }
  public resetIpv4ImportRouteTargets() {
    this._ipv4ImportRouteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ImportRouteTargetsInput() {
    return this._ipv4ImportRouteTargets.internalValue;
  }

  // ipv4_static_routes - computed: false, optional: true, required: false
  private _ipv4StaticRoutes = new ServiceLanVpnFeatureIpv4StaticRoutesList(this, "ipv4_static_routes", false);
  public get ipv4StaticRoutes() {
    return this._ipv4StaticRoutes;
  }
  public putIpv4StaticRoutes(value: ServiceLanVpnFeatureIpv4StaticRoutes[] | cdktf.IResolvable) {
    this._ipv4StaticRoutes.internalValue = value;
  }
  public resetIpv4StaticRoutes() {
    this._ipv4StaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticRoutesInput() {
    return this._ipv4StaticRoutes.internalValue;
  }

  // ipv6_export_route_targets - computed: false, optional: true, required: false
  private _ipv6ExportRouteTargets = new ServiceLanVpnFeatureIpv6ExportRouteTargetsList(this, "ipv6_export_route_targets", false);
  public get ipv6ExportRouteTargets() {
    return this._ipv6ExportRouteTargets;
  }
  public putIpv6ExportRouteTargets(value: ServiceLanVpnFeatureIpv6ExportRouteTargets[] | cdktf.IResolvable) {
    this._ipv6ExportRouteTargets.internalValue = value;
  }
  public resetIpv6ExportRouteTargets() {
    this._ipv6ExportRouteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExportRouteTargetsInput() {
    return this._ipv6ExportRouteTargets.internalValue;
  }

  // ipv6_import_route_targets - computed: false, optional: true, required: false
  private _ipv6ImportRouteTargets = new ServiceLanVpnFeatureIpv6ImportRouteTargetsList(this, "ipv6_import_route_targets", false);
  public get ipv6ImportRouteTargets() {
    return this._ipv6ImportRouteTargets;
  }
  public putIpv6ImportRouteTargets(value: ServiceLanVpnFeatureIpv6ImportRouteTargets[] | cdktf.IResolvable) {
    this._ipv6ImportRouteTargets.internalValue = value;
  }
  public resetIpv6ImportRouteTargets() {
    this._ipv6ImportRouteTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ImportRouteTargetsInput() {
    return this._ipv6ImportRouteTargets.internalValue;
  }

  // ipv6_static_routes - computed: false, optional: true, required: false
  private _ipv6StaticRoutes = new ServiceLanVpnFeatureIpv6StaticRoutesList(this, "ipv6_static_routes", false);
  public get ipv6StaticRoutes() {
    return this._ipv6StaticRoutes;
  }
  public putIpv6StaticRoutes(value: ServiceLanVpnFeatureIpv6StaticRoutes[] | cdktf.IResolvable) {
    this._ipv6StaticRoutes.internalValue = value;
  }
  public resetIpv6StaticRoutes() {
    this._ipv6StaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StaticRoutesInput() {
    return this._ipv6StaticRoutes.internalValue;
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

  // nat_64_v4_pools - computed: false, optional: true, required: false
  private _nat64V4Pools = new ServiceLanVpnFeatureNat64V4PoolsList(this, "nat_64_v4_pools", false);
  public get nat64V4Pools() {
    return this._nat64V4Pools;
  }
  public putNat64V4Pools(value: ServiceLanVpnFeatureNat64V4Pools[] | cdktf.IResolvable) {
    this._nat64V4Pools.internalValue = value;
  }
  public resetNat64V4Pools() {
    this._nat64V4Pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64V4PoolsInput() {
    return this._nat64V4Pools.internalValue;
  }

  // nat_pools - computed: false, optional: true, required: false
  private _natPools = new ServiceLanVpnFeatureNatPoolsList(this, "nat_pools", false);
  public get natPools() {
    return this._natPools;
  }
  public putNatPools(value: ServiceLanVpnFeatureNatPools[] | cdktf.IResolvable) {
    this._natPools.internalValue = value;
  }
  public resetNatPools() {
    this._natPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolsInput() {
    return this._natPools.internalValue;
  }

  // nat_port_forwards - computed: false, optional: true, required: false
  private _natPortForwards = new ServiceLanVpnFeatureNatPortForwardsList(this, "nat_port_forwards", false);
  public get natPortForwards() {
    return this._natPortForwards;
  }
  public putNatPortForwards(value: ServiceLanVpnFeatureNatPortForwards[] | cdktf.IResolvable) {
    this._natPortForwards.internalValue = value;
  }
  public resetNatPortForwards() {
    this._natPortForwards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortForwardsInput() {
    return this._natPortForwards.internalValue;
  }

  // omp_admin_distance_ipv4 - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv4?: number; 
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }
  public set ompAdminDistanceIpv4(value: number) {
    this._ompAdminDistanceIpv4 = value;
  }
  public resetOmpAdminDistanceIpv4() {
    this._ompAdminDistanceIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv4Input() {
    return this._ompAdminDistanceIpv4;
  }

  // omp_admin_distance_ipv4_variable - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv4Variable?: string; 
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }
  public set ompAdminDistanceIpv4Variable(value: string) {
    this._ompAdminDistanceIpv4Variable = value;
  }
  public resetOmpAdminDistanceIpv4Variable() {
    this._ompAdminDistanceIpv4Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv4VariableInput() {
    return this._ompAdminDistanceIpv4Variable;
  }

  // omp_admin_distance_ipv6 - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv6?: number; 
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }
  public set ompAdminDistanceIpv6(value: number) {
    this._ompAdminDistanceIpv6 = value;
  }
  public resetOmpAdminDistanceIpv6() {
    this._ompAdminDistanceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv6Input() {
    return this._ompAdminDistanceIpv6;
  }

  // omp_admin_distance_ipv6_variable - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv6Variable?: string; 
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }
  public set ompAdminDistanceIpv6Variable(value: string) {
    this._ompAdminDistanceIpv6Variable = value;
  }
  public resetOmpAdminDistanceIpv6Variable() {
    this._ompAdminDistanceIpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv6VariableInput() {
    return this._ompAdminDistanceIpv6Variable;
  }

  // primary_dns_address_ipv4 - computed: false, optional: true, required: false
  private _primaryDnsAddressIpv4?: string; 
  public get primaryDnsAddressIpv4() {
    return this.getStringAttribute('primary_dns_address_ipv4');
  }
  public set primaryDnsAddressIpv4(value: string) {
    this._primaryDnsAddressIpv4 = value;
  }
  public resetPrimaryDnsAddressIpv4() {
    this._primaryDnsAddressIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsAddressIpv4Input() {
    return this._primaryDnsAddressIpv4;
  }

  // primary_dns_address_ipv4_variable - computed: false, optional: true, required: false
  private _primaryDnsAddressIpv4Variable?: string; 
  public get primaryDnsAddressIpv4Variable() {
    return this.getStringAttribute('primary_dns_address_ipv4_variable');
  }
  public set primaryDnsAddressIpv4Variable(value: string) {
    this._primaryDnsAddressIpv4Variable = value;
  }
  public resetPrimaryDnsAddressIpv4Variable() {
    this._primaryDnsAddressIpv4Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsAddressIpv4VariableInput() {
    return this._primaryDnsAddressIpv4Variable;
  }

  // primary_dns_address_ipv6 - computed: false, optional: true, required: false
  private _primaryDnsAddressIpv6?: string; 
  public get primaryDnsAddressIpv6() {
    return this.getStringAttribute('primary_dns_address_ipv6');
  }
  public set primaryDnsAddressIpv6(value: string) {
    this._primaryDnsAddressIpv6 = value;
  }
  public resetPrimaryDnsAddressIpv6() {
    this._primaryDnsAddressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsAddressIpv6Input() {
    return this._primaryDnsAddressIpv6;
  }

  // primary_dns_address_ipv6_variable - computed: false, optional: true, required: false
  private _primaryDnsAddressIpv6Variable?: string; 
  public get primaryDnsAddressIpv6Variable() {
    return this.getStringAttribute('primary_dns_address_ipv6_variable');
  }
  public set primaryDnsAddressIpv6Variable(value: string) {
    this._primaryDnsAddressIpv6Variable = value;
  }
  public resetPrimaryDnsAddressIpv6Variable() {
    this._primaryDnsAddressIpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsAddressIpv6VariableInput() {
    return this._primaryDnsAddressIpv6Variable;
  }

  // route_leak_from_global_vpns - computed: false, optional: true, required: false
  private _routeLeakFromGlobalVpns = new ServiceLanVpnFeatureRouteLeakFromGlobalVpnsList(this, "route_leak_from_global_vpns", false);
  public get routeLeakFromGlobalVpns() {
    return this._routeLeakFromGlobalVpns;
  }
  public putRouteLeakFromGlobalVpns(value: ServiceLanVpnFeatureRouteLeakFromGlobalVpns[] | cdktf.IResolvable) {
    this._routeLeakFromGlobalVpns.internalValue = value;
  }
  public resetRouteLeakFromGlobalVpns() {
    this._routeLeakFromGlobalVpns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLeakFromGlobalVpnsInput() {
    return this._routeLeakFromGlobalVpns.internalValue;
  }

  // route_leak_from_other_services - computed: false, optional: true, required: false
  private _routeLeakFromOtherServices = new ServiceLanVpnFeatureRouteLeakFromOtherServicesList(this, "route_leak_from_other_services", false);
  public get routeLeakFromOtherServices() {
    return this._routeLeakFromOtherServices;
  }
  public putRouteLeakFromOtherServices(value: ServiceLanVpnFeatureRouteLeakFromOtherServices[] | cdktf.IResolvable) {
    this._routeLeakFromOtherServices.internalValue = value;
  }
  public resetRouteLeakFromOtherServices() {
    this._routeLeakFromOtherServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLeakFromOtherServicesInput() {
    return this._routeLeakFromOtherServices.internalValue;
  }

  // route_leak_to_global_vpns - computed: false, optional: true, required: false
  private _routeLeakToGlobalVpns = new ServiceLanVpnFeatureRouteLeakToGlobalVpnsList(this, "route_leak_to_global_vpns", false);
  public get routeLeakToGlobalVpns() {
    return this._routeLeakToGlobalVpns;
  }
  public putRouteLeakToGlobalVpns(value: ServiceLanVpnFeatureRouteLeakToGlobalVpns[] | cdktf.IResolvable) {
    this._routeLeakToGlobalVpns.internalValue = value;
  }
  public resetRouteLeakToGlobalVpns() {
    this._routeLeakToGlobalVpns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLeakToGlobalVpnsInput() {
    return this._routeLeakToGlobalVpns.internalValue;
  }

  // secondary_dns_address_ipv4 - computed: false, optional: true, required: false
  private _secondaryDnsAddressIpv4?: string; 
  public get secondaryDnsAddressIpv4() {
    return this.getStringAttribute('secondary_dns_address_ipv4');
  }
  public set secondaryDnsAddressIpv4(value: string) {
    this._secondaryDnsAddressIpv4 = value;
  }
  public resetSecondaryDnsAddressIpv4() {
    this._secondaryDnsAddressIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsAddressIpv4Input() {
    return this._secondaryDnsAddressIpv4;
  }

  // secondary_dns_address_ipv4_variable - computed: false, optional: true, required: false
  private _secondaryDnsAddressIpv4Variable?: string; 
  public get secondaryDnsAddressIpv4Variable() {
    return this.getStringAttribute('secondary_dns_address_ipv4_variable');
  }
  public set secondaryDnsAddressIpv4Variable(value: string) {
    this._secondaryDnsAddressIpv4Variable = value;
  }
  public resetSecondaryDnsAddressIpv4Variable() {
    this._secondaryDnsAddressIpv4Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsAddressIpv4VariableInput() {
    return this._secondaryDnsAddressIpv4Variable;
  }

  // secondary_dns_address_ipv6 - computed: false, optional: true, required: false
  private _secondaryDnsAddressIpv6?: string; 
  public get secondaryDnsAddressIpv6() {
    return this.getStringAttribute('secondary_dns_address_ipv6');
  }
  public set secondaryDnsAddressIpv6(value: string) {
    this._secondaryDnsAddressIpv6 = value;
  }
  public resetSecondaryDnsAddressIpv6() {
    this._secondaryDnsAddressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsAddressIpv6Input() {
    return this._secondaryDnsAddressIpv6;
  }

  // secondary_dns_address_ipv6_variable - computed: false, optional: true, required: false
  private _secondaryDnsAddressIpv6Variable?: string; 
  public get secondaryDnsAddressIpv6Variable() {
    return this.getStringAttribute('secondary_dns_address_ipv6_variable');
  }
  public set secondaryDnsAddressIpv6Variable(value: string) {
    this._secondaryDnsAddressIpv6Variable = value;
  }
  public resetSecondaryDnsAddressIpv6Variable() {
    this._secondaryDnsAddressIpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsAddressIpv6VariableInput() {
    return this._secondaryDnsAddressIpv6Variable;
  }

  // service_routes - computed: false, optional: true, required: false
  private _serviceRoutes = new ServiceLanVpnFeatureServiceRoutesList(this, "service_routes", false);
  public get serviceRoutes() {
    return this._serviceRoutes;
  }
  public putServiceRoutes(value: ServiceLanVpnFeatureServiceRoutes[] | cdktf.IResolvable) {
    this._serviceRoutes.internalValue = value;
  }
  public resetServiceRoutes() {
    this._serviceRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoutesInput() {
    return this._serviceRoutes.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new ServiceLanVpnFeatureServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: ServiceLanVpnFeatureServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // static_nats - computed: false, optional: true, required: false
  private _staticNats = new ServiceLanVpnFeatureStaticNatsList(this, "static_nats", false);
  public get staticNats() {
    return this._staticNats;
  }
  public putStaticNats(value: ServiceLanVpnFeatureStaticNats[] | cdktf.IResolvable) {
    this._staticNats.internalValue = value;
  }
  public resetStaticNats() {
    this._staticNats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatsInput() {
    return this._staticNats.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_variable - computed: false, optional: true, required: false
  private _vpnVariable?: string; 
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
  public set vpnVariable(value: string) {
    this._vpnVariable = value;
  }
  public resetVpnVariable() {
    this._vpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnVariableInput() {
    return this._vpnVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_omp_ipv4s: cdktf.listMapper(serviceLanVpnFeatureAdvertiseOmpIpv4SToTerraform, false)(this._advertiseOmpIpv4S.internalValue),
      advertise_omp_ipv6s: cdktf.listMapper(serviceLanVpnFeatureAdvertiseOmpIpv6SToTerraform, false)(this._advertiseOmpIpv6S.internalValue),
      config_description: cdktf.stringToTerraform(this._configDescription),
      config_description_variable: cdktf.stringToTerraform(this._configDescriptionVariable),
      description: cdktf.stringToTerraform(this._description),
      enable_sdwan_remote_access: cdktf.booleanToTerraform(this._enableSdwanRemoteAccess),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      gre_routes: cdktf.listMapper(serviceLanVpnFeatureGreRoutesToTerraform, false)(this._greRoutes.internalValue),
      host_mappings: cdktf.listMapper(serviceLanVpnFeatureHostMappingsToTerraform, false)(this._hostMappings.internalValue),
      ipsec_routes: cdktf.listMapper(serviceLanVpnFeatureIpsecRoutesToTerraform, false)(this._ipsecRoutes.internalValue),
      ipv4_export_route_targets: cdktf.listMapper(serviceLanVpnFeatureIpv4ExportRouteTargetsToTerraform, false)(this._ipv4ExportRouteTargets.internalValue),
      ipv4_import_route_targets: cdktf.listMapper(serviceLanVpnFeatureIpv4ImportRouteTargetsToTerraform, false)(this._ipv4ImportRouteTargets.internalValue),
      ipv4_static_routes: cdktf.listMapper(serviceLanVpnFeatureIpv4StaticRoutesToTerraform, false)(this._ipv4StaticRoutes.internalValue),
      ipv6_export_route_targets: cdktf.listMapper(serviceLanVpnFeatureIpv6ExportRouteTargetsToTerraform, false)(this._ipv6ExportRouteTargets.internalValue),
      ipv6_import_route_targets: cdktf.listMapper(serviceLanVpnFeatureIpv6ImportRouteTargetsToTerraform, false)(this._ipv6ImportRouteTargets.internalValue),
      ipv6_static_routes: cdktf.listMapper(serviceLanVpnFeatureIpv6StaticRoutesToTerraform, false)(this._ipv6StaticRoutes.internalValue),
      name: cdktf.stringToTerraform(this._name),
      nat_64_v4_pools: cdktf.listMapper(serviceLanVpnFeatureNat64V4PoolsToTerraform, false)(this._nat64V4Pools.internalValue),
      nat_pools: cdktf.listMapper(serviceLanVpnFeatureNatPoolsToTerraform, false)(this._natPools.internalValue),
      nat_port_forwards: cdktf.listMapper(serviceLanVpnFeatureNatPortForwardsToTerraform, false)(this._natPortForwards.internalValue),
      omp_admin_distance_ipv4: cdktf.numberToTerraform(this._ompAdminDistanceIpv4),
      omp_admin_distance_ipv4_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv4Variable),
      omp_admin_distance_ipv6: cdktf.numberToTerraform(this._ompAdminDistanceIpv6),
      omp_admin_distance_ipv6_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv6Variable),
      primary_dns_address_ipv4: cdktf.stringToTerraform(this._primaryDnsAddressIpv4),
      primary_dns_address_ipv4_variable: cdktf.stringToTerraform(this._primaryDnsAddressIpv4Variable),
      primary_dns_address_ipv6: cdktf.stringToTerraform(this._primaryDnsAddressIpv6),
      primary_dns_address_ipv6_variable: cdktf.stringToTerraform(this._primaryDnsAddressIpv6Variable),
      route_leak_from_global_vpns: cdktf.listMapper(serviceLanVpnFeatureRouteLeakFromGlobalVpnsToTerraform, false)(this._routeLeakFromGlobalVpns.internalValue),
      route_leak_from_other_services: cdktf.listMapper(serviceLanVpnFeatureRouteLeakFromOtherServicesToTerraform, false)(this._routeLeakFromOtherServices.internalValue),
      route_leak_to_global_vpns: cdktf.listMapper(serviceLanVpnFeatureRouteLeakToGlobalVpnsToTerraform, false)(this._routeLeakToGlobalVpns.internalValue),
      secondary_dns_address_ipv4: cdktf.stringToTerraform(this._secondaryDnsAddressIpv4),
      secondary_dns_address_ipv4_variable: cdktf.stringToTerraform(this._secondaryDnsAddressIpv4Variable),
      secondary_dns_address_ipv6: cdktf.stringToTerraform(this._secondaryDnsAddressIpv6),
      secondary_dns_address_ipv6_variable: cdktf.stringToTerraform(this._secondaryDnsAddressIpv6Variable),
      service_routes: cdktf.listMapper(serviceLanVpnFeatureServiceRoutesToTerraform, false)(this._serviceRoutes.internalValue),
      services: cdktf.listMapper(serviceLanVpnFeatureServicesToTerraform, false)(this._services.internalValue),
      static_nats: cdktf.listMapper(serviceLanVpnFeatureStaticNatsToTerraform, false)(this._staticNats.internalValue),
      vpn: cdktf.numberToTerraform(this._vpn),
      vpn_variable: cdktf.stringToTerraform(this._vpnVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_omp_ipv4s: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureAdvertiseOmpIpv4SToHclTerraform, false)(this._advertiseOmpIpv4S.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureAdvertiseOmpIpv4SList",
      },
      advertise_omp_ipv6s: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureAdvertiseOmpIpv6SToHclTerraform, false)(this._advertiseOmpIpv6S.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureAdvertiseOmpIpv6SList",
      },
      config_description: {
        value: cdktf.stringToHclTerraform(this._configDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_description_variable: {
        value: cdktf.stringToHclTerraform(this._configDescriptionVariable),
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
      enable_sdwan_remote_access: {
        value: cdktf.booleanToHclTerraform(this._enableSdwanRemoteAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_routes: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureGreRoutesToHclTerraform, false)(this._greRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureGreRoutesList",
      },
      host_mappings: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureHostMappingsToHclTerraform, false)(this._hostMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureHostMappingsList",
      },
      ipsec_routes: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpsecRoutesToHclTerraform, false)(this._ipsecRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpsecRoutesList",
      },
      ipv4_export_route_targets: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv4ExportRouteTargetsToHclTerraform, false)(this._ipv4ExportRouteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpv4ExportRouteTargetsList",
      },
      ipv4_import_route_targets: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv4ImportRouteTargetsToHclTerraform, false)(this._ipv4ImportRouteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpv4ImportRouteTargetsList",
      },
      ipv4_static_routes: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv4StaticRoutesToHclTerraform, false)(this._ipv4StaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpv4StaticRoutesList",
      },
      ipv6_export_route_targets: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv6ExportRouteTargetsToHclTerraform, false)(this._ipv6ExportRouteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpv6ExportRouteTargetsList",
      },
      ipv6_import_route_targets: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv6ImportRouteTargetsToHclTerraform, false)(this._ipv6ImportRouteTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpv6ImportRouteTargetsList",
      },
      ipv6_static_routes: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureIpv6StaticRoutesToHclTerraform, false)(this._ipv6StaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureIpv6StaticRoutesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_64_v4_pools: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureNat64V4PoolsToHclTerraform, false)(this._nat64V4Pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureNat64V4PoolsList",
      },
      nat_pools: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureNatPoolsToHclTerraform, false)(this._natPools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureNatPoolsList",
      },
      nat_port_forwards: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureNatPortForwardsToHclTerraform, false)(this._natPortForwards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureNatPortForwardsList",
      },
      omp_admin_distance_ipv4: {
        value: cdktf.numberToHclTerraform(this._ompAdminDistanceIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omp_admin_distance_ipv4_variable: {
        value: cdktf.stringToHclTerraform(this._ompAdminDistanceIpv4Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omp_admin_distance_ipv6: {
        value: cdktf.numberToHclTerraform(this._ompAdminDistanceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omp_admin_distance_ipv6_variable: {
        value: cdktf.stringToHclTerraform(this._ompAdminDistanceIpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_address_ipv4: {
        value: cdktf.stringToHclTerraform(this._primaryDnsAddressIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_address_ipv4_variable: {
        value: cdktf.stringToHclTerraform(this._primaryDnsAddressIpv4Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_address_ipv6: {
        value: cdktf.stringToHclTerraform(this._primaryDnsAddressIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_dns_address_ipv6_variable: {
        value: cdktf.stringToHclTerraform(this._primaryDnsAddressIpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_leak_from_global_vpns: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureRouteLeakFromGlobalVpnsToHclTerraform, false)(this._routeLeakFromGlobalVpns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureRouteLeakFromGlobalVpnsList",
      },
      route_leak_from_other_services: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureRouteLeakFromOtherServicesToHclTerraform, false)(this._routeLeakFromOtherServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureRouteLeakFromOtherServicesList",
      },
      route_leak_to_global_vpns: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureRouteLeakToGlobalVpnsToHclTerraform, false)(this._routeLeakToGlobalVpns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureRouteLeakToGlobalVpnsList",
      },
      secondary_dns_address_ipv4: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsAddressIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_address_ipv4_variable: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsAddressIpv4Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_address_ipv6: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsAddressIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_address_ipv6_variable: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsAddressIpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_routes: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureServiceRoutesToHclTerraform, false)(this._serviceRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureServiceRoutesList",
      },
      services: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureServicesToHclTerraform, false)(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureServicesList",
      },
      static_nats: {
        value: cdktf.listMapperHcl(serviceLanVpnFeatureStaticNatsToHclTerraform, false)(this._staticNats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnFeatureStaticNatsList",
      },
      vpn: {
        value: cdktf.numberToHclTerraform(this._vpn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_variable: {
        value: cdktf.stringToHclTerraform(this._vpnVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
