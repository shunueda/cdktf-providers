// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryFederatedSbtRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set, you may view content such as HTML or Javadoc files directly from Artifactory.
  * This may not be safe and therefore requires strict content moderation to prevent malicious users from uploading content that may compromise security (e.g., cross-site scripting attacks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#archive_browsing_enabled DataArtifactoryFederatedSbtRepository#archive_browsing_enabled}
  */
  readonly archiveBrowsingEnabled?: boolean | cdktf.IResolvable;
  /**
  * When set, the repository does not participate in artifact resolution and new artifacts cannot be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#blacked_out DataArtifactoryFederatedSbtRepository#blacked_out}
  */
  readonly blackedOut?: boolean | cdktf.IResolvable;
  /**
  * When set, download requests to this repository will redirect the client to download the artifact directly from AWS CloudFront. Available in Enterprise+ and Edge licenses only. Default value is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#cdn_redirect DataArtifactoryFederatedSbtRepository#cdn_redirect}
  */
  readonly cdnRedirect?: boolean | cdktf.IResolvable;
  /**
  * Checksum policy determines how Artifactory behaves when a client checksum for a deployed resource is missing or conflicts with the locally calculated checksum (bad checksum). Options are: "client-checksums", or "server-generated-checksums". Default: "client-checksums"\n For more details, please refer to Checksum Policy - https://www.jfrog.com/confluence/display/JFROG/Local+Repositories#LocalRepositories-ChecksumPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#checksum_policy_type DataArtifactoryFederatedSbtRepository#checksum_policy_type}
  */
  readonly checksumPolicyType?: string;
  /**
  * Delete all federated members on `terraform destroy` if set to `true`. Caution: it will delete all the repositories in the federation on other Artifactory instances. Set `access_token` attribute if Access Federation for access tokens is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#cleanup_on_delete DataArtifactoryFederatedSbtRepository#cleanup_on_delete}
  */
  readonly cleanupOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Public description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#description DataArtifactoryFederatedSbtRepository#description}
  */
  readonly description?: string;
  /**
  * When set to `true`, the proxy is disabled, and not returned in the API response body. If there is a default proxy set for the Artifactory instance, it will be ignored, too. Introduced since Artifactory 7.41.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#disable_proxy DataArtifactoryFederatedSbtRepository#disable_proxy}
  */
  readonly disableProxy?: boolean | cdktf.IResolvable;
  /**
  * When set, download requests to this repository will redirect the client to download the artifact directly from the cloud storage provider. Available in Enterprise+ and Edge licenses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#download_direct DataArtifactoryFederatedSbtRepository#download_direct}
  */
  readonly downloadDirect?: boolean | cdktf.IResolvable;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of `x/y/** /z/*`.By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#excludes_pattern DataArtifactoryFederatedSbtRepository#excludes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludesPattern?: string;
  /**
  * If set, Artifactory allows you to deploy release artifacts into this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#handle_releases DataArtifactoryFederatedSbtRepository#handle_releases}
  */
  readonly handleReleases?: boolean | cdktf.IResolvable;
  /**
  * If set, Artifactory allows you to deploy snapshot artifacts into this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#handle_snapshots DataArtifactoryFederatedSbtRepository#handle_snapshots}
  */
  readonly handleSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#id DataArtifactoryFederatedSbtRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of `x/y/** /z/*`. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (`** /*`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#includes_pattern DataArtifactoryFederatedSbtRepository#includes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includesPattern?: string;
  /**
  * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It cannot contain spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#key DataArtifactoryFederatedSbtRepository#key}
  */
  readonly key: string;
  /**
  * The maximum number of unique snapshots of a single artifact to store.
  * Once the number of snapshots exceeds this setting, older versions are removed.
  * A value of 0 (default) indicates there is no limit, and unique snapshots are not cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#max_unique_snapshots DataArtifactoryFederatedSbtRepository#max_unique_snapshots}
  */
  readonly maxUniqueSnapshots?: number;
  /**
  * Internal description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#notes DataArtifactoryFederatedSbtRepository#notes}
  */
  readonly notes?: string;
  /**
  * Setting repositories with priority will cause metadata to be merged only from repositories set with this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#priority_resolution DataArtifactoryFederatedSbtRepository#priority_resolution}
  */
  readonly priorityResolution?: boolean | cdktf.IResolvable;
  /**
  * Before Artifactory 7.53.1, up to 2 values (`DEV` and `PROD`) are allowed. From 7.53.1 to 7.107.1, only one value is allowed. From 7.107.1, multiple values are allowed.The attribute should only be used if the repository is already assigned to the existing project. If not, the attribute will be ignored by Artifactory, but will remain in the Terraform state, which will create state drift during the update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#project_environments DataArtifactoryFederatedSbtRepository#project_environments}
  */
  readonly projectEnvironments?: string[];
  /**
  * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#project_key DataArtifactoryFederatedSbtRepository#project_key}
  */
  readonly projectKey?: string;
  /**
  * List of property set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#property_sets DataArtifactoryFederatedSbtRepository#property_sets}
  */
  readonly propertySets?: string[];
  /**
  * Proxy key from Artifactory Proxies settings. Can't be set if `disable_proxy = true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#proxy DataArtifactoryFederatedSbtRepository#proxy}
  */
  readonly proxy?: string;
  /**
  * Repository layout key for the federated repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#repo_layout_ref DataArtifactoryFederatedSbtRepository#repo_layout_ref}
  */
  readonly repoLayoutRef?: string;
  /**
  * Specifies the naming convention for Maven SNAPSHOT versions.
  * The options are -
  * unique: Version number is based on a time-stamp (default)
  * non-unique: Version number uses a self-overriding naming pattern of artifactId-version-SNAPSHOT.type
  * deployer: Respects the settings in the Maven client that is deploying the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#snapshot_version_behavior DataArtifactoryFederatedSbtRepository#snapshot_version_behavior}
  */
  readonly snapshotVersionBehavior?: string;
  /**
  * By default, Artifactory keeps your repositories healthy by refusing POMs with incorrect coordinates (path).
  *   If the groupId:artifactId:version information inside the POM does not match the deployed path, Artifactory rejects the deployment with a "409 Conflict" error.
  *   You can disable this behavior by setting the Suppress POM Consistency Checks checkbox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#suppress_pom_consistency_checks DataArtifactoryFederatedSbtRepository#suppress_pom_consistency_checks}
  */
  readonly suppressPomConsistencyChecks?: boolean | cdktf.IResolvable;
  /**
  * Enable Indexing In Xray. Repository will be indexed with the default retention period. You will be able to change it via Xray settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#xray_index DataArtifactoryFederatedSbtRepository#xray_index}
  */
  readonly xrayIndex?: boolean | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#member DataArtifactoryFederatedSbtRepository#member}
  */
  readonly member?: DataArtifactoryFederatedSbtRepositoryMember[] | cdktf.IResolvable;
}
export interface DataArtifactoryFederatedSbtRepositoryMember {
  /**
  * Admin access token for this member Artifactory instance. Used in conjunction with `cleanup_on_delete` attribute when Access Federation for access tokens is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#access_token DataArtifactoryFederatedSbtRepository#access_token}
  */
  readonly accessToken?: string;
  /**
  * Represents the active state of the federated member. It is supported to change the enabled status of my own member. The config will be updated on the other federated members automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#enabled DataArtifactoryFederatedSbtRepository#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Full URL to ending with the repositoryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#url DataArtifactoryFederatedSbtRepository#url}
  */
  readonly url: string;
}

