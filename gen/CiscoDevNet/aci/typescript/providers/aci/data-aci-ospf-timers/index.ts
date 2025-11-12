// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciOspfTimersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#annotation DataAciOspfTimers#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#bw_ref DataAciOspfTimers#bw_ref}
  */
  readonly bwRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#ctrl DataAciOspfTimers#ctrl}
  */
  readonly ctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#description DataAciOspfTimers#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#dist DataAciOspfTimers#dist}
  */
  readonly dist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#gr_ctrl DataAciOspfTimers#gr_ctrl}
  */
  readonly grCtrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#id DataAciOspfTimers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#lsa_arrival_intvl DataAciOspfTimers#lsa_arrival_intvl}
  */
  readonly lsaArrivalIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#lsa_gp_pacing_intvl DataAciOspfTimers#lsa_gp_pacing_intvl}
  */
  readonly lsaGpPacingIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#lsa_hold_intvl DataAciOspfTimers#lsa_hold_intvl}
  */
  readonly lsaHoldIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#lsa_max_intvl DataAciOspfTimers#lsa_max_intvl}
  */
  readonly lsaMaxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#lsa_start_intvl DataAciOspfTimers#lsa_start_intvl}
  */
  readonly lsaStartIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_ecmp DataAciOspfTimers#max_ecmp}
  */
  readonly maxEcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_lsa_action DataAciOspfTimers#max_lsa_action}
  */
  readonly maxLsaAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_lsa_num DataAciOspfTimers#max_lsa_num}
  */
  readonly maxLsaNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_lsa_reset_intvl DataAciOspfTimers#max_lsa_reset_intvl}
  */
  readonly maxLsaResetIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_lsa_sleep_cnt DataAciOspfTimers#max_lsa_sleep_cnt}
  */
  readonly maxLsaSleepCnt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_lsa_sleep_intvl DataAciOspfTimers#max_lsa_sleep_intvl}
  */
  readonly maxLsaSleepIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#max_lsa_thresh DataAciOspfTimers#max_lsa_thresh}
  */
  readonly maxLsaThresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#name DataAciOspfTimers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#name_alias DataAciOspfTimers#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#spf_hold_intvl DataAciOspfTimers#spf_hold_intvl}
  */
  readonly spfHoldIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#spf_init_intvl DataAciOspfTimers#spf_init_intvl}
  */
  readonly spfInitIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#spf_max_intvl DataAciOspfTimers#spf_max_intvl}
  */
  readonly spfMaxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#tenant_dn DataAciOspfTimers#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers aci_ospf_timers}
