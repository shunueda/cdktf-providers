// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRoutingMulticastRendezvousPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address of the interface where the RP needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point#interface_ip SwitchRoutingMulticastRendezvousPoint#interface_ip}
  */
  readonly interfaceIp: string;
  /**
  * `Any`, or the IP address of a multicast group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point#multicast_group SwitchRoutingMulticastRendezvousPoint#multicast_group}
  */
  readonly multicastGroup: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point#network_id SwitchRoutingMulticastRendezvousPoint#network_id}
  */
  readonly networkId: string;
  /**
  * The name of the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point#vrf_name SwitchRoutingMulticastRendezvousPoint#vrf_name}
  */
  readonly vrfName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point meraki_switch_routing_multicast_rendezvous_point}
*/
export class SwitchRoutingMulticastRendezvousPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_multicast_rendezvous_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRoutingMulticastRendezvousPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRoutingMulticastRendezvousPoint to import
  * @param importFromId The id of the existing SwitchRoutingMulticastRendezvousPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRoutingMulticastRendezvousPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_multicast_rendezvous_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_point meraki_switch_routing_multicast_rendezvous_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRoutingMulticastRendezvousPointConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchRoutingMulticastRendezvousPointConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_multicast_rendezvous_point',
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
    this._interfaceIp = config.interfaceIp;
    this._multicastGroup = config.multicastGroup;
    this._networkId = config.networkId;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_ip - computed: false, optional: false, required: true
  private _interfaceIp?: string; 
  public get interfaceIp() {
    return this.getStringAttribute('interface_ip');
  }
  public set interfaceIp(value: string) {
    this._interfaceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpInput() {
    return this._interfaceIp;
  }

  // multicast_group - computed: false, optional: false, required: true
  private _multicastGroup?: string; 
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }
  public set multicastGroup(value: string) {
    this._multicastGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupInput() {
    return this._multicastGroup;
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

  // vrf_name - computed: false, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      interface_ip: cdktf.stringToTerraform(this._interfaceIp),
      multicast_group: cdktf.stringToTerraform(this._multicastGroup),
      network_id: cdktf.stringToTerraform(this._networkId),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      interface_ip: {
        value: cdktf.stringToHclTerraform(this._interfaceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_group: {
        value: cdktf.stringToHclTerraform(this._multicastGroup),
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
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
