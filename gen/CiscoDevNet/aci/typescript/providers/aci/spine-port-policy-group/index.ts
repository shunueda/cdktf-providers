// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpinePortPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#annotation SpinePortPolicyGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#description SpinePortPolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#id SpinePortPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#name SpinePortPolicyGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#name_alias SpinePortPolicyGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#relation_infra_rs_att_ent_p SpinePortPolicyGroup#relation_infra_rs_att_ent_p}
  */
  readonly relationInfraRsAttEntP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#relation_infra_rs_cdp_if_pol SpinePortPolicyGroup#relation_infra_rs_cdp_if_pol}
  */
  readonly relationInfraRsCdpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#relation_infra_rs_copp_if_pol SpinePortPolicyGroup#relation_infra_rs_copp_if_pol}
  */
  readonly relationInfraRsCoppIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#relation_infra_rs_h_if_pol SpinePortPolicyGroup#relation_infra_rs_h_if_pol}
  */
  readonly relationInfraRsHIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#relation_infra_rs_macsec_if_pol SpinePortPolicyGroup#relation_infra_rs_macsec_if_pol}
  */
  readonly relationInfraRsMacsecIfPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group aci_spine_port_policy_group}
*/
export class SpinePortPolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_spine_port_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpinePortPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpinePortPolicyGroup to import
  * @param importFromId The id of the existing SpinePortPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpinePortPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_spine_port_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_policy_group aci_spine_port_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpinePortPolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SpinePortPolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_spine_port_policy_group',
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
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsAttEntP = config.relationInfraRsAttEntP;
    this._relationInfraRsCdpIfPol = config.relationInfraRsCdpIfPol;
    this._relationInfraRsCoppIfPol = config.relationInfraRsCoppIfPol;
    this._relationInfraRsHIfPol = config.relationInfraRsHIfPol;
    this._relationInfraRsMacsecIfPol = config.relationInfraRsMacsecIfPol;
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

  // relation_infra_rs_att_ent_p - computed: false, optional: true, required: false
  private _relationInfraRsAttEntP?: string; 
  public get relationInfraRsAttEntP() {
    return this.getStringAttribute('relation_infra_rs_att_ent_p');
  }
  public set relationInfraRsAttEntP(value: string) {
    this._relationInfraRsAttEntP = value;
  }
  public resetRelationInfraRsAttEntP() {
    this._relationInfraRsAttEntP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsAttEntPInput() {
    return this._relationInfraRsAttEntP;
  }

  // relation_infra_rs_cdp_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsCdpIfPol?: string; 
  public get relationInfraRsCdpIfPol() {
    return this.getStringAttribute('relation_infra_rs_cdp_if_pol');
  }
  public set relationInfraRsCdpIfPol(value: string) {
    this._relationInfraRsCdpIfPol = value;
  }
  public resetRelationInfraRsCdpIfPol() {
    this._relationInfraRsCdpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsCdpIfPolInput() {
    return this._relationInfraRsCdpIfPol;
  }

  // relation_infra_rs_copp_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsCoppIfPol?: string; 
  public get relationInfraRsCoppIfPol() {
    return this.getStringAttribute('relation_infra_rs_copp_if_pol');
  }
  public set relationInfraRsCoppIfPol(value: string) {
    this._relationInfraRsCoppIfPol = value;
  }
  public resetRelationInfraRsCoppIfPol() {
    this._relationInfraRsCoppIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsCoppIfPolInput() {
    return this._relationInfraRsCoppIfPol;
  }

  // relation_infra_rs_h_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsHIfPol?: string; 
  public get relationInfraRsHIfPol() {
    return this.getStringAttribute('relation_infra_rs_h_if_pol');
  }
  public set relationInfraRsHIfPol(value: string) {
    this._relationInfraRsHIfPol = value;
  }
  public resetRelationInfraRsHIfPol() {
    this._relationInfraRsHIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsHIfPolInput() {
    return this._relationInfraRsHIfPol;
  }

  // relation_infra_rs_macsec_if_pol - computed: false, optional: true, required: false
  private _relationInfraRsMacsecIfPol?: string; 
  public get relationInfraRsMacsecIfPol() {
    return this.getStringAttribute('relation_infra_rs_macsec_if_pol');
  }
  public set relationInfraRsMacsecIfPol(value: string) {
    this._relationInfraRsMacsecIfPol = value;
  }
  public resetRelationInfraRsMacsecIfPol() {
    this._relationInfraRsMacsecIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsMacsecIfPolInput() {
    return this._relationInfraRsMacsecIfPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_infra_rs_att_ent_p: cdktf.stringToTerraform(this._relationInfraRsAttEntP),
      relation_infra_rs_cdp_if_pol: cdktf.stringToTerraform(this._relationInfraRsCdpIfPol),
      relation_infra_rs_copp_if_pol: cdktf.stringToTerraform(this._relationInfraRsCoppIfPol),
      relation_infra_rs_h_if_pol: cdktf.stringToTerraform(this._relationInfraRsHIfPol),
      relation_infra_rs_macsec_if_pol: cdktf.stringToTerraform(this._relationInfraRsMacsecIfPol),
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
      relation_infra_rs_att_ent_p: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsAttEntP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_cdp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsCdpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_copp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsCoppIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_h_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsHIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_macsec_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsMacsecIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
