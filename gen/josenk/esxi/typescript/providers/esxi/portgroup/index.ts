// https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forged transmits (true=Accept/false=Reject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#forged_transmits Portgroup#forged_transmits}
  */
  readonly forgedTransmits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#id Portgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC address changes (true=Accept/false=Reject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#mac_changes Portgroup#mac_changes}
  */
  readonly macChanges?: string;
  /**
  * portgroup name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#name Portgroup#name}
  */
  readonly name: string;
  /**
  * Promiscuous mode (true=Accept/false=Reject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#promiscuous_mode Portgroup#promiscuous_mode}
  */
  readonly promiscuousMode?: string;
  /**
  * portgroup vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#vlan Portgroup#vlan}
  */
  readonly vlan?: number;
  /**
  * vswitch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#vswitch Portgroup#vswitch}
  */
  readonly vswitch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup esxi_portgroup}
*/
export class Portgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "esxi_portgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Portgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Portgroup to import
  * @param importFromId The id of the existing Portgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Portgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "esxi_portgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/portgroup esxi_portgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortgroupConfig
  */
  public constructor(scope: Construct, id: string, config: PortgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'esxi_portgroup',
      terraformGeneratorMetadata: {
        providerName: 'esxi',
        providerVersion: '1.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forgedTransmits = config.forgedTransmits;
    this._id = config.id;
    this._macChanges = config.macChanges;
    this._name = config.name;
    this._promiscuousMode = config.promiscuousMode;
    this._vlan = config.vlan;
    this._vswitch = config.vswitch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // forged_transmits - computed: true, optional: true, required: false
  private _forgedTransmits?: string; 
  public get forgedTransmits() {
    return this.getStringAttribute('forged_transmits');
  }
  public set forgedTransmits(value: string) {
    this._forgedTransmits = value;
  }
  public resetForgedTransmits() {
    this._forgedTransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgedTransmitsInput() {
    return this._forgedTransmits;
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

  // mac_changes - computed: true, optional: true, required: false
  private _macChanges?: string; 
  public get macChanges() {
    return this.getStringAttribute('mac_changes');
  }
  public set macChanges(value: string) {
    this._macChanges = value;
  }
  public resetMacChanges() {
    this._macChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macChangesInput() {
    return this._macChanges;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // promiscuous_mode - computed: true, optional: true, required: false
  private _promiscuousMode?: string; 
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }
  public set promiscuousMode(value: string) {
    this._promiscuousMode = value;
  }
  public resetPromiscuousMode() {
    this._promiscuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promiscuousModeInput() {
    return this._promiscuousMode;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vswitch - computed: true, optional: true, required: false
  private _vswitch?: string; 
  public get vswitch() {
    return this.getStringAttribute('vswitch');
  }
  public set vswitch(value: string) {
    this._vswitch = value;
  }
  public resetVswitch() {
    this._vswitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchInput() {
    return this._vswitch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forged_transmits: cdktf.stringToTerraform(this._forgedTransmits),
      id: cdktf.stringToTerraform(this._id),
      mac_changes: cdktf.stringToTerraform(this._macChanges),
      name: cdktf.stringToTerraform(this._name),
      promiscuous_mode: cdktf.stringToTerraform(this._promiscuousMode),
      vlan: cdktf.numberToTerraform(this._vlan),
      vswitch: cdktf.stringToTerraform(this._vswitch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forged_transmits: {
        value: cdktf.stringToHclTerraform(this._forgedTransmits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_changes: {
        value: cdktf.stringToHclTerraform(this._macChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promiscuous_mode: {
        value: cdktf.stringToHclTerraform(this._promiscuousMode),
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
      vswitch: {
        value: cdktf.stringToHclTerraform(this._vswitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
