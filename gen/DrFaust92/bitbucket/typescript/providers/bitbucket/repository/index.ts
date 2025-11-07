// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#description Repository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#fork_policy Repository#fork_policy}
  */
  readonly forkPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#has_issues Repository#has_issues}
  */
  readonly hasIssues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#has_wiki Repository#has_wiki}
  */
  readonly hasWiki?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#id Repository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#inherit_branching_model Repository#inherit_branching_model}
  */
  readonly inheritBranchingModel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#inherit_default_merge_strategy Repository#inherit_default_merge_strategy}
  */
  readonly inheritDefaultMergeStrategy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#is_private Repository#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#language Repository#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#name Repository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#owner Repository#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#pipelines_enabled Repository#pipelines_enabled}
  */
  readonly pipelinesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#project_key Repository#project_key}
  */
  readonly projectKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#scm Repository#scm}
  */
  readonly scm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#slug Repository#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#website Repository#website}
  */
  readonly website?: string;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#link Repository#link}
  */
  readonly link?: RepositoryLink;
}
export interface RepositoryLinkAvatar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#href Repository#href}
  */
  readonly href?: string;
}

export function repositoryLinkAvatarToTerraform(struct?: RepositoryLinkAvatarOutputReference | RepositoryLinkAvatar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function repositoryLinkAvatarToHclTerraform(struct?: RepositoryLinkAvatarOutputReference | RepositoryLinkAvatar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryLinkAvatarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryLinkAvatar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryLinkAvatar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface RepositoryLink {
  /**
  * avatar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#avatar Repository#avatar}
  */
  readonly avatar?: RepositoryLinkAvatar;
}

export function repositoryLinkToTerraform(struct?: RepositoryLinkOutputReference | RepositoryLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avatar: repositoryLinkAvatarToTerraform(struct!.avatar),
  }
}


export function repositoryLinkToHclTerraform(struct?: RepositoryLinkOutputReference | RepositoryLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avatar: {
      value: repositoryLinkAvatarToHclTerraform(struct!.avatar),
      isBlock: true,
      type: "list",
      storageClassType: "RepositoryLinkAvatarList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avatar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avatar = this._avatar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avatar.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avatar.internalValue = value.avatar;
    }
  }

  // avatar - computed: false, optional: true, required: false
  private _avatar = new RepositoryLinkAvatarOutputReference(this, "avatar");
  public get avatar() {
    return this._avatar;
  }
  public putAvatar(value: RepositoryLinkAvatar) {
    this._avatar.internalValue = value;
  }
  public resetAvatar() {
    this._avatar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository bitbucket_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/resources/repository bitbucket_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_repository',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0'
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
    this._forkPolicy = config.forkPolicy;
    this._hasIssues = config.hasIssues;
    this._hasWiki = config.hasWiki;
    this._id = config.id;
    this._inheritBranchingModel = config.inheritBranchingModel;
    this._inheritDefaultMergeStrategy = config.inheritDefaultMergeStrategy;
    this._isPrivate = config.isPrivate;
    this._language = config.language;
    this._name = config.name;
    this._owner = config.owner;
    this._pipelinesEnabled = config.pipelinesEnabled;
    this._projectKey = config.projectKey;
    this._scm = config.scm;
    this._slug = config.slug;
    this._website = config.website;
    this._link.internalValue = config.link;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone_https - computed: true, optional: false, required: false
  public get cloneHttps() {
    return this.getStringAttribute('clone_https');
  }

  // clone_ssh - computed: true, optional: false, required: false
  public get cloneSsh() {
    return this.getStringAttribute('clone_ssh');
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

  // fork_policy - computed: false, optional: true, required: false
  private _forkPolicy?: string; 
  public get forkPolicy() {
    return this.getStringAttribute('fork_policy');
  }
  public set forkPolicy(value: string) {
    this._forkPolicy = value;
  }
  public resetForkPolicy() {
    this._forkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkPolicyInput() {
    return this._forkPolicy;
  }

  // has_issues - computed: false, optional: true, required: false
  private _hasIssues?: boolean | cdktf.IResolvable; 
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues');
  }
  public set hasIssues(value: boolean | cdktf.IResolvable) {
    this._hasIssues = value;
  }
  public resetHasIssues() {
    this._hasIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasIssuesInput() {
    return this._hasIssues;
  }

  // has_wiki - computed: false, optional: true, required: false
  private _hasWiki?: boolean | cdktf.IResolvable; 
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki');
  }
  public set hasWiki(value: boolean | cdktf.IResolvable) {
    this._hasWiki = value;
  }
  public resetHasWiki() {
    this._hasWiki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasWikiInput() {
    return this._hasWiki;
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

  // inherit_branching_model - computed: true, optional: true, required: false
  private _inheritBranchingModel?: boolean | cdktf.IResolvable; 
  public get inheritBranchingModel() {
    return this.getBooleanAttribute('inherit_branching_model');
  }
  public set inheritBranchingModel(value: boolean | cdktf.IResolvable) {
    this._inheritBranchingModel = value;
  }
  public resetInheritBranchingModel() {
    this._inheritBranchingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritBranchingModelInput() {
    return this._inheritBranchingModel;
  }

  // inherit_default_merge_strategy - computed: true, optional: true, required: false
  private _inheritDefaultMergeStrategy?: boolean | cdktf.IResolvable; 
  public get inheritDefaultMergeStrategy() {
    return this.getBooleanAttribute('inherit_default_merge_strategy');
  }
  public set inheritDefaultMergeStrategy(value: boolean | cdktf.IResolvable) {
    this._inheritDefaultMergeStrategy = value;
  }
  public resetInheritDefaultMergeStrategy() {
    this._inheritDefaultMergeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritDefaultMergeStrategyInput() {
    return this._inheritDefaultMergeStrategy;
  }

  // is_private - computed: false, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // pipelines_enabled - computed: false, optional: true, required: false
  private _pipelinesEnabled?: boolean | cdktf.IResolvable; 
  public get pipelinesEnabled() {
    return this.getBooleanAttribute('pipelines_enabled');
  }
  public set pipelinesEnabled(value: boolean | cdktf.IResolvable) {
    this._pipelinesEnabled = value;
  }
  public resetPipelinesEnabled() {
    this._pipelinesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesEnabledInput() {
    return this._pipelinesEnabled;
  }

  // project_key - computed: true, optional: true, required: false
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

  // scm - computed: false, optional: true, required: false
  private _scm?: string; 
  public get scm() {
    return this.getStringAttribute('scm');
  }
  public set scm(value: string) {
    this._scm = value;
  }
  public resetScm() {
    this._scm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmInput() {
    return this._scm;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }

  // link - computed: false, optional: true, required: false
  private _link = new RepositoryLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: RepositoryLink) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fork_policy: cdktf.stringToTerraform(this._forkPolicy),
      has_issues: cdktf.booleanToTerraform(this._hasIssues),
      has_wiki: cdktf.booleanToTerraform(this._hasWiki),
      id: cdktf.stringToTerraform(this._id),
      inherit_branching_model: cdktf.booleanToTerraform(this._inheritBranchingModel),
      inherit_default_merge_strategy: cdktf.booleanToTerraform(this._inheritDefaultMergeStrategy),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      pipelines_enabled: cdktf.booleanToTerraform(this._pipelinesEnabled),
      project_key: cdktf.stringToTerraform(this._projectKey),
      scm: cdktf.stringToTerraform(this._scm),
      slug: cdktf.stringToTerraform(this._slug),
      website: cdktf.stringToTerraform(this._website),
      link: repositoryLinkToTerraform(this._link.internalValue),
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
      fork_policy: {
        value: cdktf.stringToHclTerraform(this._forkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_issues: {
        value: cdktf.booleanToHclTerraform(this._hasIssues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_wiki: {
        value: cdktf.booleanToHclTerraform(this._hasWiki),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherit_branching_model: {
        value: cdktf.booleanToHclTerraform(this._inheritBranchingModel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inherit_default_merge_strategy: {
        value: cdktf.booleanToHclTerraform(this._inheritDefaultMergeStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipelines_enabled: {
        value: cdktf.booleanToHclTerraform(this._pipelinesEnabled),
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
      scm: {
        value: cdktf.stringToHclTerraform(this._scm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website: {
        value: cdktf.stringToHclTerraform(this._website),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: repositoryLinkToHclTerraform(this._link.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
