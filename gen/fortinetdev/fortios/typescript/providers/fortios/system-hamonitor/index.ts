// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHamonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor#id SystemHamonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor#monitor_vlan SystemHamonitor#monitor_vlan}
  */
  readonly monitorVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor#vdomparam SystemHamonitor#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor#vlan_hb_interval SystemHamonitor#vlan_hb_interval}
  */
  readonly vlanHbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor#vlan_hb_lost_threshold SystemHamonitor#vlan_hb_lost_threshold}
  */
  readonly vlanHbLostThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor fortios_system_hamonitor}
*/
export class SystemHamonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_hamonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHamonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHamonitor to import
  * @param importFromId The id of the existing SystemHamonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHamonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_hamonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_hamonitor fortios_system_hamonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHamonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHamonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_hamonitor',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._monitorVlan = config.monitorVlan;
    this._vdomparam = config.vdomparam;
    this._vlanHbInterval = config.vlanHbInterval;
    this._vlanHbLostThreshold = config.vlanHbLostThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitor_vlan - computed: true, optional: true, required: false
  private _monitorVlan?: string; 
  public get monitorVlan() {
    return this.getStringAttribute('monitor_vlan');
  }
  public set monitorVlan(value: string) {
    this._monitorVlan = value;
  }
  public resetMonitorVlan() {
    this._monitorVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorVlanInput() {
    return this._monitorVlan;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vlan_hb_interval - computed: true, optional: true, required: false
  private _vlanHbInterval?: number; 
  public get vlanHbInterval() {
    return this.getNumberAttribute('vlan_hb_interval');
  }
  public set vlanHbInterval(value: number) {
    this._vlanHbInterval = value;
  }
  public resetVlanHbInterval() {
    this._vlanHbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanHbIntervalInput() {
    return this._vlanHbInterval;
  }

  // vlan_hb_lost_threshold - computed: true, optional: true, required: false
  private _vlanHbLostThreshold?: number; 
  public get vlanHbLostThreshold() {
    return this.getNumberAttribute('vlan_hb_lost_threshold');
  }
  public set vlanHbLostThreshold(value: number) {
    this._vlanHbLostThreshold = value;
  }
  public resetVlanHbLostThreshold() {
    this._vlanHbLostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanHbLostThresholdInput() {
    return this._vlanHbLostThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_vlan: cdktf.stringToTerraform(this._monitorVlan),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlan_hb_interval: cdktf.numberToTerraform(this._vlanHbInterval),
      vlan_hb_lost_threshold: cdktf.numberToTerraform(this._vlanHbLostThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_vlan: {
        value: cdktf.stringToHclTerraform(this._monitorVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_hb_interval: {
        value: cdktf.numberToHclTerraform(this._vlanHbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_hb_lost_threshold: {
        value: cdktf.numberToHclTerraform(this._vlanHbLostThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
