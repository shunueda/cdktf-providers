// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Port ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port#port_id DataMerakiSwitchPort#port_id}
  */
  readonly portId: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port#serial DataMerakiSwitchPort#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port meraki_switch_port}
*/
export class DataMerakiSwitchPort extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchPort to import
  * @param importFromId The id of the existing DataMerakiSwitchPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_port meraki_switch_port} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchPortConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchPortConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_port',
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
    this._portId = config.portId;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_number - computed: true, optional: false, required: false
  public get accessPolicyNumber() {
    return this.getNumberAttribute('access_policy_number');
  }

  // access_policy_type - computed: true, optional: false, required: false
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }

  // adaptive_policy_group_id - computed: true, optional: false, required: false
  public get adaptivePolicyGroupId() {
    return this.getStringAttribute('adaptive_policy_group_id');
  }

  // allowed_vlans - computed: true, optional: false, required: false
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }

  // dai_trusted - computed: true, optional: false, required: false
  public get daiTrusted() {
    return this.getBooleanAttribute('dai_trusted');
  }

  // dot3az_enabled - computed: true, optional: false, required: false
  public get dot3AzEnabled() {
    return this.getBooleanAttribute('dot3az_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // flexible_stacking_enabled - computed: true, optional: false, required: false
  public get flexibleStackingEnabled() {
    return this.getBooleanAttribute('flexible_stacking_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // isolation_enabled - computed: true, optional: false, required: false
  public get isolationEnabled() {
    return this.getBooleanAttribute('isolation_enabled');
  }

  // link_negotiation - computed: true, optional: false, required: false
  public get linkNegotiation() {
    return this.getStringAttribute('link_negotiation');
  }

  // mac_allow_list - computed: true, optional: false, required: false
  public get macAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('mac_allow_list'));
  }

  // mac_whitelist_limit - computed: true, optional: false, required: false
  public get macWhitelistLimit() {
    return this.getNumberAttribute('mac_whitelist_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_sgt_capable - computed: true, optional: false, required: false
  public get peerSgtCapable() {
    return this.getBooleanAttribute('peer_sgt_capable');
  }

  // poe_enabled - computed: true, optional: false, required: false
  public get poeEnabled() {
    return this.getBooleanAttribute('poe_enabled');
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // port_schedule_id - computed: true, optional: false, required: false
  public get portScheduleId() {
    return this.getStringAttribute('port_schedule_id');
  }

  // profile_enabled - computed: true, optional: false, required: false
  public get profileEnabled() {
    return this.getBooleanAttribute('profile_enabled');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // profile_iname - computed: true, optional: false, required: false
  public get profileIname() {
    return this.getStringAttribute('profile_iname');
  }

  // rstp_enabled - computed: true, optional: false, required: false
  public get rstpEnabled() {
    return this.getBooleanAttribute('rstp_enabled');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // sticky_mac_allow_list - computed: true, optional: false, required: false
  public get stickyMacAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('sticky_mac_allow_list'));
  }

  // sticky_mac_allow_list_limit - computed: true, optional: false, required: false
  public get stickyMacAllowListLimit() {
    return this.getNumberAttribute('sticky_mac_allow_list_limit');
  }

  // storm_control_enabled - computed: true, optional: false, required: false
  public get stormControlEnabled() {
    return this.getBooleanAttribute('storm_control_enabled');
  }

  // stp_guard - computed: true, optional: false, required: false
  public get stpGuard() {
    return this.getStringAttribute('stp_guard');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // udld - computed: true, optional: false, required: false
  public get udld() {
    return this.getStringAttribute('udld');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // voice_vlan - computed: true, optional: false, required: false
  public get voiceVlan() {
    return this.getNumberAttribute('voice_vlan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      port_id: cdktf.stringToTerraform(this._portId),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      port_id: {
        value: cdktf.stringToHclTerraform(this._portId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
