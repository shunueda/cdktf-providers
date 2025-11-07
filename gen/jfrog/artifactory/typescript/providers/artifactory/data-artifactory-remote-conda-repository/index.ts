// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryRemoteCondaRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'Lenient Host Authentication' in the UI. Allow credentials of this repository to be used on requests redirected to any other host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#allow_any_host_auth DataArtifactoryRemoteCondaRepository#allow_any_host_auth}
  */
  readonly allowAnyHostAuth?: boolean | cdktf.IResolvable;
  /**
  * When set, you may view content such as HTML or Javadoc files directly from Artifactory.
  * This may not be safe and therefore requires strict content moderation to prevent malicious users from uploading content that may compromise security (e.g., cross-site scripting attacks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#archive_browsing_enabled DataArtifactoryRemoteCondaRepository#archive_browsing_enabled}
  */
  readonly archiveBrowsingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of seconds the repository stays in assumed offline state after a connection error. At the end of this time, an online check is attempted in order to reset the offline status. A value of 0 means the repository is never assumed offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#assumed_offline_period_secs DataArtifactoryRemoteCondaRepository#assumed_offline_period_secs}
  */
  readonly assumedOfflinePeriodSecs?: number;
  /**
  * (A.K.A 'Ignore Repository' on the UI) When set, the repository or its local cache do not participate in artifact resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#blacked_out DataArtifactoryRemoteCondaRepository#blacked_out}
  */
  readonly blackedOut?: boolean | cdktf.IResolvable;
  /**
  * If set, artifacts will fail to download if a mismatch is detected between requested and received mimetype, according to the list specified in the system properties file under blockedMismatchingMimeTypes. You can override by adding mimetypes to the override list 'mismatching_mime_types_override_list'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#block_mismatching_mime_types DataArtifactoryRemoteCondaRepository#block_mismatching_mime_types}
  */
  readonly blockMismatchingMimeTypes?: boolean | cdktf.IResolvable;
  /**
  * Before caching an artifact, Artifactory first sends a HEAD request to the remote resource. In some remote resources, HEAD requests are disallowed and therefore rejected, even though downloading the artifact is allowed. When checked, Artifactory will bypass the HEAD request and cache the artifact directly using a GET request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#bypass_head_requests DataArtifactoryRemoteCondaRepository#bypass_head_requests}
  */
  readonly bypassHeadRequests?: boolean | cdktf.IResolvable;
  /**
  * When set, download requests to this repository will redirect the client to download the artifact directly from AWS CloudFront. Available in Enterprise+ and Edge licenses only. Default value is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#cdn_redirect DataArtifactoryRemoteCondaRepository#cdn_redirect}
  */
  readonly cdnRedirect?: boolean | cdktf.IResolvable;
  /**
  * Client TLS certificate name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#client_tls_certificate DataArtifactoryRemoteCondaRepository#client_tls_certificate}
  */
  readonly clientTlsCertificate?: string;
  /**
  * Public description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#description DataArtifactoryRemoteCondaRepository#description}
  */
  readonly description?: string;
  /**
  * When set to `true`, the proxy is disabled, and not returned in the API response body. If there is a default proxy set for the Artifactory instance, it will be ignored, too. Introduced since Artifactory 7.41.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#disable_proxy DataArtifactoryRemoteCondaRepository#disable_proxy}
  */
  readonly disableProxy?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable URL normalization, default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#disable_url_normalization DataArtifactoryRemoteCondaRepository#disable_url_normalization}
  */
  readonly disableUrlNormalization?: boolean | cdktf.IResolvable;
  /**
  * When set, download requests to this repository will redirect the client to download the artifact directly from the cloud storage provider. Available in Enterprise+ and Edge licenses only. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#download_direct DataArtifactoryRemoteCondaRepository#download_direct}
  */
  readonly downloadDirect?: boolean | cdktf.IResolvable;
  /**
  * Enables cookie management if the remote repository uses cookies to manage client state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#enable_cookie_management DataArtifactoryRemoteCondaRepository#enable_cookie_management}
  */
  readonly enableCookieManagement?: boolean | cdktf.IResolvable;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of `x/y/** /z/*`.By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#excludes_pattern DataArtifactoryRemoteCondaRepository#excludes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludesPattern?: string;
  /**
  * When set, Artifactory will return an error to the client that causes the build to fail if there is a failure to communicate with this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#hard_fail DataArtifactoryRemoteCondaRepository#hard_fail}
  */
  readonly hardFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#id DataArtifactoryRemoteCondaRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of `x/y/** /z/*`. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (`** /*`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#includes_pattern DataArtifactoryRemoteCondaRepository#includes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includesPattern?: string;
  /**
  * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It cannot contain spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#key DataArtifactoryRemoteCondaRepository#key}
  */
  readonly key: string;
  /**
  * Lists the items of remote folders in simple and list browsing. The remote content is cached according to the value of the 'Retrieval Cache Period'. Default value is 'false'. This field exists in the API but not in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#list_remote_folder_items DataArtifactoryRemoteCondaRepository#list_remote_folder_items}
  */
  readonly listRemoteFolderItems?: boolean | cdktf.IResolvable;
  /**
  * The local address to be used when creating connections. Useful for specifying the interface to use on systems with multiple network interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#local_address DataArtifactoryRemoteCondaRepository#local_address}
  */
  readonly localAddress?: string;
  /**
  * Metadata Retrieval Cache Timeout (Sec) in the UI.This value refers to the number of seconds to wait for retrieval from the remote before serving locally cached artifact or fail the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#metadata_retrieval_timeout_secs DataArtifactoryRemoteCondaRepository#metadata_retrieval_timeout_secs}
  */
  readonly metadataRetrievalTimeoutSecs?: number;
  /**
  * The set of mime types that should override the block_mismatching_mime_types setting. Eg: 'application/json,application/xml'. Default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#mismatching_mime_types_override_list DataArtifactoryRemoteCondaRepository#mismatching_mime_types_override_list}
  */
  readonly mismatchingMimeTypesOverrideList?: string;
  /**
  * Missed Retrieval Cache Period (Sec) in the UI. The number of seconds to cache artifact retrieval misses (artifact not found). A value of 0 indicates no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#missed_cache_period_seconds DataArtifactoryRemoteCondaRepository#missed_cache_period_seconds}
  */
  readonly missedCachePeriodSeconds?: number;
  /**
  * Internal description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#notes DataArtifactoryRemoteCondaRepository#notes}
  */
  readonly notes?: string;
  /**
  * If set, Artifactory does not try to fetch remote artifacts. Only locally-cached artifacts are retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#offline DataArtifactoryRemoteCondaRepository#offline}
  */
  readonly offline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#password DataArtifactoryRemoteCondaRepository#password}
  */
  readonly password?: string;
  /**
  * Setting Priority Resolution takes precedence over the resolution order when resolving virtual repositories. Setting repositories with priority will cause metadata to be merged only from repositories set with a priority. If a package is not found in those repositories, Artifactory will merge from repositories marked as non-priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#priority_resolution DataArtifactoryRemoteCondaRepository#priority_resolution}
  */
  readonly priorityResolution?: boolean | cdktf.IResolvable;
  /**
  * Before Artifactory 7.53.1, up to 2 values (`DEV` and `PROD`) are allowed. From 7.53.1 to 7.107.1, only one value is allowed. From 7.107.1, multiple values are allowed.The attribute should only be used if the repository is already assigned to the existing project. If not, the attribute will be ignored by Artifactory, but will remain in the Terraform state, which will create state drift during the update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#project_environments DataArtifactoryRemoteCondaRepository#project_environments}
  */
  readonly projectEnvironments?: string[];
  /**
  * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#project_key DataArtifactoryRemoteCondaRepository#project_key}
  */
  readonly projectKey?: string;
  /**
  * List of property set names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#property_sets DataArtifactoryRemoteCondaRepository#property_sets}
  */
  readonly propertySets?: string[];
  /**
  * Proxy key from Artifactory Proxies settings. Can't be set if `disable_proxy = true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#proxy DataArtifactoryRemoteCondaRepository#proxy}
  */
  readonly proxy?: string;
  /**
  * Custom HTTP query parameters that will be automatically included in all remote resource requests. For example: `param1=val1&param2=val2&param3=val3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#query_params DataArtifactoryRemoteCondaRepository#query_params}
  */
  readonly queryParams?: string;
  /**
  * Repository layout key for the remote layout mapping. Repository can be created without this attribute (or set to an empty string). Once it's set, it can't be removed by passing an empty string or removing the attribute, that will be ignored by the Artifactory API. UI shows an error message, if the user tries to remove the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#remote_repo_layout_ref DataArtifactoryRemoteCondaRepository#remote_repo_layout_ref}
  */
  readonly remoteRepoLayoutRef?: string;
  /**
  * Repository layout key for the remote repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#repo_layout_ref DataArtifactoryRemoteCondaRepository#repo_layout_ref}
  */
  readonly repoLayoutRef?: string;
  /**
  * Metadata Retrieval Cache Period (Sec) in the UI. This value refers to the number of seconds to cache metadata files before checking for newer versions on remote server. A value of 0 indicates no caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#retrieval_cache_period_seconds DataArtifactoryRemoteCondaRepository#retrieval_cache_period_seconds}
  */
  readonly retrievalCachePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#share_configuration DataArtifactoryRemoteCondaRepository#share_configuration}
  */
  readonly shareConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Network timeout (in ms) to use when establishing a connection and for unanswered requests. Timing out on a network operation is considered a retrieval failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#socket_timeout_millis DataArtifactoryRemoteCondaRepository#socket_timeout_millis}
  */
  readonly socketTimeoutMillis?: number;
  /**
  * When set, the repository should store cached artifacts locally. When not set, artifacts are not stored locally, and direct repository-to-client streaming is used. This can be useful for multi-server setups over a high-speed LAN, with one Artifactory caching certain data on central storage, and streaming it directly to satellite pass-though Artifactory servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#store_artifacts_locally DataArtifactoryRemoteCondaRepository#store_artifacts_locally}
  */
  readonly storeArtifactsLocally?: boolean | cdktf.IResolvable;
  /**
  * When set, remote artifacts are fetched along with their properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#synchronize_properties DataArtifactoryRemoteCondaRepository#synchronize_properties}
  */
  readonly synchronizeProperties?: boolean | cdktf.IResolvable;
  /**
  * Unused Artifacts Cleanup Period (Hr) in the UI. The number of hours to wait before an artifact is deemed 'unused' and eligible for cleanup from the repository. A value of 0 means automatic cleanup of cached artifacts is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#unused_artifacts_cleanup_period_hours DataArtifactoryRemoteCondaRepository#unused_artifacts_cleanup_period_hours}
  */
  readonly unusedArtifactsCleanupPeriodHours?: number;
  /**
  * This is a URL to the remote registry. Consider using HTTPS to ensure a secure connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#url DataArtifactoryRemoteCondaRepository#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#username DataArtifactoryRemoteCondaRepository#username}
  */
  readonly username?: string;
  /**
  * Enable Indexing In Xray. Repository will be indexed with the default retention period. You will be able to change it via Xray settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#xray_index DataArtifactoryRemoteCondaRepository#xray_index}
  */
  readonly xrayIndex?: boolean | cdktf.IResolvable;
  /**
  * content_synchronisation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#content_synchronisation DataArtifactoryRemoteCondaRepository#content_synchronisation}
  */
  readonly contentSynchronisation?: DataArtifactoryRemoteCondaRepositoryContentSynchronisation;
}
export interface DataArtifactoryRemoteCondaRepositoryContentSynchronisation {
  /**
  * If set, Remote repository proxies a local or remote repository from another instance of Artifactory. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#enabled DataArtifactoryRemoteCondaRepository#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set, properties for artifacts that have been cached in this repository will be updated if they are modified in the artifact hosted at the remote Artifactory instance. The trigger to synchronize the properties is download of the artifact from the remote repository cache of the local Artifactory instance. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#properties_enabled DataArtifactoryRemoteCondaRepository#properties_enabled}
  */
  readonly propertiesEnabled?: boolean | cdktf.IResolvable;
  /**
  * If set, Artifactory displays an indication on cached items if they have been deleted from the corresponding repository in the remote Artifactory instance. Default value is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#source_origin_absence_detection DataArtifactoryRemoteCondaRepository#source_origin_absence_detection}
  */
  readonly sourceOriginAbsenceDetection?: boolean | cdktf.IResolvable;
  /**
  * If set, Artifactory will notify the remote instance whenever an artifact in the Smart Remote Repository is downloaded locally so that it can update its download counter. Note that if this option is not set, there may be a discrepancy between the number of artifacts reported to have been downloaded in the different Artifactory instances of the proxy chain. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#statistics_enabled DataArtifactoryRemoteCondaRepository#statistics_enabled}
  */
  readonly statisticsEnabled?: boolean | cdktf.IResolvable;
}

