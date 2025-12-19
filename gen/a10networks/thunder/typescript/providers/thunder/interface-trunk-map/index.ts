// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceTrunkMapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#id InterfaceTrunkMapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#ifnum InterfaceTrunkMapA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#inside InterfaceTrunkMapA#inside}
  */
  readonly inside?: number;
  /**
  * Configure MAP inside interface (connected to MAP domains)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#map_t_inside InterfaceTrunkMapA#map_t_inside}
  */
  readonly mapTInside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#map_t_outside InterfaceTrunkMapA#map_t_outside}
  */
  readonly mapTOutside?: number;
  /**
  * Configure MAP outside interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#outside InterfaceTrunkMapA#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#uuid InterfaceTrunkMapA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map thunder_interface_trunk_map}
*/
export class InterfaceTrunkMapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_trunk_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceTrunkMapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceTrunkMapA to import
  * @param importFromId The id of the existing InterfaceTrunkMapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceTrunkMapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_trunk_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_trunk_map thunder_interface_trunk_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceTrunkMapAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceTrunkMapAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_trunk_map',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ifnum = config.ifnum;
    this._inside = config.inside;
    this._mapTInside = config.mapTInside;
    this._mapTOutside = config.mapTOutside;
    this._outside = config.outside;
    this._uuid = config.uuid;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // map_t_inside - computed: false, optional: true, required: false
  private _mapTInside?: number; 
  public get mapTInside() {
    return this.getNumberAttribute('map_t_inside');
  }
  public set mapTInside(value: number) {
    this._mapTInside = value;
  }
  public resetMapTInside() {
    this._mapTInside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTInsideInput() {
    return this._mapTInside;
  }

  // map_t_outside - computed: false, optional: true, required: false
  private _mapTOutside?: number; 
  public get mapTOutside() {
    return this.getNumberAttribute('map_t_outside');
  }
  public set mapTOutside(value: number) {
    this._mapTOutside = value;
  }
  public resetMapTOutside() {
    this._mapTOutside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTOutsideInput() {
    return this._mapTOutside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      inside: cdktf.numberToTerraform(this._inside),
      map_t_inside: cdktf.numberToTerraform(this._mapTInside),
      map_t_outside: cdktf.numberToTerraform(this._mapTOutside),
      outside: cdktf.numberToTerraform(this._outside),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside: {
        value: cdktf.numberToHclTerraform(this._inside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map_t_inside: {
        value: cdktf.numberToHclTerraform(this._mapTInside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map_t_outside: {
        value: cdktf.numberToHclTerraform(this._mapTOutside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outside: {
        value: cdktf.numberToHclTerraform(this._outside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
