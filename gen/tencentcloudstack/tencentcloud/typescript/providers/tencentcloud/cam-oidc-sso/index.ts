// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamOidcSsoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorization request Endpoint, OpenID Connect identity provider authorization address. Corresponds to the value of the `authorization_endpoint` field in the Openid-configuration provided by the Enterprise IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#authorization_endpoint CamOidcSso#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Client ID, the client ID registered with the OpenID Connect identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#client_id CamOidcSso#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#id CamOidcSso#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The signature public key requires base64_encode. Verify the public key signed by the OpenID Connect identity provider ID Token. For the security of your account, we recommend that you rotate the signed public key regularly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#identity_key CamOidcSso#identity_key}
  */
  readonly identityKey: string;
  /**
  * Identity provider URL. OpenID Connect identity provider identity.Corresponds to the value of the `issuer` field in the Openid-configuration provided by the Enterprise IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#identity_url CamOidcSso#identity_url}
  */
  readonly identityUrl: string;
  /**
  * Map field names. Which field in the IdP's id_token maps to the user name of the subuser, usually the sub or name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#mapping_filed CamOidcSso#mapping_filed}
  */
  readonly mappingFiled: string;
  /**
  * Authorize the request Forsonse mode. Authorization request return mode, form_post and frogment two optional modes, recommended to select form_post mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#response_mode CamOidcSso#response_mode}
  */
  readonly responseMode: string;
  /**
  * Authorization requests The Response type, with a fixed value id_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#response_type CamOidcSso#response_type}
  */
  readonly responseType: string;
  /**
  * Authorize the request Scope. openid; email; profile; Authorization request information scope. The default is required openid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#scope CamOidcSso#scope}
  */
  readonly scope?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso tencentcloud_cam_oidc_sso}
*/
export class CamOidcSso extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_oidc_sso";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamOidcSso resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamOidcSso to import
  * @param importFromId The id of the existing CamOidcSso that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamOidcSso to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_oidc_sso", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cam_oidc_sso tencentcloud_cam_oidc_sso} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamOidcSsoConfig
  */
  public constructor(scope: Construct, id: string, config: CamOidcSsoConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_oidc_sso',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._clientId = config.clientId;
    this._id = config.id;
    this._identityKey = config.identityKey;
    this._identityUrl = config.identityUrl;
    this._mappingFiled = config.mappingFiled;
    this._responseMode = config.responseMode;
    this._responseType = config.responseType;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // identity_key - computed: false, optional: false, required: true
  private _identityKey?: string; 
  public get identityKey() {
    return this.getStringAttribute('identity_key');
  }
  public set identityKey(value: string) {
    this._identityKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityKeyInput() {
    return this._identityKey;
  }

  // identity_url - computed: false, optional: false, required: true
  private _identityUrl?: string; 
  public get identityUrl() {
    return this.getStringAttribute('identity_url');
  }
  public set identityUrl(value: string) {
    this._identityUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityUrlInput() {
    return this._identityUrl;
  }

  // mapping_filed - computed: false, optional: false, required: true
  private _mappingFiled?: string; 
  public get mappingFiled() {
    return this.getStringAttribute('mapping_filed');
  }
  public set mappingFiled(value: string) {
    this._mappingFiled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingFiledInput() {
    return this._mappingFiled;
  }

  // response_mode - computed: false, optional: false, required: true
  private _responseMode?: string; 
  public get responseMode() {
    return this.getStringAttribute('response_mode');
  }
  public set responseMode(value: string) {
    this._responseMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseModeInput() {
    return this._responseMode;
  }

  // response_type - computed: false, optional: false, required: true
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      identity_key: cdktf.stringToTerraform(this._identityKey),
      identity_url: cdktf.stringToTerraform(this._identityUrl),
      mapping_filed: cdktf.stringToTerraform(this._mappingFiled),
      response_mode: cdktf.stringToTerraform(this._responseMode),
      response_type: cdktf.stringToTerraform(this._responseType),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
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
      identity_key: {
        value: cdktf.stringToHclTerraform(this._identityKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_url: {
        value: cdktf.stringToHclTerraform(this._identityUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping_filed: {
        value: cdktf.stringToHclTerraform(this._mappingFiled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_mode: {
        value: cdktf.stringToHclTerraform(this._responseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_type: {
        value: cdktf.stringToHclTerraform(this._responseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
