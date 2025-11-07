// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerIgmpsnoopingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping#aging_time SwitchcontrollerIgmpsnooping#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping#flood_unknown_multicast SwitchcontrollerIgmpsnooping#flood_unknown_multicast}
  */
  readonly floodUnknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping#id SwitchcontrollerIgmpsnooping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping#query_interval SwitchcontrollerIgmpsnooping#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping#vdomparam SwitchcontrollerIgmpsnooping#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping fortios_switchcontroller_igmpsnooping}
*/
export class SwitchcontrollerIgmpsnooping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_igmpsnooping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerIgmpsnooping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerIgmpsnooping to import
  * @param importFromId The id of the existing SwitchcontrollerIgmpsnooping that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerIgmpsnooping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_igmpsnooping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_igmpsnooping fortios_switchcontroller_igmpsnooping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerIgmpsnoopingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerIgmpsnoopingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_igmpsnooping',
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
    this._agingTime = config.agingTime;
    this._floodUnknownMulticast = config.floodUnknownMulticast;
    this._id = config.id;
    this._queryInterval = config.queryInterval;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging_time - computed: true, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
  }

  // flood_unknown_multicast - computed: true, optional: true, required: false
  private _floodUnknownMulticast?: string; 
  public get floodUnknownMulticast() {
    return this.getStringAttribute('flood_unknown_multicast');
  }
  public set floodUnknownMulticast(value: string) {
    this._floodUnknownMulticast = value;
  }
  public resetFloodUnknownMulticast() {
    this._floodUnknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodUnknownMulticastInput() {
    return this._floodUnknownMulticast;
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

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aging_time: cdktf.numberToTerraform(this._agingTime),
      flood_unknown_multicast: cdktf.stringToTerraform(this._floodUnknownMulticast),
      id: cdktf.stringToTerraform(this._id),
      query_interval: cdktf.numberToTerraform(this._queryInterval),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flood_unknown_multicast: {
        value: cdktf.stringToHclTerraform(this._floodUnknownMulticast),
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
      query_interval: {
        value: cdktf.numberToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
