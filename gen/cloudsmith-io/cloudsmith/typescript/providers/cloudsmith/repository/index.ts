// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. This can be useful for tooling such as SBT where the authentication realm is used to distinguish and disambiguate credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#contextual_auth_realm Repository#contextual_auth_realm}
  */
  readonly contextualAuthRealm?: boolean | cdktf.IResolvable;
  /**
  * If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. This takes precedence over privileges configured in the 'Access Controls' section of the repository, and any inherited from the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#copy_own Repository#copy_own}
  */
  readonly copyOwn?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to copy packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific copy setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#copy_packages Repository#copy_packages}
  */
  readonly copyPackages?: string;
  /**
  * This defines the default level of privilege that all of your organization members have for this repository. This does not include collaborators, but applies to any member of the org regardless of their own membership role (i.e. it applies to owners, managers and members). Be careful if setting this to admin, because any member will be able to change settings.Valid values include: `Admin`, `Read`, `Write`, `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#default_privilege Repository#default_privilege}
  */
  readonly defaultPrivilege?: string;
  /**
  * If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. This takes precedence over privileges configured in the 'Access Controls' section of the repository, and any inherited from the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#delete_own Repository#delete_own}
  */
  readonly deleteOwn?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to delete packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific delete setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#delete_packages Repository#delete_packages}
  */
  readonly deletePackages?: string;
  /**
  * A description of the repository's purpose/contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#description Repository#description}
  */
  readonly description?: string;
  /**
  * If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. This allows unlimited extension of the lifetime of access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#docker_refresh_tokens_enabled Repository#docker_refresh_tokens_enabled}
  */
  readonly dockerRefreshTokensEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#id Repository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. Note that it is recommended you keep this enabled unless the synchronisation time is significantly impacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#index_files Repository#index_files}
  */
  readonly indexFiles?: boolean | cdktf.IResolvable;
  /**
  * If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. This takes precedence over privileges configured in the 'Access Controls' section of the repository, and any inherited from the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#move_own Repository#move_own}
  */
  readonly moveOwn?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to move packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific move setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#move_packages Repository#move_packages}
  */
  readonly movePackages?: string;
  /**
  * A descriptive name for the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#name Repository#name}
  */
  readonly name: string;
  /**
  * Namespace to which this repository belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#namespace Repository#namespace}
  */
  readonly namespace: string;
  /**
  * If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. If there is at least one version for a package, others will not be proxied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#proxy_npmjs Repository#proxy_npmjs}
  */
  readonly proxyNpmjs?: boolean | cdktf.IResolvable;
  /**
  * If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. If there is at least one version for a package, others will not be proxied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#proxy_pypi Repository#proxy_pypi}
  */
  readonly proxyPypi?: boolean | cdktf.IResolvable;
  /**
  * If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#raw_package_index_enabled Repository#raw_package_index_enabled}
  */
  readonly rawPackageIndexEnabled?: boolean | cdktf.IResolvable;
  /**
  * If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#raw_package_index_signatures_enabled Repository#raw_package_index_signatures_enabled}
  */
  readonly rawPackageIndexSignaturesEnabled?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to republish packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific republish setting. Please note that the user still requires the privilege to delete packages that will be replaced by the new package; otherwise the republish will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#replace_packages Repository#replace_packages}
  */
  readonly replacePackages?: string;
  /**
  * If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. same version) by default. This only applies if the user has the required privilege for the republishing AND has the required privilege to delete existing packages that they don't own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#replace_packages_by_default Repository#replace_packages_by_default}
  */
  readonly replacePackagesByDefault?: boolean | cdktf.IResolvable;
  /**
  * The repository type changes how it is accessed and billed. Private repositories can only be used on paid plans, but are visible only to you or authorised delegates. Public repositories are free to use on all plans and visible to all Cloudsmith users.Valid values include: `Private` or `Public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#repository_type Repository#repository_type}
  */
  readonly repositoryType?: string;
  /**
  * If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. This takes precedence over privileges configured in the 'Access Controls' section of the repository, and any inherited from the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#resync_own Repository#resync_own}
  */
  readonly resyncOwn?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to resync packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific resync setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#resync_packages Repository#resync_packages}
  */
  readonly resyncPackages?: string;
  /**
  * If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. This takes precedence over privileges configured in the 'Access Controls' section of the repository, and any inherited from the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#scan_own Repository#scan_own}
  */
  readonly scanOwn?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to scan packages. Unless the package was uploaded by that user, in which the permission may be overridden by the user-specific scan setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#scan_packages Repository#scan_packages}
  */
  readonly scanPackages?: string;
  /**
  * If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. Otherwise, help will only be shown for packages that are in the repository. For example, if you have uploaded only NuGet packages, then the Set Me Up help for NuGet packages will be shown only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#show_setup_all Repository#show_setup_all}
  */
  readonly showSetupAll?: boolean | cdktf.IResolvable;
  /**
  * The slug identifies the repository in URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#slug Repository#slug}
  */
  readonly slug?: string;
  /**
  * The Cloudsmith region in which package files are stored.Supported regions include: Sydney, Australia (au-sydney),Singapore (sg-singapore), Montreal, Canada (ca-montreal), Frankfurt, Germany (de-frankfurt), Oregon,United States (us-oregon), Ohio, United States (us-ohio), Dublin, Ireland (ie-dublin) (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#storage_region Repository#storage_region}
  */
  readonly storageRegion?: string;
  /**
  * If checked, npm packages will be validated strictly to ensure the package matches specifcation. You can turn this off if you have packages that are old or otherwise mildly off-spec, but we can't guarantee the packages will work with npm-cli or other tooling correctly. Turn off at your own risk!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#strict_npm_validation Repository#strict_npm_validation}
  */
  readonly strictNpmValidation?: boolean | cdktf.IResolvable;
  /**
  * If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. Note that if unchecked, a repository containing ONLY pre-release versions, will have no version marked latest which may cause incompatibility with native tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#tag_pre_releases_as_latest Repository#tag_pre_releases_as_latest}
  */
  readonly tagPreReleasesAsLatest?: boolean | cdktf.IResolvable;
  /**
  * If checked, a 'Label' field will be present in Debian-based repositories. It will contain a string that identifies the entitlement token used to authenticate the repository, in the form of 'source=t-'; or 'source=none' if no token was used. You can use this to help with pinning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#use_debian_labels Repository#use_debian_labels}
  */
  readonly useDebianLabels?: boolean | cdktf.IResolvable;
  /**
  * If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. If unchecked, dependencies with unspecified "registry" values will be assumed to be available in the registry being uploaded to. Uncheck this if you want to ensure that dependencies are only ever installed from Cloudsmith unless explicitly specified as belong to another registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#use_default_cargo_upstream Repository#use_default_cargo_upstream}
  */
  readonly useDefaultCargoUpstream?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. If a user does not have the permission, they will only be able to download packages using other credentials, such as email/password via basic authentication. Use this if you want to force users to only use their user-based token, which is tied to their access (if removed, they can't use it). Possible values: Read, Write, Admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#use_entitlements_privilege Repository#use_entitlements_privilege}
  */
  readonly useEntitlementsPrivilege?: string;
  /**
  * If checked, noarch packages (if supported) are enabled in installations/configurations. A noarch package is one that is not tied to specific system architecture (like i686).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#use_noarch_packages Repository#use_noarch_packages}
  */
  readonly useNoarchPackages?: boolean | cdktf.IResolvable;
  /**
  * If checked, source packages (if supported) are enabled in installations/configurations. A source package is one that contains source code rather than built binaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#use_source_packages Repository#use_source_packages}
  */
  readonly useSourcePackages?: boolean | cdktf.IResolvable;
  /**
  * If checked, vulnerability scanning will be enabled for all supported packages within this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#use_vulnerability_scanning Repository#use_vulnerability_scanning}
  */
  readonly useVulnerabilityScanning?: boolean | cdktf.IResolvable;
  /**
  * If checked, users can use and manage their own user-specific entitlement token for the repository (if private). Otherwise, user-specific entitlements are disabled for all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#user_entitlements_enabled Repository#user_entitlements_enabled}
  */
  readonly userEntitlementsEnabled?: boolean | cdktf.IResolvable;
  /**
  * This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. If a user does not have the permission, they won't be able to view any statistics, either via the UI, API or CLI.Valid values include: `Admin`, `Write`, `Read`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#view_statistics Repository#view_statistics}
  */
  readonly viewStatistics?: string;
  /**
  * If true, terraform will wait for a repository to be permanently deleted before finishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#wait_for_deletion Repository#wait_for_deletion}
  */
  readonly waitForDeletion?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository cloudsmith_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository cloudsmith_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_repository',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66',
        providerVersionConstraint: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextualAuthRealm = config.contextualAuthRealm;
    this._copyOwn = config.copyOwn;
    this._copyPackages = config.copyPackages;
    this._defaultPrivilege = config.defaultPrivilege;
    this._deleteOwn = config.deleteOwn;
    this._deletePackages = config.deletePackages;
    this._description = config.description;
    this._dockerRefreshTokensEnabled = config.dockerRefreshTokensEnabled;
    this._id = config.id;
    this._indexFiles = config.indexFiles;
    this._moveOwn = config.moveOwn;
    this._movePackages = config.movePackages;
    this._name = config.name;
    this._namespace = config.namespace;
    this._proxyNpmjs = config.proxyNpmjs;
    this._proxyPypi = config.proxyPypi;
    this._rawPackageIndexEnabled = config.rawPackageIndexEnabled;
    this._rawPackageIndexSignaturesEnabled = config.rawPackageIndexSignaturesEnabled;
    this._replacePackages = config.replacePackages;
    this._replacePackagesByDefault = config.replacePackagesByDefault;
    this._repositoryType = config.repositoryType;
    this._resyncOwn = config.resyncOwn;
    this._resyncPackages = config.resyncPackages;
    this._scanOwn = config.scanOwn;
    this._scanPackages = config.scanPackages;
    this._showSetupAll = config.showSetupAll;
    this._slug = config.slug;
    this._storageRegion = config.storageRegion;
    this._strictNpmValidation = config.strictNpmValidation;
    this._tagPreReleasesAsLatest = config.tagPreReleasesAsLatest;
    this._useDebianLabels = config.useDebianLabels;
    this._useDefaultCargoUpstream = config.useDefaultCargoUpstream;
    this._useEntitlementsPrivilege = config.useEntitlementsPrivilege;
    this._useNoarchPackages = config.useNoarchPackages;
    this._useSourcePackages = config.useSourcePackages;
    this._useVulnerabilityScanning = config.useVulnerabilityScanning;
    this._userEntitlementsEnabled = config.userEntitlementsEnabled;
    this._viewStatistics = config.viewStatistics;
    this._waitForDeletion = config.waitForDeletion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_url - computed: true, optional: false, required: false
  public get cdnUrl() {
    return this.getStringAttribute('cdn_url');
  }

  // contextual_auth_realm - computed: true, optional: true, required: false
  private _contextualAuthRealm?: boolean | cdktf.IResolvable; 
  public get contextualAuthRealm() {
    return this.getBooleanAttribute('contextual_auth_realm');
  }
  public set contextualAuthRealm(value: boolean | cdktf.IResolvable) {
    this._contextualAuthRealm = value;
  }
  public resetContextualAuthRealm() {
    this._contextualAuthRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualAuthRealmInput() {
    return this._contextualAuthRealm;
  }

  // copy_own - computed: true, optional: true, required: false
  private _copyOwn?: boolean | cdktf.IResolvable; 
  public get copyOwn() {
    return this.getBooleanAttribute('copy_own');
  }
  public set copyOwn(value: boolean | cdktf.IResolvable) {
    this._copyOwn = value;
  }
  public resetCopyOwn() {
    this._copyOwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyOwnInput() {
    return this._copyOwn;
  }

  // copy_packages - computed: true, optional: true, required: false
  private _copyPackages?: string; 
  public get copyPackages() {
    return this.getStringAttribute('copy_packages');
  }
  public set copyPackages(value: string) {
    this._copyPackages = value;
  }
  public resetCopyPackages() {
    this._copyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyPackagesInput() {
    return this._copyPackages;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_privilege - computed: true, optional: true, required: false
  private _defaultPrivilege?: string; 
  public get defaultPrivilege() {
    return this.getStringAttribute('default_privilege');
  }
  public set defaultPrivilege(value: string) {
    this._defaultPrivilege = value;
  }
  public resetDefaultPrivilege() {
    this._defaultPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrivilegeInput() {
    return this._defaultPrivilege;
  }

  // delete_own - computed: true, optional: true, required: false
  private _deleteOwn?: boolean | cdktf.IResolvable; 
  public get deleteOwn() {
    return this.getBooleanAttribute('delete_own');
  }
  public set deleteOwn(value: boolean | cdktf.IResolvable) {
    this._deleteOwn = value;
  }
  public resetDeleteOwn() {
    this._deleteOwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOwnInput() {
    return this._deleteOwn;
  }

  // delete_packages - computed: true, optional: true, required: false
  private _deletePackages?: string; 
  public get deletePackages() {
    return this.getStringAttribute('delete_packages');
  }
  public set deletePackages(value: string) {
    this._deletePackages = value;
  }
  public resetDeletePackages() {
    this._deletePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePackagesInput() {
    return this._deletePackages;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
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

  // docker_refresh_tokens_enabled - computed: true, optional: true, required: false
  private _dockerRefreshTokensEnabled?: boolean | cdktf.IResolvable; 
  public get dockerRefreshTokensEnabled() {
    return this.getBooleanAttribute('docker_refresh_tokens_enabled');
  }
  public set dockerRefreshTokensEnabled(value: boolean | cdktf.IResolvable) {
    this._dockerRefreshTokensEnabled = value;
  }
  public resetDockerRefreshTokensEnabled() {
    this._dockerRefreshTokensEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRefreshTokensEnabledInput() {
    return this._dockerRefreshTokensEnabled;
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

  // index_files - computed: true, optional: true, required: false
  private _indexFiles?: boolean | cdktf.IResolvable; 
  public get indexFiles() {
    return this.getBooleanAttribute('index_files');
  }
  public set indexFiles(value: boolean | cdktf.IResolvable) {
    this._indexFiles = value;
  }
  public resetIndexFiles() {
    this._indexFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFilesInput() {
    return this._indexFiles;
  }

  // is_open_source - computed: true, optional: false, required: false
  public get isOpenSource() {
    return this.getBooleanAttribute('is_open_source');
  }

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // move_own - computed: true, optional: true, required: false
  private _moveOwn?: boolean | cdktf.IResolvable; 
  public get moveOwn() {
    return this.getBooleanAttribute('move_own');
  }
  public set moveOwn(value: boolean | cdktf.IResolvable) {
    this._moveOwn = value;
  }
  public resetMoveOwn() {
    this._moveOwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveOwnInput() {
    return this._moveOwn;
  }

  // move_packages - computed: true, optional: true, required: false
  private _movePackages?: string; 
  public get movePackages() {
    return this.getStringAttribute('move_packages');
  }
  public set movePackages(value: string) {
    this._movePackages = value;
  }
  public resetMovePackages() {
    this._movePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movePackagesInput() {
    return this._movePackages;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespace_url - computed: true, optional: false, required: false
  public get namespaceUrl() {
    return this.getStringAttribute('namespace_url');
  }

  // proxy_npmjs - computed: true, optional: true, required: false
  private _proxyNpmjs?: boolean | cdktf.IResolvable; 
  public get proxyNpmjs() {
    return this.getBooleanAttribute('proxy_npmjs');
  }
  public set proxyNpmjs(value: boolean | cdktf.IResolvable) {
    this._proxyNpmjs = value;
  }
  public resetProxyNpmjs() {
    this._proxyNpmjs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNpmjsInput() {
    return this._proxyNpmjs;
  }

  // proxy_pypi - computed: true, optional: true, required: false
  private _proxyPypi?: boolean | cdktf.IResolvable; 
  public get proxyPypi() {
    return this.getBooleanAttribute('proxy_pypi');
  }
  public set proxyPypi(value: boolean | cdktf.IResolvable) {
    this._proxyPypi = value;
  }
  public resetProxyPypi() {
    this._proxyPypi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPypiInput() {
    return this._proxyPypi;
  }

  // raw_package_index_enabled - computed: true, optional: true, required: false
  private _rawPackageIndexEnabled?: boolean | cdktf.IResolvable; 
  public get rawPackageIndexEnabled() {
    return this.getBooleanAttribute('raw_package_index_enabled');
  }
  public set rawPackageIndexEnabled(value: boolean | cdktf.IResolvable) {
    this._rawPackageIndexEnabled = value;
  }
  public resetRawPackageIndexEnabled() {
    this._rawPackageIndexEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawPackageIndexEnabledInput() {
    return this._rawPackageIndexEnabled;
  }

  // raw_package_index_signatures_enabled - computed: true, optional: true, required: false
  private _rawPackageIndexSignaturesEnabled?: boolean | cdktf.IResolvable; 
  public get rawPackageIndexSignaturesEnabled() {
    return this.getBooleanAttribute('raw_package_index_signatures_enabled');
  }
  public set rawPackageIndexSignaturesEnabled(value: boolean | cdktf.IResolvable) {
    this._rawPackageIndexSignaturesEnabled = value;
  }
  public resetRawPackageIndexSignaturesEnabled() {
    this._rawPackageIndexSignaturesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawPackageIndexSignaturesEnabledInput() {
    return this._rawPackageIndexSignaturesEnabled;
  }

  // replace_packages - computed: true, optional: true, required: false
  private _replacePackages?: string; 
  public get replacePackages() {
    return this.getStringAttribute('replace_packages');
  }
  public set replacePackages(value: string) {
    this._replacePackages = value;
  }
  public resetReplacePackages() {
    this._replacePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePackagesInput() {
    return this._replacePackages;
  }

  // replace_packages_by_default - computed: true, optional: true, required: false
  private _replacePackagesByDefault?: boolean | cdktf.IResolvable; 
  public get replacePackagesByDefault() {
    return this.getBooleanAttribute('replace_packages_by_default');
  }
  public set replacePackagesByDefault(value: boolean | cdktf.IResolvable) {
    this._replacePackagesByDefault = value;
  }
  public resetReplacePackagesByDefault() {
    this._replacePackagesByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePackagesByDefaultInput() {
    return this._replacePackagesByDefault;
  }

  // repository_type - computed: false, optional: true, required: false
  private _repositoryType?: string; 
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }
  public set repositoryType(value: string) {
    this._repositoryType = value;
  }
  public resetRepositoryType() {
    this._repositoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryTypeInput() {
    return this._repositoryType;
  }

  // resync_own - computed: true, optional: true, required: false
  private _resyncOwn?: boolean | cdktf.IResolvable; 
  public get resyncOwn() {
    return this.getBooleanAttribute('resync_own');
  }
  public set resyncOwn(value: boolean | cdktf.IResolvable) {
    this._resyncOwn = value;
  }
  public resetResyncOwn() {
    this._resyncOwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncOwnInput() {
    return this._resyncOwn;
  }

  // resync_packages - computed: true, optional: true, required: false
  private _resyncPackages?: string; 
  public get resyncPackages() {
    return this.getStringAttribute('resync_packages');
  }
  public set resyncPackages(value: string) {
    this._resyncPackages = value;
  }
  public resetResyncPackages() {
    this._resyncPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncPackagesInput() {
    return this._resyncPackages;
  }

  // scan_own - computed: true, optional: true, required: false
  private _scanOwn?: boolean | cdktf.IResolvable; 
  public get scanOwn() {
    return this.getBooleanAttribute('scan_own');
  }
  public set scanOwn(value: boolean | cdktf.IResolvable) {
    this._scanOwn = value;
  }
  public resetScanOwn() {
    this._scanOwn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOwnInput() {
    return this._scanOwn;
  }

  // scan_packages - computed: true, optional: true, required: false
  private _scanPackages?: string; 
  public get scanPackages() {
    return this.getStringAttribute('scan_packages');
  }
  public set scanPackages(value: string) {
    this._scanPackages = value;
  }
  public resetScanPackages() {
    this._scanPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPackagesInput() {
    return this._scanPackages;
  }

  // self_html_url - computed: true, optional: false, required: false
  public get selfHtmlUrl() {
    return this.getStringAttribute('self_html_url');
  }

  // self_url - computed: true, optional: false, required: false
  public get selfUrl() {
    return this.getStringAttribute('self_url');
  }

  // show_setup_all - computed: true, optional: true, required: false
  private _showSetupAll?: boolean | cdktf.IResolvable; 
  public get showSetupAll() {
    return this.getBooleanAttribute('show_setup_all');
  }
  public set showSetupAll(value: boolean | cdktf.IResolvable) {
    this._showSetupAll = value;
  }
  public resetShowSetupAll() {
    this._showSetupAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSetupAllInput() {
    return this._showSetupAll;
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

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // storage_region - computed: true, optional: true, required: false
  private _storageRegion?: string; 
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }
  public set storageRegion(value: string) {
    this._storageRegion = value;
  }
  public resetStorageRegion() {
    this._storageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRegionInput() {
    return this._storageRegion;
  }

  // strict_npm_validation - computed: true, optional: true, required: false
  private _strictNpmValidation?: boolean | cdktf.IResolvable; 
  public get strictNpmValidation() {
    return this.getBooleanAttribute('strict_npm_validation');
  }
  public set strictNpmValidation(value: boolean | cdktf.IResolvable) {
    this._strictNpmValidation = value;
  }
  public resetStrictNpmValidation() {
    this._strictNpmValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictNpmValidationInput() {
    return this._strictNpmValidation;
  }

  // tag_pre_releases_as_latest - computed: false, optional: true, required: false
  private _tagPreReleasesAsLatest?: boolean | cdktf.IResolvable; 
  public get tagPreReleasesAsLatest() {
    return this.getBooleanAttribute('tag_pre_releases_as_latest');
  }
  public set tagPreReleasesAsLatest(value: boolean | cdktf.IResolvable) {
    this._tagPreReleasesAsLatest = value;
  }
  public resetTagPreReleasesAsLatest() {
    this._tagPreReleasesAsLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPreReleasesAsLatestInput() {
    return this._tagPreReleasesAsLatest;
  }

  // use_debian_labels - computed: true, optional: true, required: false
  private _useDebianLabels?: boolean | cdktf.IResolvable; 
  public get useDebianLabels() {
    return this.getBooleanAttribute('use_debian_labels');
  }
  public set useDebianLabels(value: boolean | cdktf.IResolvable) {
    this._useDebianLabels = value;
  }
  public resetUseDebianLabels() {
    this._useDebianLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDebianLabelsInput() {
    return this._useDebianLabels;
  }

  // use_default_cargo_upstream - computed: true, optional: true, required: false
  private _useDefaultCargoUpstream?: boolean | cdktf.IResolvable; 
  public get useDefaultCargoUpstream() {
    return this.getBooleanAttribute('use_default_cargo_upstream');
  }
  public set useDefaultCargoUpstream(value: boolean | cdktf.IResolvable) {
    this._useDefaultCargoUpstream = value;
  }
  public resetUseDefaultCargoUpstream() {
    this._useDefaultCargoUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultCargoUpstreamInput() {
    return this._useDefaultCargoUpstream;
  }

  // use_entitlements_privilege - computed: true, optional: true, required: false
  private _useEntitlementsPrivilege?: string; 
  public get useEntitlementsPrivilege() {
    return this.getStringAttribute('use_entitlements_privilege');
  }
  public set useEntitlementsPrivilege(value: string) {
    this._useEntitlementsPrivilege = value;
  }
  public resetUseEntitlementsPrivilege() {
    this._useEntitlementsPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEntitlementsPrivilegeInput() {
    return this._useEntitlementsPrivilege;
  }

  // use_noarch_packages - computed: true, optional: true, required: false
  private _useNoarchPackages?: boolean | cdktf.IResolvable; 
  public get useNoarchPackages() {
    return this.getBooleanAttribute('use_noarch_packages');
  }
  public set useNoarchPackages(value: boolean | cdktf.IResolvable) {
    this._useNoarchPackages = value;
  }
  public resetUseNoarchPackages() {
    this._useNoarchPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNoarchPackagesInput() {
    return this._useNoarchPackages;
  }

  // use_source_packages - computed: true, optional: true, required: false
  private _useSourcePackages?: boolean | cdktf.IResolvable; 
  public get useSourcePackages() {
    return this.getBooleanAttribute('use_source_packages');
  }
  public set useSourcePackages(value: boolean | cdktf.IResolvable) {
    this._useSourcePackages = value;
  }
  public resetUseSourcePackages() {
    this._useSourcePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourcePackagesInput() {
    return this._useSourcePackages;
  }

  // use_vulnerability_scanning - computed: true, optional: true, required: false
  private _useVulnerabilityScanning?: boolean | cdktf.IResolvable; 
  public get useVulnerabilityScanning() {
    return this.getBooleanAttribute('use_vulnerability_scanning');
  }
  public set useVulnerabilityScanning(value: boolean | cdktf.IResolvable) {
    this._useVulnerabilityScanning = value;
  }
  public resetUseVulnerabilityScanning() {
    this._useVulnerabilityScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVulnerabilityScanningInput() {
    return this._useVulnerabilityScanning;
  }

  // user_entitlements_enabled - computed: true, optional: true, required: false
  private _userEntitlementsEnabled?: boolean | cdktf.IResolvable; 
  public get userEntitlementsEnabled() {
    return this.getBooleanAttribute('user_entitlements_enabled');
  }
  public set userEntitlementsEnabled(value: boolean | cdktf.IResolvable) {
    this._userEntitlementsEnabled = value;
  }
  public resetUserEntitlementsEnabled() {
    this._userEntitlementsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEntitlementsEnabledInput() {
    return this._userEntitlementsEnabled;
  }

  // view_statistics - computed: true, optional: true, required: false
  private _viewStatistics?: string; 
  public get viewStatistics() {
    return this.getStringAttribute('view_statistics');
  }
  public set viewStatistics(value: string) {
    this._viewStatistics = value;
  }
  public resetViewStatistics() {
    this._viewStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewStatisticsInput() {
    return this._viewStatistics;
  }

  // wait_for_deletion - computed: false, optional: true, required: false
  private _waitForDeletion?: boolean | cdktf.IResolvable; 
  public get waitForDeletion() {
    return this.getBooleanAttribute('wait_for_deletion');
  }
  public set waitForDeletion(value: boolean | cdktf.IResolvable) {
    this._waitForDeletion = value;
  }
  public resetWaitForDeletion() {
    this._waitForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeletionInput() {
    return this._waitForDeletion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contextual_auth_realm: cdktf.booleanToTerraform(this._contextualAuthRealm),
      copy_own: cdktf.booleanToTerraform(this._copyOwn),
      copy_packages: cdktf.stringToTerraform(this._copyPackages),
      default_privilege: cdktf.stringToTerraform(this._defaultPrivilege),
      delete_own: cdktf.booleanToTerraform(this._deleteOwn),
      delete_packages: cdktf.stringToTerraform(this._deletePackages),
      description: cdktf.stringToTerraform(this._description),
      docker_refresh_tokens_enabled: cdktf.booleanToTerraform(this._dockerRefreshTokensEnabled),
      id: cdktf.stringToTerraform(this._id),
      index_files: cdktf.booleanToTerraform(this._indexFiles),
      move_own: cdktf.booleanToTerraform(this._moveOwn),
      move_packages: cdktf.stringToTerraform(this._movePackages),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      proxy_npmjs: cdktf.booleanToTerraform(this._proxyNpmjs),
      proxy_pypi: cdktf.booleanToTerraform(this._proxyPypi),
      raw_package_index_enabled: cdktf.booleanToTerraform(this._rawPackageIndexEnabled),
      raw_package_index_signatures_enabled: cdktf.booleanToTerraform(this._rawPackageIndexSignaturesEnabled),
      replace_packages: cdktf.stringToTerraform(this._replacePackages),
      replace_packages_by_default: cdktf.booleanToTerraform(this._replacePackagesByDefault),
      repository_type: cdktf.stringToTerraform(this._repositoryType),
      resync_own: cdktf.booleanToTerraform(this._resyncOwn),
      resync_packages: cdktf.stringToTerraform(this._resyncPackages),
      scan_own: cdktf.booleanToTerraform(this._scanOwn),
      scan_packages: cdktf.stringToTerraform(this._scanPackages),
      show_setup_all: cdktf.booleanToTerraform(this._showSetupAll),
      slug: cdktf.stringToTerraform(this._slug),
      storage_region: cdktf.stringToTerraform(this._storageRegion),
      strict_npm_validation: cdktf.booleanToTerraform(this._strictNpmValidation),
      tag_pre_releases_as_latest: cdktf.booleanToTerraform(this._tagPreReleasesAsLatest),
      use_debian_labels: cdktf.booleanToTerraform(this._useDebianLabels),
      use_default_cargo_upstream: cdktf.booleanToTerraform(this._useDefaultCargoUpstream),
      use_entitlements_privilege: cdktf.stringToTerraform(this._useEntitlementsPrivilege),
      use_noarch_packages: cdktf.booleanToTerraform(this._useNoarchPackages),
      use_source_packages: cdktf.booleanToTerraform(this._useSourcePackages),
      use_vulnerability_scanning: cdktf.booleanToTerraform(this._useVulnerabilityScanning),
      user_entitlements_enabled: cdktf.booleanToTerraform(this._userEntitlementsEnabled),
      view_statistics: cdktf.stringToTerraform(this._viewStatistics),
      wait_for_deletion: cdktf.booleanToTerraform(this._waitForDeletion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contextual_auth_realm: {
        value: cdktf.booleanToHclTerraform(this._contextualAuthRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_own: {
        value: cdktf.booleanToHclTerraform(this._copyOwn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_packages: {
        value: cdktf.stringToHclTerraform(this._copyPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_privilege: {
        value: cdktf.stringToHclTerraform(this._defaultPrivilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_own: {
        value: cdktf.booleanToHclTerraform(this._deleteOwn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_packages: {
        value: cdktf.stringToHclTerraform(this._deletePackages),
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
      docker_refresh_tokens_enabled: {
        value: cdktf.booleanToHclTerraform(this._dockerRefreshTokensEnabled),
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
      index_files: {
        value: cdktf.booleanToHclTerraform(this._indexFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      move_own: {
        value: cdktf.booleanToHclTerraform(this._moveOwn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      move_packages: {
        value: cdktf.stringToHclTerraform(this._movePackages),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_npmjs: {
        value: cdktf.booleanToHclTerraform(this._proxyNpmjs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_pypi: {
        value: cdktf.booleanToHclTerraform(this._proxyPypi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      raw_package_index_enabled: {
        value: cdktf.booleanToHclTerraform(this._rawPackageIndexEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      raw_package_index_signatures_enabled: {
        value: cdktf.booleanToHclTerraform(this._rawPackageIndexSignaturesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_packages: {
        value: cdktf.stringToHclTerraform(this._replacePackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replace_packages_by_default: {
        value: cdktf.booleanToHclTerraform(this._replacePackagesByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_type: {
        value: cdktf.stringToHclTerraform(this._repositoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resync_own: {
        value: cdktf.booleanToHclTerraform(this._resyncOwn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resync_packages: {
        value: cdktf.stringToHclTerraform(this._resyncPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_own: {
        value: cdktf.booleanToHclTerraform(this._scanOwn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_packages: {
        value: cdktf.stringToHclTerraform(this._scanPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_setup_all: {
        value: cdktf.booleanToHclTerraform(this._showSetupAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_region: {
        value: cdktf.stringToHclTerraform(this._storageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_npm_validation: {
        value: cdktf.booleanToHclTerraform(this._strictNpmValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_pre_releases_as_latest: {
        value: cdktf.booleanToHclTerraform(this._tagPreReleasesAsLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_debian_labels: {
        value: cdktf.booleanToHclTerraform(this._useDebianLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_cargo_upstream: {
        value: cdktf.booleanToHclTerraform(this._useDefaultCargoUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_entitlements_privilege: {
        value: cdktf.stringToHclTerraform(this._useEntitlementsPrivilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_noarch_packages: {
        value: cdktf.booleanToHclTerraform(this._useNoarchPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_source_packages: {
        value: cdktf.booleanToHclTerraform(this._useSourcePackages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_vulnerability_scanning: {
        value: cdktf.booleanToHclTerraform(this._useVulnerabilityScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_entitlements_enabled: {
        value: cdktf.booleanToHclTerraform(this._userEntitlementsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      view_statistics: {
        value: cdktf.stringToHclTerraform(this._viewStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_deletion: {
        value: cdktf.booleanToHclTerraform(this._waitForDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
