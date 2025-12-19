// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationOauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify oauth client-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#client_id AamAuthenticationOauthClient#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#client_secret AamAuthenticationOauthClient#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * 'implicit': The authorization server will return access token directly.; 'authorization-code': The authorization server will respond with code which can be exchange for access token.; 'hybrid-code-id-token': The authorization server will respond with both code and id token.; 'hybrid-code-token': The authorization server will respond with both code and access token.; 'hybrid-all': The authorization server will respond with code, access token and id token;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#grant_type AamAuthenticationOauthClient#grant_type}
  */
  readonly grantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#id AamAuthenticationOauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Auth session never time out whatever value oauth servers' response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#infinity AamAuthenticationOauthClient#infinity}
  */
  readonly infinity?: number;
  /**
  * Specify client object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#name AamAuthenticationOauthClient#name}
  */
  readonly name: string;
  /**
  * AX will not check the nonce value in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#no_reply AamAuthenticationOauthClient#no_reply}
  */
  readonly noReply?: number;
  /**
  * Enable nonce parameter for authorization and token request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#parameter_nonce_enable AamAuthenticationOauthClient#parameter_nonce_enable}
  */
  readonly parameterNonceEnable?: number;
  /**
  * Oauth client redirection endpoint service URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#redirection_endpoint AamAuthenticationOauthClient#redirection_endpoint}
  */
  readonly redirectionEndpoint?: string;
  /**
  * Specify request scope parameters (e.g. profile email address phone)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#scope AamAuthenticationOauthClient#scope}
  */
  readonly scope?: string;
  /**
  * TTL for Thunder to wait for first response from authorization server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#session_init_ttl AamAuthenticationOauthClient#session_init_ttl}
  */
  readonly sessionInitTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#token_lifetime AamAuthenticationOauthClient#token_lifetime}
  */
  readonly tokenLifetime?: number;
  /**
  * 'openid-connect': openid-connect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#type AamAuthenticationOauthClient#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#user_tag AamAuthenticationOauthClient#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#uuid AamAuthenticationOauthClient#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client thunder_aam_authentication_oauth_client}
*/
export class AamAuthenticationOauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationOauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationOauthClient to import
  * @param importFromId The id of the existing AamAuthenticationOauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationOauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_oauth_client thunder_aam_authentication_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationOauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationOauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._clientSecret = config.clientSecret;
    this._grantType = config.grantType;
    this._id = config.id;
    this._infinity = config.infinity;
    this._name = config.name;
    this._noReply = config.noReply;
    this._parameterNonceEnable = config.parameterNonceEnable;
    this._redirectionEndpoint = config.redirectionEndpoint;
    this._scope = config.scope;
    this._sessionInitTtl = config.sessionInitTtl;
    this._tokenLifetime = config.tokenLifetime;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // client_secret - computed: false, optional: true, required: false
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

  // grant_type - computed: false, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
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

  // infinity - computed: false, optional: true, required: false
  private _infinity?: number; 
  public get infinity() {
    return this.getNumberAttribute('infinity');
  }
  public set infinity(value: number) {
    this._infinity = value;
  }
  public resetInfinity() {
    this._infinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infinityInput() {
    return this._infinity;
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

  // no_reply - computed: false, optional: true, required: false
  private _noReply?: number; 
  public get noReply() {
    return this.getNumberAttribute('no_reply');
  }
  public set noReply(value: number) {
    this._noReply = value;
  }
  public resetNoReply() {
    this._noReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReplyInput() {
    return this._noReply;
  }

  // parameter_nonce_enable - computed: false, optional: true, required: false
  private _parameterNonceEnable?: number; 
  public get parameterNonceEnable() {
    return this.getNumberAttribute('parameter_nonce_enable');
  }
  public set parameterNonceEnable(value: number) {
    this._parameterNonceEnable = value;
  }
  public resetParameterNonceEnable() {
    this._parameterNonceEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNonceEnableInput() {
    return this._parameterNonceEnable;
  }

  // redirection_endpoint - computed: false, optional: true, required: false
  private _redirectionEndpoint?: string; 
  public get redirectionEndpoint() {
    return this.getStringAttribute('redirection_endpoint');
  }
  public set redirectionEndpoint(value: string) {
    this._redirectionEndpoint = value;
  }
  public resetRedirectionEndpoint() {
    this._redirectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectionEndpointInput() {
    return this._redirectionEndpoint;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_init_ttl - computed: false, optional: true, required: false
  private _sessionInitTtl?: number; 
  public get sessionInitTtl() {
    return this.getNumberAttribute('session_init_ttl');
  }
  public set sessionInitTtl(value: number) {
    this._sessionInitTtl = value;
  }
  public resetSessionInitTtl() {
    this._sessionInitTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInitTtlInput() {
    return this._sessionInitTtl;
  }

  // token_lifetime - computed: false, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      grant_type: cdktf.stringToTerraform(this._grantType),
      id: cdktf.stringToTerraform(this._id),
      infinity: cdktf.numberToTerraform(this._infinity),
      name: cdktf.stringToTerraform(this._name),
      no_reply: cdktf.numberToTerraform(this._noReply),
      parameter_nonce_enable: cdktf.numberToTerraform(this._parameterNonceEnable),
      redirection_endpoint: cdktf.stringToTerraform(this._redirectionEndpoint),
      scope: cdktf.stringToTerraform(this._scope),
      session_init_ttl: cdktf.numberToTerraform(this._sessionInitTtl),
      token_lifetime: cdktf.numberToTerraform(this._tokenLifetime),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_type: {
        value: cdktf.stringToHclTerraform(this._grantType),
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
      infinity: {
        value: cdktf.numberToHclTerraform(this._infinity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_reply: {
        value: cdktf.numberToHclTerraform(this._noReply),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parameter_nonce_enable: {
        value: cdktf.numberToHclTerraform(this._parameterNonceEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirection_endpoint: {
        value: cdktf.stringToHclTerraform(this._redirectionEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_init_ttl: {
        value: cdktf.numberToHclTerraform(this._sessionInitTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_lifetime: {
        value: cdktf.numberToHclTerraform(this._tokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