export function dataArtifactoryRemoteCondaRepositoryContentSynchronisationToTerraform(struct?: DataArtifactoryRemoteCondaRepositoryContentSynchronisationOutputReference | DataArtifactoryRemoteCondaRepositoryContentSynchronisation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    properties_enabled: cdktf.booleanToTerraform(struct!.propertiesEnabled),
    source_origin_absence_detection: cdktf.booleanToTerraform(struct!.sourceOriginAbsenceDetection),
    statistics_enabled: cdktf.booleanToTerraform(struct!.statisticsEnabled),
  }
}


export function dataArtifactoryRemoteCondaRepositoryContentSynchronisationToHclTerraform(struct?: DataArtifactoryRemoteCondaRepositoryContentSynchronisationOutputReference | DataArtifactoryRemoteCondaRepositoryContentSynchronisation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    properties_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.propertiesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_origin_absence_detection: {
      value: cdktf.booleanToHclTerraform(struct!.sourceOriginAbsenceDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    statistics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.statisticsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArtifactoryRemoteCondaRepositoryContentSynchronisationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataArtifactoryRemoteCondaRepositoryContentSynchronisation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._propertiesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesEnabled = this._propertiesEnabled;
    }
    if (this._sourceOriginAbsenceDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceOriginAbsenceDetection = this._sourceOriginAbsenceDetection;
    }
    if (this._statisticsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticsEnabled = this._statisticsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataArtifactoryRemoteCondaRepositoryContentSynchronisation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._propertiesEnabled = undefined;
      this._sourceOriginAbsenceDetection = undefined;
      this._statisticsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._propertiesEnabled = value.propertiesEnabled;
      this._sourceOriginAbsenceDetection = value.sourceOriginAbsenceDetection;
      this._statisticsEnabled = value.statisticsEnabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // properties_enabled - computed: false, optional: true, required: false
  private _propertiesEnabled?: boolean | cdktf.IResolvable; 
  public get propertiesEnabled() {
    return this.getBooleanAttribute('properties_enabled');
  }
  public set propertiesEnabled(value: boolean | cdktf.IResolvable) {
    this._propertiesEnabled = value;
  }
  public resetPropertiesEnabled() {
    this._propertiesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesEnabledInput() {
    return this._propertiesEnabled;
  }

  // source_origin_absence_detection - computed: false, optional: true, required: false
  private _sourceOriginAbsenceDetection?: boolean | cdktf.IResolvable; 
  public get sourceOriginAbsenceDetection() {
    return this.getBooleanAttribute('source_origin_absence_detection');
  }
  public set sourceOriginAbsenceDetection(value: boolean | cdktf.IResolvable) {
    this._sourceOriginAbsenceDetection = value;
  }
  public resetSourceOriginAbsenceDetection() {
    this._sourceOriginAbsenceDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOriginAbsenceDetectionInput() {
    return this._sourceOriginAbsenceDetection;
  }

  // statistics_enabled - computed: false, optional: true, required: false
  private _statisticsEnabled?: boolean | cdktf.IResolvable; 
  public get statisticsEnabled() {
    return this.getBooleanAttribute('statistics_enabled');
  }
  public set statisticsEnabled(value: boolean | cdktf.IResolvable) {
    this._statisticsEnabled = value;
  }
  public resetStatisticsEnabled() {
    this._statisticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsEnabledInput() {
    return this._statisticsEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository artifactory_remote_conda_repository}
*/
export class DataArtifactoryRemoteCondaRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_remote_conda_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryRemoteCondaRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryRemoteCondaRepository to import
  * @param importFromId The id of the existing DataArtifactoryRemoteCondaRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryRemoteCondaRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_remote_conda_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/data-sources/remote_conda_repository artifactory_remote_conda_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryRemoteCondaRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryRemoteCondaRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_remote_conda_repository',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAnyHostAuth = config.allowAnyHostAuth;
    this._archiveBrowsingEnabled = config.archiveBrowsingEnabled;
    this._assumedOfflinePeriodSecs = config.assumedOfflinePeriodSecs;
    this._blackedOut = config.blackedOut;
    this._blockMismatchingMimeTypes = config.blockMismatchingMimeTypes;
    this._bypassHeadRequests = config.bypassHeadRequests;
    this._cdnRedirect = config.cdnRedirect;
    this._clientTlsCertificate = config.clientTlsCertificate;
    this._description = config.description;
    this._disableProxy = config.disableProxy;
    this._disableUrlNormalization = config.disableUrlNormalization;
    this._downloadDirect = config.downloadDirect;
    this._enableCookieManagement = config.enableCookieManagement;
    this._excludesPattern = config.excludesPattern;
    this._hardFail = config.hardFail;
    this._id = config.id;
    this._includesPattern = config.includesPattern;
    this._key = config.key;
    this._listRemoteFolderItems = config.listRemoteFolderItems;
    this._localAddress = config.localAddress;
    this._metadataRetrievalTimeoutSecs = config.metadataRetrievalTimeoutSecs;
    this._mismatchingMimeTypesOverrideList = config.mismatchingMimeTypesOverrideList;
    this._missedCachePeriodSeconds = config.missedCachePeriodSeconds;
    this._notes = config.notes;
    this._offline = config.offline;
    this._password = config.password;
    this._priorityResolution = config.priorityResolution;
    this._projectEnvironments = config.projectEnvironments;
    this._projectKey = config.projectKey;
    this._propertySets = config.propertySets;
    this._proxy = config.proxy;
    this._queryParams = config.queryParams;
    this._remoteRepoLayoutRef = config.remoteRepoLayoutRef;
    this._repoLayoutRef = config.repoLayoutRef;
    this._retrievalCachePeriodSeconds = config.retrievalCachePeriodSeconds;
    this._shareConfiguration = config.shareConfiguration;
    this._socketTimeoutMillis = config.socketTimeoutMillis;
    this._storeArtifactsLocally = config.storeArtifactsLocally;
    this._synchronizeProperties = config.synchronizeProperties;
    this._unusedArtifactsCleanupPeriodHours = config.unusedArtifactsCleanupPeriodHours;
    this._url = config.url;
    this._username = config.username;
    this._xrayIndex = config.xrayIndex;
    this._contentSynchronisation.internalValue = config.contentSynchronisation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_any_host_auth - computed: false, optional: true, required: false
  private _allowAnyHostAuth?: boolean | cdktf.IResolvable; 
  public get allowAnyHostAuth() {
    return this.getBooleanAttribute('allow_any_host_auth');
  }
  public set allowAnyHostAuth(value: boolean | cdktf.IResolvable) {
    this._allowAnyHostAuth = value;
  }
  public resetAllowAnyHostAuth() {
    this._allowAnyHostAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyHostAuthInput() {
    return this._allowAnyHostAuth;
  }

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

  // assumed_offline_period_secs - computed: false, optional: true, required: false
  private _assumedOfflinePeriodSecs?: number; 
  public get assumedOfflinePeriodSecs() {
    return this.getNumberAttribute('assumed_offline_period_secs');
  }
  public set assumedOfflinePeriodSecs(value: number) {
    this._assumedOfflinePeriodSecs = value;
  }
  public resetAssumedOfflinePeriodSecs() {
    this._assumedOfflinePeriodSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumedOfflinePeriodSecsInput() {
    return this._assumedOfflinePeriodSecs;
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

  // block_mismatching_mime_types - computed: false, optional: true, required: false
  private _blockMismatchingMimeTypes?: boolean | cdktf.IResolvable; 
  public get blockMismatchingMimeTypes() {
    return this.getBooleanAttribute('block_mismatching_mime_types');
  }
  public set blockMismatchingMimeTypes(value: boolean | cdktf.IResolvable) {
    this._blockMismatchingMimeTypes = value;
  }
  public resetBlockMismatchingMimeTypes() {
    this._blockMismatchingMimeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMismatchingMimeTypesInput() {
    return this._blockMismatchingMimeTypes;
  }

  // bypass_head_requests - computed: false, optional: true, required: false
  private _bypassHeadRequests?: boolean | cdktf.IResolvable; 
  public get bypassHeadRequests() {
    return this.getBooleanAttribute('bypass_head_requests');
  }
  public set bypassHeadRequests(value: boolean | cdktf.IResolvable) {
    this._bypassHeadRequests = value;
  }
  public resetBypassHeadRequests() {
    this._bypassHeadRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassHeadRequestsInput() {
    return this._bypassHeadRequests;
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

  // client_tls_certificate - computed: true, optional: true, required: false
  private _clientTlsCertificate?: string; 
  public get clientTlsCertificate() {
    return this.getStringAttribute('client_tls_certificate');
  }
  public set clientTlsCertificate(value: string) {
    this._clientTlsCertificate = value;
  }
  public resetClientTlsCertificate() {
    this._clientTlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertificateInput() {
    return this._clientTlsCertificate;
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

  // disable_url_normalization - computed: false, optional: true, required: false
  private _disableUrlNormalization?: boolean | cdktf.IResolvable; 
  public get disableUrlNormalization() {
    return this.getBooleanAttribute('disable_url_normalization');
  }
  public set disableUrlNormalization(value: boolean | cdktf.IResolvable) {
    this._disableUrlNormalization = value;
  }
  public resetDisableUrlNormalization() {
    this._disableUrlNormalization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUrlNormalizationInput() {
    return this._disableUrlNormalization;
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

  // enable_cookie_management - computed: false, optional: true, required: false
  private _enableCookieManagement?: boolean | cdktf.IResolvable; 
  public get enableCookieManagement() {
    return this.getBooleanAttribute('enable_cookie_management');
  }
  public set enableCookieManagement(value: boolean | cdktf.IResolvable) {
    this._enableCookieManagement = value;
  }
  public resetEnableCookieManagement() {
    this._enableCookieManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCookieManagementInput() {
    return this._enableCookieManagement;
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

  // hard_fail - computed: false, optional: true, required: false
  private _hardFail?: boolean | cdktf.IResolvable; 
  public get hardFail() {
    return this.getBooleanAttribute('hard_fail');
  }
  public set hardFail(value: boolean | cdktf.IResolvable) {
    this._hardFail = value;
  }
  public resetHardFail() {
    this._hardFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardFailInput() {
    return this._hardFail;
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

  // list_remote_folder_items - computed: false, optional: true, required: false
  private _listRemoteFolderItems?: boolean | cdktf.IResolvable; 
  public get listRemoteFolderItems() {
    return this.getBooleanAttribute('list_remote_folder_items');
  }
  public set listRemoteFolderItems(value: boolean | cdktf.IResolvable) {
    this._listRemoteFolderItems = value;
  }
  public resetListRemoteFolderItems() {
    this._listRemoteFolderItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listRemoteFolderItemsInput() {
    return this._listRemoteFolderItems;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // metadata_retrieval_timeout_secs - computed: false, optional: true, required: false
  private _metadataRetrievalTimeoutSecs?: number; 
  public get metadataRetrievalTimeoutSecs() {
    return this.getNumberAttribute('metadata_retrieval_timeout_secs');
  }
  public set metadataRetrievalTimeoutSecs(value: number) {
    this._metadataRetrievalTimeoutSecs = value;
  }
  public resetMetadataRetrievalTimeoutSecs() {
    this._metadataRetrievalTimeoutSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataRetrievalTimeoutSecsInput() {
    return this._metadataRetrievalTimeoutSecs;
  }

  // mismatching_mime_types_override_list - computed: false, optional: true, required: false
  private _mismatchingMimeTypesOverrideList?: string; 
  public get mismatchingMimeTypesOverrideList() {
    return this.getStringAttribute('mismatching_mime_types_override_list');
  }
  public set mismatchingMimeTypesOverrideList(value: string) {
    this._mismatchingMimeTypesOverrideList = value;
  }
  public resetMismatchingMimeTypesOverrideList() {
    this._mismatchingMimeTypesOverrideList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchingMimeTypesOverrideListInput() {
    return this._mismatchingMimeTypesOverrideList;
  }

  // missed_cache_period_seconds - computed: false, optional: true, required: false
  private _missedCachePeriodSeconds?: number; 
  public get missedCachePeriodSeconds() {
    return this.getNumberAttribute('missed_cache_period_seconds');
  }
  public set missedCachePeriodSeconds(value: number) {
    this._missedCachePeriodSeconds = value;
  }
  public resetMissedCachePeriodSeconds() {
    this._missedCachePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missedCachePeriodSecondsInput() {
    return this._missedCachePeriodSeconds;
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

  // offline - computed: false, optional: true, required: false
  private _offline?: boolean | cdktf.IResolvable; 
  public get offline() {
    return this.getBooleanAttribute('offline');
  }
  public set offline(value: boolean | cdktf.IResolvable) {
    this._offline = value;
  }
  public resetOffline() {
    this._offline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineInput() {
    return this._offline;
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: string; 
  public get queryParams() {
    return this.getStringAttribute('query_params');
  }
  public set queryParams(value: string) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }

  // remote_repo_layout_ref - computed: false, optional: true, required: false
  private _remoteRepoLayoutRef?: string; 
  public get remoteRepoLayoutRef() {
    return this.getStringAttribute('remote_repo_layout_ref');
  }
  public set remoteRepoLayoutRef(value: string) {
    this._remoteRepoLayoutRef = value;
  }
  public resetRemoteRepoLayoutRef() {
    this._remoteRepoLayoutRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRepoLayoutRefInput() {
    return this._remoteRepoLayoutRef;
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

  // retrieval_cache_period_seconds - computed: false, optional: true, required: false
  private _retrievalCachePeriodSeconds?: number; 
  public get retrievalCachePeriodSeconds() {
    return this.getNumberAttribute('retrieval_cache_period_seconds');
  }
  public set retrievalCachePeriodSeconds(value: number) {
    this._retrievalCachePeriodSeconds = value;
  }
  public resetRetrievalCachePeriodSeconds() {
    this._retrievalCachePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalCachePeriodSecondsInput() {
    return this._retrievalCachePeriodSeconds;
  }

  // share_configuration - computed: true, optional: true, required: false
  private _shareConfiguration?: boolean | cdktf.IResolvable; 
  public get shareConfiguration() {
    return this.getBooleanAttribute('share_configuration');
  }
  public set shareConfiguration(value: boolean | cdktf.IResolvable) {
    this._shareConfiguration = value;
  }
  public resetShareConfiguration() {
    this._shareConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareConfigurationInput() {
    return this._shareConfiguration;
  }

  // socket_timeout_millis - computed: false, optional: true, required: false
  private _socketTimeoutMillis?: number; 
  public get socketTimeoutMillis() {
    return this.getNumberAttribute('socket_timeout_millis');
  }
  public set socketTimeoutMillis(value: number) {
    this._socketTimeoutMillis = value;
  }
  public resetSocketTimeoutMillis() {
    this._socketTimeoutMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketTimeoutMillisInput() {
    return this._socketTimeoutMillis;
  }

  // store_artifacts_locally - computed: false, optional: true, required: false
  private _storeArtifactsLocally?: boolean | cdktf.IResolvable; 
  public get storeArtifactsLocally() {
    return this.getBooleanAttribute('store_artifacts_locally');
  }
  public set storeArtifactsLocally(value: boolean | cdktf.IResolvable) {
    this._storeArtifactsLocally = value;
  }
  public resetStoreArtifactsLocally() {
    this._storeArtifactsLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeArtifactsLocallyInput() {
    return this._storeArtifactsLocally;
  }

  // synchronize_properties - computed: false, optional: true, required: false
  private _synchronizeProperties?: boolean | cdktf.IResolvable; 
  public get synchronizeProperties() {
    return this.getBooleanAttribute('synchronize_properties');
  }
  public set synchronizeProperties(value: boolean | cdktf.IResolvable) {
    this._synchronizeProperties = value;
  }
  public resetSynchronizeProperties() {
    this._synchronizeProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizePropertiesInput() {
    return this._synchronizeProperties;
  }

  // unused_artifacts_cleanup_period_hours - computed: false, optional: true, required: false
  private _unusedArtifactsCleanupPeriodHours?: number; 
  public get unusedArtifactsCleanupPeriodHours() {
    return this.getNumberAttribute('unused_artifacts_cleanup_period_hours');
  }
  public set unusedArtifactsCleanupPeriodHours(value: number) {
    this._unusedArtifactsCleanupPeriodHours = value;
  }
  public resetUnusedArtifactsCleanupPeriodHours() {
    this._unusedArtifactsCleanupPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedArtifactsCleanupPeriodHoursInput() {
    return this._unusedArtifactsCleanupPeriodHours;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // content_synchronisation - computed: false, optional: true, required: false
  private _contentSynchronisation = new DataArtifactoryRemoteCondaRepositoryContentSynchronisationOutputReference(this, "content_synchronisation");
  public get contentSynchronisation() {
    return this._contentSynchronisation;
  }
  public putContentSynchronisation(value: DataArtifactoryRemoteCondaRepositoryContentSynchronisation) {
    this._contentSynchronisation.internalValue = value;
  }
  public resetContentSynchronisation() {
    this._contentSynchronisation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSynchronisationInput() {
    return this._contentSynchronisation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_any_host_auth: cdktf.booleanToTerraform(this._allowAnyHostAuth),
      archive_browsing_enabled: cdktf.booleanToTerraform(this._archiveBrowsingEnabled),
      assumed_offline_period_secs: cdktf.numberToTerraform(this._assumedOfflinePeriodSecs),
      blacked_out: cdktf.booleanToTerraform(this._blackedOut),
      block_mismatching_mime_types: cdktf.booleanToTerraform(this._blockMismatchingMimeTypes),
      bypass_head_requests: cdktf.booleanToTerraform(this._bypassHeadRequests),
      cdn_redirect: cdktf.booleanToTerraform(this._cdnRedirect),
      client_tls_certificate: cdktf.stringToTerraform(this._clientTlsCertificate),
      description: cdktf.stringToTerraform(this._description),
      disable_proxy: cdktf.booleanToTerraform(this._disableProxy),
      disable_url_normalization: cdktf.booleanToTerraform(this._disableUrlNormalization),
      download_direct: cdktf.booleanToTerraform(this._downloadDirect),
      enable_cookie_management: cdktf.booleanToTerraform(this._enableCookieManagement),
      excludes_pattern: cdktf.stringToTerraform(this._excludesPattern),
      hard_fail: cdktf.booleanToTerraform(this._hardFail),
      id: cdktf.stringToTerraform(this._id),
      includes_pattern: cdktf.stringToTerraform(this._includesPattern),
      key: cdktf.stringToTerraform(this._key),
      list_remote_folder_items: cdktf.booleanToTerraform(this._listRemoteFolderItems),
      local_address: cdktf.stringToTerraform(this._localAddress),
      metadata_retrieval_timeout_secs: cdktf.numberToTerraform(this._metadataRetrievalTimeoutSecs),
      mismatching_mime_types_override_list: cdktf.stringToTerraform(this._mismatchingMimeTypesOverrideList),
      missed_cache_period_seconds: cdktf.numberToTerraform(this._missedCachePeriodSeconds),
      notes: cdktf.stringToTerraform(this._notes),
      offline: cdktf.booleanToTerraform(this._offline),
      password: cdktf.stringToTerraform(this._password),
      priority_resolution: cdktf.booleanToTerraform(this._priorityResolution),
      project_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectEnvironments),
      project_key: cdktf.stringToTerraform(this._projectKey),
      property_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertySets),
      proxy: cdktf.stringToTerraform(this._proxy),
      query_params: cdktf.stringToTerraform(this._queryParams),
      remote_repo_layout_ref: cdktf.stringToTerraform(this._remoteRepoLayoutRef),
      repo_layout_ref: cdktf.stringToTerraform(this._repoLayoutRef),
      retrieval_cache_period_seconds: cdktf.numberToTerraform(this._retrievalCachePeriodSeconds),
      share_configuration: cdktf.booleanToTerraform(this._shareConfiguration),
      socket_timeout_millis: cdktf.numberToTerraform(this._socketTimeoutMillis),
      store_artifacts_locally: cdktf.booleanToTerraform(this._storeArtifactsLocally),
      synchronize_properties: cdktf.booleanToTerraform(this._synchronizeProperties),
      unused_artifacts_cleanup_period_hours: cdktf.numberToTerraform(this._unusedArtifactsCleanupPeriodHours),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      xray_index: cdktf.booleanToTerraform(this._xrayIndex),
      content_synchronisation: dataArtifactoryRemoteCondaRepositoryContentSynchronisationToTerraform(this._contentSynchronisation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_any_host_auth: {
        value: cdktf.booleanToHclTerraform(this._allowAnyHostAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_browsing_enabled: {
        value: cdktf.booleanToHclTerraform(this._archiveBrowsingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assumed_offline_period_secs: {
        value: cdktf.numberToHclTerraform(this._assumedOfflinePeriodSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blacked_out: {
        value: cdktf.booleanToHclTerraform(this._blackedOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_mismatching_mime_types: {
        value: cdktf.booleanToHclTerraform(this._blockMismatchingMimeTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_head_requests: {
        value: cdktf.booleanToHclTerraform(this._bypassHeadRequests),
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
      client_tls_certificate: {
        value: cdktf.stringToHclTerraform(this._clientTlsCertificate),
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
      disable_proxy: {
        value: cdktf.booleanToHclTerraform(this._disableProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_url_normalization: {
        value: cdktf.booleanToHclTerraform(this._disableUrlNormalization),
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
      enable_cookie_management: {
        value: cdktf.booleanToHclTerraform(this._enableCookieManagement),
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
      hard_fail: {
        value: cdktf.booleanToHclTerraform(this._hardFail),
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
      list_remote_folder_items: {
        value: cdktf.booleanToHclTerraform(this._listRemoteFolderItems),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_retrieval_timeout_secs: {
        value: cdktf.numberToHclTerraform(this._metadataRetrievalTimeoutSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mismatching_mime_types_override_list: {
        value: cdktf.stringToHclTerraform(this._mismatchingMimeTypesOverrideList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      missed_cache_period_seconds: {
        value: cdktf.numberToHclTerraform(this._missedCachePeriodSeconds),
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
      offline: {
        value: cdktf.booleanToHclTerraform(this._offline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      query_params: {
        value: cdktf.stringToHclTerraform(this._queryParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_repo_layout_ref: {
        value: cdktf.stringToHclTerraform(this._remoteRepoLayoutRef),
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
      retrieval_cache_period_seconds: {
        value: cdktf.numberToHclTerraform(this._retrievalCachePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      share_configuration: {
        value: cdktf.booleanToHclTerraform(this._shareConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      socket_timeout_millis: {
        value: cdktf.numberToHclTerraform(this._socketTimeoutMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      store_artifacts_locally: {
        value: cdktf.booleanToHclTerraform(this._storeArtifactsLocally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      synchronize_properties: {
        value: cdktf.booleanToHclTerraform(this._synchronizeProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unused_artifacts_cleanup_period_hours: {
        value: cdktf.numberToHclTerraform(this._unusedArtifactsCleanupPeriodHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      xray_index: {
        value: cdktf.booleanToHclTerraform(this._xrayIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content_synchronisation: {
        value: dataArtifactoryRemoteCondaRepositoryContentSynchronisationToHclTerraform(this._contentSynchronisation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataArtifactoryRemoteCondaRepositoryContentSynchronisationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
