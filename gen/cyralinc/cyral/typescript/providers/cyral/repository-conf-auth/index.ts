// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Should the communication allow native authentication?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#allow_native_auth RepositoryConfAuth#allow_native_auth}
  */
  readonly allowNativeAuth?: boolean | cdktf.IResolvable;
  /**
  * Authentication type for this repository. **Note**: `AWS_IAM` is currently only supported by `mongodb` repo type. List of supported values: 
  *   - `ACCESS_TOKEN`
  *   - `AWS_IAM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#auth_type RepositoryConfAuth#auth_type}
  */
  readonly authType?: string;
  /**
  * Specifies whether the sidecar will require TLS communication with clients. Defaults to `disable`. List of supported values: 
  *   - `enable`
  *   - `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#client_tls RepositoryConfAuth#client_tls}
  */
  readonly clientTls?: string;
  /**
  * The semantics of this field changed in control planes `v4.13` and later. See how it should be configured depending on your control plane version:
  * 	- `v4.12` and below:
  * 		- Provide the ID (Alias) of the identity provider integration to allow user authentication using an IdP.
  * 	- `v4.13` and later:
  * 		- If not supplied, then end-user authentication is disabled.
  * 		- If end-user authentication with Cyral Access Token is desired, then set to `ACCESS_TOKEN` or any other non-empty string.
  * 		- If end-user authentication with AWS IAM is desired, then this must be the ID of an AWS IAM integration, and the `auth_type` attribute must be set to `AWS_IAM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#identity_provider RepositoryConfAuth#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Specifies whether the sidecar will communicate with the repository using TLS. Defaults to `disable`. List of supported values: 
  *   - `enable`
  *   - `enableAndVerifyCert`
  *   - `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#repo_tls RepositoryConfAuth#repo_tls}
  */
  readonly repoTls?: string;
  /**
  * The ID of the repository to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#repository_id RepositoryConfAuth#repository_id}
  */
  readonly repositoryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth cyral_repository_conf_auth}
*/
export class RepositoryConfAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository_conf_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryConfAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryConfAuth to import
  * @param importFromId The id of the existing RepositoryConfAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryConfAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository_conf_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_auth cyral_repository_conf_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfAuthConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository_conf_auth',
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
    this._allowNativeAuth = config.allowNativeAuth;
    this._authType = config.authType;
    this._clientTls = config.clientTls;
    this._identityProvider = config.identityProvider;
    this._repoTls = config.repoTls;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_native_auth - computed: false, optional: true, required: false
  private _allowNativeAuth?: boolean | cdktf.IResolvable; 
  public get allowNativeAuth() {
    return this.getBooleanAttribute('allow_native_auth');
  }
  public set allowNativeAuth(value: boolean | cdktf.IResolvable) {
    this._allowNativeAuth = value;
  }
  public resetAllowNativeAuth() {
    this._allowNativeAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNativeAuthInput() {
    return this._allowNativeAuth;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // client_tls - computed: false, optional: true, required: false
  private _clientTls?: string; 
  public get clientTls() {
    return this.getStringAttribute('client_tls');
  }
  public set clientTls(value: string) {
    this._clientTls = value;
  }
  public resetClientTls() {
    this._clientTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsInput() {
    return this._clientTls;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // repo_tls - computed: false, optional: true, required: false
  private _repoTls?: string; 
  public get repoTls() {
    return this.getStringAttribute('repo_tls');
  }
  public set repoTls(value: string) {
    this._repoTls = value;
  }
  public resetRepoTls() {
    this._repoTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTlsInput() {
    return this._repoTls;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_native_auth: cdktf.booleanToTerraform(this._allowNativeAuth),
      auth_type: cdktf.stringToTerraform(this._authType),
      client_tls: cdktf.stringToTerraform(this._clientTls),
      identity_provider: cdktf.stringToTerraform(this._identityProvider),
      repo_tls: cdktf.stringToTerraform(this._repoTls),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_native_auth: {
        value: cdktf.booleanToHclTerraform(this._allowNativeAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls: {
        value: cdktf.stringToHclTerraform(this._clientTls),
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
      repo_tls: {
        value: cdktf.stringToHclTerraform(this._repoTls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
