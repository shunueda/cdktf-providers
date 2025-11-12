// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciExternalNetworkInstanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#annotation DataAciExternalNetworkInstanceProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#description DataAciExternalNetworkInstanceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#exception_tag DataAciExternalNetworkInstanceProfile#exception_tag}
  */
  readonly exceptionTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#flood_on_encap DataAciExternalNetworkInstanceProfile#flood_on_encap}
  */
  readonly floodOnEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#id DataAciExternalNetworkInstanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#l3_outside_dn DataAciExternalNetworkInstanceProfile#l3_outside_dn}
  */
  readonly l3OutsideDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#match_t DataAciExternalNetworkInstanceProfile#match_t}
  */
  readonly matchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#name DataAciExternalNetworkInstanceProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#name_alias DataAciExternalNetworkInstanceProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#pref_gr_memb DataAciExternalNetworkInstanceProfile#pref_gr_memb}
  */
  readonly prefGrMemb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#prio DataAciExternalNetworkInstanceProfile#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#relation_fv_rs_cons DataAciExternalNetworkInstanceProfile#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#relation_fv_rs_cons_if DataAciExternalNetworkInstanceProfile#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#relation_fv_rs_prot_by DataAciExternalNetworkInstanceProfile#relation_fv_rs_prot_by}
  */
  readonly relationFvRsProtBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#relation_fv_rs_prov DataAciExternalNetworkInstanceProfile#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#relation_fv_rs_sec_inherited DataAciExternalNetworkInstanceProfile#relation_fv_rs_sec_inherited}
  */
  readonly relationFvRsSecInherited?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#target_dscp DataAciExternalNetworkInstanceProfile#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * relation_l3ext_rs_inst_p_to_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#relation_l3ext_rs_inst_p_to_profile DataAciExternalNetworkInstanceProfile#relation_l3ext_rs_inst_p_to_profile}
  */
  readonly relationL3ExtRsInstPToProfile?: DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile[] | cdktf.IResolvable;
}
export interface DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#direction DataAciExternalNetworkInstanceProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#tn_rtctrl_profile_dn DataAciExternalNetworkInstanceProfile#tn_rtctrl_profile_dn}
  */
  readonly tnRtctrlProfileDn?: string;
}

export function dataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileToTerraform(struct?: DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    tn_rtctrl_profile_dn: cdktf.stringToTerraform(struct!.tnRtctrlProfileDn),
  }
}


export function dataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileToHclTerraform(struct?: DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tn_rtctrl_profile_dn: {
      value: cdktf.stringToHclTerraform(struct!.tnRtctrlProfileDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._tnRtctrlProfileDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tnRtctrlProfileDn = this._tnRtctrlProfileDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._tnRtctrlProfileDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._tnRtctrlProfileDn = value.tnRtctrlProfileDn;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // tn_rtctrl_profile_dn - computed: true, optional: true, required: false
  private _tnRtctrlProfileDn?: string; 
  public get tnRtctrlProfileDn() {
    return this.getStringAttribute('tn_rtctrl_profile_dn');
  }
  public set tnRtctrlProfileDn(value: string) {
    this._tnRtctrlProfileDn = value;
  }
  public resetTnRtctrlProfileDn() {
    this._tnRtctrlProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tnRtctrlProfileDnInput() {
    return this._tnRtctrlProfileDn;
  }
}

export class DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileList extends cdktf.ComplexList {
  public internalValue? : DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile[] | cdktf.IResolvable

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
  public get(index: number): DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileOutputReference {
    return new DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile aci_external_network_instance_profile}
*/
export class DataAciExternalNetworkInstanceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_external_network_instance_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciExternalNetworkInstanceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciExternalNetworkInstanceProfile to import
  * @param importFromId The id of the existing DataAciExternalNetworkInstanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciExternalNetworkInstanceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_external_network_instance_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/external_network_instance_profile aci_external_network_instance_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciExternalNetworkInstanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciExternalNetworkInstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_external_network_instance_profile',
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
    this._l3OutsideDn = config.l3OutsideDn;
    this._matchT = config.matchT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prefGrMemb = config.prefGrMemb;
    this._prio = config.prio;
    this._relationFvRsCons = config.relationFvRsCons;
    this._relationFvRsConsIf = config.relationFvRsConsIf;
    this._relationFvRsProtBy = config.relationFvRsProtBy;
    this._relationFvRsProv = config.relationFvRsProv;
    this._relationFvRsSecInherited = config.relationFvRsSecInherited;
    this._targetDscp = config.targetDscp;
    this._relationL3ExtRsInstPToProfile.internalValue = config.relationL3ExtRsInstPToProfile;
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

  // l3_outside_dn - computed: false, optional: false, required: true
  private _l3OutsideDn?: string; 
  public get l3OutsideDn() {
    return this.getStringAttribute('l3_outside_dn');
  }
  public set l3OutsideDn(value: string) {
    this._l3OutsideDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutsideDnInput() {
    return this._l3OutsideDn;
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

  // relation_fv_rs_cons - computed: true, optional: true, required: false
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

  // relation_fv_rs_cons_if - computed: true, optional: true, required: false
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

  // relation_fv_rs_prot_by - computed: true, optional: true, required: false
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

  // relation_fv_rs_prov - computed: true, optional: true, required: false
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

  // relation_fv_rs_sec_inherited - computed: true, optional: true, required: false
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

  // relation_l3ext_rs_inst_p_to_profile - computed: false, optional: true, required: false
  private _relationL3ExtRsInstPToProfile = new DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileList(this, "relation_l3ext_rs_inst_p_to_profile", true);
  public get relationL3ExtRsInstPToProfile() {
    return this._relationL3ExtRsInstPToProfile;
  }
  public putRelationL3ExtRsInstPToProfile(value: DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfile[] | cdktf.IResolvable) {
    this._relationL3ExtRsInstPToProfile.internalValue = value;
  }
  public resetRelationL3ExtRsInstPToProfile() {
    this._relationL3ExtRsInstPToProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsInstPToProfileInput() {
    return this._relationL3ExtRsInstPToProfile.internalValue;
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
      l3_outside_dn: cdktf.stringToTerraform(this._l3OutsideDn),
      match_t: cdktf.stringToTerraform(this._matchT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pref_gr_memb: cdktf.stringToTerraform(this._prefGrMemb),
      prio: cdktf.stringToTerraform(this._prio),
      relation_fv_rs_cons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsCons),
      relation_fv_rs_cons_if: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsConsIf),
      relation_fv_rs_prot_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProtBy),
      relation_fv_rs_prov: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProv),
      relation_fv_rs_sec_inherited: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsSecInherited),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
      relation_l3ext_rs_inst_p_to_profile: cdktf.listMapper(dataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileToTerraform, true)(this._relationL3ExtRsInstPToProfile.internalValue),
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
      l3_outside_dn: {
        value: cdktf.stringToHclTerraform(this._l3OutsideDn),
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
      target_dscp: {
        value: cdktf.stringToHclTerraform(this._targetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_inst_p_to_profile: {
        value: cdktf.listMapperHcl(dataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileToHclTerraform, true)(this._relationL3ExtRsInstPToProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciExternalNetworkInstanceProfileRelationL3ExtRsInstPToProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
