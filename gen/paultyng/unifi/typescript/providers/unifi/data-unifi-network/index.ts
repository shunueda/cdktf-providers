// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUnifiNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network#id DataUnifiNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network#name DataUnifiNetwork#name}
  */
  readonly name?: string;
  /**
  * The name of the site to associate the network with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network#site DataUnifiNetwork#site}
  */
  readonly site?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network unifi_network}
*/
export class DataUnifiNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUnifiNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUnifiNetwork to import
  * @param importFromId The id of the existing DataUnifiNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUnifiNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/data-sources/network unifi_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUnifiNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUnifiNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unifi_network',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._site = config.site;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_dns - computed: true, optional: false, required: false
  public get dhcpDns() {
    return this.getListAttribute('dhcp_dns');
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getBooleanAttribute('dhcp_enabled');
  }

  // dhcp_lease - computed: true, optional: false, required: false
  public get dhcpLease() {
    return this.getNumberAttribute('dhcp_lease');
  }

  // dhcp_start - computed: true, optional: false, required: false
  public get dhcpStart() {
    return this.getStringAttribute('dhcp_start');
  }

  // dhcp_stop - computed: true, optional: false, required: false
  public get dhcpStop() {
    return this.getStringAttribute('dhcp_stop');
  }

  // dhcp_v6_dns - computed: true, optional: false, required: false
  public get dhcpV6Dns() {
    return this.getListAttribute('dhcp_v6_dns');
  }

  // dhcp_v6_dns_auto - computed: true, optional: false, required: false
  public get dhcpV6DnsAuto() {
    return this.getBooleanAttribute('dhcp_v6_dns_auto');
  }

  // dhcp_v6_enabled - computed: true, optional: false, required: false
  public get dhcpV6Enabled() {
    return this.getBooleanAttribute('dhcp_v6_enabled');
  }

  // dhcp_v6_lease - computed: true, optional: false, required: false
  public get dhcpV6Lease() {
    return this.getNumberAttribute('dhcp_v6_lease');
  }

  // dhcp_v6_start - computed: true, optional: false, required: false
  public get dhcpV6Start() {
    return this.getStringAttribute('dhcp_v6_start');
  }

  // dhcp_v6_stop - computed: true, optional: false, required: false
  public get dhcpV6Stop() {
    return this.getStringAttribute('dhcp_v6_stop');
  }

  // dhcpd_boot_enabled - computed: true, optional: false, required: false
  public get dhcpdBootEnabled() {
    return this.getBooleanAttribute('dhcpd_boot_enabled');
  }

  // dhcpd_boot_filename - computed: true, optional: false, required: false
  public get dhcpdBootFilename() {
    return this.getStringAttribute('dhcpd_boot_filename');
  }

  // dhcpd_boot_server - computed: true, optional: false, required: false
  public get dhcpdBootServer() {
    return this.getStringAttribute('dhcpd_boot_server');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // igmp_snooping - computed: true, optional: false, required: false
  public get igmpSnooping() {
    return this.getBooleanAttribute('igmp_snooping');
  }

  // ipv6_interface_type - computed: true, optional: false, required: false
  public get ipv6InterfaceType() {
    return this.getStringAttribute('ipv6_interface_type');
  }

  // ipv6_pd_interface - computed: true, optional: false, required: false
  public get ipv6PdInterface() {
    return this.getStringAttribute('ipv6_pd_interface');
  }

  // ipv6_pd_prefixid - computed: true, optional: false, required: false
  public get ipv6PdPrefixid() {
    return this.getStringAttribute('ipv6_pd_prefixid');
  }

  // ipv6_pd_start - computed: true, optional: false, required: false
  public get ipv6PdStart() {
    return this.getStringAttribute('ipv6_pd_start');
  }

  // ipv6_pd_stop - computed: true, optional: false, required: false
  public get ipv6PdStop() {
    return this.getStringAttribute('ipv6_pd_stop');
  }

  // ipv6_ra_enable - computed: true, optional: false, required: false
  public get ipv6RaEnable() {
    return this.getBooleanAttribute('ipv6_ra_enable');
  }

  // ipv6_ra_preferred_lifetime - computed: true, optional: false, required: false
  public get ipv6RaPreferredLifetime() {
    return this.getNumberAttribute('ipv6_ra_preferred_lifetime');
  }

  // ipv6_ra_priority - computed: true, optional: false, required: false
  public get ipv6RaPriority() {
    return this.getStringAttribute('ipv6_ra_priority');
  }

  // ipv6_ra_valid_lifetime - computed: true, optional: false, required: false
  public get ipv6RaValidLifetime() {
    return this.getNumberAttribute('ipv6_ra_valid_lifetime');
  }

  // ipv6_static_subnet - computed: true, optional: false, required: false
  public get ipv6StaticSubnet() {
    return this.getStringAttribute('ipv6_static_subnet');
  }

  // multicast_dns - computed: true, optional: false, required: false
  public get multicastDns() {
    return this.getBooleanAttribute('multicast_dns');
  }

  // name - computed: true, optional: true, required: false
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

  // network_group - computed: true, optional: false, required: false
  public get networkGroup() {
    return this.getStringAttribute('network_group');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // wan_dhcp_v6_pd_size - computed: true, optional: false, required: false
  public get wanDhcpV6PdSize() {
    return this.getNumberAttribute('wan_dhcp_v6_pd_size');
  }

  // wan_dns - computed: true, optional: false, required: false
  public get wanDns() {
    return this.getListAttribute('wan_dns');
  }

  // wan_egress_qos - computed: true, optional: false, required: false
  public get wanEgressQos() {
    return this.getNumberAttribute('wan_egress_qos');
  }

  // wan_gateway - computed: true, optional: false, required: false
  public get wanGateway() {
    return this.getStringAttribute('wan_gateway');
  }

  // wan_gateway_v6 - computed: true, optional: false, required: false
  public get wanGatewayV6() {
    return this.getStringAttribute('wan_gateway_v6');
  }

  // wan_ip - computed: true, optional: false, required: false
  public get wanIp() {
    return this.getStringAttribute('wan_ip');
  }

  // wan_ipv6 - computed: true, optional: false, required: false
  public get wanIpv6() {
    return this.getStringAttribute('wan_ipv6');
  }

  // wan_netmask - computed: true, optional: false, required: false
  public get wanNetmask() {
    return this.getStringAttribute('wan_netmask');
  }

  // wan_networkgroup - computed: true, optional: false, required: false
  public get wanNetworkgroup() {
    return this.getStringAttribute('wan_networkgroup');
  }

  // wan_prefixlen - computed: true, optional: false, required: false
  public get wanPrefixlen() {
    return this.getNumberAttribute('wan_prefixlen');
  }

  // wan_type - computed: true, optional: false, required: false
  public get wanType() {
    return this.getStringAttribute('wan_type');
  }

  // wan_type_v6 - computed: true, optional: false, required: false
  public get wanTypeV6() {
    return this.getStringAttribute('wan_type_v6');
  }

  // wan_username - computed: true, optional: false, required: false
  public get wanUsername() {
    return this.getStringAttribute('wan_username');
  }

  // x_wan_password - computed: true, optional: false, required: false
  public get xWanPassword() {
    return this.getStringAttribute('x_wan_password');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      site: cdktf.stringToTerraform(this._site),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
