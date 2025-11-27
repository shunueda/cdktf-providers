// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformHubGitCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this Git Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#description PlatformHubGitCredential#description}
  */
  readonly description?: string;
  /**
  * The name of this Git Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#name PlatformHubGitCredential#name}
  */
  readonly name: string;
  /**
  * The password for the Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#password PlatformHubGitCredential#password}
  */
  readonly password: string;
  /**
  * Sets the repository restrictions associated with the Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#repository_restrictions PlatformHubGitCredential#repository_restrictions}
  */
  readonly repositoryRestrictions?: PlatformHubGitCredentialRepositoryRestrictions;
  /**
  * The username for the Git credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#username PlatformHubGitCredential#username}
  */
  readonly username: string;
}
export interface PlatformHubGitCredentialRepositoryRestrictions {
  /**
  * Set of allowed repository URL's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#allowed_repositories PlatformHubGitCredential#allowed_repositories}
  */
  readonly allowedRepositories: string[];
  /**
  * Whether repository restrictions are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#enabled PlatformHubGitCredential#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function platformHubGitCredentialRepositoryRestrictionsToTerraform(struct?: PlatformHubGitCredentialRepositoryRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRepositories),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function platformHubGitCredentialRepositoryRestrictionsToHclTerraform(struct?: PlatformHubGitCredentialRepositoryRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRepositories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformHubGitCredentialRepositoryRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformHubGitCredentialRepositoryRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRepositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRepositories = this._allowedRepositories;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformHubGitCredentialRepositoryRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRepositories = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRepositories = value.allowedRepositories;
      this._enabled = value.enabled;
    }
  }

  // allowed_repositories - computed: true, optional: false, required: true
  private _allowedRepositories?: string[]; 
  public get allowedRepositories() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_repositories'));
  }
  public set allowedRepositories(value: string[]) {
    this._allowedRepositories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRepositoriesInput() {
    return this._allowedRepositories;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential octopusdeploy_platform_hub_git_credential}
*/
export class PlatformHubGitCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_platform_hub_git_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformHubGitCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformHubGitCredential to import
  * @param importFromId The id of the existing PlatformHubGitCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformHubGitCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_platform_hub_git_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/platform_hub_git_credential octopusdeploy_platform_hub_git_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformHubGitCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformHubGitCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_platform_hub_git_credential',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._password = config.password;
    this._repositoryRestrictions.internalValue = config.repositoryRestrictions;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // repository_restrictions - computed: true, optional: true, required: false
  private _repositoryRestrictions = new PlatformHubGitCredentialRepositoryRestrictionsOutputReference(this, "repository_restrictions");
  public get repositoryRestrictions() {
    return this._repositoryRestrictions;
  }
  public putRepositoryRestrictions(value: PlatformHubGitCredentialRepositoryRestrictions) {
    this._repositoryRestrictions.internalValue = value;
  }
  public resetRepositoryRestrictions() {
    this._repositoryRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryRestrictionsInput() {
    return this._repositoryRestrictions.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      repository_restrictions: platformHubGitCredentialRepositoryRestrictionsToTerraform(this._repositoryRestrictions.internalValue),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_restrictions: {
        value: platformHubGitCredentialRepositoryRestrictionsToHclTerraform(this._repositoryRestrictions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformHubGitCredentialRepositoryRestrictions",
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
