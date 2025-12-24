// https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttributeImporterIdentityProviderMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attribute Friendly Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#attribute_friendly_name AttributeImporterIdentityProviderMapper#attribute_friendly_name}
  */
  readonly attributeFriendlyName?: string;
  /**
  * Attribute Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#attribute_name AttributeImporterIdentityProviderMapper#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Claim Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#claim_name AttributeImporterIdentityProviderMapper#claim_name}
  */
  readonly claimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#extra_config AttributeImporterIdentityProviderMapper#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#id AttributeImporterIdentityProviderMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP Alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#identity_provider_alias AttributeImporterIdentityProviderMapper#identity_provider_alias}
  */
  readonly identityProviderAlias: string;
  /**
  * IDP Mapper Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#name AttributeImporterIdentityProviderMapper#name}
  */
  readonly name: string;
  /**
  * Realm Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#realm AttributeImporterIdentityProviderMapper#realm}
  */
  readonly realm: string;
  /**
  * User Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#user_attribute AttributeImporterIdentityProviderMapper#user_attribute}
  */
  readonly userAttribute: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper keycloak_attribute_importer_identity_provider_mapper}
*/
export class AttributeImporterIdentityProviderMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_attribute_importer_identity_provider_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttributeImporterIdentityProviderMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttributeImporterIdentityProviderMapper to import
  * @param importFromId The id of the existing AttributeImporterIdentityProviderMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttributeImporterIdentityProviderMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_attribute_importer_identity_provider_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/attribute_importer_identity_provider_mapper keycloak_attribute_importer_identity_provider_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttributeImporterIdentityProviderMapperConfig
  */
  public constructor(scope: Construct, id: string, config: AttributeImporterIdentityProviderMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_attribute_importer_identity_provider_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.6.0',
        providerVersionConstraint: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeFriendlyName = config.attributeFriendlyName;
    this._attributeName = config.attributeName;
    this._claimName = config.claimName;
    this._extraConfig = config.extraConfig;
    this._id = config.id;
    this._identityProviderAlias = config.identityProviderAlias;
    this._name = config.name;
    this._realm = config.realm;
    this._userAttribute = config.userAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_friendly_name - computed: false, optional: true, required: false
  private _attributeFriendlyName?: string; 
  public get attributeFriendlyName() {
    return this.getStringAttribute('attribute_friendly_name');
  }
  public set attributeFriendlyName(value: string) {
    this._attributeFriendlyName = value;
  }
  public resetAttributeFriendlyName() {
    this._attributeFriendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFriendlyNameInput() {
    return this._attributeFriendlyName;
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
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

  // identity_provider_alias - computed: false, optional: false, required: true
  private _identityProviderAlias?: string; 
  public get identityProviderAlias() {
    return this.getStringAttribute('identity_provider_alias');
  }
  public set identityProviderAlias(value: string) {
    this._identityProviderAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderAliasInput() {
    return this._identityProviderAlias;
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

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // user_attribute - computed: false, optional: false, required: true
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_friendly_name: cdktf.stringToTerraform(this._attributeFriendlyName),
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      claim_name: cdktf.stringToTerraform(this._claimName),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      id: cdktf.stringToTerraform(this._id),
      identity_provider_alias: cdktf.stringToTerraform(this._identityProviderAlias),
      name: cdktf.stringToTerraform(this._name),
      realm: cdktf.stringToTerraform(this._realm),
      user_attribute: cdktf.stringToTerraform(this._userAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_friendly_name: {
        value: cdktf.stringToHclTerraform(this._attributeFriendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claim_name: {
        value: cdktf.stringToHclTerraform(this._claimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_alias: {
        value: cdktf.stringToHclTerraform(this._identityProviderAlias),
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
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_attribute: {
        value: cdktf.stringToHclTerraform(this._userAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
