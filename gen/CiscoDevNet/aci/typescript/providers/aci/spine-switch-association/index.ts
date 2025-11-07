// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpineSwitchAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#annotation SpineSwitchAssociation#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#description SpineSwitchAssociation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#id SpineSwitchAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#name SpineSwitchAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#name_alias SpineSwitchAssociation#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#relation_infra_rs_spine_acc_node_p_grp SpineSwitchAssociation#relation_infra_rs_spine_acc_node_p_grp}
  */
  readonly relationInfraRsSpineAccNodePGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#spine_profile_dn SpineSwitchAssociation#spine_profile_dn}
  */
  readonly spineProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#spine_switch_association_type SpineSwitchAssociation#spine_switch_association_type}
  */
  readonly spineSwitchAssociationType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association aci_spine_switch_association}
*/
export class SpineSwitchAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_spine_switch_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpineSwitchAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpineSwitchAssociation to import
  * @param importFromId The id of the existing SpineSwitchAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpineSwitchAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_spine_switch_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_switch_association aci_spine_switch_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpineSwitchAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SpineSwitchAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_spine_switch_association',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsSpineAccNodePGrp = config.relationInfraRsSpineAccNodePGrp;
    this._spineProfileDn = config.spineProfileDn;
    this._spineSwitchAssociationType = config.spineSwitchAssociationType;
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

  // relation_infra_rs_spine_acc_node_p_grp - computed: true, optional: true, required: false
  private _relationInfraRsSpineAccNodePGrp?: string; 
  public get relationInfraRsSpineAccNodePGrp() {
    return this.getStringAttribute('relation_infra_rs_spine_acc_node_p_grp');
  }
  public set relationInfraRsSpineAccNodePGrp(value: string) {
    this._relationInfraRsSpineAccNodePGrp = value;
  }
  public resetRelationInfraRsSpineAccNodePGrp() {
    this._relationInfraRsSpineAccNodePGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsSpineAccNodePGrpInput() {
    return this._relationInfraRsSpineAccNodePGrp;
  }

  // spine_profile_dn - computed: false, optional: false, required: true
  private _spineProfileDn?: string; 
  public get spineProfileDn() {
    return this.getStringAttribute('spine_profile_dn');
  }
  public set spineProfileDn(value: string) {
    this._spineProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spineProfileDnInput() {
    return this._spineProfileDn;
  }

  // spine_switch_association_type - computed: false, optional: false, required: true
  private _spineSwitchAssociationType?: string; 
  public get spineSwitchAssociationType() {
    return this.getStringAttribute('spine_switch_association_type');
  }
  public set spineSwitchAssociationType(value: string) {
    this._spineSwitchAssociationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spineSwitchAssociationTypeInput() {
    return this._spineSwitchAssociationType;
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
      relation_infra_rs_spine_acc_node_p_grp: cdktf.stringToTerraform(this._relationInfraRsSpineAccNodePGrp),
      spine_profile_dn: cdktf.stringToTerraform(this._spineProfileDn),
      spine_switch_association_type: cdktf.stringToTerraform(this._spineSwitchAssociationType),
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
      relation_infra_rs_spine_acc_node_p_grp: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsSpineAccNodePGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spine_profile_dn: {
        value: cdktf.stringToHclTerraform(this._spineProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spine_switch_association_type: {
        value: cdktf.stringToHclTerraform(this._spineSwitchAssociationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
