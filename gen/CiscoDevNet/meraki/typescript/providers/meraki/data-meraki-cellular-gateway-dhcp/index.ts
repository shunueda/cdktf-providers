// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/cellular_gateway_dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiCellularGatewayDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/cellular_gateway_dhcp#network_id DataMerakiCellularGatewayDhcp#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/cellular_gateway_dhcp meraki_cellular_gateway_dhcp}
*/
export class DataMerakiCellularGatewayDhcp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_cellular_gateway_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiCellularGatewayDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiCellularGatewayDhcp to import
  * @param importFromId The id of the existing DataMerakiCellularGatewayDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/cellular_gateway_dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiCellularGatewayDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_cellular_gateway_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/cellular_gateway_dhcp meraki_cellular_gateway_dhcp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiCellularGatewayDhcpConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiCellularGatewayDhcpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_cellular_gateway_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_lease_time - computed: true, optional: false, required: false
  public get dhcpLeaseTime() {
    return this.getStringAttribute('dhcp_lease_time');
  }

  // dns_custom_nameservers - computed: true, optional: false, required: false
  public get dnsCustomNameservers() {
    return this.getListAttribute('dns_custom_nameservers');
  }

  // dns_nameservers - computed: true, optional: false, required: false
  public get dnsNameservers() {
    return this.getStringAttribute('dns_nameservers');
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
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
