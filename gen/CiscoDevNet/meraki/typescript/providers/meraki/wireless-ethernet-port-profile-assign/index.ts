// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessEthernetPortProfileAssignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign#network_id WirelessEthernetPortProfileAssign#network_id}
  */
  readonly networkId: string;
  /**
  * AP profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign#profile_id WirelessEthernetPortProfileAssign#profile_id}
  */
  readonly profileId: string;
  /**
  * List of AP serials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign#serials WirelessEthernetPortProfileAssign#serials}
  */
  readonly serials: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign meraki_wireless_ethernet_port_profile_assign}
*/
export class WirelessEthernetPortProfileAssign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ethernet_port_profile_assign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessEthernetPortProfileAssign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessEthernetPortProfileAssign to import
  * @param importFromId The id of the existing WirelessEthernetPortProfileAssign that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessEthernetPortProfileAssign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ethernet_port_profile_assign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ethernet_port_profile_assign meraki_wireless_ethernet_port_profile_assign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessEthernetPortProfileAssignConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessEthernetPortProfileAssignConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ethernet_port_profile_assign',
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
    this._profileId = config.profileId;
    this._serials = config.serials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // serials - computed: false, optional: false, required: true
  private _serials?: string[]; 
  public get serials() {
    return cdktf.Fn.tolist(this.getListAttribute('serials'));
  }
  public set serials(value: string[]) {
    this._serials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialsInput() {
    return this._serials;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      profile_id: cdktf.stringToTerraform(this._profileId),
      serials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serials),
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
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
