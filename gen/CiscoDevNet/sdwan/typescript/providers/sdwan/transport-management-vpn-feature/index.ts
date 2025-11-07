// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportManagementVpnFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#description TransportManagementVpnFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#feature_profile_id TransportManagementVpnFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * IPv4 Static Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#ipv4_static_routes TransportManagementVpnFeature#ipv4_static_routes}
  */
  readonly ipv4StaticRoutes?: TransportManagementVpnFeatureIpv4StaticRoutes[] | cdktf.IResolvable;
  /**
  * IPv6 Static Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#ipv6_static_routes TransportManagementVpnFeature#ipv6_static_routes}
  */
  readonly ipv6StaticRoutes?: TransportManagementVpnFeatureIpv6StaticRoutes[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#name TransportManagementVpnFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#new_host_mappings TransportManagementVpnFeature#new_host_mappings}
  */
  readonly newHostMappings?: TransportManagementVpnFeatureNewHostMappings[] | cdktf.IResolvable;
  /**
  * Primary DNS Address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#primary_dns_address_ipv4 TransportManagementVpnFeature#primary_dns_address_ipv4}
  */
  readonly primaryDnsAddressIpv4?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#primary_dns_address_ipv4_variable TransportManagementVpnFeature#primary_dns_address_ipv4_variable}
  */
  readonly primaryDnsAddressIpv4Variable?: string;
  /**
  * Primary DNS Address (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#primary_dns_address_ipv6 TransportManagementVpnFeature#primary_dns_address_ipv6}
  */
  readonly primaryDnsAddressIpv6?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#primary_dns_address_ipv6_variable TransportManagementVpnFeature#primary_dns_address_ipv6_variable}
  */
  readonly primaryDnsAddressIpv6Variable?: string;
  /**
  * Secondary DNS Address (IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#secondary_dns_address_ipv4 TransportManagementVpnFeature#secondary_dns_address_ipv4}
  */
  readonly secondaryDnsAddressIpv4?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#secondary_dns_address_ipv4_variable TransportManagementVpnFeature#secondary_dns_address_ipv4_variable}
  */
  readonly secondaryDnsAddressIpv4Variable?: string;
  /**
  * Secondary DNS Address (IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#secondary_dns_address_ipv6 TransportManagementVpnFeature#secondary_dns_address_ipv6}
  */
  readonly secondaryDnsAddressIpv6?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#secondary_dns_address_ipv6_variable TransportManagementVpnFeature#secondary_dns_address_ipv6_variable}
  */
  readonly secondaryDnsAddressIpv6Variable?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#vpn_description TransportManagementVpnFeature#vpn_description}
  */
  readonly vpnDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#vpn_description_variable TransportManagementVpnFeature#vpn_description_variable}
  */
  readonly vpnDescriptionVariable?: string;
}
export interface TransportManagementVpnFeatureIpv4StaticRoutesNextHops {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#address TransportManagementVpnFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#address_variable TransportManagementVpnFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#administrative_distance TransportManagementVpnFeature#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#administrative_distance_variable TransportManagementVpnFeature#administrative_distance_variable}
  */
  readonly administrativeDistanceVariable?: string;
}

