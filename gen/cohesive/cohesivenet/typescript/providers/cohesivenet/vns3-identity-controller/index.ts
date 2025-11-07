// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3IdentityControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorization Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#authorization_endpoint Vns3IdentityController#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * The bind DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#binddn Vns3IdentityController#binddn}
  */
  readonly binddn?: string;
  /**
  * The bind password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#bindpw Vns3IdentityController#bindpw}
  */
  readonly bindpw?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#enabled Vns3IdentityController#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to encrypt LDAP communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt Vns3IdentityController#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Whether to encrypt auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth Vns3IdentityController#encrypt_auth}
  */
  readonly encryptAuth?: boolean | cdktf.IResolvable;
  /**
  * Whether to encrypt auth cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth_cert Vns3IdentityController#encrypt_auth_cert}
  */
  readonly encryptAuthCert?: boolean | cdktf.IResolvable;
  /**
  * The auth cert data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth_cert_data Vns3IdentityController#encrypt_auth_cert_data}
  */
  readonly encryptAuthCertData?: string;
  /**
  * The auth cert filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth_cert_filename Vns3IdentityController#encrypt_auth_cert_filename}
  */
  readonly encryptAuthCertFilename?: string;
  /**
  * Whether to encrypt auth key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth_key Vns3IdentityController#encrypt_auth_key}
  */
  readonly encryptAuthKey?: boolean | cdktf.IResolvable;
  /**
  * The auth key data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth_key_data Vns3IdentityController#encrypt_auth_key_data}
  */
  readonly encryptAuthKeyData?: string;
  /**
  * The auth key filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_auth_key_filename Vns3IdentityController#encrypt_auth_key_filename}
  */
  readonly encryptAuthKeyFilename?: string;
  /**
  * Whether to encrypt CA cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_ca_cert Vns3IdentityController#encrypt_ca_cert}
  */
  readonly encryptCaCert?: boolean | cdktf.IResolvable;
  /**
  * The CA cert data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_ca_cert_data Vns3IdentityController#encrypt_ca_cert_data}
  */
  readonly encryptCaCertData?: string;
  /**
  * The CA cert filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_ca_cert_filename Vns3IdentityController#encrypt_ca_cert_filename}
  */
  readonly encryptCaCertFilename?: string;
  /**
  * Whether to encrypt LDAPS communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_ldaps Vns3IdentityController#encrypt_ldaps}
  */
  readonly encryptLdaps?: boolean | cdktf.IResolvable;
  /**
  * Whether to encrypt verify CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#encrypt_verify_ca Vns3IdentityController#encrypt_verify_ca}
  */
  readonly encryptVerifyCa?: boolean | cdktf.IResolvable;
  /**
  * The group base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#group_base Vns3IdentityController#group_base}
  */
  readonly groupBase?: string;
  /**
  * The group ID attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#group_id_attribute Vns3IdentityController#group_id_attribute}
  */
  readonly groupIdAttribute?: string;
  /**
  * The group list filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#group_list_filter Vns3IdentityController#group_list_filter}
  */
  readonly groupListFilter?: string;
  /**
  * The group member attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#group_member_attr_format Vns3IdentityController#group_member_attr_format}
  */
  readonly groupMemberAttrFormat?: string;
  /**
  * The group member attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#group_member_attribute Vns3IdentityController#group_member_attribute}
  */
  readonly groupMemberAttribute?: string;
  /**
  * The group list filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#group_search_scope Vns3IdentityController#group_search_scope}
  */
  readonly groupSearchScope?: string;
  /**
  * Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#host Vns3IdentityController#host}
  */
  readonly host?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#identifier Vns3IdentityController#identifier}
  */
  readonly identifier?: string;
  /**
  * Identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#identity_provider Vns3IdentityController#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#issuer Vns3IdentityController#issuer}
  */
  readonly issuer?: string;
  /**
  * Jwks Uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#jwks_uri Vns3IdentityController#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#last_updated Vns3IdentityController#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * The group member attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#otp Vns3IdentityController#otp}
  */
  readonly otp?: boolean | cdktf.IResolvable;
  /**
  * The group member attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#otp_url Vns3IdentityController#otp_url}
  */
  readonly otpUrl?: string;
  /**
  * The LDAP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#port Vns3IdentityController#port}
  */
  readonly port?: number;
  /**
  * Provider Url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#provider_url Vns3IdentityController#provider_url}
  */
  readonly providerUrl?: string;
  /**
  * Redirect Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#redirect_hostname Vns3IdentityController#redirect_hostname}
  */
  readonly redirectHostname?: string;
  /**
  * Redirect Uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#redirect_uri Vns3IdentityController#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#secret Vns3IdentityController#secret}
  */
  readonly secret?: string;
  /**
  * Token Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#token_endpoint Vns3IdentityController#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * The user base DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#user_base Vns3IdentityController#user_base}
  */
  readonly userBase?: string;
  /**
  * The user ID attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#user_id_attribute Vns3IdentityController#user_id_attribute}
  */
  readonly userIdAttribute?: string;
  /**
  * The user list filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#user_list_filter Vns3IdentityController#user_list_filter}
  */
  readonly userListFilter?: string;
  /**
  * Userinfo Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#userinfo_endpoint Vns3IdentityController#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#vns3 Vns3IdentityController#vns3}
  */
  readonly vns3?: Vns3IdentityControllerVns3;
}
export interface Vns3IdentityControllerVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#api_token Vns3IdentityController#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#host Vns3IdentityController#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#password Vns3IdentityController#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#timeout Vns3IdentityController#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#username Vns3IdentityController#username}
  */
  readonly username?: string;
}