*/
export class DataAciOspfTimers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_ospf_timers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciOspfTimers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciOspfTimers to import
  * @param importFromId The id of the existing DataAciOspfTimers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciOspfTimers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_ospf_timers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/ospf_timers aci_ospf_timers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciOspfTimersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciOspfTimersConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_ospf_timers',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._bwRef = config.bwRef;
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._dist = config.dist;
    this._grCtrl = config.grCtrl;
    this._id = config.id;
    this._lsaArrivalIntvl = config.lsaArrivalIntvl;
    this._lsaGpPacingIntvl = config.lsaGpPacingIntvl;
    this._lsaHoldIntvl = config.lsaHoldIntvl;
    this._lsaMaxIntvl = config.lsaMaxIntvl;
    this._lsaStartIntvl = config.lsaStartIntvl;
    this._maxEcmp = config.maxEcmp;
    this._maxLsaAction = config.maxLsaAction;
    this._maxLsaNum = config.maxLsaNum;
    this._maxLsaResetIntvl = config.maxLsaResetIntvl;
    this._maxLsaSleepCnt = config.maxLsaSleepCnt;
    this._maxLsaSleepIntvl = config.maxLsaSleepIntvl;
    this._maxLsaThresh = config.maxLsaThresh;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._spfHoldIntvl = config.spfHoldIntvl;
    this._spfInitIntvl = config.spfInitIntvl;
    this._spfMaxIntvl = config.spfMaxIntvl;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // bw_ref - computed: true, optional: true, required: false
  private _bwRef?: string; 
  public get bwRef() {
    return this.getStringAttribute('bw_ref');
  }
  public set bwRef(value: string) {
    this._bwRef = value;
  }
  public resetBwRef() {
    this._bwRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRefInput() {
    return this._bwRef;
  }

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string[]; 
  public get ctrl() {
    return this.getListAttribute('ctrl');
  }
  public set ctrl(value: string[]) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dist - computed: true, optional: true, required: false
  private _dist?: string; 
  public get dist() {
    return this.getStringAttribute('dist');
  }
  public set dist(value: string) {
    this._dist = value;
  }
  public resetDist() {
    this._dist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distInput() {
    return this._dist;
  }

  // gr_ctrl - computed: true, optional: true, required: false
  private _grCtrl?: string; 
  public get grCtrl() {
    return this.getStringAttribute('gr_ctrl');
  }
  public set grCtrl(value: string) {
    this._grCtrl = value;
  }
  public resetGrCtrl() {
    this._grCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grCtrlInput() {
    return this._grCtrl;
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

  // lsa_arrival_intvl - computed: true, optional: true, required: false
  private _lsaArrivalIntvl?: string; 
  public get lsaArrivalIntvl() {
    return this.getStringAttribute('lsa_arrival_intvl');
  }
  public set lsaArrivalIntvl(value: string) {
    this._lsaArrivalIntvl = value;
  }
  public resetLsaArrivalIntvl() {
    this._lsaArrivalIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaArrivalIntvlInput() {
    return this._lsaArrivalIntvl;
  }

  // lsa_gp_pacing_intvl - computed: true, optional: true, required: false
  private _lsaGpPacingIntvl?: string; 
  public get lsaGpPacingIntvl() {
    return this.getStringAttribute('lsa_gp_pacing_intvl');
  }
  public set lsaGpPacingIntvl(value: string) {
    this._lsaGpPacingIntvl = value;
  }
  public resetLsaGpPacingIntvl() {
    this._lsaGpPacingIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaGpPacingIntvlInput() {
    return this._lsaGpPacingIntvl;
  }

  // lsa_hold_intvl - computed: true, optional: true, required: false
  private _lsaHoldIntvl?: string; 
  public get lsaHoldIntvl() {
    return this.getStringAttribute('lsa_hold_intvl');
  }
  public set lsaHoldIntvl(value: string) {
    this._lsaHoldIntvl = value;
  }
  public resetLsaHoldIntvl() {
    this._lsaHoldIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaHoldIntvlInput() {
    return this._lsaHoldIntvl;
  }

  // lsa_max_intvl - computed: true, optional: true, required: false
  private _lsaMaxIntvl?: string; 
  public get lsaMaxIntvl() {
    return this.getStringAttribute('lsa_max_intvl');
  }
  public set lsaMaxIntvl(value: string) {
    this._lsaMaxIntvl = value;
  }
  public resetLsaMaxIntvl() {
    this._lsaMaxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaMaxIntvlInput() {
    return this._lsaMaxIntvl;
  }

  // lsa_start_intvl - computed: true, optional: true, required: false
  private _lsaStartIntvl?: string; 
  public get lsaStartIntvl() {
    return this.getStringAttribute('lsa_start_intvl');
  }
  public set lsaStartIntvl(value: string) {
    this._lsaStartIntvl = value;
  }
  public resetLsaStartIntvl() {
    this._lsaStartIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaStartIntvlInput() {
    return this._lsaStartIntvl;
  }

  // max_ecmp - computed: true, optional: true, required: false
  private _maxEcmp?: string; 
  public get maxEcmp() {
    return this.getStringAttribute('max_ecmp');
  }
  public set maxEcmp(value: string) {
    this._maxEcmp = value;
  }
  public resetMaxEcmp() {
    this._maxEcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEcmpInput() {
    return this._maxEcmp;
  }

  // max_lsa_action - computed: true, optional: true, required: false
  private _maxLsaAction?: string; 
  public get maxLsaAction() {
    return this.getStringAttribute('max_lsa_action');
  }
  public set maxLsaAction(value: string) {
    this._maxLsaAction = value;
  }
  public resetMaxLsaAction() {
    this._maxLsaAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLsaActionInput() {
    return this._maxLsaAction;
  }

  // max_lsa_num - computed: true, optional: true, required: false
  private _maxLsaNum?: string; 
  public get maxLsaNum() {
    return this.getStringAttribute('max_lsa_num');
  }
  public set maxLsaNum(value: string) {
    this._maxLsaNum = value;
  }
  public resetMaxLsaNum() {
    this._maxLsaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLsaNumInput() {
    return this._maxLsaNum;
  }

  // max_lsa_reset_intvl - computed: true, optional: true, required: false
  private _maxLsaResetIntvl?: string; 
  public get maxLsaResetIntvl() {
    return this.getStringAttribute('max_lsa_reset_intvl');
  }
  public set maxLsaResetIntvl(value: string) {
    this._maxLsaResetIntvl = value;
  }
  public resetMaxLsaResetIntvl() {
    this._maxLsaResetIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLsaResetIntvlInput() {
    return this._maxLsaResetIntvl;
  }

  // max_lsa_sleep_cnt - computed: true, optional: true, required: false
  private _maxLsaSleepCnt?: string; 
  public get maxLsaSleepCnt() {
    return this.getStringAttribute('max_lsa_sleep_cnt');
  }
  public set maxLsaSleepCnt(value: string) {
    this._maxLsaSleepCnt = value;
  }
  public resetMaxLsaSleepCnt() {
    this._maxLsaSleepCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLsaSleepCntInput() {
    return this._maxLsaSleepCnt;
  }

  // max_lsa_sleep_intvl - computed: true, optional: true, required: false
  private _maxLsaSleepIntvl?: string; 
  public get maxLsaSleepIntvl() {
    return this.getStringAttribute('max_lsa_sleep_intvl');
  }
  public set maxLsaSleepIntvl(value: string) {
    this._maxLsaSleepIntvl = value;
  }
  public resetMaxLsaSleepIntvl() {
    this._maxLsaSleepIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLsaSleepIntvlInput() {
    return this._maxLsaSleepIntvl;
  }

  // max_lsa_thresh - computed: true, optional: true, required: false
  private _maxLsaThresh?: string; 
  public get maxLsaThresh() {
    return this.getStringAttribute('max_lsa_thresh');
  }
  public set maxLsaThresh(value: string) {
    this._maxLsaThresh = value;
  }
  public resetMaxLsaThresh() {
    this._maxLsaThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLsaThreshInput() {
    return this._maxLsaThresh;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // spf_hold_intvl - computed: true, optional: true, required: false
  private _spfHoldIntvl?: string; 
  public get spfHoldIntvl() {
    return this.getStringAttribute('spf_hold_intvl');
  }
  public set spfHoldIntvl(value: string) {
    this._spfHoldIntvl = value;
  }
  public resetSpfHoldIntvl() {
    this._spfHoldIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfHoldIntvlInput() {
    return this._spfHoldIntvl;
  }

  // spf_init_intvl - computed: true, optional: true, required: false
  private _spfInitIntvl?: string; 
  public get spfInitIntvl() {
    return this.getStringAttribute('spf_init_intvl');
  }
  public set spfInitIntvl(value: string) {
    this._spfInitIntvl = value;
  }
  public resetSpfInitIntvl() {
    this._spfInitIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInitIntvlInput() {
    return this._spfInitIntvl;
  }

  // spf_max_intvl - computed: true, optional: true, required: false
  private _spfMaxIntvl?: string; 
  public get spfMaxIntvl() {
    return this.getStringAttribute('spf_max_intvl');
  }
  public set spfMaxIntvl(value: string) {
    this._spfMaxIntvl = value;
  }
  public resetSpfMaxIntvl() {
    this._spfMaxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfMaxIntvlInput() {
    return this._spfMaxIntvl;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      bw_ref: cdktf.stringToTerraform(this._bwRef),
      ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      dist: cdktf.stringToTerraform(this._dist),
      gr_ctrl: cdktf.stringToTerraform(this._grCtrl),
      id: cdktf.stringToTerraform(this._id),
      lsa_arrival_intvl: cdktf.stringToTerraform(this._lsaArrivalIntvl),
      lsa_gp_pacing_intvl: cdktf.stringToTerraform(this._lsaGpPacingIntvl),
      lsa_hold_intvl: cdktf.stringToTerraform(this._lsaHoldIntvl),
      lsa_max_intvl: cdktf.stringToTerraform(this._lsaMaxIntvl),
      lsa_start_intvl: cdktf.stringToTerraform(this._lsaStartIntvl),
      max_ecmp: cdktf.stringToTerraform(this._maxEcmp),
      max_lsa_action: cdktf.stringToTerraform(this._maxLsaAction),
      max_lsa_num: cdktf.stringToTerraform(this._maxLsaNum),
      max_lsa_reset_intvl: cdktf.stringToTerraform(this._maxLsaResetIntvl),
      max_lsa_sleep_cnt: cdktf.stringToTerraform(this._maxLsaSleepCnt),
      max_lsa_sleep_intvl: cdktf.stringToTerraform(this._maxLsaSleepIntvl),
      max_lsa_thresh: cdktf.stringToTerraform(this._maxLsaThresh),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      spf_hold_intvl: cdktf.stringToTerraform(this._spfHoldIntvl),
      spf_init_intvl: cdktf.stringToTerraform(this._spfInitIntvl),
      spf_max_intvl: cdktf.stringToTerraform(this._spfMaxIntvl),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bw_ref: {
        value: cdktf.stringToHclTerraform(this._bwRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dist: {
        value: cdktf.stringToHclTerraform(this._dist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gr_ctrl: {
        value: cdktf.stringToHclTerraform(this._grCtrl),
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
      lsa_arrival_intvl: {
        value: cdktf.stringToHclTerraform(this._lsaArrivalIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsa_gp_pacing_intvl: {
        value: cdktf.stringToHclTerraform(this._lsaGpPacingIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsa_hold_intvl: {
        value: cdktf.stringToHclTerraform(this._lsaHoldIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsa_max_intvl: {
        value: cdktf.stringToHclTerraform(this._lsaMaxIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsa_start_intvl: {
        value: cdktf.stringToHclTerraform(this._lsaStartIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ecmp: {
        value: cdktf.stringToHclTerraform(this._maxEcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lsa_action: {
        value: cdktf.stringToHclTerraform(this._maxLsaAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lsa_num: {
        value: cdktf.stringToHclTerraform(this._maxLsaNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lsa_reset_intvl: {
        value: cdktf.stringToHclTerraform(this._maxLsaResetIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lsa_sleep_cnt: {
        value: cdktf.stringToHclTerraform(this._maxLsaSleepCnt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lsa_sleep_intvl: {
        value: cdktf.stringToHclTerraform(this._maxLsaSleepIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lsa_thresh: {
        value: cdktf.stringToHclTerraform(this._maxLsaThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_hold_intvl: {
        value: cdktf.stringToHclTerraform(this._spfHoldIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_init_intvl: {
        value: cdktf.stringToHclTerraform(this._spfInitIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_max_intvl: {
        value: cdktf.stringToHclTerraform(this._spfMaxIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
