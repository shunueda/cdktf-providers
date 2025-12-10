// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwVpcFirewallSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Turn the switch on or off. 0: turn off the switch; 1: Turn on the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch#enable CfwVpcFirewallSwitch#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch#id CfwVpcFirewallSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Firewall switch ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch#switch_id CfwVpcFirewallSwitch#switch_id}
  */
  readonly switchId: string;
  /**
  * Firewall instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch#vpc_ins_id CfwVpcFirewallSwitch#vpc_ins_id}
  */
  readonly vpcInsId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch tencentcloud_cfw_vpc_firewall_switch}
*/
export class CfwVpcFirewallSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_vpc_firewall_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwVpcFirewallSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwVpcFirewallSwitch to import
  * @param importFromId The id of the existing CfwVpcFirewallSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwVpcFirewallSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_vpc_firewall_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cfw_vpc_firewall_switch tencentcloud_cfw_vpc_firewall_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwVpcFirewallSwitchConfig
  */
  public constructor(scope: Construct, id: string, config: CfwVpcFirewallSwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_vpc_firewall_switch',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._switchId = config.switchId;
    this._vpcInsId = config.vpcInsId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // switch_id - computed: false, optional: false, required: true
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // vpc_ins_id - computed: false, optional: false, required: true
  private _vpcInsId?: string; 
  public get vpcInsId() {
    return this.getStringAttribute('vpc_ins_id');
  }
  public set vpcInsId(value: string) {
    this._vpcInsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInsIdInput() {
    return this._vpcInsId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      switch_id: cdktf.stringToTerraform(this._switchId),
      vpc_ins_id: cdktf.stringToTerraform(this._vpcInsId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_id: {
        value: cdktf.stringToHclTerraform(this._switchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_ins_id: {
        value: cdktf.stringToHclTerraform(this._vpcInsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
