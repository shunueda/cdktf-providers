// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtStateNextStateCaseActionUdpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * CaseNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#case_number SysUtStateNextStateCaseActionUdpA#case_number}
  */
  readonly caseNumber: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#checksum SysUtStateNextStateCaseActionUdpA#checksum}
  */
  readonly checksum?: string;
  /**
  * Dest port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#dest_port SysUtStateNextStateCaseActionUdpA#dest_port}
  */
  readonly destPort?: number;
  /**
  * Dest port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#dest_port_value SysUtStateNextStateCaseActionUdpA#dest_port_value}
  */
  readonly destPortValue?: number;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#direction SysUtStateNextStateCaseActionUdpA#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#id SysUtStateNextStateCaseActionUdpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total packet length starting at UDP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#length SysUtStateNextStateCaseActionUdpA#length}
  */
  readonly length?: number;
  /**
  * Nat pool port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#nat_pool SysUtStateNextStateCaseActionUdpA#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Next_state_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#next_state_name SysUtStateNextStateCaseActionUdpA#next_state_name}
  */
  readonly nextStateName: string;
  /**
  * Source port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#src_port SysUtStateNextStateCaseActionUdpA#src_port}
  */
  readonly srcPort?: number;
  /**
  * State_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#state_name SysUtStateNextStateCaseActionUdpA#state_name}
  */
  readonly stateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#uuid SysUtStateNextStateCaseActionUdpA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp thunder_sys_ut_state_next_state_case_action_udp}
*/
export class SysUtStateNextStateCaseActionUdpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_state_next_state_case_action_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtStateNextStateCaseActionUdpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtStateNextStateCaseActionUdpA to import
  * @param importFromId The id of the existing SysUtStateNextStateCaseActionUdpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtStateNextStateCaseActionUdpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_state_next_state_case_action_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_udp thunder_sys_ut_state_next_state_case_action_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtStateNextStateCaseActionUdpAConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtStateNextStateCaseActionUdpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_state_next_state_case_action_udp',
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
    this._checksum = config.checksum;
    this._destPort = config.destPort;
    this._destPortValue = config.destPortValue;
    this._direction = config.direction;
    this._id = config.id;
    this._length = config.length;
    this._natPool = config.natPool;
    this._nextStateName = config.nextStateName;
    this._srcPort = config.srcPort;
    this._stateName = config.stateName;
    this._uuid = config.uuid;
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

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_port_value - computed: false, optional: true, required: false
  private _destPortValue?: number; 
  public get destPortValue() {
    return this.getNumberAttribute('dest_port_value');
  }
  public set destPortValue(value: number) {
    this._destPortValue = value;
  }
  public resetDestPortValue() {
    this._destPortValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortValueInput() {
    return this._destPortValue;
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

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
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

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
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
      case_number: cdktf.stringToTerraform(this._caseNumber),
      checksum: cdktf.stringToTerraform(this._checksum),
      dest_port: cdktf.numberToTerraform(this._destPort),
      dest_port_value: cdktf.numberToTerraform(this._destPortValue),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      length: cdktf.numberToTerraform(this._length),
      nat_pool: cdktf.stringToTerraform(this._natPool),
      next_state_name: cdktf.stringToTerraform(this._nextStateName),
      src_port: cdktf.numberToTerraform(this._srcPort),
      state_name: cdktf.stringToTerraform(this._stateName),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      checksum: {
        value: cdktf.stringToHclTerraform(this._checksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port: {
        value: cdktf.numberToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dest_port_value: {
        value: cdktf.numberToHclTerraform(this._destPortValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_pool: {
        value: cdktf.stringToHclTerraform(this._natPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_state_name: {
        value: cdktf.stringToHclTerraform(this._nextStateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.numberToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state_name: {
        value: cdktf.stringToHclTerraform(this._stateName),
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
