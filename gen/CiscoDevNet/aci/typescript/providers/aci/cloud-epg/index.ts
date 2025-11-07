// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#annotation CloudEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#cloud_applicationcontainer_dn CloudEpg#cloud_applicationcontainer_dn}
  */
  readonly cloudApplicationcontainerDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#description CloudEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#exception_tag CloudEpg#exception_tag}
  */
  readonly exceptionTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#flood_on_encap CloudEpg#flood_on_encap}
  */
  readonly floodOnEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#id CloudEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#match_t CloudEpg#match_t}
  */
  readonly matchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#name CloudEpg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#name_alias CloudEpg#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#pref_gr_memb CloudEpg#pref_gr_memb}
  */
  readonly prefGrMemb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#prio CloudEpg#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_cloud_rs_cloud_epg_ctx CloudEpg#relation_cloud_rs_cloud_epg_ctx}
  */
  readonly relationCloudRsCloudEpgCtx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_cons CloudEpg#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_cons_if CloudEpg#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_cust_qos_pol CloudEpg#relation_fv_rs_cust_qos_pol}
  */
  readonly relationFvRsCustQosPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_intra_epg CloudEpg#relation_fv_rs_intra_epg}
  */
  readonly relationFvRsIntraEpg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_prot_by CloudEpg#relation_fv_rs_prot_by}
  */
  readonly relationFvRsProtBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_prov CloudEpg#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#relation_fv_rs_sec_inherited CloudEpg#relation_fv_rs_sec_inherited}
  */
  readonly relationFvRsSecInherited?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg aci_cloud_epg}
*/
export class CloudEpg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudEpg to import
  * @param importFromId The id of the existing CloudEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_epg aci_cloud_epg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudEpgConfig
  */
  public constructor(scope: Construct, id: string, config: CloudEpgConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_epg',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._cloudApplicationcontainerDn = config.cloudApplicationcontainerDn;
    this._description = config.description;
    this._exceptionTag = config.exceptionTag;
    this._floodOnEncap = config.floodOnEncap;
    this._id = config.id;
    this._matchT = config.matchT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prefGrMemb = config.prefGrMemb;
    this._prio = config.prio;
    this._relationCloudRsCloudEpgCtx = config.relationCloudRsCloudEpgCtx;
    this._relationFvRsCons = config.relationFvRsCons;
    this._relationFvRsConsIf = config.relationFvRsConsIf;
    this._relationFvRsCustQosPol = config.relationFvRsCustQosPol;
    this._relationFvRsIntraEpg = config.relationFvRsIntraEpg;
    this._relationFvRsProtBy = config.relationFvRsProtBy;
    this._relationFvRsProv = config.relationFvRsProv;
    this._relationFvRsSecInherited = config.relationFvRsSecInherited;
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

  // cloud_applicationcontainer_dn - computed: false, optional: false, required: true
  private _cloudApplicationcontainerDn?: string; 
  public get cloudApplicationcontainerDn() {
    return this.getStringAttribute('cloud_applicationcontainer_dn');
  }
  public set cloudApplicationcontainerDn(value: string) {
    this._cloudApplicationcontainerDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApplicationcontainerDnInput() {
    return this._cloudApplicationcontainerDn;
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

  // relation_cloud_rs_cloud_epg_ctx - computed: true, optional: true, required: false
  private _relationCloudRsCloudEpgCtx?: string; 
  public get relationCloudRsCloudEpgCtx() {
    return this.getStringAttribute('relation_cloud_rs_cloud_epg_ctx');
  }
  public set relationCloudRsCloudEpgCtx(value: string) {
    this._relationCloudRsCloudEpgCtx = value;
  }
  public resetRelationCloudRsCloudEpgCtx() {
    this._relationCloudRsCloudEpgCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsCloudEpgCtxInput() {
    return this._relationCloudRsCloudEpgCtx;
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

  // relation_fv_rs_cust_qos_pol - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_applicationcontainer_dn: cdktf.stringToTerraform(this._cloudApplicationcontainerDn),
      description: cdktf.stringToTerraform(this._description),
      exception_tag: cdktf.stringToTerraform(this._exceptionTag),
      flood_on_encap: cdktf.stringToTerraform(this._floodOnEncap),
      id: cdktf.stringToTerraform(this._id),
      match_t: cdktf.stringToTerraform(this._matchT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pref_gr_memb: cdktf.stringToTerraform(this._prefGrMemb),
      prio: cdktf.stringToTerraform(this._prio),
      relation_cloud_rs_cloud_epg_ctx: cdktf.stringToTerraform(this._relationCloudRsCloudEpgCtx),
      relation_fv_rs_cons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsCons),
      relation_fv_rs_cons_if: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsConsIf),
      relation_fv_rs_cust_qos_pol: cdktf.stringToTerraform(this._relationFvRsCustQosPol),
      relation_fv_rs_intra_epg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsIntraEpg),
      relation_fv_rs_prot_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProtBy),
      relation_fv_rs_prov: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProv),
      relation_fv_rs_sec_inherited: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsSecInherited),
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
      cloud_applicationcontainer_dn: {
        value: cdktf.stringToHclTerraform(this._cloudApplicationcontainerDn),
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
      relation_cloud_rs_cloud_epg_ctx: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsCloudEpgCtx),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
