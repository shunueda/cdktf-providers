// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuNputcamTactAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#act ObjectSystemNpuNputcamTactA#act}
  */
  readonly act?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#act_v ObjectSystemNpuNputcamTactA#act_v}
  */
  readonly actV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#adom ObjectSystemNpuNputcamTactA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#fmtuv4_s ObjectSystemNpuNputcamTactA#fmtuv4_s}
  */
  readonly fmtuv4S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#fmtuv4_s_v ObjectSystemNpuNputcamTactA#fmtuv4_s_v}
  */
  readonly fmtuv4SV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#fmtuv6_s ObjectSystemNpuNputcamTactA#fmtuv6_s}
  */
  readonly fmtuv6S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#fmtuv6_s_v ObjectSystemNpuNputcamTactA#fmtuv6_s_v}
  */
  readonly fmtuv6SV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#id ObjectSystemNpuNputcamTactA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#lnkid ObjectSystemNpuNputcamTactA#lnkid}
  */
  readonly lnkid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#lnkid_v ObjectSystemNpuNputcamTactA#lnkid_v}
  */
  readonly lnkidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mac_id ObjectSystemNpuNputcamTactA#mac_id}
  */
  readonly macId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mac_id_v ObjectSystemNpuNputcamTactA#mac_id_v}
  */
  readonly macIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mss_t ObjectSystemNpuNputcamTactA#mss_t}
  */
  readonly mssT?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mss_t_v ObjectSystemNpuNputcamTactA#mss_t_v}
  */
  readonly mssTV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mtuv4 ObjectSystemNpuNputcamTactA#mtuv4}
  */
  readonly mtuv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mtuv4_v ObjectSystemNpuNputcamTactA#mtuv4_v}
  */
  readonly mtuv4V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mtuv6 ObjectSystemNpuNputcamTactA#mtuv6}
  */
  readonly mtuv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#mtuv6_v ObjectSystemNpuNputcamTactA#mtuv6_v}
  */
  readonly mtuv6V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#npu_tcam ObjectSystemNpuNputcamTactA#npu_tcam}
  */
  readonly npuTcam: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#scopetype ObjectSystemNpuNputcamTactA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#slif_act ObjectSystemNpuNputcamTactA#slif_act}
  */
  readonly slifAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#slif_act_v ObjectSystemNpuNputcamTactA#slif_act_v}
  */
  readonly slifActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#sublnkid ObjectSystemNpuNputcamTactA#sublnkid}
  */
  readonly sublnkid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#sublnkid_v ObjectSystemNpuNputcamTactA#sublnkid_v}
  */
  readonly sublnkidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#tgtv_act ObjectSystemNpuNputcamTactA#tgtv_act}
  */
  readonly tgtvAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#tgtv_act_v ObjectSystemNpuNputcamTactA#tgtv_act_v}
  */
  readonly tgtvActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#tlif_act ObjectSystemNpuNputcamTactA#tlif_act}
  */
  readonly tlifAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#tlif_act_v ObjectSystemNpuNputcamTactA#tlif_act_v}
  */
  readonly tlifActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#tpeid ObjectSystemNpuNputcamTactA#tpeid}
  */
  readonly tpeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#tpeid_v ObjectSystemNpuNputcamTactA#tpeid_v}
  */
  readonly tpeidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#v6fe ObjectSystemNpuNputcamTactA#v6fe}
  */
  readonly v6Fe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#v6fe_v ObjectSystemNpuNputcamTactA#v6fe_v}
  */
  readonly v6FeV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#vep_en ObjectSystemNpuNputcamTactA#vep_en}
  */
  readonly vepEn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#vep_en_v ObjectSystemNpuNputcamTactA#vep_en_v}
  */
  readonly vepEnV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#vep_slid ObjectSystemNpuNputcamTactA#vep_slid}
  */
  readonly vepSlid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#vep_slid_v ObjectSystemNpuNputcamTactA#vep_slid_v}
  */
  readonly vepSlidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#xlt_lif ObjectSystemNpuNputcamTactA#xlt_lif}
  */
  readonly xltLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#xlt_lif_v ObjectSystemNpuNputcamTactA#xlt_lif_v}
  */
  readonly xltLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#xlt_vid ObjectSystemNpuNputcamTactA#xlt_vid}
  */
  readonly xltVid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#xlt_vid_v ObjectSystemNpuNputcamTactA#xlt_vid_v}
  */
  readonly xltVidV?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact fortimanager_object_system_npu_nputcam_tact}
