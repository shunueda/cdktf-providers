// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborConditionaladvertise6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#advertise_routemap RouterBgpNeighborConditionaladvertise6#advertise_routemap}
  */
  readonly advertiseRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#condition_routemap RouterBgpNeighborConditionaladvertise6#condition_routemap}
  */
  readonly conditionRoutemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#condition_type RouterBgpNeighborConditionaladvertise6#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#device_name RouterBgpNeighborConditionaladvertise6#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#device_vdom RouterBgpNeighborConditionaladvertise6#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#id RouterBgpNeighborConditionaladvertise6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#neighbor RouterBgpNeighborConditionaladvertise6#neighbor}
  */
  readonly neighbor: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6 fmgdevice_router_bgp_neighbor_conditionaladvertise6}
*/
export class RouterBgpNeighborConditionaladvertise6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_bgp_neighbor_conditionaladvertise6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborConditionaladvertise6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborConditionaladvertise6 to import
  * @param importFromId The id of the existing RouterBgpNeighborConditionaladvertise6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborConditionaladvertise6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_bgp_neighbor_conditionaladvertise6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_neighbor_conditionaladvertise6 fmgdevice_router_bgp_neighbor_conditionaladvertise6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborConditionaladvertise6Config
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborConditionaladvertise6Config) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_bgp_neighbor_conditionaladvertise6',
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
    this._advertiseRoutemap = config.advertiseRoutemap;
    this._conditionRoutemap = config.conditionRoutemap;
    this._conditionType = config.conditionType;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._neighbor = config.neighbor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_routemap - computed: false, optional: true, required: false
  private _advertiseRoutemap?: string; 
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }
  public set advertiseRoutemap(value: string) {
    this._advertiseRoutemap = value;
  }
  public resetAdvertiseRoutemap() {
    this._advertiseRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseRoutemapInput() {
    return this._advertiseRoutemap;
  }

  // condition_routemap - computed: true, optional: true, required: false
  private _conditionRoutemap?: string[]; 
  public get conditionRoutemap() {
    return cdktf.Fn.tolist(this.getListAttribute('condition_routemap'));
  }
  public set conditionRoutemap(value: string[]) {
    this._conditionRoutemap = value;
  }
  public resetConditionRoutemap() {
    this._conditionRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionRoutemapInput() {
    return this._conditionRoutemap;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

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

  // neighbor - computed: false, optional: false, required: true
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_routemap: cdktf.stringToTerraform(this._advertiseRoutemap),
      condition_routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conditionRoutemap),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      neighbor: cdktf.stringToTerraform(this._neighbor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_routemap: {
        value: cdktf.stringToHclTerraform(this._advertiseRoutemap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_routemap: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._conditionRoutemap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor: {
        value: cdktf.stringToHclTerraform(this._neighbor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
