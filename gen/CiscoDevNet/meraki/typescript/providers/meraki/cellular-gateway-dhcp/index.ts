// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellularGatewayDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * DHCP Lease time for all MG of the network. Possible values are `30 minutes`, `1 hour`, `4 hours`, `12 hours`, `1 day` or `1 week`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp#dhcp_lease_time CellularGatewayDhcp#dhcp_lease_time}
  */
  readonly dhcpLeaseTime: string;
  /**
  * list of fixed IPs representing the the DNS Name servers when the mode is `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp#dns_custom_nameservers CellularGatewayDhcp#dns_custom_nameservers}
  */
  readonly dnsCustomNameservers?: string[];
  /**
  * DNS name servers mode for all MG of the network. Possible values are: `upstream_dns`, `google_dns`, `opendns`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp#dns_nameservers CellularGatewayDhcp#dns_nameservers}
  */
  readonly dnsNameservers: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp#network_id CellularGatewayDhcp#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp meraki_cellular_gateway_dhcp}
*/
export class CellularGatewayDhcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_cellular_gateway_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellularGatewayDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellularGatewayDhcp to import
  * @param importFromId The id of the existing CellularGatewayDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellularGatewayDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_cellular_gateway_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/cellular_gateway_dhcp meraki_cellular_gateway_dhcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellularGatewayDhcpConfig
  */
  public constructor(scope: Construct, id: string, config: CellularGatewayDhcpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_cellular_gateway_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpLeaseTime = config.dhcpLeaseTime;
    this._dnsCustomNameservers = config.dnsCustomNameservers;
    this._dnsNameservers = config.dnsNameservers;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_lease_time - computed: false, optional: false, required: true
  private _dhcpLeaseTime?: string; 
  public get dhcpLeaseTime() {
    return this.getStringAttribute('dhcp_lease_time');
  }
  public set dhcpLeaseTime(value: string) {
    this._dhcpLeaseTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpLeaseTimeInput() {
    return this._dhcpLeaseTime;
  }

  // dns_custom_nameservers - computed: false, optional: true, required: false
  private _dnsCustomNameservers?: string[]; 
  public get dnsCustomNameservers() {
    return this.getListAttribute('dns_custom_nameservers');
  }
  public set dnsCustomNameservers(value: string[]) {
    this._dnsCustomNameservers = value;
  }
  public resetDnsCustomNameservers() {
    this._dnsCustomNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomNameserversInput() {
    return this._dnsCustomNameservers;
  }

  // dns_nameservers - computed: false, optional: false, required: true
  private _dnsNameservers?: string; 
  public get dnsNameservers() {
    return this.getStringAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string) {
    this._dnsNameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_lease_time: cdktf.stringToTerraform(this._dhcpLeaseTime),
      dns_custom_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsCustomNameservers),
      dns_nameservers: cdktf.stringToTerraform(this._dnsNameservers),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_lease_time: {
        value: cdktf.stringToHclTerraform(this._dhcpLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_custom_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsCustomNameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_nameservers: {
        value: cdktf.stringToHclTerraform(this._dnsNameservers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
