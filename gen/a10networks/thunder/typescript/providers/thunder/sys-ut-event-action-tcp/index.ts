// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtEventActionTcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#ack_seq_number SysUtEventActionTcpA#ack_seq_number}
  */
  readonly ackSeqNumber?: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#checksum SysUtEventActionTcpA#checksum}
  */
  readonly checksum?: string;
  /**
  * Dest port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#dest_port SysUtEventActionTcpA#dest_port}
  */
  readonly destPort?: number;
  /**
  * Dest port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#dest_port_value SysUtEventActionTcpA#dest_port_value}
  */
  readonly destPortValue?: number;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#direction SysUtEventActionTcpA#direction}
  */
  readonly direction: string;
  /**
  * EventNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#event_number SysUtEventActionTcpA#event_number}
  */
  readonly eventNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#id SysUtEventActionTcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nat pool port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#nat_pool SysUtEventActionTcpA#nat_pool}
  */
  readonly natPool?: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#seq_number SysUtEventActionTcpA#seq_number}
  */
  readonly seqNumber?: string;
  /**
  * Source port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#src_port SysUtEventActionTcpA#src_port}
  */
  readonly srcPort?: number;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#urgent SysUtEventActionTcpA#urgent}
  */
  readonly urgent?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#uuid SysUtEventActionTcpA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'valid': valid; 'invalid': invalid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#window SysUtEventActionTcpA#window}
  */
  readonly window?: string;
  /**
  * flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#flags SysUtEventActionTcpA#flags}
  */
  readonly flags?: SysUtEventActionTcpFlagsA;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#options SysUtEventActionTcpA#options}
  */
  readonly options?: SysUtEventActionTcpOptionsA;
}
export interface SysUtEventActionTcpFlagsA {
  /**
  * Ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#ack SysUtEventActionTcpA#ack}
  */
  readonly ack?: number;
  /**
  * Cwr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#cwr SysUtEventActionTcpA#cwr}
  */
  readonly cwr?: number;
  /**
  * Ece
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#ece SysUtEventActionTcpA#ece}
  */
  readonly ece?: number;
  /**
  * Fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#fin SysUtEventActionTcpA#fin}
  */
  readonly fin?: number;
  /**
  * Psh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#psh SysUtEventActionTcpA#psh}
  */
  readonly psh?: number;
  /**
  * Rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#rst SysUtEventActionTcpA#rst}
  */
  readonly rst?: number;
  /**
  * Syn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#syn SysUtEventActionTcpA#syn}
  */
  readonly syn?: number;
  /**
  * Urg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#urg SysUtEventActionTcpA#urg}
  */
  readonly urg?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#uuid SysUtEventActionTcpA#uuid}
  */
  readonly uuid?: string;
}

