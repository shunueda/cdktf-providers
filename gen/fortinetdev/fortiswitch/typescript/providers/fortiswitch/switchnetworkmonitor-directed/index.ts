// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchnetworkmonitorDirectedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed#fswid SwitchnetworkmonitorDirected#fswid}
  */
  readonly fswid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed#id SwitchnetworkmonitorDirected#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed#monitor_mac SwitchnetworkmonitorDirected#monitor_mac}
  */
  readonly monitorMac?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed fortiswitch_switchnetworkmonitor_directed}
*/
export class SwitchnetworkmonitorDirected extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchnetworkmonitor_directed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchnetworkmonitorDirected resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchnetworkmonitorDirected to import
  * @param importFromId The id of the existing SwitchnetworkmonitorDirected that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchnetworkmonitorDirected to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchnetworkmonitor_directed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchnetworkmonitor_directed fortiswitch_switchnetworkmonitor_directed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchnetworkmonitorDirectedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchnetworkmonitorDirectedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchnetworkmonitor_directed',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fswid = config.fswid;
    this._id = config.id;
    this._monitorMac = config.monitorMac;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fswid - computed: true, optional: true, required: false
  private _fswid?: number; 
  public get fswid() {
    return this.getNumberAttribute('fswid');
  }
  public set fswid(value: number) {
    this._fswid = value;
  }
  public resetFswid() {
    this._fswid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
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

  // monitor_mac - computed: true, optional: true, required: false
  private _monitorMac?: string; 
  public get monitorMac() {
    return this.getStringAttribute('monitor_mac');
  }
  public set monitorMac(value: string) {
    this._monitorMac = value;
  }
  public resetMonitorMac() {
    this._monitorMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMacInput() {
    return this._monitorMac;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fswid: cdktf.numberToTerraform(this._fswid),
      id: cdktf.stringToTerraform(this._id),
      monitor_mac: cdktf.stringToTerraform(this._monitorMac),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fswid: {
        value: cdktf.numberToHclTerraform(this._fswid),
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
      monitor_mac: {
        value: cdktf.stringToHclTerraform(this._monitorMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
