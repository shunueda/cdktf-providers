// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DuoProviderGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#annotation DuoProviderGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#auth_choice DuoProviderGroup#auth_choice}
  */
  readonly authChoice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#description DuoProviderGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#id DuoProviderGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#ldap_group_map_ref DuoProviderGroup#ldap_group_map_ref}
  */
  readonly ldapGroupMapRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#name DuoProviderGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#name_alias DuoProviderGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#provider_type DuoProviderGroup#provider_type}
  */
  readonly providerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#sec_fac_auth_methods DuoProviderGroup#sec_fac_auth_methods}
  */
  readonly secFacAuthMethods?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group aci_duo_provider_group}
*/
export class DuoProviderGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_duo_provider_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DuoProviderGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DuoProviderGroup to import
  * @param importFromId The id of the existing DuoProviderGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DuoProviderGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_duo_provider_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/duo_provider_group aci_duo_provider_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DuoProviderGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DuoProviderGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_duo_provider_group',
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
    this._authChoice = config.authChoice;
    this._description = config.description;
    this._id = config.id;
    this._ldapGroupMapRef = config.ldapGroupMapRef;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._providerType = config.providerType;
    this._secFacAuthMethods = config.secFacAuthMethods;
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

  // auth_choice - computed: true, optional: true, required: false
  private _authChoice?: string; 
  public get authChoice() {
    return this.getStringAttribute('auth_choice');
  }
  public set authChoice(value: string) {
    this._authChoice = value;
  }
  public resetAuthChoice() {
    this._authChoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authChoiceInput() {
    return this._authChoice;
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

  // ldap_group_map_ref - computed: true, optional: true, required: false
  private _ldapGroupMapRef?: string; 
  public get ldapGroupMapRef() {
    return this.getStringAttribute('ldap_group_map_ref');
  }
  public set ldapGroupMapRef(value: string) {
    this._ldapGroupMapRef = value;
  }
  public resetLdapGroupMapRef() {
    this._ldapGroupMapRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupMapRefInput() {
    return this._ldapGroupMapRef;
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

  // provider_type - computed: true, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // sec_fac_auth_methods - computed: true, optional: true, required: false
  private _secFacAuthMethods?: string[]; 
  public get secFacAuthMethods() {
    return this.getListAttribute('sec_fac_auth_methods');
  }
  public set secFacAuthMethods(value: string[]) {
    this._secFacAuthMethods = value;
  }
  public resetSecFacAuthMethods() {
    this._secFacAuthMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secFacAuthMethodsInput() {
    return this._secFacAuthMethods;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_choice: cdktf.stringToTerraform(this._authChoice),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ldap_group_map_ref: cdktf.stringToTerraform(this._ldapGroupMapRef),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      provider_type: cdktf.stringToTerraform(this._providerType),
      sec_fac_auth_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secFacAuthMethods),
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
      auth_choice: {
        value: cdktf.stringToHclTerraform(this._authChoice),
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
      ldap_group_map_ref: {
        value: cdktf.stringToHclTerraform(this._ldapGroupMapRef),
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
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_fac_auth_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secFacAuthMethods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