export function transportManagementVpnFeatureIpv4StaticRoutesNextHopsToTerraform(struct?: TransportManagementVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable): any {
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


export function transportManagementVpnFeatureIpv4StaticRoutesNextHopsToHclTerraform(struct?: TransportManagementVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable): any {
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

export class TransportManagementVpnFeatureIpv4StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportManagementVpnFeatureIpv4StaticRoutesNextHops | cdktf.IResolvable | undefined) {
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

export class TransportManagementVpnFeatureIpv4StaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnFeatureIpv4StaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnFeatureIpv4StaticRoutesNextHopsOutputReference {
    return new TransportManagementVpnFeatureIpv4StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportManagementVpnFeatureIpv4StaticRoutes {
  /**
  * Administrative distance, Attribute conditional on `gateway` being equal to `null0`
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#administrative_distance TransportManagementVpnFeature#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Variable name, Attribute conditional on `gateway` being equal to `null0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#administrative_distance_variable TransportManagementVpnFeature#administrative_distance_variable}
  */
  readonly administrativeDistanceVariable?: string;
  /**
  * Gateway
  *   - Choices: `nextHop`, `dhcp`, `null0`
  *   - Default value: `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#gateway TransportManagementVpnFeature#gateway}
  */
  readonly gateway?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#network_address TransportManagementVpnFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#network_address_variable TransportManagementVpnFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * IPv4 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#next_hops TransportManagementVpnFeature#next_hops}
  */
  readonly nextHops?: TransportManagementVpnFeatureIpv4StaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#subnet_mask TransportManagementVpnFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#subnet_mask_variable TransportManagementVpnFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function transportManagementVpnFeatureIpv4StaticRoutesToTerraform(struct?: TransportManagementVpnFeatureIpv4StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    administrative_distance_variable: cdktf.stringToTerraform(struct!.administrativeDistanceVariable),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    next_hops: cdktf.listMapper(transportManagementVpnFeatureIpv4StaticRoutesNextHopsToTerraform, false)(struct!.nextHops),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
  }
}


export function transportManagementVpnFeatureIpv4StaticRoutesToHclTerraform(struct?: TransportManagementVpnFeatureIpv4StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    next_hops: {
      value: cdktf.listMapperHcl(transportManagementVpnFeatureIpv4StaticRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "TransportManagementVpnFeatureIpv4StaticRoutesNextHopsList",
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

export class TransportManagementVpnFeatureIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnFeatureIpv4StaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administrativeDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistance = this._administrativeDistance;
    }
    if (this._administrativeDistanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistanceVariable = this._administrativeDistanceVariable;
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
    if (this._nextHops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHops = this._nextHops?.internalValue;
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

  public set internalValue(value: TransportManagementVpnFeatureIpv4StaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administrativeDistance = undefined;
      this._administrativeDistanceVariable = undefined;
      this._gateway = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._nextHops.internalValue = undefined;
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
      this._administrativeDistance = value.administrativeDistance;
      this._administrativeDistanceVariable = value.administrativeDistanceVariable;
      this._gateway = value.gateway;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._nextHops.internalValue = value.nextHops;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
    }
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

  // next_hops - computed: false, optional: true, required: false
  private _nextHops = new TransportManagementVpnFeatureIpv4StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: TransportManagementVpnFeatureIpv4StaticRoutesNextHops[] | cdktf.IResolvable) {
    this._nextHops.internalValue = value;
  }
  public resetNextHops() {
    this._nextHops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopsInput() {
    return this._nextHops.internalValue;
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

export class TransportManagementVpnFeatureIpv4StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnFeatureIpv4StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnFeatureIpv4StaticRoutesOutputReference {
    return new TransportManagementVpnFeatureIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportManagementVpnFeatureIpv6StaticRoutesNextHops {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#address TransportManagementVpnFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#address_variable TransportManagementVpnFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`254`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#administrative_distance TransportManagementVpnFeature#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#administrative_distance_variable TransportManagementVpnFeature#administrative_distance_variable}
  */
  readonly administrativeDistanceVariable?: string;
}

export function transportManagementVpnFeatureIpv6StaticRoutesNextHopsToTerraform(struct?: TransportManagementVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable): any {
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


export function transportManagementVpnFeatureIpv6StaticRoutesNextHopsToHclTerraform(struct?: TransportManagementVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable): any {
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

export class TransportManagementVpnFeatureIpv6StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportManagementVpnFeatureIpv6StaticRoutesNextHops | cdktf.IResolvable | undefined) {
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

export class TransportManagementVpnFeatureIpv6StaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnFeatureIpv6StaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnFeatureIpv6StaticRoutesNextHopsOutputReference {
    return new TransportManagementVpnFeatureIpv6StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportManagementVpnFeatureIpv6StaticRoutes {
  /**
  * Gateway
  *   - Choices: `nextHop`, `null0`, `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#gateway TransportManagementVpnFeature#gateway}
  */
  readonly gateway?: string;
  /**
  * IPv6 Nat, Attribute conditional on `gateway` being equal to `nat`
  *   - Choices: `NAT64`, `NAT66`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#nat TransportManagementVpnFeature#nat}
  */
  readonly nat?: string;
  /**
  * Variable name, Attribute conditional on `gateway` being equal to `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#nat_variable TransportManagementVpnFeature#nat_variable}
  */
  readonly natVariable?: string;
  /**
  * IPv6 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#next_hops TransportManagementVpnFeature#next_hops}
  */
  readonly nextHops?: TransportManagementVpnFeatureIpv6StaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * IPv6 Route Gateway Next Hop, Attribute conditional on `gateway` being equal to `null0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#null0 TransportManagementVpnFeature#null0}
  */
  readonly null0?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#prefix TransportManagementVpnFeature#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#prefix_variable TransportManagementVpnFeature#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function transportManagementVpnFeatureIpv6StaticRoutesToTerraform(struct?: TransportManagementVpnFeatureIpv6StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    nat: cdktf.stringToTerraform(struct!.nat),
    nat_variable: cdktf.stringToTerraform(struct!.natVariable),
    next_hops: cdktf.listMapper(transportManagementVpnFeatureIpv6StaticRoutesNextHopsToTerraform, false)(struct!.nextHops),
    null0: cdktf.booleanToTerraform(struct!.null0),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function transportManagementVpnFeatureIpv6StaticRoutesToHclTerraform(struct?: TransportManagementVpnFeatureIpv6StaticRoutes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(transportManagementVpnFeatureIpv6StaticRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "TransportManagementVpnFeatureIpv6StaticRoutesNextHopsList",
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

export class TransportManagementVpnFeatureIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnFeatureIpv6StaticRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportManagementVpnFeatureIpv6StaticRoutes | cdktf.IResolvable | undefined) {
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
  private _nextHops = new TransportManagementVpnFeatureIpv6StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: TransportManagementVpnFeatureIpv6StaticRoutesNextHops[] | cdktf.IResolvable) {
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

export class TransportManagementVpnFeatureIpv6StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnFeatureIpv6StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnFeatureIpv6StaticRoutesOutputReference {
    return new TransportManagementVpnFeatureIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportManagementVpnFeatureNewHostMappings {
  /**
  * Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#host_name TransportManagementVpnFeature#host_name}
  */
  readonly hostName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#host_name_variable TransportManagementVpnFeature#host_name_variable}
  */
  readonly hostNameVariable?: string;
  /**
  * List of IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#list_of_ip_addresses TransportManagementVpnFeature#list_of_ip_addresses}
  */
  readonly listOfIpAddresses?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#list_of_ip_addresses_variable TransportManagementVpnFeature#list_of_ip_addresses_variable}
  */
  readonly listOfIpAddressesVariable?: string;
}

export function transportManagementVpnFeatureNewHostMappingsToTerraform(struct?: TransportManagementVpnFeatureNewHostMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    host_name_variable: cdktf.stringToTerraform(struct!.hostNameVariable),
    list_of_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listOfIpAddresses),
    list_of_ip_addresses_variable: cdktf.stringToTerraform(struct!.listOfIpAddressesVariable),
  }
}


export function transportManagementVpnFeatureNewHostMappingsToHclTerraform(struct?: TransportManagementVpnFeatureNewHostMappings | cdktf.IResolvable): any {
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
    list_of_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listOfIpAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    list_of_ip_addresses_variable: {
      value: cdktf.stringToHclTerraform(struct!.listOfIpAddressesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportManagementVpnFeatureNewHostMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnFeatureNewHostMappings | cdktf.IResolvable | undefined {
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
    if (this._listOfIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.listOfIpAddresses = this._listOfIpAddresses;
    }
    if (this._listOfIpAddressesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.listOfIpAddressesVariable = this._listOfIpAddressesVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportManagementVpnFeatureNewHostMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._hostNameVariable = undefined;
      this._listOfIpAddresses = undefined;
      this._listOfIpAddressesVariable = undefined;
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
      this._listOfIpAddresses = value.listOfIpAddresses;
      this._listOfIpAddressesVariable = value.listOfIpAddressesVariable;
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

  // list_of_ip_addresses - computed: false, optional: true, required: false
  private _listOfIpAddresses?: string[]; 
  public get listOfIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_ip_addresses'));
  }
  public set listOfIpAddresses(value: string[]) {
    this._listOfIpAddresses = value;
  }
  public resetListOfIpAddresses() {
    this._listOfIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOfIpAddressesInput() {
    return this._listOfIpAddresses;
  }

  // list_of_ip_addresses_variable - computed: false, optional: true, required: false
  private _listOfIpAddressesVariable?: string; 
  public get listOfIpAddressesVariable() {
    return this.getStringAttribute('list_of_ip_addresses_variable');
  }
  public set listOfIpAddressesVariable(value: string) {
    this._listOfIpAddressesVariable = value;
  }
  public resetListOfIpAddressesVariable() {
    this._listOfIpAddressesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOfIpAddressesVariableInput() {
    return this._listOfIpAddressesVariable;
  }
}

export class TransportManagementVpnFeatureNewHostMappingsList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnFeatureNewHostMappings[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnFeatureNewHostMappingsOutputReference {
    return new TransportManagementVpnFeatureNewHostMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature sdwan_transport_management_vpn_feature}
*/
export class TransportManagementVpnFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_management_vpn_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportManagementVpnFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportManagementVpnFeature to import
  * @param importFromId The id of the existing TransportManagementVpnFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportManagementVpnFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_management_vpn_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_feature sdwan_transport_management_vpn_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportManagementVpnFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportManagementVpnFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_management_vpn_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._ipv4StaticRoutes.internalValue = config.ipv4StaticRoutes;
    this._ipv6StaticRoutes.internalValue = config.ipv6StaticRoutes;
    this._name = config.name;
    this._newHostMappings.internalValue = config.newHostMappings;
    this._primaryDnsAddressIpv4 = config.primaryDnsAddressIpv4;
    this._primaryDnsAddressIpv4Variable = config.primaryDnsAddressIpv4Variable;
    this._primaryDnsAddressIpv6 = config.primaryDnsAddressIpv6;
    this._primaryDnsAddressIpv6Variable = config.primaryDnsAddressIpv6Variable;
    this._secondaryDnsAddressIpv4 = config.secondaryDnsAddressIpv4;
    this._secondaryDnsAddressIpv4Variable = config.secondaryDnsAddressIpv4Variable;
    this._secondaryDnsAddressIpv6 = config.secondaryDnsAddressIpv6;
    this._secondaryDnsAddressIpv6Variable = config.secondaryDnsAddressIpv6Variable;
    this._vpnDescription = config.vpnDescription;
    this._vpnDescriptionVariable = config.vpnDescriptionVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_static_routes - computed: false, optional: true, required: false
  private _ipv4StaticRoutes = new TransportManagementVpnFeatureIpv4StaticRoutesList(this, "ipv4_static_routes", false);
  public get ipv4StaticRoutes() {
    return this._ipv4StaticRoutes;
  }
  public putIpv4StaticRoutes(value: TransportManagementVpnFeatureIpv4StaticRoutes[] | cdktf.IResolvable) {
    this._ipv4StaticRoutes.internalValue = value;
  }
  public resetIpv4StaticRoutes() {
    this._ipv4StaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticRoutesInput() {
    return this._ipv4StaticRoutes.internalValue;
  }

  // ipv6_static_routes - computed: false, optional: true, required: false
  private _ipv6StaticRoutes = new TransportManagementVpnFeatureIpv6StaticRoutesList(this, "ipv6_static_routes", false);
  public get ipv6StaticRoutes() {
    return this._ipv6StaticRoutes;
  }
  public putIpv6StaticRoutes(value: TransportManagementVpnFeatureIpv6StaticRoutes[] | cdktf.IResolvable) {
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

  // new_host_mappings - computed: false, optional: true, required: false
  private _newHostMappings = new TransportManagementVpnFeatureNewHostMappingsList(this, "new_host_mappings", false);
  public get newHostMappings() {
    return this._newHostMappings;
  }
  public putNewHostMappings(value: TransportManagementVpnFeatureNewHostMappings[] | cdktf.IResolvable) {
    this._newHostMappings.internalValue = value;
  }
  public resetNewHostMappings() {
    this._newHostMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHostMappingsInput() {
    return this._newHostMappings.internalValue;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_description - computed: false, optional: true, required: false
  private _vpnDescription?: string; 
  public get vpnDescription() {
    return this.getStringAttribute('vpn_description');
  }
  public set vpnDescription(value: string) {
    this._vpnDescription = value;
  }
  public resetVpnDescription() {
    this._vpnDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDescriptionInput() {
    return this._vpnDescription;
  }

  // vpn_description_variable - computed: false, optional: true, required: false
  private _vpnDescriptionVariable?: string; 
  public get vpnDescriptionVariable() {
    return this.getStringAttribute('vpn_description_variable');
  }
  public set vpnDescriptionVariable(value: string) {
    this._vpnDescriptionVariable = value;
  }
  public resetVpnDescriptionVariable() {
    this._vpnDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDescriptionVariableInput() {
    return this._vpnDescriptionVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      ipv4_static_routes: cdktf.listMapper(transportManagementVpnFeatureIpv4StaticRoutesToTerraform, false)(this._ipv4StaticRoutes.internalValue),
      ipv6_static_routes: cdktf.listMapper(transportManagementVpnFeatureIpv6StaticRoutesToTerraform, false)(this._ipv6StaticRoutes.internalValue),
      name: cdktf.stringToTerraform(this._name),
      new_host_mappings: cdktf.listMapper(transportManagementVpnFeatureNewHostMappingsToTerraform, false)(this._newHostMappings.internalValue),
      primary_dns_address_ipv4: cdktf.stringToTerraform(this._primaryDnsAddressIpv4),
      primary_dns_address_ipv4_variable: cdktf.stringToTerraform(this._primaryDnsAddressIpv4Variable),
      primary_dns_address_ipv6: cdktf.stringToTerraform(this._primaryDnsAddressIpv6),
      primary_dns_address_ipv6_variable: cdktf.stringToTerraform(this._primaryDnsAddressIpv6Variable),
      secondary_dns_address_ipv4: cdktf.stringToTerraform(this._secondaryDnsAddressIpv4),
      secondary_dns_address_ipv4_variable: cdktf.stringToTerraform(this._secondaryDnsAddressIpv4Variable),
      secondary_dns_address_ipv6: cdktf.stringToTerraform(this._secondaryDnsAddressIpv6),
      secondary_dns_address_ipv6_variable: cdktf.stringToTerraform(this._secondaryDnsAddressIpv6Variable),
      vpn_description: cdktf.stringToTerraform(this._vpnDescription),
      vpn_description_variable: cdktf.stringToTerraform(this._vpnDescriptionVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_static_routes: {
        value: cdktf.listMapperHcl(transportManagementVpnFeatureIpv4StaticRoutesToHclTerraform, false)(this._ipv4StaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportManagementVpnFeatureIpv4StaticRoutesList",
      },
      ipv6_static_routes: {
        value: cdktf.listMapperHcl(transportManagementVpnFeatureIpv6StaticRoutesToHclTerraform, false)(this._ipv6StaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportManagementVpnFeatureIpv6StaticRoutesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_host_mappings: {
        value: cdktf.listMapperHcl(transportManagementVpnFeatureNewHostMappingsToHclTerraform, false)(this._newHostMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportManagementVpnFeatureNewHostMappingsList",
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
      vpn_description: {
        value: cdktf.stringToHclTerraform(this._vpnDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_description_variable: {
        value: cdktf.stringToHclTerraform(this._vpnDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
