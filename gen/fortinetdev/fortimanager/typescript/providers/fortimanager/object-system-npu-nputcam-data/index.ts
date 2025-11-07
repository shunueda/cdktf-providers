// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuNputcamDataAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#adom ObjectSystemNpuNputcamDataA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#df ObjectSystemNpuNputcamDataA#df}
  */
  readonly df?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#dstip ObjectSystemNpuNputcamDataA#dstip}
  */
  readonly dstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#dstipv6 ObjectSystemNpuNputcamDataA#dstipv6}
  */
  readonly dstipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#dstmac ObjectSystemNpuNputcamDataA#dstmac}
  */
  readonly dstmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#dstport ObjectSystemNpuNputcamDataA#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ethertype ObjectSystemNpuNputcamDataA#ethertype}
  */
  readonly ethertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ext_tag ObjectSystemNpuNputcamDataA#ext_tag}
  */
  readonly extTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#frag_off ObjectSystemNpuNputcamDataA#frag_off}
  */
  readonly fragOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_buf_cnt ObjectSystemNpuNputcamDataA#gen_buf_cnt}
  */
  readonly genBufCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_iv ObjectSystemNpuNputcamDataA#gen_iv}
  */
  readonly genIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_l3_flags ObjectSystemNpuNputcamDataA#gen_l3_flags}
  */
  readonly genL3Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_l4_flags ObjectSystemNpuNputcamDataA#gen_l4_flags}
  */
  readonly genL4Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_pkt_ctrl ObjectSystemNpuNputcamDataA#gen_pkt_ctrl}
  */
  readonly genPktCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_pri ObjectSystemNpuNputcamDataA#gen_pri}
  */
  readonly genPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_pri_v ObjectSystemNpuNputcamDataA#gen_pri_v}
  */
  readonly genPriV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#gen_tv ObjectSystemNpuNputcamDataA#gen_tv}
  */
  readonly genTv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#id ObjectSystemNpuNputcamDataA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ihl ObjectSystemNpuNputcamDataA#ihl}
  */
  readonly ihl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ip4_id ObjectSystemNpuNputcamDataA#ip4_id}
  */
  readonly ip4Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ip6_fl ObjectSystemNpuNputcamDataA#ip6_fl}
  */
  readonly ip6Fl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ipver ObjectSystemNpuNputcamDataA#ipver}
  */
  readonly ipver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#l4_wd10 ObjectSystemNpuNputcamDataA#l4_wd10}
  */
  readonly l4Wd10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#l4_wd11 ObjectSystemNpuNputcamDataA#l4_wd11}
  */
  readonly l4Wd11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#l4_wd8 ObjectSystemNpuNputcamDataA#l4_wd8}
  */
  readonly l4Wd8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#l4_wd9 ObjectSystemNpuNputcamDataA#l4_wd9}
  */
  readonly l4Wd9?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#mf ObjectSystemNpuNputcamDataA#mf}
  */
  readonly mf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#npu_tcam ObjectSystemNpuNputcamDataA#npu_tcam}
  */
  readonly npuTcam: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#protocol ObjectSystemNpuNputcamDataA#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#scopetype ObjectSystemNpuNputcamDataA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#slink ObjectSystemNpuNputcamDataA#slink}
  */
  readonly slink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#smac_change ObjectSystemNpuNputcamDataA#smac_change}
  */
  readonly smacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#sp ObjectSystemNpuNputcamDataA#sp}
  */
  readonly sp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#src_cfi ObjectSystemNpuNputcamDataA#src_cfi}
  */
  readonly srcCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#src_prio ObjectSystemNpuNputcamDataA#src_prio}
  */
  readonly srcPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#src_updt ObjectSystemNpuNputcamDataA#src_updt}
  */
  readonly srcUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#srcip ObjectSystemNpuNputcamDataA#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#srcipv6 ObjectSystemNpuNputcamDataA#srcipv6}
  */
  readonly srcipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#srcmac ObjectSystemNpuNputcamDataA#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#srcport ObjectSystemNpuNputcamDataA#srcport}
  */
  readonly srcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#svid ObjectSystemNpuNputcamDataA#svid}
  */
  readonly svid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_ack ObjectSystemNpuNputcamDataA#tcp_ack}
  */
  readonly tcpAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_cwr ObjectSystemNpuNputcamDataA#tcp_cwr}
  */
  readonly tcpCwr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_ece ObjectSystemNpuNputcamDataA#tcp_ece}
  */
  readonly tcpEce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_fin ObjectSystemNpuNputcamDataA#tcp_fin}
  */
  readonly tcpFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_push ObjectSystemNpuNputcamDataA#tcp_push}
  */
  readonly tcpPush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_rst ObjectSystemNpuNputcamDataA#tcp_rst}
  */
  readonly tcpRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_syn ObjectSystemNpuNputcamDataA#tcp_syn}
  */
  readonly tcpSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tcp_urg ObjectSystemNpuNputcamDataA#tcp_urg}
  */
  readonly tcpUrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tgt_cfi ObjectSystemNpuNputcamDataA#tgt_cfi}
  */
  readonly tgtCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tgt_prio ObjectSystemNpuNputcamDataA#tgt_prio}
  */
  readonly tgtPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tgt_updt ObjectSystemNpuNputcamDataA#tgt_updt}
  */
  readonly tgtUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tgt_v ObjectSystemNpuNputcamDataA#tgt_v}
  */
  readonly tgtV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tos ObjectSystemNpuNputcamDataA#tos}
  */
  readonly tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tp ObjectSystemNpuNputcamDataA#tp}
  */
  readonly tp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#ttl ObjectSystemNpuNputcamDataA#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#tvid ObjectSystemNpuNputcamDataA#tvid}
  */
  readonly tvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#vdid ObjectSystemNpuNputcamDataA#vdid}
  */
  readonly vdid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data fortimanager_object_system_npu_nputcam_data}
