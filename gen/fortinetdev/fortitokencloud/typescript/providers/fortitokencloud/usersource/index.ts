// https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsersourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#attr_mapping Usersource#attr_mapping}
  */
  readonly attrMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#auth_uri Usersource#auth_uri}
  */
  readonly authUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#client_id Usersource#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#client_secret Usersource#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#domain_ids Usersource#domain_ids}
  */
  readonly domainIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#entity_id Usersource#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#include_subject Usersource#include_subject}
  */
  readonly includeSubject?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#issuer Usersource#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#login_hint Usersource#login_hint}
  */
  readonly loginHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#login_url Usersource#login_url}
  */
  readonly loginUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#logout_uri Usersource#logout_uri}
  */
  readonly logoutUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#logout_url Usersource#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#name Usersource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#post_binding Usersource#post_binding}
  */
  readonly postBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#realm_id Usersource#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#token_uri Usersource#token_uri}
  */
  readonly tokenUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#type Usersource#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#userinfo_uri Usersource#userinfo_uri}
  */
  readonly userinfoUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#username_assertion Usersource#username_assertion}
  */
  readonly usernameAssertion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource fortitokencloud_usersource}
*/
export class Usersource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortitokencloud_usersource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Usersource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Usersource to import
  * @param importFromId The id of the existing Usersource that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Usersource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortitokencloud_usersource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/usersource fortitokencloud_usersource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsersourceConfig
  */
  public constructor(scope: Construct, id: string, config: UsersourceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortitokencloud_usersource',
      terraformGeneratorMetadata: {
        providerName: 'fortitokencloud',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attrMapping = config.attrMapping;
    this._authUri = config.authUri;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._domainIds = config.domainIds;
    this._entityId = config.entityId;
    this._includeSubject = config.includeSubject;
    this._issuer = config.issuer;
    this._loginHint = config.loginHint;
    this._loginUrl = config.loginUrl;
    this._logoutUri = config.logoutUri;
    this._logoutUrl = config.logoutUrl;
    this._name = config.name;
    this._postBinding = config.postBinding;
    this._realmId = config.realmId;
    this._tokenUri = config.tokenUri;
    this._type = config.type;
    this._userinfoUri = config.userinfoUri;
    this._usernameAssertion = config.usernameAssertion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attr_mapping - computed: true, optional: true, required: false
  private _attrMapping?: string; 
  public get attrMapping() {
    return this.getStringAttribute('attr_mapping');
  }
  public set attrMapping(value: string) {
    this._attrMapping = value;
  }
  public resetAttrMapping() {
    this._attrMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrMappingInput() {
    return this._attrMapping;
  }

  // auth_uri - computed: true, optional: true, required: false
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  public resetAuthUri() {
    this._authUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // domain_ids - computed: true, optional: true, required: false
  private _domainIds?: string[]; 
  public get domainIds() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_ids'));
  }
  public set domainIds(value: string[]) {
    this._domainIds = value;
  }
  public resetDomainIds() {
    this._domainIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdsInput() {
    return this._domainIds;
  }

  // entity_id - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_subject - computed: true, optional: true, required: false
  private _includeSubject?: boolean | cdktf.IResolvable; 
  public get includeSubject() {
    return this.getBooleanAttribute('include_subject');
  }
  public set includeSubject(value: boolean | cdktf.IResolvable) {
    this._includeSubject = value;
  }
  public resetIncludeSubject() {
    this._includeSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubjectInput() {
    return this._includeSubject;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // login_hint - computed: true, optional: true, required: false
  private _loginHint?: string; 
  public get loginHint() {
    return this.getStringAttribute('login_hint');
  }
  public set loginHint(value: string) {
    this._loginHint = value;
  }
  public resetLoginHint() {
    this._loginHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginHintInput() {
    return this._loginHint;
  }

  // login_url - computed: true, optional: true, required: false
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // logout_uri - computed: true, optional: true, required: false
  private _logoutUri?: string; 
  public get logoutUri() {
    return this.getStringAttribute('logout_uri');
  }
  public set logoutUri(value: string) {
    this._logoutUri = value;
  }
  public resetLogoutUri() {
    this._logoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUriInput() {
    return this._logoutUri;
  }

  // logout_url - computed: true, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
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

  // post_binding - computed: true, optional: true, required: false
  private _postBinding?: boolean | cdktf.IResolvable; 
  public get postBinding() {
    return this.getBooleanAttribute('post_binding');
  }
  public set postBinding(value: boolean | cdktf.IResolvable) {
    this._postBinding = value;
  }
  public resetPostBinding() {
    this._postBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBindingInput() {
    return this._postBinding;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // proxy_acs_url - computed: true, optional: false, required: false
  public get proxyAcsUrl() {
    return this.getStringAttribute('proxy_acs_url');
  }

  // proxy_callback_url - computed: true, optional: false, required: false
  public get proxyCallbackUrl() {
    return this.getStringAttribute('proxy_callback_url');
  }

  // proxy_entity_id - computed: true, optional: false, required: false
  public get proxyEntityId() {
    return this.getStringAttribute('proxy_entity_id');
  }

  // proxy_oidc_login_url - computed: true, optional: false, required: false
  public get proxyOidcLoginUrl() {
    return this.getStringAttribute('proxy_oidc_login_url');
  }

  // proxy_post_logout_redirect_uri - computed: true, optional: false, required: false
  public get proxyPostLogoutRedirectUri() {
    return this.getStringAttribute('proxy_post_logout_redirect_uri');
  }

  // proxy_slo_url - computed: true, optional: false, required: false
  public get proxySloUrl() {
    return this.getStringAttribute('proxy_slo_url');
  }

  // proxy_sso_url - computed: true, optional: false, required: false
  public get proxySsoUrl() {
    return this.getStringAttribute('proxy_sso_url');
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

  // token_uri - computed: true, optional: true, required: false
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  public resetTokenUri() {
    this._tokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // userinfo_uri - computed: true, optional: true, required: false
  private _userinfoUri?: string; 
  public get userinfoUri() {
    return this.getStringAttribute('userinfo_uri');
  }
  public set userinfoUri(value: string) {
    this._userinfoUri = value;
  }
  public resetUserinfoUri() {
    this._userinfoUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoUriInput() {
    return this._userinfoUri;
  }

  // username_assertion - computed: true, optional: true, required: false
  private _usernameAssertion?: string; 
  public get usernameAssertion() {
    return this.getStringAttribute('username_assertion');
  }
  public set usernameAssertion(value: string) {
    this._usernameAssertion = value;
  }
  public resetUsernameAssertion() {
    this._usernameAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAssertionInput() {
    return this._usernameAssertion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attr_mapping: cdktf.stringToTerraform(this._attrMapping),
      auth_uri: cdktf.stringToTerraform(this._authUri),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      domain_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainIds),
      entity_id: cdktf.stringToTerraform(this._entityId),
      include_subject: cdktf.booleanToTerraform(this._includeSubject),
      issuer: cdktf.stringToTerraform(this._issuer),
      login_hint: cdktf.stringToTerraform(this._loginHint),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      logout_uri: cdktf.stringToTerraform(this._logoutUri),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      name: cdktf.stringToTerraform(this._name),
      post_binding: cdktf.booleanToTerraform(this._postBinding),
      realm_id: cdktf.stringToTerraform(this._realmId),
      token_uri: cdktf.stringToTerraform(this._tokenUri),
      type: cdktf.stringToTerraform(this._type),
      userinfo_uri: cdktf.stringToTerraform(this._userinfoUri),
      username_assertion: cdktf.stringToTerraform(this._usernameAssertion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attr_mapping: {
        value: cdktf.stringToHclTerraform(this._attrMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_uri: {
        value: cdktf.stringToHclTerraform(this._authUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_subject: {
        value: cdktf.booleanToHclTerraform(this._includeSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_hint: {
        value: cdktf.stringToHclTerraform(this._loginHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_url: {
        value: cdktf.stringToHclTerraform(this._loginUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_uri: {
        value: cdktf.stringToHclTerraform(this._logoutUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
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
      post_binding: {
        value: cdktf.booleanToHclTerraform(this._postBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_uri: {
        value: cdktf.stringToHclTerraform(this._tokenUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userinfo_uri: {
        value: cdktf.stringToHclTerraform(this._userinfoUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_assertion: {
        value: cdktf.stringToHclTerraform(this._usernameAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
