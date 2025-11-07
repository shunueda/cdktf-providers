// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeycloakSamlClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client#client_id DataKeycloakSamlClient#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client#id DataKeycloakSamlClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client#realm_id DataKeycloakSamlClient#realm_id}
  */
  readonly realmId: string;
}
export interface DataKeycloakSamlClientAuthenticationFlowBindingOverrides {
}

export function dataKeycloakSamlClientAuthenticationFlowBindingOverridesToTerraform(struct?: DataKeycloakSamlClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakSamlClientAuthenticationFlowBindingOverridesToHclTerraform(struct?: DataKeycloakSamlClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakSamlClientAuthenticationFlowBindingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKeycloakSamlClientAuthenticationFlowBindingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakSamlClientAuthenticationFlowBindingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_id - computed: true, optional: false, required: false
  public get browserId() {
    return this.getStringAttribute('browser_id');
  }

  // direct_grant_id - computed: true, optional: false, required: false
  public get directGrantId() {
    return this.getStringAttribute('direct_grant_id');
  }
}

export class DataKeycloakSamlClientAuthenticationFlowBindingOverridesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKeycloakSamlClientAuthenticationFlowBindingOverridesOutputReference {
    return new DataKeycloakSamlClientAuthenticationFlowBindingOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client keycloak_saml_client}
*/
export class DataKeycloakSamlClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_saml_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeycloakSamlClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeycloakSamlClient to import
  * @param importFromId The id of the existing DataKeycloakSamlClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeycloakSamlClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_saml_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/saml_client keycloak_saml_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeycloakSamlClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeycloakSamlClientConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_saml_client',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._id = config.id;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_consumer_post_url - computed: true, optional: false, required: false
  public get assertionConsumerPostUrl() {
    return this.getStringAttribute('assertion_consumer_post_url');
  }

  // assertion_consumer_redirect_url - computed: true, optional: false, required: false
  public get assertionConsumerRedirectUrl() {
    return this.getStringAttribute('assertion_consumer_redirect_url');
  }

  // authentication_flow_binding_overrides - computed: true, optional: false, required: false
  private _authenticationFlowBindingOverrides = new DataKeycloakSamlClientAuthenticationFlowBindingOverridesList(this, "authentication_flow_binding_overrides", true);
  public get authenticationFlowBindingOverrides() {
    return this._authenticationFlowBindingOverrides;
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // canonicalization_method - computed: true, optional: false, required: false
  public get canonicalizationMethod() {
    return this.getStringAttribute('canonicalization_method');
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_signature_required - computed: true, optional: false, required: false
  public get clientSignatureRequired() {
    return this.getBooleanAttribute('client_signature_required');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encrypt_assertions - computed: true, optional: false, required: false
  public get encryptAssertions() {
    return this.getBooleanAttribute('encrypt_assertions');
  }

  // encryption_certificate - computed: true, optional: false, required: false
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }

  // encryption_certificate_sha1 - computed: true, optional: false, required: false
  public get encryptionCertificateSha1() {
    return this.getStringAttribute('encryption_certificate_sha1');
  }

  // extra_config - computed: true, optional: false, required: false
  private _extraConfig = new cdktf.StringMap(this, "extra_config");
  public get extraConfig() {
    return this._extraConfig;
  }

  // force_name_id_format - computed: true, optional: false, required: false
  public get forceNameIdFormat() {
    return this.getBooleanAttribute('force_name_id_format');
  }

  // force_post_binding - computed: true, optional: false, required: false
  public get forcePostBinding() {
    return this.getBooleanAttribute('force_post_binding');
  }

  // front_channel_logout - computed: true, optional: false, required: false
  public get frontChannelLogout() {
    return this.getBooleanAttribute('front_channel_logout');
  }

  // full_scope_allowed - computed: true, optional: false, required: false
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
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

  // idp_initiated_sso_relay_state - computed: true, optional: false, required: false
  public get idpInitiatedSsoRelayState() {
    return this.getStringAttribute('idp_initiated_sso_relay_state');
  }

  // idp_initiated_sso_url_name - computed: true, optional: false, required: false
  public get idpInitiatedSsoUrlName() {
    return this.getStringAttribute('idp_initiated_sso_url_name');
  }

  // include_authn_statement - computed: true, optional: false, required: false
  public get includeAuthnStatement() {
    return this.getBooleanAttribute('include_authn_statement');
  }

  // login_theme - computed: true, optional: false, required: false
  public get loginTheme() {
    return this.getStringAttribute('login_theme');
  }

  // logout_service_post_binding_url - computed: true, optional: false, required: false
  public get logoutServicePostBindingUrl() {
    return this.getStringAttribute('logout_service_post_binding_url');
  }

  // logout_service_redirect_binding_url - computed: true, optional: false, required: false
  public get logoutServiceRedirectBindingUrl() {
    return this.getStringAttribute('logout_service_redirect_binding_url');
  }

  // master_saml_processing_url - computed: true, optional: false, required: false
  public get masterSamlProcessingUrl() {
    return this.getStringAttribute('master_saml_processing_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_id_format - computed: true, optional: false, required: false
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
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

  // root_url - computed: true, optional: false, required: false
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }

  // saml_signature_key_name - computed: true, optional: false, required: false
  public get samlSignatureKeyName() {
    return this.getStringAttribute('saml_signature_key_name');
  }

  // sign_assertions - computed: true, optional: false, required: false
  public get signAssertions() {
    return this.getBooleanAttribute('sign_assertions');
  }

  // sign_documents - computed: true, optional: false, required: false
  public get signDocuments() {
    return this.getBooleanAttribute('sign_documents');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // signature_key_name - computed: true, optional: false, required: false
  public get signatureKeyName() {
    return this.getStringAttribute('signature_key_name');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // signing_certificate_sha1 - computed: true, optional: false, required: false
  public get signingCertificateSha1() {
    return this.getStringAttribute('signing_certificate_sha1');
  }

  // signing_private_key - computed: true, optional: false, required: false
  public get signingPrivateKey() {
    return this.getStringAttribute('signing_private_key');
  }

  // signing_private_key_sha1 - computed: true, optional: false, required: false
  public get signingPrivateKeySha1() {
    return this.getStringAttribute('signing_private_key_sha1');
  }

  // valid_redirect_uris - computed: true, optional: false, required: false
  public get validRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_redirect_uris'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
