// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPortSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#access_port_selector_type AccessPortSelector#access_port_selector_type}
  */
  readonly accessPortSelectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#annotation AccessPortSelector#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#description AccessPortSelector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#id AccessPortSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#leaf_interface_profile_dn AccessPortSelector#leaf_interface_profile_dn}
  */
  readonly leafInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#name AccessPortSelector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#name_alias AccessPortSelector#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#relation_infra_rs_acc_base_grp AccessPortSelector#relation_infra_rs_acc_base_grp}
  */
  readonly relationInfraRsAccBaseGrp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector aci_access_port_selector}
*/
export class AccessPortSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_access_port_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessPortSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessPortSelector to import
  * @param importFromId The id of the existing AccessPortSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessPortSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_access_port_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_port_selector aci_access_port_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPortSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPortSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_access_port_selector',
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
    this._accessPortSelectorType = config.accessPortSelectorType;
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._leafInterfaceProfileDn = config.leafInterfaceProfileDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsAccBaseGrp = config.relationInfraRsAccBaseGrp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_port_selector_type - computed: false, optional: false, required: true
  private _accessPortSelectorType?: string; 
  public get accessPortSelectorType() {
    return this.getStringAttribute('access_port_selector_type');
  }
  public set accessPortSelectorType(value: string) {
    this._accessPortSelectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPortSelectorTypeInput() {
    return this._accessPortSelectorType;
  }

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

  // leaf_interface_profile_dn - computed: false, optional: false, required: true
  private _leafInterfaceProfileDn?: string; 
  public get leafInterfaceProfileDn() {
    return this.getStringAttribute('leaf_interface_profile_dn');
  }
  public set leafInterfaceProfileDn(value: string) {
    this._leafInterfaceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leafInterfaceProfileDnInput() {
    return this._leafInterfaceProfileDn;
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

  // relation_infra_rs_acc_base_grp - computed: false, optional: true, required: false
  private _relationInfraRsAccBaseGrp?: string; 
  public get relationInfraRsAccBaseGrp() {
    return this.getStringAttribute('relation_infra_rs_acc_base_grp');
  }
  public set relationInfraRsAccBaseGrp(value: string) {
    this._relationInfraRsAccBaseGrp = value;
  }
  public resetRelationInfraRsAccBaseGrp() {
    this._relationInfraRsAccBaseGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsAccBaseGrpInput() {
    return this._relationInfraRsAccBaseGrp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_port_selector_type: cdktf.stringToTerraform(this._accessPortSelectorType),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      leaf_interface_profile_dn: cdktf.stringToTerraform(this._leafInterfaceProfileDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_infra_rs_acc_base_grp: cdktf.stringToTerraform(this._relationInfraRsAccBaseGrp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_port_selector_type: {
        value: cdktf.stringToHclTerraform(this._accessPortSelectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      leaf_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._leafInterfaceProfileDn),
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
      relation_infra_rs_acc_base_grp: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsAccBaseGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
