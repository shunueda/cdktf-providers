// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosEventFilterL4TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * FilterName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#filter_name DdosEventFilterL4Type#filter_name}
  */
  readonly filterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#id DdosEventFilterL4Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TCP out-of-seq pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#out_of_seq DdosEventFilterL4Type#out_of_seq}
  */
  readonly outOfSeq?: number;
  /**
  * 'tcp': tcp; 'udp': udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#protocol DdosEventFilterL4Type#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#user_tag DdosEventFilterL4Type#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#uuid DdosEventFilterL4Type#uuid}
  */
  readonly uuid?: string;
  /**
  * TCP zero window pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#zero_window DdosEventFilterL4Type#zero_window}
  */
  readonly zeroWindow?: number;
  /**
  * retrans_syn_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#retrans_syn_cfg DdosEventFilterL4Type#retrans_syn_cfg}
  */
  readonly retransSynCfg?: DdosEventFilterL4TypeRetransSynCfg;
  /**
  * tcp_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#tcp_auth DdosEventFilterL4Type#tcp_auth}
  */
  readonly tcpAuth?: DdosEventFilterL4TypeTcpAuth;
  /**
  * udp_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#udp_auth DdosEventFilterL4Type#udp_auth}
  */
  readonly udpAuth?: DdosEventFilterL4TypeUdpAuth;
}
export interface DdosEventFilterL4TypeRetransSynCfg {
  /**
  * TCP SYN retransmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#retrans_syn DdosEventFilterL4Type#retrans_syn}
  */
  readonly retransSyn?: number;
  /**
  * TCP SYN retransmission exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#retrans_syn_exceed DdosEventFilterL4Type#retrans_syn_exceed}
  */
  readonly retransSynExceed?: number;
}

export function ddosEventFilterL4TypeRetransSynCfgToTerraform(struct?: DdosEventFilterL4TypeRetransSynCfgOutputReference | DdosEventFilterL4TypeRetransSynCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retrans_syn: cdktf.numberToTerraform(struct!.retransSyn),
    retrans_syn_exceed: cdktf.numberToTerraform(struct!.retransSynExceed),
  }
}


