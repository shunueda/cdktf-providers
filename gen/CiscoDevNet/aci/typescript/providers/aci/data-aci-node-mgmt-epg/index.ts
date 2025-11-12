// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciNodeMgmtEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#annotation DataAciNodeMgmtEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#description DataAciNodeMgmtEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#encap DataAciNodeMgmtEpg#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#exception_tag DataAciNodeMgmtEpg#exception_tag}
  */
  readonly exceptionTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#flood_on_encap DataAciNodeMgmtEpg#flood_on_encap}
  */
  readonly floodOnEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#id DataAciNodeMgmtEpg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#management_profile_dn DataAciNodeMgmtEpg#management_profile_dn}
  */
  readonly managementProfileDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#match_t DataAciNodeMgmtEpg#match_t}
  */
  readonly matchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#name DataAciNodeMgmtEpg#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#name_alias DataAciNodeMgmtEpg#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#pref_gr_memb DataAciNodeMgmtEpg#pref_gr_memb}
  */
  readonly prefGrMemb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#prio DataAciNodeMgmtEpg#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#type DataAciNodeMgmtEpg#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg aci_node_mgmt_epg}
*/
export class DataAciNodeMgmtEpg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_node_mgmt_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciNodeMgmtEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciNodeMgmtEpg to import
  * @param importFromId The id of the existing DataAciNodeMgmtEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciNodeMgmtEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_node_mgmt_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/node_mgmt_epg aci_node_mgmt_epg} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciNodeMgmtEpgConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciNodeMgmtEpgConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_node_mgmt_epg',
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
    this._encap = config.encap;
    this._exceptionTag = config.exceptionTag;
    this._floodOnEncap = config.floodOnEncap;
    this._id = config.id;
    this._managementProfileDn = config.managementProfileDn;
    this._matchT = config.matchT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prefGrMemb = config.prefGrMemb;
    this._prio = config.prio;
    this._type = config.type;
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

  // encap - computed: true, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
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

  // management_profile_dn - computed: false, optional: true, required: false
  private _managementProfileDn?: string; 
  public get managementProfileDn() {
    return this.getStringAttribute('management_profile_dn');
  }
  public set managementProfileDn(value: string) {
    this._managementProfileDn = value;
  }
  public resetManagementProfileDn() {
    this._managementProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementProfileDnInput() {
    return this._managementProfileDn;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      exception_tag: cdktf.stringToTerraform(this._exceptionTag),
      flood_on_encap: cdktf.stringToTerraform(this._floodOnEncap),
      id: cdktf.stringToTerraform(this._id),
      management_profile_dn: cdktf.stringToTerraform(this._managementProfileDn),
      match_t: cdktf.stringToTerraform(this._matchT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pref_gr_memb: cdktf.stringToTerraform(this._prefGrMemb),
      prio: cdktf.stringToTerraform(this._prio),
      type: cdktf.stringToTerraform(this._type),
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
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
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
      management_profile_dn: {
        value: cdktf.stringToHclTerraform(this._managementProfileDn),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