*/
export class ObjectSystemNpuNputcamTactA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_nputcam_tact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuNputcamTactA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuNputcamTactA to import
  * @param importFromId The id of the existing ObjectSystemNpuNputcamTactA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuNputcamTactA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_nputcam_tact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_nputcam_tact fortimanager_object_system_npu_nputcam_tact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuNputcamTactAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuNputcamTactAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_nputcam_tact',
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
    this._act = config.act;
    this._actV = config.actV;
    this._adom = config.adom;
    this._fmtuv4S = config.fmtuv4S;
    this._fmtuv4SV = config.fmtuv4SV;
    this._fmtuv6S = config.fmtuv6S;
    this._fmtuv6SV = config.fmtuv6SV;
    this._id = config.id;
    this._lnkid = config.lnkid;
    this._lnkidV = config.lnkidV;
    this._macId = config.macId;
    this._macIdV = config.macIdV;
    this._mssT = config.mssT;
    this._mssTV = config.mssTV;
    this._mtuv4 = config.mtuv4;
    this._mtuv4V = config.mtuv4V;
    this._mtuv6 = config.mtuv6;
    this._mtuv6V = config.mtuv6V;
    this._npuTcam = config.npuTcam;
    this._scopetype = config.scopetype;
    this._slifAct = config.slifAct;
    this._slifActV = config.slifActV;
    this._sublnkid = config.sublnkid;
    this._sublnkidV = config.sublnkidV;
    this._tgtvAct = config.tgtvAct;
    this._tgtvActV = config.tgtvActV;
    this._tlifAct = config.tlifAct;
    this._tlifActV = config.tlifActV;
    this._tpeid = config.tpeid;
    this._tpeidV = config.tpeidV;
    this._v6Fe = config.v6Fe;
    this._v6FeV = config.v6FeV;
    this._vepEn = config.vepEn;
    this._vepEnV = config.vepEnV;
    this._vepSlid = config.vepSlid;
    this._vepSlidV = config.vepSlidV;
    this._xltLif = config.xltLif;
    this._xltLifV = config.xltLifV;
    this._xltVid = config.xltVid;
    this._xltVidV = config.xltVidV;
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

  // fmtuv4_s - computed: false, optional: true, required: false
  private _fmtuv4S?: number; 
  public get fmtuv4S() {
    return this.getNumberAttribute('fmtuv4_s');
  }
  public set fmtuv4S(value: number) {
    this._fmtuv4S = value;
  }
  public resetFmtuv4S() {
    this._fmtuv4S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv4SInput() {
    return this._fmtuv4S;
  }

  // fmtuv4_s_v - computed: true, optional: true, required: false
  private _fmtuv4SV?: string; 
  public get fmtuv4SV() {
    return this.getStringAttribute('fmtuv4_s_v');
  }
  public set fmtuv4SV(value: string) {
    this._fmtuv4SV = value;
  }
  public resetFmtuv4SV() {
    this._fmtuv4SV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv4SVInput() {
    return this._fmtuv4SV;
  }

  // fmtuv6_s - computed: false, optional: true, required: false
  private _fmtuv6S?: number; 
  public get fmtuv6S() {
    return this.getNumberAttribute('fmtuv6_s');
  }
  public set fmtuv6S(value: number) {
    this._fmtuv6S = value;
  }
  public resetFmtuv6S() {
    this._fmtuv6S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv6SInput() {
    return this._fmtuv6S;
  }

  // fmtuv6_s_v - computed: true, optional: true, required: false
  private _fmtuv6SV?: string; 
  public get fmtuv6SV() {
    return this.getStringAttribute('fmtuv6_s_v');
  }
  public set fmtuv6SV(value: string) {
    this._fmtuv6SV = value;
  }
  public resetFmtuv6SV() {
    this._fmtuv6SV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv6SVInput() {
    return this._fmtuv6SV;
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

  // lnkid - computed: false, optional: true, required: false
  private _lnkid?: number; 
  public get lnkid() {
    return this.getNumberAttribute('lnkid');
  }
  public set lnkid(value: number) {
    this._lnkid = value;
  }
  public resetLnkid() {
    this._lnkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnkidInput() {
    return this._lnkid;
  }

  // lnkid_v - computed: true, optional: true, required: false
  private _lnkidV?: string; 
  public get lnkidV() {
    return this.getStringAttribute('lnkid_v');
  }
  public set lnkidV(value: string) {
    this._lnkidV = value;
  }
  public resetLnkidV() {
    this._lnkidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnkidVInput() {
    return this._lnkidV;
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

  // mss_t - computed: false, optional: true, required: false
  private _mssT?: number; 
  public get mssT() {
    return this.getNumberAttribute('mss_t');
  }
  public set mssT(value: number) {
    this._mssT = value;
  }
  public resetMssT() {
    this._mssT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTInput() {
    return this._mssT;
  }

  // mss_t_v - computed: true, optional: true, required: false
  private _mssTV?: string; 
  public get mssTV() {
    return this.getStringAttribute('mss_t_v');
  }
  public set mssTV(value: string) {
    this._mssTV = value;
  }
  public resetMssTV() {
    this._mssTV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTVInput() {
    return this._mssTV;
  }

  // mtuv4 - computed: false, optional: true, required: false
  private _mtuv4?: number; 
  public get mtuv4() {
    return this.getNumberAttribute('mtuv4');
  }
  public set mtuv4(value: number) {
    this._mtuv4 = value;
  }
  public resetMtuv4() {
    this._mtuv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv4Input() {
    return this._mtuv4;
  }

  // mtuv4_v - computed: true, optional: true, required: false
  private _mtuv4V?: string; 
  public get mtuv4V() {
    return this.getStringAttribute('mtuv4_v');
  }
  public set mtuv4V(value: string) {
    this._mtuv4V = value;
  }
  public resetMtuv4V() {
    this._mtuv4V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv4VInput() {
    return this._mtuv4V;
  }

  // mtuv6 - computed: false, optional: true, required: false
  private _mtuv6?: number; 
  public get mtuv6() {
    return this.getNumberAttribute('mtuv6');
  }
  public set mtuv6(value: number) {
    this._mtuv6 = value;
  }
  public resetMtuv6() {
    this._mtuv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv6Input() {
    return this._mtuv6;
  }

  // mtuv6_v - computed: true, optional: true, required: false
  private _mtuv6V?: string; 
  public get mtuv6V() {
    return this.getStringAttribute('mtuv6_v');
  }
  public set mtuv6V(value: string) {
    this._mtuv6V = value;
  }
  public resetMtuv6V() {
    this._mtuv6V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv6VInput() {
    return this._mtuv6V;
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

  // slif_act - computed: false, optional: true, required: false
  private _slifAct?: number; 
  public get slifAct() {
    return this.getNumberAttribute('slif_act');
  }
  public set slifAct(value: number) {
    this._slifAct = value;
  }
  public resetSlifAct() {
    this._slifAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slifActInput() {
    return this._slifAct;
  }

  // slif_act_v - computed: true, optional: true, required: false
  private _slifActV?: string; 
  public get slifActV() {
    return this.getStringAttribute('slif_act_v');
  }
  public set slifActV(value: string) {
    this._slifActV = value;
  }
  public resetSlifActV() {
    this._slifActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slifActVInput() {
    return this._slifActV;
  }

  // sublnkid - computed: false, optional: true, required: false
  private _sublnkid?: number; 
  public get sublnkid() {
    return this.getNumberAttribute('sublnkid');
  }
  public set sublnkid(value: number) {
    this._sublnkid = value;
  }
  public resetSublnkid() {
    this._sublnkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sublnkidInput() {
    return this._sublnkid;
  }

  // sublnkid_v - computed: true, optional: true, required: false
  private _sublnkidV?: string; 
  public get sublnkidV() {
    return this.getStringAttribute('sublnkid_v');
  }
  public set sublnkidV(value: string) {
    this._sublnkidV = value;
  }
  public resetSublnkidV() {
    this._sublnkidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sublnkidVInput() {
    return this._sublnkidV;
  }

  // tgtv_act - computed: false, optional: true, required: false
  private _tgtvAct?: number; 
  public get tgtvAct() {
    return this.getNumberAttribute('tgtv_act');
  }
  public set tgtvAct(value: number) {
    this._tgtvAct = value;
  }
  public resetTgtvAct() {
    this._tgtvAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtvActInput() {
    return this._tgtvAct;
  }

  // tgtv_act_v - computed: true, optional: true, required: false
  private _tgtvActV?: string; 
  public get tgtvActV() {
    return this.getStringAttribute('tgtv_act_v');
  }
  public set tgtvActV(value: string) {
    this._tgtvActV = value;
  }
  public resetTgtvActV() {
    this._tgtvActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtvActVInput() {
    return this._tgtvActV;
  }

  // tlif_act - computed: false, optional: true, required: false
  private _tlifAct?: number; 
  public get tlifAct() {
    return this.getNumberAttribute('tlif_act');
  }
  public set tlifAct(value: number) {
    this._tlifAct = value;
  }
  public resetTlifAct() {
    this._tlifAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlifActInput() {
    return this._tlifAct;
  }

  // tlif_act_v - computed: true, optional: true, required: false
  private _tlifActV?: string; 
  public get tlifActV() {
    return this.getStringAttribute('tlif_act_v');
  }
  public set tlifActV(value: string) {
    this._tlifActV = value;
  }
  public resetTlifActV() {
    this._tlifActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlifActVInput() {
    return this._tlifActV;
  }

  // tpeid - computed: false, optional: true, required: false
  private _tpeid?: number; 
  public get tpeid() {
    return this.getNumberAttribute('tpeid');
  }
  public set tpeid(value: number) {
    this._tpeid = value;
  }
  public resetTpeid() {
    this._tpeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeidInput() {
    return this._tpeid;
  }

  // tpeid_v - computed: true, optional: true, required: false
  private _tpeidV?: string; 
  public get tpeidV() {
    return this.getStringAttribute('tpeid_v');
  }
  public set tpeidV(value: string) {
    this._tpeidV = value;
  }
  public resetTpeidV() {
    this._tpeidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeidVInput() {
    return this._tpeidV;
  }

  // v6fe - computed: false, optional: true, required: false
  private _v6Fe?: number; 
  public get v6Fe() {
    return this.getNumberAttribute('v6fe');
  }
  public set v6Fe(value: number) {
    this._v6Fe = value;
  }
  public resetV6Fe() {
    this._v6Fe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6FeInput() {
    return this._v6Fe;
  }

  // v6fe_v - computed: true, optional: true, required: false
  private _v6FeV?: string; 
  public get v6FeV() {
    return this.getStringAttribute('v6fe_v');
  }
  public set v6FeV(value: string) {
    this._v6FeV = value;
  }
  public resetV6FeV() {
    this._v6FeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6FeVInput() {
    return this._v6FeV;
  }

  // vep_en - computed: false, optional: true, required: false
  private _vepEn?: number; 
  public get vepEn() {
    return this.getNumberAttribute('vep_en');
  }
  public set vepEn(value: number) {
    this._vepEn = value;
  }
  public resetVepEn() {
    this._vepEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepEnInput() {
    return this._vepEn;
  }

  // vep_en_v - computed: true, optional: true, required: false
  private _vepEnV?: string; 
  public get vepEnV() {
    return this.getStringAttribute('vep_en_v');
  }
  public set vepEnV(value: string) {
    this._vepEnV = value;
  }
  public resetVepEnV() {
    this._vepEnV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepEnVInput() {
    return this._vepEnV;
  }

  // vep_slid - computed: false, optional: true, required: false
  private _vepSlid?: number; 
  public get vepSlid() {
    return this.getNumberAttribute('vep_slid');
  }
  public set vepSlid(value: number) {
    this._vepSlid = value;
  }
  public resetVepSlid() {
    this._vepSlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepSlidInput() {
    return this._vepSlid;
  }

  // vep_slid_v - computed: true, optional: true, required: false
  private _vepSlidV?: string; 
  public get vepSlidV() {
    return this.getStringAttribute('vep_slid_v');
  }
  public set vepSlidV(value: string) {
    this._vepSlidV = value;
  }
  public resetVepSlidV() {
    this._vepSlidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepSlidVInput() {
    return this._vepSlidV;
  }

  // xlt_lif - computed: false, optional: true, required: false
  private _xltLif?: number; 
  public get xltLif() {
    return this.getNumberAttribute('xlt_lif');
  }
  public set xltLif(value: number) {
    this._xltLif = value;
  }
  public resetXltLif() {
    this._xltLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltLifInput() {
    return this._xltLif;
  }

  // xlt_lif_v - computed: true, optional: true, required: false
  private _xltLifV?: string; 
  public get xltLifV() {
    return this.getStringAttribute('xlt_lif_v');
  }
  public set xltLifV(value: string) {
    this._xltLifV = value;
  }
  public resetXltLifV() {
    this._xltLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltLifVInput() {
    return this._xltLifV;
  }

  // xlt_vid - computed: false, optional: true, required: false
  private _xltVid?: number; 
  public get xltVid() {
    return this.getNumberAttribute('xlt_vid');
  }
  public set xltVid(value: number) {
    this._xltVid = value;
  }
  public resetXltVid() {
    this._xltVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltVidInput() {
    return this._xltVid;
  }

  // xlt_vid_v - computed: true, optional: true, required: false
  private _xltVidV?: string; 
  public get xltVidV() {
    return this.getStringAttribute('xlt_vid_v');
  }
  public set xltVidV(value: string) {
    this._xltVidV = value;
  }
  public resetXltVidV() {
    this._xltVidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltVidVInput() {
    return this._xltVidV;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      act: cdktf.numberToTerraform(this._act),
      act_v: cdktf.stringToTerraform(this._actV),
      adom: cdktf.stringToTerraform(this._adom),
      fmtuv4_s: cdktf.numberToTerraform(this._fmtuv4S),
      fmtuv4_s_v: cdktf.stringToTerraform(this._fmtuv4SV),
      fmtuv6_s: cdktf.numberToTerraform(this._fmtuv6S),
      fmtuv6_s_v: cdktf.stringToTerraform(this._fmtuv6SV),
      id: cdktf.stringToTerraform(this._id),
      lnkid: cdktf.numberToTerraform(this._lnkid),
      lnkid_v: cdktf.stringToTerraform(this._lnkidV),
      mac_id: cdktf.numberToTerraform(this._macId),
      mac_id_v: cdktf.stringToTerraform(this._macIdV),
      mss_t: cdktf.numberToTerraform(this._mssT),
      mss_t_v: cdktf.stringToTerraform(this._mssTV),
      mtuv4: cdktf.numberToTerraform(this._mtuv4),
      mtuv4_v: cdktf.stringToTerraform(this._mtuv4V),
      mtuv6: cdktf.numberToTerraform(this._mtuv6),
      mtuv6_v: cdktf.stringToTerraform(this._mtuv6V),
      npu_tcam: cdktf.stringToTerraform(this._npuTcam),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      slif_act: cdktf.numberToTerraform(this._slifAct),
      slif_act_v: cdktf.stringToTerraform(this._slifActV),
      sublnkid: cdktf.numberToTerraform(this._sublnkid),
      sublnkid_v: cdktf.stringToTerraform(this._sublnkidV),
      tgtv_act: cdktf.numberToTerraform(this._tgtvAct),
      tgtv_act_v: cdktf.stringToTerraform(this._tgtvActV),
      tlif_act: cdktf.numberToTerraform(this._tlifAct),
      tlif_act_v: cdktf.stringToTerraform(this._tlifActV),
      tpeid: cdktf.numberToTerraform(this._tpeid),
      tpeid_v: cdktf.stringToTerraform(this._tpeidV),
      v6fe: cdktf.numberToTerraform(this._v6Fe),
      v6fe_v: cdktf.stringToTerraform(this._v6FeV),
      vep_en: cdktf.numberToTerraform(this._vepEn),
      vep_en_v: cdktf.stringToTerraform(this._vepEnV),
      vep_slid: cdktf.numberToTerraform(this._vepSlid),
      vep_slid_v: cdktf.stringToTerraform(this._vepSlidV),
      xlt_lif: cdktf.numberToTerraform(this._xltLif),
      xlt_lif_v: cdktf.stringToTerraform(this._xltLifV),
      xlt_vid: cdktf.numberToTerraform(this._xltVid),
      xlt_vid_v: cdktf.stringToTerraform(this._xltVidV),
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
      fmtuv4_s: {
        value: cdktf.numberToHclTerraform(this._fmtuv4S),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fmtuv4_s_v: {
        value: cdktf.stringToHclTerraform(this._fmtuv4SV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmtuv6_s: {
        value: cdktf.numberToHclTerraform(this._fmtuv6S),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fmtuv6_s_v: {
        value: cdktf.stringToHclTerraform(this._fmtuv6SV),
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
      lnkid: {
        value: cdktf.numberToHclTerraform(this._lnkid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lnkid_v: {
        value: cdktf.stringToHclTerraform(this._lnkidV),
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
      mss_t: {
        value: cdktf.numberToHclTerraform(this._mssT),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss_t_v: {
        value: cdktf.stringToHclTerraform(this._mssTV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtuv4: {
        value: cdktf.numberToHclTerraform(this._mtuv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtuv4_v: {
        value: cdktf.stringToHclTerraform(this._mtuv4V),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtuv6: {
        value: cdktf.numberToHclTerraform(this._mtuv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtuv6_v: {
        value: cdktf.stringToHclTerraform(this._mtuv6V),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slif_act: {
        value: cdktf.numberToHclTerraform(this._slifAct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slif_act_v: {
        value: cdktf.stringToHclTerraform(this._slifActV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sublnkid: {
        value: cdktf.numberToHclTerraform(this._sublnkid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sublnkid_v: {
        value: cdktf.stringToHclTerraform(this._sublnkidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgtv_act: {
        value: cdktf.numberToHclTerraform(this._tgtvAct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tgtv_act_v: {
        value: cdktf.stringToHclTerraform(this._tgtvActV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlif_act: {
        value: cdktf.numberToHclTerraform(this._tlifAct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tlif_act_v: {
        value: cdktf.stringToHclTerraform(this._tlifActV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpeid: {
        value: cdktf.numberToHclTerraform(this._tpeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tpeid_v: {
        value: cdktf.stringToHclTerraform(this._tpeidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6fe: {
        value: cdktf.numberToHclTerraform(this._v6Fe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6fe_v: {
        value: cdktf.stringToHclTerraform(this._v6FeV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vep_en: {
        value: cdktf.numberToHclTerraform(this._vepEn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vep_en_v: {
        value: cdktf.stringToHclTerraform(this._vepEnV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vep_slid: {
        value: cdktf.numberToHclTerraform(this._vepSlid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vep_slid_v: {
        value: cdktf.stringToHclTerraform(this._vepSlidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xlt_lif: {
        value: cdktf.numberToHclTerraform(this._xltLif),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xlt_lif_v: {
        value: cdktf.stringToHclTerraform(this._xltLifV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xlt_vid: {
        value: cdktf.numberToHclTerraform(this._xltVid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xlt_vid_v: {
        value: cdktf.stringToHclTerraform(this._xltVidV),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
