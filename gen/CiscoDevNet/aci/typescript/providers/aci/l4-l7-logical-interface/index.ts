// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L4L7LogicalInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#annotation L4L7LogicalInterface#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#description L4L7LogicalInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#encap L4L7LogicalInterface#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#enhanced_lag_policy_name L4L7LogicalInterface#enhanced_lag_policy_name}
  */
  readonly enhancedLagPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#id L4L7LogicalInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#l4_l7_device_dn L4L7LogicalInterface#l4_l7_device_dn}
  */
  readonly l4L7DeviceDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#name L4L7LogicalInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#name_alias L4L7LogicalInterface#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Create relation to vnsCIf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#relation_vns_rs_c_if_att_n L4L7LogicalInterface#relation_vns_rs_c_if_att_n}
  */
  readonly relationVnsRsCIfAttN?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface aci_l4_l7_logical_interface}
*/
export class L4L7LogicalInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l4_l7_logical_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L4L7LogicalInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L4L7LogicalInterface to import
  * @param importFromId The id of the existing L4L7LogicalInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L4L7LogicalInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l4_l7_logical_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l4_l7_logical_interface aci_l4_l7_logical_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L4L7LogicalInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: L4L7LogicalInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l4_l7_logical_interface',
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
    this._enhancedLagPolicyName = config.enhancedLagPolicyName;
    this._id = config.id;
    this._l4L7DeviceDn = config.l4L7DeviceDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationVnsRsCIfAttN = config.relationVnsRsCIfAttN;
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

  // enhanced_lag_policy_name - computed: true, optional: true, required: false
  private _enhancedLagPolicyName?: string; 
  public get enhancedLagPolicyName() {
    return this.getStringAttribute('enhanced_lag_policy_name');
  }
  public set enhancedLagPolicyName(value: string) {
    this._enhancedLagPolicyName = value;
  }
  public resetEnhancedLagPolicyName() {
    this._enhancedLagPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedLagPolicyNameInput() {
    return this._enhancedLagPolicyName;
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

  // l4_l7_device_dn - computed: false, optional: false, required: true
  private _l4L7DeviceDn?: string; 
  public get l4L7DeviceDn() {
    return this.getStringAttribute('l4_l7_device_dn');
  }
  public set l4L7DeviceDn(value: string) {
    this._l4L7DeviceDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceDnInput() {
    return this._l4L7DeviceDn;
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

  // relation_vns_rs_c_if_att_n - computed: false, optional: true, required: false
  private _relationVnsRsCIfAttN?: string[]; 
  public get relationVnsRsCIfAttN() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_vns_rs_c_if_att_n'));
  }
  public set relationVnsRsCIfAttN(value: string[]) {
    this._relationVnsRsCIfAttN = value;
  }
  public resetRelationVnsRsCIfAttN() {
    this._relationVnsRsCIfAttN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsCIfAttNInput() {
    return this._relationVnsRsCIfAttN;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      enhanced_lag_policy_name: cdktf.stringToTerraform(this._enhancedLagPolicyName),
      id: cdktf.stringToTerraform(this._id),
      l4_l7_device_dn: cdktf.stringToTerraform(this._l4L7DeviceDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_vns_rs_c_if_att_n: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationVnsRsCIfAttN),
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
      enhanced_lag_policy_name: {
        value: cdktf.stringToHclTerraform(this._enhancedLagPolicyName),
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
      l4_l7_device_dn: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceDn),
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
      relation_vns_rs_c_if_att_n: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationVnsRsCIfAttN),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
