// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_token_validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryAccessTokenValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_token_validator#name DataPingdirectoryAccessTokenValidator#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_token_validator pingdirectory_access_token_validator}
*/
export class DataPingdirectoryAccessTokenValidator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_access_token_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryAccessTokenValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryAccessTokenValidator to import
  * @param importFromId The id of the existing DataPingdirectoryAccessTokenValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_token_validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryAccessTokenValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_access_token_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_token_validator pingdirectory_access_token_validator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryAccessTokenValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryAccessTokenValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_access_token_validator',
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

  // access_token_manager_id - computed: true, optional: false, required: false
  public get accessTokenManagerId() {
    return this.getStringAttribute('access_token_manager_id');
  }

  // allowed_authentication_type - computed: true, optional: false, required: false
  public get allowedAuthenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_type'));
  }

  // allowed_content_encryption_algorithm - computed: true, optional: false, required: false
  public get allowedContentEncryptionAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_content_encryption_algorithm'));
  }

  // allowed_key_encryption_algorithm - computed: true, optional: false, required: false
  public get allowedKeyEncryptionAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_key_encryption_algorithm'));
  }

  // allowed_sasl_mechanism - computed: true, optional: false, required: false
  public get allowedSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_sasl_mechanism'));
  }

  // allowed_signing_algorithm - computed: true, optional: false, required: false
  public get allowedSigningAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_signing_algorithm'));
  }

  // authorization_server - computed: true, optional: false, required: false
  public get authorizationServer() {
    return this.getStringAttribute('authorization_server');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_id_claim_name - computed: true, optional: false, required: false
  public get clientIdClaimName() {
    return this.getStringAttribute('client_id_claim_name');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_secret_passphrase_provider - computed: true, optional: false, required: false
  public get clientSecretPassphraseProvider() {
    return this.getStringAttribute('client_secret_passphrase_provider');
  }

  // clock_skew_grace_period - computed: true, optional: false, required: false
  public get clockSkewGracePeriod() {
    return this.getStringAttribute('clock_skew_grace_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_key_pair - computed: true, optional: false, required: false
  public get encryptionKeyPair() {
    return this.getStringAttribute('encryption_key_pair');
  }

  // endpoint_cache_refresh - computed: true, optional: false, required: false
  public get endpointCacheRefresh() {
    return this.getStringAttribute('endpoint_cache_refresh');
  }

  // evaluation_order_index - computed: true, optional: false, required: false
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // generate_token_result_criteria - computed: true, optional: false, required: false
  public get generateTokenResultCriteria() {
    return this.getStringAttribute('generate_token_result_criteria');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_mapper - computed: true, optional: false, required: false
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }

  // include_aud_parameter - computed: true, optional: false, required: false
  public get includeAudParameter() {
    return this.getBooleanAttribute('include_aud_parameter');
  }

  // included_scope - computed: true, optional: false, required: false
  public get includedScope() {
    return cdktf.Fn.tolist(this.getListAttribute('included_scope'));
  }

  // jwks_endpoint_path - computed: true, optional: false, required: false
  public get jwksEndpointPath() {
    return this.getStringAttribute('jwks_endpoint_path');
  }

  // maximum_token_lifetime - computed: true, optional: false, required: false
  public get maximumTokenLifetime() {
    return this.getStringAttribute('maximum_token_lifetime');
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

  // persist_access_tokens - computed: true, optional: false, required: false
  public get persistAccessTokens() {
    return this.getBooleanAttribute('persist_access_tokens');
  }

  // scope_claim_name - computed: true, optional: false, required: false
  public get scopeClaimName() {
    return this.getStringAttribute('scope_claim_name');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('signing_certificate'));
  }

  // subject_claim_name - computed: true, optional: false, required: false
  public get subjectClaimName() {
    return this.getStringAttribute('subject_claim_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