*/
export class ObjectSystemNpuNputcamDataA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_nputcam_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuNputcamDataA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuNputcamDataA to import
  * @param importFromId The id of the existing ObjectSystemNpuNputcamDataA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuNputcamDataA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_nputcam_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_data fortimanager_object_system_npu_nputcam_data} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuNputcamDataAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuNputcamDataAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_nputcam_data',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._df = config.df;
    this._dstip = config.dstip;
    this._dstipv6 = config.dstipv6;
    this._dstmac = config.dstmac;
    this._dstport = config.dstport;
    this._ethertype = config.ethertype;
    this._extTag = config.extTag;
    this._fragOff = config.fragOff;
    this._genBufCnt = config.genBufCnt;
    this._genIv = config.genIv;
    this._genL3Flags = config.genL3Flags;
    this._genL4Flags = config.genL4Flags;
    this._genPktCtrl = config.genPktCtrl;
    this._genPri = config.genPri;
    this._genPriV = config.genPriV;
    this._genTv = config.genTv;
    this._id = config.id;
    this._ihl = config.ihl;
    this._ip4Id = config.ip4Id;
    this._ip6Fl = config.ip6Fl;
    this._ipver = config.ipver;
    this._l4Wd10 = config.l4Wd10;
    this._l4Wd11 = config.l4Wd11;
    this._l4Wd8 = config.l4Wd8;
    this._l4Wd9 = config.l4Wd9;
    this._mf = config.mf;
    this._npuTcam = config.npuTcam;
    this._protocol = config.protocol;
    this._scopetype = config.scopetype;
    this._slink = config.slink;
    this._smacChange = config.smacChange;
    this._sp = config.sp;
    this._srcCfi = config.srcCfi;
    this._srcPrio = config.srcPrio;
    this._srcUpdt = config.srcUpdt;
    this._srcip = config.srcip;
    this._srcipv6 = config.srcipv6;
    this._srcmac = config.srcmac;
    this._srcport = config.srcport;
    this._svid = config.svid;
    this._tcpAck = config.tcpAck;
    this._tcpCwr = config.tcpCwr;
    this._tcpEce = config.tcpEce;
    this._tcpFin = config.tcpFin;
    this._tcpPush = config.tcpPush;
    this._tcpRst = config.tcpRst;
    this._tcpSyn = config.tcpSyn;
    this._tcpUrg = config.tcpUrg;
    this._tgtCfi = config.tgtCfi;
    this._tgtPrio = config.tgtPrio;
    this._tgtUpdt = config.tgtUpdt;
    this._tgtV = config.tgtV;
    this._tos = config.tos;
    this._tp = config.tp;
    this._ttl = config.ttl;
    this._tvid = config.tvid;
    this._vdid = config.vdid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // df - computed: true, optional: true, required: false
  private _df?: string; 
  public get df() {
    return this.getStringAttribute('df');
  }
  public set df(value: string) {
    this._df = value;
  }
  public resetDf() {
    this._df = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfInput() {
    return this._df;
  }

  // dstip - computed: true, optional: true, required: false
  private _dstip?: string; 
  public get dstip() {
    return this.getStringAttribute('dstip');
  }
  public set dstip(value: string) {
    this._dstip = value;
  }
  public resetDstip() {
    this._dstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipInput() {
    return this._dstip;
  }

  // dstipv6 - computed: true, optional: true, required: false
  private _dstipv6?: string; 
  public get dstipv6() {
    return this.getStringAttribute('dstipv6');
  }
  public set dstipv6(value: string) {
    this._dstipv6 = value;
  }
  public resetDstipv6() {
    this._dstipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipv6Input() {
    return this._dstipv6;
  }

  // dstmac - computed: true, optional: true, required: false
  private _dstmac?: string; 
  public get dstmac() {
    return this.getStringAttribute('dstmac');
  }
  public set dstmac(value: string) {
    this._dstmac = value;
  }
  public resetDstmac() {
    this._dstmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstmacInput() {
    return this._dstmac;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // ethertype - computed: true, optional: true, required: false
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // ext_tag - computed: true, optional: true, required: false
  private _extTag?: string; 
  public get extTag() {
    return this.getStringAttribute('ext_tag');
  }
  public set extTag(value: string) {
    this._extTag = value;
  }
  public resetExtTag() {
    this._extTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTagInput() {
    return this._extTag;
  }

  // frag_off - computed: false, optional: true, required: false
  private _fragOff?: number; 
  public get fragOff() {
    return this.getNumberAttribute('frag_off');
  }
  public set fragOff(value: number) {
    this._fragOff = value;
  }
  public resetFragOff() {
    this._fragOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragOffInput() {
    return this._fragOff;
  }

  // gen_buf_cnt - computed: false, optional: true, required: false
  private _genBufCnt?: number; 
  public get genBufCnt() {
    return this.getNumberAttribute('gen_buf_cnt');
  }
  public set genBufCnt(value: number) {
    this._genBufCnt = value;
  }
  public resetGenBufCnt() {
    this._genBufCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genBufCntInput() {
    return this._genBufCnt;
  }

  // gen_iv - computed: true, optional: true, required: false
  private _genIv?: string; 
  public get genIv() {
    return this.getStringAttribute('gen_iv');
  }
  public set genIv(value: string) {
    this._genIv = value;
  }
  public resetGenIv() {
    this._genIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genIvInput() {
    return this._genIv;
  }

  // gen_l3_flags - computed: false, optional: true, required: false
  private _genL3Flags?: number; 
  public get genL3Flags() {
    return this.getNumberAttribute('gen_l3_flags');
  }
  public set genL3Flags(value: number) {
    this._genL3Flags = value;
  }
  public resetGenL3Flags() {
    this._genL3Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL3FlagsInput() {
    return this._genL3Flags;
  }

  // gen_l4_flags - computed: false, optional: true, required: false
  private _genL4Flags?: number; 
  public get genL4Flags() {
    return this.getNumberAttribute('gen_l4_flags');
  }
  public set genL4Flags(value: number) {
    this._genL4Flags = value;
  }
  public resetGenL4Flags() {
    this._genL4Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL4FlagsInput() {
    return this._genL4Flags;
  }

  // gen_pkt_ctrl - computed: false, optional: true, required: false
  private _genPktCtrl?: number; 
  public get genPktCtrl() {
    return this.getNumberAttribute('gen_pkt_ctrl');
  }
  public set genPktCtrl(value: number) {
    this._genPktCtrl = value;
  }
  public resetGenPktCtrl() {
    this._genPktCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPktCtrlInput() {
    return this._genPktCtrl;
  }

  // gen_pri - computed: false, optional: true, required: false
  private _genPri?: number; 
  public get genPri() {
    return this.getNumberAttribute('gen_pri');
  }
  public set genPri(value: number) {
    this._genPri = value;
  }
  public resetGenPri() {
    this._genPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriInput() {
    return this._genPri;
  }

  // gen_pri_v - computed: true, optional: true, required: false
  private _genPriV?: string; 
  public get genPriV() {
    return this.getStringAttribute('gen_pri_v');
  }
  public set genPriV(value: string) {
    this._genPriV = value;
  }
  public resetGenPriV() {
    this._genPriV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriVInput() {
    return this._genPriV;
  }

  // gen_tv - computed: true, optional: true, required: false
  private _genTv?: string; 
  public get genTv() {
    return this.getStringAttribute('gen_tv');
  }
  public set genTv(value: string) {
    this._genTv = value;
  }
  public resetGenTv() {
    this._genTv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genTvInput() {
    return this._genTv;
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

  // ihl - computed: false, optional: true, required: false
  private _ihl?: number; 
  public get ihl() {
    return this.getNumberAttribute('ihl');
  }
  public set ihl(value: number) {
    this._ihl = value;
  }
  public resetIhl() {
    this._ihl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlInput() {
    return this._ihl;
  }

  // ip4_id - computed: false, optional: true, required: false
  private _ip4Id?: number; 
  public get ip4Id() {
    return this.getNumberAttribute('ip4_id');
  }
  public set ip4Id(value: number) {
    this._ip4Id = value;
  }
  public resetIp4Id() {
    this._ip4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4IdInput() {
    return this._ip4Id;
  }

  // ip6_fl - computed: false, optional: true, required: false
  private _ip6Fl?: number; 
  public get ip6Fl() {
    return this.getNumberAttribute('ip6_fl');
  }
  public set ip6Fl(value: number) {
    this._ip6Fl = value;
  }
  public resetIp6Fl() {
    this._ip6Fl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6FlInput() {
    return this._ip6Fl;
  }

  // ipver - computed: false, optional: true, required: false
  private _ipver?: number; 
  public get ipver() {
    return this.getNumberAttribute('ipver');
  }
  public set ipver(value: number) {
    this._ipver = value;
  }
  public resetIpver() {
    this._ipver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipverInput() {
    return this._ipver;
  }

  // l4_wd10 - computed: false, optional: true, required: false
  private _l4Wd10?: number; 
  public get l4Wd10() {
    return this.getNumberAttribute('l4_wd10');
  }
  public set l4Wd10(value: number) {
    this._l4Wd10 = value;
  }
  public resetL4Wd10() {
    this._l4Wd10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd10Input() {
    return this._l4Wd10;
  }

  // l4_wd11 - computed: false, optional: true, required: false
  private _l4Wd11?: number; 
  public get l4Wd11() {
    return this.getNumberAttribute('l4_wd11');
  }
  public set l4Wd11(value: number) {
    this._l4Wd11 = value;
  }
  public resetL4Wd11() {
    this._l4Wd11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd11Input() {
    return this._l4Wd11;
  }

  // l4_wd8 - computed: false, optional: true, required: false
  private _l4Wd8?: number; 
  public get l4Wd8() {
    return this.getNumberAttribute('l4_wd8');
  }
  public set l4Wd8(value: number) {
    this._l4Wd8 = value;
  }
  public resetL4Wd8() {
    this._l4Wd8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd8Input() {
    return this._l4Wd8;
  }

  // l4_wd9 - computed: false, optional: true, required: false
  private _l4Wd9?: number; 
  public get l4Wd9() {
    return this.getNumberAttribute('l4_wd9');
  }
  public set l4Wd9(value: number) {
    this._l4Wd9 = value;
  }
  public resetL4Wd9() {
    this._l4Wd9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd9Input() {
    return this._l4Wd9;
  }

  // mf - computed: true, optional: true, required: false
  private _mf?: string; 
  public get mf() {
    return this.getStringAttribute('mf');
  }
  public set mf(value: string) {
    this._mf = value;
  }
  public resetMf() {
    this._mf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfInput() {
    return this._mf;
  }

  // npu_tcam - computed: false, optional: false, required: true
  private _npuTcam?: string; 
  public get npuTcam() {
    return this.getStringAttribute('npu_tcam');
  }
  public set npuTcam(value: string) {
    this._npuTcam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get npuTcamInput() {
    return this._npuTcam;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // slink - computed: false, optional: true, required: false
  private _slink?: number; 
  public get slink() {
    return this.getNumberAttribute('slink');
  }
  public set slink(value: number) {
    this._slink = value;
  }
  public resetSlink() {
    this._slink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slinkInput() {
    return this._slink;
  }

  // smac_change - computed: true, optional: true, required: false
  private _smacChange?: string; 
  public get smacChange() {
    return this.getStringAttribute('smac_change');
  }
  public set smacChange(value: string) {
    this._smacChange = value;
  }
  public resetSmacChange() {
    this._smacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacChangeInput() {
    return this._smacChange;
  }

  // sp - computed: false, optional: true, required: false
  private _sp?: number; 
  public get sp() {
    return this.getNumberAttribute('sp');
  }
  public set sp(value: number) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // src_cfi - computed: true, optional: true, required: false
  private _srcCfi?: string; 
  public get srcCfi() {
    return this.getStringAttribute('src_cfi');
  }
  public set srcCfi(value: string) {
    this._srcCfi = value;
  }
  public resetSrcCfi() {
    this._srcCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCfiInput() {
    return this._srcCfi;
  }

  // src_prio - computed: false, optional: true, required: false
  private _srcPrio?: number; 
  public get srcPrio() {
    return this.getNumberAttribute('src_prio');
  }
  public set srcPrio(value: number) {
    this._srcPrio = value;
  }
  public resetSrcPrio() {
    this._srcPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrioInput() {
    return this._srcPrio;
  }

  // src_updt - computed: true, optional: true, required: false
  private _srcUpdt?: string; 
  public get srcUpdt() {
    return this.getStringAttribute('src_updt');
  }
  public set srcUpdt(value: string) {
    this._srcUpdt = value;
  }
  public resetSrcUpdt() {
    this._srcUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUpdtInput() {
    return this._srcUpdt;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcipv6 - computed: true, optional: true, required: false
  private _srcipv6?: string; 
  public get srcipv6() {
    return this.getStringAttribute('srcipv6');
  }
  public set srcipv6(value: string) {
    this._srcipv6 = value;
  }
  public resetSrcipv6() {
    this._srcipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // svid - computed: false, optional: true, required: false
  private _svid?: number; 
  public get svid() {
    return this.getNumberAttribute('svid');
  }
  public set svid(value: number) {
    this._svid = value;
  }
  public resetSvid() {
    this._svid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svidInput() {
    return this._svid;
  }

  // tcp_ack - computed: true, optional: true, required: false
  private _tcpAck?: string; 
  public get tcpAck() {
    return this.getStringAttribute('tcp_ack');
  }
  public set tcpAck(value: string) {
    this._tcpAck = value;
  }
  public resetTcpAck() {
    this._tcpAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckInput() {
    return this._tcpAck;
  }

  // tcp_cwr - computed: true, optional: true, required: false
  private _tcpCwr?: string; 
  public get tcpCwr() {
    return this.getStringAttribute('tcp_cwr');
  }
  public set tcpCwr(value: string) {
    this._tcpCwr = value;
  }
  public resetTcpCwr() {
    this._tcpCwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrInput() {
    return this._tcpCwr;
  }

  // tcp_ece - computed: true, optional: true, required: false
  private _tcpEce?: string; 
  public get tcpEce() {
    return this.getStringAttribute('tcp_ece');
  }
  public set tcpEce(value: string) {
    this._tcpEce = value;
  }
  public resetTcpEce() {
    this._tcpEce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceInput() {
    return this._tcpEce;
  }

  // tcp_fin - computed: true, optional: true, required: false
  private _tcpFin?: string; 
  public get tcpFin() {
    return this.getStringAttribute('tcp_fin');
  }
  public set tcpFin(value: string) {
    this._tcpFin = value;
  }
  public resetTcpFin() {
    this._tcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinInput() {
    return this._tcpFin;
  }

  // tcp_push - computed: true, optional: true, required: false
  private _tcpPush?: string; 
  public get tcpPush() {
    return this.getStringAttribute('tcp_push');
  }
  public set tcpPush(value: string) {
    this._tcpPush = value;
  }
  public resetTcpPush() {
    this._tcpPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPushInput() {
    return this._tcpPush;
  }

  // tcp_rst - computed: true, optional: true, required: false
  private _tcpRst?: string; 
  public get tcpRst() {
    return this.getStringAttribute('tcp_rst');
  }
  public set tcpRst(value: string) {
    this._tcpRst = value;
  }
  public resetTcpRst() {
    this._tcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstInput() {
    return this._tcpRst;
  }

  // tcp_syn - computed: true, optional: true, required: false
  private _tcpSyn?: string; 
  public get tcpSyn() {
    return this.getStringAttribute('tcp_syn');
  }
  public set tcpSyn(value: string) {
    this._tcpSyn = value;
  }
  public resetTcpSyn() {
    this._tcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn;
  }

  // tcp_urg - computed: true, optional: true, required: false
  private _tcpUrg?: string; 
  public get tcpUrg() {
    return this.getStringAttribute('tcp_urg');
  }
  public set tcpUrg(value: string) {
    this._tcpUrg = value;
  }
  public resetTcpUrg() {
    this._tcpUrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgInput() {
    return this._tcpUrg;
  }

  // tgt_cfi - computed: true, optional: true, required: false
  private _tgtCfi?: string; 
  public get tgtCfi() {
    return this.getStringAttribute('tgt_cfi');
  }
  public set tgtCfi(value: string) {
    this._tgtCfi = value;
  }
  public resetTgtCfi() {
    this._tgtCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtCfiInput() {
    return this._tgtCfi;
  }

  // tgt_prio - computed: false, optional: true, required: false
  private _tgtPrio?: number; 
  public get tgtPrio() {
    return this.getNumberAttribute('tgt_prio');
  }
  public set tgtPrio(value: number) {
    this._tgtPrio = value;
  }
  public resetTgtPrio() {
    this._tgtPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtPrioInput() {
    return this._tgtPrio;
  }

  // tgt_updt - computed: true, optional: true, required: false
  private _tgtUpdt?: string; 
  public get tgtUpdt() {
    return this.getStringAttribute('tgt_updt');
  }
  public set tgtUpdt(value: string) {
    this._tgtUpdt = value;
  }
  public resetTgtUpdt() {
    this._tgtUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtUpdtInput() {
    return this._tgtUpdt;
  }

  // tgt_v - computed: true, optional: true, required: false
  private _tgtV?: string; 
  public get tgtV() {
    return this.getStringAttribute('tgt_v');
  }
  public set tgtV(value: string) {
    this._tgtV = value;
  }
  public resetTgtV() {
    this._tgtV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtVInput() {
    return this._tgtV;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tp - computed: false, optional: true, required: false
  private _tp?: number; 
  public get tp() {
    return this.getNumberAttribute('tp');
  }
  public set tp(value: number) {
    this._tp = value;
  }
  public resetTp() {
    this._tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpInput() {
    return this._tp;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // tvid - computed: false, optional: true, required: false
  private _tvid?: number; 
  public get tvid() {
    return this.getNumberAttribute('tvid');
  }
  public set tvid(value: number) {
    this._tvid = value;
  }
  public resetTvid() {
    this._tvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvidInput() {
    return this._tvid;
  }

  // vdid - computed: false, optional: true, required: false
  private _vdid?: number; 
  public get vdid() {
    return this.getNumberAttribute('vdid');
  }
  public set vdid(value: number) {
    this._vdid = value;
  }
  public resetVdid() {
    this._vdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdidInput() {
    return this._vdid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      df: cdktf.stringToTerraform(this._df),
      dstip: cdktf.stringToTerraform(this._dstip),
      dstipv6: cdktf.stringToTerraform(this._dstipv6),
      dstmac: cdktf.stringToTerraform(this._dstmac),
      dstport: cdktf.numberToTerraform(this._dstport),
      ethertype: cdktf.stringToTerraform(this._ethertype),
      ext_tag: cdktf.stringToTerraform(this._extTag),
      frag_off: cdktf.numberToTerraform(this._fragOff),
      gen_buf_cnt: cdktf.numberToTerraform(this._genBufCnt),
      gen_iv: cdktf.stringToTerraform(this._genIv),
      gen_l3_flags: cdktf.numberToTerraform(this._genL3Flags),
      gen_l4_flags: cdktf.numberToTerraform(this._genL4Flags),
      gen_pkt_ctrl: cdktf.numberToTerraform(this._genPktCtrl),
      gen_pri: cdktf.numberToTerraform(this._genPri),
      gen_pri_v: cdktf.stringToTerraform(this._genPriV),
      gen_tv: cdktf.stringToTerraform(this._genTv),
      id: cdktf.stringToTerraform(this._id),
      ihl: cdktf.numberToTerraform(this._ihl),
      ip4_id: cdktf.numberToTerraform(this._ip4Id),
      ip6_fl: cdktf.numberToTerraform(this._ip6Fl),
      ipver: cdktf.numberToTerraform(this._ipver),
      l4_wd10: cdktf.numberToTerraform(this._l4Wd10),
      l4_wd11: cdktf.numberToTerraform(this._l4Wd11),
      l4_wd8: cdktf.numberToTerraform(this._l4Wd8),
      l4_wd9: cdktf.numberToTerraform(this._l4Wd9),
      mf: cdktf.stringToTerraform(this._mf),
      npu_tcam: cdktf.stringToTerraform(this._npuTcam),
      protocol: cdktf.numberToTerraform(this._protocol),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      slink: cdktf.numberToTerraform(this._slink),
      smac_change: cdktf.stringToTerraform(this._smacChange),
      sp: cdktf.numberToTerraform(this._sp),
      src_cfi: cdktf.stringToTerraform(this._srcCfi),
      src_prio: cdktf.numberToTerraform(this._srcPrio),
      src_updt: cdktf.stringToTerraform(this._srcUpdt),
      srcip: cdktf.stringToTerraform(this._srcip),
      srcipv6: cdktf.stringToTerraform(this._srcipv6),
      srcmac: cdktf.stringToTerraform(this._srcmac),
      srcport: cdktf.numberToTerraform(this._srcport),
      svid: cdktf.numberToTerraform(this._svid),
      tcp_ack: cdktf.stringToTerraform(this._tcpAck),
      tcp_cwr: cdktf.stringToTerraform(this._tcpCwr),
      tcp_ece: cdktf.stringToTerraform(this._tcpEce),
      tcp_fin: cdktf.stringToTerraform(this._tcpFin),
      tcp_push: cdktf.stringToTerraform(this._tcpPush),
      tcp_rst: cdktf.stringToTerraform(this._tcpRst),
      tcp_syn: cdktf.stringToTerraform(this._tcpSyn),
      tcp_urg: cdktf.stringToTerraform(this._tcpUrg),
      tgt_cfi: cdktf.stringToTerraform(this._tgtCfi),
      tgt_prio: cdktf.numberToTerraform(this._tgtPrio),
      tgt_updt: cdktf.stringToTerraform(this._tgtUpdt),
      tgt_v: cdktf.stringToTerraform(this._tgtV),
      tos: cdktf.numberToTerraform(this._tos),
      tp: cdktf.numberToTerraform(this._tp),
      ttl: cdktf.numberToTerraform(this._ttl),
      tvid: cdktf.numberToTerraform(this._tvid),
      vdid: cdktf.numberToTerraform(this._vdid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      df: {
        value: cdktf.stringToHclTerraform(this._df),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstip: {
        value: cdktf.stringToHclTerraform(this._dstip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstipv6: {
        value: cdktf.stringToHclTerraform(this._dstipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstmac: {
        value: cdktf.stringToHclTerraform(this._dstmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstport: {
        value: cdktf.numberToHclTerraform(this._dstport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethertype: {
        value: cdktf.stringToHclTerraform(this._ethertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_tag: {
        value: cdktf.stringToHclTerraform(this._extTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frag_off: {
        value: cdktf.numberToHclTerraform(this._fragOff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gen_buf_cnt: {
        value: cdktf.numberToHclTerraform(this._genBufCnt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gen_iv: {
        value: cdktf.stringToHclTerraform(this._genIv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gen_l3_flags: {
        value: cdktf.numberToHclTerraform(this._genL3Flags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gen_l4_flags: {
        value: cdktf.numberToHclTerraform(this._genL4Flags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gen_pkt_ctrl: {
        value: cdktf.numberToHclTerraform(this._genPktCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gen_pri: {
        value: cdktf.numberToHclTerraform(this._genPri),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gen_pri_v: {
        value: cdktf.stringToHclTerraform(this._genPriV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gen_tv: {
        value: cdktf.stringToHclTerraform(this._genTv),
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
      ihl: {
        value: cdktf.numberToHclTerraform(this._ihl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip4_id: {
        value: cdktf.numberToHclTerraform(this._ip4Id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_fl: {
        value: cdktf.numberToHclTerraform(this._ip6Fl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipver: {
        value: cdktf.numberToHclTerraform(this._ipver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_wd10: {
        value: cdktf.numberToHclTerraform(this._l4Wd10),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_wd11: {
        value: cdktf.numberToHclTerraform(this._l4Wd11),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_wd8: {
        value: cdktf.numberToHclTerraform(this._l4Wd8),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_wd9: {
        value: cdktf.numberToHclTerraform(this._l4Wd9),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mf: {
        value: cdktf.stringToHclTerraform(this._mf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npu_tcam: {
        value: cdktf.stringToHclTerraform(this._npuTcam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slink: {
        value: cdktf.numberToHclTerraform(this._slink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smac_change: {
        value: cdktf.stringToHclTerraform(this._smacChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp: {
        value: cdktf.numberToHclTerraform(this._sp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_cfi: {
        value: cdktf.stringToHclTerraform(this._srcCfi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_prio: {
        value: cdktf.numberToHclTerraform(this._srcPrio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_updt: {
        value: cdktf.stringToHclTerraform(this._srcUpdt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcipv6: {
        value: cdktf.stringToHclTerraform(this._srcipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcmac: {
        value: cdktf.stringToHclTerraform(this._srcmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcport: {
        value: cdktf.numberToHclTerraform(this._srcport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svid: {
        value: cdktf.numberToHclTerraform(this._svid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_ack: {
        value: cdktf.stringToHclTerraform(this._tcpAck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_cwr: {
        value: cdktf.stringToHclTerraform(this._tcpCwr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_ece: {
        value: cdktf.stringToHclTerraform(this._tcpEce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_fin: {
        value: cdktf.stringToHclTerraform(this._tcpFin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_push: {
        value: cdktf.stringToHclTerraform(this._tcpPush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_rst: {
        value: cdktf.stringToHclTerraform(this._tcpRst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_syn: {
        value: cdktf.stringToHclTerraform(this._tcpSyn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_urg: {
        value: cdktf.stringToHclTerraform(this._tcpUrg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgt_cfi: {
        value: cdktf.stringToHclTerraform(this._tgtCfi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgt_prio: {
        value: cdktf.numberToHclTerraform(this._tgtPrio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tgt_updt: {
        value: cdktf.stringToHclTerraform(this._tgtUpdt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgt_v: {
        value: cdktf.stringToHclTerraform(this._tgtV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.numberToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tp: {
        value: cdktf.numberToHclTerraform(this._tp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tvid: {
        value: cdktf.numberToHclTerraform(this._tvid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdid: {
        value: cdktf.numberToHclTerraform(this._vdid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
