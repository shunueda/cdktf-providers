// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureAutomatedCapturesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures#id VisibilityPacketCaptureAutomatedCapturesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trigger capture when there is 3xx or 4xx or 5xx responses from server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures#slb_port_tmpl_error_code_return_inc VisibilityPacketCaptureAutomatedCapturesA#slb_port_tmpl_error_code_return_inc}
  */
  readonly slbPortTmplErrorCodeReturnInc?: number;
  /**
  * Trigger capture when there is high number of 3xx or 4xx or 5xx responses from server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures#slb_port_tmpl_high_error_code_return VisibilityPacketCaptureAutomatedCapturesA#slb_port_tmpl_high_error_code_return}
  */
  readonly slbPortTmplHighErrorCodeReturn?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures#uuid VisibilityPacketCaptureAutomatedCapturesA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures thunder_visibility_packet_capture_automated_captures}
*/
export class VisibilityPacketCaptureAutomatedCapturesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_automated_captures";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureAutomatedCapturesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureAutomatedCapturesA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureAutomatedCapturesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureAutomatedCapturesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_automated_captures", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_automated_captures thunder_visibility_packet_capture_automated_captures} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureAutomatedCapturesAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureAutomatedCapturesAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_automated_captures',
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
    this._id = config.id;
    this._slbPortTmplErrorCodeReturnInc = config.slbPortTmplErrorCodeReturnInc;
    this._slbPortTmplHighErrorCodeReturn = config.slbPortTmplHighErrorCodeReturn;
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

  // slb_port_tmpl_error_code_return_inc - computed: false, optional: true, required: false
  private _slbPortTmplErrorCodeReturnInc?: number; 
  public get slbPortTmplErrorCodeReturnInc() {
    return this.getNumberAttribute('slb_port_tmpl_error_code_return_inc');
  }
  public set slbPortTmplErrorCodeReturnInc(value: number) {
    this._slbPortTmplErrorCodeReturnInc = value;
  }
  public resetSlbPortTmplErrorCodeReturnInc() {
    this._slbPortTmplErrorCodeReturnInc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbPortTmplErrorCodeReturnIncInput() {
    return this._slbPortTmplErrorCodeReturnInc;
  }

  // slb_port_tmpl_high_error_code_return - computed: false, optional: true, required: false
  private _slbPortTmplHighErrorCodeReturn?: number; 
  public get slbPortTmplHighErrorCodeReturn() {
    return this.getNumberAttribute('slb_port_tmpl_high_error_code_return');
  }
  public set slbPortTmplHighErrorCodeReturn(value: number) {
    this._slbPortTmplHighErrorCodeReturn = value;
  }
  public resetSlbPortTmplHighErrorCodeReturn() {
    this._slbPortTmplHighErrorCodeReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbPortTmplHighErrorCodeReturnInput() {
    return this._slbPortTmplHighErrorCodeReturn;
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
      slb_port_tmpl_error_code_return_inc: cdktf.numberToTerraform(this._slbPortTmplErrorCodeReturnInc),
      slb_port_tmpl_high_error_code_return: cdktf.numberToTerraform(this._slbPortTmplHighErrorCodeReturn),
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
      slb_port_tmpl_error_code_return_inc: {
        value: cdktf.numberToHclTerraform(this._slbPortTmplErrorCodeReturnInc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_port_tmpl_high_error_code_return: {
        value: cdktf.numberToHclTerraform(this._slbPortTmplHighErrorCodeReturn),
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
