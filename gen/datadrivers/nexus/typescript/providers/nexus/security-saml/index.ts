// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritySamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * IdP field mappings for user's email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#email_attribute SecuritySaml#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * Entity ID URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#entity_id SecuritySaml#entity_id}
  */
  readonly entityId?: string;
  /**
  * IdP field mappings for user's given name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#first_name_attribute SecuritySaml#first_name_attribute}
  */
  readonly firstNameAttribute?: string;
  /**
  * IdP field mappings for user's groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#groups_attribute SecuritySaml#groups_attribute}
  */
  readonly groupsAttribute?: string;
  /**
  * SAML Identity Provider Metadata XML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#idp_metadata SecuritySaml#idp_metadata}
  */
  readonly idpMetadata: string;
  /**
  * IdP field mappings for user's family name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#last_name_attribute SecuritySaml#last_name_attribute}
  */
  readonly lastNameAttribute?: string;
  /**
  * IdP field mappings for username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#username_attribute SecuritySaml#username_attribute}
  */
  readonly usernameAttribute: string;
  /**
  * By default, if a signing key is found in the IdP metadata, then NXRM will attempt to validate signatures on the assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#validate_assertion_signature SecuritySaml#validate_assertion_signature}
  */
  readonly validateAssertionSignature?: boolean | cdktf.IResolvable;
  /**
  * By default, if a signing key is found in the IdP metadata, then NXRM will attempt to validate signatures on the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#validate_response_signature SecuritySaml#validate_response_signature}
  */
  readonly validateResponseSignature?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml nexus_security_saml}
*/
export class SecuritySaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritySaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritySaml to import
  * @param importFromId The id of the existing SecuritySaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritySaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_saml nexus_security_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritySamlConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritySamlConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_saml',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailAttribute = config.emailAttribute;
    this._entityId = config.entityId;
    this._firstNameAttribute = config.firstNameAttribute;
    this._groupsAttribute = config.groupsAttribute;
    this._idpMetadata = config.idpMetadata;
    this._lastNameAttribute = config.lastNameAttribute;
    this._usernameAttribute = config.usernameAttribute;
    this._validateAssertionSignature = config.validateAssertionSignature;
    this._validateResponseSignature = config.validateResponseSignature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_attribute - computed: false, optional: true, required: false
  private _emailAttribute?: string; 
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }
  public set emailAttribute(value: string) {
    this._emailAttribute = value;
  }
  public resetEmailAttribute() {
    this._emailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeInput() {
    return this._emailAttribute;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // first_name_attribute - computed: false, optional: true, required: false
  private _firstNameAttribute?: string; 
  public get firstNameAttribute() {
    return this.getStringAttribute('first_name_attribute');
  }
  public set firstNameAttribute(value: string) {
    this._firstNameAttribute = value;
  }
  public resetFirstNameAttribute() {
    this._firstNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameAttributeInput() {
    return this._firstNameAttribute;
  }

  // groups_attribute - computed: false, optional: true, required: false
  private _groupsAttribute?: string; 
  public get groupsAttribute() {
    return this.getStringAttribute('groups_attribute');
  }
  public set groupsAttribute(value: string) {
    this._groupsAttribute = value;
  }
  public resetGroupsAttribute() {
    this._groupsAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAttributeInput() {
    return this._groupsAttribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_metadata - computed: false, optional: false, required: true
  private _idpMetadata?: string; 
  public get idpMetadata() {
    return this.getStringAttribute('idp_metadata');
  }
  public set idpMetadata(value: string) {
    this._idpMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataInput() {
    return this._idpMetadata;
  }

  // last_name_attribute - computed: false, optional: true, required: false
  private _lastNameAttribute?: string; 
  public get lastNameAttribute() {
    return this.getStringAttribute('last_name_attribute');
  }
  public set lastNameAttribute(value: string) {
    this._lastNameAttribute = value;
  }
  public resetLastNameAttribute() {
    this._lastNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameAttributeInput() {
    return this._lastNameAttribute;
  }

  // username_attribute - computed: false, optional: false, required: true
  private _usernameAttribute?: string; 
  public get usernameAttribute() {
    return this.getStringAttribute('username_attribute');
  }
  public set usernameAttribute(value: string) {
    this._usernameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributeInput() {
    return this._usernameAttribute;
  }

  // validate_assertion_signature - computed: false, optional: true, required: false
  private _validateAssertionSignature?: boolean | cdktf.IResolvable; 
  public get validateAssertionSignature() {
    return this.getBooleanAttribute('validate_assertion_signature');
  }
  public set validateAssertionSignature(value: boolean | cdktf.IResolvable) {
    this._validateAssertionSignature = value;
  }
  public resetValidateAssertionSignature() {
    this._validateAssertionSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAssertionSignatureInput() {
    return this._validateAssertionSignature;
  }

  // validate_response_signature - computed: false, optional: true, required: false
  private _validateResponseSignature?: boolean | cdktf.IResolvable; 
  public get validateResponseSignature() {
    return this.getBooleanAttribute('validate_response_signature');
  }
  public set validateResponseSignature(value: boolean | cdktf.IResolvable) {
    this._validateResponseSignature = value;
  }
  public resetValidateResponseSignature() {
    this._validateResponseSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateResponseSignatureInput() {
    return this._validateResponseSignature;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      entity_id: cdktf.stringToTerraform(this._entityId),
      first_name_attribute: cdktf.stringToTerraform(this._firstNameAttribute),
      groups_attribute: cdktf.stringToTerraform(this._groupsAttribute),
      idp_metadata: cdktf.stringToTerraform(this._idpMetadata),
      last_name_attribute: cdktf.stringToTerraform(this._lastNameAttribute),
      username_attribute: cdktf.stringToTerraform(this._usernameAttribute),
      validate_assertion_signature: cdktf.booleanToTerraform(this._validateAssertionSignature),
      validate_response_signature: cdktf.booleanToTerraform(this._validateResponseSignature),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_attribute: {
        value: cdktf.stringToHclTerraform(this._emailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_attribute: {
        value: cdktf.stringToHclTerraform(this._firstNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_attribute: {
        value: cdktf.stringToHclTerraform(this._groupsAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata: {
        value: cdktf.stringToHclTerraform(this._idpMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name_attribute: {
        value: cdktf.stringToHclTerraform(this._lastNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_attribute: {
        value: cdktf.stringToHclTerraform(this._usernameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_assertion_signature: {
        value: cdktf.booleanToHclTerraform(this._validateAssertionSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_response_signature: {
        value: cdktf.booleanToHclTerraform(this._validateResponseSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
