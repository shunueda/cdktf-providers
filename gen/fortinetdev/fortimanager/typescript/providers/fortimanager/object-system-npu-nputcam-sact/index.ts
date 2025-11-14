// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuNputcamSactAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#act ObjectSystemNpuNputcamSactA#act}
  */
  readonly act?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#act_v ObjectSystemNpuNputcamSactA#act_v}
  */
  readonly actV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#adom ObjectSystemNpuNputcamSactA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#bmproc ObjectSystemNpuNputcamSactA#bmproc}
  */
  readonly bmproc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#bmproc_v ObjectSystemNpuNputcamSactA#bmproc_v}
  */
  readonly bmprocV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#df_lif ObjectSystemNpuNputcamSactA#df_lif}
  */
  readonly dfLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#df_lif_v ObjectSystemNpuNputcamSactA#df_lif_v}
  */
  readonly dfLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#dfr ObjectSystemNpuNputcamSactA#dfr}
  */
  readonly dfr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#dfr_v ObjectSystemNpuNputcamSactA#dfr_v}
  */
  readonly dfrV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#dmac_skip ObjectSystemNpuNputcamSactA#dmac_skip}
  */
  readonly dmacSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#dmac_skip_v ObjectSystemNpuNputcamSactA#dmac_skip_v}
  */
  readonly dmacSkipV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#dosen ObjectSystemNpuNputcamSactA#dosen}
  */
  readonly dosen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#dosen_v ObjectSystemNpuNputcamSactA#dosen_v}
  */
  readonly dosenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#espff_proc ObjectSystemNpuNputcamSactA#espff_proc}
  */
  readonly espffProc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#espff_proc_v ObjectSystemNpuNputcamSactA#espff_proc_v}
  */
  readonly espffProcV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#etype_pid ObjectSystemNpuNputcamSactA#etype_pid}
  */
  readonly etypePid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#etype_pid_v ObjectSystemNpuNputcamSactA#etype_pid_v}
  */
  readonly etypePidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#frag_proc ObjectSystemNpuNputcamSactA#frag_proc}
  */
  readonly fragProc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#frag_proc_v ObjectSystemNpuNputcamSactA#frag_proc_v}
  */
  readonly fragProcV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#fwd ObjectSystemNpuNputcamSactA#fwd}
  */
  readonly fwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#fwd_lif ObjectSystemNpuNputcamSactA#fwd_lif}
  */
  readonly fwdLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#fwd_lif_v ObjectSystemNpuNputcamSactA#fwd_lif_v}
  */
  readonly fwdLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#fwd_tvid ObjectSystemNpuNputcamSactA#fwd_tvid}
  */
  readonly fwdTvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#fwd_tvid_v ObjectSystemNpuNputcamSactA#fwd_tvid_v}
  */
  readonly fwdTvidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#fwd_v ObjectSystemNpuNputcamSactA#fwd_v}
  */
  readonly fwdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#icpen ObjectSystemNpuNputcamSactA#icpen}
  */
  readonly icpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#icpen_v ObjectSystemNpuNputcamSactA#icpen_v}
  */
  readonly icpenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#id ObjectSystemNpuNputcamSactA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#igmp_mld_snp ObjectSystemNpuNputcamSactA#igmp_mld_snp}
  */
  readonly igmpMldSnp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#igmp_mld_snp_v ObjectSystemNpuNputcamSactA#igmp_mld_snp_v}
  */
  readonly igmpMldSnpV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#learn ObjectSystemNpuNputcamSactA#learn}
  */
  readonly learn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#learn_v ObjectSystemNpuNputcamSactA#learn_v}
  */
  readonly learnV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#m_srh_ctrl ObjectSystemNpuNputcamSactA#m_srh_ctrl}
  */
  readonly mSrhCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#m_srh_ctrl_v ObjectSystemNpuNputcamSactA#m_srh_ctrl_v}
  */
  readonly mSrhCtrlV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#mac_id ObjectSystemNpuNputcamSactA#mac_id}
  */
  readonly macId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#mac_id_v ObjectSystemNpuNputcamSactA#mac_id_v}
  */
  readonly macIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#mss ObjectSystemNpuNputcamSactA#mss}
  */
  readonly mss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#mss_v ObjectSystemNpuNputcamSactA#mss_v}
  */
  readonly mssV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#npu_tcam ObjectSystemNpuNputcamSactA#npu_tcam}
  */
  readonly npuTcam: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#pleen ObjectSystemNpuNputcamSactA#pleen}
  */
  readonly pleen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#pleen_v ObjectSystemNpuNputcamSactA#pleen_v}
  */
  readonly pleenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#prio_pid ObjectSystemNpuNputcamSactA#prio_pid}
  */
  readonly prioPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#prio_pid_v ObjectSystemNpuNputcamSactA#prio_pid_v}
  */
  readonly prioPidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#promis ObjectSystemNpuNputcamSactA#promis}
  */
  readonly promis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#promis_v ObjectSystemNpuNputcamSactA#promis_v}
  */
  readonly promisV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#rfsh ObjectSystemNpuNputcamSactA#rfsh}
  */
  readonly rfsh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#rfsh_v ObjectSystemNpuNputcamSactA#rfsh_v}
  */
  readonly rfshV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#scopetype ObjectSystemNpuNputcamSactA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#smac_skip ObjectSystemNpuNputcamSactA#smac_skip}
  */
  readonly smacSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#smac_skip_v ObjectSystemNpuNputcamSactA#smac_skip_v}
  */
  readonly smacSkipV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#tp_smchk ObjectSystemNpuNputcamSactA#tp_smchk}
  */
  readonly tpSmchk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#tp_smchk_v ObjectSystemNpuNputcamSactA#tp_smchk_v}
  */
  readonly tpSmchkV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#tpe_id ObjectSystemNpuNputcamSactA#tpe_id}
  */
  readonly tpeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#tpe_id_v ObjectSystemNpuNputcamSactA#tpe_id_v}
  */
  readonly tpeIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#vdm ObjectSystemNpuNputcamSactA#vdm}
  */
  readonly vdm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#vdm_v ObjectSystemNpuNputcamSactA#vdm_v}
  */
  readonly vdmV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#vdom_id ObjectSystemNpuNputcamSactA#vdom_id}
  */
  readonly vdomId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#vdom_id_v ObjectSystemNpuNputcamSactA#vdom_id_v}
  */
  readonly vdomIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#x_mode ObjectSystemNpuNputcamSactA#x_mode}
  */
  readonly xMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#x_mode_v ObjectSystemNpuNputcamSactA#x_mode_v}
  */
  readonly xModeV?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact fortimanager_object_system_npu_nputcam_sact}
