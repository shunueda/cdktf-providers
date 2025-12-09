// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScopedTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of the other instances or services that should accept this token identified by their Service-IDs. Limited to total 255 characters. Default to '*@*' if not set. Service ID must begin with valid JFrog service type. Options: jfrt, jfxr, jfpip, jfds, jfmc, jfac, jfevt, jfmd, jfcon, or *. For instructions to retrieve the Artifactory Service ID see this [documentation](https://jfrog.com/help/r/jfrog-rest-apis/get-service-id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#audiences ScopedToken#audiences}
  */
  readonly audiences?: string[];
  /**
  * Free text token description. Useful for filtering and managing tokens. Limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#description ScopedToken#description}
  */
  readonly description?: string;
  /**
  * The amount of time, in seconds, it would take for the token to expire. An admin shall be able to set whether expiry is mandatory, what is the default expiry, and what is the maximum expiry allowed. Must be non-negative. Default value is based on configuration in 'access.config.yaml'. See [API documentation](https://jfrog.com/help/r/jfrog-rest-apis/revoke-token-by-id) for details. Access Token would not be saved by Artifactory if this is less than the persistence threshold value (default to 10800 seconds) set in Access configuration. See [official documentation](https://jfrog.com/help/r/jfrog-platform-administration-documentation/persistency-threshold) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#expires_in ScopedToken#expires_in}
  */
  readonly expiresIn?: number;
  /**
  * The grant type used to authenticate the request. In this case, the only value supported is `client_credentials` which is also the default value if this parameter is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#grant_type ScopedToken#grant_type}
  */
  readonly grantType?: string;
  /**
  * Toggle to ignore warning message when token was missing or not created and stored by Artifactory. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#ignore_missing_token_warning ScopedToken#ignore_missing_token_warning}
  */
  readonly ignoreMissingTokenWarning?: boolean | cdktf.IResolvable;
  /**
  * Also create a reference token which can be used like an API key. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#include_reference_token ScopedToken#include_reference_token}
  */
  readonly includeReferenceToken?: boolean | cdktf.IResolvable;
  /**
  * The project for which this token is created. Enter the project name on which you want to apply this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#project_key ScopedToken#project_key}
  */
  readonly projectKey?: string;
  /**
  * Is this token refreshable? Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#refreshable ScopedToken#refreshable}
  */
  readonly refreshable?: boolean | cdktf.IResolvable;
  /**
  * The scope of access that the token provides. Access to the REST API is always provided by default. Administrators can set any scope, while non-admin users can only set the scope to a subset of the groups to which they belong. The supported scopes include:
  *   - `applied-permissions/user` - provides user access. If left at the default setting, the token will be created with the user-identity scope, which allows users to identify themselves in the Platform but does not grant any specific access permissions.
  *   - `applied-permissions/admin` - the scope assigned to admin users.
  *   - `applied-permissions/groups` - this scope assigns permissions to groups using the following format: `applied-permissions/groups:<group-name>[,<group-name>...]`
  *   - Resource Permissions: From Artifactory 7.38.x, resource permissions scoped tokens are also supported in the REST API. A permission can be represented as a scope token string in the following format: `<resource-type>:<target>[/<sub-resource>]:<actions>`
  *     - Where:
  *       - `<resource-type>` - one of the permission resource types, from a predefined closed list. Currently, the only resource type that is supported is the artifact resource type.
  *       - `<target>` - the target resource, can be exact name or a pattern
  *       - `<sub-resource>` - optional, the target sub-resource, can be exact name or a pattern
  *       - `<actions>` - comma-separated list of action acronyms. The actions allowed are `r`, `w`, `d`, `a`, `m`, `x`, `s`, or any combination of these actions. To allow all actions - use `*`
  *     - Examples:
  *       - `["applied-permissions/user", "artifact:generic-local:r"]`
  *       - `["applied-permissions/group", "artifact:generic-local/path:*"]`
  *       - `["applied-permissions/admin", "system:metrics:r", "artifact:generic-local:*"]`
  *   - `applied-permissions/roles:project-key` - provides access to elements associated with the project based on the project role. For example, `applied-permissions/roles:project-type:developer,qa`.
  * 
  *   - System Permissions: Used to grant access to system resources. A permission can be represented as a scope token string in the following format: `system:(metrics|livelogs|identities|permissions):<actions>`
  *     - Where:
  *       - `metrics|livelogs|identities|permissions` - one of these options can be chosen      - `<actions>` - comma-separated list of action acronyms. The actions allowed are `r`, `w`, `d`, `a`, `m`, `x`, `s`, or any combination of these actions. To allow all actions - use `*`
  *     - Examples:
  *       - `["system:livelogs:r", "system:metrics:r,w,d"]`
  * ->The scope to assign to the token should be provided as a list of scope tokens, limited to 500 characters in total.
  * From Artifactory 7.84.3, [project admins](https://jfrog.com/help/r/jfrog-platform-administration-documentation/access-token-creation-by-project-admins) can create access tokens that are tied to the projects in which they hold administrative privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#scopes ScopedToken#scopes}
  */
  readonly scopes?: string[];
  /**
  * The user name for which this token is created. The username is based on the authenticated user - either from the user of the authenticated token or based on the username (if basic auth was used). The username is then used to set the subject of the token: <service-id>/users/<username>. Limited to 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#username ScopedToken#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token artifactory_scoped_token}
*/
export class ScopedToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_scoped_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScopedToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScopedToken to import
  * @param importFromId The id of the existing ScopedToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScopedToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_scoped_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/scoped_token artifactory_scoped_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScopedTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ScopedTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'artifactory_scoped_token',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audiences = config.audiences;
    this._description = config.description;
    this._expiresIn = config.expiresIn;
    this._grantType = config.grantType;
    this._ignoreMissingTokenWarning = config.ignoreMissingTokenWarning;
    this._includeReferenceToken = config.includeReferenceToken;
    this._projectKey = config.projectKey;
    this._refreshable = config.refreshable;
    this._scopes = config.scopes;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return cdktf.Fn.tolist(this.getListAttribute('audiences'));
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // description - computed: true, optional: true, required: false
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

  // expires_in - computed: true, optional: true, required: false
  private _expiresIn?: number; 
  public get expiresIn() {
    return this.getNumberAttribute('expires_in');
  }
  public set expiresIn(value: number) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }

  // grant_type - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing_token_warning - computed: true, optional: true, required: false
  private _ignoreMissingTokenWarning?: boolean | cdktf.IResolvable; 
  public get ignoreMissingTokenWarning() {
    return this.getBooleanAttribute('ignore_missing_token_warning');
  }
  public set ignoreMissingTokenWarning(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingTokenWarning = value;
  }
  public resetIgnoreMissingTokenWarning() {
    this._ignoreMissingTokenWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingTokenWarningInput() {
    return this._ignoreMissingTokenWarning;
  }

  // include_reference_token - computed: true, optional: true, required: false
  private _includeReferenceToken?: boolean | cdktf.IResolvable; 
  public get includeReferenceToken() {
    return this.getBooleanAttribute('include_reference_token');
  }
  public set includeReferenceToken(value: boolean | cdktf.IResolvable) {
    this._includeReferenceToken = value;
  }
  public resetIncludeReferenceToken() {
    this._includeReferenceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReferenceTokenInput() {
    return this._includeReferenceToken;
  }

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getNumberAttribute('issued_at');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // reference_token - computed: true, optional: false, required: false
  public get referenceToken() {
    return this.getStringAttribute('reference_token');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // refreshable - computed: true, optional: true, required: false
  private _refreshable?: boolean | cdktf.IResolvable; 
  public get refreshable() {
    return this.getBooleanAttribute('refreshable');
  }
  public set refreshable(value: boolean | cdktf.IResolvable) {
    this._refreshable = value;
  }
  public resetRefreshable() {
    this._refreshable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshableInput() {
    return this._refreshable;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // token_type - computed: true, optional: false, required: false
  public get tokenType() {
    return this.getStringAttribute('token_type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audiences),
      description: cdktf.stringToTerraform(this._description),
      expires_in: cdktf.numberToTerraform(this._expiresIn),
      grant_type: cdktf.stringToTerraform(this._grantType),
      ignore_missing_token_warning: cdktf.booleanToTerraform(this._ignoreMissingTokenWarning),
      include_reference_token: cdktf.booleanToTerraform(this._includeReferenceToken),
      project_key: cdktf.stringToTerraform(this._projectKey),
      refreshable: cdktf.booleanToTerraform(this._refreshable),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audiences),
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
      expires_in: {
        value: cdktf.numberToHclTerraform(this._expiresIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grant_type: {
        value: cdktf.stringToHclTerraform(this._grantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_missing_token_warning: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissingTokenWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_reference_token: {
        value: cdktf.booleanToHclTerraform(this._includeReferenceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refreshable: {
        value: cdktf.booleanToHclTerraform(this._refreshable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
