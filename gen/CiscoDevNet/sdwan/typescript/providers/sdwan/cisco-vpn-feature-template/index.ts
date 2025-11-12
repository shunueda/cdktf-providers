// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoVpnFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#description CiscoVpnFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#device_types CiscoVpnFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Static DNS mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#dns_hosts CiscoVpnFeatureTemplate#dns_hosts}
  */
  readonly dnsHosts?: CiscoVpnFeatureTemplateDnsHosts[] | cdktf.IResolvable;
  /**
  * DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#dns_ipv4_servers CiscoVpnFeatureTemplate#dns_ipv4_servers}
  */
  readonly dnsIpv4Servers?: CiscoVpnFeatureTemplateDnsIpv4Servers[] | cdktf.IResolvable;
  /**
  * DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#dns_ipv6_servers CiscoVpnFeatureTemplate#dns_ipv6_servers}
  */
  readonly dnsIpv6Servers?: CiscoVpnFeatureTemplateDnsIpv6Servers[] | cdktf.IResolvable;
  /**
  * Optional packet fields for ECMP keying
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#enhance_ecmp_keying CiscoVpnFeatureTemplate#enhance_ecmp_keying}
  */
  readonly enhanceEcmpKeying?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#enhance_ecmp_keying_variable CiscoVpnFeatureTemplate#enhance_ecmp_keying_variable}
  */
  readonly enhanceEcmpKeyingVariable?: string;
  /**
  * Configure routes pointing to a GRE tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ipv4_static_gre_routes CiscoVpnFeatureTemplate#ipv4_static_gre_routes}
  */
  readonly ipv4StaticGreRoutes?: CiscoVpnFeatureTemplateIpv4StaticGreRoutes[] | cdktf.IResolvable;
  /**
  * Configure routes pointing to a IPSEC tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ipv4_static_ipsec_routes CiscoVpnFeatureTemplate#ipv4_static_ipsec_routes}
  */
  readonly ipv4StaticIpsecRoutes?: CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes[] | cdktf.IResolvable;
  /**
  * Configure IPv4 Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ipv4_static_routes CiscoVpnFeatureTemplate#ipv4_static_routes}
  */
  readonly ipv4StaticRoutes?: CiscoVpnFeatureTemplateIpv4StaticRoutes[] | cdktf.IResolvable;
  /**
  * Configure IPv4 Static Service Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ipv4_static_service_routes CiscoVpnFeatureTemplate#ipv4_static_service_routes}
  */
  readonly ipv4StaticServiceRoutes?: CiscoVpnFeatureTemplateIpv4StaticServiceRoutes[] | cdktf.IResolvable;
  /**
  * Configure IPv6 Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ipv6_static_routes CiscoVpnFeatureTemplate#ipv6_static_routes}
  */
  readonly ipv6StaticRoutes?: CiscoVpnFeatureTemplateIpv6StaticRoutes[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#name CiscoVpnFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Set NAT64 v4 pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#nat64_pools CiscoVpnFeatureTemplate#nat64_pools}
  */
  readonly nat64Pools?: CiscoVpnFeatureTemplateNat64Pools[] | cdktf.IResolvable;
  /**
  * Configure NAT Pool entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#nat_pools CiscoVpnFeatureTemplate#nat_pools}
  */
  readonly natPools?: CiscoVpnFeatureTemplateNatPools[] | cdktf.IResolvable;
  /**
  * omp-admin-distance-ipv4
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#omp_admin_distance_ipv4 CiscoVpnFeatureTemplate#omp_admin_distance_ipv4}
  */
  readonly ompAdminDistanceIpv4?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#omp_admin_distance_ipv4_variable CiscoVpnFeatureTemplate#omp_admin_distance_ipv4_variable}
  */
  readonly ompAdminDistanceIpv4Variable?: string;
  /**
  * omp-admin-distance-ipv6
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#omp_admin_distance_ipv6 CiscoVpnFeatureTemplate#omp_admin_distance_ipv6}
  */
  readonly ompAdminDistanceIpv6?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#omp_admin_distance_ipv6_variable CiscoVpnFeatureTemplate#omp_admin_distance_ipv6_variable}
  */
  readonly ompAdminDistanceIpv6Variable?: string;
  /**
  * Advertise routes to OMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#omp_advertise_ipv4_routes CiscoVpnFeatureTemplate#omp_advertise_ipv4_routes}
  */
  readonly ompAdvertiseIpv4Routes?: CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes[] | cdktf.IResolvable;
  /**
  * Advertise routes to OMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#omp_advertise_ipv6_routes CiscoVpnFeatureTemplate#omp_advertise_ipv6_routes}
  */
  readonly ompAdvertiseIpv6Routes?: CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes[] | cdktf.IResolvable;
  /**
  * Org Name selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#organization_name CiscoVpnFeatureTemplate#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Configure Port Forward entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#port_forward_rules CiscoVpnFeatureTemplate#port_forward_rules}
  */
  readonly portForwardRules?: CiscoVpnFeatureTemplatePortForwardRules[] | cdktf.IResolvable;
  /**
  * Enable route leaking to Global VPN from this Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_global_exports CiscoVpnFeatureTemplate#route_global_exports}
  */
  readonly routeGlobalExports?: CiscoVpnFeatureTemplateRouteGlobalExports[] | cdktf.IResolvable;
  /**
  * Enable route leaking from Global VPN to this Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_global_imports CiscoVpnFeatureTemplate#route_global_imports}
  */
  readonly routeGlobalImports?: CiscoVpnFeatureTemplateRouteGlobalImports[] | cdktf.IResolvable;
  /**
  * Enable route leak from Service VPN to current VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_vpn_imports CiscoVpnFeatureTemplate#route_vpn_imports}
  */
  readonly routeVpnImports?: CiscoVpnFeatureTemplateRouteVpnImports[] | cdktf.IResolvable;
  /**
  * Configure services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#services CiscoVpnFeatureTemplate#services}
  */
  readonly services?: CiscoVpnFeatureTemplateServices[] | cdktf.IResolvable;
  /**
  * Configure static NAT entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#static_nat_rules CiscoVpnFeatureTemplate#static_nat_rules}
  */
  readonly staticNatRules?: CiscoVpnFeatureTemplateStaticNatRules[] | cdktf.IResolvable;
  /**
  * Configure static NAT Subnet entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#static_nat_subnet_rules CiscoVpnFeatureTemplate#static_nat_subnet_rules}
  */
  readonly staticNatSubnetRules?: CiscoVpnFeatureTemplateStaticNatSubnetRules[] | cdktf.IResolvable;
  /**
  * Tenant VPN
  *   - Range: `0`-`65527`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tenant_vpn_id CiscoVpnFeatureTemplate#tenant_vpn_id}
  */
  readonly tenantVpnId?: number;
  /**
  * List of VPN instances
  *   - Range: `0`-`65527`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id CiscoVpnFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_name CiscoVpnFeatureTemplate#vpn_name}
  */
  readonly vpnName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_name_variable CiscoVpnFeatureTemplate#vpn_name_variable}
  */
  readonly vpnNameVariable?: string;
}
export interface CiscoVpnFeatureTemplateDnsHosts {
  /**
  * Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#hostname CiscoVpnFeatureTemplate#hostname}
  */
  readonly hostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#hostname_variable CiscoVpnFeatureTemplate#hostname_variable}
  */
  readonly hostnameVariable?: string;
  /**
  * List of IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ip CiscoVpnFeatureTemplate#ip}
  */
  readonly ip?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#ip_variable CiscoVpnFeatureTemplate#ip_variable}
  */
  readonly ipVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnFeatureTemplateDnsHostsToTerraform(struct?: CiscoVpnFeatureTemplateDnsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hostname_variable: cdktf.stringToTerraform(struct!.hostnameVariable),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    ip_variable: cdktf.stringToTerraform(struct!.ipVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnFeatureTemplateDnsHostsToHclTerraform(struct?: CiscoVpnFeatureTemplateDnsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_variable: {
      value: cdktf.stringToHclTerraform(struct!.hostnameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateDnsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateDnsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hostnameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameVariable = this._hostnameVariable;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVariable = this._ipVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateDnsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._hostnameVariable = undefined;
      this._ip = undefined;
      this._ipVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._hostnameVariable = value.hostnameVariable;
      this._ip = value.ip;
      this._ipVariable = value.ipVariable;
      this._optional = value.optional;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hostname_variable - computed: false, optional: true, required: false
  private _hostnameVariable?: string; 
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
  }
  public set hostnameVariable(value: string) {
    this._hostnameVariable = value;
  }
  public resetHostnameVariable() {
    this._hostnameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVariableInput() {
    return this._hostnameVariable;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_variable - computed: false, optional: true, required: false
  private _ipVariable?: string; 
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }
  public set ipVariable(value: string) {
    this._ipVariable = value;
  }
  public resetIpVariable() {
    this._ipVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVariableInput() {
    return this._ipVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnFeatureTemplateDnsHostsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateDnsHosts[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateDnsHostsOutputReference {
    return new CiscoVpnFeatureTemplateDnsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateDnsIpv4Servers {
  /**
  * DNS Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address CiscoVpnFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address_variable CiscoVpnFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Role
  *   - Choices: `primary`, `secondary`
  *   - Default value: `primary`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#role CiscoVpnFeatureTemplate#role}
  */
  readonly role?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#role_variable CiscoVpnFeatureTemplate#role_variable}
  */
  readonly roleVariable?: string;
}

export function ciscoVpnFeatureTemplateDnsIpv4ServersToTerraform(struct?: CiscoVpnFeatureTemplateDnsIpv4Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    role: cdktf.stringToTerraform(struct!.role),
    role_variable: cdktf.stringToTerraform(struct!.roleVariable),
  }
}


export function ciscoVpnFeatureTemplateDnsIpv4ServersToHclTerraform(struct?: CiscoVpnFeatureTemplateDnsIpv4Servers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_variable: {
      value: cdktf.stringToHclTerraform(struct!.roleVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateDnsIpv4ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateDnsIpv4Servers | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleVariable = this._roleVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateDnsIpv4Servers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._optional = undefined;
      this._role = undefined;
      this._roleVariable = undefined;
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
      this._optional = value.optional;
      this._role = value.role;
      this._roleVariable = value.roleVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_variable - computed: false, optional: true, required: false
  private _roleVariable?: string; 
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }
  public set roleVariable(value: string) {
    this._roleVariable = value;
  }
  public resetRoleVariable() {
    this._roleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleVariableInput() {
    return this._roleVariable;
  }
}

export class CiscoVpnFeatureTemplateDnsIpv4ServersList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateDnsIpv4Servers[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateDnsIpv4ServersOutputReference {
    return new CiscoVpnFeatureTemplateDnsIpv4ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateDnsIpv6Servers {
  /**
  * DNS Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address CiscoVpnFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Role
  *   - Choices: `primary`, `secondary`
  *   - Default value: `primary`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#role CiscoVpnFeatureTemplate#role}
  */
  readonly role?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#role_variable CiscoVpnFeatureTemplate#role_variable}
  */
  readonly roleVariable?: string;
}

export function ciscoVpnFeatureTemplateDnsIpv6ServersToTerraform(struct?: CiscoVpnFeatureTemplateDnsIpv6Servers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    optional: cdktf.booleanToTerraform(struct!.optional),
    role: cdktf.stringToTerraform(struct!.role),
    role_variable: cdktf.stringToTerraform(struct!.roleVariable),
  }
}


export function ciscoVpnFeatureTemplateDnsIpv6ServersToHclTerraform(struct?: CiscoVpnFeatureTemplateDnsIpv6Servers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_variable: {
      value: cdktf.stringToHclTerraform(struct!.roleVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateDnsIpv6ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateDnsIpv6Servers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleVariable = this._roleVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateDnsIpv6Servers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._optional = undefined;
      this._role = undefined;
      this._roleVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._optional = value.optional;
      this._role = value.role;
      this._roleVariable = value.roleVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_variable - computed: false, optional: true, required: false
  private _roleVariable?: string; 
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }
  public set roleVariable(value: string) {
    this._roleVariable = value;
  }
  public resetRoleVariable() {
    this._roleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleVariableInput() {
    return this._roleVariable;
  }
}

export class CiscoVpnFeatureTemplateDnsIpv6ServersList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateDnsIpv6Servers[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateDnsIpv6ServersOutputReference {
    return new CiscoVpnFeatureTemplateDnsIpv6ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv4StaticGreRoutes {
  /**
  * List of GRE Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#interfaces CiscoVpnFeatureTemplate#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#interfaces_variable CiscoVpnFeatureTemplate#interfaces_variable}
  */
  readonly interfacesVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix CiscoVpnFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_variable CiscoVpnFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * Destination VPN to resolve the prefix
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id CiscoVpnFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}

export function ciscoVpnFeatureTemplateIpv4StaticGreRoutesToTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticGreRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
    interfaces_variable: cdktf.stringToTerraform(struct!.interfacesVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function ciscoVpnFeatureTemplateIpv4StaticGreRoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticGreRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interfaces_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfacesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv4StaticGreRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv4StaticGreRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._interfacesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacesVariable = this._interfacesVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv4StaticGreRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces = undefined;
      this._interfacesVariable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces = value.interfaces;
      this._interfacesVariable = value.interfacesVariable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._vpnId = value.vpnId;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // interfaces_variable - computed: false, optional: true, required: false
  private _interfacesVariable?: string; 
  public get interfacesVariable() {
    return this.getStringAttribute('interfaces_variable');
  }
  public set interfacesVariable(value: string) {
    this._interfacesVariable = value;
  }
  public resetInterfacesVariable() {
    this._interfacesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesVariableInput() {
    return this._interfacesVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CiscoVpnFeatureTemplateIpv4StaticGreRoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv4StaticGreRoutes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv4StaticGreRoutesOutputReference {
    return new CiscoVpnFeatureTemplateIpv4StaticGreRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes {
  /**
  * List of IPSEC Interfaces (Separated by commas)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#interfaces CiscoVpnFeatureTemplate#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#interfaces_variable CiscoVpnFeatureTemplate#interfaces_variable}
  */
  readonly interfacesVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix CiscoVpnFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_variable CiscoVpnFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * Destination VPN to resolve the prefix
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id CiscoVpnFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}

export function ciscoVpnFeatureTemplateIpv4StaticIpsecRoutesToTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
    interfaces_variable: cdktf.stringToTerraform(struct!.interfacesVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function ciscoVpnFeatureTemplateIpv4StaticIpsecRoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interfaces_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfacesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv4StaticIpsecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._interfacesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacesVariable = this._interfacesVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces = undefined;
      this._interfacesVariable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces = value.interfaces;
      this._interfacesVariable = value.interfacesVariable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._vpnId = value.vpnId;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // interfaces_variable - computed: false, optional: true, required: false
  private _interfacesVariable?: string; 
  public get interfacesVariable() {
    return this.getStringAttribute('interfaces_variable');
  }
  public set interfacesVariable(value: string) {
    this._interfacesVariable = value;
  }
  public resetInterfacesVariable() {
    this._interfacesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesVariableInput() {
    return this._interfacesVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CiscoVpnFeatureTemplateIpv4StaticIpsecRoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv4StaticIpsecRoutesOutputReference {
    return new CiscoVpnFeatureTemplateIpv4StaticIpsecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address CiscoVpnFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address_variable CiscoVpnFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance CiscoVpnFeatureTemplate#distance}
  */
  readonly distance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance_variable CiscoVpnFeatureTemplate#distance_variable}
  */
  readonly distanceVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnFeatureTemplateIpv4StaticRoutesNextHopsToTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    distance: cdktf.numberToTerraform(struct!.distance),
    distance_variable: cdktf.stringToTerraform(struct!.distanceVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnFeatureTemplateIpv4StaticRoutesNextHopsToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops | cdktf.IResolvable): any {
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
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.distanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops | cdktf.IResolvable | undefined {
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
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._distanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceVariable = this._distanceVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._distance = undefined;
      this._distanceVariable = undefined;
      this._optional = undefined;
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
      this._distance = value.distance;
      this._distanceVariable = value.distanceVariable;
      this._optional = value.optional;
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

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_variable - computed: false, optional: true, required: false
  private _distanceVariable?: string; 
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }
  public set distanceVariable(value: string) {
    this._distanceVariable = value;
  }
  public resetDistanceVariable() {
    this._distanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceVariableInput() {
    return this._distanceVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsOutputReference {
    return new CiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address CiscoVpnFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address_variable CiscoVpnFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance CiscoVpnFeatureTemplate#distance}
  */
  readonly distance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance_variable CiscoVpnFeatureTemplate#distance_variable}
  */
  readonly distanceVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Static route tracker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker CiscoVpnFeatureTemplate#tracker}
  */
  readonly tracker?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_variable CiscoVpnFeatureTemplate#tracker_variable}
  */
  readonly trackerVariable?: string;
}

export function ciscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsToTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    distance: cdktf.numberToTerraform(struct!.distance),
    distance_variable: cdktf.stringToTerraform(struct!.distanceVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    tracker: cdktf.stringToTerraform(struct!.tracker),
    tracker_variable: cdktf.stringToTerraform(struct!.trackerVariable),
  }
}


export function ciscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops | cdktf.IResolvable): any {
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
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.distanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracker: {
      value: cdktf.stringToHclTerraform(struct!.tracker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops | cdktf.IResolvable | undefined {
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
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._distanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceVariable = this._distanceVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._tracker !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracker = this._tracker;
    }
    if (this._trackerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerVariable = this._trackerVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._distance = undefined;
      this._distanceVariable = undefined;
      this._optional = undefined;
      this._tracker = undefined;
      this._trackerVariable = undefined;
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
      this._distance = value.distance;
      this._distanceVariable = value.distanceVariable;
      this._optional = value.optional;
      this._tracker = value.tracker;
      this._trackerVariable = value.trackerVariable;
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

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_variable - computed: false, optional: true, required: false
  private _distanceVariable?: string; 
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }
  public set distanceVariable(value: string) {
    this._distanceVariable = value;
  }
  public resetDistanceVariable() {
    this._distanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceVariableInput() {
    return this._distanceVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // tracker - computed: false, optional: true, required: false
  private _tracker?: string; 
  public get tracker() {
    return this.getStringAttribute('tracker');
  }
  public set tracker(value: string) {
    this._tracker = value;
  }
  public resetTracker() {
    this._tracker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerInput() {
    return this._tracker;
  }

  // tracker_variable - computed: false, optional: true, required: false
  private _trackerVariable?: string; 
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }
  public set trackerVariable(value: string) {
    this._trackerVariable = value;
  }
  public resetTrackerVariable() {
    this._trackerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerVariableInput() {
    return this._trackerVariable;
  }
}

export class CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsOutputReference {
    return new CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv4StaticRoutes {
  /**
  * Default Gateway obtained from DHCP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#dhcp CiscoVpnFeatureTemplate#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#dhcp_variable CiscoVpnFeatureTemplate#dhcp_variable}
  */
  readonly dhcpVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance CiscoVpnFeatureTemplate#distance}
  */
  readonly distance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance_variable CiscoVpnFeatureTemplate#distance_variable}
  */
  readonly distanceVariable?: string;
  /**
  * IP gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#next_hops CiscoVpnFeatureTemplate#next_hops}
  */
  readonly nextHops?: CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * null0
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#null0 CiscoVpnFeatureTemplate#null0}
  */
  readonly null0?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#null0_variable CiscoVpnFeatureTemplate#null0_variable}
  */
  readonly null0Variable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix CiscoVpnFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_variable CiscoVpnFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * IP gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#track_next_hops CiscoVpnFeatureTemplate#track_next_hops}
  */
  readonly trackNextHops?: CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops[] | cdktf.IResolvable;
  /**
  * Destination VPN(!=0 or !=512) to resolve the prefix
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id CiscoVpnFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id_variable CiscoVpnFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoVpnFeatureTemplateIpv4StaticRoutesToTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    dhcp_variable: cdktf.stringToTerraform(struct!.dhcpVariable),
    distance: cdktf.numberToTerraform(struct!.distance),
    distance_variable: cdktf.stringToTerraform(struct!.distanceVariable),
    next_hops: cdktf.listMapper(ciscoVpnFeatureTemplateIpv4StaticRoutesNextHopsToTerraform, false)(struct!.nextHops),
    null0: cdktf.booleanToTerraform(struct!.null0),
    null0_variable: cdktf.stringToTerraform(struct!.null0Variable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    track_next_hops: cdktf.listMapper(ciscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsToTerraform, false)(struct!.trackNextHops),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoVpnFeatureTemplateIpv4StaticRoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticRoutes | cdktf.IResolvable): any {
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
    dhcp_variable: {
      value: cdktf.stringToHclTerraform(struct!.dhcpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.distanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hops: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv4StaticRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsList",
    },
    null0: {
      value: cdktf.booleanToHclTerraform(struct!.null0),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null0_variable: {
      value: cdktf.stringToHclTerraform(struct!.null0Variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    track_next_hops: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsToHclTerraform, false)(struct!.trackNextHops),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsList",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv4StaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dhcpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpVariable = this._dhcpVariable;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._distanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceVariable = this._distanceVariable;
    }
    if (this._nextHops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHops = this._nextHops?.internalValue;
    }
    if (this._null0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.null0 = this._null0;
    }
    if (this._null0Variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.null0Variable = this._null0Variable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._trackNextHops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackNextHops = this._trackNextHops?.internalValue;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv4StaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._dhcpVariable = undefined;
      this._distance = undefined;
      this._distanceVariable = undefined;
      this._nextHops.internalValue = undefined;
      this._null0 = undefined;
      this._null0Variable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._trackNextHops.internalValue = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._dhcpVariable = value.dhcpVariable;
      this._distance = value.distance;
      this._distanceVariable = value.distanceVariable;
      this._nextHops.internalValue = value.nextHops;
      this._null0 = value.null0;
      this._null0Variable = value.null0Variable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._trackNextHops.internalValue = value.trackNextHops;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
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

  // dhcp_variable - computed: false, optional: true, required: false
  private _dhcpVariable?: string; 
  public get dhcpVariable() {
    return this.getStringAttribute('dhcp_variable');
  }
  public set dhcpVariable(value: string) {
    this._dhcpVariable = value;
  }
  public resetDhcpVariable() {
    this._dhcpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpVariableInput() {
    return this._dhcpVariable;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_variable - computed: false, optional: true, required: false
  private _distanceVariable?: string; 
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }
  public set distanceVariable(value: string) {
    this._distanceVariable = value;
  }
  public resetDistanceVariable() {
    this._distanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceVariableInput() {
    return this._distanceVariable;
  }

  // next_hops - computed: false, optional: true, required: false
  private _nextHops = new CiscoVpnFeatureTemplateIpv4StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: CiscoVpnFeatureTemplateIpv4StaticRoutesNextHops[] | cdktf.IResolvable) {
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

  // null0_variable - computed: false, optional: true, required: false
  private _null0Variable?: string; 
  public get null0Variable() {
    return this.getStringAttribute('null0_variable');
  }
  public set null0Variable(value: string) {
    this._null0Variable = value;
  }
  public resetNull0Variable() {
    this._null0Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get null0VariableInput() {
    return this._null0Variable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // track_next_hops - computed: false, optional: true, required: false
  private _trackNextHops = new CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHopsList(this, "track_next_hops", false);
  public get trackNextHops() {
    return this._trackNextHops;
  }
  public putTrackNextHops(value: CiscoVpnFeatureTemplateIpv4StaticRoutesTrackNextHops[] | cdktf.IResolvable) {
    this._trackNextHops.internalValue = value;
  }
  public resetTrackNextHops() {
    this._trackNextHops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackNextHopsInput() {
    return this._trackNextHops.internalValue;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoVpnFeatureTemplateIpv4StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv4StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv4StaticRoutesOutputReference {
    return new CiscoVpnFeatureTemplateIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv4StaticServiceRoutes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix CiscoVpnFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_variable CiscoVpnFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * Service
  *   - Choices: `sig`
  *   - Default value: `sig`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#service CiscoVpnFeatureTemplate#service}
  */
  readonly service?: string;
  /**
  * Destination VPN to resolve the prefix
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id CiscoVpnFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}

export function ciscoVpnFeatureTemplateIpv4StaticServiceRoutesToTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticServiceRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    service: cdktf.stringToTerraform(struct!.service),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
  }
}


export function ciscoVpnFeatureTemplateIpv4StaticServiceRoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv4StaticServiceRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv4StaticServiceRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv4StaticServiceRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv4StaticServiceRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._service = undefined;
      this._vpnId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._service = value.service;
      this._vpnId = value.vpnId;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }
}

export class CiscoVpnFeatureTemplateIpv4StaticServiceRoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv4StaticServiceRoutes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv4StaticServiceRoutesOutputReference {
    return new CiscoVpnFeatureTemplateIpv4StaticServiceRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address CiscoVpnFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address_variable CiscoVpnFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Administrative distance
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance CiscoVpnFeatureTemplate#distance}
  */
  readonly distance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#distance_variable CiscoVpnFeatureTemplate#distance_variable}
  */
  readonly distanceVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnFeatureTemplateIpv6StaticRoutesNextHopsToTerraform(struct?: CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    distance: cdktf.numberToTerraform(struct!.distance),
    distance_variable: cdktf.stringToTerraform(struct!.distanceVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnFeatureTemplateIpv6StaticRoutesNextHopsToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops | cdktf.IResolvable): any {
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
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_variable: {
      value: cdktf.stringToHclTerraform(struct!.distanceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops | cdktf.IResolvable | undefined {
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
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._distanceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceVariable = this._distanceVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._distance = undefined;
      this._distanceVariable = undefined;
      this._optional = undefined;
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
      this._distance = value.distance;
      this._distanceVariable = value.distanceVariable;
      this._optional = value.optional;
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

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // distance_variable - computed: false, optional: true, required: false
  private _distanceVariable?: string; 
  public get distanceVariable() {
    return this.getStringAttribute('distance_variable');
  }
  public set distanceVariable(value: string) {
    this._distanceVariable = value;
  }
  public resetDistanceVariable() {
    this._distanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceVariableInput() {
    return this._distanceVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsOutputReference {
    return new CiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateIpv6StaticRoutes {
  /**
  * NAT
  *   - Choices: `NAT64`, `NAT66`
  *   - Default value: `NAT64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#nat CiscoVpnFeatureTemplate#nat}
  */
  readonly nat?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#nat_variable CiscoVpnFeatureTemplate#nat_variable}
  */
  readonly natVariable?: string;
  /**
  * IP gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#next_hops CiscoVpnFeatureTemplate#next_hops}
  */
  readonly nextHops?: CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops[] | cdktf.IResolvable;
  /**
  * null0
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#null0 CiscoVpnFeatureTemplate#null0}
  */
  readonly null0?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#null0_variable CiscoVpnFeatureTemplate#null0_variable}
  */
  readonly null0Variable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix CiscoVpnFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_variable CiscoVpnFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
  /**
  * Destination VPN(!=0 or !=512) to resolve the prefix
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id CiscoVpnFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#vpn_id_variable CiscoVpnFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoVpnFeatureTemplateIpv6StaticRoutesToTerraform(struct?: CiscoVpnFeatureTemplateIpv6StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat: cdktf.stringToTerraform(struct!.nat),
    nat_variable: cdktf.stringToTerraform(struct!.natVariable),
    next_hops: cdktf.listMapper(ciscoVpnFeatureTemplateIpv6StaticRoutesNextHopsToTerraform, false)(struct!.nextHops),
    null0: cdktf.booleanToTerraform(struct!.null0),
    null0_variable: cdktf.stringToTerraform(struct!.null0Variable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoVpnFeatureTemplateIpv6StaticRoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateIpv6StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv6StaticRoutesNextHopsToHclTerraform, false)(struct!.nextHops),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsList",
    },
    null0: {
      value: cdktf.booleanToHclTerraform(struct!.null0),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null0_variable: {
      value: cdktf.stringToHclTerraform(struct!.null0Variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateIpv6StaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._null0Variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.null0Variable = this._null0Variable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateIpv6StaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nat = undefined;
      this._natVariable = undefined;
      this._nextHops.internalValue = undefined;
      this._null0 = undefined;
      this._null0Variable = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nat = value.nat;
      this._natVariable = value.natVariable;
      this._nextHops.internalValue = value.nextHops;
      this._null0 = value.null0;
      this._null0Variable = value.null0Variable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
    }
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
  private _nextHops = new CiscoVpnFeatureTemplateIpv6StaticRoutesNextHopsList(this, "next_hops", false);
  public get nextHops() {
    return this._nextHops;
  }
  public putNextHops(value: CiscoVpnFeatureTemplateIpv6StaticRoutesNextHops[] | cdktf.IResolvable) {
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

  // null0_variable - computed: false, optional: true, required: false
  private _null0Variable?: string; 
  public get null0Variable() {
    return this.getStringAttribute('null0_variable');
  }
  public set null0Variable(value: string) {
    this._null0Variable = value;
  }
  public resetNull0Variable() {
    this._null0Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get null0VariableInput() {
    return this._null0Variable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoVpnFeatureTemplateIpv6StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateIpv6StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateIpv6StaticRoutesOutputReference {
    return new CiscoVpnFeatureTemplateIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateNat64Pools {
  /**
  * Ending IP address of NAT pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#end_address CiscoVpnFeatureTemplate#end_address}
  */
  readonly endAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#end_address_variable CiscoVpnFeatureTemplate#end_address_variable}
  */
  readonly endAddressVariable?: string;
  /**
  * Enable Route Leaking from Global VPN to this Service VPN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#leak_from_global CiscoVpnFeatureTemplate#leak_from_global}
  */
  readonly leakFromGlobal?: boolean | cdktf.IResolvable;
  /**
  * Select protocol for route leaking
  *   - Choices: `all`, `static`, `mobile`, `connected`, `rip`, `odr`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#leak_from_global_protocol CiscoVpnFeatureTemplate#leak_from_global_protocol}
  */
  readonly leakFromGlobalProtocol?: string;
  /**
  * Enable Route Leaking from this Service VPN to Global VPN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#leak_to_global CiscoVpnFeatureTemplate#leak_to_global}
  */
  readonly leakToGlobal?: boolean | cdktf.IResolvable;
  /**
  * NAT64 Pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#name CiscoVpnFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * NAT 64 Overload Option
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#overload CiscoVpnFeatureTemplate#overload}
  */
  readonly overload?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#overload_variable CiscoVpnFeatureTemplate#overload_variable}
  */
  readonly overloadVariable?: string;
  /**
  * Starting IP address of NAT pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#start_address CiscoVpnFeatureTemplate#start_address}
  */
  readonly startAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#start_address_variable CiscoVpnFeatureTemplate#start_address_variable}
  */
  readonly startAddressVariable?: string;
}

export function ciscoVpnFeatureTemplateNat64PoolsToTerraform(struct?: CiscoVpnFeatureTemplateNat64Pools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    end_address_variable: cdktf.stringToTerraform(struct!.endAddressVariable),
    leak_from_global: cdktf.booleanToTerraform(struct!.leakFromGlobal),
    leak_from_global_protocol: cdktf.stringToTerraform(struct!.leakFromGlobalProtocol),
    leak_to_global: cdktf.booleanToTerraform(struct!.leakToGlobal),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    overload: cdktf.booleanToTerraform(struct!.overload),
    overload_variable: cdktf.stringToTerraform(struct!.overloadVariable),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
    start_address_variable: cdktf.stringToTerraform(struct!.startAddressVariable),
  }
}


export function ciscoVpnFeatureTemplateNat64PoolsToHclTerraform(struct?: CiscoVpnFeatureTemplateNat64Pools | cdktf.IResolvable): any {
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
    end_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.endAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leak_from_global: {
      value: cdktf.booleanToHclTerraform(struct!.leakFromGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    leak_from_global_protocol: {
      value: cdktf.stringToHclTerraform(struct!.leakFromGlobalProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leak_to_global: {
      value: cdktf.booleanToHclTerraform(struct!.leakToGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.startAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateNat64PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateNat64Pools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._endAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddressVariable = this._endAddressVariable;
    }
    if (this._leakFromGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakFromGlobal = this._leakFromGlobal;
    }
    if (this._leakFromGlobalProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakFromGlobalProtocol = this._leakFromGlobalProtocol;
    }
    if (this._leakToGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakToGlobal = this._leakToGlobal;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._overload !== undefined) {
      hasAnyValues = true;
      internalValueResult.overload = this._overload;
    }
    if (this._overloadVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.overloadVariable = this._overloadVariable;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    if (this._startAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddressVariable = this._startAddressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateNat64Pools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._endAddressVariable = undefined;
      this._leakFromGlobal = undefined;
      this._leakFromGlobalProtocol = undefined;
      this._leakToGlobal = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._overload = undefined;
      this._overloadVariable = undefined;
      this._startAddress = undefined;
      this._startAddressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._endAddressVariable = value.endAddressVariable;
      this._leakFromGlobal = value.leakFromGlobal;
      this._leakFromGlobalProtocol = value.leakFromGlobalProtocol;
      this._leakToGlobal = value.leakToGlobal;
      this._name = value.name;
      this._optional = value.optional;
      this._overload = value.overload;
      this._overloadVariable = value.overloadVariable;
      this._startAddress = value.startAddress;
      this._startAddressVariable = value.startAddressVariable;
    }
  }

  // end_address - computed: false, optional: true, required: false
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  public resetEndAddress() {
    this._endAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // end_address_variable - computed: false, optional: true, required: false
  private _endAddressVariable?: string; 
  public get endAddressVariable() {
    return this.getStringAttribute('end_address_variable');
  }
  public set endAddressVariable(value: string) {
    this._endAddressVariable = value;
  }
  public resetEndAddressVariable() {
    this._endAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressVariableInput() {
    return this._endAddressVariable;
  }

  // leak_from_global - computed: false, optional: true, required: false
  private _leakFromGlobal?: boolean | cdktf.IResolvable; 
  public get leakFromGlobal() {
    return this.getBooleanAttribute('leak_from_global');
  }
  public set leakFromGlobal(value: boolean | cdktf.IResolvable) {
    this._leakFromGlobal = value;
  }
  public resetLeakFromGlobal() {
    this._leakFromGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakFromGlobalInput() {
    return this._leakFromGlobal;
  }

  // leak_from_global_protocol - computed: false, optional: true, required: false
  private _leakFromGlobalProtocol?: string; 
  public get leakFromGlobalProtocol() {
    return this.getStringAttribute('leak_from_global_protocol');
  }
  public set leakFromGlobalProtocol(value: string) {
    this._leakFromGlobalProtocol = value;
  }
  public resetLeakFromGlobalProtocol() {
    this._leakFromGlobalProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakFromGlobalProtocolInput() {
    return this._leakFromGlobalProtocol;
  }

  // leak_to_global - computed: false, optional: true, required: false
  private _leakToGlobal?: boolean | cdktf.IResolvable; 
  public get leakToGlobal() {
    return this.getBooleanAttribute('leak_to_global');
  }
  public set leakToGlobal(value: boolean | cdktf.IResolvable) {
    this._leakToGlobal = value;
  }
  public resetLeakToGlobal() {
    this._leakToGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakToGlobalInput() {
    return this._leakToGlobal;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // start_address - computed: false, optional: true, required: false
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  public resetStartAddress() {
    this._startAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }

  // start_address_variable - computed: false, optional: true, required: false
  private _startAddressVariable?: string; 
  public get startAddressVariable() {
    return this.getStringAttribute('start_address_variable');
  }
  public set startAddressVariable(value: string) {
    this._startAddressVariable = value;
  }
  public resetStartAddressVariable() {
    this._startAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressVariableInput() {
    return this._startAddressVariable;
  }
}

export class CiscoVpnFeatureTemplateNat64PoolsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateNat64Pools[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateNat64PoolsOutputReference {
    return new CiscoVpnFeatureTemplateNat64PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateNatPools {
  /**
  * Direction of NAT translation
  *   - Choices: `inside`, `outside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#direction CiscoVpnFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#direction_variable CiscoVpnFeatureTemplate#direction_variable}
  */
  readonly directionVariable?: string;
  /**
  * NAT Pool Name, natpool1..31
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#name CiscoVpnFeatureTemplate#name}
  */
  readonly name?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#name_variable CiscoVpnFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Enable port translation(PAT)
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#overload CiscoVpnFeatureTemplate#overload}
  */
  readonly overload?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#overload_variable CiscoVpnFeatureTemplate#overload_variable}
  */
  readonly overloadVariable?: string;
  /**
  * Ending IP address of NAT Pool Prefix Length
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_length CiscoVpnFeatureTemplate#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_length_variable CiscoVpnFeatureTemplate#prefix_length_variable}
  */
  readonly prefixLengthVariable?: string;
  /**
  * Ending IP address of NAT pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#range_end CiscoVpnFeatureTemplate#range_end}
  */
  readonly rangeEnd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#range_end_variable CiscoVpnFeatureTemplate#range_end_variable}
  */
  readonly rangeEndVariable?: string;
  /**
  * Starting IP address of NAT pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#range_start CiscoVpnFeatureTemplate#range_start}
  */
  readonly rangeStart?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#range_start_variable CiscoVpnFeatureTemplate#range_start_variable}
  */
  readonly rangeStartVariable?: string;
  /**
  * Add Object/Object Group Tracker
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_id CiscoVpnFeatureTemplate#tracker_id}
  */
  readonly trackerId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_id_variable CiscoVpnFeatureTemplate#tracker_id_variable}
  */
  readonly trackerIdVariable?: string;
}

export function ciscoVpnFeatureTemplateNatPoolsToTerraform(struct?: CiscoVpnFeatureTemplateNatPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    direction_variable: cdktf.stringToTerraform(struct!.directionVariable),
    name: cdktf.numberToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    overload: cdktf.booleanToTerraform(struct!.overload),
    overload_variable: cdktf.stringToTerraform(struct!.overloadVariable),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    prefix_length_variable: cdktf.stringToTerraform(struct!.prefixLengthVariable),
    range_end: cdktf.stringToTerraform(struct!.rangeEnd),
    range_end_variable: cdktf.stringToTerraform(struct!.rangeEndVariable),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    range_start_variable: cdktf.stringToTerraform(struct!.rangeStartVariable),
    tracker_id: cdktf.numberToTerraform(struct!.trackerId),
    tracker_id_variable: cdktf.stringToTerraform(struct!.trackerIdVariable),
  }
}


export function ciscoVpnFeatureTemplateNatPoolsToHclTerraform(struct?: CiscoVpnFeatureTemplateNatPools | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    tracker_id: {
      value: cdktf.numberToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracker_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackerIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateNatPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateNatPools | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    if (this._trackerIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerIdVariable = this._trackerIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateNatPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._directionVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._overload = undefined;
      this._overloadVariable = undefined;
      this._prefixLength = undefined;
      this._prefixLengthVariable = undefined;
      this._rangeEnd = undefined;
      this._rangeEndVariable = undefined;
      this._rangeStart = undefined;
      this._rangeStartVariable = undefined;
      this._trackerId = undefined;
      this._trackerIdVariable = undefined;
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
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._overload = value.overload;
      this._overloadVariable = value.overloadVariable;
      this._prefixLength = value.prefixLength;
      this._prefixLengthVariable = value.prefixLengthVariable;
      this._rangeEnd = value.rangeEnd;
      this._rangeEndVariable = value.rangeEndVariable;
      this._rangeStart = value.rangeStart;
      this._rangeStartVariable = value.rangeStartVariable;
      this._trackerId = value.trackerId;
      this._trackerIdVariable = value.trackerIdVariable;
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

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: number; 
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }
  public set trackerId(value: number) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }

  // tracker_id_variable - computed: false, optional: true, required: false
  private _trackerIdVariable?: string; 
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
  public set trackerIdVariable(value: string) {
    this._trackerIdVariable = value;
  }
  public resetTrackerIdVariable() {
    this._trackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdVariableInput() {
    return this._trackerIdVariable;
  }
}

export class CiscoVpnFeatureTemplateNatPoolsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateNatPools[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateNatPoolsOutputReference {
    return new CiscoVpnFeatureTemplateNatPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes {
  /**
  * Aggregate Only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#aggregate_only CiscoVpnFeatureTemplate#aggregate_only}
  */
  readonly aggregateOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#aggregate_only_variable CiscoVpnFeatureTemplate#aggregate_only_variable}
  */
  readonly aggregateOnlyVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_entry CiscoVpnFeatureTemplate#prefix_entry}
  */
  readonly prefixEntry?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_entry_variable CiscoVpnFeatureTemplate#prefix_entry_variable}
  */
  readonly prefixEntryVariable?: string;
}

export function ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesToTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_only: cdktf.booleanToTerraform(struct!.aggregateOnly),
    aggregate_only_variable: cdktf.stringToTerraform(struct!.aggregateOnlyVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix_entry: cdktf.stringToTerraform(struct!.prefixEntry),
    prefix_entry_variable: cdktf.stringToTerraform(struct!.prefixEntryVariable),
  }
}


export function ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesToHclTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes | cdktf.IResolvable): any {
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
    aggregate_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.aggregateOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_entry: {
      value: cdktf.stringToHclTerraform(struct!.prefixEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_entry_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixEntryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateOnly = this._aggregateOnly;
    }
    if (this._aggregateOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateOnlyVariable = this._aggregateOnlyVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefixEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixEntry = this._prefixEntry;
    }
    if (this._prefixEntryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixEntryVariable = this._prefixEntryVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateOnly = undefined;
      this._aggregateOnlyVariable = undefined;
      this._optional = undefined;
      this._prefixEntry = undefined;
      this._prefixEntryVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateOnly = value.aggregateOnly;
      this._aggregateOnlyVariable = value.aggregateOnlyVariable;
      this._optional = value.optional;
      this._prefixEntry = value.prefixEntry;
      this._prefixEntryVariable = value.prefixEntryVariable;
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

  // aggregate_only_variable - computed: false, optional: true, required: false
  private _aggregateOnlyVariable?: string; 
  public get aggregateOnlyVariable() {
    return this.getStringAttribute('aggregate_only_variable');
  }
  public set aggregateOnlyVariable(value: string) {
    this._aggregateOnlyVariable = value;
  }
  public resetAggregateOnlyVariable() {
    this._aggregateOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateOnlyVariableInput() {
    return this._aggregateOnlyVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // prefix_entry - computed: false, optional: true, required: false
  private _prefixEntry?: string; 
  public get prefixEntry() {
    return this.getStringAttribute('prefix_entry');
  }
  public set prefixEntry(value: string) {
    this._prefixEntry = value;
  }
  public resetPrefixEntry() {
    this._prefixEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixEntryInput() {
    return this._prefixEntry;
  }

  // prefix_entry_variable - computed: false, optional: true, required: false
  private _prefixEntryVariable?: string; 
  public get prefixEntryVariable() {
    return this.getStringAttribute('prefix_entry_variable');
  }
  public set prefixEntryVariable(value: string) {
    this._prefixEntryVariable = value;
  }
  public resetPrefixEntryVariable() {
    this._prefixEntryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixEntryVariableInput() {
    return this._prefixEntryVariable;
  }
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesOutputReference {
    return new CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefixes CiscoVpnFeatureTemplate#prefixes}
  */
  readonly prefixes?: CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes[] | cdktf.IResolvable;
  /**
  * Advertised routes protocol
  *   - Choices: `bgp`, `ospf`, `ospfv3`, `connected`, `static`, `network`, `aggregate`, `eigrp`, `lisp`, `isis`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type CiscoVpnFeatureTemplate#protocol_sub_type}
  */
  readonly protocolSubType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type_variable CiscoVpnFeatureTemplate#protocol_sub_type_variable}
  */
  readonly protocolSubTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Set Route Policy to OMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy_variable CiscoVpnFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesToTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefixes: cdktf.listMapper(ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesToTerraform, false)(struct!.prefixes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_sub_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolSubType),
    protocol_sub_type_variable: cdktf.stringToTerraform(struct!.protocolSubTypeVariable),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefixes: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolSubType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
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
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefixes.internalValue = undefined;
      this._protocol = undefined;
      this._protocolSubType = undefined;
      this._protocolSubTypeVariable = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefixes.internalValue = value.prefixes;
      this._protocol = value.protocol;
      this._protocolSubType = value.protocolSubType;
      this._protocolSubTypeVariable = value.protocolSubTypeVariable;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesPrefixes[] | cdktf.IResolvable) {
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
  private _protocolSubType?: string[]; 
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }
  public set protocolSubType(value: string[]) {
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

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesOutputReference {
    return new CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes {
  /**
  * Aggregate Only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#aggregate_only CiscoVpnFeatureTemplate#aggregate_only}
  */
  readonly aggregateOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#aggregate_only_variable CiscoVpnFeatureTemplate#aggregate_only_variable}
  */
  readonly aggregateOnlyVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_entry CiscoVpnFeatureTemplate#prefix_entry}
  */
  readonly prefixEntry?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_entry_variable CiscoVpnFeatureTemplate#prefix_entry_variable}
  */
  readonly prefixEntryVariable?: string;
}

export function ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesToTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_only: cdktf.booleanToTerraform(struct!.aggregateOnly),
    aggregate_only_variable: cdktf.stringToTerraform(struct!.aggregateOnlyVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix_entry: cdktf.stringToTerraform(struct!.prefixEntry),
    prefix_entry_variable: cdktf.stringToTerraform(struct!.prefixEntryVariable),
  }
}


export function ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesToHclTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes | cdktf.IResolvable): any {
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
    aggregate_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.aggregateOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_entry: {
      value: cdktf.stringToHclTerraform(struct!.prefixEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_entry_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixEntryVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateOnly = this._aggregateOnly;
    }
    if (this._aggregateOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateOnlyVariable = this._aggregateOnlyVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefixEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixEntry = this._prefixEntry;
    }
    if (this._prefixEntryVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixEntryVariable = this._prefixEntryVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateOnly = undefined;
      this._aggregateOnlyVariable = undefined;
      this._optional = undefined;
      this._prefixEntry = undefined;
      this._prefixEntryVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateOnly = value.aggregateOnly;
      this._aggregateOnlyVariable = value.aggregateOnlyVariable;
      this._optional = value.optional;
      this._prefixEntry = value.prefixEntry;
      this._prefixEntryVariable = value.prefixEntryVariable;
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

  // aggregate_only_variable - computed: false, optional: true, required: false
  private _aggregateOnlyVariable?: string; 
  public get aggregateOnlyVariable() {
    return this.getStringAttribute('aggregate_only_variable');
  }
  public set aggregateOnlyVariable(value: string) {
    this._aggregateOnlyVariable = value;
  }
  public resetAggregateOnlyVariable() {
    this._aggregateOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateOnlyVariableInput() {
    return this._aggregateOnlyVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // prefix_entry - computed: false, optional: true, required: false
  private _prefixEntry?: string; 
  public get prefixEntry() {
    return this.getStringAttribute('prefix_entry');
  }
  public set prefixEntry(value: string) {
    this._prefixEntry = value;
  }
  public resetPrefixEntry() {
    this._prefixEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixEntryInput() {
    return this._prefixEntry;
  }

  // prefix_entry_variable - computed: false, optional: true, required: false
  private _prefixEntryVariable?: string; 
  public get prefixEntryVariable() {
    return this.getStringAttribute('prefix_entry_variable');
  }
  public set prefixEntryVariable(value: string) {
    this._prefixEntryVariable = value;
  }
  public resetPrefixEntryVariable() {
    this._prefixEntryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixEntryVariableInput() {
    return this._prefixEntryVariable;
  }
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesOutputReference {
    return new CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefixes CiscoVpnFeatureTemplate#prefixes}
  */
  readonly prefixes?: CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes[] | cdktf.IResolvable;
  /**
  * Advertised routes protocol
  *   - Choices: `bgp`, `ospf`, `connected`, `static`, `network`, `aggregate`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type CiscoVpnFeatureTemplate#protocol_sub_type}
  */
  readonly protocolSubType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type_variable CiscoVpnFeatureTemplate#protocol_sub_type_variable}
  */
  readonly protocolSubTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy_variable CiscoVpnFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesToTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefixes: cdktf.listMapper(ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesToTerraform, false)(struct!.prefixes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_sub_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolSubType),
    protocol_sub_type_variable: cdktf.stringToTerraform(struct!.protocolSubTypeVariable),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesToHclTerraform(struct?: CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefixes: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesToHclTerraform, false)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolSubType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
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
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefixes.internalValue = undefined;
      this._protocol = undefined;
      this._protocolSubType = undefined;
      this._protocolSubTypeVariable = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefixes.internalValue = value.prefixes;
      this._protocol = value.protocol;
      this._protocolSubType = value.protocolSubType;
      this._protocolSubTypeVariable = value.protocolSubTypeVariable;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesPrefixes[] | cdktf.IResolvable) {
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
  private _protocolSubType?: string[]; 
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }
  public set protocolSubType(value: string[]) {
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

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesOutputReference {
    return new CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplatePortForwardRules {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * NAT Pool Name, natpool1..31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#pool_name CiscoVpnFeatureTemplate#pool_name}
  */
  readonly poolName?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#pool_name_variable CiscoVpnFeatureTemplate#pool_name_variable}
  */
  readonly poolNameVariable?: string;
  /**
  * Protocol
  *   - Choices: `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Source IP address to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_ip CiscoVpnFeatureTemplate#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_ip_variable CiscoVpnFeatureTemplate#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source Port
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_port CiscoVpnFeatureTemplate#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_port_variable CiscoVpnFeatureTemplate#source_port_variable}
  */
  readonly sourcePortVariable?: string;
  /**
  * Statically translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_ip CiscoVpnFeatureTemplate#translate_ip}
  */
  readonly translateIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_ip_variable CiscoVpnFeatureTemplate#translate_ip_variable}
  */
  readonly translateIpVariable?: string;
  /**
  * Translate Port
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_port CiscoVpnFeatureTemplate#translate_port}
  */
  readonly translatePort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_port_variable CiscoVpnFeatureTemplate#translate_port_variable}
  */
  readonly translatePortVariable?: string;
}

export function ciscoVpnFeatureTemplatePortForwardRulesToTerraform(struct?: CiscoVpnFeatureTemplatePortForwardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    pool_name: cdktf.numberToTerraform(struct!.poolName),
    pool_name_variable: cdktf.stringToTerraform(struct!.poolNameVariable),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_port_variable: cdktf.stringToTerraform(struct!.sourcePortVariable),
    translate_ip: cdktf.stringToTerraform(struct!.translateIp),
    translate_ip_variable: cdktf.stringToTerraform(struct!.translateIpVariable),
    translate_port: cdktf.numberToTerraform(struct!.translatePort),
    translate_port_variable: cdktf.stringToTerraform(struct!.translatePortVariable),
  }
}


export function ciscoVpnFeatureTemplatePortForwardRulesToHclTerraform(struct?: CiscoVpnFeatureTemplatePortForwardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_name: {
      value: cdktf.numberToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.poolNameVariable),
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
    translate_ip: {
      value: cdktf.stringToHclTerraform(struct!.translateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.translateIpVariable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplatePortForwardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplatePortForwardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._poolNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolNameVariable = this._poolNameVariable;
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
    if (this._translateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIp = this._translateIp;
    }
    if (this._translateIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIpVariable = this._translateIpVariable;
    }
    if (this._translatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatePort = this._translatePort;
    }
    if (this._translatePortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatePortVariable = this._translatePortVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplatePortForwardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._poolName = undefined;
      this._poolNameVariable = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourcePort = undefined;
      this._sourcePortVariable = undefined;
      this._translateIp = undefined;
      this._translateIpVariable = undefined;
      this._translatePort = undefined;
      this._translatePortVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._poolName = value.poolName;
      this._poolNameVariable = value.poolNameVariable;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourcePort = value.sourcePort;
      this._sourcePortVariable = value.sourcePortVariable;
      this._translateIp = value.translateIp;
      this._translateIpVariable = value.translateIpVariable;
      this._translatePort = value.translatePort;
      this._translatePortVariable = value.translatePortVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: number; 
  public get poolName() {
    return this.getNumberAttribute('pool_name');
  }
  public set poolName(value: number) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // pool_name_variable - computed: false, optional: true, required: false
  private _poolNameVariable?: string; 
  public get poolNameVariable() {
    return this.getStringAttribute('pool_name_variable');
  }
  public set poolNameVariable(value: string) {
    this._poolNameVariable = value;
  }
  public resetPoolNameVariable() {
    this._poolNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameVariableInput() {
    return this._poolNameVariable;
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

  // translate_ip - computed: false, optional: true, required: false
  private _translateIp?: string; 
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }
  public set translateIp(value: string) {
    this._translateIp = value;
  }
  public resetTranslateIp() {
    this._translateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpInput() {
    return this._translateIp;
  }

  // translate_ip_variable - computed: false, optional: true, required: false
  private _translateIpVariable?: string; 
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }
  public set translateIpVariable(value: string) {
    this._translateIpVariable = value;
  }
  public resetTranslateIpVariable() {
    this._translateIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpVariableInput() {
    return this._translateIpVariable;
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
}

export class CiscoVpnFeatureTemplatePortForwardRulesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplatePortForwardRules[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplatePortForwardRulesOutputReference {
    return new CiscoVpnFeatureTemplatePortForwardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select a Route Protocol to enable redistribution
  *   - Choices: `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Select a Route Policy to enable redistribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
}

export function ciscoVpnFeatureTemplateRouteGlobalExportsRedistributesToTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function ciscoVpnFeatureTemplateRouteGlobalExportsRedistributesToHclTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateRouteGlobalExportsRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class CiscoVpnFeatureTemplateRouteGlobalExportsRedistributesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateRouteGlobalExportsRedistributesOutputReference {
    return new CiscoVpnFeatureTemplateRouteGlobalExportsRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateRouteGlobalExports {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select a Route Protocol to enable route leaking from this Service VPN to Global VPN
  *   - Choices: `static`, `connected`, `bgp`, `eigrp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * 
  *   - Default value: `external`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type CiscoVpnFeatureTemplate#protocol_sub_type}
  */
  readonly protocolSubType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type_variable CiscoVpnFeatureTemplate#protocol_sub_type_variable}
  */
  readonly protocolSubTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Enable redistribution of replicated route protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#redistributes CiscoVpnFeatureTemplate#redistributes}
  */
  readonly redistributes?: CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes[] | cdktf.IResolvable;
  /**
  * Select a Route Policy to enable route leaking from this Service VPN to Global VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
}

export function ciscoVpnFeatureTemplateRouteGlobalExportsToTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalExports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_sub_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolSubType),
    protocol_sub_type_variable: cdktf.stringToTerraform(struct!.protocolSubTypeVariable),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    redistributes: cdktf.listMapper(ciscoVpnFeatureTemplateRouteGlobalExportsRedistributesToTerraform, false)(struct!.redistributes),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function ciscoVpnFeatureTemplateRouteGlobalExportsToHclTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalExports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolSubType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    redistributes: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateRouteGlobalExportsRedistributesToHclTerraform, false)(struct!.redistributes),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateRouteGlobalExportsRedistributesList",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateRouteGlobalExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateRouteGlobalExports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._redistributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributes = this._redistributes?.internalValue;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateRouteGlobalExports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolSubType = undefined;
      this._protocolSubTypeVariable = undefined;
      this._protocolVariable = undefined;
      this._redistributes.internalValue = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolSubType = value.protocolSubType;
      this._protocolSubTypeVariable = value.protocolSubTypeVariable;
      this._protocolVariable = value.protocolVariable;
      this._redistributes.internalValue = value.redistributes;
      this._routePolicy = value.routePolicy;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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
  private _protocolSubType?: string[]; 
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }
  public set protocolSubType(value: string[]) {
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

  // redistributes - computed: false, optional: true, required: false
  private _redistributes = new CiscoVpnFeatureTemplateRouteGlobalExportsRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }
  public putRedistributes(value: CiscoVpnFeatureTemplateRouteGlobalExportsRedistributes[] | cdktf.IResolvable) {
    this._redistributes.internalValue = value;
  }
  public resetRedistributes() {
    this._redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributesInput() {
    return this._redistributes.internalValue;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class CiscoVpnFeatureTemplateRouteGlobalExportsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateRouteGlobalExports[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateRouteGlobalExportsOutputReference {
    return new CiscoVpnFeatureTemplateRouteGlobalExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select a Route Protocol to enable redistribution
  *   - Choices: `bgp`, `eigrp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Select a Route Policy to enable redistribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
}

export function ciscoVpnFeatureTemplateRouteGlobalImportsRedistributesToTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function ciscoVpnFeatureTemplateRouteGlobalImportsRedistributesToHclTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateRouteGlobalImportsRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class CiscoVpnFeatureTemplateRouteGlobalImportsRedistributesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateRouteGlobalImportsRedistributesOutputReference {
    return new CiscoVpnFeatureTemplateRouteGlobalImportsRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateRouteGlobalImports {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select a Route Protocol to enable route leaking from Global VPN to this Service VPN
  *   - Choices: `static`, `connected`, `bgp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * 
  *   - Default value: `external`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type CiscoVpnFeatureTemplate#protocol_sub_type}
  */
  readonly protocolSubType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type_variable CiscoVpnFeatureTemplate#protocol_sub_type_variable}
  */
  readonly protocolSubTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Enable redistribution of replicated route protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#redistributes CiscoVpnFeatureTemplate#redistributes}
  */
  readonly redistributes?: CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes[] | cdktf.IResolvable;
  /**
  * Select a Route Policy to enable route leaking from Global VPN to this Service VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
}

export function ciscoVpnFeatureTemplateRouteGlobalImportsToTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_sub_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolSubType),
    protocol_sub_type_variable: cdktf.stringToTerraform(struct!.protocolSubTypeVariable),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    redistributes: cdktf.listMapper(ciscoVpnFeatureTemplateRouteGlobalImportsRedistributesToTerraform, false)(struct!.redistributes),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function ciscoVpnFeatureTemplateRouteGlobalImportsToHclTerraform(struct?: CiscoVpnFeatureTemplateRouteGlobalImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolSubType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    redistributes: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateRouteGlobalImportsRedistributesToHclTerraform, false)(struct!.redistributes),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateRouteGlobalImportsRedistributesList",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateRouteGlobalImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateRouteGlobalImports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._redistributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributes = this._redistributes?.internalValue;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateRouteGlobalImports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolSubType = undefined;
      this._protocolSubTypeVariable = undefined;
      this._protocolVariable = undefined;
      this._redistributes.internalValue = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolSubType = value.protocolSubType;
      this._protocolSubTypeVariable = value.protocolSubTypeVariable;
      this._protocolVariable = value.protocolVariable;
      this._redistributes.internalValue = value.redistributes;
      this._routePolicy = value.routePolicy;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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
  private _protocolSubType?: string[]; 
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }
  public set protocolSubType(value: string[]) {
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

  // redistributes - computed: false, optional: true, required: false
  private _redistributes = new CiscoVpnFeatureTemplateRouteGlobalImportsRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }
  public putRedistributes(value: CiscoVpnFeatureTemplateRouteGlobalImportsRedistributes[] | cdktf.IResolvable) {
    this._redistributes.internalValue = value;
  }
  public resetRedistributes() {
    this._redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributesInput() {
    return this._redistributes.internalValue;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class CiscoVpnFeatureTemplateRouteGlobalImportsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateRouteGlobalImports[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateRouteGlobalImportsOutputReference {
    return new CiscoVpnFeatureTemplateRouteGlobalImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateRouteVpnImportsRedistributes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select a Route Protocol to enable redistribution
  *   - Choices: `bgp`, `eigrp`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Select a Route Policy to enable redistribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy_variable CiscoVpnFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function ciscoVpnFeatureTemplateRouteVpnImportsRedistributesToTerraform(struct?: CiscoVpnFeatureTemplateRouteVpnImportsRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function ciscoVpnFeatureTemplateRouteVpnImportsRedistributesToHclTerraform(struct?: CiscoVpnFeatureTemplateRouteVpnImportsRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateRouteVpnImportsRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateRouteVpnImportsRedistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateRouteVpnImportsRedistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class CiscoVpnFeatureTemplateRouteVpnImportsRedistributesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateRouteVpnImportsRedistributes[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateRouteVpnImportsRedistributesOutputReference {
    return new CiscoVpnFeatureTemplateRouteVpnImportsRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateRouteVpnImports {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Select a Route Protocol to enable route leaking to current VPN
  *   - Choices: `static`, `connected`, `bgp`, `ospf`, `eigrp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol CiscoVpnFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * 
  *   - Default value: `external`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type CiscoVpnFeatureTemplate#protocol_sub_type}
  */
  readonly protocolSubType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_sub_type_variable CiscoVpnFeatureTemplate#protocol_sub_type_variable}
  */
  readonly protocolSubTypeVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#protocol_variable CiscoVpnFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Enable redistribution of replicated route protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#redistributes CiscoVpnFeatureTemplate#redistributes}
  */
  readonly redistributes?: CiscoVpnFeatureTemplateRouteVpnImportsRedistributes[] | cdktf.IResolvable;
  /**
  * Select a Route Policy to enable route leaking to current VPN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy CiscoVpnFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#route_policy_variable CiscoVpnFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
  /**
  * Select a Source VPN where route leaks from
  *   - Range: `1`-`65530`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_vpn_id CiscoVpnFeatureTemplate#source_vpn_id}
  */
  readonly sourceVpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_vpn_id_variable CiscoVpnFeatureTemplate#source_vpn_id_variable}
  */
  readonly sourceVpnIdVariable?: string;
}

export function ciscoVpnFeatureTemplateRouteVpnImportsToTerraform(struct?: CiscoVpnFeatureTemplateRouteVpnImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_sub_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolSubType),
    protocol_sub_type_variable: cdktf.stringToTerraform(struct!.protocolSubTypeVariable),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    redistributes: cdktf.listMapper(ciscoVpnFeatureTemplateRouteVpnImportsRedistributesToTerraform, false)(struct!.redistributes),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
    source_vpn_id: cdktf.numberToTerraform(struct!.sourceVpnId),
    source_vpn_id_variable: cdktf.stringToTerraform(struct!.sourceVpnIdVariable),
  }
}


export function ciscoVpnFeatureTemplateRouteVpnImportsToHclTerraform(struct?: CiscoVpnFeatureTemplateRouteVpnImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_sub_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolSubType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    redistributes: {
      value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateRouteVpnImportsRedistributesToHclTerraform, false)(struct!.redistributes),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnFeatureTemplateRouteVpnImportsRedistributesList",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceVpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceVpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateRouteVpnImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateRouteVpnImports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._redistributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributes = this._redistributes?.internalValue;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    if (this._sourceVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnId = this._sourceVpnId;
    }
    if (this._sourceVpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnIdVariable = this._sourceVpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateRouteVpnImports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolSubType = undefined;
      this._protocolSubTypeVariable = undefined;
      this._protocolVariable = undefined;
      this._redistributes.internalValue = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
      this._sourceVpnId = undefined;
      this._sourceVpnIdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolSubType = value.protocolSubType;
      this._protocolSubTypeVariable = value.protocolSubTypeVariable;
      this._protocolVariable = value.protocolVariable;
      this._redistributes.internalValue = value.redistributes;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
      this._sourceVpnId = value.sourceVpnId;
      this._sourceVpnIdVariable = value.sourceVpnIdVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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
  private _protocolSubType?: string[]; 
  public get protocolSubType() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_sub_type'));
  }
  public set protocolSubType(value: string[]) {
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

  // redistributes - computed: false, optional: true, required: false
  private _redistributes = new CiscoVpnFeatureTemplateRouteVpnImportsRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }
  public putRedistributes(value: CiscoVpnFeatureTemplateRouteVpnImportsRedistributes[] | cdktf.IResolvable) {
    this._redistributes.internalValue = value;
  }
  public resetRedistributes() {
    this._redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributesInput() {
    return this._redistributes.internalValue;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }

  // source_vpn_id - computed: false, optional: true, required: false
  private _sourceVpnId?: number; 
  public get sourceVpnId() {
    return this.getNumberAttribute('source_vpn_id');
  }
  public set sourceVpnId(value: number) {
    this._sourceVpnId = value;
  }
  public resetSourceVpnId() {
    this._sourceVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnIdInput() {
    return this._sourceVpnId;
  }

  // source_vpn_id_variable - computed: false, optional: true, required: false
  private _sourceVpnIdVariable?: string; 
  public get sourceVpnIdVariable() {
    return this.getStringAttribute('source_vpn_id_variable');
  }
  public set sourceVpnIdVariable(value: string) {
    this._sourceVpnIdVariable = value;
  }
  public resetSourceVpnIdVariable() {
    this._sourceVpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnIdVariableInput() {
    return this._sourceVpnIdVariable;
  }
}

export class CiscoVpnFeatureTemplateRouteVpnImportsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateRouteVpnImports[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateRouteVpnImportsOutputReference {
    return new CiscoVpnFeatureTemplateRouteVpnImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateServices {
  /**
  * List of IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address CiscoVpnFeatureTemplate#address}
  */
  readonly address?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#address_variable CiscoVpnFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Tracking Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#interface CiscoVpnFeatureTemplate#interface}
  */
  readonly interface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#interface_variable CiscoVpnFeatureTemplate#interface_variable}
  */
  readonly interfaceVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Service Type
  *   - Choices: `FW`, `IDS`, `IDP`, `netsvc1`, `netsvc2`, `netsvc3`, `netsvc4`, `TE`, `appqoe`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#service_types CiscoVpnFeatureTemplate#service_types}
  */
  readonly serviceTypes?: string;
  /**
  * Tracking Service
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#track_enable CiscoVpnFeatureTemplate#track_enable}
  */
  readonly trackEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#track_enable_variable CiscoVpnFeatureTemplate#track_enable_variable}
  */
  readonly trackEnableVariable?: string;
}

export function ciscoVpnFeatureTemplateServicesToTerraform(struct?: CiscoVpnFeatureTemplateServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_variable: cdktf.stringToTerraform(struct!.interfaceVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    service_types: cdktf.stringToTerraform(struct!.serviceTypes),
    track_enable: cdktf.booleanToTerraform(struct!.trackEnable),
    track_enable_variable: cdktf.stringToTerraform(struct!.trackEnableVariable),
  }
}


export function ciscoVpnFeatureTemplateServicesToHclTerraform(struct?: CiscoVpnFeatureTemplateServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_types: {
      value: cdktf.stringToHclTerraform(struct!.serviceTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_enable: {
      value: cdktf.booleanToHclTerraform(struct!.trackEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_enable_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackEnableVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateServices | cdktf.IResolvable | undefined {
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
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVariable = this._interfaceVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._serviceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypes = this._serviceTypes;
    }
    if (this._trackEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackEnable = this._trackEnable;
    }
    if (this._trackEnableVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackEnableVariable = this._trackEnableVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._interface = undefined;
      this._interfaceVariable = undefined;
      this._optional = undefined;
      this._serviceTypes = undefined;
      this._trackEnable = undefined;
      this._trackEnableVariable = undefined;
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
      this._interface = value.interface;
      this._interfaceVariable = value.interfaceVariable;
      this._optional = value.optional;
      this._serviceTypes = value.serviceTypes;
      this._trackEnable = value.trackEnable;
      this._trackEnableVariable = value.trackEnableVariable;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // service_types - computed: false, optional: true, required: false
  private _serviceTypes?: string; 
  public get serviceTypes() {
    return this.getStringAttribute('service_types');
  }
  public set serviceTypes(value: string) {
    this._serviceTypes = value;
  }
  public resetServiceTypes() {
    this._serviceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypesInput() {
    return this._serviceTypes;
  }

  // track_enable - computed: false, optional: true, required: false
  private _trackEnable?: boolean | cdktf.IResolvable; 
  public get trackEnable() {
    return this.getBooleanAttribute('track_enable');
  }
  public set trackEnable(value: boolean | cdktf.IResolvable) {
    this._trackEnable = value;
  }
  public resetTrackEnable() {
    this._trackEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackEnableInput() {
    return this._trackEnable;
  }

  // track_enable_variable - computed: false, optional: true, required: false
  private _trackEnableVariable?: string; 
  public get trackEnableVariable() {
    return this.getStringAttribute('track_enable_variable');
  }
  public set trackEnableVariable(value: string) {
    this._trackEnableVariable = value;
  }
  public resetTrackEnableVariable() {
    this._trackEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackEnableVariableInput() {
    return this._trackEnableVariable;
  }
}

export class CiscoVpnFeatureTemplateServicesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateServices[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateServicesOutputReference {
    return new CiscoVpnFeatureTemplateServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateStaticNatRules {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * NAT Pool Name, natpool1..31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#pool_name CiscoVpnFeatureTemplate#pool_name}
  */
  readonly poolName?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#pool_name_variable CiscoVpnFeatureTemplate#pool_name_variable}
  */
  readonly poolNameVariable?: string;
  /**
  * Source IP address to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_ip CiscoVpnFeatureTemplate#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_ip_variable CiscoVpnFeatureTemplate#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Direction of static NAT translation
  *   - Choices: `inside`, `outside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#static_nat_direction CiscoVpnFeatureTemplate#static_nat_direction}
  */
  readonly staticNatDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#static_nat_direction_variable CiscoVpnFeatureTemplate#static_nat_direction_variable}
  */
  readonly staticNatDirectionVariable?: string;
  /**
  * Add Object/Object Group Tracker
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_id CiscoVpnFeatureTemplate#tracker_id}
  */
  readonly trackerId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_id_variable CiscoVpnFeatureTemplate#tracker_id_variable}
  */
  readonly trackerIdVariable?: string;
  /**
  * Statically translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_ip CiscoVpnFeatureTemplate#translate_ip}
  */
  readonly translateIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_ip_variable CiscoVpnFeatureTemplate#translate_ip_variable}
  */
  readonly translateIpVariable?: string;
}

export function ciscoVpnFeatureTemplateStaticNatRulesToTerraform(struct?: CiscoVpnFeatureTemplateStaticNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    pool_name: cdktf.numberToTerraform(struct!.poolName),
    pool_name_variable: cdktf.stringToTerraform(struct!.poolNameVariable),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    static_nat_direction: cdktf.stringToTerraform(struct!.staticNatDirection),
    static_nat_direction_variable: cdktf.stringToTerraform(struct!.staticNatDirectionVariable),
    tracker_id: cdktf.numberToTerraform(struct!.trackerId),
    tracker_id_variable: cdktf.stringToTerraform(struct!.trackerIdVariable),
    translate_ip: cdktf.stringToTerraform(struct!.translateIp),
    translate_ip_variable: cdktf.stringToTerraform(struct!.translateIpVariable),
  }
}


export function ciscoVpnFeatureTemplateStaticNatRulesToHclTerraform(struct?: CiscoVpnFeatureTemplateStaticNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_name: {
      value: cdktf.numberToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.poolNameVariable),
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
    tracker_id: {
      value: cdktf.numberToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracker_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackerIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip: {
      value: cdktf.stringToHclTerraform(struct!.translateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.translateIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateStaticNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateStaticNatRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._poolNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolNameVariable = this._poolNameVariable;
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
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    if (this._trackerIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerIdVariable = this._trackerIdVariable;
    }
    if (this._translateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIp = this._translateIp;
    }
    if (this._translateIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIpVariable = this._translateIpVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateStaticNatRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._poolName = undefined;
      this._poolNameVariable = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._staticNatDirection = undefined;
      this._staticNatDirectionVariable = undefined;
      this._trackerId = undefined;
      this._trackerIdVariable = undefined;
      this._translateIp = undefined;
      this._translateIpVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._poolName = value.poolName;
      this._poolNameVariable = value.poolNameVariable;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._staticNatDirection = value.staticNatDirection;
      this._staticNatDirectionVariable = value.staticNatDirectionVariable;
      this._trackerId = value.trackerId;
      this._trackerIdVariable = value.trackerIdVariable;
      this._translateIp = value.translateIp;
      this._translateIpVariable = value.translateIpVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: number; 
  public get poolName() {
    return this.getNumberAttribute('pool_name');
  }
  public set poolName(value: number) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // pool_name_variable - computed: false, optional: true, required: false
  private _poolNameVariable?: string; 
  public get poolNameVariable() {
    return this.getStringAttribute('pool_name_variable');
  }
  public set poolNameVariable(value: string) {
    this._poolNameVariable = value;
  }
  public resetPoolNameVariable() {
    this._poolNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameVariableInput() {
    return this._poolNameVariable;
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

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: number; 
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }
  public set trackerId(value: number) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }

  // tracker_id_variable - computed: false, optional: true, required: false
  private _trackerIdVariable?: string; 
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
  public set trackerIdVariable(value: string) {
    this._trackerIdVariable = value;
  }
  public resetTrackerIdVariable() {
    this._trackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdVariableInput() {
    return this._trackerIdVariable;
  }

  // translate_ip - computed: false, optional: true, required: false
  private _translateIp?: string; 
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }
  public set translateIp(value: string) {
    this._translateIp = value;
  }
  public resetTranslateIp() {
    this._translateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpInput() {
    return this._translateIp;
  }

  // translate_ip_variable - computed: false, optional: true, required: false
  private _translateIpVariable?: string; 
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }
  public set translateIpVariable(value: string) {
    this._translateIpVariable = value;
  }
  public resetTranslateIpVariable() {
    this._translateIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpVariableInput() {
    return this._translateIpVariable;
  }
}

export class CiscoVpnFeatureTemplateStaticNatRulesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateStaticNatRules[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateStaticNatRulesOutputReference {
    return new CiscoVpnFeatureTemplateStaticNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnFeatureTemplateStaticNatSubnetRules {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#optional CiscoVpnFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Network Prefix Length
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_length CiscoVpnFeatureTemplate#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#prefix_length_variable CiscoVpnFeatureTemplate#prefix_length_variable}
  */
  readonly prefixLengthVariable?: string;
  /**
  * Source IP Subnet to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_ip_subnet CiscoVpnFeatureTemplate#source_ip_subnet}
  */
  readonly sourceIpSubnet?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#source_ip_subnet_variable CiscoVpnFeatureTemplate#source_ip_subnet_variable}
  */
  readonly sourceIpSubnetVariable?: string;
  /**
  * Direction of static NAT translation
  *   - Choices: `inside`, `outside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#static_nat_direction CiscoVpnFeatureTemplate#static_nat_direction}
  */
  readonly staticNatDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#static_nat_direction_variable CiscoVpnFeatureTemplate#static_nat_direction_variable}
  */
  readonly staticNatDirectionVariable?: string;
  /**
  * Add Object/Object Group Tracker
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_id CiscoVpnFeatureTemplate#tracker_id}
  */
  readonly trackerId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#tracker_id_variable CiscoVpnFeatureTemplate#tracker_id_variable}
  */
  readonly trackerIdVariable?: string;
  /**
  * Statically translated source IP Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_ip_subnet CiscoVpnFeatureTemplate#translate_ip_subnet}
  */
  readonly translateIpSubnet?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#translate_ip_subnet_variable CiscoVpnFeatureTemplate#translate_ip_subnet_variable}
  */
  readonly translateIpSubnetVariable?: string;
}

export function ciscoVpnFeatureTemplateStaticNatSubnetRulesToTerraform(struct?: CiscoVpnFeatureTemplateStaticNatSubnetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    prefix_length_variable: cdktf.stringToTerraform(struct!.prefixLengthVariable),
    source_ip_subnet: cdktf.stringToTerraform(struct!.sourceIpSubnet),
    source_ip_subnet_variable: cdktf.stringToTerraform(struct!.sourceIpSubnetVariable),
    static_nat_direction: cdktf.stringToTerraform(struct!.staticNatDirection),
    static_nat_direction_variable: cdktf.stringToTerraform(struct!.staticNatDirectionVariable),
    tracker_id: cdktf.numberToTerraform(struct!.trackerId),
    tracker_id_variable: cdktf.stringToTerraform(struct!.trackerIdVariable),
    translate_ip_subnet: cdktf.stringToTerraform(struct!.translateIpSubnet),
    translate_ip_subnet_variable: cdktf.stringToTerraform(struct!.translateIpSubnetVariable),
  }
}


export function ciscoVpnFeatureTemplateStaticNatSubnetRulesToHclTerraform(struct?: CiscoVpnFeatureTemplateStaticNatSubnetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    source_ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_subnet_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpSubnetVariable),
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
    tracker_id: {
      value: cdktf.numberToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracker_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackerIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.translateIpSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip_subnet_variable: {
      value: cdktf.stringToHclTerraform(struct!.translateIpSubnetVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnFeatureTemplateStaticNatSubnetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnFeatureTemplateStaticNatSubnetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._prefixLengthVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLengthVariable = this._prefixLengthVariable;
    }
    if (this._sourceIpSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpSubnet = this._sourceIpSubnet;
    }
    if (this._sourceIpSubnetVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpSubnetVariable = this._sourceIpSubnetVariable;
    }
    if (this._staticNatDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirection = this._staticNatDirection;
    }
    if (this._staticNatDirectionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirectionVariable = this._staticNatDirectionVariable;
    }
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    if (this._trackerIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerIdVariable = this._trackerIdVariable;
    }
    if (this._translateIpSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIpSubnet = this._translateIpSubnet;
    }
    if (this._translateIpSubnetVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIpSubnetVariable = this._translateIpSubnetVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnFeatureTemplateStaticNatSubnetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefixLength = undefined;
      this._prefixLengthVariable = undefined;
      this._sourceIpSubnet = undefined;
      this._sourceIpSubnetVariable = undefined;
      this._staticNatDirection = undefined;
      this._staticNatDirectionVariable = undefined;
      this._trackerId = undefined;
      this._trackerIdVariable = undefined;
      this._translateIpSubnet = undefined;
      this._translateIpSubnetVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefixLength = value.prefixLength;
      this._prefixLengthVariable = value.prefixLengthVariable;
      this._sourceIpSubnet = value.sourceIpSubnet;
      this._sourceIpSubnetVariable = value.sourceIpSubnetVariable;
      this._staticNatDirection = value.staticNatDirection;
      this._staticNatDirectionVariable = value.staticNatDirectionVariable;
      this._trackerId = value.trackerId;
      this._trackerIdVariable = value.trackerIdVariable;
      this._translateIpSubnet = value.translateIpSubnet;
      this._translateIpSubnetVariable = value.translateIpSubnetVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // source_ip_subnet - computed: false, optional: true, required: false
  private _sourceIpSubnet?: string; 
  public get sourceIpSubnet() {
    return this.getStringAttribute('source_ip_subnet');
  }
  public set sourceIpSubnet(value: string) {
    this._sourceIpSubnet = value;
  }
  public resetSourceIpSubnet() {
    this._sourceIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpSubnetInput() {
    return this._sourceIpSubnet;
  }

  // source_ip_subnet_variable - computed: false, optional: true, required: false
  private _sourceIpSubnetVariable?: string; 
  public get sourceIpSubnetVariable() {
    return this.getStringAttribute('source_ip_subnet_variable');
  }
  public set sourceIpSubnetVariable(value: string) {
    this._sourceIpSubnetVariable = value;
  }
  public resetSourceIpSubnetVariable() {
    this._sourceIpSubnetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpSubnetVariableInput() {
    return this._sourceIpSubnetVariable;
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

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: number; 
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }
  public set trackerId(value: number) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }

  // tracker_id_variable - computed: false, optional: true, required: false
  private _trackerIdVariable?: string; 
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
  public set trackerIdVariable(value: string) {
    this._trackerIdVariable = value;
  }
  public resetTrackerIdVariable() {
    this._trackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdVariableInput() {
    return this._trackerIdVariable;
  }

  // translate_ip_subnet - computed: false, optional: true, required: false
  private _translateIpSubnet?: string; 
  public get translateIpSubnet() {
    return this.getStringAttribute('translate_ip_subnet');
  }
  public set translateIpSubnet(value: string) {
    this._translateIpSubnet = value;
  }
  public resetTranslateIpSubnet() {
    this._translateIpSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpSubnetInput() {
    return this._translateIpSubnet;
  }

  // translate_ip_subnet_variable - computed: false, optional: true, required: false
  private _translateIpSubnetVariable?: string; 
  public get translateIpSubnetVariable() {
    return this.getStringAttribute('translate_ip_subnet_variable');
  }
  public set translateIpSubnetVariable(value: string) {
    this._translateIpSubnetVariable = value;
  }
  public resetTranslateIpSubnetVariable() {
    this._translateIpSubnetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpSubnetVariableInput() {
    return this._translateIpSubnetVariable;
  }
}

export class CiscoVpnFeatureTemplateStaticNatSubnetRulesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnFeatureTemplateStaticNatSubnetRules[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnFeatureTemplateStaticNatSubnetRulesOutputReference {
    return new CiscoVpnFeatureTemplateStaticNatSubnetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template sdwan_cisco_vpn_feature_template}
*/
export class CiscoVpnFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoVpnFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoVpnFeatureTemplate to import
  * @param importFromId The id of the existing CiscoVpnFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoVpnFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_feature_template sdwan_cisco_vpn_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoVpnFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoVpnFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_feature_template',
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
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._dnsHosts.internalValue = config.dnsHosts;
    this._dnsIpv4Servers.internalValue = config.dnsIpv4Servers;
    this._dnsIpv6Servers.internalValue = config.dnsIpv6Servers;
    this._enhanceEcmpKeying = config.enhanceEcmpKeying;
    this._enhanceEcmpKeyingVariable = config.enhanceEcmpKeyingVariable;
    this._ipv4StaticGreRoutes.internalValue = config.ipv4StaticGreRoutes;
    this._ipv4StaticIpsecRoutes.internalValue = config.ipv4StaticIpsecRoutes;
    this._ipv4StaticRoutes.internalValue = config.ipv4StaticRoutes;
    this._ipv4StaticServiceRoutes.internalValue = config.ipv4StaticServiceRoutes;
    this._ipv6StaticRoutes.internalValue = config.ipv6StaticRoutes;
    this._name = config.name;
    this._nat64Pools.internalValue = config.nat64Pools;
    this._natPools.internalValue = config.natPools;
    this._ompAdminDistanceIpv4 = config.ompAdminDistanceIpv4;
    this._ompAdminDistanceIpv4Variable = config.ompAdminDistanceIpv4Variable;
    this._ompAdminDistanceIpv6 = config.ompAdminDistanceIpv6;
    this._ompAdminDistanceIpv6Variable = config.ompAdminDistanceIpv6Variable;
    this._ompAdvertiseIpv4Routes.internalValue = config.ompAdvertiseIpv4Routes;
    this._ompAdvertiseIpv6Routes.internalValue = config.ompAdvertiseIpv6Routes;
    this._organizationName = config.organizationName;
    this._portForwardRules.internalValue = config.portForwardRules;
    this._routeGlobalExports.internalValue = config.routeGlobalExports;
    this._routeGlobalImports.internalValue = config.routeGlobalImports;
    this._routeVpnImports.internalValue = config.routeVpnImports;
    this._services.internalValue = config.services;
    this._staticNatRules.internalValue = config.staticNatRules;
    this._staticNatSubnetRules.internalValue = config.staticNatSubnetRules;
    this._tenantVpnId = config.tenantVpnId;
    this._vpnId = config.vpnId;
    this._vpnName = config.vpnName;
    this._vpnNameVariable = config.vpnNameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // dns_hosts - computed: false, optional: true, required: false
  private _dnsHosts = new CiscoVpnFeatureTemplateDnsHostsList(this, "dns_hosts", false);
  public get dnsHosts() {
    return this._dnsHosts;
  }
  public putDnsHosts(value: CiscoVpnFeatureTemplateDnsHosts[] | cdktf.IResolvable) {
    this._dnsHosts.internalValue = value;
  }
  public resetDnsHosts() {
    this._dnsHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostsInput() {
    return this._dnsHosts.internalValue;
  }

  // dns_ipv4_servers - computed: false, optional: true, required: false
  private _dnsIpv4Servers = new CiscoVpnFeatureTemplateDnsIpv4ServersList(this, "dns_ipv4_servers", false);
  public get dnsIpv4Servers() {
    return this._dnsIpv4Servers;
  }
  public putDnsIpv4Servers(value: CiscoVpnFeatureTemplateDnsIpv4Servers[] | cdktf.IResolvable) {
    this._dnsIpv4Servers.internalValue = value;
  }
  public resetDnsIpv4Servers() {
    this._dnsIpv4Servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4ServersInput() {
    return this._dnsIpv4Servers.internalValue;
  }

  // dns_ipv6_servers - computed: false, optional: true, required: false
  private _dnsIpv6Servers = new CiscoVpnFeatureTemplateDnsIpv6ServersList(this, "dns_ipv6_servers", false);
  public get dnsIpv6Servers() {
    return this._dnsIpv6Servers;
  }
  public putDnsIpv6Servers(value: CiscoVpnFeatureTemplateDnsIpv6Servers[] | cdktf.IResolvable) {
    this._dnsIpv6Servers.internalValue = value;
  }
  public resetDnsIpv6Servers() {
    this._dnsIpv6Servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6ServersInput() {
    return this._dnsIpv6Servers.internalValue;
  }

  // enhance_ecmp_keying - computed: false, optional: true, required: false
  private _enhanceEcmpKeying?: boolean | cdktf.IResolvable; 
  public get enhanceEcmpKeying() {
    return this.getBooleanAttribute('enhance_ecmp_keying');
  }
  public set enhanceEcmpKeying(value: boolean | cdktf.IResolvable) {
    this._enhanceEcmpKeying = value;
  }
  public resetEnhanceEcmpKeying() {
    this._enhanceEcmpKeying = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhanceEcmpKeyingInput() {
    return this._enhanceEcmpKeying;
  }

  // enhance_ecmp_keying_variable - computed: false, optional: true, required: false
  private _enhanceEcmpKeyingVariable?: string; 
  public get enhanceEcmpKeyingVariable() {
    return this.getStringAttribute('enhance_ecmp_keying_variable');
  }
  public set enhanceEcmpKeyingVariable(value: string) {
    this._enhanceEcmpKeyingVariable = value;
  }
  public resetEnhanceEcmpKeyingVariable() {
    this._enhanceEcmpKeyingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhanceEcmpKeyingVariableInput() {
    return this._enhanceEcmpKeyingVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_static_gre_routes - computed: false, optional: true, required: false
  private _ipv4StaticGreRoutes = new CiscoVpnFeatureTemplateIpv4StaticGreRoutesList(this, "ipv4_static_gre_routes", false);
  public get ipv4StaticGreRoutes() {
    return this._ipv4StaticGreRoutes;
  }
  public putIpv4StaticGreRoutes(value: CiscoVpnFeatureTemplateIpv4StaticGreRoutes[] | cdktf.IResolvable) {
    this._ipv4StaticGreRoutes.internalValue = value;
  }
  public resetIpv4StaticGreRoutes() {
    this._ipv4StaticGreRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticGreRoutesInput() {
    return this._ipv4StaticGreRoutes.internalValue;
  }

  // ipv4_static_ipsec_routes - computed: false, optional: true, required: false
  private _ipv4StaticIpsecRoutes = new CiscoVpnFeatureTemplateIpv4StaticIpsecRoutesList(this, "ipv4_static_ipsec_routes", false);
  public get ipv4StaticIpsecRoutes() {
    return this._ipv4StaticIpsecRoutes;
  }
  public putIpv4StaticIpsecRoutes(value: CiscoVpnFeatureTemplateIpv4StaticIpsecRoutes[] | cdktf.IResolvable) {
    this._ipv4StaticIpsecRoutes.internalValue = value;
  }
  public resetIpv4StaticIpsecRoutes() {
    this._ipv4StaticIpsecRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticIpsecRoutesInput() {
    return this._ipv4StaticIpsecRoutes.internalValue;
  }

  // ipv4_static_routes - computed: false, optional: true, required: false
  private _ipv4StaticRoutes = new CiscoVpnFeatureTemplateIpv4StaticRoutesList(this, "ipv4_static_routes", false);
  public get ipv4StaticRoutes() {
    return this._ipv4StaticRoutes;
  }
  public putIpv4StaticRoutes(value: CiscoVpnFeatureTemplateIpv4StaticRoutes[] | cdktf.IResolvable) {
    this._ipv4StaticRoutes.internalValue = value;
  }
  public resetIpv4StaticRoutes() {
    this._ipv4StaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticRoutesInput() {
    return this._ipv4StaticRoutes.internalValue;
  }

  // ipv4_static_service_routes - computed: false, optional: true, required: false
  private _ipv4StaticServiceRoutes = new CiscoVpnFeatureTemplateIpv4StaticServiceRoutesList(this, "ipv4_static_service_routes", false);
  public get ipv4StaticServiceRoutes() {
    return this._ipv4StaticServiceRoutes;
  }
  public putIpv4StaticServiceRoutes(value: CiscoVpnFeatureTemplateIpv4StaticServiceRoutes[] | cdktf.IResolvable) {
    this._ipv4StaticServiceRoutes.internalValue = value;
  }
  public resetIpv4StaticServiceRoutes() {
    this._ipv4StaticServiceRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticServiceRoutesInput() {
    return this._ipv4StaticServiceRoutes.internalValue;
  }

  // ipv6_static_routes - computed: false, optional: true, required: false
  private _ipv6StaticRoutes = new CiscoVpnFeatureTemplateIpv6StaticRoutesList(this, "ipv6_static_routes", false);
  public get ipv6StaticRoutes() {
    return this._ipv6StaticRoutes;
  }
  public putIpv6StaticRoutes(value: CiscoVpnFeatureTemplateIpv6StaticRoutes[] | cdktf.IResolvable) {
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

  // nat64_pools - computed: false, optional: true, required: false
  private _nat64Pools = new CiscoVpnFeatureTemplateNat64PoolsList(this, "nat64_pools", false);
  public get nat64Pools() {
    return this._nat64Pools;
  }
  public putNat64Pools(value: CiscoVpnFeatureTemplateNat64Pools[] | cdktf.IResolvable) {
    this._nat64Pools.internalValue = value;
  }
  public resetNat64Pools() {
    this._nat64Pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64PoolsInput() {
    return this._nat64Pools.internalValue;
  }

  // nat_pools - computed: false, optional: true, required: false
  private _natPools = new CiscoVpnFeatureTemplateNatPoolsList(this, "nat_pools", false);
  public get natPools() {
    return this._natPools;
  }
  public putNatPools(value: CiscoVpnFeatureTemplateNatPools[] | cdktf.IResolvable) {
    this._natPools.internalValue = value;
  }
  public resetNatPools() {
    this._natPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolsInput() {
    return this._natPools.internalValue;
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

  // omp_advertise_ipv4_routes - computed: false, optional: true, required: false
  private _ompAdvertiseIpv4Routes = new CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesList(this, "omp_advertise_ipv4_routes", false);
  public get ompAdvertiseIpv4Routes() {
    return this._ompAdvertiseIpv4Routes;
  }
  public putOmpAdvertiseIpv4Routes(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv4Routes[] | cdktf.IResolvable) {
    this._ompAdvertiseIpv4Routes.internalValue = value;
  }
  public resetOmpAdvertiseIpv4Routes() {
    this._ompAdvertiseIpv4Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdvertiseIpv4RoutesInput() {
    return this._ompAdvertiseIpv4Routes.internalValue;
  }

  // omp_advertise_ipv6_routes - computed: false, optional: true, required: false
  private _ompAdvertiseIpv6Routes = new CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesList(this, "omp_advertise_ipv6_routes", false);
  public get ompAdvertiseIpv6Routes() {
    return this._ompAdvertiseIpv6Routes;
  }
  public putOmpAdvertiseIpv6Routes(value: CiscoVpnFeatureTemplateOmpAdvertiseIpv6Routes[] | cdktf.IResolvable) {
    this._ompAdvertiseIpv6Routes.internalValue = value;
  }
  public resetOmpAdvertiseIpv6Routes() {
    this._ompAdvertiseIpv6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdvertiseIpv6RoutesInput() {
    return this._ompAdvertiseIpv6Routes.internalValue;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // port_forward_rules - computed: false, optional: true, required: false
  private _portForwardRules = new CiscoVpnFeatureTemplatePortForwardRulesList(this, "port_forward_rules", false);
  public get portForwardRules() {
    return this._portForwardRules;
  }
  public putPortForwardRules(value: CiscoVpnFeatureTemplatePortForwardRules[] | cdktf.IResolvable) {
    this._portForwardRules.internalValue = value;
  }
  public resetPortForwardRules() {
    this._portForwardRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardRulesInput() {
    return this._portForwardRules.internalValue;
  }

  // route_global_exports - computed: false, optional: true, required: false
  private _routeGlobalExports = new CiscoVpnFeatureTemplateRouteGlobalExportsList(this, "route_global_exports", false);
  public get routeGlobalExports() {
    return this._routeGlobalExports;
  }
  public putRouteGlobalExports(value: CiscoVpnFeatureTemplateRouteGlobalExports[] | cdktf.IResolvable) {
    this._routeGlobalExports.internalValue = value;
  }
  public resetRouteGlobalExports() {
    this._routeGlobalExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeGlobalExportsInput() {
    return this._routeGlobalExports.internalValue;
  }

  // route_global_imports - computed: false, optional: true, required: false
  private _routeGlobalImports = new CiscoVpnFeatureTemplateRouteGlobalImportsList(this, "route_global_imports", false);
  public get routeGlobalImports() {
    return this._routeGlobalImports;
  }
  public putRouteGlobalImports(value: CiscoVpnFeatureTemplateRouteGlobalImports[] | cdktf.IResolvable) {
    this._routeGlobalImports.internalValue = value;
  }
  public resetRouteGlobalImports() {
    this._routeGlobalImports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeGlobalImportsInput() {
    return this._routeGlobalImports.internalValue;
  }

  // route_vpn_imports - computed: false, optional: true, required: false
  private _routeVpnImports = new CiscoVpnFeatureTemplateRouteVpnImportsList(this, "route_vpn_imports", false);
  public get routeVpnImports() {
    return this._routeVpnImports;
  }
  public putRouteVpnImports(value: CiscoVpnFeatureTemplateRouteVpnImports[] | cdktf.IResolvable) {
    this._routeVpnImports.internalValue = value;
  }
  public resetRouteVpnImports() {
    this._routeVpnImports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeVpnImportsInput() {
    return this._routeVpnImports.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new CiscoVpnFeatureTemplateServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: CiscoVpnFeatureTemplateServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // static_nat_rules - computed: false, optional: true, required: false
  private _staticNatRules = new CiscoVpnFeatureTemplateStaticNatRulesList(this, "static_nat_rules", false);
  public get staticNatRules() {
    return this._staticNatRules;
  }
  public putStaticNatRules(value: CiscoVpnFeatureTemplateStaticNatRules[] | cdktf.IResolvable) {
    this._staticNatRules.internalValue = value;
  }
  public resetStaticNatRules() {
    this._staticNatRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatRulesInput() {
    return this._staticNatRules.internalValue;
  }

  // static_nat_subnet_rules - computed: false, optional: true, required: false
  private _staticNatSubnetRules = new CiscoVpnFeatureTemplateStaticNatSubnetRulesList(this, "static_nat_subnet_rules", false);
  public get staticNatSubnetRules() {
    return this._staticNatSubnetRules;
  }
  public putStaticNatSubnetRules(value: CiscoVpnFeatureTemplateStaticNatSubnetRules[] | cdktf.IResolvable) {
    this._staticNatSubnetRules.internalValue = value;
  }
  public resetStaticNatSubnetRules() {
    this._staticNatSubnetRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatSubnetRulesInput() {
    return this._staticNatSubnetRules.internalValue;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tenant_vpn_id - computed: false, optional: true, required: false
  private _tenantVpnId?: number; 
  public get tenantVpnId() {
    return this.getNumberAttribute('tenant_vpn_id');
  }
  public set tenantVpnId(value: number) {
    this._tenantVpnId = value;
  }
  public resetTenantVpnId() {
    this._tenantVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantVpnIdInput() {
    return this._tenantVpnId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_name - computed: false, optional: true, required: false
  private _vpnName?: string; 
  public get vpnName() {
    return this.getStringAttribute('vpn_name');
  }
  public set vpnName(value: string) {
    this._vpnName = value;
  }
  public resetVpnName() {
    this._vpnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNameInput() {
    return this._vpnName;
  }

  // vpn_name_variable - computed: false, optional: true, required: false
  private _vpnNameVariable?: string; 
  public get vpnNameVariable() {
    return this.getStringAttribute('vpn_name_variable');
  }
  public set vpnNameVariable(value: string) {
    this._vpnNameVariable = value;
  }
  public resetVpnNameVariable() {
    this._vpnNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNameVariableInput() {
    return this._vpnNameVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      dns_hosts: cdktf.listMapper(ciscoVpnFeatureTemplateDnsHostsToTerraform, false)(this._dnsHosts.internalValue),
      dns_ipv4_servers: cdktf.listMapper(ciscoVpnFeatureTemplateDnsIpv4ServersToTerraform, false)(this._dnsIpv4Servers.internalValue),
      dns_ipv6_servers: cdktf.listMapper(ciscoVpnFeatureTemplateDnsIpv6ServersToTerraform, false)(this._dnsIpv6Servers.internalValue),
      enhance_ecmp_keying: cdktf.booleanToTerraform(this._enhanceEcmpKeying),
      enhance_ecmp_keying_variable: cdktf.stringToTerraform(this._enhanceEcmpKeyingVariable),
      ipv4_static_gre_routes: cdktf.listMapper(ciscoVpnFeatureTemplateIpv4StaticGreRoutesToTerraform, false)(this._ipv4StaticGreRoutes.internalValue),
      ipv4_static_ipsec_routes: cdktf.listMapper(ciscoVpnFeatureTemplateIpv4StaticIpsecRoutesToTerraform, false)(this._ipv4StaticIpsecRoutes.internalValue),
      ipv4_static_routes: cdktf.listMapper(ciscoVpnFeatureTemplateIpv4StaticRoutesToTerraform, false)(this._ipv4StaticRoutes.internalValue),
      ipv4_static_service_routes: cdktf.listMapper(ciscoVpnFeatureTemplateIpv4StaticServiceRoutesToTerraform, false)(this._ipv4StaticServiceRoutes.internalValue),
      ipv6_static_routes: cdktf.listMapper(ciscoVpnFeatureTemplateIpv6StaticRoutesToTerraform, false)(this._ipv6StaticRoutes.internalValue),
      name: cdktf.stringToTerraform(this._name),
      nat64_pools: cdktf.listMapper(ciscoVpnFeatureTemplateNat64PoolsToTerraform, false)(this._nat64Pools.internalValue),
      nat_pools: cdktf.listMapper(ciscoVpnFeatureTemplateNatPoolsToTerraform, false)(this._natPools.internalValue),
      omp_admin_distance_ipv4: cdktf.numberToTerraform(this._ompAdminDistanceIpv4),
      omp_admin_distance_ipv4_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv4Variable),
      omp_admin_distance_ipv6: cdktf.numberToTerraform(this._ompAdminDistanceIpv6),
      omp_admin_distance_ipv6_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv6Variable),
      omp_advertise_ipv4_routes: cdktf.listMapper(ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesToTerraform, false)(this._ompAdvertiseIpv4Routes.internalValue),
      omp_advertise_ipv6_routes: cdktf.listMapper(ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesToTerraform, false)(this._ompAdvertiseIpv6Routes.internalValue),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      port_forward_rules: cdktf.listMapper(ciscoVpnFeatureTemplatePortForwardRulesToTerraform, false)(this._portForwardRules.internalValue),
      route_global_exports: cdktf.listMapper(ciscoVpnFeatureTemplateRouteGlobalExportsToTerraform, false)(this._routeGlobalExports.internalValue),
      route_global_imports: cdktf.listMapper(ciscoVpnFeatureTemplateRouteGlobalImportsToTerraform, false)(this._routeGlobalImports.internalValue),
      route_vpn_imports: cdktf.listMapper(ciscoVpnFeatureTemplateRouteVpnImportsToTerraform, false)(this._routeVpnImports.internalValue),
      services: cdktf.listMapper(ciscoVpnFeatureTemplateServicesToTerraform, false)(this._services.internalValue),
      static_nat_rules: cdktf.listMapper(ciscoVpnFeatureTemplateStaticNatRulesToTerraform, false)(this._staticNatRules.internalValue),
      static_nat_subnet_rules: cdktf.listMapper(ciscoVpnFeatureTemplateStaticNatSubnetRulesToTerraform, false)(this._staticNatSubnetRules.internalValue),
      tenant_vpn_id: cdktf.numberToTerraform(this._tenantVpnId),
      vpn_id: cdktf.numberToTerraform(this._vpnId),
      vpn_name: cdktf.stringToTerraform(this._vpnName),
      vpn_name_variable: cdktf.stringToTerraform(this._vpnNameVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_hosts: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateDnsHostsToHclTerraform, false)(this._dnsHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateDnsHostsList",
      },
      dns_ipv4_servers: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateDnsIpv4ServersToHclTerraform, false)(this._dnsIpv4Servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateDnsIpv4ServersList",
      },
      dns_ipv6_servers: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateDnsIpv6ServersToHclTerraform, false)(this._dnsIpv6Servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateDnsIpv6ServersList",
      },
      enhance_ecmp_keying: {
        value: cdktf.booleanToHclTerraform(this._enhanceEcmpKeying),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhance_ecmp_keying_variable: {
        value: cdktf.stringToHclTerraform(this._enhanceEcmpKeyingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_static_gre_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv4StaticGreRoutesToHclTerraform, false)(this._ipv4StaticGreRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateIpv4StaticGreRoutesList",
      },
      ipv4_static_ipsec_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv4StaticIpsecRoutesToHclTerraform, false)(this._ipv4StaticIpsecRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateIpv4StaticIpsecRoutesList",
      },
      ipv4_static_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv4StaticRoutesToHclTerraform, false)(this._ipv4StaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateIpv4StaticRoutesList",
      },
      ipv4_static_service_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv4StaticServiceRoutesToHclTerraform, false)(this._ipv4StaticServiceRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateIpv4StaticServiceRoutesList",
      },
      ipv6_static_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateIpv6StaticRoutesToHclTerraform, false)(this._ipv6StaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateIpv6StaticRoutesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64_pools: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateNat64PoolsToHclTerraform, false)(this._nat64Pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateNat64PoolsList",
      },
      nat_pools: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateNatPoolsToHclTerraform, false)(this._natPools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateNatPoolsList",
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
      omp_advertise_ipv4_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesToHclTerraform, false)(this._ompAdvertiseIpv4Routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateOmpAdvertiseIpv4RoutesList",
      },
      omp_advertise_ipv6_routes: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesToHclTerraform, false)(this._ompAdvertiseIpv6Routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateOmpAdvertiseIpv6RoutesList",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_forward_rules: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplatePortForwardRulesToHclTerraform, false)(this._portForwardRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplatePortForwardRulesList",
      },
      route_global_exports: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateRouteGlobalExportsToHclTerraform, false)(this._routeGlobalExports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateRouteGlobalExportsList",
      },
      route_global_imports: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateRouteGlobalImportsToHclTerraform, false)(this._routeGlobalImports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateRouteGlobalImportsList",
      },
      route_vpn_imports: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateRouteVpnImportsToHclTerraform, false)(this._routeVpnImports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateRouteVpnImportsList",
      },
      services: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateServicesToHclTerraform, false)(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateServicesList",
      },
      static_nat_rules: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateStaticNatRulesToHclTerraform, false)(this._staticNatRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateStaticNatRulesList",
      },
      static_nat_subnet_rules: {
        value: cdktf.listMapperHcl(ciscoVpnFeatureTemplateStaticNatSubnetRulesToHclTerraform, false)(this._staticNatSubnetRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnFeatureTemplateStaticNatSubnetRulesList",
      },
      tenant_vpn_id: {
        value: cdktf.numberToHclTerraform(this._tenantVpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_id: {
        value: cdktf.numberToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_name: {
        value: cdktf.stringToHclTerraform(this._vpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_name_variable: {
        value: cdktf.stringToHclTerraform(this._vpnNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