*/
export class ObjectSystemNpuNputcamSactA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_nputcam_sact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuNputcamSactA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuNputcamSactA to import
  * @param importFromId The id of the existing ObjectSystemNpuNputcamSactA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuNputcamSactA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_nputcam_sact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam_sact fortimanager_object_system_npu_nputcam_sact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuNputcamSactAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuNputcamSactAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_nputcam_sact',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._act = config.act;
    this._actV = config.actV;
    this._adom = config.adom;
    this._bmproc = config.bmproc;
    this._bmprocV = config.bmprocV;
    this._dfLif = config.dfLif;
    this._dfLifV = config.dfLifV;
    this._dfr = config.dfr;
    this._dfrV = config.dfrV;
    this._dmacSkip = config.dmacSkip;
    this._dmacSkipV = config.dmacSkipV;
    this._dosen = config.dosen;
    this._dosenV = config.dosenV;
    this._espffProc = config.espffProc;
    this._espffProcV = config.espffProcV;
    this._etypePid = config.etypePid;
    this._etypePidV = config.etypePidV;
    this._fragProc = config.fragProc;
    this._fragProcV = config.fragProcV;
    this._fwd = config.fwd;
    this._fwdLif = config.fwdLif;
    this._fwdLifV = config.fwdLifV;
    this._fwdTvid = config.fwdTvid;
    this._fwdTvidV = config.fwdTvidV;
    this._fwdV = config.fwdV;
    this._icpen = config.icpen;
    this._icpenV = config.icpenV;
    this._id = config.id;
    this._igmpMldSnp = config.igmpMldSnp;
    this._igmpMldSnpV = config.igmpMldSnpV;
    this._learn = config.learn;
    this._learnV = config.learnV;
    this._mSrhCtrl = config.mSrhCtrl;
    this._mSrhCtrlV = config.mSrhCtrlV;
    this._macId = config.macId;
    this._macIdV = config.macIdV;
    this._mss = config.mss;
    this._mssV = config.mssV;
    this._npuTcam = config.npuTcam;
    this._pleen = config.pleen;
    this._pleenV = config.pleenV;
    this._prioPid = config.prioPid;
    this._prioPidV = config.prioPidV;
    this._promis = config.promis;
    this._promisV = config.promisV;
    this._rfsh = config.rfsh;
    this._rfshV = config.rfshV;
    this._scopetype = config.scopetype;
    this._smacSkip = config.smacSkip;
    this._smacSkipV = config.smacSkipV;
    this._tpSmchk = config.tpSmchk;
    this._tpSmchkV = config.tpSmchkV;
    this._tpeId = config.tpeId;
    this._tpeIdV = config.tpeIdV;
    this._vdm = config.vdm;
    this._vdmV = config.vdmV;
    this._vdomId = config.vdomId;
    this._vdomIdV = config.vdomIdV;
    this._xMode = config.xMode;
    this._xModeV = config.xModeV;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // act - computed: false, optional: true, required: false
  private _act?: number; 
  public get act() {
    return this.getNumberAttribute('act');
  }
  public set act(value: number) {
    this._act = value;
  }
  public resetAct() {
    this._act = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actInput() {
    return this._act;
  }

  // act_v - computed: true, optional: true, required: false
  private _actV?: string; 
  public get actV() {
    return this.getStringAttribute('act_v');
  }
  public set actV(value: string) {
    this._actV = value;
  }
  public resetActV() {
    this._actV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actVInput() {
    return this._actV;
  }

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

  // bmproc - computed: false, optional: true, required: false
  private _bmproc?: number; 
  public get bmproc() {
    return this.getNumberAttribute('bmproc');
  }
  public set bmproc(value: number) {
    this._bmproc = value;
  }
  public resetBmproc() {
    this._bmproc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmprocInput() {
    return this._bmproc;
  }

  // bmproc_v - computed: true, optional: true, required: false
  private _bmprocV?: string; 
  public get bmprocV() {
    return this.getStringAttribute('bmproc_v');
  }
  public set bmprocV(value: string) {
    this._bmprocV = value;
  }
  public resetBmprocV() {
    this._bmprocV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmprocVInput() {
    return this._bmprocV;
  }

  // df_lif - computed: false, optional: true, required: false
  private _dfLif?: number; 
  public get dfLif() {
    return this.getNumberAttribute('df_lif');
  }
  public set dfLif(value: number) {
    this._dfLif = value;
  }
  public resetDfLif() {
    this._dfLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfLifInput() {
    return this._dfLif;
  }

  // df_lif_v - computed: true, optional: true, required: false
  private _dfLifV?: string; 
  public get dfLifV() {
    return this.getStringAttribute('df_lif_v');
  }
  public set dfLifV(value: string) {
    this._dfLifV = value;
  }
  public resetDfLifV() {
    this._dfLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfLifVInput() {
    return this._dfLifV;
  }

  // dfr - computed: false, optional: true, required: false
  private _dfr?: number; 
  public get dfr() {
    return this.getNumberAttribute('dfr');
  }
  public set dfr(value: number) {
    this._dfr = value;
  }
  public resetDfr() {
    this._dfr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfrInput() {
    return this._dfr;
  }

  // dfr_v - computed: true, optional: true, required: false
  private _dfrV?: string; 
  public get dfrV() {
    return this.getStringAttribute('dfr_v');
  }
  public set dfrV(value: string) {
    this._dfrV = value;
  }
  public resetDfrV() {
    this._dfrV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfrVInput() {
    return this._dfrV;
  }

  // dmac_skip - computed: false, optional: true, required: false
  private _dmacSkip?: number; 
  public get dmacSkip() {
    return this.getNumberAttribute('dmac_skip');
  }
  public set dmacSkip(value: number) {
    this._dmacSkip = value;
  }
  public resetDmacSkip() {
    this._dmacSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmacSkipInput() {
    return this._dmacSkip;
  }

  // dmac_skip_v - computed: true, optional: true, required: false
  private _dmacSkipV?: string; 
  public get dmacSkipV() {
    return this.getStringAttribute('dmac_skip_v');
  }
  public set dmacSkipV(value: string) {
    this._dmacSkipV = value;
  }
  public resetDmacSkipV() {
    this._dmacSkipV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmacSkipVInput() {
    return this._dmacSkipV;
  }

  // dosen - computed: false, optional: true, required: false
  private _dosen?: number; 
  public get dosen() {
    return this.getNumberAttribute('dosen');
  }
  public set dosen(value: number) {
    this._dosen = value;
  }
  public resetDosen() {
    this._dosen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosenInput() {
    return this._dosen;
  }

  // dosen_v - computed: true, optional: true, required: false
  private _dosenV?: string; 
  public get dosenV() {
    return this.getStringAttribute('dosen_v');
  }
  public set dosenV(value: string) {
    this._dosenV = value;
  }
  public resetDosenV() {
    this._dosenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosenVInput() {
    return this._dosenV;
  }

  // espff_proc - computed: false, optional: true, required: false
  private _espffProc?: number; 
  public get espffProc() {
    return this.getNumberAttribute('espff_proc');
  }
  public set espffProc(value: number) {
    this._espffProc = value;
  }
  public resetEspffProc() {
    this._espffProc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espffProcInput() {
    return this._espffProc;
  }

  // espff_proc_v - computed: true, optional: true, required: false
  private _espffProcV?: string; 
  public get espffProcV() {
    return this.getStringAttribute('espff_proc_v');
  }
  public set espffProcV(value: string) {
    this._espffProcV = value;
  }
  public resetEspffProcV() {
    this._espffProcV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espffProcVInput() {
    return this._espffProcV;
  }

  // etype_pid - computed: false, optional: true, required: false
  private _etypePid?: number; 
  public get etypePid() {
    return this.getNumberAttribute('etype_pid');
  }
  public set etypePid(value: number) {
    this._etypePid = value;
  }
  public resetEtypePid() {
    this._etypePid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etypePidInput() {
    return this._etypePid;
  }

  // etype_pid_v - computed: true, optional: true, required: false
  private _etypePidV?: string; 
  public get etypePidV() {
    return this.getStringAttribute('etype_pid_v');
  }
  public set etypePidV(value: string) {
    this._etypePidV = value;
  }
  public resetEtypePidV() {
    this._etypePidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etypePidVInput() {
    return this._etypePidV;
  }

  // frag_proc - computed: false, optional: true, required: false
  private _fragProc?: number; 
  public get fragProc() {
    return this.getNumberAttribute('frag_proc');
  }
  public set fragProc(value: number) {
    this._fragProc = value;
  }
  public resetFragProc() {
    this._fragProc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragProcInput() {
    return this._fragProc;
  }

  // frag_proc_v - computed: true, optional: true, required: false
  private _fragProcV?: string; 
  public get fragProcV() {
    return this.getStringAttribute('frag_proc_v');
  }
  public set fragProcV(value: string) {
    this._fragProcV = value;
  }
  public resetFragProcV() {
    this._fragProcV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragProcVInput() {
    return this._fragProcV;
  }

  // fwd - computed: false, optional: true, required: false
  private _fwd?: number; 
  public get fwd() {
    return this.getNumberAttribute('fwd');
  }
  public set fwd(value: number) {
    this._fwd = value;
  }
  public resetFwd() {
    this._fwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdInput() {
    return this._fwd;
  }

  // fwd_lif - computed: false, optional: true, required: false
  private _fwdLif?: number; 
  public get fwdLif() {
    return this.getNumberAttribute('fwd_lif');
  }
  public set fwdLif(value: number) {
    this._fwdLif = value;
  }
  public resetFwdLif() {
    this._fwdLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLifInput() {
    return this._fwdLif;
  }

  // fwd_lif_v - computed: true, optional: true, required: false
  private _fwdLifV?: string; 
  public get fwdLifV() {
    return this.getStringAttribute('fwd_lif_v');
  }
  public set fwdLifV(value: string) {
    this._fwdLifV = value;
  }
  public resetFwdLifV() {
    this._fwdLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLifVInput() {
    return this._fwdLifV;
  }

  // fwd_tvid - computed: false, optional: true, required: false
  private _fwdTvid?: number; 
  public get fwdTvid() {
    return this.getNumberAttribute('fwd_tvid');
  }
  public set fwdTvid(value: number) {
    this._fwdTvid = value;
  }
  public resetFwdTvid() {
    this._fwdTvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdTvidInput() {
    return this._fwdTvid;
  }

  // fwd_tvid_v - computed: true, optional: true, required: false
  private _fwdTvidV?: string; 
  public get fwdTvidV() {
    return this.getStringAttribute('fwd_tvid_v');
  }
  public set fwdTvidV(value: string) {
    this._fwdTvidV = value;
  }
  public resetFwdTvidV() {
    this._fwdTvidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdTvidVInput() {
    return this._fwdTvidV;
  }

  // fwd_v - computed: true, optional: true, required: false
  private _fwdV?: string; 
  public get fwdV() {
    return this.getStringAttribute('fwd_v');
  }
  public set fwdV(value: string) {
    this._fwdV = value;
  }
  public resetFwdV() {
    this._fwdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdVInput() {
    return this._fwdV;
  }

  // icpen - computed: false, optional: true, required: false
  private _icpen?: number; 
  public get icpen() {
    return this.getNumberAttribute('icpen');
  }
  public set icpen(value: number) {
    this._icpen = value;
  }
  public resetIcpen() {
    this._icpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icpenInput() {
    return this._icpen;
  }

  // icpen_v - computed: true, optional: true, required: false
  private _icpenV?: string; 
  public get icpenV() {
    return this.getStringAttribute('icpen_v');
  }
  public set icpenV(value: string) {
    this._icpenV = value;
  }
  public resetIcpenV() {
    this._icpenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icpenVInput() {
    return this._icpenV;
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

  // igmp_mld_snp - computed: false, optional: true, required: false
  private _igmpMldSnp?: number; 
  public get igmpMldSnp() {
    return this.getNumberAttribute('igmp_mld_snp');
  }
  public set igmpMldSnp(value: number) {
    this._igmpMldSnp = value;
  }
  public resetIgmpMldSnp() {
    this._igmpMldSnp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpMldSnpInput() {
    return this._igmpMldSnp;
  }

  // igmp_mld_snp_v - computed: true, optional: true, required: false
  private _igmpMldSnpV?: string; 
  public get igmpMldSnpV() {
    return this.getStringAttribute('igmp_mld_snp_v');
  }
  public set igmpMldSnpV(value: string) {
    this._igmpMldSnpV = value;
  }
  public resetIgmpMldSnpV() {
    this._igmpMldSnpV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpMldSnpVInput() {
    return this._igmpMldSnpV;
  }

  // learn - computed: false, optional: true, required: false
  private _learn?: number; 
  public get learn() {
    return this.getNumberAttribute('learn');
  }
  public set learn(value: number) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // learn_v - computed: true, optional: true, required: false
  private _learnV?: string; 
  public get learnV() {
    return this.getStringAttribute('learn_v');
  }
  public set learnV(value: string) {
    this._learnV = value;
  }
  public resetLearnV() {
    this._learnV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnVInput() {
    return this._learnV;
  }

  // m_srh_ctrl - computed: false, optional: true, required: false
  private _mSrhCtrl?: number; 
  public get mSrhCtrl() {
    return this.getNumberAttribute('m_srh_ctrl');
  }
  public set mSrhCtrl(value: number) {
    this._mSrhCtrl = value;
  }
  public resetMSrhCtrl() {
    this._mSrhCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSrhCtrlInput() {
    return this._mSrhCtrl;
  }

  // m_srh_ctrl_v - computed: true, optional: true, required: false
  private _mSrhCtrlV?: string; 
  public get mSrhCtrlV() {
    return this.getStringAttribute('m_srh_ctrl_v');
  }
  public set mSrhCtrlV(value: string) {
    this._mSrhCtrlV = value;
  }
  public resetMSrhCtrlV() {
    this._mSrhCtrlV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSrhCtrlVInput() {
    return this._mSrhCtrlV;
  }

  // mac_id - computed: false, optional: true, required: false
  private _macId?: number; 
  public get macId() {
    return this.getNumberAttribute('mac_id');
  }
  public set macId(value: number) {
    this._macId = value;
  }
  public resetMacId() {
    this._macId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdInput() {
    return this._macId;
  }

  // mac_id_v - computed: true, optional: true, required: false
  private _macIdV?: string; 
  public get macIdV() {
    return this.getStringAttribute('mac_id_v');
  }
  public set macIdV(value: string) {
    this._macIdV = value;
  }
  public resetMacIdV() {
    this._macIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdVInput() {
    return this._macIdV;
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

  // mss_v - computed: true, optional: true, required: false
  private _mssV?: string; 
  public get mssV() {
    return this.getStringAttribute('mss_v');
  }
  public set mssV(value: string) {
    this._mssV = value;
  }
  public resetMssV() {
    this._mssV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssVInput() {
    return this._mssV;
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

  // pleen - computed: false, optional: true, required: false
  private _pleen?: number; 
  public get pleen() {
    return this.getNumberAttribute('pleen');
  }
  public set pleen(value: number) {
    this._pleen = value;
  }
  public resetPleen() {
    this._pleen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleenInput() {
    return this._pleen;
  }

  // pleen_v - computed: true, optional: true, required: false
  private _pleenV?: string; 
  public get pleenV() {
    return this.getStringAttribute('pleen_v');
  }
  public set pleenV(value: string) {
    this._pleenV = value;
  }
  public resetPleenV() {
    this._pleenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleenVInput() {
    return this._pleenV;
  }

  // prio_pid - computed: false, optional: true, required: false
  private _prioPid?: number; 
  public get prioPid() {
    return this.getNumberAttribute('prio_pid');
  }
  public set prioPid(value: number) {
    this._prioPid = value;
  }
  public resetPrioPid() {
    this._prioPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioPidInput() {
    return this._prioPid;
  }

  // prio_pid_v - computed: true, optional: true, required: false
  private _prioPidV?: string; 
  public get prioPidV() {
    return this.getStringAttribute('prio_pid_v');
  }
  public set prioPidV(value: string) {
    this._prioPidV = value;
  }
  public resetPrioPidV() {
    this._prioPidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioPidVInput() {
    return this._prioPidV;
  }

  // promis - computed: false, optional: true, required: false
  private _promis?: number; 
  public get promis() {
    return this.getNumberAttribute('promis');
  }
  public set promis(value: number) {
    this._promis = value;
  }
  public resetPromis() {
    this._promis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promisInput() {
    return this._promis;
  }

  // promis_v - computed: true, optional: true, required: false
  private _promisV?: string; 
  public get promisV() {
    return this.getStringAttribute('promis_v');
  }
  public set promisV(value: string) {
    this._promisV = value;
  }
  public resetPromisV() {
    this._promisV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promisVInput() {
    return this._promisV;
  }

  // rfsh - computed: false, optional: true, required: false
  private _rfsh?: number; 
  public get rfsh() {
    return this.getNumberAttribute('rfsh');
  }
  public set rfsh(value: number) {
    this._rfsh = value;
  }
  public resetRfsh() {
    this._rfsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfshInput() {
    return this._rfsh;
  }

  // rfsh_v - computed: true, optional: true, required: false
  private _rfshV?: string; 
  public get rfshV() {
    return this.getStringAttribute('rfsh_v');
  }
  public set rfshV(value: string) {
    this._rfshV = value;
  }
  public resetRfshV() {
    this._rfshV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfshVInput() {
    return this._rfshV;
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

  // smac_skip - computed: false, optional: true, required: false
  private _smacSkip?: number; 
  public get smacSkip() {
    return this.getNumberAttribute('smac_skip');
  }
  public set smacSkip(value: number) {
    this._smacSkip = value;
  }
  public resetSmacSkip() {
    this._smacSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacSkipInput() {
    return this._smacSkip;
  }

  // smac_skip_v - computed: true, optional: true, required: false
  private _smacSkipV?: string; 
  public get smacSkipV() {
    return this.getStringAttribute('smac_skip_v');
  }
  public set smacSkipV(value: string) {
    this._smacSkipV = value;
  }
  public resetSmacSkipV() {
    this._smacSkipV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacSkipVInput() {
    return this._smacSkipV;
  }

  // tp_smchk - computed: false, optional: true, required: false
  private _tpSmchk?: number; 
  public get tpSmchk() {
    return this.getNumberAttribute('tp_smchk');
  }
  public set tpSmchk(value: number) {
    this._tpSmchk = value;
  }
  public resetTpSmchk() {
    this._tpSmchk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpSmchkInput() {
    return this._tpSmchk;
  }

  // tp_smchk_v - computed: true, optional: true, required: false
  private _tpSmchkV?: string; 
  public get tpSmchkV() {
    return this.getStringAttribute('tp_smchk_v');
  }
  public set tpSmchkV(value: string) {
    this._tpSmchkV = value;
  }
  public resetTpSmchkV() {
    this._tpSmchkV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpSmchkVInput() {
    return this._tpSmchkV;
  }

  // tpe_id - computed: false, optional: true, required: false
  private _tpeId?: number; 
  public get tpeId() {
    return this.getNumberAttribute('tpe_id');
  }
  public set tpeId(value: number) {
    this._tpeId = value;
  }
  public resetTpeId() {
    this._tpeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeIdInput() {
    return this._tpeId;
  }

  // tpe_id_v - computed: true, optional: true, required: false
  private _tpeIdV?: string; 
  public get tpeIdV() {
    return this.getStringAttribute('tpe_id_v');
  }
  public set tpeIdV(value: string) {
    this._tpeIdV = value;
  }
  public resetTpeIdV() {
    this._tpeIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeIdVInput() {
    return this._tpeIdV;
  }

  // vdm - computed: false, optional: true, required: false
  private _vdm?: number; 
  public get vdm() {
    return this.getNumberAttribute('vdm');
  }
  public set vdm(value: number) {
    this._vdm = value;
  }
  public resetVdm() {
    this._vdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmInput() {
    return this._vdm;
  }

  // vdm_v - computed: true, optional: true, required: false
  private _vdmV?: string; 
  public get vdmV() {
    return this.getStringAttribute('vdm_v');
  }
  public set vdmV(value: string) {
    this._vdmV = value;
  }
  public resetVdmV() {
    this._vdmV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmVInput() {
    return this._vdmV;
  }

  // vdom_id - computed: false, optional: true, required: false
  private _vdomId?: number; 
  public get vdomId() {
    return this.getNumberAttribute('vdom_id');
  }
  public set vdomId(value: number) {
    this._vdomId = value;
  }
  public resetVdomId() {
    this._vdomId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdInput() {
    return this._vdomId;
  }

  // vdom_id_v - computed: true, optional: true, required: false
  private _vdomIdV?: string; 
  public get vdomIdV() {
    return this.getStringAttribute('vdom_id_v');
  }
  public set vdomIdV(value: string) {
    this._vdomIdV = value;
  }
  public resetVdomIdV() {
    this._vdomIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdVInput() {
    return this._vdomIdV;
  }

  // x_mode - computed: false, optional: true, required: false
  private _xMode?: number; 
  public get xMode() {
    return this.getNumberAttribute('x_mode');
  }
  public set xMode(value: number) {
    this._xMode = value;
  }
  public resetXMode() {
    this._xMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xModeInput() {
    return this._xMode;
  }

  // x_mode_v - computed: true, optional: true, required: false
  private _xModeV?: string; 
  public get xModeV() {
    return this.getStringAttribute('x_mode_v');
  }
  public set xModeV(value: string) {
    this._xModeV = value;
  }
  public resetXModeV() {
    this._xModeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xModeVInput() {
    return this._xModeV;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      act: cdktf.numberToTerraform(this._act),
      act_v: cdktf.stringToTerraform(this._actV),
      adom: cdktf.stringToTerraform(this._adom),
      bmproc: cdktf.numberToTerraform(this._bmproc),
      bmproc_v: cdktf.stringToTerraform(this._bmprocV),
      df_lif: cdktf.numberToTerraform(this._dfLif),
      df_lif_v: cdktf.stringToTerraform(this._dfLifV),
      dfr: cdktf.numberToTerraform(this._dfr),
      dfr_v: cdktf.stringToTerraform(this._dfrV),
      dmac_skip: cdktf.numberToTerraform(this._dmacSkip),
      dmac_skip_v: cdktf.stringToTerraform(this._dmacSkipV),
      dosen: cdktf.numberToTerraform(this._dosen),
      dosen_v: cdktf.stringToTerraform(this._dosenV),
      espff_proc: cdktf.numberToTerraform(this._espffProc),
      espff_proc_v: cdktf.stringToTerraform(this._espffProcV),
      etype_pid: cdktf.numberToTerraform(this._etypePid),
      etype_pid_v: cdktf.stringToTerraform(this._etypePidV),
      frag_proc: cdktf.numberToTerraform(this._fragProc),
      frag_proc_v: cdktf.stringToTerraform(this._fragProcV),
      fwd: cdktf.numberToTerraform(this._fwd),
      fwd_lif: cdktf.numberToTerraform(this._fwdLif),
      fwd_lif_v: cdktf.stringToTerraform(this._fwdLifV),
      fwd_tvid: cdktf.numberToTerraform(this._fwdTvid),
      fwd_tvid_v: cdktf.stringToTerraform(this._fwdTvidV),
      fwd_v: cdktf.stringToTerraform(this._fwdV),
      icpen: cdktf.numberToTerraform(this._icpen),
      icpen_v: cdktf.stringToTerraform(this._icpenV),
      id: cdktf.stringToTerraform(this._id),
      igmp_mld_snp: cdktf.numberToTerraform(this._igmpMldSnp),
      igmp_mld_snp_v: cdktf.stringToTerraform(this._igmpMldSnpV),
      learn: cdktf.numberToTerraform(this._learn),
      learn_v: cdktf.stringToTerraform(this._learnV),
      m_srh_ctrl: cdktf.numberToTerraform(this._mSrhCtrl),
      m_srh_ctrl_v: cdktf.stringToTerraform(this._mSrhCtrlV),
      mac_id: cdktf.numberToTerraform(this._macId),
      mac_id_v: cdktf.stringToTerraform(this._macIdV),
      mss: cdktf.numberToTerraform(this._mss),
      mss_v: cdktf.stringToTerraform(this._mssV),
      npu_tcam: cdktf.stringToTerraform(this._npuTcam),
      pleen: cdktf.numberToTerraform(this._pleen),
      pleen_v: cdktf.stringToTerraform(this._pleenV),
      prio_pid: cdktf.numberToTerraform(this._prioPid),
      prio_pid_v: cdktf.stringToTerraform(this._prioPidV),
      promis: cdktf.numberToTerraform(this._promis),
      promis_v: cdktf.stringToTerraform(this._promisV),
      rfsh: cdktf.numberToTerraform(this._rfsh),
      rfsh_v: cdktf.stringToTerraform(this._rfshV),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      smac_skip: cdktf.numberToTerraform(this._smacSkip),
      smac_skip_v: cdktf.stringToTerraform(this._smacSkipV),
      tp_smchk: cdktf.numberToTerraform(this._tpSmchk),
      tp_smchk_v: cdktf.stringToTerraform(this._tpSmchkV),
      tpe_id: cdktf.numberToTerraform(this._tpeId),
      tpe_id_v: cdktf.stringToTerraform(this._tpeIdV),
      vdm: cdktf.numberToTerraform(this._vdm),
      vdm_v: cdktf.stringToTerraform(this._vdmV),
      vdom_id: cdktf.numberToTerraform(this._vdomId),
      vdom_id_v: cdktf.stringToTerraform(this._vdomIdV),
      x_mode: cdktf.numberToTerraform(this._xMode),
      x_mode_v: cdktf.stringToTerraform(this._xModeV),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      act: {
        value: cdktf.numberToHclTerraform(this._act),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      act_v: {
        value: cdktf.stringToHclTerraform(this._actV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bmproc: {
        value: cdktf.numberToHclTerraform(this._bmproc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bmproc_v: {
        value: cdktf.stringToHclTerraform(this._bmprocV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      df_lif: {
        value: cdktf.numberToHclTerraform(this._dfLif),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      df_lif_v: {
        value: cdktf.stringToHclTerraform(this._dfLifV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfr: {
        value: cdktf.numberToHclTerraform(this._dfr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dfr_v: {
        value: cdktf.stringToHclTerraform(this._dfrV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dmac_skip: {
        value: cdktf.numberToHclTerraform(this._dmacSkip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dmac_skip_v: {
        value: cdktf.stringToHclTerraform(this._dmacSkipV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dosen: {
        value: cdktf.numberToHclTerraform(this._dosen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dosen_v: {
        value: cdktf.stringToHclTerraform(this._dosenV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      espff_proc: {
        value: cdktf.numberToHclTerraform(this._espffProc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      espff_proc_v: {
        value: cdktf.stringToHclTerraform(this._espffProcV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etype_pid: {
        value: cdktf.numberToHclTerraform(this._etypePid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      etype_pid_v: {
        value: cdktf.stringToHclTerraform(this._etypePidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frag_proc: {
        value: cdktf.numberToHclTerraform(this._fragProc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frag_proc_v: {
        value: cdktf.stringToHclTerraform(this._fragProcV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd: {
        value: cdktf.numberToHclTerraform(this._fwd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_lif: {
        value: cdktf.numberToHclTerraform(this._fwdLif),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_lif_v: {
        value: cdktf.stringToHclTerraform(this._fwdLifV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_tvid: {
        value: cdktf.numberToHclTerraform(this._fwdTvid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_tvid_v: {
        value: cdktf.stringToHclTerraform(this._fwdTvidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_v: {
        value: cdktf.stringToHclTerraform(this._fwdV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icpen: {
        value: cdktf.numberToHclTerraform(this._icpen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icpen_v: {
        value: cdktf.stringToHclTerraform(this._icpenV),
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
      igmp_mld_snp: {
        value: cdktf.numberToHclTerraform(this._igmpMldSnp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      igmp_mld_snp_v: {
        value: cdktf.stringToHclTerraform(this._igmpMldSnpV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn: {
        value: cdktf.numberToHclTerraform(this._learn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      learn_v: {
        value: cdktf.stringToHclTerraform(this._learnV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      m_srh_ctrl: {
        value: cdktf.numberToHclTerraform(this._mSrhCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      m_srh_ctrl_v: {
        value: cdktf.stringToHclTerraform(this._mSrhCtrlV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_id: {
        value: cdktf.numberToHclTerraform(this._macId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_id_v: {
        value: cdktf.stringToHclTerraform(this._macIdV),
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
      mss_v: {
        value: cdktf.stringToHclTerraform(this._mssV),
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
      pleen: {
        value: cdktf.numberToHclTerraform(this._pleen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pleen_v: {
        value: cdktf.stringToHclTerraform(this._pleenV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prio_pid: {
        value: cdktf.numberToHclTerraform(this._prioPid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prio_pid_v: {
        value: cdktf.stringToHclTerraform(this._prioPidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promis: {
        value: cdktf.numberToHclTerraform(this._promis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      promis_v: {
        value: cdktf.stringToHclTerraform(this._promisV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfsh: {
        value: cdktf.numberToHclTerraform(this._rfsh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rfsh_v: {
        value: cdktf.stringToHclTerraform(this._rfshV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smac_skip: {
        value: cdktf.numberToHclTerraform(this._smacSkip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smac_skip_v: {
        value: cdktf.stringToHclTerraform(this._smacSkipV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tp_smchk: {
        value: cdktf.numberToHclTerraform(this._tpSmchk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tp_smchk_v: {
        value: cdktf.stringToHclTerraform(this._tpSmchkV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpe_id: {
        value: cdktf.numberToHclTerraform(this._tpeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tpe_id_v: {
        value: cdktf.stringToHclTerraform(this._tpeIdV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdm: {
        value: cdktf.numberToHclTerraform(this._vdm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdm_v: {
        value: cdktf.stringToHclTerraform(this._vdmV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_id: {
        value: cdktf.numberToHclTerraform(this._vdomId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdom_id_v: {
        value: cdktf.stringToHclTerraform(this._vdomIdV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_mode: {
        value: cdktf.numberToHclTerraform(this._xMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      x_mode_v: {
        value: cdktf.stringToHclTerraform(this._xModeV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
