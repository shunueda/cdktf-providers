// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2ConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#app_code ApiGatewayV2Consumer#app_code}
  */
  readonly appCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#app_name ApiGatewayV2Consumer#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#app_secret ApiGatewayV2Consumer#app_secret}
  */
  readonly appSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#auth_type ApiGatewayV2Consumer#auth_type}
  */
  readonly authType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#cascade_link_ids ApiGatewayV2Consumer#cascade_link_ids}
  */
  readonly cascadeLinkIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#description ApiGatewayV2Consumer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#expire_time ApiGatewayV2Consumer#expire_time}
  */
  readonly expireTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#groups ApiGatewayV2Consumer#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#gw_instance_id ApiGatewayV2Consumer#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#id ApiGatewayV2Consumer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#key ApiGatewayV2Consumer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#password ApiGatewayV2Consumer#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#payload ApiGatewayV2Consumer#payload}
  */
  readonly payload?: { [key: string]: string };
  /**
  * oauth2_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#oauth2_payload ApiGatewayV2Consumer#oauth2_payload}
  */
  readonly oauth2Payload?: ApiGatewayV2ConsumerOauth2Payload;
}
export interface ApiGatewayV2ConsumerOauth2Payload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#authorization_code ApiGatewayV2Consumer#authorization_code}
  */
  readonly authorizationCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#client_credentials ApiGatewayV2Consumer#client_credentials}
  */
  readonly clientCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#client_id ApiGatewayV2Consumer#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#client_secret ApiGatewayV2Consumer#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#implicit_grant ApiGatewayV2Consumer#implicit_grant}
  */
  readonly implicitGrant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#password_grant ApiGatewayV2Consumer#password_grant}
  */
  readonly passwordGrant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#pkce ApiGatewayV2Consumer#pkce}
  */
  readonly pkce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#redirect_uris ApiGatewayV2Consumer#redirect_uris}
  */
  readonly redirectUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#refresh_token_expiration ApiGatewayV2Consumer#refresh_token_expiration}
  */
  readonly refreshTokenExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#scopes ApiGatewayV2Consumer#scopes}
  */
  readonly scopes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#token_expiration ApiGatewayV2Consumer#token_expiration}
  */
  readonly tokenExpiration?: number;
}

export function apiGatewayV2ConsumerOauth2PayloadToTerraform(struct?: ApiGatewayV2ConsumerOauth2PayloadOutputReference | ApiGatewayV2ConsumerOauth2Payload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_code: cdktf.booleanToTerraform(struct!.authorizationCode),
    client_credentials: cdktf.booleanToTerraform(struct!.clientCredentials),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    implicit_grant: cdktf.booleanToTerraform(struct!.implicitGrant),
    password_grant: cdktf.booleanToTerraform(struct!.passwordGrant),
    pkce: cdktf.booleanToTerraform(struct!.pkce),
    redirect_uris: cdktf.stringToTerraform(struct!.redirectUris),
    refresh_token_expiration: cdktf.numberToTerraform(struct!.refreshTokenExpiration),
    scopes: cdktf.stringToTerraform(struct!.scopes),
    token_expiration: cdktf.numberToTerraform(struct!.tokenExpiration),
  }
}


