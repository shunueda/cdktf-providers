// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sasl_mechanism_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectorySaslMechanismHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sasl_mechanism_handler#name DataPingdirectorySaslMechanismHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sasl_mechanism_handler pingdirectory_sasl_mechanism_handler}
*/
export class DataPingdirectorySaslMechanismHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_sasl_mechanism_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectorySaslMechanismHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectorySaslMechanismHandler to import
  * @param importFromId The id of the existing DataPingdirectorySaslMechanismHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sasl_mechanism_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectorySaslMechanismHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_sasl_mechanism_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/sasl_mechanism_handler pingdirectory_sasl_mechanism_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectorySaslMechanismHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectorySaslMechanismHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_sasl_mechanism_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validator - computed: true, optional: false, required: false
  public get accessTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('access_token_validator'));
  }

  // adjacent_intervals_to_check - computed: true, optional: false, required: false
  public get adjacentIntervalsToCheck() {
    return this.getNumberAttribute('adjacent_intervals_to_check');
  }

  // all_required_scope - computed: true, optional: false, required: false
  public get allRequiredScope() {
    return cdktf.Fn.tolist(this.getListAttribute('all_required_scope'));
  }

  // allow_null_server_fqdn - computed: true, optional: false, required: false
  public get allowNullServerFqdn() {
    return this.getBooleanAttribute('allow_null_server_fqdn');
  }

  // allowed_quality_of_protection - computed: true, optional: false, required: false
  public get allowedQualityOfProtection() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_quality_of_protection'));
  }

  // alternate_authorization_identity_mapper - computed: true, optional: false, required: false
  public get alternateAuthorizationIdentityMapper() {
    return this.getStringAttribute('alternate_authorization_identity_mapper');
  }

  // any_required_scope - computed: true, optional: false, required: false
  public get anyRequiredScope() {
    return cdktf.Fn.tolist(this.getListAttribute('any_required_scope'));
  }

  // certificate_attribute - computed: true, optional: false, required: false
  public get certificateAttribute() {
    return this.getStringAttribute('certificate_attribute');
  }

  // certificate_mapper - computed: true, optional: false, required: false
  public get certificateMapper() {
    return this.getStringAttribute('certificate_mapper');
  }

  // certificate_validation_policy - computed: true, optional: false, required: false
  public get certificateValidationPolicy() {
    return this.getStringAttribute('certificate_validation_policy');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_debug - computed: true, optional: false, required: false
  public get enableDebug() {
    return this.getBooleanAttribute('enable_debug');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // gssapi_role - computed: true, optional: false, required: false
  public get gssapiRole() {
    return this.getStringAttribute('gssapi_role');
  }

  // http_connect_timeout - computed: true, optional: false, required: false
  public get httpConnectTimeout() {
    return this.getStringAttribute('http_connect_timeout');
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // http_response_timeout - computed: true, optional: false, required: false
  public get httpResponseTimeout() {
    return this.getStringAttribute('http_response_timeout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator - computed: true, optional: false, required: false
  public get idTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('id_token_validator'));
  }

  // identity_mapper - computed: true, optional: false, required: false
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }

  // jaas_config_file - computed: true, optional: false, required: false
  public get jaasConfigFile() {
    return this.getStringAttribute('jaas_config_file');
  }

  // kdc_address - computed: true, optional: false, required: false
  public get kdcAddress() {
    return this.getStringAttribute('kdc_address');
  }

  // kerberos_service_principal - computed: true, optional: false, required: false
  public get kerberosServicePrincipal() {
    return this.getStringAttribute('kerberos_service_principal');
  }

  // key_manager_provider - computed: true, optional: false, required: false
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }

  // keytab - computed: true, optional: false, required: false
  public get keytab() {
    return this.getStringAttribute('keytab');
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

  // otp_validity_duration - computed: true, optional: false, required: false
  public get otpValidityDuration() {
    return this.getStringAttribute('otp_validity_duration');
  }

  // prevent_totp_reuse - computed: true, optional: false, required: false
  public get preventTotpReuse() {
    return this.getBooleanAttribute('prevent_totp_reuse');
  }

  // realm - computed: true, optional: false, required: false
  public get realm() {
    return this.getStringAttribute('realm');
  }

  // require_both_access_token_and_id_token - computed: true, optional: false, required: false
  public get requireBothAccessTokenAndIdToken() {
    return this.getBooleanAttribute('require_both_access_token_and_id_token');
  }

  // require_static_password - computed: true, optional: false, required: false
  public get requireStaticPassword() {
    return this.getBooleanAttribute('require_static_password');
  }

  // server_fqdn - computed: true, optional: false, required: false
  public get serverFqdn() {
    return this.getStringAttribute('server_fqdn');
  }

  // shared_secret_attribute_type - computed: true, optional: false, required: false
  public get sharedSecretAttributeType() {
    return this.getStringAttribute('shared_secret_attribute_type');
  }

  // time_interval_duration - computed: true, optional: false, required: false
  public get timeIntervalDuration() {
    return this.getStringAttribute('time_interval_duration');
  }

  // trust_manager_provider - computed: true, optional: false, required: false
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validate_access_token_when_id_token_is_also_provided - computed: true, optional: false, required: false
  public get validateAccessTokenWhenIdTokenIsAlsoProvided() {
    return this.getStringAttribute('validate_access_token_when_id_token_is_also_provided');
  }

  // yubikey_api_key - computed: true, optional: false, required: false
  public get yubikeyApiKey() {
    return this.getStringAttribute('yubikey_api_key');
  }

  // yubikey_api_key_passphrase_provider - computed: true, optional: false, required: false
  public get yubikeyApiKeyPassphraseProvider() {
    return this.getStringAttribute('yubikey_api_key_passphrase_provider');
  }

  // yubikey_client_id - computed: true, optional: false, required: false
  public get yubikeyClientId() {
    return this.getStringAttribute('yubikey_client_id');
  }

  // yubikey_validation_server_base_url - computed: true, optional: false, required: false
  public get yubikeyValidationServerBaseUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('yubikey_validation_server_base_url'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
