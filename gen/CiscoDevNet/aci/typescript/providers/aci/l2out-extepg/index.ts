// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2OutExtepgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#annotation L2OutExtepg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#description L2OutExtepg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#exception_tag L2OutExtepg#exception_tag}
  */
  readonly exceptionTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#flood_on_encap L2OutExtepg#flood_on_encap}
  */
  readonly floodOnEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#id L2OutExtepg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#l2_outside_dn L2OutExtepg#l2_outside_dn}
  */
  readonly l2OutsideDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#match_t L2OutExtepg#match_t}
  */
  readonly matchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#name L2OutExtepg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#name_alias L2OutExtepg#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#pref_gr_memb L2OutExtepg#pref_gr_memb}
  */
  readonly prefGrMemb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#prio L2OutExtepg#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_cons L2OutExtepg#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_cons_if L2OutExtepg#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_cust_qos_pol L2OutExtepg#relation_fv_rs_cust_qos_pol}
  */
  readonly relationFvRsCustQosPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_intra_epg L2OutExtepg#relation_fv_rs_intra_epg}
  */
  readonly relationFvRsIntraEpg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_prot_by L2OutExtepg#relation_fv_rs_prot_by}
  */
  readonly relationFvRsProtBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_prov L2OutExtepg#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_fv_rs_sec_inherited L2OutExtepg#relation_fv_rs_sec_inherited}
  */
  readonly relationFvRsSecInherited?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#relation_l2ext_rs_l2_inst_p_to_dom_p L2OutExtepg#relation_l2ext_rs_l2_inst_p_to_dom_p}
  */
  readonly relationL2ExtRsL2InstPToDomP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#target_dscp L2OutExtepg#target_dscp}
  */
  readonly targetDscp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg aci_l2out_extepg}