export function vns3IdentityControllerVns3ToTerraform(struct?: Vns3IdentityControllerVns3OutputReference | Vns3IdentityControllerVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3IdentityControllerVns3ToHclTerraform(struct?: Vns3IdentityControllerVns3OutputReference | Vns3IdentityControllerVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3IdentityControllerVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3IdentityControllerVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3IdentityControllerVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller cohesivenet_vns3_identity_controller}
*/
export class Vns3IdentityController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_identity_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3IdentityController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3IdentityController to import
  * @param importFromId The id of the existing Vns3IdentityController that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3IdentityController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_identity_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_controller cohesivenet_vns3_identity_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3IdentityControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Vns3IdentityControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_identity_controller',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationEndpoint = config.authorizationEndpoint;
    this._binddn = config.binddn;
    this._bindpw = config.bindpw;
    this._enabled = config.enabled;
    this._encrypt = config.encrypt;
    this._encryptAuth = config.encryptAuth;
    this._encryptAuthCert = config.encryptAuthCert;
    this._encryptAuthCertData = config.encryptAuthCertData;
    this._encryptAuthCertFilename = config.encryptAuthCertFilename;
    this._encryptAuthKey = config.encryptAuthKey;
    this._encryptAuthKeyData = config.encryptAuthKeyData;
    this._encryptAuthKeyFilename = config.encryptAuthKeyFilename;
    this._encryptCaCert = config.encryptCaCert;
    this._encryptCaCertData = config.encryptCaCertData;
    this._encryptCaCertFilename = config.encryptCaCertFilename;
    this._encryptLdaps = config.encryptLdaps;
    this._encryptVerifyCa = config.encryptVerifyCa;
    this._groupBase = config.groupBase;
    this._groupIdAttribute = config.groupIdAttribute;
    this._groupListFilter = config.groupListFilter;
    this._groupMemberAttrFormat = config.groupMemberAttrFormat;
    this._groupMemberAttribute = config.groupMemberAttribute;
    this._groupSearchScope = config.groupSearchScope;
    this._host = config.host;
    this._identifier = config.identifier;
    this._identityProvider = config.identityProvider;
    this._issuer = config.issuer;
    this._jwksUri = config.jwksUri;
    this._lastUpdated = config.lastUpdated;
    this._otp = config.otp;
    this._otpUrl = config.otpUrl;
    this._port = config.port;
    this._providerUrl = config.providerUrl;
    this._redirectHostname = config.redirectHostname;
    this._redirectUri = config.redirectUri;
    this._secret = config.secret;
    this._tokenEndpoint = config.tokenEndpoint;
    this._userBase = config.userBase;
    this._userIdAttribute = config.userIdAttribute;
    this._userListFilter = config.userListFilter;
    this._userinfoEndpoint = config.userinfoEndpoint;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_endpoint - computed: false, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // binddn - computed: false, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpw - computed: false, optional: true, required: false
  private _bindpw?: string; 
  public get bindpw() {
    return this.getStringAttribute('bindpw');
  }
  public set bindpw(value: string) {
    this._bindpw = value;
  }
  public resetBindpw() {
    this._bindpw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpwInput() {
    return this._bindpw;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // encrypt_auth - computed: false, optional: true, required: false
  private _encryptAuth?: boolean | cdktf.IResolvable; 
  public get encryptAuth() {
    return this.getBooleanAttribute('encrypt_auth');
  }
  public set encryptAuth(value: boolean | cdktf.IResolvable) {
    this._encryptAuth = value;
  }
  public resetEncryptAuth() {
    this._encryptAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthInput() {
    return this._encryptAuth;
  }

  // encrypt_auth_cert - computed: false, optional: true, required: false
  private _encryptAuthCert?: boolean | cdktf.IResolvable; 
  public get encryptAuthCert() {
    return this.getBooleanAttribute('encrypt_auth_cert');
  }
  public set encryptAuthCert(value: boolean | cdktf.IResolvable) {
    this._encryptAuthCert = value;
  }
  public resetEncryptAuthCert() {
    this._encryptAuthCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthCertInput() {
    return this._encryptAuthCert;
  }

  // encrypt_auth_cert_data - computed: false, optional: true, required: false
  private _encryptAuthCertData?: string; 
  public get encryptAuthCertData() {
    return this.getStringAttribute('encrypt_auth_cert_data');
  }
  public set encryptAuthCertData(value: string) {
    this._encryptAuthCertData = value;
  }
  public resetEncryptAuthCertData() {
    this._encryptAuthCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthCertDataInput() {
    return this._encryptAuthCertData;
  }

  // encrypt_auth_cert_filename - computed: false, optional: true, required: false
  private _encryptAuthCertFilename?: string; 
  public get encryptAuthCertFilename() {
    return this.getStringAttribute('encrypt_auth_cert_filename');
  }
  public set encryptAuthCertFilename(value: string) {
    this._encryptAuthCertFilename = value;
  }
  public resetEncryptAuthCertFilename() {
    this._encryptAuthCertFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthCertFilenameInput() {
    return this._encryptAuthCertFilename;
  }

  // encrypt_auth_key - computed: false, optional: true, required: false
  private _encryptAuthKey?: boolean | cdktf.IResolvable; 
  public get encryptAuthKey() {
    return this.getBooleanAttribute('encrypt_auth_key');
  }
  public set encryptAuthKey(value: boolean | cdktf.IResolvable) {
    this._encryptAuthKey = value;
  }
  public resetEncryptAuthKey() {
    this._encryptAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthKeyInput() {
    return this._encryptAuthKey;
  }

  // encrypt_auth_key_data - computed: false, optional: true, required: false
  private _encryptAuthKeyData?: string; 
  public get encryptAuthKeyData() {
    return this.getStringAttribute('encrypt_auth_key_data');
  }
  public set encryptAuthKeyData(value: string) {
    this._encryptAuthKeyData = value;
  }
  public resetEncryptAuthKeyData() {
    this._encryptAuthKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthKeyDataInput() {
    return this._encryptAuthKeyData;
  }

  // encrypt_auth_key_filename - computed: false, optional: true, required: false
  private _encryptAuthKeyFilename?: string; 
  public get encryptAuthKeyFilename() {
    return this.getStringAttribute('encrypt_auth_key_filename');
  }
  public set encryptAuthKeyFilename(value: string) {
    this._encryptAuthKeyFilename = value;
  }
  public resetEncryptAuthKeyFilename() {
    this._encryptAuthKeyFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAuthKeyFilenameInput() {
    return this._encryptAuthKeyFilename;
  }

  // encrypt_ca_cert - computed: false, optional: true, required: false
  private _encryptCaCert?: boolean | cdktf.IResolvable; 
  public get encryptCaCert() {
    return this.getBooleanAttribute('encrypt_ca_cert');
  }
  public set encryptCaCert(value: boolean | cdktf.IResolvable) {
    this._encryptCaCert = value;
  }
  public resetEncryptCaCert() {
    this._encryptCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptCaCertInput() {
    return this._encryptCaCert;
  }

  // encrypt_ca_cert_data - computed: false, optional: true, required: false
  private _encryptCaCertData?: string; 
  public get encryptCaCertData() {
    return this.getStringAttribute('encrypt_ca_cert_data');
  }
  public set encryptCaCertData(value: string) {
    this._encryptCaCertData = value;
  }
  public resetEncryptCaCertData() {
    this._encryptCaCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptCaCertDataInput() {
    return this._encryptCaCertData;
  }

  // encrypt_ca_cert_filename - computed: false, optional: true, required: false
  private _encryptCaCertFilename?: string; 
  public get encryptCaCertFilename() {
    return this.getStringAttribute('encrypt_ca_cert_filename');
  }
  public set encryptCaCertFilename(value: string) {
    this._encryptCaCertFilename = value;
  }
  public resetEncryptCaCertFilename() {
    this._encryptCaCertFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptCaCertFilenameInput() {
    return this._encryptCaCertFilename;
  }

  // encrypt_ldaps - computed: false, optional: true, required: false
  private _encryptLdaps?: boolean | cdktf.IResolvable; 
  public get encryptLdaps() {
    return this.getBooleanAttribute('encrypt_ldaps');
  }
  public set encryptLdaps(value: boolean | cdktf.IResolvable) {
    this._encryptLdaps = value;
  }
  public resetEncryptLdaps() {
    this._encryptLdaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptLdapsInput() {
    return this._encryptLdaps;
  }

  // encrypt_verify_ca - computed: false, optional: true, required: false
  private _encryptVerifyCa?: boolean | cdktf.IResolvable; 
  public get encryptVerifyCa() {
    return this.getBooleanAttribute('encrypt_verify_ca');
  }
  public set encryptVerifyCa(value: boolean | cdktf.IResolvable) {
    this._encryptVerifyCa = value;
  }
  public resetEncryptVerifyCa() {
    this._encryptVerifyCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptVerifyCaInput() {
    return this._encryptVerifyCa;
  }

  // group_base - computed: false, optional: true, required: false
  private _groupBase?: string; 
  public get groupBase() {
    return this.getStringAttribute('group_base');
  }
  public set groupBase(value: string) {
    this._groupBase = value;
  }
  public resetGroupBase() {
    this._groupBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBaseInput() {
    return this._groupBase;
  }

  // group_id_attribute - computed: false, optional: true, required: false
  private _groupIdAttribute?: string; 
  public get groupIdAttribute() {
    return this.getStringAttribute('group_id_attribute');
  }
  public set groupIdAttribute(value: string) {
    this._groupIdAttribute = value;
  }
  public resetGroupIdAttribute() {
    this._groupIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdAttributeInput() {
    return this._groupIdAttribute;
  }

  // group_list_filter - computed: false, optional: true, required: false
  private _groupListFilter?: string; 
  public get groupListFilter() {
    return this.getStringAttribute('group_list_filter');
  }
  public set groupListFilter(value: string) {
    this._groupListFilter = value;
  }
  public resetGroupListFilter() {
    this._groupListFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListFilterInput() {
    return this._groupListFilter;
  }

  // group_member_attr_format - computed: false, optional: true, required: false
  private _groupMemberAttrFormat?: string; 
  public get groupMemberAttrFormat() {
    return this.getStringAttribute('group_member_attr_format');
  }
  public set groupMemberAttrFormat(value: string) {
    this._groupMemberAttrFormat = value;
  }
  public resetGroupMemberAttrFormat() {
    this._groupMemberAttrFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttrFormatInput() {
    return this._groupMemberAttrFormat;
  }

  // group_member_attribute - computed: false, optional: true, required: false
  private _groupMemberAttribute?: string; 
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }
  public set groupMemberAttribute(value: string) {
    this._groupMemberAttribute = value;
  }
  public resetGroupMemberAttribute() {
    this._groupMemberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeInput() {
    return this._groupMemberAttribute;
  }

  // group_search_scope - computed: false, optional: true, required: false
  private _groupSearchScope?: string; 
  public get groupSearchScope() {
    return this.getStringAttribute('group_search_scope');
  }
  public set groupSearchScope(value: string) {
    this._groupSearchScope = value;
  }
  public resetGroupSearchScope() {
    this._groupSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchScopeInput() {
    return this._groupSearchScope;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // issuer - computed: false, optional: true, required: false
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

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // otp - computed: false, optional: true, required: false
  private _otp?: boolean | cdktf.IResolvable; 
  public get otp() {
    return this.getBooleanAttribute('otp');
  }
  public set otp(value: boolean | cdktf.IResolvable) {
    this._otp = value;
  }
  public resetOtp() {
    this._otp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp;
  }

  // otp_url - computed: false, optional: true, required: false
  private _otpUrl?: string; 
  public get otpUrl() {
    return this.getStringAttribute('otp_url');
  }
  public set otpUrl(value: string) {
    this._otpUrl = value;
  }
  public resetOtpUrl() {
    this._otpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpUrlInput() {
    return this._otpUrl;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // provider_url - computed: false, optional: true, required: false
  private _providerUrl?: string; 
  public get providerUrl() {
    return this.getStringAttribute('provider_url');
  }
  public set providerUrl(value: string) {
    this._providerUrl = value;
  }
  public resetProviderUrl() {
    this._providerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerUrlInput() {
    return this._providerUrl;
  }

  // redirect_hostname - computed: false, optional: true, required: false
  private _redirectHostname?: string; 
  public get redirectHostname() {
    return this.getStringAttribute('redirect_hostname');
  }
  public set redirectHostname(value: string) {
    this._redirectHostname = value;
  }
  public resetRedirectHostname() {
    this._redirectHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHostnameInput() {
    return this._redirectHostname;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_base - computed: false, optional: true, required: false
  private _userBase?: string; 
  public get userBase() {
    return this.getStringAttribute('user_base');
  }
  public set userBase(value: string) {
    this._userBase = value;
  }
  public resetUserBase() {
    this._userBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseInput() {
    return this._userBase;
  }

  // user_id_attribute - computed: false, optional: true, required: false
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  public resetUserIdAttribute() {
    this._userIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }

  // user_list_filter - computed: false, optional: true, required: false
  private _userListFilter?: string; 
  public get userListFilter() {
    return this.getStringAttribute('user_list_filter');
  }
  public set userListFilter(value: string) {
    this._userListFilter = value;
  }
  public resetUserListFilter() {
    this._userListFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListFilterInput() {
    return this._userListFilter;
  }

  // userinfo_endpoint - computed: false, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3IdentityControllerVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3IdentityControllerVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      binddn: cdktf.stringToTerraform(this._binddn),
      bindpw: cdktf.stringToTerraform(this._bindpw),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encrypt: cdktf.booleanToTerraform(this._encrypt),
      encrypt_auth: cdktf.booleanToTerraform(this._encryptAuth),
      encrypt_auth_cert: cdktf.booleanToTerraform(this._encryptAuthCert),
      encrypt_auth_cert_data: cdktf.stringToTerraform(this._encryptAuthCertData),
      encrypt_auth_cert_filename: cdktf.stringToTerraform(this._encryptAuthCertFilename),
      encrypt_auth_key: cdktf.booleanToTerraform(this._encryptAuthKey),
      encrypt_auth_key_data: cdktf.stringToTerraform(this._encryptAuthKeyData),
      encrypt_auth_key_filename: cdktf.stringToTerraform(this._encryptAuthKeyFilename),
      encrypt_ca_cert: cdktf.booleanToTerraform(this._encryptCaCert),
      encrypt_ca_cert_data: cdktf.stringToTerraform(this._encryptCaCertData),
      encrypt_ca_cert_filename: cdktf.stringToTerraform(this._encryptCaCertFilename),
      encrypt_ldaps: cdktf.booleanToTerraform(this._encryptLdaps),
      encrypt_verify_ca: cdktf.booleanToTerraform(this._encryptVerifyCa),
      group_base: cdktf.stringToTerraform(this._groupBase),
      group_id_attribute: cdktf.stringToTerraform(this._groupIdAttribute),
      group_list_filter: cdktf.stringToTerraform(this._groupListFilter),
      group_member_attr_format: cdktf.stringToTerraform(this._groupMemberAttrFormat),
      group_member_attribute: cdktf.stringToTerraform(this._groupMemberAttribute),
      group_search_scope: cdktf.stringToTerraform(this._groupSearchScope),
      host: cdktf.stringToTerraform(this._host),
      identifier: cdktf.stringToTerraform(this._identifier),
      identity_provider: cdktf.stringToTerraform(this._identityProvider),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      otp: cdktf.booleanToTerraform(this._otp),
      otp_url: cdktf.stringToTerraform(this._otpUrl),
      port: cdktf.numberToTerraform(this._port),
      provider_url: cdktf.stringToTerraform(this._providerUrl),
      redirect_hostname: cdktf.stringToTerraform(this._redirectHostname),
      redirect_uri: cdktf.stringToTerraform(this._redirectUri),
      secret: cdktf.stringToTerraform(this._secret),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
      user_base: cdktf.stringToTerraform(this._userBase),
      user_id_attribute: cdktf.stringToTerraform(this._userIdAttribute),
      user_list_filter: cdktf.stringToTerraform(this._userListFilter),
      userinfo_endpoint: cdktf.stringToTerraform(this._userinfoEndpoint),
      vns3: vns3IdentityControllerVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._authorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binddn: {
        value: cdktf.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpw: {
        value: cdktf.stringToHclTerraform(this._bindpw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt: {
        value: cdktf.booleanToHclTerraform(this._encrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_auth: {
        value: cdktf.booleanToHclTerraform(this._encryptAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_auth_cert: {
        value: cdktf.booleanToHclTerraform(this._encryptAuthCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_auth_cert_data: {
        value: cdktf.stringToHclTerraform(this._encryptAuthCertData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_auth_cert_filename: {
        value: cdktf.stringToHclTerraform(this._encryptAuthCertFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_auth_key: {
        value: cdktf.booleanToHclTerraform(this._encryptAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_auth_key_data: {
        value: cdktf.stringToHclTerraform(this._encryptAuthKeyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_auth_key_filename: {
        value: cdktf.stringToHclTerraform(this._encryptAuthKeyFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_ca_cert: {
        value: cdktf.booleanToHclTerraform(this._encryptCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_ca_cert_data: {
        value: cdktf.stringToHclTerraform(this._encryptCaCertData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_ca_cert_filename: {
        value: cdktf.stringToHclTerraform(this._encryptCaCertFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_ldaps: {
        value: cdktf.booleanToHclTerraform(this._encryptLdaps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_verify_ca: {
        value: cdktf.booleanToHclTerraform(this._encryptVerifyCa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_base: {
        value: cdktf.stringToHclTerraform(this._groupBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id_attribute: {
        value: cdktf.stringToHclTerraform(this._groupIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_list_filter: {
        value: cdktf.stringToHclTerraform(this._groupListFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_attr_format: {
        value: cdktf.stringToHclTerraform(this._groupMemberAttrFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMemberAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_scope: {
        value: cdktf.stringToHclTerraform(this._groupSearchScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider: {
        value: cdktf.stringToHclTerraform(this._identityProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otp: {
        value: cdktf.booleanToHclTerraform(this._otp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      otp_url: {
        value: cdktf.stringToHclTerraform(this._otpUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_url: {
        value: cdktf.stringToHclTerraform(this._providerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_hostname: {
        value: cdktf.stringToHclTerraform(this._redirectHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uri: {
        value: cdktf.stringToHclTerraform(this._redirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_endpoint: {
        value: cdktf.stringToHclTerraform(this._tokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_base: {
        value: cdktf.stringToHclTerraform(this._userBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id_attribute: {
        value: cdktf.stringToHclTerraform(this._userIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_list_filter: {
        value: cdktf.stringToHclTerraform(this._userListFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userinfo_endpoint: {
        value: cdktf.stringToHclTerraform(this._userinfoEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vns3: {
        value: vns3IdentityControllerVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3IdentityControllerVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
