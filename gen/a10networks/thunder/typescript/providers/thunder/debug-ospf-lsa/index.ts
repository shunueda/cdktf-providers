// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugOspfLsaAConfig extends cdktf.TerraformMetaArguments {
  /**
  * LSA Flooding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#flooding DebugOspfLsaA#flooding}
  */
  readonly flooding?: number;
  /**
  * LSA Generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#gererate DebugOspfLsaA#gererate}
  */
  readonly gererate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#id DebugOspfLsaA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LSA Installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#install DebugOspfLsaA#install}
  */
  readonly install?: number;
  /**
  * LSA MaxAge processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#maxage DebugOspfLsaA#maxage}
  */
  readonly maxage?: number;
  /**
  * LSA Refreshment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#refresh DebugOspfLsaA#refresh}
  */
  readonly refresh?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#uuid DebugOspfLsaA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa thunder_debug_ospf_lsa}
*/
export class DebugOspfLsaA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ospf_lsa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugOspfLsaA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugOspfLsaA to import
  * @param importFromId The id of the existing DebugOspfLsaA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugOspfLsaA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ospf_lsa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf_lsa thunder_debug_ospf_lsa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugOspfLsaAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugOspfLsaAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ospf_lsa',
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
    this._flooding = config.flooding;
    this._gererate = config.gererate;
    this._id = config.id;
    this._install = config.install;
    this._maxage = config.maxage;
    this._refresh = config.refresh;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flooding - computed: false, optional: true, required: false
  private _flooding?: number; 
  public get flooding() {
    return this.getNumberAttribute('flooding');
  }
  public set flooding(value: number) {
    this._flooding = value;
  }
  public resetFlooding() {
    this._flooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodingInput() {
    return this._flooding;
  }

  // gererate - computed: false, optional: true, required: false
  private _gererate?: number; 
  public get gererate() {
    return this.getNumberAttribute('gererate');
  }
  public set gererate(value: number) {
    this._gererate = value;
  }
  public resetGererate() {
    this._gererate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gererateInput() {
    return this._gererate;
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

  // maxage - computed: false, optional: true, required: false
  private _maxage?: number; 
  public get maxage() {
    return this.getNumberAttribute('maxage');
  }
  public set maxage(value: number) {
    this._maxage = value;
  }
  public resetMaxage() {
    this._maxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxageInput() {
    return this._maxage;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
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
      flooding: cdktf.numberToTerraform(this._flooding),
      gererate: cdktf.numberToTerraform(this._gererate),
      id: cdktf.stringToTerraform(this._id),
      install: cdktf.numberToTerraform(this._install),
      maxage: cdktf.numberToTerraform(this._maxage),
      refresh: cdktf.numberToTerraform(this._refresh),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flooding: {
        value: cdktf.numberToHclTerraform(this._flooding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gererate: {
        value: cdktf.numberToHclTerraform(this._gererate),
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
      maxage: {
        value: cdktf.numberToHclTerraform(this._maxage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
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
