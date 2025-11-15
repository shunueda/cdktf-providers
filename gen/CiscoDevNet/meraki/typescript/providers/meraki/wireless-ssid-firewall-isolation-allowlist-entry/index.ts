// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidFirewallIsolationAllowlistEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * L2 Isolation mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry#client_mac WirelessSsidFirewallIsolationAllowlistEntry#client_mac}
  */
  readonly clientMac: string;
  /**
  * The description of mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry#description WirelessSsidFirewallIsolationAllowlistEntry#description}
  */
  readonly description?: string;
  /**
  * The ID of network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry#network_id WirelessSsidFirewallIsolationAllowlistEntry#network_id}
  */
  readonly networkId: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry#organization_id WirelessSsidFirewallIsolationAllowlistEntry#organization_id}
  */
  readonly organizationId: string;
  /**
  * The number of SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry#ssid_number WirelessSsidFirewallIsolationAllowlistEntry#ssid_number}
  */
  readonly ssidNumber: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry meraki_wireless_ssid_firewall_isolation_allowlist_entry}
*/
export class WirelessSsidFirewallIsolationAllowlistEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_firewall_isolation_allowlist_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidFirewallIsolationAllowlistEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidFirewallIsolationAllowlistEntry to import
  * @param importFromId The id of the existing WirelessSsidFirewallIsolationAllowlistEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidFirewallIsolationAllowlistEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_firewall_isolation_allowlist_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_firewall_isolation_allowlist_entry meraki_wireless_ssid_firewall_isolation_allowlist_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidFirewallIsolationAllowlistEntryConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidFirewallIsolationAllowlistEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_firewall_isolation_allowlist_entry',
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
    this._clientMac = config.clientMac;
    this._description = config.description;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
    this._ssidNumber = config.ssidNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_mac - computed: false, optional: false, required: true
  private _clientMac?: string; 
  public get clientMac() {
    return this.getStringAttribute('client_mac');
  }
  public set clientMac(value: string) {
    this._clientMac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMacInput() {
    return this._clientMac;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // ssid_number - computed: false, optional: false, required: true
  private _ssidNumber?: number; 
  public get ssidNumber() {
    return this.getNumberAttribute('ssid_number');
  }
  public set ssidNumber(value: number) {
    this._ssidNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNumberInput() {
    return this._ssidNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_mac: cdktf.stringToTerraform(this._clientMac),
      description: cdktf.stringToTerraform(this._description),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      ssid_number: cdktf.numberToTerraform(this._ssidNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_mac: {
        value: cdktf.stringToHclTerraform(this._clientMac),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_number: {
        value: cdktf.numberToHclTerraform(this._ssidNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
