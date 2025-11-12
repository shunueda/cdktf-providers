// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationOauthAuthorizationServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify URI for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#authorization_endpoint AamAuthenticationOauthAuthorizationServer#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * 'ignored': Clients' browser will send data according to server spec (default); 'post': Clients' browser will send data by POST; 'get': Clients' browser will send data by GET;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#client_method AamAuthenticationOauthAuthorizationServer#client_method}
  */
  readonly clientMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#id AamAuthenticationOauthAuthorizationServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify openid provider name for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#issuer AamAuthenticationOauthAuthorizationServer#issuer}
  */
  readonly issuer?: string;
  /**
  * Specify authorization server object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#name AamAuthenticationOauthAuthorizationServer#name}
  */
  readonly name: string;
  /**
  * 'post': AX will send data to server by POST (default); 'get': AX will send data to server by GET;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#server_method AamAuthenticationOauthAuthorizationServer#server_method}
  */
  readonly serverMethod?: string;
  /**
  * Specify URI for token exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#token_endpoint AamAuthenticationOauthAuthorizationServer#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#user_tag AamAuthenticationOauthAuthorizationServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#uuid AamAuthenticationOauthAuthorizationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify certificate to verify ID token signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#verification_cert AamAuthenticationOauthAuthorizationServer#verification_cert}
  */
  readonly verificationCert?: string;
  /**
  * Specify jwks file to verify ID token signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#verification_jwks AamAuthenticationOauthAuthorizationServer#verification_jwks}
  */
  readonly verificationJwks?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#sampling_enable AamAuthenticationOauthAuthorizationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationOauthAuthorizationServerSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationOauthAuthorizationServerSamplingEnable {
  /**
  * 'all': all; 'auth-req': auth-req; 'auth-succ': auth-succ; 'auth-fail': auth-fail; 'auth-error': auth-error; 'other-error': other-error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#counters1 AamAuthenticationOauthAuthorizationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationOauthAuthorizationServerSamplingEnableToTerraform(struct?: AamAuthenticationOauthAuthorizationServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationOauthAuthorizationServerSamplingEnableToHclTerraform(struct?: AamAuthenticationOauthAuthorizationServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationOauthAuthorizationServerSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AamAuthenticationOauthAuthorizationServerSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationOauthAuthorizationServerSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationOauthAuthorizationServerSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationOauthAuthorizationServerSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationOauthAuthorizationServerSamplingEnableOutputReference {
    return new AamAuthenticationOauthAuthorizationServerSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server thunder_aam_authentication_oauth_authorization_server}
*/
export class AamAuthenticationOauthAuthorizationServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_oauth_authorization_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationOauthAuthorizationServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationOauthAuthorizationServer to import
  * @param importFromId The id of the existing AamAuthenticationOauthAuthorizationServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationOauthAuthorizationServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_oauth_authorization_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_oauth_authorization_server thunder_aam_authentication_oauth_authorization_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationOauthAuthorizationServerConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationOauthAuthorizationServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_oauth_authorization_server',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._clientMethod = config.clientMethod;
    this._id = config.id;
    this._issuer = config.issuer;
    this._name = config.name;
    this._serverMethod = config.serverMethod;
    this._tokenEndpoint = config.tokenEndpoint;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._verificationCert = config.verificationCert;
    this._verificationJwks = config.verificationJwks;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // client_method - computed: false, optional: true, required: false
  private _clientMethod?: string; 
  public get clientMethod() {
    return this.getStringAttribute('client_method');
  }
  public set clientMethod(value: string) {
    this._clientMethod = value;
  }
  public resetClientMethod() {
    this._clientMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMethodInput() {
    return this._clientMethod;
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

  // server_method - computed: false, optional: true, required: false
  private _serverMethod?: string; 
  public get serverMethod() {
    return this.getStringAttribute('server_method');
  }
  public set serverMethod(value: string) {
    this._serverMethod = value;
  }
  public resetServerMethod() {
    this._serverMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMethodInput() {
    return this._serverMethod;
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

  // verification_cert - computed: false, optional: true, required: false
  private _verificationCert?: string; 
  public get verificationCert() {
    return this.getStringAttribute('verification_cert');
  }
  public set verificationCert(value: string) {
    this._verificationCert = value;
  }
  public resetVerificationCert() {
    this._verificationCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationCertInput() {
    return this._verificationCert;
  }

  // verification_jwks - computed: false, optional: true, required: false
  private _verificationJwks?: string; 
  public get verificationJwks() {
    return this.getStringAttribute('verification_jwks');
  }
  public set verificationJwks(value: string) {
    this._verificationJwks = value;
  }
  public resetVerificationJwks() {
    this._verificationJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationJwksInput() {
    return this._verificationJwks;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationOauthAuthorizationServerSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationOauthAuthorizationServerSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      client_method: cdktf.stringToTerraform(this._clientMethod),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      server_method: cdktf.stringToTerraform(this._serverMethod),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      verification_cert: cdktf.stringToTerraform(this._verificationCert),
      verification_jwks: cdktf.stringToTerraform(this._verificationJwks),
      sampling_enable: cdktf.listMapper(aamAuthenticationOauthAuthorizationServerSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      client_method: {
        value: cdktf.stringToHclTerraform(this._clientMethod),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      server_method: {
        value: cdktf.stringToHclTerraform(this._serverMethod),
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
      verification_cert: {
        value: cdktf.stringToHclTerraform(this._verificationCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_jwks: {
        value: cdktf.stringToHclTerraform(this._verificationJwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationOauthAuthorizationServerSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationOauthAuthorizationServerSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
