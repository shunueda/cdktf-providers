// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborrange6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#device_name RouterBgpNeighborrange6#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#device_vdom RouterBgpNeighborrange6#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#fosid RouterBgpNeighborrange6#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#id RouterBgpNeighborrange6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#max_neighbor_num RouterBgpNeighborrange6#max_neighbor_num}
  */
  readonly maxNeighborNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#neighbor_group RouterBgpNeighborrange6#neighbor_group}
  */
  readonly neighborGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#prefix6 RouterBgpNeighborrange6#prefix6}
  */
  readonly prefix6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6 fmgdevice_router_bgp_neighborrange6}
*/
export class RouterBgpNeighborrange6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_bgp_neighborrange6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborrange6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborrange6 to import
  * @param importFromId The id of the existing RouterBgpNeighborrange6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborrange6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_bgp_neighborrange6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighborrange6 fmgdevice_router_bgp_neighborrange6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborrange6Config = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborrange6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_bgp_neighborrange6',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._maxNeighborNum = config.maxNeighborNum;
    this._neighborGroup = config.neighborGroup;
    this._prefix6 = config.prefix6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // max_neighbor_num - computed: false, optional: true, required: false
  private _maxNeighborNum?: number; 
  public get maxNeighborNum() {
    return this.getNumberAttribute('max_neighbor_num');
  }
  public set maxNeighborNum(value: number) {
    this._maxNeighborNum = value;
  }
  public resetMaxNeighborNum() {
    this._maxNeighborNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborNumInput() {
    return this._maxNeighborNum;
  }

  // neighbor_group - computed: true, optional: true, required: false
  private _neighborGroup?: string[]; 
  public get neighborGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor_group'));
  }
  public set neighborGroup(value: string[]) {
    this._neighborGroup = value;
  }
  public resetNeighborGroup() {
    this._neighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborGroupInput() {
    return this._neighborGroup;
  }

  // prefix6 - computed: true, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      max_neighbor_num: cdktf.numberToTerraform(this._maxNeighborNum),
      neighbor_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._neighborGroup),
      prefix6: cdktf.stringToTerraform(this._prefix6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      max_neighbor_num: {
        value: cdktf.numberToHclTerraform(this._maxNeighborNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbor_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._neighborGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prefix6: {
        value: cdktf.stringToHclTerraform(this._prefix6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
