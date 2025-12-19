// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AxdebugCaptureAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Print basic packet information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#brief AxdebugCaptureA#brief}
  */
  readonly brief?: number;
  /**
  * Only for current-slot of chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#current_slot AxdebugCaptureA#current_slot}
  */
  readonly currentSlot?: number;
  /**
  * Include packet payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#detail AxdebugCaptureA#detail}
  */
  readonly detail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#id AxdebugCaptureA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Non-stop execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#no_stop AxdebugCaptureA#no_stop}
  */
  readonly noStop?: number;
  /**
  * Save packets into file (Specify filename to save packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#save AxdebugCaptureA#save}
  */
  readonly save?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture thunder_axdebug_capture}
*/
export class AxdebugCaptureA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_axdebug_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AxdebugCaptureA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AxdebugCaptureA to import
  * @param importFromId The id of the existing AxdebugCaptureA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AxdebugCaptureA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_axdebug_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/axdebug_capture thunder_axdebug_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AxdebugCaptureAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AxdebugCaptureAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_axdebug_capture',
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
    this._brief = config.brief;
    this._currentSlot = config.currentSlot;
    this._detail = config.detail;
    this._id = config.id;
    this._noStop = config.noStop;
    this._save = config.save;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brief - computed: false, optional: true, required: false
  private _brief?: number; 
  public get brief() {
    return this.getNumberAttribute('brief');
  }
  public set brief(value: number) {
    this._brief = value;
  }
  public resetBrief() {
    this._brief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefInput() {
    return this._brief;
  }

  // current_slot - computed: false, optional: true, required: false
  private _currentSlot?: number; 
  public get currentSlot() {
    return this.getNumberAttribute('current_slot');
  }
  public set currentSlot(value: number) {
    this._currentSlot = value;
  }
  public resetCurrentSlot() {
    this._currentSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSlotInput() {
    return this._currentSlot;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: number; 
  public get detail() {
    return this.getNumberAttribute('detail');
  }
  public set detail(value: number) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
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

  // no_stop - computed: false, optional: true, required: false
  private _noStop?: number; 
  public get noStop() {
    return this.getNumberAttribute('no_stop');
  }
  public set noStop(value: number) {
    this._noStop = value;
  }
  public resetNoStop() {
    this._noStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStopInput() {
    return this._noStop;
  }

  // save - computed: false, optional: true, required: false
  private _save?: string; 
  public get save() {
    return this.getStringAttribute('save');
  }
  public set save(value: string) {
    this._save = value;
  }
  public resetSave() {
    this._save = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brief: cdktf.numberToTerraform(this._brief),
      current_slot: cdktf.numberToTerraform(this._currentSlot),
      detail: cdktf.numberToTerraform(this._detail),
      id: cdktf.stringToTerraform(this._id),
      no_stop: cdktf.numberToTerraform(this._noStop),
      save: cdktf.stringToTerraform(this._save),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brief: {
        value: cdktf.numberToHclTerraform(this._brief),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      current_slot: {
        value: cdktf.numberToHclTerraform(this._currentSlot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detail: {
        value: cdktf.numberToHclTerraform(this._detail),
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
      no_stop: {
        value: cdktf.numberToHclTerraform(this._noStop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      save: {
        value: cdktf.stringToHclTerraform(this._save),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
