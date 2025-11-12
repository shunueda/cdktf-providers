// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralSamlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Required unless using `saml_metadata_url`) This is the full SAML metadata document that should be used to parse a SAML configuration, Base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_configuration#base_64_saml_metadata_document DataCyralSamlConfiguration#base_64_saml_metadata_document}
  */
  readonly base64SamlMetadataDocument?: string;
  /**
  * (Required unless using `base_64_saml_metadata_document`) This is the full SAML metadata URL we should use to parse to a SAML configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_configuration#saml_metadata_url DataCyralSamlConfiguration#saml_metadata_url}
  */
  readonly samlMetadataUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_configuration cyral_saml_configuration}
*/
export class DataCyralSamlConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_saml_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralSamlConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralSamlConfiguration to import
  * @param importFromId The id of the existing DataCyralSamlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralSamlConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_saml_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_configuration cyral_saml_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralSamlConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCyralSamlConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cyral_saml_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64SamlMetadataDocument = config.base64SamlMetadataDocument;
    this._samlMetadataUrl = config.samlMetadataUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_clock_skew - computed: true, optional: false, required: false
  public get allowedClockSkew() {
    return this.getNumberAttribute('allowed_clock_skew');
  }

  // back_channel_supported - computed: true, optional: false, required: false
  public get backChannelSupported() {
    return this.getBooleanAttribute('back_channel_supported');
  }

  // base_64_saml_metadata_document - computed: false, optional: true, required: false
  private _base64SamlMetadataDocument?: string; 
  public get base64SamlMetadataDocument() {
    return this.getStringAttribute('base_64_saml_metadata_document');
  }
  public set base64SamlMetadataDocument(value: string) {
    this._base64SamlMetadataDocument = value;
  }
  public resetBase64SamlMetadataDocument() {
    this._base64SamlMetadataDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64SamlMetadataDocumentInput() {
    return this._base64SamlMetadataDocument;
  }

  // disable_force_authentication - computed: true, optional: false, required: false
  public get disableForceAuthentication() {
    return this.getBooleanAttribute('disable_force_authentication');
  }

  // disable_post_binding_authn_request - computed: true, optional: false, required: false
  public get disablePostBindingAuthnRequest() {
    return this.getBooleanAttribute('disable_post_binding_authn_request');
  }

  // disable_post_binding_logout - computed: true, optional: false, required: false
  public get disablePostBindingLogout() {
    return this.getBooleanAttribute('disable_post_binding_logout');
  }

  // disable_post_binding_response - computed: true, optional: false, required: false
  public get disablePostBindingResponse() {
    return this.getBooleanAttribute('disable_post_binding_response');
  }

  // disable_using_jwks_url - computed: true, optional: false, required: false
  public get disableUsingJwksUrl() {
    return this.getBooleanAttribute('disable_using_jwks_url');
  }

  // disable_validate_signature - computed: true, optional: false, required: false
  public get disableValidateSignature() {
    return this.getBooleanAttribute('disable_validate_signature');
  }

  // disable_want_assertions_signed - computed: true, optional: false, required: false
  public get disableWantAssertionsSigned() {
    return this.getBooleanAttribute('disable_want_assertions_signed');
  }

  // disable_want_authn_requests_signed - computed: true, optional: false, required: false
  public get disableWantAuthnRequestsSigned() {
    return this.getBooleanAttribute('disable_want_authn_requests_signed');
  }

  // gui_order - computed: true, optional: false, required: false
  public get guiOrder() {
    return this.getStringAttribute('gui_order');
  }

  // hide_on_login_page - computed: true, optional: false, required: false
  public get hideOnLoginPage() {
    return this.getBooleanAttribute('hide_on_login_page');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_group_attribute - computed: true, optional: false, required: false
  public get ldapGroupAttribute() {
    return this.getStringAttribute('ldap_group_attribute');
  }

  // name_id_policy_format - computed: true, optional: false, required: false
  public get nameIdPolicyFormat() {
    return this.getStringAttribute('name_id_policy_format');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // saml_metadata_url - computed: false, optional: true, required: false
  private _samlMetadataUrl?: string; 
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }
  public set samlMetadataUrl(value: string) {
    this._samlMetadataUrl = value;
  }
  public resetSamlMetadataUrl() {
    this._samlMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataUrlInput() {
    return this._samlMetadataUrl;
  }

  // saml_xml_key_name_tranformer - computed: true, optional: false, required: false
  public get samlXmlKeyNameTranformer() {
    return this.getStringAttribute('saml_xml_key_name_tranformer');
  }

  // signature_type - computed: true, optional: false, required: false
  public get signatureType() {
    return this.getStringAttribute('signature_type');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // single_logout_service_url - computed: true, optional: false, required: false
  public get singleLogoutServiceUrl() {
    return this.getStringAttribute('single_logout_service_url');
  }

  // single_sign_on_service_url - computed: true, optional: false, required: false
  public get singleSignOnServiceUrl() {
    return this.getStringAttribute('single_sign_on_service_url');
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }

  // want_assertions_encrypted - computed: true, optional: false, required: false
  public get wantAssertionsEncrypted() {
    return this.getBooleanAttribute('want_assertions_encrypted');
  }

  // xml_sig_key_info_key_name_transformer - computed: true, optional: false, required: false
  public get xmlSigKeyInfoKeyNameTransformer() {
    return this.getStringAttribute('xml_sig_key_info_key_name_transformer');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_64_saml_metadata_document: cdktf.stringToTerraform(this._base64SamlMetadataDocument),
      saml_metadata_url: cdktf.stringToTerraform(this._samlMetadataUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_64_saml_metadata_document: {
        value: cdktf.stringToHclTerraform(this._base64SamlMetadataDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_metadata_url: {
        value: cdktf.stringToHclTerraform(this._samlMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
