// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceBridgeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#___path___ InterfaceBridgeSettings#___path___}
  */
  readonly path?: string;
  /**
  * Whether to enable a bridge FastPath globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#allow_fast_path InterfaceBridgeSettings#allow_fast_path}
  */
  readonly allowFastPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#id InterfaceBridgeSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Force bridged traffic to also be processed by prerouting, forward and postrouting sections of IP routing ( Packet Flow). This does not apply to routed traffic. This property is required in case you want to assign Simple Queues or global Queue Tree to traffic in a bridge. Property use-ip-firewall-for-vlan is required in case bridge vlan-filtering is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#use_ip_firewall InterfaceBridgeSettings#use_ip_firewall}
  */
  readonly useIpFirewall?: boolean | cdktf.IResolvable;
  /**
  * Send bridged un-encrypted PPPoE traffic to also be processed by IP/Firewall. This property only has effect when use-ip-firewall is set to yes. This property is required in case you want to assign Simple Queues or global Queue Tree to PPPoE traffic in a bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#use_ip_firewall_for_pppoe InterfaceBridgeSettings#use_ip_firewall_for_pppoe}
  */
  readonly useIpFirewallForPppoe?: boolean | cdktf.IResolvable;
  /**
  * Send bridged VLAN traffic to also be processed by IP/Firewall. This property only has effect when use-ip-firewall is set to yes. This property is required in case you want to assign Simple Queues or global Queue Tree to VLAN traffic in a bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#use_ip_firewall_for_vlan InterfaceBridgeSettings#use_ip_firewall_for_vlan}
  */
  readonly useIpFirewallForVlan?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings routeros_interface_bridge_settings}
*/
export class InterfaceBridgeSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_bridge_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceBridgeSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceBridgeSettings to import
  * @param importFromId The id of the existing InterfaceBridgeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceBridgeSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_bridge_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_settings routeros_interface_bridge_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceBridgeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceBridgeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_bridge_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowFastPath = config.allowFastPath;
    this._id = config.id;
    this._useIpFirewall = config.useIpFirewall;
    this._useIpFirewallForPppoe = config.useIpFirewallForPppoe;
    this._useIpFirewallForVlan = config.useIpFirewallForVlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allow_fast_path - computed: false, optional: true, required: false
  private _allowFastPath?: boolean | cdktf.IResolvable; 
  public get allowFastPath() {
    return this.getBooleanAttribute('allow_fast_path');
  }
  public set allowFastPath(value: boolean | cdktf.IResolvable) {
    this._allowFastPath = value;
  }
  public resetAllowFastPath() {
    this._allowFastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFastPathInput() {
    return this._allowFastPath;
  }

  // bridge_fast_forward_bytes - computed: true, optional: false, required: false
  public get bridgeFastForwardBytes() {
    return this.getNumberAttribute('bridge_fast_forward_bytes');
  }

  // bridge_fast_forward_packets - computed: true, optional: false, required: false
  public get bridgeFastForwardPackets() {
    return this.getNumberAttribute('bridge_fast_forward_packets');
  }

  // bridge_fast_path_active - computed: true, optional: false, required: false
  public get bridgeFastPathActive() {
    return this.getBooleanAttribute('bridge_fast_path_active');
  }

  // bridge_fast_path_bytes - computed: true, optional: false, required: false
  public get bridgeFastPathBytes() {
    return this.getNumberAttribute('bridge_fast_path_bytes');
  }

  // bridge_fast_path_packets - computed: true, optional: false, required: false
  public get bridgeFastPathPackets() {
    return this.getNumberAttribute('bridge_fast_path_packets');
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

  // use_ip_firewall - computed: false, optional: true, required: false
  private _useIpFirewall?: boolean | cdktf.IResolvable; 
  public get useIpFirewall() {
    return this.getBooleanAttribute('use_ip_firewall');
  }
  public set useIpFirewall(value: boolean | cdktf.IResolvable) {
    this._useIpFirewall = value;
  }
  public resetUseIpFirewall() {
    this._useIpFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpFirewallInput() {
    return this._useIpFirewall;
  }

  // use_ip_firewall_for_pppoe - computed: false, optional: true, required: false
  private _useIpFirewallForPppoe?: boolean | cdktf.IResolvable; 
  public get useIpFirewallForPppoe() {
    return this.getBooleanAttribute('use_ip_firewall_for_pppoe');
  }
  public set useIpFirewallForPppoe(value: boolean | cdktf.IResolvable) {
    this._useIpFirewallForPppoe = value;
  }
  public resetUseIpFirewallForPppoe() {
    this._useIpFirewallForPppoe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpFirewallForPppoeInput() {
    return this._useIpFirewallForPppoe;
  }

  // use_ip_firewall_for_vlan - computed: false, optional: true, required: false
  private _useIpFirewallForVlan?: boolean | cdktf.IResolvable; 
  public get useIpFirewallForVlan() {
    return this.getBooleanAttribute('use_ip_firewall_for_vlan');
  }
  public set useIpFirewallForVlan(value: boolean | cdktf.IResolvable) {
    this._useIpFirewallForVlan = value;
  }
  public resetUseIpFirewallForVlan() {
    this._useIpFirewallForVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpFirewallForVlanInput() {
    return this._useIpFirewallForVlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_fast_path: cdktf.booleanToTerraform(this._allowFastPath),
      id: cdktf.stringToTerraform(this._id),
      use_ip_firewall: cdktf.booleanToTerraform(this._useIpFirewall),
      use_ip_firewall_for_pppoe: cdktf.booleanToTerraform(this._useIpFirewallForPppoe),
      use_ip_firewall_for_vlan: cdktf.booleanToTerraform(this._useIpFirewallForVlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_fast_path: {
        value: cdktf.booleanToHclTerraform(this._allowFastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ip_firewall: {
        value: cdktf.booleanToHclTerraform(this._useIpFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ip_firewall_for_pppoe: {
        value: cdktf.booleanToHclTerraform(this._useIpFirewallForPppoe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ip_firewall_for_vlan: {
        value: cdktf.booleanToHclTerraform(this._useIpFirewallForVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
