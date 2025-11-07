// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutHsrpInterfaceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#annotation L3OutHsrpInterfaceProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#description L3OutHsrpInterfaceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#id L3OutHsrpInterfaceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#logical_interface_profile_dn L3OutHsrpInterfaceProfile#logical_interface_profile_dn}
  */
  readonly logicalInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#name_alias L3OutHsrpInterfaceProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#relation_hsrp_rs_if_pol L3OutHsrpInterfaceProfile#relation_hsrp_rs_if_pol}
  */
  readonly relationHsrpRsIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#version L3OutHsrpInterfaceProfile#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile aci_l3out_hsrp_interface_profile}
*/
export class L3OutHsrpInterfaceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_hsrp_interface_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutHsrpInterfaceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutHsrpInterfaceProfile to import
  * @param importFromId The id of the existing L3OutHsrpInterfaceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutHsrpInterfaceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_hsrp_interface_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_hsrp_interface_profile aci_l3out_hsrp_interface_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutHsrpInterfaceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutHsrpInterfaceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_hsrp_interface_profile',
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
    this._logicalInterfaceProfileDn = config.logicalInterfaceProfileDn;
    this._nameAlias = config.nameAlias;
    this._relationHsrpRsIfPol = config.relationHsrpRsIfPol;
    this._version = config.version;
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

  // logical_interface_profile_dn - computed: false, optional: false, required: true
  private _logicalInterfaceProfileDn?: string; 
  public get logicalInterfaceProfileDn() {
    return this.getStringAttribute('logical_interface_profile_dn');
  }
  public set logicalInterfaceProfileDn(value: string) {
    this._logicalInterfaceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalInterfaceProfileDnInput() {
    return this._logicalInterfaceProfileDn;
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

  // relation_hsrp_rs_if_pol - computed: true, optional: true, required: false
  private _relationHsrpRsIfPol?: string; 
  public get relationHsrpRsIfPol() {
    return this.getStringAttribute('relation_hsrp_rs_if_pol');
  }
  public set relationHsrpRsIfPol(value: string) {
    this._relationHsrpRsIfPol = value;
  }
  public resetRelationHsrpRsIfPol() {
    this._relationHsrpRsIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationHsrpRsIfPolInput() {
    return this._relationHsrpRsIfPol;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      logical_interface_profile_dn: cdktf.stringToTerraform(this._logicalInterfaceProfileDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_hsrp_rs_if_pol: cdktf.stringToTerraform(this._relationHsrpRsIfPol),
      version: cdktf.stringToTerraform(this._version),
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
      logical_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalInterfaceProfileDn),
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
      relation_hsrp_rs_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationHsrpRsIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
