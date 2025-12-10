// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The branch of the git connector to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#branch GitConnector#branch}
  */
  readonly branch?: string;
  /**
  * Delegate selectors to apply to this git connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#delegate_selectors GitConnector#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Boolean indicating whether or not to generate a webhook url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#generate_webhook_url GitConnector#generate_webhook_url}
  */
  readonly generateWebhookUrl?: boolean | cdktf.IResolvable;
  /**
  * Name of the git connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#name GitConnector#name}
  */
  readonly name: string;
  /**
  * The id of the secret for connecting to the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#password_secret_id GitConnector#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * The id of the SSH secret to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#ssh_setting_id GitConnector#ssh_setting_id}
  */
  readonly sshSettingId?: string;
  /**
  * The URL of the git repository or account/organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#url GitConnector#url}
  */
  readonly url: string;
  /**
  * The type of git url being used. Options are `ACCOUNT`, and `REPO.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#url_type GitConnector#url_type}
  */
  readonly urlType: string;
  /**
  * The name of the user used to connect to the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#username GitConnector#username}
  */
  readonly username?: string;
  /**
  * commit_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#commit_details GitConnector#commit_details}
  */
  readonly commitDetails?: GitConnectorCommitDetails;
  /**
  * usage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#usage_scope GitConnector#usage_scope}
  */
  readonly usageScope?: GitConnectorUsageScope[] | cdktf.IResolvable;
}
export interface GitConnectorCommitDetails {
  /**
  * The email id of the author
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#author_email_id GitConnector#author_email_id}
  */
  readonly authorEmailId?: string;
  /**
  * The name of the author
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#author_name GitConnector#author_name}
  */
  readonly authorName?: string;
  /**
  * Commit message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#message GitConnector#message}
  */
  readonly message?: string;
}

export function gitConnectorCommitDetailsToTerraform(struct?: GitConnectorCommitDetailsOutputReference | GitConnectorCommitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author_email_id: cdktf.stringToTerraform(struct!.authorEmailId),
    author_name: cdktf.stringToTerraform(struct!.authorName),
    message: cdktf.stringToTerraform(struct!.message),
  }
}


