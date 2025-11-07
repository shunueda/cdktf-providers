// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutBfdInterfaceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#annotation L3OutBfdInterfaceProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#description L3OutBfdInterfaceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#id L3OutBfdInterfaceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#interface_profile_type L3OutBfdInterfaceProfile#interface_profile_type}
  */
  readonly interfaceProfileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#key L3OutBfdInterfaceProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#key_id L3OutBfdInterfaceProfile#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#logical_interface_profile_dn L3OutBfdInterfaceProfile#logical_interface_profile_dn}
  */
  readonly logicalInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#name_alias L3OutBfdInterfaceProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#relation_bfd_rs_if_pol L3OutBfdInterfaceProfile#relation_bfd_rs_if_pol}
  */
  readonly relationBfdRsIfPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile aci_l3out_bfd_interface_profile}
*/
export class L3OutBfdInterfaceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_bfd_interface_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutBfdInterfaceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutBfdInterfaceProfile to import
  * @param importFromId The id of the existing L3OutBfdInterfaceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutBfdInterfaceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_bfd_interface_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_bfd_interface_profile aci_l3out_bfd_interface_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutBfdInterfaceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutBfdInterfaceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_bfd_interface_profile',
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
    this._interfaceProfileType = config.interfaceProfileType;
    this._key = config.key;
    this._keyId = config.keyId;
    this._logicalInterfaceProfileDn = config.logicalInterfaceProfileDn;
    this._nameAlias = config.nameAlias;
    this._relationBfdRsIfPol = config.relationBfdRsIfPol;
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

  // interface_profile_type - computed: true, optional: true, required: false
  private _interfaceProfileType?: string; 
  public get interfaceProfileType() {
    return this.getStringAttribute('interface_profile_type');
  }
  public set interfaceProfileType(value: string) {
    this._interfaceProfileType = value;
  }
  public resetInterfaceProfileType() {
    this._interfaceProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceProfileTypeInput() {
    return this._interfaceProfileType;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // relation_bfd_rs_if_pol - computed: false, optional: true, required: false
  private _relationBfdRsIfPol?: string; 
  public get relationBfdRsIfPol() {
    return this.getStringAttribute('relation_bfd_rs_if_pol');
  }
  public set relationBfdRsIfPol(value: string) {
    this._relationBfdRsIfPol = value;
  }
  public resetRelationBfdRsIfPol() {
    this._relationBfdRsIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationBfdRsIfPolInput() {
    return this._relationBfdRsIfPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      interface_profile_type: cdktf.stringToTerraform(this._interfaceProfileType),
      key: cdktf.stringToTerraform(this._key),
      key_id: cdktf.stringToTerraform(this._keyId),
      logical_interface_profile_dn: cdktf.stringToTerraform(this._logicalInterfaceProfileDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_bfd_rs_if_pol: cdktf.stringToTerraform(this._relationBfdRsIfPol),
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
      interface_profile_type: {
        value: cdktf.stringToHclTerraform(this._interfaceProfileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
      relation_bfd_rs_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationBfdRsIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
