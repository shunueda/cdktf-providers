// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtStateNextStateCaseActionTcpOptionsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * CaseNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#case_number SysUtStateNextStateCaseActionTcpOptionsA#case_number}
  */
  readonly caseNumber: string;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#direction SysUtStateNextStateCaseActionTcpOptionsA#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#id SysUtStateNextStateCaseActionTcpOptionsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TCP MSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#mss SysUtStateNextStateCaseActionTcpOptionsA#mss}
  */
  readonly mss?: number;
  /**
  * Next_state_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#next_state_name SysUtStateNextStateCaseActionTcpOptionsA#next_state_name}
  */
  readonly nextStateName: string;
  /**
  * No Op
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#nop SysUtStateNextStateCaseActionTcpOptionsA#nop}
  */
  readonly nop?: number;
  /**
  * 'permitted': permitted; 'block': block;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#sack_type SysUtStateNextStateCaseActionTcpOptionsA#sack_type}
  */
  readonly sackType?: string;
  /**
  * State_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#state_name SysUtStateNextStateCaseActionTcpOptionsA#state_name}
  */
  readonly stateName: string;
  /**
  * adds Time Stamp to options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#time_stamp_enable SysUtStateNextStateCaseActionTcpOptionsA#time_stamp_enable}
  */
  readonly timeStampEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#uuid SysUtStateNextStateCaseActionTcpOptionsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#wscale SysUtStateNextStateCaseActionTcpOptionsA#wscale}
  */
  readonly wscale?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options thunder_sys_ut_state_next_state_case_action_tcp_options}
*/
export class SysUtStateNextStateCaseActionTcpOptionsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_state_next_state_case_action_tcp_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtStateNextStateCaseActionTcpOptionsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtStateNextStateCaseActionTcpOptionsA to import
  * @param importFromId The id of the existing SysUtStateNextStateCaseActionTcpOptionsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtStateNextStateCaseActionTcpOptionsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_state_next_state_case_action_tcp_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_tcp_options thunder_sys_ut_state_next_state_case_action_tcp_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtStateNextStateCaseActionTcpOptionsAConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtStateNextStateCaseActionTcpOptionsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_state_next_state_case_action_tcp_options',
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
    this._caseNumber = config.caseNumber;
    this._direction = config.direction;
    this._id = config.id;
    this._mss = config.mss;
    this._nextStateName = config.nextStateName;
    this._nop = config.nop;
    this._sackType = config.sackType;
    this._stateName = config.stateName;
    this._timeStampEnable = config.timeStampEnable;
    this._uuid = config.uuid;
    this._wscale = config.wscale;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // case_number - computed: false, optional: false, required: true
  private _caseNumber?: string; 
  public get caseNumber() {
    return this.getStringAttribute('case_number');
  }
  public set caseNumber(value: string) {
    this._caseNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseNumberInput() {
    return this._caseNumber;
  }

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

  // next_state_name - computed: false, optional: false, required: true
  private _nextStateName?: string; 
  public get nextStateName() {
    return this.getStringAttribute('next_state_name');
  }
  public set nextStateName(value: string) {
    this._nextStateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStateNameInput() {
    return this._nextStateName;
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

  // state_name - computed: false, optional: false, required: true
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
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
      case_number: cdktf.stringToTerraform(this._caseNumber),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      mss: cdktf.numberToTerraform(this._mss),
      next_state_name: cdktf.stringToTerraform(this._nextStateName),
      nop: cdktf.numberToTerraform(this._nop),
      sack_type: cdktf.stringToTerraform(this._sackType),
      state_name: cdktf.stringToTerraform(this._stateName),
      time_stamp_enable: cdktf.numberToTerraform(this._timeStampEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
      wscale: cdktf.numberToTerraform(this._wscale),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      case_number: {
        value: cdktf.stringToHclTerraform(this._caseNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      next_state_name: {
        value: cdktf.stringToHclTerraform(this._nextStateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      state_name: {
        value: cdktf.stringToHclTerraform(this._stateName),
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