export function dataArtifactoryFederatedSbtRepositoryMemberToTerraform(struct?: DataArtifactoryFederatedSbtRepositoryMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataArtifactoryFederatedSbtRepositoryMemberToHclTerraform(struct?: DataArtifactoryFederatedSbtRepositoryMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryFederatedSbtRepositoryMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryFederatedSbtRepositoryMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataArtifactoryFederatedSbtRepositoryMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._enabled = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._enabled = value.enabled;
      this._url = value.url;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // enabled - computed: false, optional: false, required: true
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
}

export class DataArtifactoryFederatedSbtRepositoryMemberList extends cdktf.ComplexList {
  public internalValue? : DataArtifactoryFederatedSbtRepositoryMember[] | cdktf.IResolvable

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
  public get(index: number): DataArtifactoryFederatedSbtRepositoryMemberOutputReference {
    return new DataArtifactoryFederatedSbtRepositoryMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository artifactory_federated_sbt_repository}
*/
export class DataArtifactoryFederatedSbtRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_federated_sbt_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryFederatedSbtRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryFederatedSbtRepository to import
  * @param importFromId The id of the existing DataArtifactoryFederatedSbtRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryFederatedSbtRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_federated_sbt_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/data-sources/federated_sbt_repository artifactory_federated_sbt_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryFederatedSbtRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryFederatedSbtRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_federated_sbt_repository',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveBrowsingEnabled = config.archiveBrowsingEnabled;
    this._blackedOut = config.blackedOut;
    this._cdnRedirect = config.cdnRedirect;
    this._checksumPolicyType = config.checksumPolicyType;
    this._cleanupOnDelete = config.cleanupOnDelete;
    this._description = config.description;
    this._disableProxy = config.disableProxy;
    this._downloadDirect = config.downloadDirect;
    this._excludesPattern = config.excludesPattern;
    this._handleReleases = config.handleReleases;
    this._handleSnapshots = config.handleSnapshots;
    this._id = config.id;
    this._includesPattern = config.includesPattern;
    this._key = config.key;
    this._maxUniqueSnapshots = config.maxUniqueSnapshots;
    this._notes = config.notes;
    this._priorityResolution = config.priorityResolution;
    this._projectEnvironments = config.projectEnvironments;
    this._projectKey = config.projectKey;
    this._propertySets = config.propertySets;
    this._proxy = config.proxy;
    this._repoLayoutRef = config.repoLayoutRef;
    this._snapshotVersionBehavior = config.snapshotVersionBehavior;
    this._suppressPomConsistencyChecks = config.suppressPomConsistencyChecks;
    this._xrayIndex = config.xrayIndex;
    this._member.internalValue = config.member;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_browsing_enabled - computed: false, optional: true, required: false
  private _archiveBrowsingEnabled?: boolean | cdktf.IResolvable; 
  public get archiveBrowsingEnabled() {
    return this.getBooleanAttribute('archive_browsing_enabled');
  }
  public set archiveBrowsingEnabled(value: boolean | cdktf.IResolvable) {
    this._archiveBrowsingEnabled = value;
  }
  public resetArchiveBrowsingEnabled() {
    this._archiveBrowsingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBrowsingEnabledInput() {
    return this._archiveBrowsingEnabled;
  }

  // blacked_out - computed: false, optional: true, required: false
  private _blackedOut?: boolean | cdktf.IResolvable; 
  public get blackedOut() {
    return this.getBooleanAttribute('blacked_out');
  }
  public set blackedOut(value: boolean | cdktf.IResolvable) {
    this._blackedOut = value;
  }
  public resetBlackedOut() {
    this._blackedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackedOutInput() {
    return this._blackedOut;
  }

  // cdn_redirect - computed: false, optional: true, required: false
  private _cdnRedirect?: boolean | cdktf.IResolvable; 
  public get cdnRedirect() {
    return this.getBooleanAttribute('cdn_redirect');
  }
  public set cdnRedirect(value: boolean | cdktf.IResolvable) {
    this._cdnRedirect = value;
  }
  public resetCdnRedirect() {
    this._cdnRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnRedirectInput() {
    return this._cdnRedirect;
  }

  // checksum_policy_type - computed: false, optional: true, required: false
  private _checksumPolicyType?: string; 
  public get checksumPolicyType() {
    return this.getStringAttribute('checksum_policy_type');
  }
  public set checksumPolicyType(value: string) {
    this._checksumPolicyType = value;
  }
  public resetChecksumPolicyType() {
    this._checksumPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumPolicyTypeInput() {
    return this._checksumPolicyType;
  }

  // cleanup_on_delete - computed: false, optional: true, required: false
  private _cleanupOnDelete?: boolean | cdktf.IResolvable; 
  public get cleanupOnDelete() {
    return this.getBooleanAttribute('cleanup_on_delete');
  }
  public set cleanupOnDelete(value: boolean | cdktf.IResolvable) {
    this._cleanupOnDelete = value;
  }
  public resetCleanupOnDelete() {
    this._cleanupOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnDeleteInput() {
    return this._cleanupOnDelete;
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

  // disable_proxy - computed: false, optional: true, required: false
  private _disableProxy?: boolean | cdktf.IResolvable; 
  public get disableProxy() {
    return this.getBooleanAttribute('disable_proxy');
  }
  public set disableProxy(value: boolean | cdktf.IResolvable) {
    this._disableProxy = value;
  }
  public resetDisableProxy() {
    this._disableProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyInput() {
    return this._disableProxy;
  }

  // download_direct - computed: false, optional: true, required: false
  private _downloadDirect?: boolean | cdktf.IResolvable; 
  public get downloadDirect() {
    return this.getBooleanAttribute('download_direct');
  }
  public set downloadDirect(value: boolean | cdktf.IResolvable) {
    this._downloadDirect = value;
  }
  public resetDownloadDirect() {
    this._downloadDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadDirectInput() {
    return this._downloadDirect;
  }

  // excludes_pattern - computed: false, optional: true, required: false
  private _excludesPattern?: string; 
  public get excludesPattern() {
    return this.getStringAttribute('excludes_pattern');
  }
  public set excludesPattern(value: string) {
    this._excludesPattern = value;
  }
  public resetExcludesPattern() {
    this._excludesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesPatternInput() {
    return this._excludesPattern;
  }

  // handle_releases - computed: false, optional: true, required: false
  private _handleReleases?: boolean | cdktf.IResolvable; 
  public get handleReleases() {
    return this.getBooleanAttribute('handle_releases');
  }
  public set handleReleases(value: boolean | cdktf.IResolvable) {
    this._handleReleases = value;
  }
  public resetHandleReleases() {
    this._handleReleases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleReleasesInput() {
    return this._handleReleases;
  }

  // handle_snapshots - computed: false, optional: true, required: false
  private _handleSnapshots?: boolean | cdktf.IResolvable; 
  public get handleSnapshots() {
    return this.getBooleanAttribute('handle_snapshots');
  }
  public set handleSnapshots(value: boolean | cdktf.IResolvable) {
    this._handleSnapshots = value;
  }
  public resetHandleSnapshots() {
    this._handleSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleSnapshotsInput() {
    return this._handleSnapshots;
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

  // includes_pattern - computed: false, optional: true, required: false
  private _includesPattern?: string; 
  public get includesPattern() {
    return this.getStringAttribute('includes_pattern');
  }
  public set includesPattern(value: string) {
    this._includesPattern = value;
  }
  public resetIncludesPattern() {
    this._includesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesPatternInput() {
    return this._includesPattern;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // max_unique_snapshots - computed: false, optional: true, required: false
  private _maxUniqueSnapshots?: number; 
  public get maxUniqueSnapshots() {
    return this.getNumberAttribute('max_unique_snapshots');
  }
  public set maxUniqueSnapshots(value: number) {
    this._maxUniqueSnapshots = value;
  }
  public resetMaxUniqueSnapshots() {
    this._maxUniqueSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUniqueSnapshotsInput() {
    return this._maxUniqueSnapshots;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // priority_resolution - computed: false, optional: true, required: false
  private _priorityResolution?: boolean | cdktf.IResolvable; 
  public get priorityResolution() {
    return this.getBooleanAttribute('priority_resolution');
  }
  public set priorityResolution(value: boolean | cdktf.IResolvable) {
    this._priorityResolution = value;
  }
  public resetPriorityResolution() {
    this._priorityResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityResolutionInput() {
    return this._priorityResolution;
  }

  // project_environments - computed: true, optional: true, required: false
  private _projectEnvironments?: string[]; 
  public get projectEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('project_environments'));
  }
  public set projectEnvironments(value: string[]) {
    this._projectEnvironments = value;
  }
  public resetProjectEnvironments() {
    this._projectEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectEnvironmentsInput() {
    return this._projectEnvironments;
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

  // property_sets - computed: false, optional: true, required: false
  private _propertySets?: string[]; 
  public get propertySets() {
    return cdktf.Fn.tolist(this.getListAttribute('property_sets'));
  }
  public set propertySets(value: string[]) {
    this._propertySets = value;
  }
  public resetPropertySets() {
    this._propertySets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertySetsInput() {
    return this._propertySets;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // repo_layout_ref - computed: false, optional: true, required: false
  private _repoLayoutRef?: string; 
  public get repoLayoutRef() {
    return this.getStringAttribute('repo_layout_ref');
  }
  public set repoLayoutRef(value: string) {
    this._repoLayoutRef = value;
  }
  public resetRepoLayoutRef() {
    this._repoLayoutRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoLayoutRefInput() {
    return this._repoLayoutRef;
  }

  // snapshot_version_behavior - computed: false, optional: true, required: false
  private _snapshotVersionBehavior?: string; 
  public get snapshotVersionBehavior() {
    return this.getStringAttribute('snapshot_version_behavior');
  }
  public set snapshotVersionBehavior(value: string) {
    this._snapshotVersionBehavior = value;
  }
  public resetSnapshotVersionBehavior() {
    this._snapshotVersionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotVersionBehaviorInput() {
    return this._snapshotVersionBehavior;
  }

  // suppress_pom_consistency_checks - computed: false, optional: true, required: false
  private _suppressPomConsistencyChecks?: boolean | cdktf.IResolvable; 
  public get suppressPomConsistencyChecks() {
    return this.getBooleanAttribute('suppress_pom_consistency_checks');
  }
  public set suppressPomConsistencyChecks(value: boolean | cdktf.IResolvable) {
    this._suppressPomConsistencyChecks = value;
  }
  public resetSuppressPomConsistencyChecks() {
    this._suppressPomConsistencyChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressPomConsistencyChecksInput() {
    return this._suppressPomConsistencyChecks;
  }

  // xray_index - computed: false, optional: true, required: false
  private _xrayIndex?: boolean | cdktf.IResolvable; 
  public get xrayIndex() {
    return this.getBooleanAttribute('xray_index');
  }
  public set xrayIndex(value: boolean | cdktf.IResolvable) {
    this._xrayIndex = value;
  }
  public resetXrayIndex() {
    this._xrayIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayIndexInput() {
    return this._xrayIndex;
  }

  // member - computed: false, optional: true, required: false
  private _member = new DataArtifactoryFederatedSbtRepositoryMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: DataArtifactoryFederatedSbtRepositoryMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_browsing_enabled: cdktf.booleanToTerraform(this._archiveBrowsingEnabled),
      blacked_out: cdktf.booleanToTerraform(this._blackedOut),
      cdn_redirect: cdktf.booleanToTerraform(this._cdnRedirect),
      checksum_policy_type: cdktf.stringToTerraform(this._checksumPolicyType),
      cleanup_on_delete: cdktf.booleanToTerraform(this._cleanupOnDelete),
      description: cdktf.stringToTerraform(this._description),
      disable_proxy: cdktf.booleanToTerraform(this._disableProxy),
      download_direct: cdktf.booleanToTerraform(this._downloadDirect),
      excludes_pattern: cdktf.stringToTerraform(this._excludesPattern),
      handle_releases: cdktf.booleanToTerraform(this._handleReleases),
      handle_snapshots: cdktf.booleanToTerraform(this._handleSnapshots),
      id: cdktf.stringToTerraform(this._id),
      includes_pattern: cdktf.stringToTerraform(this._includesPattern),
      key: cdktf.stringToTerraform(this._key),
      max_unique_snapshots: cdktf.numberToTerraform(this._maxUniqueSnapshots),
      notes: cdktf.stringToTerraform(this._notes),
      priority_resolution: cdktf.booleanToTerraform(this._priorityResolution),
      project_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectEnvironments),
      project_key: cdktf.stringToTerraform(this._projectKey),
      property_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertySets),
      proxy: cdktf.stringToTerraform(this._proxy),
      repo_layout_ref: cdktf.stringToTerraform(this._repoLayoutRef),
      snapshot_version_behavior: cdktf.stringToTerraform(this._snapshotVersionBehavior),
      suppress_pom_consistency_checks: cdktf.booleanToTerraform(this._suppressPomConsistencyChecks),
      xray_index: cdktf.booleanToTerraform(this._xrayIndex),
      member: cdktf.listMapper(dataArtifactoryFederatedSbtRepositoryMemberToTerraform, true)(this._member.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_browsing_enabled: {
        value: cdktf.booleanToHclTerraform(this._archiveBrowsingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blacked_out: {
        value: cdktf.booleanToHclTerraform(this._blackedOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdn_redirect: {
        value: cdktf.booleanToHclTerraform(this._cdnRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      checksum_policy_type: {
        value: cdktf.stringToHclTerraform(this._checksumPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup_on_delete: {
        value: cdktf.booleanToHclTerraform(this._cleanupOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_proxy: {
        value: cdktf.booleanToHclTerraform(this._disableProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      download_direct: {
        value: cdktf.booleanToHclTerraform(this._downloadDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excludes_pattern: {
        value: cdktf.stringToHclTerraform(this._excludesPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handle_releases: {
        value: cdktf.booleanToHclTerraform(this._handleReleases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      handle_snapshots: {
        value: cdktf.booleanToHclTerraform(this._handleSnapshots),
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
      includes_pattern: {
        value: cdktf.stringToHclTerraform(this._includesPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_unique_snapshots: {
        value: cdktf.numberToHclTerraform(this._maxUniqueSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_resolution: {
        value: cdktf.booleanToHclTerraform(this._priorityResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectEnvironments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertySets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_layout_ref: {
        value: cdktf.stringToHclTerraform(this._repoLayoutRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_version_behavior: {
        value: cdktf.stringToHclTerraform(this._snapshotVersionBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_pom_consistency_checks: {
        value: cdktf.booleanToHclTerraform(this._suppressPomConsistencyChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      xray_index: {
        value: cdktf.booleanToHclTerraform(this._xrayIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member: {
        value: cdktf.listMapperHcl(dataArtifactoryFederatedSbtRepositoryMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataArtifactoryFederatedSbtRepositoryMemberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
