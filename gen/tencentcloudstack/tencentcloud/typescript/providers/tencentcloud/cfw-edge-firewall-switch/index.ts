// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwEdgeFirewallSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Switch, 0: off, 1: on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch#enable CfwEdgeFirewallSwitch#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch#id CfwEdgeFirewallSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Public Ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch#public_ip CfwEdgeFirewallSwitch#public_ip}
  */
  readonly publicIp: string;
  /**
  * The first EIP switch in the vpc is turned on, and you need to specify a subnet to create a private connection. If `switch_mode` is 1 and `enable` is 1, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch#subnet_id CfwEdgeFirewallSwitch#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * 0: bypass; 1: serial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch#switch_mode CfwEdgeFirewallSwitch#switch_mode}
  */
  readonly switchMode: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch tencentcloud_cfw_edge_firewall_switch}
*/
export class CfwEdgeFirewallSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_edge_firewall_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwEdgeFirewallSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwEdgeFirewallSwitch to import
  * @param importFromId The id of the existing CfwEdgeFirewallSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwEdgeFirewallSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_edge_firewall_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_edge_firewall_switch tencentcloud_cfw_edge_firewall_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwEdgeFirewallSwitchConfig
  */
  public constructor(scope: Construct, id: string, config: CfwEdgeFirewallSwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_edge_firewall_switch',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._publicIp = config.publicIp;
    this._subnetId = config.subnetId;
    this._switchMode = config.switchMode;
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

  // public_ip - computed: false, optional: false, required: true
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // switch_mode - computed: false, optional: false, required: true
  private _switchMode?: number; 
  public get switchMode() {
    return this.getNumberAttribute('switch_mode');
  }
  public set switchMode(value: number) {
    this._switchMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchModeInput() {
    return this._switchMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      switch_mode: cdktf.numberToTerraform(this._switchMode),
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
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_mode: {
        value: cdktf.numberToHclTerraform(this._switchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
