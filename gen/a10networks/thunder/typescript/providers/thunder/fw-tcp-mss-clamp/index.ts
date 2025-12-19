// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwTcpMssClampConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#id FwTcpMssClamp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the min value allowed for the TCP MSS (Specify the min value allowed for the TCP MSS (default: ((576 - 60 - 60))))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#min FwTcpMssClamp#min}
  */
  readonly min?: number;
  /**
  * 'fixed': Specify a fixed max value for the TCP MSS; 'subtract': Specify the value to subtract from the TCP MSS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#mss_clamp_type FwTcpMssClamp#mss_clamp_type}
  */
  readonly mssClampType?: string;
  /**
  * Specify the value to subtract from the TCP MSS (default: not configured)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#mss_subtract FwTcpMssClamp#mss_subtract}
  */
  readonly mssSubtract?: number;
  /**
  * The max value allowed for the TCP MSS (default: not configured)}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#mss_value FwTcpMssClamp#mss_value}
  */
  readonly mssValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#uuid FwTcpMssClamp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp thunder_fw_tcp_mss_clamp}
*/
export class FwTcpMssClamp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_tcp_mss_clamp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwTcpMssClamp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwTcpMssClamp to import
  * @param importFromId The id of the existing FwTcpMssClamp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwTcpMssClamp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_tcp_mss_clamp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_tcp_mss_clamp thunder_fw_tcp_mss_clamp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwTcpMssClampConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwTcpMssClampConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_tcp_mss_clamp',
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
    this._min = config.min;
    this._mssClampType = config.mssClampType;
    this._mssSubtract = config.mssSubtract;
    this._mssValue = config.mssValue;
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

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // mss_clamp_type - computed: false, optional: true, required: false
  private _mssClampType?: string; 
  public get mssClampType() {
    return this.getStringAttribute('mss_clamp_type');
  }
  public set mssClampType(value: string) {
    this._mssClampType = value;
  }
  public resetMssClampType() {
    this._mssClampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssClampTypeInput() {
    return this._mssClampType;
  }

  // mss_subtract - computed: false, optional: true, required: false
  private _mssSubtract?: number; 
  public get mssSubtract() {
    return this.getNumberAttribute('mss_subtract');
  }
  public set mssSubtract(value: number) {
    this._mssSubtract = value;
  }
  public resetMssSubtract() {
    this._mssSubtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssSubtractInput() {
    return this._mssSubtract;
  }

  // mss_value - computed: false, optional: true, required: false
  private _mssValue?: number; 
  public get mssValue() {
    return this.getNumberAttribute('mss_value');
  }
  public set mssValue(value: number) {
    this._mssValue = value;
  }
  public resetMssValue() {
    this._mssValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssValueInput() {
    return this._mssValue;
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
      min: cdktf.numberToTerraform(this._min),
      mss_clamp_type: cdktf.stringToTerraform(this._mssClampType),
      mss_subtract: cdktf.numberToTerraform(this._mssSubtract),
      mss_value: cdktf.numberToTerraform(this._mssValue),
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
      min: {
        value: cdktf.numberToHclTerraform(this._min),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss_clamp_type: {
        value: cdktf.stringToHclTerraform(this._mssClampType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mss_subtract: {
        value: cdktf.numberToHclTerraform(this._mssSubtract),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss_value: {
        value: cdktf.numberToHclTerraform(this._mssValue),
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