export function sysUtEventActionTcpFlagsAToTerraform(struct?: SysUtEventActionTcpFlagsAOutputReference | SysUtEventActionTcpFlagsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack: cdktf.numberToTerraform(struct!.ack),
    cwr: cdktf.numberToTerraform(struct!.cwr),
    ece: cdktf.numberToTerraform(struct!.ece),
    fin: cdktf.numberToTerraform(struct!.fin),
    psh: cdktf.numberToTerraform(struct!.psh),
    rst: cdktf.numberToTerraform(struct!.rst),
    syn: cdktf.numberToTerraform(struct!.syn),
    urg: cdktf.numberToTerraform(struct!.urg),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sysUtEventActionTcpFlagsAToHclTerraform(struct?: SysUtEventActionTcpFlagsAOutputReference | SysUtEventActionTcpFlagsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack: {
      value: cdktf.numberToHclTerraform(struct!.ack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cwr: {
      value: cdktf.numberToHclTerraform(struct!.cwr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ece: {
      value: cdktf.numberToHclTerraform(struct!.ece),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fin: {
      value: cdktf.numberToHclTerraform(struct!.fin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    psh: {
      value: cdktf.numberToHclTerraform(struct!.psh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rst: {
      value: cdktf.numberToHclTerraform(struct!.rst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn: {
      value: cdktf.numberToHclTerraform(struct!.syn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    urg: {
      value: cdktf.numberToHclTerraform(struct!.urg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionTcpFlagsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionTcpFlagsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ack = this._ack;
    }
    if (this._cwr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cwr = this._cwr;
    }
    if (this._ece !== undefined) {
      hasAnyValues = true;
      internalValueResult.ece = this._ece;
    }
    if (this._fin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fin = this._fin;
    }
    if (this._psh !== undefined) {
      hasAnyValues = true;
      internalValueResult.psh = this._psh;
    }
    if (this._rst !== undefined) {
      hasAnyValues = true;
      internalValueResult.rst = this._rst;
    }
    if (this._syn !== undefined) {
      hasAnyValues = true;
      internalValueResult.syn = this._syn;
    }
    if (this._urg !== undefined) {
      hasAnyValues = true;
      internalValueResult.urg = this._urg;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionTcpFlagsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ack = undefined;
      this._cwr = undefined;
      this._ece = undefined;
      this._fin = undefined;
      this._psh = undefined;
      this._rst = undefined;
      this._syn = undefined;
      this._urg = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ack = value.ack;
      this._cwr = value.cwr;
      this._ece = value.ece;
      this._fin = value.fin;
      this._psh = value.psh;
      this._rst = value.rst;
      this._syn = value.syn;
      this._urg = value.urg;
      this._uuid = value.uuid;
    }
  }

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
}
export interface SysUtEventActionTcpOptionsA {
  /**
  * TCP MSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#mss SysUtEventActionTcpA#mss}
  */
  readonly mss?: number;
  /**
  * No Op
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#nop SysUtEventActionTcpA#nop}
  */
  readonly nop?: number;
  /**
  * 'permitted': permitted; 'block': block;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#sack_type SysUtEventActionTcpA#sack_type}
  */
  readonly sackType?: string;
  /**
  * adds Time Stamp to options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#time_stamp_enable SysUtEventActionTcpA#time_stamp_enable}
  */
  readonly timeStampEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#uuid SysUtEventActionTcpA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#wscale SysUtEventActionTcpA#wscale}
  */
  readonly wscale?: number;
}

export function sysUtEventActionTcpOptionsAToTerraform(struct?: SysUtEventActionTcpOptionsAOutputReference | SysUtEventActionTcpOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss: cdktf.numberToTerraform(struct!.mss),
    nop: cdktf.numberToTerraform(struct!.nop),
    sack_type: cdktf.stringToTerraform(struct!.sackType),
    time_stamp_enable: cdktf.numberToTerraform(struct!.timeStampEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    wscale: cdktf.numberToTerraform(struct!.wscale),
  }
}


export function sysUtEventActionTcpOptionsAToHclTerraform(struct?: SysUtEventActionTcpOptionsAOutputReference | SysUtEventActionTcpOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nop: {
      value: cdktf.numberToHclTerraform(struct!.nop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sack_type: {
      value: cdktf.stringToHclTerraform(struct!.sackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_stamp_enable: {
      value: cdktf.numberToHclTerraform(struct!.timeStampEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wscale: {
      value: cdktf.numberToHclTerraform(struct!.wscale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SysUtEventActionTcpOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SysUtEventActionTcpOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    if (this._nop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nop = this._nop;
    }
    if (this._sackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sackType = this._sackType;
    }
    if (this._timeStampEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStampEnable = this._timeStampEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._wscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.wscale = this._wscale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SysUtEventActionTcpOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mss = undefined;
      this._nop = undefined;
      this._sackType = undefined;
      this._timeStampEnable = undefined;
      this._uuid = undefined;
      this._wscale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mss = value.mss;
      this._nop = value.nop;
      this._sackType = value.sackType;
      this._timeStampEnable = value.timeStampEnable;
      this._uuid = value.uuid;
      this._wscale = value.wscale;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp thunder_sys_ut_event_action_tcp}
*/
export class SysUtEventActionTcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_event_action_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtEventActionTcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtEventActionTcpA to import
  * @param importFromId The id of the existing SysUtEventActionTcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtEventActionTcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_event_action_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_event_action_tcp thunder_sys_ut_event_action_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtEventActionTcpAConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtEventActionTcpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_event_action_tcp',
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
    this._ackSeqNumber = config.ackSeqNumber;
    this._checksum = config.checksum;
    this._destPort = config.destPort;
    this._destPortValue = config.destPortValue;
    this._direction = config.direction;
    this._eventNumber = config.eventNumber;
    this._id = config.id;
    this._natPool = config.natPool;
    this._seqNumber = config.seqNumber;
    this._srcPort = config.srcPort;
    this._urgent = config.urgent;
    this._uuid = config.uuid;
    this._window = config.window;
    this._flags.internalValue = config.flags;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_seq_number - computed: false, optional: true, required: false
  private _ackSeqNumber?: string; 
  public get ackSeqNumber() {
    return this.getStringAttribute('ack_seq_number');
  }
  public set ackSeqNumber(value: string) {
    this._ackSeqNumber = value;
  }
  public resetAckSeqNumber() {
    this._ackSeqNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackSeqNumberInput() {
    return this._ackSeqNumber;
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

  // seq_number - computed: false, optional: true, required: false
  private _seqNumber?: string; 
  public get seqNumber() {
    return this.getStringAttribute('seq_number');
  }
  public set seqNumber(value: string) {
    this._seqNumber = value;
  }
  public resetSeqNumber() {
    this._seqNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumberInput() {
    return this._seqNumber;
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

  // urgent - computed: false, optional: true, required: false
  private _urgent?: string; 
  public get urgent() {
    return this.getStringAttribute('urgent');
  }
  public set urgent(value: string) {
    this._urgent = value;
  }
  public resetUrgent() {
    this._urgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentInput() {
    return this._urgent;
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

  // window - computed: false, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // flags - computed: false, optional: true, required: false
  private _flags = new SysUtEventActionTcpFlagsAOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }
  public putFlags(value: SysUtEventActionTcpFlagsA) {
    this._flags.internalValue = value;
  }
  public resetFlags() {
    this._flags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SysUtEventActionTcpOptionsAOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SysUtEventActionTcpOptionsA) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_seq_number: cdktf.stringToTerraform(this._ackSeqNumber),
      checksum: cdktf.stringToTerraform(this._checksum),
      dest_port: cdktf.numberToTerraform(this._destPort),
      dest_port_value: cdktf.numberToTerraform(this._destPortValue),
      direction: cdktf.stringToTerraform(this._direction),
      event_number: cdktf.stringToTerraform(this._eventNumber),
      id: cdktf.stringToTerraform(this._id),
      nat_pool: cdktf.stringToTerraform(this._natPool),
      seq_number: cdktf.stringToTerraform(this._seqNumber),
      src_port: cdktf.numberToTerraform(this._srcPort),
      urgent: cdktf.stringToTerraform(this._urgent),
      uuid: cdktf.stringToTerraform(this._uuid),
      window: cdktf.stringToTerraform(this._window),
      flags: sysUtEventActionTcpFlagsAToTerraform(this._flags.internalValue),
      options: sysUtEventActionTcpOptionsAToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_seq_number: {
        value: cdktf.stringToHclTerraform(this._ackSeqNumber),
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
      nat_pool: {
        value: cdktf.stringToHclTerraform(this._natPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq_number: {
        value: cdktf.stringToHclTerraform(this._seqNumber),
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
      urgent: {
        value: cdktf.stringToHclTerraform(this._urgent),
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
      window: {
        value: cdktf.stringToHclTerraform(this._window),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: sysUtEventActionTcpFlagsAToHclTerraform(this._flags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionTcpFlagsAList",
      },
      options: {
        value: sysUtEventActionTcpOptionsAToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SysUtEventActionTcpOptionsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