export function gitConnectorCommitDetailsToHclTerraform(struct?: GitConnectorCommitDetailsOutputReference | GitConnectorCommitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author_email_id: {
      value: cdktf.stringToHclTerraform(struct!.authorEmailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    author_name: {
      value: cdktf.stringToHclTerraform(struct!.authorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GitConnectorCommitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GitConnectorCommitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorEmailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorEmailId = this._authorEmailId;
    }
    if (this._authorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorName = this._authorName;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GitConnectorCommitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorEmailId = undefined;
      this._authorName = undefined;
      this._message = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorEmailId = value.authorEmailId;
      this._authorName = value.authorName;
      this._message = value.message;
    }
  }

  // author_email_id - computed: false, optional: true, required: false
  private _authorEmailId?: string; 
  public get authorEmailId() {
    return this.getStringAttribute('author_email_id');
  }
  public set authorEmailId(value: string) {
    this._authorEmailId = value;
  }
  public resetAuthorEmailId() {
    this._authorEmailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailIdInput() {
    return this._authorEmailId;
  }

  // author_name - computed: false, optional: true, required: false
  private _authorName?: string; 
  public get authorName() {
    return this.getStringAttribute('author_name');
  }
  public set authorName(value: string) {
    this._authorName = value;
  }
  public resetAuthorName() {
    this._authorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorNameInput() {
    return this._authorName;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface GitConnectorUsageScope {
  /**
  * Id of the application to scope to. If empty then this scope applies to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#application_id GitConnector#application_id}
  */
  readonly applicationId?: string;
  /**
  * Type of environment filter applied. Cannot be used with `environment_id`. Valid options are NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#environment_filter_type GitConnector#environment_filter_type}
  */
  readonly environmentFilterType?: string;
  /**
  * Id of the id of the specific environment to scope to. Cannot be used with `environment_filter_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#environment_id GitConnector#environment_id}
  */
  readonly environmentId?: string;
}

export function gitConnectorUsageScopeToTerraform(struct?: GitConnectorUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    environment_filter_type: cdktf.stringToTerraform(struct!.environmentFilterType),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
  }
}


export function gitConnectorUsageScopeToHclTerraform(struct?: GitConnectorUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GitConnectorUsageScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GitConnectorUsageScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._environmentFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilterType = this._environmentFilterType;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GitConnectorUsageScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._environmentFilterType = undefined;
      this._environmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._environmentFilterType = value.environmentFilterType;
      this._environmentId = value.environmentId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_filter_type - computed: false, optional: true, required: false
  private _environmentFilterType?: string; 
  public get environmentFilterType() {
    return this.getStringAttribute('environment_filter_type');
  }
  public set environmentFilterType(value: string) {
    this._environmentFilterType = value;
  }
  public resetEnvironmentFilterType() {
    this._environmentFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterTypeInput() {
    return this._environmentFilterType;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }
}

export class GitConnectorUsageScopeList extends cdktf.ComplexList {
  public internalValue? : GitConnectorUsageScope[] | cdktf.IResolvable

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
  public get(index: number): GitConnectorUsageScopeOutputReference {
    return new GitConnectorUsageScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector harness_git_connector}
*/
export class GitConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_git_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitConnector to import
  * @param importFromId The id of the existing GitConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_git_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/git_connector harness_git_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: GitConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_git_connector',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._delegateSelectors = config.delegateSelectors;
    this._generateWebhookUrl = config.generateWebhookUrl;
    this._name = config.name;
    this._passwordSecretId = config.passwordSecretId;
    this._sshSettingId = config.sshSettingId;
    this._url = config.url;
    this._urlType = config.urlType;
    this._username = config.username;
    this._commitDetails.internalValue = config.commitDetails;
    this._usageScope.internalValue = config.usageScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

  // generate_webhook_url - computed: false, optional: true, required: false
  private _generateWebhookUrl?: boolean | cdktf.IResolvable; 
  public get generateWebhookUrl() {
    return this.getBooleanAttribute('generate_webhook_url');
  }
  public set generateWebhookUrl(value: boolean | cdktf.IResolvable) {
    this._generateWebhookUrl = value;
  }
  public resetGenerateWebhookUrl() {
    this._generateWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateWebhookUrlInput() {
    return this._generateWebhookUrl;
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

  // password_secret_id - computed: false, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // ssh_setting_id - computed: false, optional: true, required: false
  private _sshSettingId?: string; 
  public get sshSettingId() {
    return this.getStringAttribute('ssh_setting_id');
  }
  public set sshSettingId(value: string) {
    this._sshSettingId = value;
  }
  public resetSshSettingId() {
    this._sshSettingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSettingIdInput() {
    return this._sshSettingId;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_type - computed: false, optional: false, required: true
  private _urlType?: string; 
  public get urlType() {
    return this.getStringAttribute('url_type');
  }
  public set urlType(value: string) {
    this._urlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTypeInput() {
    return this._urlType;
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

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // commit_details - computed: false, optional: true, required: false
  private _commitDetails = new GitConnectorCommitDetailsOutputReference(this, "commit_details");
  public get commitDetails() {
    return this._commitDetails;
  }
  public putCommitDetails(value: GitConnectorCommitDetails) {
    this._commitDetails.internalValue = value;
  }
  public resetCommitDetails() {
    this._commitDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitDetailsInput() {
    return this._commitDetails.internalValue;
  }

  // usage_scope - computed: false, optional: true, required: false
  private _usageScope = new GitConnectorUsageScopeList(this, "usage_scope", true);
  public get usageScope() {
    return this._usageScope;
  }
  public putUsageScope(value: GitConnectorUsageScope[] | cdktf.IResolvable) {
    this._usageScope.internalValue = value;
  }
  public resetUsageScope() {
    this._usageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageScopeInput() {
    return this._usageScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      generate_webhook_url: cdktf.booleanToTerraform(this._generateWebhookUrl),
      name: cdktf.stringToTerraform(this._name),
      password_secret_id: cdktf.stringToTerraform(this._passwordSecretId),
      ssh_setting_id: cdktf.stringToTerraform(this._sshSettingId),
      url: cdktf.stringToTerraform(this._url),
      url_type: cdktf.stringToTerraform(this._urlType),
      username: cdktf.stringToTerraform(this._username),
      commit_details: gitConnectorCommitDetailsToTerraform(this._commitDetails.internalValue),
      usage_scope: cdktf.listMapper(gitConnectorUsageScopeToTerraform, true)(this._usageScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      generate_webhook_url: {
        value: cdktf.booleanToHclTerraform(this._generateWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_secret_id: {
        value: cdktf.stringToHclTerraform(this._passwordSecretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_setting_id: {
        value: cdktf.stringToHclTerraform(this._sshSettingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_type: {
        value: cdktf.stringToHclTerraform(this._urlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_details: {
        value: gitConnectorCommitDetailsToHclTerraform(this._commitDetails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GitConnectorCommitDetailsList",
      },
      usage_scope: {
        value: cdktf.listMapperHcl(gitConnectorUsageScopeToHclTerraform, true)(this._usageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GitConnectorUsageScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