export function apiGatewayV2ConsumerOauth2PayloadToHclTerraform(struct?: ApiGatewayV2ConsumerOauth2PayloadOutputReference | ApiGatewayV2ConsumerOauth2Payload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_code: {
      value: cdktf.booleanToHclTerraform(struct!.authorizationCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.clientCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    implicit_grant: {
      value: cdktf.booleanToHclTerraform(struct!.implicitGrant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_grant: {
      value: cdktf.booleanToHclTerraform(struct!.passwordGrant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pkce: {
      value: cdktf.booleanToHclTerraform(struct!.pkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_uris: {
      value: cdktf.stringToHclTerraform(struct!.redirectUris),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_expiration: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_expiration: {
      value: cdktf.numberToHclTerraform(struct!.tokenExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayV2ConsumerOauth2PayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayV2ConsumerOauth2Payload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCode = this._authorizationCode;
    }
    if (this._clientCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentials = this._clientCredentials;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._implicitGrant !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitGrant = this._implicitGrant;
    }
    if (this._passwordGrant !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGrant = this._passwordGrant;
    }
    if (this._pkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkce = this._pkce;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._refreshTokenExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenExpiration = this._refreshTokenExpiration;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExpiration = this._tokenExpiration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayV2ConsumerOauth2Payload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationCode = undefined;
      this._clientCredentials = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._implicitGrant = undefined;
      this._passwordGrant = undefined;
      this._pkce = undefined;
      this._redirectUris = undefined;
      this._refreshTokenExpiration = undefined;
      this._scopes = undefined;
      this._tokenExpiration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationCode = value.authorizationCode;
      this._clientCredentials = value.clientCredentials;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._implicitGrant = value.implicitGrant;
      this._passwordGrant = value.passwordGrant;
      this._pkce = value.pkce;
      this._redirectUris = value.redirectUris;
      this._refreshTokenExpiration = value.refreshTokenExpiration;
      this._scopes = value.scopes;
      this._tokenExpiration = value.tokenExpiration;
    }
  }

  // authorization_code - computed: false, optional: true, required: false
  private _authorizationCode?: boolean | cdktf.IResolvable; 
  public get authorizationCode() {
    return this.getBooleanAttribute('authorization_code');
  }
  public set authorizationCode(value: boolean | cdktf.IResolvable) {
    this._authorizationCode = value;
  }
  public resetAuthorizationCode() {
    this._authorizationCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeInput() {
    return this._authorizationCode;
  }

  // client_credentials - computed: false, optional: true, required: false
  private _clientCredentials?: boolean | cdktf.IResolvable; 
  public get clientCredentials() {
    return this.getBooleanAttribute('client_credentials');
  }
  public set clientCredentials(value: boolean | cdktf.IResolvable) {
    this._clientCredentials = value;
  }
  public resetClientCredentials() {
    this._clientCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsInput() {
    return this._clientCredentials;
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

  // implicit_grant - computed: false, optional: true, required: false
  private _implicitGrant?: boolean | cdktf.IResolvable; 
  public get implicitGrant() {
    return this.getBooleanAttribute('implicit_grant');
  }
  public set implicitGrant(value: boolean | cdktf.IResolvable) {
    this._implicitGrant = value;
  }
  public resetImplicitGrant() {
    this._implicitGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitGrantInput() {
    return this._implicitGrant;
  }

  // password_grant - computed: false, optional: true, required: false
  private _passwordGrant?: boolean | cdktf.IResolvable; 
  public get passwordGrant() {
    return this.getBooleanAttribute('password_grant');
  }
  public set passwordGrant(value: boolean | cdktf.IResolvable) {
    this._passwordGrant = value;
  }
  public resetPasswordGrant() {
    this._passwordGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGrantInput() {
    return this._passwordGrant;
  }

  // pkce - computed: false, optional: true, required: false
  private _pkce?: boolean | cdktf.IResolvable; 
  public get pkce() {
    return this.getBooleanAttribute('pkce');
  }
  public set pkce(value: boolean | cdktf.IResolvable) {
    this._pkce = value;
  }
  public resetPkce() {
    this._pkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceInput() {
    return this._pkce;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string; 
  public get redirectUris() {
    return this.getStringAttribute('redirect_uris');
  }
  public set redirectUris(value: string) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_expiration - computed: false, optional: true, required: false
  private _refreshTokenExpiration?: number; 
  public get refreshTokenExpiration() {
    return this.getNumberAttribute('refresh_token_expiration');
  }
  public set refreshTokenExpiration(value: number) {
    this._refreshTokenExpiration = value;
  }
  public resetRefreshTokenExpiration() {
    this._refreshTokenExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenExpirationInput() {
    return this._refreshTokenExpiration;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_expiration - computed: false, optional: true, required: false
  private _tokenExpiration?: number; 
  public get tokenExpiration() {
    return this.getNumberAttribute('token_expiration');
  }
  public set tokenExpiration(value: number) {
    this._tokenExpiration = value;
  }
  public resetTokenExpiration() {
    this._tokenExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpirationInput() {
    return this._tokenExpiration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer alibabacloudstack_api_gateway_v2_consumer}
*/
export class ApiGatewayV2Consumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2Consumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2Consumer to import
  * @param importFromId The id of the existing ApiGatewayV2Consumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2Consumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_consumer alibabacloudstack_api_gateway_v2_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2ConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2ConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_consumer',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appCode = config.appCode;
    this._appName = config.appName;
    this._appSecret = config.appSecret;
    this._authType = config.authType;
    this._cascadeLinkIds = config.cascadeLinkIds;
    this._description = config.description;
    this._expireTime = config.expireTime;
    this._groups = config.groups;
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._key = config.key;
    this._password = config.password;
    this._payload = config.payload;
    this._oauth2Payload.internalValue = config.oauth2Payload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // app_code - computed: false, optional: true, required: false
  private _appCode?: string; 
  public get appCode() {
    return this.getStringAttribute('app_code');
  }
  public set appCode(value: string) {
    this._appCode = value;
  }
  public resetAppCode() {
    this._appCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCodeInput() {
    return this._appCode;
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_secret - computed: true, optional: true, required: false
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  public resetAppSecret() {
    this._appSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: number; 
  public get authType() {
    return this.getNumberAttribute('auth_type');
  }
  public set authType(value: number) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auth_type_name - computed: true, optional: false, required: false
  public get authTypeName() {
    return this.getStringAttribute('auth_type_name');
  }

  // cascade_link_ids - computed: false, optional: true, required: false
  private _cascadeLinkIds?: string[]; 
  public get cascadeLinkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cascade_link_ids'));
  }
  public set cascadeLinkIds(value: string[]) {
    this._cascadeLinkIds = value;
  }
  public resetCascadeLinkIds() {
    this._cascadeLinkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeLinkIdsInput() {
    return this._cascadeLinkIds;
  }

  // description - computed: false, optional: true, required: false
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

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // gw_instance_id - computed: false, optional: false, required: true
  private _gwInstanceId?: string; 
  public get gwInstanceId() {
    return this.getStringAttribute('gw_instance_id');
  }
  public set gwInstanceId(value: string) {
    this._gwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInstanceIdInput() {
    return this._gwInstanceId;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: { [key: string]: string }; 
  public get payload() {
    return this.getStringMapAttribute('payload');
  }
  public set payload(value: { [key: string]: string }) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // request_header - computed: true, optional: false, required: false
  public get requestHeader() {
    return this.getStringAttribute('request_header');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // use_white_list - computed: true, optional: false, required: false
  public get useWhiteList() {
    return this.getBooleanAttribute('use_white_list');
  }

  // oauth2_payload - computed: false, optional: true, required: false
  private _oauth2Payload = new ApiGatewayV2ConsumerOauth2PayloadOutputReference(this, "oauth2_payload");
  public get oauth2Payload() {
    return this._oauth2Payload;
  }
  public putOauth2Payload(value: ApiGatewayV2ConsumerOauth2Payload) {
    this._oauth2Payload.internalValue = value;
  }
  public resetOauth2Payload() {
    this._oauth2Payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PayloadInput() {
    return this._oauth2Payload.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_code: cdktf.stringToTerraform(this._appCode),
      app_name: cdktf.stringToTerraform(this._appName),
      app_secret: cdktf.stringToTerraform(this._appSecret),
      auth_type: cdktf.numberToTerraform(this._authType),
      cascade_link_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cascadeLinkIds),
      description: cdktf.stringToTerraform(this._description),
      expire_time: cdktf.numberToTerraform(this._expireTime),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      password: cdktf.stringToTerraform(this._password),
      payload: cdktf.hashMapper(cdktf.stringToTerraform)(this._payload),
      oauth2_payload: apiGatewayV2ConsumerOauth2PayloadToTerraform(this._oauth2Payload.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_code: {
        value: cdktf.stringToHclTerraform(this._appCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_secret: {
        value: cdktf.stringToHclTerraform(this._appSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.numberToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cascade_link_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cascadeLinkIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.numberToHclTerraform(this._expireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gw_instance_id: {
        value: cdktf.stringToHclTerraform(this._gwInstanceId),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._payload),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      oauth2_payload: {
        value: apiGatewayV2ConsumerOauth2PayloadToHclTerraform(this._oauth2Payload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayV2ConsumerOauth2PayloadList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
