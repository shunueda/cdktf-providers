// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugOspfRouteAConfig extends cdktf.TerraformMetaArguments {
  /**
  * External route calculation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#ase DebugOspfRouteA#ase}
  */
  readonly ase?: number;
  /**
  * Inter-Area route calculation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#ia DebugOspfRouteA#ia}
  */
  readonly ia?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#id DebugOspfRouteA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Route installation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#install DebugOspfRouteA#install}
  */
  readonly install?: number;
  /**
  * SPF calculation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#spf DebugOspfRouteA#spf}
  */
  readonly spf?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#uuid DebugOspfRouteA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route thunder_debug_ospf_route}
*/
export class DebugOspfRouteA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ospf_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugOspfRouteA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugOspfRouteA to import
  * @param importFromId The id of the existing DebugOspfRouteA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugOspfRouteA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ospf_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_route thunder_debug_ospf_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugOspfRouteAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugOspfRouteAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ospf_route',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ase = config.ase;
    this._ia = config.ia;
    this._id = config.id;
    this._install = config.install;
    this._spf = config.spf;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ase - computed: false, optional: true, required: false
  private _ase?: number; 
  public get ase() {
    return this.getNumberAttribute('ase');
  }
  public set ase(value: number) {
    this._ase = value;
  }
  public resetAse() {
    this._ase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseInput() {
    return this._ase;
  }

  // ia - computed: false, optional: true, required: false
  private _ia?: number; 
  public get ia() {
    return this.getNumberAttribute('ia');
  }
  public set ia(value: number) {
    this._ia = value;
  }
  public resetIa() {
    this._ia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iaInput() {
    return this._ia;
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

  // install - computed: false, optional: true, required: false
  private _install?: number; 
  public get install() {
    return this.getNumberAttribute('install');
  }
  public set install(value: number) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // spf - computed: false, optional: true, required: false
  private _spf?: number; 
  public get spf() {
    return this.getNumberAttribute('spf');
  }
  public set spf(value: number) {
    this._spf = value;
  }
  public resetSpf() {
    this._spf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInput() {
    return this._spf;
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
      ase: cdktf.numberToTerraform(this._ase),
      ia: cdktf.numberToTerraform(this._ia),
      id: cdktf.stringToTerraform(this._id),
      install: cdktf.numberToTerraform(this._install),
      spf: cdktf.numberToTerraform(this._spf),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ase: {
        value: cdktf.numberToHclTerraform(this._ase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ia: {
        value: cdktf.numberToHclTerraform(this._ia),
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
      install: {
        value: cdktf.numberToHclTerraform(this._install),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf: {
        value: cdktf.numberToHclTerraform(this._spf),
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
