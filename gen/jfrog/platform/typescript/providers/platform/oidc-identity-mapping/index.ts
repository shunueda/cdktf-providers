// https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcIdentityMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Claims JSON from the OIDC provider. Use [Terraform jsonencode function](https://developer.hashicorp.com/terraform/language/functions/jsonencode) to encode the JSON string. Claims constitute the payload part of a JSON web token and represent a set of information exchanged between two parties. The JWT standard distinguishes between reserved claims, public claims, and private claims. In API Gateway context, both public claims and private claims are considered custom claims. For example, an ID token (which is always a JWT) can contain a claim called that asserts that the name of the user authenticating is "John Doe". In a JWT, a claim appears as a name/value pair where the name is always a string and the value can be any JSON value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#claims_json OidcIdentityMapping#claims_json}
  */
  readonly claimsJson: string;
  /**
  * Description of the OIDC mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#description OidcIdentityMapping#description}
  */
  readonly description?: string;
  /**
  * Name of the OIDC identity mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#name OidcIdentityMapping#name}
  */
  readonly name: string;
  /**
  * Priority of the identity mapping. The priority should be a number. The higher priority is set for the lower number. If you do not enter a value, the identity mapping is assigned the lowest priority. We recommend that you assign the highest priority (1) to the strongest permission gate. Set the lowest priority to the weakest permission for a logical and effective access control setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#priority OidcIdentityMapping#priority}
  */
  readonly priority: number;
  /**
  * If set, this Identity Mapping will be available in the scope of the given project (editable by platform admin and project admin). If not set, this Identity Mapping will be global and only editable by platform admin. Once set, the projectKey cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#project_key OidcIdentityMapping#project_key}
  */
  readonly projectKey?: string;
  /**
  * Name of the OIDC configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#provider_name OidcIdentityMapping#provider_name}
  */
  readonly providerName: string;
  /**
  * Specifications of the token. In case of success, a token with the following details will be generated and passed to OIDC Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#token_spec OidcIdentityMapping#token_spec}
  */
  readonly tokenSpec: OidcIdentityMappingTokenSpec;
}
export interface OidcIdentityMappingTokenSpec {
  /**
  * Sets of (space separated) the JFrog services to which the mapping applies. Default value is `*@*`, which applies to all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#audience OidcIdentityMapping#audience}
  */
  readonly audience?: string;
  /**
  * Token expiry time in seconds. Default value is 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#expires_in OidcIdentityMapping#expires_in}
  */
  readonly expiresIn?: number;
  /**
  * Provide a pattern which is used to map OIDC groups to Artifactory groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#groups_pattern OidcIdentityMapping#groups_pattern}
  */
  readonly groupsPattern?: string;
  /**
  * Scope of the token. Must start with `applied-permissions/user`, `applied-permissions/admin`, `applied-permissions/roles:`, or `applied-permissions/groups:`. Group names must be comma-separated, double quotes wrapped, e.g. `applied-permissions/groups:\"readers\",\"my-group\",` Role permissions are only applicable when in project scope and must be comma-separated, double quotes wrapped, e.g. `applied-permissions:roles:<project-key>:"Developer","Viewer". `username` is also required when setting role permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#scope OidcIdentityMapping#scope}
  */
  readonly scope?: string;
  /**
  * User name of the OIDC user. Not applicable when `scope` is set to `applied-permissions/groups`. Must be set when `scope` is set to `applied-permissions/roles`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#username OidcIdentityMapping#username}
  */
  readonly username?: string;
  /**
  * Provide a pattern which is used to map OIDC user to Artifactory user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#username_pattern OidcIdentityMapping#username_pattern}
  */
  readonly usernamePattern?: string;
}

export function oidcIdentityMappingTokenSpecToTerraform(struct?: OidcIdentityMappingTokenSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expires_in: cdktf.numberToTerraform(struct!.expiresIn),
    groups_pattern: cdktf.stringToTerraform(struct!.groupsPattern),
    scope: cdktf.stringToTerraform(struct!.scope),
    username: cdktf.stringToTerraform(struct!.username),
    username_pattern: cdktf.stringToTerraform(struct!.usernamePattern),
  }
}


export function oidcIdentityMappingTokenSpecToHclTerraform(struct?: OidcIdentityMappingTokenSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires_in: {
      value: cdktf.numberToHclTerraform(struct!.expiresIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groups_pattern: {
      value: cdktf.stringToHclTerraform(struct!.groupsPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_pattern: {
      value: cdktf.stringToHclTerraform(struct!.usernamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OidcIdentityMappingTokenSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OidcIdentityMappingTokenSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expiresIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresIn = this._expiresIn;
    }
    if (this._groupsPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPattern = this._groupsPattern;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePattern = this._usernamePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OidcIdentityMappingTokenSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expiresIn = undefined;
      this._groupsPattern = undefined;
      this._scope = undefined;
      this._username = undefined;
      this._usernamePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expiresIn = value.expiresIn;
      this._groupsPattern = value.groupsPattern;
      this._scope = value.scope;
      this._username = value.username;
      this._usernamePattern = value.usernamePattern;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // groups_pattern - computed: false, optional: true, required: false
  private _groupsPattern?: string; 
  public get groupsPattern() {
    return this.getStringAttribute('groups_pattern');
  }
  public set groupsPattern(value: string) {
    this._groupsPattern = value;
  }
  public resetGroupsPattern() {
    this._groupsPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPatternInput() {
    return this._groupsPattern;
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

  // username_pattern - computed: false, optional: true, required: false
  private _usernamePattern?: string; 
  public get usernamePattern() {
    return this.getStringAttribute('username_pattern');
  }
  public set usernamePattern(value: string) {
    this._usernamePattern = value;
  }
  public resetUsernamePattern() {
    this._usernamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePatternInput() {
    return this._usernamePattern;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping platform_oidc_identity_mapping}
*/
export class OidcIdentityMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_oidc_identity_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OidcIdentityMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OidcIdentityMapping to import
  * @param importFromId The id of the existing OidcIdentityMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OidcIdentityMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_oidc_identity_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.7/docs/resources/oidc_identity_mapping platform_oidc_identity_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcIdentityMappingConfig
  */
  public constructor(scope: Construct, id: string, config: OidcIdentityMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_oidc_identity_mapping',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.7',
        providerVersionConstraint: '2.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimsJson = config.claimsJson;
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._projectKey = config.projectKey;
    this._providerName = config.providerName;
    this._tokenSpec.internalValue = config.tokenSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claims_json - computed: false, optional: false, required: true
  private _claimsJson?: string; 
  public get claimsJson() {
    return this.getStringAttribute('claims_json');
  }
  public set claimsJson(value: string) {
    this._claimsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsJsonInput() {
    return this._claimsJson;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // token_spec - computed: false, optional: false, required: true
  private _tokenSpec = new OidcIdentityMappingTokenSpecOutputReference(this, "token_spec");
  public get tokenSpec() {
    return this._tokenSpec;
  }
  public putTokenSpec(value: OidcIdentityMappingTokenSpec) {
    this._tokenSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSpecInput() {
    return this._tokenSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claims_json: cdktf.stringToTerraform(this._claimsJson),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      project_key: cdktf.stringToTerraform(this._projectKey),
      provider_name: cdktf.stringToTerraform(this._providerName),
      token_spec: oidcIdentityMappingTokenSpecToTerraform(this._tokenSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claims_json: {
        value: cdktf.stringToHclTerraform(this._claimsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_spec: {
        value: oidcIdentityMappingTokenSpecToHclTerraform(this._tokenSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OidcIdentityMappingTokenSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