*/
export class L2OutExtepg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l2out_extepg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2OutExtepg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2OutExtepg to import
  * @param importFromId The id of the existing L2OutExtepg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2OutExtepg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l2out_extepg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l2out_extepg aci_l2out_extepg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2OutExtepgConfig
  */
  public constructor(scope: Construct, id: string, config: L2OutExtepgConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l2out_extepg',
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
    this._description = config.description;
    this._exceptionTag = config.exceptionTag;
    this._floodOnEncap = config.floodOnEncap;
    this._id = config.id;
    this._l2OutsideDn = config.l2OutsideDn;
    this._matchT = config.matchT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prefGrMemb = config.prefGrMemb;
    this._prio = config.prio;
    this._relationFvRsCons = config.relationFvRsCons;
    this._relationFvRsConsIf = config.relationFvRsConsIf;
    this._relationFvRsCustQosPol = config.relationFvRsCustQosPol;
    this._relationFvRsIntraEpg = config.relationFvRsIntraEpg;
    this._relationFvRsProtBy = config.relationFvRsProtBy;
    this._relationFvRsProv = config.relationFvRsProv;
    this._relationFvRsSecInherited = config.relationFvRsSecInherited;
    this._relationL2ExtRsL2InstPToDomP = config.relationL2ExtRsL2InstPToDomP;
    this._targetDscp = config.targetDscp;
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

  // exception_tag - computed: true, optional: true, required: false
  private _exceptionTag?: string; 
  public get exceptionTag() {
    return this.getStringAttribute('exception_tag');
  }
  public set exceptionTag(value: string) {
    this._exceptionTag = value;
  }
  public resetExceptionTag() {
    this._exceptionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTagInput() {
    return this._exceptionTag;
  }

  // flood_on_encap - computed: true, optional: true, required: false
  private _floodOnEncap?: string; 
  public get floodOnEncap() {
    return this.getStringAttribute('flood_on_encap');
  }
  public set floodOnEncap(value: string) {
    this._floodOnEncap = value;
  }
  public resetFloodOnEncap() {
    this._floodOnEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodOnEncapInput() {
    return this._floodOnEncap;
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

  // l2_outside_dn - computed: false, optional: false, required: true
  private _l2OutsideDn?: string; 
  public get l2OutsideDn() {
    return this.getStringAttribute('l2_outside_dn');
  }
  public set l2OutsideDn(value: string) {
    this._l2OutsideDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l2OutsideDnInput() {
    return this._l2OutsideDn;
  }

  // match_t - computed: true, optional: true, required: false
  private _matchT?: string; 
  public get matchT() {
    return this.getStringAttribute('match_t');
  }
  public set matchT(value: string) {
    this._matchT = value;
  }
  public resetMatchT() {
    this._matchT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTInput() {
    return this._matchT;
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

  // pref_gr_memb - computed: true, optional: true, required: false
  private _prefGrMemb?: string; 
  public get prefGrMemb() {
    return this.getStringAttribute('pref_gr_memb');
  }
  public set prefGrMemb(value: string) {
    this._prefGrMemb = value;
  }
  public resetPrefGrMemb() {
    this._prefGrMemb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefGrMembInput() {
    return this._prefGrMemb;
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // relation_fv_rs_cons - computed: false, optional: true, required: false
  private _relationFvRsCons?: string[]; 
  public get relationFvRsCons() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_cons'));
  }
  public set relationFvRsCons(value: string[]) {
    this._relationFvRsCons = value;
  }
  public resetRelationFvRsCons() {
    this._relationFvRsCons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsInput() {
    return this._relationFvRsCons;
  }

  // relation_fv_rs_cons_if - computed: false, optional: true, required: false
  private _relationFvRsConsIf?: string[]; 
  public get relationFvRsConsIf() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_cons_if'));
  }
  public set relationFvRsConsIf(value: string[]) {
    this._relationFvRsConsIf = value;
  }
  public resetRelationFvRsConsIf() {
    this._relationFvRsConsIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsIfInput() {
    return this._relationFvRsConsIf;
  }

  // relation_fv_rs_cust_qos_pol - computed: false, optional: true, required: false
  private _relationFvRsCustQosPol?: string; 
  public get relationFvRsCustQosPol() {
    return this.getStringAttribute('relation_fv_rs_cust_qos_pol');
  }
  public set relationFvRsCustQosPol(value: string) {
    this._relationFvRsCustQosPol = value;
  }
  public resetRelationFvRsCustQosPol() {
    this._relationFvRsCustQosPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCustQosPolInput() {
    return this._relationFvRsCustQosPol;
  }

  // relation_fv_rs_intra_epg - computed: false, optional: true, required: false
  private _relationFvRsIntraEpg?: string[]; 
  public get relationFvRsIntraEpg() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_intra_epg'));
  }
  public set relationFvRsIntraEpg(value: string[]) {
    this._relationFvRsIntraEpg = value;
  }
  public resetRelationFvRsIntraEpg() {
    this._relationFvRsIntraEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsIntraEpgInput() {
    return this._relationFvRsIntraEpg;
  }

  // relation_fv_rs_prot_by - computed: false, optional: true, required: false
  private _relationFvRsProtBy?: string[]; 
  public get relationFvRsProtBy() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prot_by'));
  }
  public set relationFvRsProtBy(value: string[]) {
    this._relationFvRsProtBy = value;
  }
  public resetRelationFvRsProtBy() {
    this._relationFvRsProtBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProtByInput() {
    return this._relationFvRsProtBy;
  }

  // relation_fv_rs_prov - computed: false, optional: true, required: false
  private _relationFvRsProv?: string[]; 
  public get relationFvRsProv() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prov'));
  }
  public set relationFvRsProv(value: string[]) {
    this._relationFvRsProv = value;
  }
  public resetRelationFvRsProv() {
    this._relationFvRsProv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvInput() {
    return this._relationFvRsProv;
  }

  // relation_fv_rs_sec_inherited - computed: false, optional: true, required: false
  private _relationFvRsSecInherited?: string[]; 
  public get relationFvRsSecInherited() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_sec_inherited'));
  }
  public set relationFvRsSecInherited(value: string[]) {
    this._relationFvRsSecInherited = value;
  }
  public resetRelationFvRsSecInherited() {
    this._relationFvRsSecInherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsSecInheritedInput() {
    return this._relationFvRsSecInherited;
  }

  // relation_l2ext_rs_l2_inst_p_to_dom_p - computed: false, optional: true, required: false
  private _relationL2ExtRsL2InstPToDomP?: string; 
  public get relationL2ExtRsL2InstPToDomP() {
    return this.getStringAttribute('relation_l2ext_rs_l2_inst_p_to_dom_p');
  }
  public set relationL2ExtRsL2InstPToDomP(value: string) {
    this._relationL2ExtRsL2InstPToDomP = value;
  }
  public resetRelationL2ExtRsL2InstPToDomP() {
    this._relationL2ExtRsL2InstPToDomP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL2ExtRsL2InstPToDomPInput() {
    return this._relationL2ExtRsL2InstPToDomP;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      exception_tag: cdktf.stringToTerraform(this._exceptionTag),
      flood_on_encap: cdktf.stringToTerraform(this._floodOnEncap),
      id: cdktf.stringToTerraform(this._id),
      l2_outside_dn: cdktf.stringToTerraform(this._l2OutsideDn),
      match_t: cdktf.stringToTerraform(this._matchT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pref_gr_memb: cdktf.stringToTerraform(this._prefGrMemb),
      prio: cdktf.stringToTerraform(this._prio),
      relation_fv_rs_cons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsCons),
      relation_fv_rs_cons_if: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsConsIf),
      relation_fv_rs_cust_qos_pol: cdktf.stringToTerraform(this._relationFvRsCustQosPol),
      relation_fv_rs_intra_epg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsIntraEpg),
      relation_fv_rs_prot_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProtBy),
      relation_fv_rs_prov: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProv),
      relation_fv_rs_sec_inherited: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsSecInherited),
      relation_l2ext_rs_l2_inst_p_to_dom_p: cdktf.stringToTerraform(this._relationL2ExtRsL2InstPToDomP),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_tag: {
        value: cdktf.stringToHclTerraform(this._exceptionTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flood_on_encap: {
        value: cdktf.stringToHclTerraform(this._floodOnEncap),
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
      l2_outside_dn: {
        value: cdktf.stringToHclTerraform(this._l2OutsideDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_t: {
        value: cdktf.stringToHclTerraform(this._matchT),
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
      pref_gr_memb: {
        value: cdktf.stringToHclTerraform(this._prefGrMemb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_cons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsCons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_cons_if: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsConsIf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_cust_qos_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCustQosPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_intra_epg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsIntraEpg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prot_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProtBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prov: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProv),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_sec_inherited: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsSecInherited),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_l2ext_rs_l2_inst_p_to_dom_p: {
        value: cdktf.stringToHclTerraform(this._relationL2ExtRsL2InstPToDomP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dscp: {
        value: cdktf.stringToHclTerraform(this._targetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
