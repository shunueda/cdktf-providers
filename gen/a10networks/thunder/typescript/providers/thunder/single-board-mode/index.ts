// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SingleBoardModeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Run the chasis in single board mode if no communication with the blade board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode#fallback SingleBoardMode#fallback}
  */
  readonly fallback?: number;
  /**
  * Run the chasis in single board mode only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode#forced SingleBoardMode#forced}
  */
  readonly forced?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode#id SingleBoardMode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode#uuid SingleBoardMode#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode thunder_single_board_mode}
*/
export class SingleBoardMode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_single_board_mode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SingleBoardMode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SingleBoardMode to import
  * @param importFromId The id of the existing SingleBoardMode that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SingleBoardMode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_single_board_mode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/single_board_mode thunder_single_board_mode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SingleBoardModeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SingleBoardModeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_single_board_mode',
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
    this._fallback = config.fallback;
    this._forced = config.forced;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fallback - computed: false, optional: true, required: false
  private _fallback?: number; 
  public get fallback() {
    return this.getNumberAttribute('fallback');
  }
  public set fallback(value: number) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // forced - computed: false, optional: true, required: false
  private _forced?: number; 
  public get forced() {
    return this.getNumberAttribute('forced');
  }
  public set forced(value: number) {
    this._forced = value;
  }
  public resetForced() {
    this._forced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedInput() {
    return this._forced;
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
      fallback: cdktf.numberToTerraform(this._fallback),
      forced: cdktf.numberToTerraform(this._forced),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fallback: {
        value: cdktf.numberToHclTerraform(this._fallback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forced: {
        value: cdktf.numberToHclTerraform(this._forced),
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
