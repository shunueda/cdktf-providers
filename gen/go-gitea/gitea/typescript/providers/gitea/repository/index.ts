// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#allow_manual_merge Repository#allow_manual_merge}
  */
  readonly allowManualMerge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#allow_merge_commits Repository#allow_merge_commits}
  */
  readonly allowMergeCommits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#allow_rebase Repository#allow_rebase}
  */
  readonly allowRebase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#allow_rebase_explicit Repository#allow_rebase_explicit}
  */
  readonly allowRebaseExplicit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}
  */
  readonly allowSquashMerge?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to archive the repository instead of deleting on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}
  */
  readonly archiveOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#archived Repository#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * Flag if the repository should be initiated with the configured values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#auto_init Repository#auto_init}
  */
  readonly autoInit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#autodetect_manual_merge Repository#autodetect_manual_merge}
  */
  readonly autodetectManualMerge?: boolean | cdktf.IResolvable;
  /**
  * The default branch of the repository. Defaults to `main`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#default_branch Repository#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * The description of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#description Repository#description}
  */
  readonly description?: string;
  /**
  * A specific gitignore that should be commited to the repositoryon creation if `auto_init` is set to `true`
  * Need to exist in the gitea instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#gitignores Repository#gitignores}
  */
  readonly gitignores?: string;
  /**
  * A flag if the repository should have issue management enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#has_issues Repository#has_issues}
  */
  readonly hasIssues?: boolean | cdktf.IResolvable;
  /**
  * A flag if the repository should have the native project management enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#has_projects Repository#has_projects}
  */
  readonly hasProjects?: boolean | cdktf.IResolvable;
  /**
  * A flag if the repository should acceppt pull requests or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#has_pull_requests Repository#has_pull_requests}
  */
  readonly hasPullRequests?: boolean | cdktf.IResolvable;
  /**
  * A flag if the repository should have the native wiki enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#has_wiki Repository#has_wiki}
  */
  readonly hasWiki?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#id Repository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#ignore_whitespace_conflicts Repository#ignore_whitespace_conflicts}
  */
  readonly ignoreWhitespaceConflicts?: boolean | cdktf.IResolvable;
  /**
  * The Issue Label configuration to be used in this repository.
  * Need to exist in the gitea instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#issue_labels Repository#issue_labels}
  */
  readonly issueLabels?: string;
  /**
  * The license under which the source code of this repository should be.
  * Need to exist in the gitea instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#license Repository#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_clone_address Repository#migration_clone_address}
  */
  readonly migrationCloneAddress?: string;
  /**
  * DEPRECATED in favor of `migration_clone_address`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_clone_addresse Repository#migration_clone_addresse}
  */
  readonly migrationCloneAddresse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_issue_labels Repository#migration_issue_labels}
  */
  readonly migrationIssueLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_lfs Repository#migration_lfs}
  */
  readonly migrationLfs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_lfs_endpoint Repository#migration_lfs_endpoint}
  */
  readonly migrationLfsEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_milestones Repository#migration_milestones}
  */
  readonly migrationMilestones?: boolean | cdktf.IResolvable;
  /**
  * valid time units are 'h', 'm', 's'. 0 to disable automatic sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_mirror_interval Repository#migration_mirror_interval}
  */
  readonly migrationMirrorInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_releases Repository#migration_releases}
  */
  readonly migrationReleases?: boolean | cdktf.IResolvable;
  /**
  * git/github/gitlab/gitea/gogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_service Repository#migration_service}
  */
  readonly migrationService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_service_auth_password Repository#migration_service_auth_password}
  */
  readonly migrationServiceAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_service_auth_token Repository#migration_service_auth_token}
  */
  readonly migrationServiceAuthToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#migration_service_auth_username Repository#migration_service_auth_username}
  */
  readonly migrationServiceAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#mirror Repository#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * The Name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#name Repository#name}
  */
  readonly name: string;
  /**
  * Flag if the repository should be private or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#private Repository#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#readme Repository#readme}
  */
  readonly readme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#repo_template Repository#repo_template}
  */
  readonly repoTemplate?: boolean | cdktf.IResolvable;
  /**
  * The Owner of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#username Repository#username}
  */
  readonly username: string;
  /**
  * A link to a website with more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#website Repository#website}
  */
  readonly website?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository gitea_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository gitea_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_repository',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowManualMerge = config.allowManualMerge;
    this._allowMergeCommits = config.allowMergeCommits;
    this._allowRebase = config.allowRebase;
    this._allowRebaseExplicit = config.allowRebaseExplicit;
    this._allowSquashMerge = config.allowSquashMerge;
    this._archiveOnDestroy = config.archiveOnDestroy;
    this._archived = config.archived;
    this._autoInit = config.autoInit;
    this._autodetectManualMerge = config.autodetectManualMerge;
    this._defaultBranch = config.defaultBranch;
    this._description = config.description;
    this._gitignores = config.gitignores;
    this._hasIssues = config.hasIssues;
    this._hasProjects = config.hasProjects;
    this._hasPullRequests = config.hasPullRequests;
    this._hasWiki = config.hasWiki;
    this._id = config.id;
    this._ignoreWhitespaceConflicts = config.ignoreWhitespaceConflicts;
    this._issueLabels = config.issueLabels;
    this._license = config.license;
    this._migrationCloneAddress = config.migrationCloneAddress;
    this._migrationCloneAddresse = config.migrationCloneAddresse;
    this._migrationIssueLabels = config.migrationIssueLabels;
    this._migrationLfs = config.migrationLfs;
    this._migrationLfsEndpoint = config.migrationLfsEndpoint;
    this._migrationMilestones = config.migrationMilestones;
    this._migrationMirrorInterval = config.migrationMirrorInterval;
    this._migrationReleases = config.migrationReleases;
    this._migrationService = config.migrationService;
    this._migrationServiceAuthPassword = config.migrationServiceAuthPassword;
    this._migrationServiceAuthToken = config.migrationServiceAuthToken;
    this._migrationServiceAuthUsername = config.migrationServiceAuthUsername;
    this._mirror = config.mirror;
    this._name = config.name;
    this._private = config.private;
    this._readme = config.readme;
    this._repoTemplate = config.repoTemplate;
    this._username = config.username;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_manual_merge - computed: false, optional: true, required: false
  private _allowManualMerge?: boolean | cdktf.IResolvable; 
  public get allowManualMerge() {
    return this.getBooleanAttribute('allow_manual_merge');
  }
  public set allowManualMerge(value: boolean | cdktf.IResolvable) {
    this._allowManualMerge = value;
  }
  public resetAllowManualMerge() {
    this._allowManualMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowManualMergeInput() {
    return this._allowManualMerge;
  }

  // allow_merge_commits - computed: false, optional: true, required: false
  private _allowMergeCommits?: boolean | cdktf.IResolvable; 
  public get allowMergeCommits() {
    return this.getBooleanAttribute('allow_merge_commits');
  }
  public set allowMergeCommits(value: boolean | cdktf.IResolvable) {
    this._allowMergeCommits = value;
  }
  public resetAllowMergeCommits() {
    this._allowMergeCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMergeCommitsInput() {
    return this._allowMergeCommits;
  }

  // allow_rebase - computed: false, optional: true, required: false
  private _allowRebase?: boolean | cdktf.IResolvable; 
  public get allowRebase() {
    return this.getBooleanAttribute('allow_rebase');
  }
  public set allowRebase(value: boolean | cdktf.IResolvable) {
    this._allowRebase = value;
  }
  public resetAllowRebase() {
    this._allowRebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebaseInput() {
    return this._allowRebase;
  }

  // allow_rebase_explicit - computed: false, optional: true, required: false
  private _allowRebaseExplicit?: boolean | cdktf.IResolvable; 
  public get allowRebaseExplicit() {
    return this.getBooleanAttribute('allow_rebase_explicit');
  }
  public set allowRebaseExplicit(value: boolean | cdktf.IResolvable) {
    this._allowRebaseExplicit = value;
  }
  public resetAllowRebaseExplicit() {
    this._allowRebaseExplicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebaseExplicitInput() {
    return this._allowRebaseExplicit;
  }

  // allow_squash_merge - computed: false, optional: true, required: false
  private _allowSquashMerge?: boolean | cdktf.IResolvable; 
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge');
  }
  public set allowSquashMerge(value: boolean | cdktf.IResolvable) {
    this._allowSquashMerge = value;
  }
  public resetAllowSquashMerge() {
    this._allowSquashMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSquashMergeInput() {
    return this._allowSquashMerge;
  }

  // archive_on_destroy - computed: false, optional: true, required: false
  private _archiveOnDestroy?: boolean | cdktf.IResolvable; 
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }
  public set archiveOnDestroy(value: boolean | cdktf.IResolvable) {
    this._archiveOnDestroy = value;
  }
  public resetArchiveOnDestroy() {
    this._archiveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnDestroyInput() {
    return this._archiveOnDestroy;
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // auto_init - computed: false, optional: true, required: false
  private _autoInit?: boolean | cdktf.IResolvable; 
  public get autoInit() {
    return this.getBooleanAttribute('auto_init');
  }
  public set autoInit(value: boolean | cdktf.IResolvable) {
    this._autoInit = value;
  }
  public resetAutoInit() {
    this._autoInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInitInput() {
    return this._autoInit;
  }

  // autodetect_manual_merge - computed: false, optional: true, required: false
  private _autodetectManualMerge?: boolean | cdktf.IResolvable; 
  public get autodetectManualMerge() {
    return this.getBooleanAttribute('autodetect_manual_merge');
  }
  public set autodetectManualMerge(value: boolean | cdktf.IResolvable) {
    this._autodetectManualMerge = value;
  }
  public resetAutodetectManualMerge() {
    this._autodetectManualMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectManualMergeInput() {
    return this._autodetectManualMerge;
  }

  // clone_url - computed: true, optional: false, required: false
  public get cloneUrl() {
    return this.getStringAttribute('clone_url');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
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

  // gitignores - computed: false, optional: true, required: false
  private _gitignores?: string; 
  public get gitignores() {
    return this.getStringAttribute('gitignores');
  }
  public set gitignores(value: string) {
    this._gitignores = value;
  }
  public resetGitignores() {
    this._gitignores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitignoresInput() {
    return this._gitignores;
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

  // has_projects - computed: false, optional: true, required: false
  private _hasProjects?: boolean | cdktf.IResolvable; 
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects');
  }
  public set hasProjects(value: boolean | cdktf.IResolvable) {
    this._hasProjects = value;
  }
  public resetHasProjects() {
    this._hasProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasProjectsInput() {
    return this._hasProjects;
  }

  // has_pull_requests - computed: false, optional: true, required: false
  private _hasPullRequests?: boolean | cdktf.IResolvable; 
  public get hasPullRequests() {
    return this.getBooleanAttribute('has_pull_requests');
  }
  public set hasPullRequests(value: boolean | cdktf.IResolvable) {
    this._hasPullRequests = value;
  }
  public resetHasPullRequests() {
    this._hasPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasPullRequestsInput() {
    return this._hasPullRequests;
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

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
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

  // ignore_whitespace_conflicts - computed: false, optional: true, required: false
  private _ignoreWhitespaceConflicts?: boolean | cdktf.IResolvable; 
  public get ignoreWhitespaceConflicts() {
    return this.getBooleanAttribute('ignore_whitespace_conflicts');
  }
  public set ignoreWhitespaceConflicts(value: boolean | cdktf.IResolvable) {
    this._ignoreWhitespaceConflicts = value;
  }
  public resetIgnoreWhitespaceConflicts() {
    this._ignoreWhitespaceConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWhitespaceConflictsInput() {
    return this._ignoreWhitespaceConflicts;
  }

  // issue_labels - computed: false, optional: true, required: false
  private _issueLabels?: string; 
  public get issueLabels() {
    return this.getStringAttribute('issue_labels');
  }
  public set issueLabels(value: string) {
    this._issueLabels = value;
  }
  public resetIssueLabels() {
    this._issueLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueLabelsInput() {
    return this._issueLabels;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // migration_clone_address - computed: false, optional: true, required: false
  private _migrationCloneAddress?: string; 
  public get migrationCloneAddress() {
    return this.getStringAttribute('migration_clone_address');
  }
  public set migrationCloneAddress(value: string) {
    this._migrationCloneAddress = value;
  }
  public resetMigrationCloneAddress() {
    this._migrationCloneAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationCloneAddressInput() {
    return this._migrationCloneAddress;
  }

  // migration_clone_addresse - computed: false, optional: true, required: false
  private _migrationCloneAddresse?: string; 
  public get migrationCloneAddresse() {
    return this.getStringAttribute('migration_clone_addresse');
  }
  public set migrationCloneAddresse(value: string) {
    this._migrationCloneAddresse = value;
  }
  public resetMigrationCloneAddresse() {
    this._migrationCloneAddresse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationCloneAddresseInput() {
    return this._migrationCloneAddresse;
  }

  // migration_issue_labels - computed: false, optional: true, required: false
  private _migrationIssueLabels?: boolean | cdktf.IResolvable; 
  public get migrationIssueLabels() {
    return this.getBooleanAttribute('migration_issue_labels');
  }
  public set migrationIssueLabels(value: boolean | cdktf.IResolvable) {
    this._migrationIssueLabels = value;
  }
  public resetMigrationIssueLabels() {
    this._migrationIssueLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationIssueLabelsInput() {
    return this._migrationIssueLabels;
  }

  // migration_lfs - computed: false, optional: true, required: false
  private _migrationLfs?: boolean | cdktf.IResolvable; 
  public get migrationLfs() {
    return this.getBooleanAttribute('migration_lfs');
  }
  public set migrationLfs(value: boolean | cdktf.IResolvable) {
    this._migrationLfs = value;
  }
  public resetMigrationLfs() {
    this._migrationLfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationLfsInput() {
    return this._migrationLfs;
  }

  // migration_lfs_endpoint - computed: false, optional: true, required: false
  private _migrationLfsEndpoint?: string; 
  public get migrationLfsEndpoint() {
    return this.getStringAttribute('migration_lfs_endpoint');
  }
  public set migrationLfsEndpoint(value: string) {
    this._migrationLfsEndpoint = value;
  }
  public resetMigrationLfsEndpoint() {
    this._migrationLfsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationLfsEndpointInput() {
    return this._migrationLfsEndpoint;
  }

  // migration_milestones - computed: false, optional: true, required: false
  private _migrationMilestones?: boolean | cdktf.IResolvable; 
  public get migrationMilestones() {
    return this.getBooleanAttribute('migration_milestones');
  }
  public set migrationMilestones(value: boolean | cdktf.IResolvable) {
    this._migrationMilestones = value;
  }
  public resetMigrationMilestones() {
    this._migrationMilestones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationMilestonesInput() {
    return this._migrationMilestones;
  }

  // migration_mirror_interval - computed: false, optional: true, required: false
  private _migrationMirrorInterval?: string; 
  public get migrationMirrorInterval() {
    return this.getStringAttribute('migration_mirror_interval');
  }
  public set migrationMirrorInterval(value: string) {
    this._migrationMirrorInterval = value;
  }
  public resetMigrationMirrorInterval() {
    this._migrationMirrorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationMirrorIntervalInput() {
    return this._migrationMirrorInterval;
  }

  // migration_releases - computed: false, optional: true, required: false
  private _migrationReleases?: boolean | cdktf.IResolvable; 
  public get migrationReleases() {
    return this.getBooleanAttribute('migration_releases');
  }
  public set migrationReleases(value: boolean | cdktf.IResolvable) {
    this._migrationReleases = value;
  }
  public resetMigrationReleases() {
    this._migrationReleases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationReleasesInput() {
    return this._migrationReleases;
  }

  // migration_service - computed: false, optional: true, required: false
  private _migrationService?: string; 
  public get migrationService() {
    return this.getStringAttribute('migration_service');
  }
  public set migrationService(value: string) {
    this._migrationService = value;
  }
  public resetMigrationService() {
    this._migrationService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationServiceInput() {
    return this._migrationService;
  }

  // migration_service_auth_password - computed: false, optional: true, required: false
  private _migrationServiceAuthPassword?: string; 
  public get migrationServiceAuthPassword() {
    return this.getStringAttribute('migration_service_auth_password');
  }
  public set migrationServiceAuthPassword(value: string) {
    this._migrationServiceAuthPassword = value;
  }
  public resetMigrationServiceAuthPassword() {
    this._migrationServiceAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationServiceAuthPasswordInput() {
    return this._migrationServiceAuthPassword;
  }

  // migration_service_auth_token - computed: false, optional: true, required: false
  private _migrationServiceAuthToken?: string; 
  public get migrationServiceAuthToken() {
    return this.getStringAttribute('migration_service_auth_token');
  }
  public set migrationServiceAuthToken(value: string) {
    this._migrationServiceAuthToken = value;
  }
  public resetMigrationServiceAuthToken() {
    this._migrationServiceAuthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationServiceAuthTokenInput() {
    return this._migrationServiceAuthToken;
  }

  // migration_service_auth_username - computed: false, optional: true, required: false
  private _migrationServiceAuthUsername?: string; 
  public get migrationServiceAuthUsername() {
    return this.getStringAttribute('migration_service_auth_username');
  }
  public set migrationServiceAuthUsername(value: string) {
    this._migrationServiceAuthUsername = value;
  }
  public resetMigrationServiceAuthUsername() {
    this._migrationServiceAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationServiceAuthUsernameInput() {
    return this._migrationServiceAuthUsername;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror?: boolean | cdktf.IResolvable; 
  public get mirror() {
    return this.getBooleanAttribute('mirror');
  }
  public set mirror(value: boolean | cdktf.IResolvable) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
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

  // permission_admin - computed: true, optional: false, required: false
  public get permissionAdmin() {
    return this.getBooleanAttribute('permission_admin');
  }

  // permission_pull - computed: true, optional: false, required: false
  public get permissionPull() {
    return this.getBooleanAttribute('permission_pull');
  }

  // permission_push - computed: true, optional: false, required: false
  public get permissionPush() {
    return this.getBooleanAttribute('permission_push');
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // repo_template - computed: false, optional: true, required: false
  private _repoTemplate?: boolean | cdktf.IResolvable; 
  public get repoTemplate() {
    return this.getBooleanAttribute('repo_template');
  }
  public set repoTemplate(value: boolean | cdktf.IResolvable) {
    this._repoTemplate = value;
  }
  public resetRepoTemplate() {
    this._repoTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTemplateInput() {
    return this._repoTemplate;
  }

  // ssh_url - computed: true, optional: false, required: false
  public get sshUrl() {
    return this.getStringAttribute('ssh_url');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_manual_merge: cdktf.booleanToTerraform(this._allowManualMerge),
      allow_merge_commits: cdktf.booleanToTerraform(this._allowMergeCommits),
      allow_rebase: cdktf.booleanToTerraform(this._allowRebase),
      allow_rebase_explicit: cdktf.booleanToTerraform(this._allowRebaseExplicit),
      allow_squash_merge: cdktf.booleanToTerraform(this._allowSquashMerge),
      archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
      archived: cdktf.booleanToTerraform(this._archived),
      auto_init: cdktf.booleanToTerraform(this._autoInit),
      autodetect_manual_merge: cdktf.booleanToTerraform(this._autodetectManualMerge),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      description: cdktf.stringToTerraform(this._description),
      gitignores: cdktf.stringToTerraform(this._gitignores),
      has_issues: cdktf.booleanToTerraform(this._hasIssues),
      has_projects: cdktf.booleanToTerraform(this._hasProjects),
      has_pull_requests: cdktf.booleanToTerraform(this._hasPullRequests),
      has_wiki: cdktf.booleanToTerraform(this._hasWiki),
      id: cdktf.stringToTerraform(this._id),
      ignore_whitespace_conflicts: cdktf.booleanToTerraform(this._ignoreWhitespaceConflicts),
      issue_labels: cdktf.stringToTerraform(this._issueLabels),
      license: cdktf.stringToTerraform(this._license),
      migration_clone_address: cdktf.stringToTerraform(this._migrationCloneAddress),
      migration_clone_addresse: cdktf.stringToTerraform(this._migrationCloneAddresse),
      migration_issue_labels: cdktf.booleanToTerraform(this._migrationIssueLabels),
      migration_lfs: cdktf.booleanToTerraform(this._migrationLfs),
      migration_lfs_endpoint: cdktf.stringToTerraform(this._migrationLfsEndpoint),
      migration_milestones: cdktf.booleanToTerraform(this._migrationMilestones),
      migration_mirror_interval: cdktf.stringToTerraform(this._migrationMirrorInterval),
      migration_releases: cdktf.booleanToTerraform(this._migrationReleases),
      migration_service: cdktf.stringToTerraform(this._migrationService),
      migration_service_auth_password: cdktf.stringToTerraform(this._migrationServiceAuthPassword),
      migration_service_auth_token: cdktf.stringToTerraform(this._migrationServiceAuthToken),
      migration_service_auth_username: cdktf.stringToTerraform(this._migrationServiceAuthUsername),
      mirror: cdktf.booleanToTerraform(this._mirror),
      name: cdktf.stringToTerraform(this._name),
      private: cdktf.booleanToTerraform(this._private),
      readme: cdktf.stringToTerraform(this._readme),
      repo_template: cdktf.booleanToTerraform(this._repoTemplate),
      username: cdktf.stringToTerraform(this._username),
      website: cdktf.stringToTerraform(this._website),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_manual_merge: {
        value: cdktf.booleanToHclTerraform(this._allowManualMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_merge_commits: {
        value: cdktf.booleanToHclTerraform(this._allowMergeCommits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_rebase: {
        value: cdktf.booleanToHclTerraform(this._allowRebase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_rebase_explicit: {
        value: cdktf.booleanToHclTerraform(this._allowRebaseExplicit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_squash_merge: {
        value: cdktf.booleanToHclTerraform(this._allowSquashMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_init: {
        value: cdktf.booleanToHclTerraform(this._autoInit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autodetect_manual_merge: {
        value: cdktf.booleanToHclTerraform(this._autodetectManualMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
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
      gitignores: {
        value: cdktf.stringToHclTerraform(this._gitignores),
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
      has_projects: {
        value: cdktf.booleanToHclTerraform(this._hasProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_pull_requests: {
        value: cdktf.booleanToHclTerraform(this._hasPullRequests),
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
      ignore_whitespace_conflicts: {
        value: cdktf.booleanToHclTerraform(this._ignoreWhitespaceConflicts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issue_labels: {
        value: cdktf.stringToHclTerraform(this._issueLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_clone_address: {
        value: cdktf.stringToHclTerraform(this._migrationCloneAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_clone_addresse: {
        value: cdktf.stringToHclTerraform(this._migrationCloneAddresse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_issue_labels: {
        value: cdktf.booleanToHclTerraform(this._migrationIssueLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migration_lfs: {
        value: cdktf.booleanToHclTerraform(this._migrationLfs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migration_lfs_endpoint: {
        value: cdktf.stringToHclTerraform(this._migrationLfsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_milestones: {
        value: cdktf.booleanToHclTerraform(this._migrationMilestones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migration_mirror_interval: {
        value: cdktf.stringToHclTerraform(this._migrationMirrorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_releases: {
        value: cdktf.booleanToHclTerraform(this._migrationReleases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migration_service: {
        value: cdktf.stringToHclTerraform(this._migrationService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_service_auth_password: {
        value: cdktf.stringToHclTerraform(this._migrationServiceAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_service_auth_token: {
        value: cdktf.stringToHclTerraform(this._migrationServiceAuthToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_service_auth_username: {
        value: cdktf.stringToHclTerraform(this._migrationServiceAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirror: {
        value: cdktf.booleanToHclTerraform(this._mirror),
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
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      readme: {
        value: cdktf.stringToHclTerraform(this._readme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_template: {
        value: cdktf.booleanToHclTerraform(this._repoTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
