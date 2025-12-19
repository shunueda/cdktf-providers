// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemTcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#id SystemTcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#uuid SystemTcpA#uuid}
  */
  readonly uuid?: string;
  /**
  * rate_limit_reset_unknown_conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#rate_limit_reset_unknown_conn SystemTcpA#rate_limit_reset_unknown_conn}
  */
  readonly rateLimitResetUnknownConn?: SystemTcpRateLimitResetUnknownConnA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#sampling_enable SystemTcpA#sampling_enable}
  */
  readonly samplingEnable?: SystemTcpSamplingEnableA[] | cdktf.IResolvable;
}
export interface SystemTcpRateLimitResetUnknownConnA {
  /**
  * Log when rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#log_for_reset_unknown_conn SystemTcpA#log_for_reset_unknown_conn}
  */
  readonly logForResetUnknownConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#pkt_rate_for_reset_unknown_conn SystemTcpA#pkt_rate_for_reset_unknown_conn}
  */
  readonly pktRateForResetUnknownConn?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#uuid SystemTcpA#uuid}
  */
  readonly uuid?: string;
}

export function systemTcpRateLimitResetUnknownConnAToTerraform(struct?: SystemTcpRateLimitResetUnknownConnAOutputReference | SystemTcpRateLimitResetUnknownConnA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_for_reset_unknown_conn: cdktf.numberToTerraform(struct!.logForResetUnknownConn),
    pkt_rate_for_reset_unknown_conn: cdktf.numberToTerraform(struct!.pktRateForResetUnknownConn),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTcpRateLimitResetUnknownConnAToHclTerraform(struct?: SystemTcpRateLimitResetUnknownConnAOutputReference | SystemTcpRateLimitResetUnknownConnA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_for_reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.logForResetUnknownConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_rate_for_reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.pktRateForResetUnknownConn),
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

export class SystemTcpRateLimitResetUnknownConnAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpRateLimitResetUnknownConnA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logForResetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForResetUnknownConn = this._logForResetUnknownConn;
    }
    if (this._pktRateForResetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktRateForResetUnknownConn = this._pktRateForResetUnknownConn;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpRateLimitResetUnknownConnA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logForResetUnknownConn = undefined;
      this._pktRateForResetUnknownConn = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logForResetUnknownConn = value.logForResetUnknownConn;
      this._pktRateForResetUnknownConn = value.pktRateForResetUnknownConn;
      this._uuid = value.uuid;
    }
  }

  // log_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _logForResetUnknownConn?: number; 
  public get logForResetUnknownConn() {
    return this.getNumberAttribute('log_for_reset_unknown_conn');
  }
  public set logForResetUnknownConn(value: number) {
    this._logForResetUnknownConn = value;
  }
  public resetLogForResetUnknownConn() {
    this._logForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForResetUnknownConnInput() {
    return this._logForResetUnknownConn;
  }

  // pkt_rate_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _pktRateForResetUnknownConn?: number; 
  public get pktRateForResetUnknownConn() {
    return this.getNumberAttribute('pkt_rate_for_reset_unknown_conn');
  }
  public set pktRateForResetUnknownConn(value: number) {
    this._pktRateForResetUnknownConn = value;
  }
  public resetPktRateForResetUnknownConn() {
    this._pktRateForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateForResetUnknownConnInput() {
    return this._pktRateForResetUnknownConn;
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
export interface SystemTcpSamplingEnableA {
  /**
  * 'all': all; 'activeopens': Active open conns; 'passiveopens': Passive open conns; 'attemptfails': Connect attemp failures; 'estabresets': Resets rcvd on EST conn; 'insegs': Total in TCP packets; 'outsegs': Total out TCP packets; 'retranssegs': Retransmited packets; 'inerrs': Input errors; 'outrsts': Reset Sent; 'sock_alloc': Sockets allocated; 'orphan_count': Orphan sockets; 'mem_alloc': Memory alloc; 'recv_mem': Total rx buffer; 'send_mem': Total tx buffer; 'currestab': Currently EST conns; 'currsyssnt': TCP in SYN-SNT state; 'currsynrcv': TCP in SYN-RCV state; 'currfinw1': TCP in FIN-W1 state; 'currfinw2': TCP FIN-W2 state; 'currtimew': TCP TimeW state; 'currclose': TCP in Close state; 'currclsw': TCP in CloseW state; 'currlack': TCP in LastACK state; 'currlstn': TCP in Listen state; 'currclsg': TCP in Closing state; 'pawsactiverejected': TCP paw active rej; 'syn_rcv_rstack': Rcv RST|ACK on SYN; 'syn_rcv_rst': Rcv RST on SYN; 'syn_rcv_ack': Rcv ACK on SYN; 'ax_rexmit_syn': TCP rexmit SYN; 'tcpabortontimeout': TCP abort on timeout; 'noroute': TCPIP out noroute; 'exceedmss': MSS exceeded pkt dropped; 'tfo_conns': TFO Total Connections; 'tfo_actives': TFO Current Actives; 'tfo_denied': TFO Denied; 'syn_rcv_rexmit': Rcv SYN rexmit; 'sock_init': Socket init; 'invalid_drop': Invalid packet drop; 'delayed_free': Delayed free return;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#counters1 SystemTcpA#counters1}
  */
  readonly counters1?: string;
}

export function systemTcpSamplingEnableAToTerraform(struct?: SystemTcpSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemTcpSamplingEnableAToHclTerraform(struct?: SystemTcpSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpSamplingEnableAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemTcpSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemTcpSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SystemTcpSamplingEnableA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemTcpSamplingEnableAOutputReference {
    return new SystemTcpSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp thunder_system_tcp}
*/
export class SystemTcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemTcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemTcpA to import
  * @param importFromId The id of the existing SystemTcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemTcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_tcp thunder_system_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemTcpAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemTcpAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_tcp',
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
    this._uuid = config.uuid;
    this._rateLimitResetUnknownConn.internalValue = config.rateLimitResetUnknownConn;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // rate_limit_reset_unknown_conn - computed: false, optional: true, required: false
  private _rateLimitResetUnknownConn = new SystemTcpRateLimitResetUnknownConnAOutputReference(this, "rate_limit_reset_unknown_conn");
  public get rateLimitResetUnknownConn() {
    return this._rateLimitResetUnknownConn;
  }
  public putRateLimitResetUnknownConn(value: SystemTcpRateLimitResetUnknownConnA) {
    this._rateLimitResetUnknownConn.internalValue = value;
  }
  public resetRateLimitResetUnknownConn() {
    this._rateLimitResetUnknownConn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitResetUnknownConnInput() {
    return this._rateLimitResetUnknownConn.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTcpSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTcpSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      rate_limit_reset_unknown_conn: systemTcpRateLimitResetUnknownConnAToTerraform(this._rateLimitResetUnknownConn.internalValue),
      sampling_enable: cdktf.listMapper(systemTcpSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_reset_unknown_conn: {
        value: systemTcpRateLimitResetUnknownConnAToHclTerraform(this._rateLimitResetUnknownConn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemTcpRateLimitResetUnknownConnAList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(systemTcpSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemTcpSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
