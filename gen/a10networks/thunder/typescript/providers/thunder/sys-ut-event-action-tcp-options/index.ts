// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionTcpOptionsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#direction SysUtEventActionTcpOptionsA#direction}
  */
  readonly direction: string;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#event_number SysUtEventActionTcpOptionsA#event_number}
  */
  readonly eventNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#id SysUtEventActionTcpOptionsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TCP MSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#mss SysUtEventActionTcpOptionsA#mss}
  */
  readonly mss?: number;
  /**
  * No Op
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#nop SysUtEventActionTcpOptionsA#nop}
  */
  readonly nop?: number;
  /**
  * 'permitted': permitted; 'block': block;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#sack_type SysUtEventActionTcpOptionsA#sack_type}
  */
  readonly sackType?: string;
  /**
  * adds Time Stamp to options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#time_stamp_enable SysUtEventActionTcpOptionsA#time_stamp_enable}
  */
  readonly timeStampEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#uuid SysUtEventActionTcpOptionsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#wscale SysUtEventActionTcpOptionsA#wscale}
  */
  readonly wscale?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options thunder_sys_ut_event_action_tcp_options}
*/
export class SysUtEventActionTcpOptionsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action_tcp_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventActionTcpOptionsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventActionTcpOptionsA to import
  * @param importFromId The id of the existing SysUtEventActionTcpOptionsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventActionTcpOptionsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action_tcp_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_options thunder_sys_ut_event_action_tcp_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionTcpOptionsAConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionTcpOptionsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action_tcp_options',
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
    this._direction = config.direction;
    this._eventNumber = config.eventNumber;
    this._id = config.id;
    this._mss = config.mss;
    this._nop = config.nop;
    this._sackType = config.sackType;
    this._timeStampEnable = config.timeStampEnable;
    this._uuid = config.uuid;
    this._wscale = config.wscale;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // event_number - computed: false, optional: false, required: true
  private _eventNumber?: string; 
  public get eventNumber() {
    return this.getStringAttribute('event_number');
  }
  public set eventNumber(value: string) {
    this._eventNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNumberInput() {
    return this._eventNumber;
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

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // nop - computed: false, optional: true, required: false
  private _nop?: number; 
  public get nop() {
    return this.getNumberAttribute('nop');
  }
  public set nop(value: number) {
    this._nop = value;
  }
  public resetNop() {
    this._nop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nopInput() {
    return this._nop;
  }

  // sack_type - computed: false, optional: true, required: false
  private _sackType?: string; 
  public get sackType() {
    return this.getStringAttribute('sack_type');
  }
  public set sackType(value: string) {
    this._sackType = value;
  }
  public resetSackType() {
    this._sackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sackTypeInput() {
    return this._sackType;
  }

  // time_stamp_enable - computed: false, optional: true, required: false
  private _timeStampEnable?: number; 
  public get timeStampEnable() {
    return this.getNumberAttribute('time_stamp_enable');
  }
  public set timeStampEnable(value: number) {
    this._timeStampEnable = value;
  }
  public resetTimeStampEnable() {
    this._timeStampEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampEnableInput() {
    return this._timeStampEnable;
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

  // wscale - computed: false, optional: true, required: false
  private _wscale?: number; 
  public get wscale() {
    return this.getNumberAttribute('wscale');
  }
  public set wscale(value: number) {
    this._wscale = value;
  }
  public resetWscale() {
    this._wscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wscaleInput() {
    return this._wscale;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      id: cdktf.stringToTerraform(this._id),
      mss: cdktf.numberToTerraform(this._mss),
      nop: cdktf.numberToTerraform(this._nop),
      sack_type: cdktf.stringToTerraform(this._sackType),
      time_stamp_enable: cdktf.numberToTerraform(this._timeStampEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
      wscale: cdktf.numberToTerraform(this._wscale),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_number: {
        value: cdktf.stringToHclTerraform(this._eventNumber),
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
      mss: {
        value: cdktf.numberToHclTerraform(this._mss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nop: {
        value: cdktf.numberToHclTerraform(this._nop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sack_type: {
        value: cdktf.stringToHclTerraform(this._sackType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_stamp_enable: {
        value: cdktf.numberToHclTerraform(this._timeStampEnable),
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
      wscale: {
        value: cdktf.numberToHclTerraform(this._wscale),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
