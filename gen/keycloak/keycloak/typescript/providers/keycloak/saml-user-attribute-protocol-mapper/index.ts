// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlUserAttributeProtocolMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if attribute values should be aggregated within the group attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#aggregate_attributes SamlUserAttributeProtocolMapper#aggregate_attributes}
  */
  readonly aggregateAttributes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#client_id SamlUserAttributeProtocolMapper#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#client_scope_id SamlUserAttributeProtocolMapper#client_scope_id}
  */
  readonly clientScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#friendly_name SamlUserAttributeProtocolMapper#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#id SamlUserAttributeProtocolMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#name SamlUserAttributeProtocolMapper#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#realm_id SamlUserAttributeProtocolMapper#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#saml_attribute_name SamlUserAttributeProtocolMapper#saml_attribute_name}
  */
  readonly samlAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#saml_attribute_name_format SamlUserAttributeProtocolMapper#saml_attribute_name_format}
  */
  readonly samlAttributeNameFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#user_attribute SamlUserAttributeProtocolMapper#user_attribute}
  */
  readonly userAttribute: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper keycloak_saml_user_attribute_protocol_mapper}
*/
export class SamlUserAttributeProtocolMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_saml_user_attribute_protocol_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlUserAttributeProtocolMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlUserAttributeProtocolMapper to import
  * @param importFromId The id of the existing SamlUserAttributeProtocolMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlUserAttributeProtocolMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_saml_user_attribute_protocol_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/saml_user_attribute_protocol_mapper keycloak_saml_user_attribute_protocol_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlUserAttributeProtocolMapperConfig
  */
  public constructor(scope: Construct, id: string, config: SamlUserAttributeProtocolMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_saml_user_attribute_protocol_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateAttributes = config.aggregateAttributes;
    this._clientId = config.clientId;
    this._clientScopeId = config.clientScopeId;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._name = config.name;
    this._realmId = config.realmId;
    this._samlAttributeName = config.samlAttributeName;
    this._samlAttributeNameFormat = config.samlAttributeNameFormat;
    this._userAttribute = config.userAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_attributes - computed: false, optional: true, required: false
  private _aggregateAttributes?: boolean | cdktf.IResolvable; 
  public get aggregateAttributes() {
    return this.getBooleanAttribute('aggregate_attributes');
  }
  public set aggregateAttributes(value: boolean | cdktf.IResolvable) {
    this._aggregateAttributes = value;
  }
  public resetAggregateAttributes() {
    this._aggregateAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAttributesInput() {
    return this._aggregateAttributes;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_scope_id - computed: false, optional: true, required: false
  private _clientScopeId?: string; 
  public get clientScopeId() {
    return this.getStringAttribute('client_scope_id');
  }
  public set clientScopeId(value: string) {
    this._clientScopeId = value;
  }
  public resetClientScopeId() {
    this._clientScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeIdInput() {
    return this._clientScopeId;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // saml_attribute_name - computed: false, optional: false, required: true
  private _samlAttributeName?: string; 
  public get samlAttributeName() {
    return this.getStringAttribute('saml_attribute_name');
  }
  public set samlAttributeName(value: string) {
    this._samlAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAttributeNameInput() {
    return this._samlAttributeName;
  }

  // saml_attribute_name_format - computed: false, optional: false, required: true
  private _samlAttributeNameFormat?: string; 
  public get samlAttributeNameFormat() {
    return this.getStringAttribute('saml_attribute_name_format');
  }
  public set samlAttributeNameFormat(value: string) {
    this._samlAttributeNameFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAttributeNameFormatInput() {
    return this._samlAttributeNameFormat;
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
      aggregate_attributes: cdktf.booleanToTerraform(this._aggregateAttributes),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_scope_id: cdktf.stringToTerraform(this._clientScopeId),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      saml_attribute_name: cdktf.stringToTerraform(this._samlAttributeName),
      saml_attribute_name_format: cdktf.stringToTerraform(this._samlAttributeNameFormat),
      user_attribute: cdktf.stringToTerraform(this._userAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_attributes: {
        value: cdktf.booleanToHclTerraform(this._aggregateAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_scope_id: {
        value: cdktf.stringToHclTerraform(this._clientScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_attribute_name: {
        value: cdktf.stringToHclTerraform(this._samlAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_attribute_name_format: {
        value: cdktf.stringToHclTerraform(this._samlAttributeNameFormat),
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
