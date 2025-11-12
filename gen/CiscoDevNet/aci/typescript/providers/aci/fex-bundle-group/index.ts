// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FexBundleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#annotation FexBundleGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#description FexBundleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#fex_profile_dn FexBundleGroup#fex_profile_dn}
  */
  readonly fexProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#id FexBundleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#name FexBundleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#name_alias FexBundleGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#relation_infra_rs_fex_bndl_grp_to_aggr_if FexBundleGroup#relation_infra_rs_fex_bndl_grp_to_aggr_if}
  */
  readonly relationInfraRsFexBndlGrpToAggrIf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#relation_infra_rs_mon_fex_infra_pol FexBundleGroup#relation_infra_rs_mon_fex_infra_pol}
  */
  readonly relationInfraRsMonFexInfraPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group aci_fex_bundle_group}
*/
export class FexBundleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_fex_bundle_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FexBundleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FexBundleGroup to import
  * @param importFromId The id of the existing FexBundleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FexBundleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_fex_bundle_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/fex_bundle_group aci_fex_bundle_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FexBundleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FexBundleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_fex_bundle_group',
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
    this._fexProfileDn = config.fexProfileDn;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsFexBndlGrpToAggrIf = config.relationInfraRsFexBndlGrpToAggrIf;
    this._relationInfraRsMonFexInfraPol = config.relationInfraRsMonFexInfraPol;
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

  // fex_profile_dn - computed: false, optional: false, required: true
  private _fexProfileDn?: string; 
  public get fexProfileDn() {
    return this.getStringAttribute('fex_profile_dn');
  }
  public set fexProfileDn(value: string) {
    this._fexProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fexProfileDnInput() {
    return this._fexProfileDn;
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

  // relation_infra_rs_fex_bndl_grp_to_aggr_if - computed: false, optional: true, required: false
  private _relationInfraRsFexBndlGrpToAggrIf?: string[]; 
  public get relationInfraRsFexBndlGrpToAggrIf() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_infra_rs_fex_bndl_grp_to_aggr_if'));
  }
  public set relationInfraRsFexBndlGrpToAggrIf(value: string[]) {
    this._relationInfraRsFexBndlGrpToAggrIf = value;
  }
  public resetRelationInfraRsFexBndlGrpToAggrIf() {
    this._relationInfraRsFexBndlGrpToAggrIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsFexBndlGrpToAggrIfInput() {
    return this._relationInfraRsFexBndlGrpToAggrIf;
  }

  // relation_infra_rs_mon_fex_infra_pol - computed: false, optional: true, required: false
  private _relationInfraRsMonFexInfraPol?: string; 
  public get relationInfraRsMonFexInfraPol() {
    return this.getStringAttribute('relation_infra_rs_mon_fex_infra_pol');
  }
  public set relationInfraRsMonFexInfraPol(value: string) {
    this._relationInfraRsMonFexInfraPol = value;
  }
  public resetRelationInfraRsMonFexInfraPol() {
    this._relationInfraRsMonFexInfraPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMonFexInfraPolInput() {
    return this._relationInfraRsMonFexInfraPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      fex_profile_dn: cdktf.stringToTerraform(this._fexProfileDn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_infra_rs_fex_bndl_grp_to_aggr_if: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationInfraRsFexBndlGrpToAggrIf),
      relation_infra_rs_mon_fex_infra_pol: cdktf.stringToTerraform(this._relationInfraRsMonFexInfraPol),
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
      fex_profile_dn: {
        value: cdktf.stringToHclTerraform(this._fexProfileDn),
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
      relation_infra_rs_fex_bndl_grp_to_aggr_if: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationInfraRsFexBndlGrpToAggrIf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_infra_rs_mon_fex_infra_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMonFexInfraPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
