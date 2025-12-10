// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpPoolReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of addresses assigned from the IPv4 pool (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_assigned_addresses IpPoolReservation#ipv4_assigned_addresses}
  */
  readonly ipv4AssignedAddresses?: string;
  /**
  * The number of addresses that are assigned from the IPv4 pool by default (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_default_assigned_addresses IpPoolReservation#ipv4_default_assigned_addresses}
  */
  readonly ipv4DefaultAssignedAddresses?: string;
  /**
  * The IPv4 DHCP server(s) for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_dhcp_servers IpPoolReservation#ipv4_dhcp_servers}
  */
  readonly ipv4DhcpServers?: string[];
  /**
  * The IPv4 DNS server(s) for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_dns_servers IpPoolReservation#ipv4_dns_servers}
  */
  readonly ipv4DnsServers?: string[];
  /**
  * The IPv4 gateway IP address for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_gateway IpPoolReservation#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * The non-tunnel global pool ID for this IPv4 reserve pool. Once added, this value cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_global_pool_id IpPoolReservation#ipv4_global_pool_id}
  */
  readonly ipv4GlobalPoolId: string;
  /**
  * The IPv4 network mask length as a decimal for the CIDR notation of this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_prefix_length IpPoolReservation#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength: number;
  /**
  * The IPv4 IP address component of the CIDR notation for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_subnet IpPoolReservation#ipv4_subnet}
  */
  readonly ipv4Subnet: string;
  /**
  * The total number of addresses in the IPv4 pool (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_total_addresses IpPoolReservation#ipv4_total_addresses}
  */
  readonly ipv4TotalAddresses?: string;
  /**
  * The number of addresses in the IPv4 pool that cannot be assigned (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv4_unassignable_addresses IpPoolReservation#ipv4_unassignable_addresses}
  */
  readonly ipv4UnassignableAddresses?: string;
  /**
  * The number of addresses assigned from the IPv6 pool (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_assigned_addresses IpPoolReservation#ipv6_assigned_addresses}
  */
  readonly ipv6AssignedAddresses?: string;
  /**
  * The number of addresses that are assigned from the IPv6 pool by default (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_default_assigned_addresses IpPoolReservation#ipv6_default_assigned_addresses}
  */
  readonly ipv6DefaultAssignedAddresses?: string;
  /**
  * The IPv6 DHCP server(s) for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_dhcp_servers IpPoolReservation#ipv6_dhcp_servers}
  */
  readonly ipv6DhcpServers?: string[];
  /**
  * The IPv6 DNS server(s) for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_dns_servers IpPoolReservation#ipv6_dns_servers}
  */
  readonly ipv6DnsServers?: string[];
  /**
  * The IPv6 gateway IP address for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_gateway IpPoolReservation#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * The non-tunnel global pool ID for this IPv6 reserve pool. Once added, this value cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_global_pool_id IpPoolReservation#ipv6_global_pool_id}
  */
  readonly ipv6GlobalPoolId?: string;
  /**
  * The IPv6 network mask length as a decimal for the CIDR notation of this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_prefix_length IpPoolReservation#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * If the IPv6 prefixLength is 64, this option may be enabled for SLAAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_slaac_support IpPoolReservation#ipv6_slaac_support}
  */
  readonly ipv6SlaacSupport?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 IP address component of the CIDR notation for this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_subnet IpPoolReservation#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * The total number of addresses in the IPv6 pool (numeric string, up to 128 bits).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_total_addresses IpPoolReservation#ipv6_total_addresses}
  */
  readonly ipv6TotalAddresses?: string;
  /**
  * The number of addresses in the IPv6 pool that cannot be assigned (numeric string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#ipv6_unassignable_addresses IpPoolReservation#ipv6_unassignable_addresses}
  */
  readonly ipv6UnassignableAddresses?: string;
  /**
  * The name for this reserve IP pool. Only letters, numbers, '-' (hyphen), '_' (underscore), '.' (period), and '/' (forward slash) are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#name IpPoolReservation#name}
  */
  readonly name: string;
  /**
  * The type of the reserve IP subpool. Once created, this cannot be changed.
  *   - Choices: `Generic`, `LAN`, `Management`, `Service`, `WAN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#pool_type IpPoolReservation#pool_type}
  */
  readonly poolType: string;
  /**
  * The id of the non-Global site that this subpool belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#site_id IpPoolReservation#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation catalystcenter_ip_pool_reservation}
*/
export class IpPoolReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_ip_pool_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpPoolReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpPoolReservation to import
  * @param importFromId The id of the existing IpPoolReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpPoolReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_ip_pool_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/ip_pool_reservation catalystcenter_ip_pool_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpPoolReservationConfig
  */
  public constructor(scope: Construct, id: string, config: IpPoolReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_ip_pool_reservation',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipv4AssignedAddresses = config.ipv4AssignedAddresses;
    this._ipv4DefaultAssignedAddresses = config.ipv4DefaultAssignedAddresses;
    this._ipv4DhcpServers = config.ipv4DhcpServers;
    this._ipv4DnsServers = config.ipv4DnsServers;
    this._ipv4Gateway = config.ipv4Gateway;
    this._ipv4GlobalPoolId = config.ipv4GlobalPoolId;
    this._ipv4PrefixLength = config.ipv4PrefixLength;
    this._ipv4Subnet = config.ipv4Subnet;
    this._ipv4TotalAddresses = config.ipv4TotalAddresses;
    this._ipv4UnassignableAddresses = config.ipv4UnassignableAddresses;
    this._ipv6AssignedAddresses = config.ipv6AssignedAddresses;
    this._ipv6DefaultAssignedAddresses = config.ipv6DefaultAssignedAddresses;
    this._ipv6DhcpServers = config.ipv6DhcpServers;
    this._ipv6DnsServers = config.ipv6DnsServers;
    this._ipv6Gateway = config.ipv6Gateway;
    this._ipv6GlobalPoolId = config.ipv6GlobalPoolId;
    this._ipv6PrefixLength = config.ipv6PrefixLength;
    this._ipv6SlaacSupport = config.ipv6SlaacSupport;
    this._ipv6Subnet = config.ipv6Subnet;
    this._ipv6TotalAddresses = config.ipv6TotalAddresses;
    this._ipv6UnassignableAddresses = config.ipv6UnassignableAddresses;
    this._name = config.name;
    this._poolType = config.poolType;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_assigned_addresses - computed: false, optional: true, required: false
  private _ipv4AssignedAddresses?: string; 
  public get ipv4AssignedAddresses() {
    return this.getStringAttribute('ipv4_assigned_addresses');
  }
  public set ipv4AssignedAddresses(value: string) {
    this._ipv4AssignedAddresses = value;
  }
  public resetIpv4AssignedAddresses() {
    this._ipv4AssignedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AssignedAddressesInput() {
    return this._ipv4AssignedAddresses;
  }

  // ipv4_default_assigned_addresses - computed: false, optional: true, required: false
  private _ipv4DefaultAssignedAddresses?: string; 
  public get ipv4DefaultAssignedAddresses() {
    return this.getStringAttribute('ipv4_default_assigned_addresses');
  }
  public set ipv4DefaultAssignedAddresses(value: string) {
    this._ipv4DefaultAssignedAddresses = value;
  }
  public resetIpv4DefaultAssignedAddresses() {
    this._ipv4DefaultAssignedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultAssignedAddressesInput() {
    return this._ipv4DefaultAssignedAddresses;
  }

  // ipv4_dhcp_servers - computed: false, optional: true, required: false
  private _ipv4DhcpServers?: string[]; 
  public get ipv4DhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_servers'));
  }
  public set ipv4DhcpServers(value: string[]) {
    this._ipv4DhcpServers = value;
  }
  public resetIpv4DhcpServers() {
    this._ipv4DhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpServersInput() {
    return this._ipv4DhcpServers;
  }

  // ipv4_dns_servers - computed: false, optional: true, required: false
  private _ipv4DnsServers?: string[]; 
  public get ipv4DnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dns_servers'));
  }
  public set ipv4DnsServers(value: string[]) {
    this._ipv4DnsServers = value;
  }
  public resetIpv4DnsServers() {
    this._ipv4DnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServersInput() {
    return this._ipv4DnsServers;
  }

  // ipv4_gateway - computed: false, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv4_global_pool_id - computed: false, optional: false, required: true
  private _ipv4GlobalPoolId?: string; 
  public get ipv4GlobalPoolId() {
    return this.getStringAttribute('ipv4_global_pool_id');
  }
  public set ipv4GlobalPoolId(value: string) {
    this._ipv4GlobalPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GlobalPoolIdInput() {
    return this._ipv4GlobalPoolId;
  }

  // ipv4_prefix_length - computed: false, optional: false, required: true
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv4_subnet - computed: false, optional: false, required: true
  private _ipv4Subnet?: string; 
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }
  public set ipv4Subnet(value: string) {
    this._ipv4Subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetInput() {
    return this._ipv4Subnet;
  }

  // ipv4_total_addresses - computed: false, optional: true, required: false
  private _ipv4TotalAddresses?: string; 
  public get ipv4TotalAddresses() {
    return this.getStringAttribute('ipv4_total_addresses');
  }
  public set ipv4TotalAddresses(value: string) {
    this._ipv4TotalAddresses = value;
  }
  public resetIpv4TotalAddresses() {
    this._ipv4TotalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TotalAddressesInput() {
    return this._ipv4TotalAddresses;
  }

  // ipv4_unassignable_addresses - computed: false, optional: true, required: false
  private _ipv4UnassignableAddresses?: string; 
  public get ipv4UnassignableAddresses() {
    return this.getStringAttribute('ipv4_unassignable_addresses');
  }
  public set ipv4UnassignableAddresses(value: string) {
    this._ipv4UnassignableAddresses = value;
  }
  public resetIpv4UnassignableAddresses() {
    this._ipv4UnassignableAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnassignableAddressesInput() {
    return this._ipv4UnassignableAddresses;
  }

  // ipv6_assigned_addresses - computed: false, optional: true, required: false
  private _ipv6AssignedAddresses?: string; 
  public get ipv6AssignedAddresses() {
    return this.getStringAttribute('ipv6_assigned_addresses');
  }
  public set ipv6AssignedAddresses(value: string) {
    this._ipv6AssignedAddresses = value;
  }
  public resetIpv6AssignedAddresses() {
    this._ipv6AssignedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AssignedAddressesInput() {
    return this._ipv6AssignedAddresses;
  }

  // ipv6_default_assigned_addresses - computed: false, optional: true, required: false
  private _ipv6DefaultAssignedAddresses?: string; 
  public get ipv6DefaultAssignedAddresses() {
    return this.getStringAttribute('ipv6_default_assigned_addresses');
  }
  public set ipv6DefaultAssignedAddresses(value: string) {
    this._ipv6DefaultAssignedAddresses = value;
  }
  public resetIpv6DefaultAssignedAddresses() {
    this._ipv6DefaultAssignedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultAssignedAddressesInput() {
    return this._ipv6DefaultAssignedAddresses;
  }

  // ipv6_dhcp_servers - computed: false, optional: true, required: false
  private _ipv6DhcpServers?: string[]; 
  public get ipv6DhcpServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_dhcp_servers'));
  }
  public set ipv6DhcpServers(value: string[]) {
    this._ipv6DhcpServers = value;
  }
  public resetIpv6DhcpServers() {
    this._ipv6DhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpServersInput() {
    return this._ipv6DhcpServers;
  }

  // ipv6_dns_servers - computed: false, optional: true, required: false
  private _ipv6DnsServers?: string[]; 
  public get ipv6DnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_dns_servers'));
  }
  public set ipv6DnsServers(value: string[]) {
    this._ipv6DnsServers = value;
  }
  public resetIpv6DnsServers() {
    this._ipv6DnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServersInput() {
    return this._ipv6DnsServers;
  }

  // ipv6_gateway - computed: false, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // ipv6_global_pool_id - computed: false, optional: true, required: false
  private _ipv6GlobalPoolId?: string; 
  public get ipv6GlobalPoolId() {
    return this.getStringAttribute('ipv6_global_pool_id');
  }
  public set ipv6GlobalPoolId(value: string) {
    this._ipv6GlobalPoolId = value;
  }
  public resetIpv6GlobalPoolId() {
    this._ipv6GlobalPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GlobalPoolIdInput() {
    return this._ipv6GlobalPoolId;
  }

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
  }

  // ipv6_slaac_support - computed: false, optional: true, required: false
  private _ipv6SlaacSupport?: boolean | cdktf.IResolvable; 
  public get ipv6SlaacSupport() {
    return this.getBooleanAttribute('ipv6_slaac_support');
  }
  public set ipv6SlaacSupport(value: boolean | cdktf.IResolvable) {
    this._ipv6SlaacSupport = value;
  }
  public resetIpv6SlaacSupport() {
    this._ipv6SlaacSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SlaacSupportInput() {
    return this._ipv6SlaacSupport;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // ipv6_total_addresses - computed: false, optional: true, required: false
  private _ipv6TotalAddresses?: string; 
  public get ipv6TotalAddresses() {
    return this.getStringAttribute('ipv6_total_addresses');
  }
  public set ipv6TotalAddresses(value: string) {
    this._ipv6TotalAddresses = value;
  }
  public resetIpv6TotalAddresses() {
    this._ipv6TotalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TotalAddressesInput() {
    return this._ipv6TotalAddresses;
  }

  // ipv6_unassignable_addresses - computed: false, optional: true, required: false
  private _ipv6UnassignableAddresses?: string; 
  public get ipv6UnassignableAddresses() {
    return this.getStringAttribute('ipv6_unassignable_addresses');
  }
  public set ipv6UnassignableAddresses(value: string) {
    this._ipv6UnassignableAddresses = value;
  }
  public resetIpv6UnassignableAddresses() {
    this._ipv6UnassignableAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnassignableAddressesInput() {
    return this._ipv6UnassignableAddresses;
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

  // pool_type - computed: false, optional: false, required: true
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv4_assigned_addresses: cdktf.stringToTerraform(this._ipv4AssignedAddresses),
      ipv4_default_assigned_addresses: cdktf.stringToTerraform(this._ipv4DefaultAssignedAddresses),
      ipv4_dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpServers),
      ipv4_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DnsServers),
      ipv4_gateway: cdktf.stringToTerraform(this._ipv4Gateway),
      ipv4_global_pool_id: cdktf.stringToTerraform(this._ipv4GlobalPoolId),
      ipv4_prefix_length: cdktf.numberToTerraform(this._ipv4PrefixLength),
      ipv4_subnet: cdktf.stringToTerraform(this._ipv4Subnet),
      ipv4_total_addresses: cdktf.stringToTerraform(this._ipv4TotalAddresses),
      ipv4_unassignable_addresses: cdktf.stringToTerraform(this._ipv4UnassignableAddresses),
      ipv6_assigned_addresses: cdktf.stringToTerraform(this._ipv6AssignedAddresses),
      ipv6_default_assigned_addresses: cdktf.stringToTerraform(this._ipv6DefaultAssignedAddresses),
      ipv6_dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6DhcpServers),
      ipv6_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6DnsServers),
      ipv6_gateway: cdktf.stringToTerraform(this._ipv6Gateway),
      ipv6_global_pool_id: cdktf.stringToTerraform(this._ipv6GlobalPoolId),
      ipv6_prefix_length: cdktf.numberToTerraform(this._ipv6PrefixLength),
      ipv6_slaac_support: cdktf.booleanToTerraform(this._ipv6SlaacSupport),
      ipv6_subnet: cdktf.stringToTerraform(this._ipv6Subnet),
      ipv6_total_addresses: cdktf.stringToTerraform(this._ipv6TotalAddresses),
      ipv6_unassignable_addresses: cdktf.stringToTerraform(this._ipv6UnassignableAddresses),
      name: cdktf.stringToTerraform(this._name),
      pool_type: cdktf.stringToTerraform(this._poolType),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4_assigned_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv4AssignedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_default_assigned_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv4DefaultAssignedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dhcp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4DhcpServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4DnsServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_global_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipv4GlobalPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_prefix_length: {
        value: cdktf.numberToHclTerraform(this._ipv4PrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_total_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv4TotalAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_unassignable_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv4UnassignableAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_assigned_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv6AssignedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_default_assigned_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv6DefaultAssignedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dhcp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6DhcpServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6DnsServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_global_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipv6GlobalPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_prefix_length: {
        value: cdktf.numberToHclTerraform(this._ipv6PrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_slaac_support: {
        value: cdktf.booleanToHclTerraform(this._ipv6SlaacSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_total_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv6TotalAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_unassignable_addresses: {
        value: cdktf.stringToHclTerraform(this._ipv6UnassignableAddresses),
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
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
