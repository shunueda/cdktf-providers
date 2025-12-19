// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionTcpFlagsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#ack SysUtEventActionTcpFlagsA#ack}
  */
  readonly ack?: number;
  /**
  * Cwr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#cwr SysUtEventActionTcpFlagsA#cwr}
  */
  readonly cwr?: number;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#direction SysUtEventActionTcpFlagsA#direction}
  */
  readonly direction: string;
  /**
  * Ece
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#ece SysUtEventActionTcpFlagsA#ece}
  */
  readonly ece?: number;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#event_number SysUtEventActionTcpFlagsA#event_number}
  */
  readonly eventNumber: string;
  /**
  * Fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#fin SysUtEventActionTcpFlagsA#fin}
  */
  readonly fin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#id SysUtEventActionTcpFlagsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Psh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#psh SysUtEventActionTcpFlagsA#psh}
  */
  readonly psh?: number;
  /**
  * Rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#rst SysUtEventActionTcpFlagsA#rst}
  */
  readonly rst?: number;
  /**
  * Syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#syn SysUtEventActionTcpFlagsA#syn}
  */
  readonly syn?: number;
  /**
  * Urg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#urg SysUtEventActionTcpFlagsA#urg}
  */
  readonly urg?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#uuid SysUtEventActionTcpFlagsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags thunder_sys_ut_event_action_tcp_flags}
*/
export class SysUtEventActionTcpFlagsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action_tcp_flags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventActionTcpFlagsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventActionTcpFlagsA to import
  * @param importFromId The id of the existing SysUtEventActionTcpFlagsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventActionTcpFlagsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action_tcp_flags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp_flags thunder_sys_ut_event_action_tcp_flags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionTcpFlagsAConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionTcpFlagsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action_tcp_flags',
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
    this._ack = config.ack;
    this._cwr = config.cwr;
    this._direction = config.direction;
    this._ece = config.ece;
    this._eventNumber = config.eventNumber;
    this._fin = config.fin;
    this._id = config.id;
    this._psh = config.psh;
    this._rst = config.rst;
    this._syn = config.syn;
    this._urg = config.urg;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack - computed: false, optional: true, required: false
  private _ack?: number; 
  public get ack() {
    return this.getNumberAttribute('ack');
  }
  public set ack(value: number) {
    this._ack = value;
  }
  public resetAck() {
    this._ack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInput() {
    return this._ack;
  }

  // cwr - computed: false, optional: true, required: false
  private _cwr?: number; 
  public get cwr() {
    return this.getNumberAttribute('cwr');
  }
  public set cwr(value: number) {
    this._cwr = value;
  }
  public resetCwr() {
    this._cwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cwrInput() {
    return this._cwr;
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

  // ece - computed: false, optional: true, required: false
  private _ece?: number; 
  public get ece() {
    return this.getNumberAttribute('ece');
  }
  public set ece(value: number) {
    this._ece = value;
  }
  public resetEce() {
    this._ece = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eceInput() {
    return this._ece;
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

  // fin - computed: false, optional: true, required: false
  private _fin?: number; 
  public get fin() {
    return this.getNumberAttribute('fin');
  }
  public set fin(value: number) {
    this._fin = value;
  }
  public resetFin() {
    this._fin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finInput() {
    return this._fin;
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

  // psh - computed: false, optional: true, required: false
  private _psh?: number; 
  public get psh() {
    return this.getNumberAttribute('psh');
  }
  public set psh(value: number) {
    this._psh = value;
  }
  public resetPsh() {
    this._psh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pshInput() {
    return this._psh;
  }

  // rst - computed: false, optional: true, required: false
  private _rst?: number; 
  public get rst() {
    return this.getNumberAttribute('rst');
  }
  public set rst(value: number) {
    this._rst = value;
  }
  public resetRst() {
    this._rst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstInput() {
    return this._rst;
  }

  // syn - computed: false, optional: true, required: false
  private _syn?: number; 
  public get syn() {
    return this.getNumberAttribute('syn');
  }
  public set syn(value: number) {
    this._syn = value;
  }
  public resetSyn() {
    this._syn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synInput() {
    return this._syn;
  }

  // urg - computed: false, optional: true, required: false
  private _urg?: number; 
  public get urg() {
    return this.getNumberAttribute('urg');
  }
  public set urg(value: number) {
    this._urg = value;
  }
  public resetUrg() {
    this._urg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgInput() {
    return this._urg;
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
      ack: cdktf.numberToTerraform(this._ack),
      cwr: cdktf.numberToTerraform(this._cwr),
      direction: cdktf.stringToTerraform(this._direction),
      ece: cdktf.numberToTerraform(this._ece),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      fin: cdktf.numberToTerraform(this._fin),
      id: cdktf.stringToTerraform(this._id),
      psh: cdktf.numberToTerraform(this._psh),
      rst: cdktf.numberToTerraform(this._rst),
      syn: cdktf.numberToTerraform(this._syn),
      urg: cdktf.numberToTerraform(this._urg),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack: {
        value: cdktf.numberToHclTerraform(this._ack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cwr: {
        value: cdktf.numberToHclTerraform(this._cwr),
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
      ece: {
        value: cdktf.numberToHclTerraform(this._ece),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_number: {
        value: cdktf.stringToHclTerraform(this._eventNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fin: {
        value: cdktf.numberToHclTerraform(this._fin),
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
      psh: {
        value: cdktf.numberToHclTerraform(this._psh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rst: {
        value: cdktf.numberToHclTerraform(this._rst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn: {
        value: cdktf.numberToHclTerraform(this._syn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      urg: {
        value: cdktf.numberToHclTerraform(this._urg),
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
