// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchDhcpServerPolicyArpInspectionTrustedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv4 address of the trusted server being added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server#ipv4_address SwitchDhcpServerPolicyArpInspectionTrustedServer#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * The mac address of the trusted server being added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server#mac SwitchDhcpServerPolicyArpInspectionTrustedServer#mac}
  */
  readonly mac: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server#network_id SwitchDhcpServerPolicyArpInspectionTrustedServer#network_id}
  */
  readonly networkId: string;
  /**
  * The VLAN of the trusted server being added. It must be between 1 and 4094
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server#vlan SwitchDhcpServerPolicyArpInspectionTrustedServer#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server meraki_switch_dhcp_server_policy_arp_inspection_trusted_server}
*/
export class SwitchDhcpServerPolicyArpInspectionTrustedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_dhcp_server_policy_arp_inspection_trusted_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchDhcpServerPolicyArpInspectionTrustedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchDhcpServerPolicyArpInspectionTrustedServer to import
  * @param importFromId The id of the existing SwitchDhcpServerPolicyArpInspectionTrustedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchDhcpServerPolicyArpInspectionTrustedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_dhcp_server_policy_arp_inspection_trusted_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_dhcp_server_policy_arp_inspection_trusted_server meraki_switch_dhcp_server_policy_arp_inspection_trusted_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchDhcpServerPolicyArpInspectionTrustedServerConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchDhcpServerPolicyArpInspectionTrustedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_dhcp_server_policy_arp_inspection_trusted_server',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipv4Address = config.ipv4Address;
    this._mac = config.mac;
    this._networkId = config.networkId;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      mac: cdktf.stringToTerraform(this._mac),
      network_id: cdktf.stringToTerraform(this._networkId),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