export function ddosEventFilterL4TypeRetransSynCfgToHclTerraform(struct?: DdosEventFilterL4TypeRetransSynCfgOutputReference | DdosEventFilterL4TypeRetransSynCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retrans_syn: {
      value: cdktf.numberToHclTerraform(struct!.retransSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrans_syn_exceed: {
      value: cdktf.numberToHclTerraform(struct!.retransSynExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeRetransSynCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterL4TypeRetransSynCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retransSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransSyn = this._retransSyn;
    }
    if (this._retransSynExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransSynExceed = this._retransSynExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeRetransSynCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retransSyn = undefined;
      this._retransSynExceed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retransSyn = value.retransSyn;
      this._retransSynExceed = value.retransSynExceed;
    }
  }

  // retrans_syn - computed: false, optional: true, required: false
  private _retransSyn?: number; 
  public get retransSyn() {
    return this.getNumberAttribute('retrans_syn');
  }
  public set retransSyn(value: number) {
    this._retransSyn = value;
  }
  public resetRetransSyn() {
    this._retransSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransSynInput() {
    return this._retransSyn;
  }

  // retrans_syn_exceed - computed: false, optional: true, required: false
  private _retransSynExceed?: number; 
  public get retransSynExceed() {
    return this.getNumberAttribute('retrans_syn_exceed');
  }
  public set retransSynExceed(value: number) {
    this._retransSynExceed = value;
  }
  public resetRetransSynExceed() {
    this._retransSynExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransSynExceedInput() {
    return this._retransSynExceed;
  }
}
export interface DdosEventFilterL4TypeTcpAuth {
  /**
  * Packet that fails syn-auth/action-on-ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#tcp_auth_fail DdosEventFilterL4Type#tcp_auth_fail}
  */
  readonly tcpAuthFail?: number;
  /**
  * Packet that inits syn-auth/action-on-ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#tcp_auth_init DdosEventFilterL4Type#tcp_auth_init}
  */
  readonly tcpAuthInit?: number;
  /**
  * Packet that passes syn-auth/action-on-ack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#tcp_auth_pass DdosEventFilterL4Type#tcp_auth_pass}
  */
  readonly tcpAuthPass?: number;
}

export function ddosEventFilterL4TypeTcpAuthToTerraform(struct?: DdosEventFilterL4TypeTcpAuthOutputReference | DdosEventFilterL4TypeTcpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_auth_fail: cdktf.numberToTerraform(struct!.tcpAuthFail),
    tcp_auth_init: cdktf.numberToTerraform(struct!.tcpAuthInit),
    tcp_auth_pass: cdktf.numberToTerraform(struct!.tcpAuthPass),
  }
}


export function ddosEventFilterL4TypeTcpAuthToHclTerraform(struct?: DdosEventFilterL4TypeTcpAuthOutputReference | DdosEventFilterL4TypeTcpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_init: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeTcpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterL4TypeTcpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthFail = this._tcpAuthFail;
    }
    if (this._tcpAuthInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthInit = this._tcpAuthInit;
    }
    if (this._tcpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthPass = this._tcpAuthPass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeTcpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpAuthFail = undefined;
      this._tcpAuthInit = undefined;
      this._tcpAuthPass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpAuthFail = value.tcpAuthFail;
      this._tcpAuthInit = value.tcpAuthInit;
      this._tcpAuthPass = value.tcpAuthPass;
    }
  }

  // tcp_auth_fail - computed: false, optional: true, required: false
  private _tcpAuthFail?: number; 
  public get tcpAuthFail() {
    return this.getNumberAttribute('tcp_auth_fail');
  }
  public set tcpAuthFail(value: number) {
    this._tcpAuthFail = value;
  }
  public resetTcpAuthFail() {
    this._tcpAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthFailInput() {
    return this._tcpAuthFail;
  }

  // tcp_auth_init - computed: false, optional: true, required: false
  private _tcpAuthInit?: number; 
  public get tcpAuthInit() {
    return this.getNumberAttribute('tcp_auth_init');
  }
  public set tcpAuthInit(value: number) {
    this._tcpAuthInit = value;
  }
  public resetTcpAuthInit() {
    this._tcpAuthInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthInitInput() {
    return this._tcpAuthInit;
  }

  // tcp_auth_pass - computed: false, optional: true, required: false
  private _tcpAuthPass?: number; 
  public get tcpAuthPass() {
    return this.getNumberAttribute('tcp_auth_pass');
  }
  public set tcpAuthPass(value: number) {
    this._tcpAuthPass = value;
  }
  public resetTcpAuthPass() {
    this._tcpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthPassInput() {
    return this._tcpAuthPass;
  }
}
export interface DdosEventFilterL4TypeUdpAuth {
  /**
  * Packet that inits spoof-detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#udp_auth_init DdosEventFilterL4Type#udp_auth_init}
  */
  readonly udpAuthInit?: number;
  /**
  * Packet that passes spoof-detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#udp_auth_pass DdosEventFilterL4Type#udp_auth_pass}
  */
  readonly udpAuthPass?: number;
}

export function ddosEventFilterL4TypeUdpAuthToTerraform(struct?: DdosEventFilterL4TypeUdpAuthOutputReference | DdosEventFilterL4TypeUdpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_auth_init: cdktf.numberToTerraform(struct!.udpAuthInit),
    udp_auth_pass: cdktf.numberToTerraform(struct!.udpAuthPass),
  }
}


export function ddosEventFilterL4TypeUdpAuthToHclTerraform(struct?: DdosEventFilterL4TypeUdpAuthOutputReference | DdosEventFilterL4TypeUdpAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_auth_init: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosEventFilterL4TypeUdpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosEventFilterL4TypeUdpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpAuthInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthInit = this._udpAuthInit;
    }
    if (this._udpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthPass = this._udpAuthPass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosEventFilterL4TypeUdpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._udpAuthInit = undefined;
      this._udpAuthPass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._udpAuthInit = value.udpAuthInit;
      this._udpAuthPass = value.udpAuthPass;
    }
  }

  // udp_auth_init - computed: false, optional: true, required: false
  private _udpAuthInit?: number; 
  public get udpAuthInit() {
    return this.getNumberAttribute('udp_auth_init');
  }
  public set udpAuthInit(value: number) {
    this._udpAuthInit = value;
  }
  public resetUdpAuthInit() {
    this._udpAuthInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthInitInput() {
    return this._udpAuthInit;
  }

  // udp_auth_pass - computed: false, optional: true, required: false
  private _udpAuthPass?: number; 
  public get udpAuthPass() {
    return this.getNumberAttribute('udp_auth_pass');
  }
  public set udpAuthPass(value: number) {
    this._udpAuthPass = value;
  }
  public resetUdpAuthPass() {
    this._udpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthPassInput() {
    return this._udpAuthPass;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type thunder_ddos_event_filter_l4_type}
*/
export class DdosEventFilterL4Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_event_filter_l4_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosEventFilterL4Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosEventFilterL4Type to import
  * @param importFromId The id of the existing DdosEventFilterL4Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosEventFilterL4Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_event_filter_l4_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_event_filter_l4_type thunder_ddos_event_filter_l4_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosEventFilterL4TypeConfig
  */
  public constructor(scope: Construct, id: string, config: DdosEventFilterL4TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_event_filter_l4_type',
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
    this._filterName = config.filterName;
    this._id = config.id;
    this._outOfSeq = config.outOfSeq;
    this._protocol = config.protocol;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zeroWindow = config.zeroWindow;
    this._retransSynCfg.internalValue = config.retransSynCfg;
    this._tcpAuth.internalValue = config.tcpAuth;
    this._udpAuth.internalValue = config.udpAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
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

  // out_of_seq - computed: false, optional: true, required: false
  private _outOfSeq?: number; 
  public get outOfSeq() {
    return this.getNumberAttribute('out_of_seq');
  }
  public set outOfSeq(value: number) {
    this._outOfSeq = value;
  }
  public resetOutOfSeq() {
    this._outOfSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqInput() {
    return this._outOfSeq;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // zero_window - computed: false, optional: true, required: false
  private _zeroWindow?: number; 
  public get zeroWindow() {
    return this.getNumberAttribute('zero_window');
  }
  public set zeroWindow(value: number) {
    this._zeroWindow = value;
  }
  public resetZeroWindow() {
    this._zeroWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWindowInput() {
    return this._zeroWindow;
  }

  // retrans_syn_cfg - computed: false, optional: true, required: false
  private _retransSynCfg = new DdosEventFilterL4TypeRetransSynCfgOutputReference(this, "retrans_syn_cfg");
  public get retransSynCfg() {
    return this._retransSynCfg;
  }
  public putRetransSynCfg(value: DdosEventFilterL4TypeRetransSynCfg) {
    this._retransSynCfg.internalValue = value;
  }
  public resetRetransSynCfg() {
    this._retransSynCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransSynCfgInput() {
    return this._retransSynCfg.internalValue;
  }

  // tcp_auth - computed: false, optional: true, required: false
  private _tcpAuth = new DdosEventFilterL4TypeTcpAuthOutputReference(this, "tcp_auth");
  public get tcpAuth() {
    return this._tcpAuth;
  }
  public putTcpAuth(value: DdosEventFilterL4TypeTcpAuth) {
    this._tcpAuth.internalValue = value;
  }
  public resetTcpAuth() {
    this._tcpAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthInput() {
    return this._tcpAuth.internalValue;
  }

  // udp_auth - computed: false, optional: true, required: false
  private _udpAuth = new DdosEventFilterL4TypeUdpAuthOutputReference(this, "udp_auth");
  public get udpAuth() {
    return this._udpAuth;
  }
  public putUdpAuth(value: DdosEventFilterL4TypeUdpAuth) {
    this._udpAuth.internalValue = value;
  }
  public resetUdpAuth() {
    this._udpAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthInput() {
    return this._udpAuth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_name: cdktf.stringToTerraform(this._filterName),
      id: cdktf.stringToTerraform(this._id),
      out_of_seq: cdktf.numberToTerraform(this._outOfSeq),
      protocol: cdktf.stringToTerraform(this._protocol),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zero_window: cdktf.numberToTerraform(this._zeroWindow),
      retrans_syn_cfg: ddosEventFilterL4TypeRetransSynCfgToTerraform(this._retransSynCfg.internalValue),
      tcp_auth: ddosEventFilterL4TypeTcpAuthToTerraform(this._tcpAuth.internalValue),
      udp_auth: ddosEventFilterL4TypeUdpAuthToTerraform(this._udpAuth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
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
      out_of_seq: {
        value: cdktf.numberToHclTerraform(this._outOfSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      zero_window: {
        value: cdktf.numberToHclTerraform(this._zeroWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrans_syn_cfg: {
        value: ddosEventFilterL4TypeRetransSynCfgToHclTerraform(this._retransSynCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterL4TypeRetransSynCfgList",
      },
      tcp_auth: {
        value: ddosEventFilterL4TypeTcpAuthToHclTerraform(this._tcpAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterL4TypeTcpAuthList",
      },
      udp_auth: {
        value: ddosEventFilterL4TypeUdpAuthToHclTerraform(this._udpAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosEventFilterL4TypeUdpAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
